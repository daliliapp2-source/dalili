"use server";

import { DB, GeneralResponse } from "@/lib/db/repo";
import { DataModelTODB, SocialMediaplatform } from "./clients";
import { MenuItem } from "@/components/templates/new/t8tempo/mock";
import { createClient } from "@/lib/supabase/server";
import { deleteImage, uploadImage } from "@/lib/cloudnery/cloudinary";
import { Profilexm } from "@/components/templates/new/t8tempo/menu/FreeTemplateA";

// افتراض: هذا الـ Action يجلب بيانات ملف شخصي معين من قاعدة البيانات
// سيتم جلب الـ logo و banner كـ URLs (string) هنا، وليس كـ File
interface DataModelFromDB {
  id: string;
  title: string;
  description: string;
  address: string;
  logoUrl: string | null; // URL للشعار
  bannerUrl: string | null; // URL للبانر
  socialLinks: SocialMediaplatform[];
  selectedItems: MenuItem[];
  selectedTheme: string;
}

// دالة لجلب البيانات
export async function getProfile(id: string): Promise<GeneralResponse> {
  // هنا ستقوم بمنطق الجلب الحقيقي
  
   const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return {
      status: false,
      error: "يجب تسجيل الدخول أولاً",
      data: null
    };
  
  const { data: profiledata , error } = await DB.profiles.getAllDataOptimized(id);
 
// console.log(profiledata)
    if (error) 
        return {
      status: false,
      error:error.message,
      data: null
    };

   return {
      status: true,
      error: null,
      data: profiledata
    };
   
}



// دالة لتعديل البيانات
// الـ payload هو نفسه الـ DataModelTODB، لكنه سيحتوي على ملفات Logo/Banner جديدة أو null إذا لم تتغير.
export async function updateProfile(model: DataModelTODB): Promise<GeneralResponse> {
  // console.log("start update")
  // console.log("##############################")
  // console.log("##############################")
  // console.log("##############################")
  // console.log(model)
  
  // console.log("##############################")
  // console.log("##############################")
  


   const supabase = await createClient();
const { data: { user } } = await supabase.auth.getUser();
  if (!user) return {
  status: false,
  data: null,
  error: "سجل الدخول اولا"
}
  // console.log("get user Done")

// التحقق من البروفايل 
const { data: existing } = await DB.profiles.getById(model.id);
  if (!existing || existing.user_id !== user.id) 
    return {
      status: false,
      error: "البروفايل غير موجود",
      data: null
    };
  // console.log("get profile Done")

 let logoUrl = existing.logo_url, logo_public_id = existing.logo_public_id;
 let bannarUrl= existing.banner_url, bannar_public_id= existing.banner_public_id;

  if (model.banner) {
    if (bannar_public_id) await deleteImage(bannar_public_id);
    const upload = await uploadImage(model.banner, false);
    bannarUrl = upload.url; bannar_public_id = upload.public_id;
  }
  if (model.logo) {
    if (logo_public_id) await deleteImage(logo_public_id);
    const upload = await uploadImage(model.logo, false);
    logoUrl = upload.url; logo_public_id = upload.public_id;
  }
  // console.log("handle images Done")

const { data: updatedprofile, error: profileError } = await DB.profiles.update(model.id, {
  title: model.title,
  description: model.description,
  address: model.address,
  banner_url: bannarUrl,
  logo_url: logoUrl,
  banner_public_id: bannar_public_id,
  logo_public_id: logo_public_id,
  profile_theme: model.selectedTheme,
  is_active: true,
  });
  if (profileError || !updatedprofile) return {
      status: false,
      error: "خطا في تحديث البروفايل ",
      data: null
    };
  // console.log("update master profile Done")


    await DB.profile_menu_items.deleteWithprofile(model.id);
    const itemsInsert = model.selectedItems.map(p => ({ profile_id: model.id, item_id: p.id }));
    const { data: newprofileItem, error: profileItemError } = await DB.profile_menu_items.createMany(itemsInsert);
    if (profileItemError || !newprofileItem ) {
      
      return {
  status: false,
  data: null,
  error: "حدث خطأ اثناء اضافة عناصر الملف الشخصي"

};}
  
  // console.log("update items profile Done")

  await DB.profile_contacts.deleteWithprofile(model.id);
    
  const profileSocial = model.socialLinks.map(p => ({
        user_id: user.id,
        profile_id: model.id,
        contact_type_id: p.social.id,
        value: p.value,
        is_active: p.is_Active
    }));
    const { data: newprofileContacts, error: profileContactError } = await DB.profile_contacts.createMany(profileSocial);
  
   
  if (profileContactError || !newprofileContacts ) 
 return {
  status: false,
  data: null,
  error: "حدث خطأ اثناء اضافة الروابط الاجتماعية للملف الشخصي" + profileContactError
};

  // console.log("update social profile Done")



  // console.log("start storage")


  // create json data 
const userprof = updatedprofile[0];
const createdJson: Profilexm = {
  id: userprof.id,
  user_id: userprof.user_id,
  banner: userprof.banner_url || "",
  logo: userprof.logo_url || "",
  title: userprof.title || "",
  description: userprof.description || "",
  address: userprof.address || "",
  profile_theme: userprof.profile_theme || "",
  link_slug: userprof.link_slug || "",
  socials: model.socialLinks.map((s) => ({
    id: s.social.id,
    name: s.social.name,
    value: s.value,
    open_type: s.social.open_type,
    icon: s.social.icon
  })) || [],
  menuItems: model.selectedItems.map((i) => ({
    id: i.id,
    name: i.name,
    description:  i.description,
    image:  i.image,
    category: i.category,
    prices: i.prices.map(p => ({
      id: p.id,
      lable: p.lable,
      amount: p.amount
    }))
  })) || [],
  
};
const fileBody = JSON.stringify(createdJson);
const fileName = userprof.user_id+"/"+ userprof.id+".json";

// upload it 

const {error: storageError } = await supabase.storage
  .from("public_profiles")
  .upload(fileName, fileBody, {
    contentType: "application/json",
    upsert: true, 
    cacheControl: "max-age=300, stale-while-revalidate=31536000", 
  });
  // console.log("end sto/rage")

  if (storageError){
  console.error("Storage Upload Error:", storageError);
  return {
    status: false,
    data: null,
    error: " Storage Upload Error: " + storageError
  };
    }
  // console.log("end storage")


 return {
      status: true,
      error: null,
      data: "تم التعديل بنجاح"
    };

}


/*

export const AddProfileToDb = async (profile: DataModelTODB) :Promise<GeneralResponse> => {



const payloadq = {
  uid: userprof.user_id,
  pid: userprof.id,
};

const slug = encryptSlug(payloadq);
await DB.profiles.update(userprof.id, {
  link_slug: slug
});
////////////////////////////////////////////////////////////////
// نهاية خطوة الرفع
////////////////////////////////////////////////////////////////

 return{
  status: true,
  data:slug,
  error: null
};

};

*/