
"use server";

import { encryptSlug } from "@/lib/slug-crypto";
import { MenuItem } from '@/components/templates/new/t8tempo/mock';
import { deleteImage, uploadImage } from '@/lib/cloudnery/cloudinary';
import { DB, GeneralResponse } from '@/lib/db/repo';
import { createClient, createCliento, createClientWithAuthHeader, createClientx } from '@/lib/supabase/server';
import { DataModelTODB } from './components';
import { Profilexm } from '@/components/templates/new/t8tempo/menu/FreeTemplateA';
import { createActionClient } from '@/lib/supabase/client';

// export interface ItemPrice { id?: string; title: string; price: number; }
// export interface Item {
//   id?: string;
//   name: string;
//   public_id: string;
//   description: string;
//   image?: string;
//   category: string;
//   category_id: string;
//   prices: ItemPrice[];
// }

// export interface Category { id: string; name: string; itemCount?: number; }

// export const getItemsAndCategories = async () => {
//   const supabase = await createClient();
//   const { data: { user } } = await supabase.auth.getUser();
//   if (!user) return { items: [] as Item[], categories: [] as Category[] };

//   const { data: itemsx } = await DB.items.getAll(user.id);
//   const { data: categories } = await DB.categories.getAll(user.id);

//   const items: Item[] = await Promise.all(
//     (itemsx ?? []).map(async (p) => ({
//       id: p.id,
//       name: p.name ?? "",
//       public_id: p.image_public_id ?? "",
//       description: p.description ?? "",
//       image: p.image_url ?? "",
//       category: (await DB.categories.getById(p.category_id!)).data?.name ?? "",
//       category_id: p.category_id ?? "",
//       prices: (await DB.item_prices.getByItem(p.id)).data?.map((q: any) => ({ id: q.id, title: q.title ?? q.label ?? "", price: q.price ?? q.amount ?? 0 })) ?? []
//     }))
//   );

//   const cats: Category[] = (categories ?? []).map((c: any) => ({
//     id: c.id,
//     name: c.name,
//     itemCount: items.filter(i => i.category_id === c.id).length
//   }));

//   return { items: items ?? [], categories: cats ?? [] };
// };

// enum ReturnMessages { limit = 'limit', errormaster = 'errormaster', errordetails = 'errordetails', success = 'success', unAuth = 'unAuth', gerror = 'gerror' }

// interface PriceInput { id?: string; title: string; price: number; }
// interface AddItemInput { name: string; description: string; category_id: string; imageFile?: File | null; prices: PriceInput[]; }
// interface UpdateItemInput { id: string; name: string; description: string; category_id: string; imageFile?: File | null; prices: PriceInput[]; }
// interface AddCategoryInput { name: string; }
// interface EditCategoryInput { id: string; name: string; }

// /** Add Item */
// export const addItem = async (item: AddItemInput) => {
//   const supabase = await createClient();
//   const { data: { user } } = await supabase.auth.getUser();
//   if (!user) return ReturnMessages.unAuth.toString();

//   const { data: items } = await DB.items.getAll(user.id);
//   const { data: subscriptions } = await DB.user_subscriptions.getByUser(user.id);
//   const subscription = subscriptions?.[0] ?? null;
//   if (!subscription || !items || items.length >= (subscription.items_limit ?? 9999)) return ReturnMessages.limit.toString();

//   let imageUrl: string | null = null, image_public_id: string | null = null;
//   if (item.imageFile) {
//     const upload = await uploadImage(item.imageFile, false);
//     imageUrl = upload.url; image_public_id = upload.public_id;
//   }

//   const { data: newItem, error: itemError } = await DB.items.create({
//     image_url: imageUrl, image_public_id, has_price: item.prices.length > 0,
//     user_id: user.id, name: item.name, description: item.description, category_id: item.category_id
//   });

//   if (itemError || !newItem || newItem.length === 0) return ReturnMessages.errormaster.toString();

//   if (item.prices.length > 0) {
//     const pricesInsert = item.prices.map(p => ({ item_id: newItem[0].id, label: p.title, amount: p.price }));
//     const { data: newPrices, error: pricesError } = await DB.item_prices.createMany(pricesInsert);
//     if (pricesError || !newPrices || newPrices.length === 0) return ReturnMessages.errordetails.toString();
//   }

//   return ReturnMessages.success.toString();
// };

// /** Update Item */
// export const updateItem = async (item: UpdateItemInput) => {
//   const supabase = await createClient();
//   const { data: { user } } = await supabase.auth.getUser();
//   if (!user) return ReturnMessages.unAuth.toString();

//   const { data: existingItems } = await DB.items.getById(item.id);
//   if (!existingItems || existingItems.user_id !== user.id) return ReturnMessages.gerror.toString();

//   let imageUrl = existingItems.image_url, image_public_id = existingItems.image_public_id;

//   if (item.imageFile) {
//     if (image_public_id) await deleteImage(image_public_id);
//     const upload = await uploadImage(item.imageFile, false);
//     imageUrl = upload.url; image_public_id = upload.public_id;
//   } else if (item.imageFile === null && image_public_id) {
//     await deleteImage(image_public_id);
//     imageUrl = null; image_public_id = null;
//   }

//   const { data: updatedItem, error: itemError } = await DB.items.update(item.id, {
//     name: item.name, description: item.description, category_id: item.category_id,
//     image_url: imageUrl, image_public_id, has_price: item.prices.length > 0
//   });
//   if (itemError || !updatedItem) return ReturnMessages.errormaster.toString();

//   await DB.item_prices.deleteWithItem(item.id);

//   if (item.prices.length > 0) {
//     const pricesInsert = item.prices.map(p => ({ item_id: item.id, label: p.title, amount: p.price }));
//     const { data: newPrices, error: pricesError } = await DB.item_prices.createMany(pricesInsert);
//     if (pricesError) return ReturnMessages.errordetails.toString();
//   }

//   return ReturnMessages.success.toString();
// };

// /** Delete Item */
// export const deleteItem = async (id: string, image_public_id: string) => {
//   if (image_public_id) await deleteImage(image_public_id);
//   const { error } = await DB.items.delete(id);
//   if (error) throw error;
//   return ReturnMessages.success.toString();
// };

// /** Categories */
// export const addCategory = async (category: AddCategoryInput) => {
//   const supabase = await createClient();
//   const { data: { user } } = await supabase.auth.getUser();
//   if (!user) return ReturnMessages.unAuth.toString();

//   const { data: newcategory, error: categoryError } = await DB.categories.create({ user_id: user.id, name: category.name });
//   if (categoryError || !newcategory || newcategory.length === 0) return ReturnMessages.errormaster.toString();
// if (newcategory) {
//     return newcategory[0];
// }
//   return ReturnMessages.success.toString();
// };

// export const updateCategory = async (model: EditCategoryInput) => {
//   const supabase = await createClient();
//   const { data: { user } } = await supabase.auth.getUser();
//   if (!user) return ReturnMessages.unAuth.toString();

//   const { data: existing } = await DB.categories.getById(model.id);
//   if (!existing || existing.user_id !== user.id) return ReturnMessages.gerror.toString();

//   const { data: updated, error: iError } = await DB.categories.update(model.id, { name: model.name });
//   if (iError || !updated) return ReturnMessages.errormaster.toString();

//   return ReturnMessages.success.toString();
// };

// export const deleteCategory = async (id: string) => {
//   const { error } = await DB.categories.delete(id);
//   if (error) throw error;
//   return ReturnMessages.success.toString();
// };




export const getUserPlanAndItems =async()=>{

 const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { isfree : true ,items: [] as MenuItem[] };

  const { data: itemsx } = await DB.items.getAll(user.id);
  const { data: isfree } = (await DB.user_subscriptions.getByUser(user.id)).data?.[0].type === "free" ? { data: { isfree: true } } : { data: { isfree: false } };
  const items: MenuItem[] = await Promise.all(
    (itemsx ?? []).map(async (p) => ({

      id: p.id,
      name: p.name ?? "",
      public_id: p.image_public_id ?? "",
      description: p.description ?? "",
      image: p.image_url ?? "",
      category: (await DB.categories.getById(p.category_id!)).data?.name ?? "",
      prices: (await DB.item_prices.getByItem(p.id)).data?.map((q: any) => ({
         id: q.id,
        lable: q.label ?? q.label ?? "",
        amount: q.amount ?? q.amount ?? 0
        
        })) ?? []
    //   category_id: p.category_id ?? "",
    //   prices: (await DB.item_prices.getByItem(p.id)).data?.map((q: any) => ({ id: q.id, title: q.title ?? q.label ?? "", price: q.price ?? q.amount ?? 0 })) ?? []


    
    }))
  );



  return { items: items ?? [], isfree: isfree?.isfree ?? false };

}


export const AddProfileToDb = async (profile: DataModelTODB) :Promise<GeneralResponse> => {

 const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return {
  status: false,
  data: null,
  error: "سجل الدخول اولا"
}

  const { data: profiles } = await DB.profiles.getAll(user.id);


  const { data: subscriptions } = await DB.user_subscriptions.getByUser(user.id);

  const subscription = subscriptions?.[0] ?? null;
  if (!subscription || !profiles || profiles.length >= (subscription.profiles_limit ?? 9999))
 { return {
  status: false,
  data: null,
  error: "وصلت للحد المسموح به"
};}
  let logoUrl: string | null = null, logo_public_id: string | null = null;
  let bannarUrl: string | null = null, bannar_public_id: string | null = null;

  if (profile.banner) {
    const upload = await uploadImage(profile.banner, false);
    bannarUrl = upload.url; bannar_public_id = upload.public_id;
  }
  if (profile.logo) {
    const upload = await uploadImage(profile.logo, false);
    logoUrl = upload.url; logo_public_id = upload.public_id;
  }

  const { data: newProfile, error: profileError } = await DB.profiles.create({

    user_id: user.id,
    title: profile.title,
    description: profile.description,
    address: profile.address,
    banner_url: bannarUrl,
    logo_url: logoUrl,
    banner_public_id: bannar_public_id,
    logo_public_id: logo_public_id,
    profile_theme: profile.selectedTheme,
    is_active: true,
   
  });


  if (profileError || !newProfile || newProfile.length === 0)  { return {
  status: false,
  data: null,
  error: "حدث خطأ اثناء اضافة الملف الشخصي"
};}


  if (profile.selectedItems.length > 0) {
    const itemsInsert = profile.selectedItems.map(p => ({ profile_id: newProfile[0].id, item_id: p.id }));
    const { data: newprofileItem, error: profileItemError } = await DB.profile_menu_items.createMany(itemsInsert);

    if (profileItemError || !newprofileItem || newprofileItem.length === 0) {  return {
  status: false,
  data: null,
  error: "حدث خطأ اثناء اضافة عناصر الملف الشخصي"
};}
  }

  if (profile.socialLinks.length > 0) {
    const profileSocial = profile.socialLinks.map(p => ({
        user_id: user.id,
        profile_id: newProfile[0].id,
        contact_type_id: p.social.id,
        value: p.value,
        is_active: p.is_Active
    }));
    const { data: newprofileContacts, error: profileContactError } = await DB.profile_contacts.createMany(profileSocial);
  
   
    if (profileContactError || !newprofileContacts || newprofileContacts.length === 0) {
     return {
  status: false,
  data: null,
  error: "حدث خطأ اثناء اضافة الروابط الاجتماعية للملف الشخصي"
};}

  }

const userprof = newProfile[0];
const createdJson: Profilexm = {
  id: userprof.id,
  user_id: userprof.user_id,
  banner: userprof.banner_url || "",
  logo: userprof.logo_url || "",
  title: userprof.title || "",
  description: userprof.description || "",
  address: userprof.address || "",
  profile_theme: userprof.profile_theme || "",
  link_slug: newProfile[0].link_slug || "",
  socials: profile.socialLinks.map((s) => ({
    id: s.social.id,
    name: s.social.name,
    value: s.value,
    open_type: s.social.open_type,
    icon: s.social.icon
  })) || [],
  menuItems: profile.selectedItems.map((i) => ({
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

// 1. تحويل الـ JSON إلى نص (String)
const fileBody = JSON.stringify(createdJson);
// 2. تحديد اسم الملف ليكون هو الـ ID الخاص بالبروفايل
// (وهو ما تم تحديده في البوليسي: file_id.json)
const fileName = userprof.user_id+"/"+ userprof.id+".json"; 

// 3. الرفع (Upsert) إلى الباكت
const { error: storageError } = await supabase.storage
  .from("public_profiles") // اسم الباكت الذي أنشأناه
  .upload(fileName, fileBody, {
    contentType: "application/json",
    upsert: true, // مهم جداً: لو الملف موجود عدّله، لو مش موجود أنشئه
    cacheControl: "max-age=300, stale-while-revalidate=31536000", // (ثانية) لضمان كاش عالي للزوار (سنه)
  });

// 4. معالجة خطأ الرفع (إذا حدث)
if (storageError) {
  console.error("Storage Upload Error:", storageError);
  // يمكن أن تضيف هنا منطقاً لحذف البيانات من DB لو فشل الرفع في Storage
  // ولكن مؤقتاً، نرجع رسالة خطأ
  return {
    status: false,
    data: null,
    error: " Storage Upload Error: " + storageError
  };
}
const { data: { publicUrl } } = supabase.storage
        .from("public_profiles")
        .getPublicUrl(fileName);

        createdJson.link_slug = publicUrl

const payloadq = {
  uid: userprof.user_id,
  pid: userprof.id,
};

const slug = encryptSlug(payloadq);
await DB.profiles.update(userprof.id, {
  link_slug: slug
});

 return{
  status: true,
  data:slug,
  error: null
};

};






// export const AddProfileToDb = async (profile: DataModelTODB) :Promise<GeneralResponse> => {
// // const supabaseStorageClient = await createClientWithAuthHeader();
//    const supabase = await createClient()
//    const { data: userprof } = await supabase.auth.getSession();
//    if (!userprof) {
//     // فشل في قراءة الجلسة بشكل عام، يجب أن لا يحدث بعد التحقق من user
//     console.log("Session Read Error: No Session Found فشل في العثور على جلسة صالحة" ); 
//   }
//    const userId =await supabase.auth.getUser();
// console.log("--- Supabase Auth Status Check ---" + userId.data.user?.id);
// console.log("--- Supabase Auth Status Check ---" + userprof);

//  const createdJson = {
//   id: "userprof.id",
//   user_id: "userprof.user_id"
 
  
// };
// ////////////////////////////////////////////////////////////////
// // 🚨 خطوة جديدة: رفع ملف JSON إلى Supabase Storage 🚨
// ////////////////////////////////////////////////////////////////
// ////// التحقق
// console.log("--- Supabase Auth Status Check ---");

// // طبع التوكن نفسه هو عملية غير آمنة في بيئة حقيقية، لكن مفيدة للاختبار
// // سنحاول طباعة أي شيء يدل على وجود التوكن
// // ملاحظة: قد لا تستطيع الوصول إلى التوكن مباشرة هنا، لكن سنحاول طباعة الـ URL

// // طريقة تقريبية: طباعة أي جزء من الكلاينت يدل على وجود السيشن
// // هذا السطر قد لا يعمل 100% لكنه محاولة
// const storageHeaders = (supabase as any).storage.headers;
//   const authHeader = storageHeaders['Authorization'];

//   if (authHeader) {
//      console.log("LOG: Storage Header Authorization موجود!");
//      console.log("LOG: Header Value يبدأ بـ:", authHeader.substring(0, 20) + '...');
//   } else {
//      // إذا لم يتم العثور على Authorization Header، فهذا هو سبب المشكلة!
//      console.error("LOG: ❌ Authorization Header غير موجود في طلب الـ Storage!");
//   }



// // 1. تحويل الـ JSON إلى نص (String)
// const fileBody = JSON.stringify(createdJson);

// // 2. تحديد اسم الملف ليكون هو الـ ID الخاص بالبروفايل
// // (وهو ما تم تحديده في البوليسي: file_id.json)
// const fileName = userId.data.user?.id + "/" + .json;

// // 3. الرفع (Upsert) إلى الباكت
// const { error: storageError } = await supabase.storage
//   .from("public_profiles") // اسم الباكت الذي أنشأناه
//   .upload( fileName, fileBody, {
//     contentType: "application/json",
//     upsert: true, // مهم جداً: لو الملف موجود عدّله، لو مش موجود أنشئه
//     cacheControl: "31536000", // (ثانية) لضمان كاش عالي للزوار (سنه)
//   });

// // 4. معالجة خطأ الرفع (إذا حدث)
// if (storageError) {
//   console.error("Storage Upload Error:", storageError);
//   // يمكن أن تضيف هنا منطقاً لحذف البيانات من DB لو فشل الرفع في Storage
//   // ولكن مؤقتاً، نرجع رسالة خطأ
//   return {
//     status: false,
//     data: null,
//     error: " Storage Upload Error: " + storageError
//   };
// }

//   return {
//     status: true,
//     data:  " Storage Upload : " + storageError,
//     error: null
//   }
// };