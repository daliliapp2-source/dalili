// dbRepository.ts
import type { Entities } from './models'
import { createClient } from '../supabase/server' // async function
import { SocialMediaplatform } from '@/app/(client)/profile/edit/[id]/clients'
import { MenuItem } from '@/components/templates/new/t8tempo/mock'

type Row<T extends keyof Entities['public']['Tables']> = Entities['public']['Tables'][T]['Row']
type Insert<T extends keyof Entities['public']['Tables']> = Entities['public']['Tables'][T]['Insert']
type Update<T extends keyof Entities['public']['Tables']> = Entities['public']['Tables'][T]['Update']
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
interface NestedCategory {
    name: string | null;
}

interface NestedItemPrice extends Row<'item_prices'> {}

interface NestedItem extends Row<'items'> {
    categories: NestedCategory | null;
    item_prices: NestedItemPrice[];
}

interface NestedMenuItem {
    items: NestedItem;
}

interface NestedContactType extends Row<'contact_types'> {}

interface NestedProfileContact extends Row<'profile_contacts'> {
    contact_types: NestedContactType;
}

// الواجهة الرئيسية التي ترجع من استعلام Supabase
interface ProfileDataNested extends Row<'profiles'> {
    profile_contacts: NestedProfileContact[];
    profile_menu_items: NestedMenuItem[];
}
export const DB = {
  profiles: {
    getAll: async (userId: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId) as { data: Row<'profiles'>[] | null; error: any }
      return { data, error }
    },
    // أضف هذه الدالة داخل قسم DB.profiles
    getAllDataOptimized: async (profileId: string): Promise<{ data: DataModelFromDB | null, error: any }> => {
    const supabase = await createClient();

  
    const { data: profileData, error } = await supabase
        .from('profiles')
        .select(`
            *,
            profile_contacts(
                value,
                is_active,
                contact_types!inner(
                    id,
                    name,
                    icon,
                    open_type
                )
            ),
            profile_menu_items(
                items!inner(
                    *,
                    categories!inner(name),
                    item_prices!inner(id, label, amount)
                )
            )
        `)
        .eq('id', profileId)
        .single() as { data: ProfileDataNested | null, error: any };
    
    if (error) {
      // console.log("error get data "+ error)
        return { data: null, error };
    }

    if (!profileData) {
    

        return { data: null, error: new Error("Profile not found") };
    }
    
   try {
        const finalModel: DataModelFromDB = {
            id: profileData.id,
            title: profileData.title||"",
            description: profileData.description||"",
            address: profileData.address||"",
            logoUrl: profileData.logo_url,
            bannerUrl: profileData.banner_url,
            selectedTheme: profileData.profile_theme||"",
            
            socialLinks: profileData.profile_contacts.map((contact: NestedProfileContact) => ({
                social: {
                    id: contact.contact_types.id,
                    name: contact.contact_types.name,
                    icon: contact.contact_types.icon||"",
                    open_type: contact.contact_types.open_type||"",
                },
                value: contact.value||"",
                is_Active: contact.is_active,
        })),
            
            selectedItems: profileData.profile_menu_items.map((menuItem: NestedMenuItem) => {
                const item = menuItem.items;
                return {
                    id: item.id,
                    name: item.name||"",
                    description: item.description||"",
                    image: item.image_url||"",
                    category: item.categories?.name ||"",
                    
                    prices: item.item_prices.map((price: NestedItemPrice) => ({
                        id: price.id,
                        lable: price.label||"",
                        amount: price.amount||0,
                    })),
                };
            }),
        };

        return { data: finalModel, error: null };
    }
    
    catch (mappingError) {
        console.error("Error during data mapping:", mappingError);
        return { data: null, error: mappingError };
    }
},
    getById: async (id: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', id)
        .single() as { data: Row<'profiles'> | null; error: any }
      return { data, error }
    },
    create: async (data: Insert<'profiles'>) => {
      const supabase = await createClient()
      const { data: inserted, error } = await supabase
        .from('profiles')
        .insert(data)
        .select() as { data: Row<'profiles'>[] | null; error: any }
      return { data: inserted, error }
    },
    update: async (id: string, data: Update<'profiles'>) => {
      const supabase = await createClient()
      const { data: updated, error } = await supabase
        .from('profiles')
        .update(data)
        .eq('id', id)
        .select() as { data: Row<'profiles'>[] | null; error: any }
      return { data: updated, error }
    },
    delete: async (id: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('profiles')
        .delete()
        .eq('id', id)
      return { data, error }
    },
    deleteProfileFully: async (profileId: string) => {
        const supabase = await createClient();
        
        // 1. Get profile data for image public IDs
        const { data: profileData, error: selectError } = await supabase
            .from('profiles')
            .select('banner_public_id, logo_public_id')
            .eq('id', profileId)
            .single() as { data: Pick<Row<'profiles'>, 'banner_public_id' | 'logo_public_id'> | null; error: any };

        if (selectError) {
            console.error("Error fetching profile data for full deletion:", selectError);
            return { data: null, error: selectError };
        }
        
        // 2. Delete related records
        
        // Delete profile_menu_items
        const { error: deleteMenuError } = await supabase
            .from('profile_menu_items')
            .delete()
            .eq('profile_id', profileId);
        if (deleteMenuError) return { data: null, error: deleteMenuError };

        // Delete profile_contacts
        const { error: deleteContactsError } = await supabase
            .from('profile_contacts')
            .delete()
            .eq('profile_id', profileId);
        if (deleteContactsError) return { data: null, error: deleteContactsError };

        // Delete profile_working_hours
        const { error: deleteHoursError } = await supabase
            .from('profile_working_hours')
            .delete()
            .eq('profile_id', profileId);
        if (deleteHoursError) return { data: null, error: deleteHoursError };

        // 3. Delete the profile itself
        const { error: deleteProfileError } = await supabase
            .from('profiles')
            .delete()
            .eq('id', profileId);
        
        if (deleteProfileError) {
            console.error("Error deleting profile record:", deleteProfileError);
            return { data: null, error: deleteProfileError };
        }

        // Return public IDs for Cloudinary cleanup
        const publicIds = {
            banner_public_id: profileData?.banner_public_id,
            logo_public_id: profileData?.logo_public_id,
        };
        
        return { data: publicIds, error: null };
    },
  },

  categories: {
    getAll: async (userId: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('user_id', userId) as { data: Row<'categories'>[] | null; error: any }
      return { data, error }
    },
    getById: async (id: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('id', id)
        .single() as { data: Row<'categories'> | null; error: any }
      return { data, error }
    },
    create: async (data: Insert<'categories'>) => {
      const supabase = await createClient()
      const { data: inserted, error } = await supabase
        .from('categories')
        .insert(data)
        .select() as { data: Row<'categories'>[] | null; error: any }
      return { data: inserted, error }
    },
    update: async (id: string, data: Update<'categories'>) => {
      const supabase = await createClient()
      const { data: updated, error } = await supabase
        .from('categories')
        .update(data)
        .eq('id', id)
        .select() as { data: Row<'categories'>[] | null; error: any }
      return { data: updated, error }
    },
    delete: async (id: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('categories')
        .delete()
        .eq('id', id)
      return { data, error }
    },

/** Delete category, related items, and disable related profiles. */
    deleteWithItemsAndUnlinkProfiles: async (categoryId: string) => {
        const supabase = await createClient();

        // 1. Get all items under the category
        const { data: itemsToDelete, error: selectItemsError } = await supabase
            .from('items')
            .select('id, image_public_id')
            .eq('category_id', categoryId);
        
        if (selectItemsError) return { error: selectItemsError };

        const itemIds = itemsToDelete?.map(item => item.id) ?? [];
        
        // --- Dependency Checks (Profile Unlink/Disable) ---
        if (itemIds.length > 0) {
            // Get profile IDs that contain any of these items
            const { data: menuItems, error: selectProfilesError } = await supabase
                .from('profile_menu_items')
                .select('profile_id')
                .in('item_id', itemIds);

            if (selectProfilesError) return { error: selectProfilesError };

            const profileIds = [...new Set(menuItems?.map(item => item.profile_id) ?? [])]; // Unique profile IDs

            // Disable related profiles
            if (profileIds.length > 0) {
                const { error: updateProfilesError } = await supabase
                    .from('profiles')
                    .update({ is_active: false })
                    .in('id', profileIds);

                if (updateProfilesError) {
                    console.error("Error disabling profiles after category deletion:", updateProfilesError);
                    return { error: updateProfilesError };
                }
            }

            // Remove items from all menus (profile_menu_items)
            const { error: deleteMenuItemsError } = await supabase
                .from('profile_menu_items')
                .delete()
                .in('item_id', itemIds);

            if (deleteMenuItemsError) return { error: deleteMenuItemsError };

            // Delete all prices for these items (item_prices)
            const { error: deletePricesError } = await supabase
                .from('item_prices')
                .delete()
                .in('item_id', itemIds);

            if (deletePricesError) return { error: deletePricesError };
        }
        
        // 2. Delete the items themselves
        if (itemIds.length > 0) {
            const { error: deleteItemsError } = await supabase
                .from('items')
                .delete()
                .eq('category_id', categoryId); // Deleting by category_id is sufficient

            if (deleteItemsError) return { error: deleteItemsError };
        }
        
        // 3. Delete the category
        const { error: deleteCategoryError } = await supabase
            .from('categories')
            .delete()
            .eq('id', categoryId);

        // Return public IDs for image cleanup (if necessary in the action)
        const imagePublicIds = itemsToDelete?.map(item => item.image_public_id).filter(id => id) as string[] ?? [];
        
        return { data: { imagePublicIds }, error: deleteCategoryError };
    },



  },

  items: {
    getAll: async (userId: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('items')
        .select('*')
        .eq('user_id', userId) as { data: Row<'items'>[] | null; error: any }
      return { data, error }
    },
    getById: async (id: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('items')
        .select('*')
        .eq('id', id)
        .single() as { data: Row<'items'> | null; error: any }
      return { data, error }
    },
    create: async (data: Insert<'items'>) => {
      const supabase = await createClient()
      const { data: inserted, error } = await supabase
        .from('items')
        .insert(data)
        .select() as { data: Row<'items'>[] | null; error: any }
      return { data: inserted, error }
    },
    update: async (id: string, data: Update<'items'>) => {
      const supabase = await createClient()
      const { data: updated, error } = await supabase
        .from('items')
        .update(data)
        .eq('id', id)
        .select() as { data: Row<'items'>[] | null; error: any }
      return { data: updated, error }
    },

    disableRelatedProfiles: async (itemId: string) => {
        const supabase = await createClient();

        // 1. Get profile IDs that contain the item
        const { data: menuItems, error: selectError } = await supabase
            .from('profile_menu_items')
            .select('profile_id')
            .eq('item_id', itemId);

        if (selectError) {
            console.error("Error fetching profiles for item:", selectError);
            return { error: selectError };
        }

        const profileIds = menuItems?.map(item => item.profile_id) ?? [];

        if (profileIds.length === 0) {
            return { error: "No profiles found for the item" };
        }

        // 2. Update is_active to false for these profiles
        const { data: updatedProfiles, error: updateError } = await supabase
            .from('profiles')
            .update({ is_active: false })
            .in('id', profileIds)
            .select();

        if (updateError) {
            console.error("Error disabling profiles:", updateError);
        }

        return { data: updatedProfiles, error: updateError };
    },






    delete: async (id: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('items')
        .delete()
        .eq('id', id)
      return { data, error }
    },
  },

  item_prices: {
    getByItem: async (itemId: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('item_prices')
        .select('*')
        .eq('item_id', itemId) as { data: Row<'item_prices'>[] | null; error: any }
      return { data, error }
    },

    create: async (data: Insert<'item_prices'>) => {
      const supabase = await createClient()
      const { data: inserted, error } = await supabase
        .from('item_prices')
        .insert(data)
        .select() as { data: Row<'item_prices'>[] | null; error: any }
      return { data: inserted, error }
    },
  createMany: async (data: Insert<'item_prices'>[]) => {
      const supabase = await createClient()
      const { data: inserted, error } = await supabase
        .from('item_prices')
        .insert(data)
        .select() as { data: Row<'item_prices'>[] | null; error: any }
      return { data: inserted, error }
    },

    update: async (id: string, data: Update<'item_prices'>) => {
      const supabase = await createClient()
      const { data: updated, error } = await supabase
        .from('item_prices')
        .update(data)
        .eq('id', id)
        .select() as { data: Row<'item_prices'>[] | null; error: any }
      return { data: updated, error }
    },

    delete: async (id: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('item_prices')
        .delete()
        .eq('id', id)
      return { data, error }
    },
   deleteWithItem: async (item_id: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('item_prices')
        .delete()
        .eq('item_id', item_id)
      return { data, error }
    },
  },

  profile_menu_items: {
    getByProfile: async (profileId: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('profile_menu_items')
        .select('*')
        .eq('profile_id', profileId) as { data: Row<'profile_menu_items'>[] | null; error: any }
      return { data, error }
    },
    create: async (data: Insert<'profile_menu_items'>) => {
      const supabase = await createClient()
      const { data: inserted, error } = await supabase
        .from('profile_menu_items')
        .insert(data)
        .select() as { data: Row<'profile_menu_items'>[] | null; error: any }
      return { data: inserted, error }
    },
     createMany: async (data: Insert<'profile_menu_items'>[]) => {
      const supabase = await createClient()
      const { data: inserted, error } = await supabase
        .from('profile_menu_items')
        .insert(data)
        .select() as { data: Row<'profile_menu_items'>[] | null; error: any }
      return { data: inserted, error }
    },
    delete: async (id: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('profile_menu_items')
        .delete()
        .eq('id', id)
      return { data, error }
    },
    hasItems: async (profileId: string) => {
      const supabase = await createClient()
      const { count, error } = await supabase
        .from('profile_menu_items')
        .select('*', { count: 'exact', head: true })
        .eq('profile_id', profileId)

      return { hasItems: (count ?? 0) > 0, error }
    },
deleteWithprofile: async (profileId: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('profile_menu_items')
        .delete()
        .eq('profile_id', profileId)
      return { data, error }
    },
  },

  profile_contacts: {
    getByProfile: async (profileId: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('profile_contacts')
        .select('*')
        .eq('profile_id', profileId) as { data: Row<'profile_contacts'>[] | null; error: any }
      return { data, error }
    },
    create: async (data: Insert<'profile_contacts'>) => {
      const supabase = await createClient()
      const { data: inserted, error } = await supabase
        .from('profile_contacts')
        .insert(data)
        .select() as { data: Row<'profile_contacts'>[] | null; error: any }
      return { data: inserted, error }
    },
      createMany: async (data: Insert<'profile_contacts'>[]) => {
      const supabase = await createClient()
      const { data: inserted, error } = await supabase
        .from('profile_contacts')
        .insert(data)
        .select() as { data: Row<'profile_contacts'>[] | null; error: any }
      return { data: inserted, error }
    },

    update: async (id: string, data: Update<'profile_contacts'>) => {
      const supabase = await createClient()
      const { data: updated, error } = await supabase
        .from('profile_contacts')
        .update(data)
        .eq('id', id)
        .select() as { data: Row<'profile_contacts'>[] | null; error: any }
      return { data: updated, error }
    },
    delete: async (id: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('profile_contacts')
        .delete()
        .eq('id', id)
      return { data, error }
    },
    deleteWithprofile: async (profileId: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('profile_contacts')
        .delete()
        .eq('profile_id', profileId)
      return { data, error }
    },
  },

  profile_working_hours: {
    getByProfile: async (profileId: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('profile_working_hours')
        .select('*')
        .eq('profile_id', profileId) as { data: Row<'profile_working_hours'>[] | null; error: any }
      return { data, error }
    },
    create: async (data: Insert<'profile_working_hours'>) => {
      const supabase = await createClient()
      const { data: inserted, error } = await supabase
        .from('profile_working_hours')
        .insert(data)
        .select() as { data: Row<'profile_working_hours'>[] | null; error: any }
      return { data: inserted, error }
    },
    update: async (id: string, data: Update<'profile_working_hours'>) => {
      const supabase = await createClient()
      const { data: updated, error } = await supabase
        .from('profile_working_hours')
        .update(data)
        .eq('id', id)
        .select() as { data: Row<'profile_working_hours'>[] | null; error: any }
      return { data: updated, error }
    },
    delete: async (id: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('profile_working_hours')
        .delete()
        .eq('id', id)
      return { data, error }
    },
  },

  themes: {
    getAll: async () => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('themes')
        .select('*') as { data: Row<'themes'>[] | null; error: any }
      return { data, error }
    },
    create: async (data: Insert<'themes'>) => {
      const supabase = await createClient()
      const { data: inserted, error } = await supabase
        .from('themes')
        .insert(data)
        .select() as { data: Row<'themes'>[] | null; error: any }
      return { data: inserted, error }
    },
    update: async (id: string, data: Update<'themes'>) => {
      const supabase = await createClient()
      const { data: updated, error } = await supabase
        .from('themes')
        .update(data)
        .eq('id', id)
        .select() as { data: Row<'themes'>[] | null; error: any }
      return { data: updated, error }
    },
    delete: async (id: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('themes')
        .delete()
        .eq('id', id)
      return { data, error }
    },
  },

  user_themes: {
    getByUser: async (userId: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('user_themes')
        .select('*')
        .eq('user_id', userId) as { data: Row<'user_themes'>[] | null; error: any }
      return { data, error }
    },
    create: async (data: Insert<'user_themes'>) => {
      const supabase = await createClient()
      const { data: inserted, error } = await supabase
        .from('user_themes')
        .insert(data)
        .select() as { data: Row<'user_themes'>[] | null; error: any }
      return { data: inserted, error }
    },
    update: async (id: string, data: Update<'user_themes'>) => {
      const supabase = await createClient()
      const { data: updated, error } = await supabase
        .from('user_themes')
        .update(data)
        .eq('id', id)
        .select() as { data: Row<'user_themes'>[] | null; error: any }
      return { data: updated, error }
    },
    delete: async (id: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('user_themes')
        .delete()
        .eq('id', id)
      return { data, error }
    },
  },

  user_subscriptions: {
    getByUser: async (userId: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('user_subscriptions')
        .select('*')
        .eq('user_id', userId) as { data: Row<'user_subscriptions'>[] | null; error: any }
      return { data, error }
    },
    create: async (data: Insert<'user_subscriptions'>) => {
      const supabase = await createClient()
      const { data: inserted, error } = await supabase
        .from('user_subscriptions')
        .insert(data)
        .select() as { data: Row<'user_subscriptions'>[] | null; error: any }
      return { data: inserted, error }
    },
    update: async (id: string, data: Update<'user_subscriptions'>) => {
      const supabase = await createClient()
      const { data: updated, error } = await supabase
        .from('user_subscriptions')
        .update(data)
        .eq('id', id)
        .select() as { data: Row<'user_subscriptions'>[] | null; error: any }
      return { data: updated, error }
    },
    delete: async (id: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('user_subscriptions')
        .delete()
        .eq('id', id)
      return { data, error }
    },
  },

  user_payments: {
    getByUser: async (userId: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('user_payments')
        .select('*')
        .eq('user_id', userId) as { data: Row<'user_payments'>[] | null; error: any }
      return { data, error }
    },
    create: async (data: Insert<'user_payments'>) => {
      const supabase = await createClient()
      const { data: inserted, error } = await supabase
        .from('user_payments')
        .insert(data)
        .select() as { data: Row<'user_payments'>[] | null; error: any }
      return { data: inserted, error }
    },
    delete: async (id: string) => {
      const supabase = await createClient()
      const { data, error } = await supabase
        .from('user_payments')
        .delete()
        .eq('id', id)
      return { data, error }
    },
  },


  
}



export interface GeneralResponse {
  status: boolean;
  data: any;
  error: any;
}