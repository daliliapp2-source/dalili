'use server'

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { DB, GeneralResponse } from "@/lib/db/repo";
import { uploadImage } from "@/lib/cloudnery/cloudinary";
import { decryptSlug } from "@/lib/slug-crypto";
import { getProfile } from "../../profile/edit/[id]/actions";
import { Profilexm } from "@/components/templates/new/t8tempo/menu/FreeTemplateA";
import { SocialMediaplatform } from "../../profile/edit/[id]/clients";
import { MenuItem } from "@/components/templates/new/t8tempo/mock";

export interface PaymentData {
  profilesCount: number;
  itemsCount: number;
  months: number;
  price: number;
//  phoneNumber: string;
//  recieverphoneNumber: string;
  selectedCash: "vodafone" | "etisalat" | "instapay";

imageFile?: File | null;
}


export interface ProfileData {
  id: string;
  name: string;
  logo: string | null;
  banner: string | null;
  hasItems: boolean;
  isActive: boolean;
  link: string | null;
}

export interface CurrentPlan {
  planName: string;
  profilesUsed: number;
  profilesLimit: number;
  itemsUsed: number;
  itemsLimit: number;
  amount: number;
  daysUntilRenewal: number;
}


function getname(type: string | undefined) {
if (type == "paid") {
  return "الخطة المدفوعة"
}else{
  return "الخطة المجانية"
}
 }


export async function getDashboardData() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return {
      profiles: null,
      plan: null
    };
  }

  
  // 👇 جلب الاشتراك
  // const { data: subscriptions } = await supabase
  //   .from('user_subscriptions')
  //   .select('*')
  //   .eq('user_id', userId)
  //   .limit(1)
  //   .single()

  const { data: xprofiles } = await DB.profiles.getAll(user.id);
  const { data: items } = await DB.items.getAll(user.id);
  const { data: subscriptions } = (await DB.user_subscriptions.getByUser(user.id));
  const subscription = subscriptions?.[0] ?? null


  const getprofileItems = async (profileId: string) => {
    const { hasItems } = await DB.profile_menu_items.hasItems(profileId);
    return hasItems;
  };

const profiles: ProfileData[] = await Promise.all(
  (xprofiles ?? []).map(async (p) => ({
    id: p.id,
    name: p.title ?? "",
    hasItems: await getprofileItems(p.id), // ← هنا بقيت boolean مش Promise
    banner: p.banner_url ,
    logo: p.logo_url,
    link: p.link_slug ,
    isActive: p.is_active
  }))
);

// const profiles: ProfileData[] =await  (xprofiles ?? []).map(async p => ({
 
//   id: p.id,
//   name: p.title ?? "",
//   hasItems:await getprofileItems(p.id),
//   banner: p.banner_url,
//   logo: p.logo_url,
//   link: p.link_slug 
  
// }));



  const plan: CurrentPlan = {
    planName:  getname(subscription?.type) ,
    profilesUsed: profiles?.length || 0,
    profilesLimit: subscription?.profiles_limit || 1,
    itemsUsed: items?.length || 0,
    itemsLimit: subscription?.items_limit || 0,
    daysUntilRenewal: getname(subscription?.type) == "الخطة المدفوعة"?
     subscription?.renewal_date
      ? Math.ceil((new Date(subscription.renewal_date).getTime() - new Date().getTime()) / (1000*60*60*24))
      : 0
      :0
      ,
    amount : subscription?.amount || 0
   }

  // // 👇 جلب البروفايلات
  // // const { data: profiles } = await supabase
  // //   .from('profiles')
  // //   .select('*')
  // //   .eq('user_id', userId)

  // plan.profilesUsed = profiles?.length || 0
  // const totalItems = profiles?.reduce((acc, p) => acc + (p.items_count || 0), 0) || 0
  // plan.itemsUsed = totalItems

  return { profiles , plan };
}


// حذف بروفايل بالكامل
export async function deleteProfile(profileId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return;


const  exestProfile = (await DB.profiles.getById(profileId)).data;

if (!exestProfile) return;

  await DB.profiles.delete(exestProfile.id)

  // const { data: profile } = await supabase
  //   .from('profiles')
  //   .select('*')
  //   .eq('id', profileId)
  //   .single()

  // if (!profile || profile.user_id !== userId) {
  //   throw new Error("Unauthorized")
  // }

  // await supabase
  //   .from('profiles')
  //   .delete()
  //   .eq('id', profileId)

  revalidatePath('/dashboard')
}



// فانكشن لتأكيد الدفع
export async function confirmPayment(payment: PaymentData) {
 
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return;


  let imageUrl: string | null = null, image_public_id: string | null = null;
  if (payment.imageFile) {
    const upload = await uploadImage(payment.imageFile, false);
    imageUrl = upload.url; image_public_id = upload.public_id;
  }



  const {data ,error} = await DB.user_payments.create({
    user_id: user.id,
    profiles_count: payment.profilesCount,
    items_count: payment.itemsCount,
    months: payment.months,
    amount: payment.price,
   // phone_number: payment.phoneNumber,
    cash_type: payment.selectedCash,
    receipt_url: imageUrl,
    isPinding: true,
    receipt_P_Key: image_public_id ,
   // phone_number_rec: payment.recieverphoneNumber
  });

  if (error) {
    console.error("❌ Error creating payment:", error);
    return false;
   
  }
  if (data) {
    return true
  }
  // هنا نضيف بيانات اليوزر وبيانات الدفع في جدول جديد مثلاً user_payments
  // const { error } =
  //  await supabase
  //   .from('user_payments')
  //   .insert({
  //     user_id: user.id,
  //     profiles_count: payment.profilesCount,
  //     items_count: payment.itemsCount,
  //     months: payment.months,
  //     price: payment.price,
  //     phone_number: payment.phoneNumber,
  //     cash_type: payment.selectedCash,
  //     receipt_url: payment.receiptFileUrl || null,
  //     created_at: new Date()
  //   });

  // if (error) throw error;

  // لو عايز تعمل revalidate للداشبور
  revalidatePath('/dashboard');

}

export async function getUserPayments() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return;

  const { data } = await DB.user_payments.getByUser(user.id);

  return data
}

export async function deleteProfileFully(id: string) : Promise<GeneralResponse> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return {
  status: false,
  data: null,
  error: "سجل الدخول اولا"
   };


  const { data : data , error : error } = await DB.profiles.deleteProfileFully(id);

    if (error) return {
      status: false,
      data: null,
      error: error
    };

 return {
  status: true,
  data: data,
  error:null
};

}





// export async function getProfileQrCode(slug: string) : Promise<GeneralResponse>{
 
//     // const payload = decryptSlug(slug);
//     // const userId = payload.uid;
//     // const profileId = payload.pid;

//     // const jsonUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/public_profiles/${encodeURIComponent(userId)}/${encodeURIComponent(profileId)}.json`;
   




// }

interface InitialData {
    id: string;
    title: string;
    description: string;
    address: string;
    logoUrl: string | null;
    bannerUrl: string | null;
    socialLinks: SocialMediaplatform[];
    selectedItems: MenuItem[];
    selectedTheme: string;
}

export async function asyncProfileData(id: string) : Promise<GeneralResponse>{
 
    const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return {
  status: false,
  data: null,
  error: "سجل الدخول اولا"
   };

const { data: data , error : error } = await getProfile(id);
    if (error) return {
      status: false,
      data: null,
      error: error
    };

    const model = data as InitialData;

    

  // create json data 
const userprof = model;
const createdJson: Profilexm = {
  id: userprof.id,
  user_id: user.id,
  banner: userprof.bannerUrl || "",
  logo: userprof.logoUrl || "",
  title: userprof.title || "",
  description: userprof.description || "",
  address: userprof.address || "",
  profile_theme: userprof.selectedTheme || "",
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
const fileName = user.id+"/"+ userprof.id+".json";

// upload it 

const {error: storageError } = await supabase.storage
  .from("public_profiles")
  .upload(fileName, fileBody, {
    contentType: "application/json",
    upsert: true, 
    cacheControl: "max-age=300, stale-while-revalidate=31536000", 
  });
  // console.log("end storage")

  if (storageError){
  console.error("Storage Upload Error:", storageError);
  return {
    status: false,
    data: null,
    error: " Storage Upload Error: " + storageError
  };
    }
  // console.log("end storage")

const {data: updated, error :errorx } =  await DB.profiles.update(userprof.id, {
    is_active: true
  });
  
if (errorx) {
   return {
    status: false,
    data: null,
    error: " update error : " + errorx
  };
}


 return {
  status: true,
  data: "تمت المزامنه بنجاح",
  error:null
};


}









          


