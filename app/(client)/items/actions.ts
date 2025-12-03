// // app/dashboard/items/actions.ts
// "use server";

// import { deleteImage, uploadImage } from '@/lib/cloudnery/cloudinary';
// import { DB } from '@/lib/db/repo';
// import { createClient } from '@/lib/supabase/server';

// export interface ItemPrice {
//   id?: string;
//   title: string;
//   price: number;
// }
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

// export interface Category {
//   id: string;
//   name: string;
//   itemCount?: number;
// }

// /** SERVER ACTIONS & HELPERS ------------------------------------------------- */

// export const getItemsAndCategories = async () => {
//   const supabase = await createClient();
//   const { data: { user } } = await supabase.auth.getUser();
//   if (!user) {
//     return {
//       items: [] as Item[],
//       categories: [] as Category[]
//     };
//   }

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

//   // normalize categories (add item counts)
//   const cats: Category[] = (categories ?? []).map((c: any) => ({
//     id: c.id,
//     name: c.name,
//     itemCount: items.filter(i => i.category_id === c.id).length
//   }));

//   return {
//     items: items ?? [],
//     categories: cats ?? []
//   };
// };

// enum ReturnMessages {
//   limit = 'limit',
//   errormaster = 'errormaster',
//   errordetails = 'errordetails',
//   success = 'success',
//   unAuth = 'unAuth',
//   gerror = 'gerror',
// }

// interface PriceInput {
//   id?: string;
//   title: string;
//   price: number;
// }

// interface AddItemInput {
//   name: string;
//   description: string;
//   category_id: string;
//   imageFile?: File | null;
//   prices: PriceInput[];
// }

// interface UpdateItemInput {
//   id: string;
//   name: string;
//   description: string;
//   category_id: string;
//   imageFile?: File | null; // null means delete
//   prices: PriceInput[];
// }

// interface AddCategoryInput {
//   name: string;
// }

// interface EditCategoryInput {
//   id: string;
//   name: string;
// }

// /** Add Item */
// export const addItem = async (item: AddItemInput) => {
//   const supabase = await createClient();
//   const { data: { user } } = await supabase.auth.getUser();
//   if (!user) return ReturnMessages.unAuth.toString();

//   const { data: items } = await DB.items.getAll(user.id);
//   const { data: subscriptions } = await DB.user_subscriptions.getByUser(user.id);
//   const subscription = subscriptions?.[0] ?? null;

//   if (!subscription || !items || items.length >= (subscription.items_limit ?? 9999)) {
//     return ReturnMessages.limit.toString();
//   }

//   // upload image if present
//   let imageUrl: string | null = null;
//   let image_public_id: string | null = null;

//   if (item.imageFile) {
//     const upload = await uploadImage(item.imageFile, false);
//     imageUrl = upload.url;
//     image_public_id = upload.public_id;
//   }

//   const { data: newItem, error: itemError } = await DB.items.create({
//     image_url: imageUrl,
//     image_public_id : image_public_id,
//     has_price: item.prices.length > 0,
//     user_id: user.id,
//     name: item.name,
//     description: item.description,
//     category_id: item.category_id,
//   });

//   if (itemError || !newItem || newItem.length === 0) {
//     return ReturnMessages.errormaster.toString();
//   }

//   if (item.prices.length > 0) {
//     const pricesInsert = item.prices.map(p => ({
//       item_id: newItem[0].id,
//       label: p.title,
//       amount: p.price
//     }));

//     const { data: newPrices, error: pricesError } = await DB.item_prices.createMany(pricesInsert);

//     if (pricesError)
//     {
//         console.log(pricesError);
//      console.log(newPrices);
// return ReturnMessages.errordetails.toString();
//     }
      
//     if (!newPrices || newPrices.length === 0)
//           {
//         console.log(pricesError);
//      console.log(newPrices);
//  return ReturnMessages.gerror.toString();
//     }
      
     
//   }

//   return ReturnMessages.success.toString();
// };

// /** Update Item */
// export const updateItem = async (item: UpdateItemInput) => {
//   const supabase = await createClient();
//   const { data: { user } } = await supabase.auth.getUser();
//   if (!user) return ReturnMessages.unAuth.toString();

//   const { data: existingItems } = await DB.items.getById(item.id);
//   if (!existingItems || existingItems.user_id !== user.id) {
//     return ReturnMessages.gerror.toString();
//   }

//   let imageUrl = existingItems.image_url;
//   let image_public_id = existingItems.image_public_id;

//   if (item.imageFile) {
//     if (image_public_id) await deleteImage(image_public_id);
//     const upload = await uploadImage(item.imageFile, false);
//     imageUrl = upload.url;
//     image_public_id = upload.public_id;
//   } else if (item.imageFile === null && image_public_id) {
//     await deleteImage(image_public_id);
//     imageUrl = null;
//     image_public_id = null;
//   }

//   const { data: updatedItem, error: itemError } = await DB.items.update(item.id, {
//     name: item.name,
//     description: item.description,
//     category_id: item.category_id,
//     image_url: imageUrl,
//     image_public_id,
//     has_price: item.prices.length > 0,
//   });

//   if (itemError || !updatedItem) return ReturnMessages.errormaster.toString();

//   await DB.item_prices.deleteWithItem(item.id);

//   if (item.prices.length > 0) {
//     const pricesInsert = item.prices.map(p => ({
//       item_id: item.id,
//       title: p.title,
//       price: p.price
//     }));

//     const { data: newPrices, error: pricesError } = await DB.item_prices.createMany(pricesInsert);
//     if (pricesError) return ReturnMessages.errordetails.toString();
//   }

//   return ReturnMessages.success.toString();
// };

// /** Delete Item */
// export const deleteItem = async (id: string, image_public_id: string) => {
//  // delete image if present
  
//    await deleteImage(image_public_id);
//   const { error } = await DB.items.delete(id);

//   if (error) throw error;
//   return ReturnMessages.success.toString();
// };

// /** Categories */
// export const addCategory = async (category: AddCategoryInput) => {
//   const supabase = await createClient();
//   const { data: { user } } = await supabase.auth.getUser();
//   if (!user) return ReturnMessages.unAuth.toString();

//   const { data: newcategory, error: categoryError } = await DB.categories.create({
//     user_id: user.id,
//     name: category.name,
//   });

//   if (categoryError || !newcategory || newcategory.length === 0) {
//     return ReturnMessages.errormaster.toString();
//   }

//   return ReturnMessages.success.toString();
// };

// export const updateCategory = async (model: EditCategoryInput) => {
//   const supabase = await createClient();
//   const { data: { user } } = await supabase.auth.getUser();
//   if (!user) return ReturnMessages.unAuth.toString();

//   const { data: existing } = await DB.categories.getById(model.id);
//   if (!existing || existing.user_id !== user.id) {
//     return ReturnMessages.gerror.toString();
//   }

//   const { data: updated, error: iError } = await DB.categories.update(model.id, {
//     name: model.name,
//   });

//   if (iError || !updated) return ReturnMessages.errormaster.toString();

//   return ReturnMessages.success.toString();
// };

// export const deleteCategory = async (id: string) => {
//   const { error } = await DB.categories.delete(id);
//   if (error) throw error;
//   return ReturnMessages.success.toString();
// };



"use server";

import { deleteImage, uploadImage } from '@/lib/cloudnery/cloudinary';
import { DB } from '@/lib/db/repo';
import { createClient } from '@/lib/supabase/server';

export interface ItemPrice { id?: string; title: string; price: number; }
export interface Item {
  id?: string;
  name: string;
  public_id: string;
  description: string;
  image?: string;
  category: string;
  category_id: string;
  prices: ItemPrice[];
}
export interface Category { id: string; name: string; itemCount?: number; }

export const getItemsAndCategories = async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { items: [] as Item[], categories: [] as Category[] };

  const { data: itemsx } = await DB.items.getAll(user.id);
  const { data: categories } = await DB.categories.getAll(user.id);

  const items: Item[] = await Promise.all(
    (itemsx ?? []).map(async (p) => ({
      id: p.id,
      name: p.name ?? "",
      public_id: p.image_public_id ?? "",
      description: p.description ?? "",
      image: p.image_url ?? "",
      category: (await DB.categories.getById(p.category_id!)).data?.name ?? "",
      category_id: p.category_id ?? "",
      prices: (await DB.item_prices.getByItem(p.id)).data?.map((q: any) => ({ id: q.id, title: q.title ?? q.label ?? "", price: q.price ?? q.amount ?? 0 })) ?? []
    }))
  );

  const cats: Category[] = (categories ?? []).map((c: any) => ({
    id: c.id,
    name: c.name,
    itemCount: items.filter(i => i.category_id === c.id).length
  }));

  return { items: items ?? [], categories: cats ?? [] };
};

enum ReturnMessages { limit = 'limit', errormaster = 'errormaster', errordetails = 'errordetails', success = 'success', unAuth = 'unAuth', gerror = 'gerror' }

interface PriceInput { id?: string; title: string; price: number; }
interface AddItemInput { name: string; description: string; category_id: string; imageFile?: File | null; prices: PriceInput[]; }
interface UpdateItemInput { id: string; name: string; description: string; category_id: string; imageFile?: File | null; prices: PriceInput[]; }
interface AddCategoryInput { name: string; }
interface EditCategoryInput { id: string; name: string; }

/** Add Item */
export const addItem = async (item: AddItemInput) => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return ReturnMessages.unAuth.toString();

  const { data: items } = await DB.items.getAll(user.id);
  const { data: subscriptions } = await DB.user_subscriptions.getByUser(user.id);
  const subscription = subscriptions?.[0] ?? null;
  if (!subscription || !items || items.length >= (subscription.items_limit ?? 9999)) return ReturnMessages.limit.toString();

  let imageUrl: string | null = null, image_public_id: string | null = null;
  if (item.imageFile) {
    const upload = await uploadImage(item.imageFile, false);
    imageUrl = upload.url; image_public_id = upload.public_id;
  }

  const { data: newItem, error: itemError } = await DB.items.create({
    image_url: imageUrl, image_public_id, has_price: item.prices.length > 0,
    user_id: user.id, name: item.name, description: item.description, category_id: item.category_id
  });

  if (itemError || !newItem || newItem.length === 0) return ReturnMessages.errormaster.toString();

  if (item.prices.length > 0) {
    const pricesInsert = item.prices.map(p => ({ item_id: newItem[0].id, label: p.title, amount: p.price }));
    const { data: newPrices, error: pricesError } = await DB.item_prices.createMany(pricesInsert);
    if (pricesError || !newPrices || newPrices.length === 0) return ReturnMessages.errordetails.toString();
  }

  return ReturnMessages.success.toString();
};

/** Update Item */
export const updateItem = async (item: UpdateItemInput) => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return ReturnMessages.unAuth.toString();

  const { data: existingItems } = await DB.items.getById(item.id);
  if (!existingItems || existingItems.user_id !== user.id) return ReturnMessages.gerror.toString();

  let imageUrl = existingItems.image_url, image_public_id = existingItems.image_public_id;

  if (item.imageFile) {
    if (image_public_id) await deleteImage(image_public_id);
    const upload = await uploadImage(item.imageFile, false);
    imageUrl = upload.url; image_public_id = upload.public_id;
  } else if (item.imageFile === null && image_public_id) {
    await deleteImage(image_public_id);
    imageUrl = null; image_public_id = null;
  }

  const { data: updatedItem, error: itemError } = await DB.items.update(item.id, {
    name: item.name, description: item.description, category_id: item.category_id,
    image_url: imageUrl, image_public_id, has_price: item.prices.length > 0
  });
  if (itemError || !updatedItem) return ReturnMessages.errormaster.toString();

    // 🆕 الخطوة الإضافية: تعطيل البروفايلات المرتبطة عند تعديل العنصر
    const { error: profileDisableError } = await DB.items.disableRelatedProfiles(item.id);
    if (profileDisableError) console.error("Error disabling profiles on item update:", profileDisableError);
    // يمكن تجاهل الخطأ هنا والاستمرار إذا كان تحديث العنصر الرئيسي ناجحًا

  await DB.item_prices.deleteWithItem(item.id);

  if (item.prices.length > 0) {
    const pricesInsert = item.prices.map(p => ({ item_id: item.id, label: p.title, amount: p.price }));
    const { data: newPrices, error: pricesError } = await DB.item_prices.createMany(pricesInsert);
    if (pricesError) return ReturnMessages.errordetails.toString();
  }

  return ReturnMessages.success.toString();
};

/** Delete Item */
export const deleteItem = async (id: string, image_public_id: string) => {

  // 🆕 الخطوة الإضافية: تعطيل البروفايلات المرتبطة عند حذف العنصر
    const { error: profileDisableError } = await DB.items.disableRelatedProfiles(id);
  if (profileDisableError) console.error("Error disabling profiles on item deletion:", profileDisableError);
  
    if (image_public_id) await deleteImage(image_public_id);
  const { error } = await DB.items.delete(id);
  if (error) throw error;
  return ReturnMessages.success.toString();
};

/** Categories */
export const addCategory = async (category: AddCategoryInput) => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return ReturnMessages.unAuth.toString();

  const { data: newcategory, error: categoryError } = await DB.categories.create({ user_id: user.id, name: category.name });
  if (categoryError || !newcategory || newcategory.length === 0) return ReturnMessages.errormaster.toString();
if (newcategory) {
    return newcategory[0];
}
  return ReturnMessages.success.toString();
};

export const updateCategory = async (model: EditCategoryInput) => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return ReturnMessages.unAuth.toString();

  const { data: existing } = await DB.categories.getById(model.id);
  if (!existing || existing.user_id !== user.id) return ReturnMessages.gerror.toString();

  const { data: updated, error: iError } = await DB.categories.update(model.id, { name: model.name });
  if (iError || !updated) return ReturnMessages.errormaster.toString();

  return ReturnMessages.success.toString();
};

export const deleteCategory = async (id: string) => {
 // 🆕 استخدام الدالة الجديدة للحذف المتسلسل
    const { data, error } = await DB.categories.deleteWithItemsAndUnlinkProfiles(id);

    if (error) throw error;
    
    // حذف الصور المرتبطة بالعناصر المحذوفة
    const imagePublicIds = data?.imagePublicIds ?? [];
    await Promise.all(imagePublicIds.map(async (publicId) => {
        try {
            await deleteImage(publicId);
        } catch (e) {
            console.error(`Error deleting image ${publicId}:`, e);
            // يمكن تجاهل الخطأ هنا إذا كان حذف القاعدة الرئيسية ناجحاً
        }
    }));
    
    return ReturnMessages.success.toString();
};






// export async function disableProfilesUsingItem(itemId: string) {
//   // كل الروابط للعنصر
//   const { data: links } = await DB.profile_menu_items.getByItem(itemId);
//   if (!links) return;

//   for (const link of links) {
//     // 1) تعطيل البروفايل
//     await DB.profiles.update(link.profile_id, { is_active: false });

//     // 2) حذف الربط
//     await DB.profile_menu_items.delete(link.id);
//   }
// }

// // 2) Delete all items inside a category
// export async function deleteItemsInsideCategory(categoryId: string) {
//   const { data: items } = await DB.items.getByCategory(categoryId);
//   if (!items) return;

//   for (const item of items) {
//     await disableProfilesUsingItem(item.id);

//     // مسح الصورة لو موجودة
//     if (item.image_public_id) await deleteImage(item.image_public_id);

//     // مسح الأسعار
//     await DB.item_prices.deleteWithItem(item.id);

//     // مسح العنصر نفسه
//     await DB.items.delete(item.id);
//   }
// }