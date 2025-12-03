export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Entities {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          user_id: string;
          title: string | null;
          description: string | null;
    banner_url: string | null;
  banner_public_id: string | null; // ← جديد
  logo_url: string | null;
  logo_public_id: string | null;   // ← جديد   // ← جديد
          address: string | null;
          profile_theme: string | null;
          // menu_theme: string | null;
          link_slug: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          title?: string | null;
          description?: string | null;
 banner_url?: string | null;
  banner_public_id?: string | null; // ← جديد
  logo_url?: string | null;
  logo_public_id?: string | null;   // ← جديد   // ← جديد
          address?: string | null;
          profile_theme?: string | null;
          // menu_theme?: string | null;
          link_slug?: string | null;
          is_active?: boolean;
        };
        Update: {
          title?: string | null;
          description?: string | null;
  banner_url?: string | null;
  banner_public_id?: string | null; // ← جديد
  logo_url?: string | null;
  logo_public_id?: string | null;   // ← جديد  // ← جديد
          address?: string | null;
          profile_theme?: string | null;
          // menu_theme?: string | null;
          link_slug?: string | null;
          is_active?: boolean;
        };
        Delete: {
          id: string;
        };
      };

      categories: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          name: string;
        };
        Update: {
          name?: string;
        };
        Delete: {
          id: string;
        };
      };

      items: {
        Row: {
          id: string;
          user_id: string;
          name: string;
  image_url: string | null;
  image_public_id: string | null; // ← جديد
          description: string | null;
          category_id: string | null;
          has_price: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          name: string;
          image_url?: string | null;
  image_public_id?: string | null; // ← جديد
          description?: string | null;
          category_id?: string | null;
          has_price?: boolean;
        };
        Update: {
          name?: string;
        image_url?: string | null;
  image_public_id?: string | null; // ← جديد
          description?: string | null;
          category_id?: string | null;
          has_price?: boolean;
        };
        Delete: {
          id: string;
        };
      };

      item_prices: {
        Row: {
          id: string;
          item_id: string;
          label: string | null;
          amount: number | null;
          is_main: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          item_id: string;
          label?: string | null;
          amount?: number | null;
          is_main?: boolean;
        };
        Update: {
          label?: string | null;
          amount?: number | null;
          is_main?: boolean;
        };
        Delete: {
          id: string;
        };
      };

      profile_menu_items: {
        Row: {
          id: string;
          profile_id: string;
          item_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          profile_id: string;
          item_id: string;
        };
        Update: {};
        Delete: {
          id: string;
        };
      };

      contact_types: {
        Row: {
          id: string;
          name: string;
          icon: string | null;
          open_type: string | null;
        };
        Insert: {
          name: string;
          icon?: string | null;
          open_type?: string | null;
        };
        Update: {
          name?: string;
          icon?: string | null;
          open_type?: string | null;
        };
        Delete: {
          id: string;
        };
      };

      profile_contacts: {
        Row: {
          id: string;
          user_id: string;
          profile_id: string;
          contact_type_id: string;
          value: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          profile_id: string;
          contact_type_id: string;
          value?: string | null;
          is_active?: boolean;
        };
        Update: {
          value?: string | null;
          is_active?: boolean;
        };
        Delete: {
          id: string;
        };
      };

      profile_working_hours: {
        Row: {
          id: string;
          user_id: string;
          profile_id: string;
          day_name: string;
          open_time: string | null;
          close_time: string | null;
          is_closed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          profile_id: string;
          day_name: string;
          open_time?: string | null;
          close_time?: string | null;
          is_closed?: boolean;
        };
        Update: {
          open_time?: string | null;
          close_time?: string | null;
          is_closed?: boolean;
        };
        Delete: {
          id: string;
        };
      };

      themes: {
        Row: {
          id: string;
          name: string;
          price: number;
          theme_type: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          name: string;
          price?: number;
          theme_type: string;
        };
        Update: {
          name?: string;
          price?: number;
          theme_type?: string;
        };
        Delete: {
          id: string;
        };
      };

      user_themes: {
        Row: {
          id: string;
          user_id: string;
          theme_id: string;
          amount_paid: number | null;
          payment_date: string | null;
          receipt_url: string | null;
        };
        Insert: {
          user_id: string;
          theme_id: string;
          amount_paid?: number | null;
          payment_date?: string | null;
          receipt_url?: string | null;
        };
        Update: {
          amount_paid?: number | null;
          payment_date?: string | null;
          receipt_url?: string | null;
        };
        Delete: {
          id: string;
        };
      };

      user_subscriptions: {
        Row: {
          id: string;
          user_id: string;
          status: string;
          type: string;
          start_date: string | null;
          renewal_date: string | null;
          profiles_limit: number | null;
          items_limit: number | null;
          amount: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          status: string;
          type: string;
          start_date?: string | null;
          renewal_date?: string | null;
          profiles_limit?: number | null;
          items_limit?: number | null;
          amount?: number | null;
        };
        Update: {
          status?: string;
          type?: string;
          start_date?: string | null;
          renewal_date?: string | null;
          profiles_limit?: number | null;
          items_limit?: number | null;
          amount?: number | null;
        };
        Delete: {
          id: string;
        };
      };

      user_payments: {
        Row: {
          id: string;
          user_id: string;
          amount: number;
          months: number | null;
          payment_date: string;
          receipt_url: string | null;
          receipt_P_Key: string | null;
          profiles_count:number;
          items_count: number;
          isPinding: boolean;
          // phone_number:  string | null;
          // phone_number_rec:  string | null;
          cash_type:  string | null;
        };
        Insert: {
          user_id: string;
          amount: number;
          months?: number | null;
          receipt_url?: string | null;
          receipt_P_Key?: string | null;
          profiles_count:number;
          items_count: number;
          // phone_number:  string | null;
          // phone_number_rec:  string | null;
          isPinding: boolean ;
          cash_type:  string | null;
        };
        Update: {
          amount?: number;
          months?: number | null;
          payment_date?: string;
          receipt_url?: string | null;
          receipt_P_Key: string | null;
          profiles_count:number;
          items_count: number;
          // phone_number:  string | null;
          // phone_number_rec:  string | null;
          isPinding: boolean ;
          cash_type:  string | null;
        };
        Delete: {
          id: string;
          receipt_P_Key: string | null;
        };
      };
    };
  };
}
