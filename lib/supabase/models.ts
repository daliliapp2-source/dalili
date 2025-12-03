// ==========================
// ✅ Users (المستخدمين)
// ==========================
export interface User {
  id: string;              // UID من Firebase Auth
  name: string;
  email: string;
  plan: "الخطة المجانية" | "الخطه الفردية" | "الخطه المتقدمه" | "الخطه المميزة"; // نوع الخطة
  isStatActive: boolean; // هل الاحصايات نشطة؟
  isActive: boolean; // هل الحساب نشط؟
  planPrice?: number;   
  numOfProfiles?: number;   
  numOfItems?: number;    
  maxProfiles: number; 
  maxItems: number;    
  createdAt: Date;
  updatedAt?: Date;
  expiredAt?: Date;
}

// ==========================
// ✅ Profiles (البروفايلات)
// ==========================
export interface Profile {
  id: string;               // Auto-ID من Firestore
  userId: string;           // صاحب البروفايل
  name: string;
  bio?: string;
  image?: string;           // صورة من Cloudinary
  banner?: string;          // صورة من Cloudinary
  address?: string;                   
  location?:string           // موقع جغرافي (مثلاً: latitude, longitude)
  contacts?: {
    phone?: string;
    whatsapp?: string;
    
    email?: string;
   
    website?: string;
  };
   socialMediaLinks?:SocialMediaLink[];
workingHours?:WorkingHour[];
hasItems?: boolean; // هل يحتوي على عناصر؟
hasfeedback?: boolean; // هل يحتوي على تقييمات؟
averageRating?: number;
totalRatings?: number;
createdAt: Date;
updatedAt?: Date;
}

export interface SocialMediaLink {
  platform: string;
  url: string;
}

export interface WorkingHour {
  day: string;
  isOpen: boolean;
  openTime: string;
  closeTime: string;
  period: 'AM' | 'PM';
}
export interface DashBoardProfilesData extends Profile {
  views: number;
}
export interface Plans {
  id: string;
  name: string;
  price: number; // السعر بالدولار
  maxProfiles: number; // الحد الأقصى للبروفايلات
  maxItems: number; // الحد الأقصى للعناصر
  createdAt: Date;
  updatedAt?: Date;
}

export interface currentPlan {
  //////// الداتا دي هتتملي من بيانات اليوزر المفروض 
  billingCycle: string; // دورة الفوترة (شهرية، سنوية، إلخ)
  planName: string; // اسم الخطة
  price: number; // السعر كـ number ليتناسب مع التنسيق
  profilesUsed: number; // عدد البروفايلات المستخدمة
  itemsUsed: number; // عدد العناصر المستخدمة
  profilesLimit: number; // الحد الأقصى للبروفايلات
  itemsLimit: number; // الحد الأقصى للعناصر
  daysUntilRenewal: number; // الأيام المتبقية حتى التجديد
}


// ==========================
// ✅ Feedback (التقييمات)
// ==========================



export interface Feedback {
  id: string;
  profileId: string;
  userId: string;
  rating: number;        // 1 لـ 5
  comment?: string;
  isHidden: boolean; // هل التقييم مخفي  ؟
  createdAt?: Date;
}

export interface Category {
  id: string;              // Auto-ID من Firestore
  name: string;            // اسم الفئة
  userId: string;
  createdAt: Date;
  updatedAt?: Date;
}


export interface Item {
  id: string;
  profileIds?: string[];
  userId: string;
  categoryId?: string;
  name: string;
  description?: string;
  image?: string;           // صورة من Cloudinary
  isAdd?: boolean; // هل هو اعلان أم عنصر
  prices?: 
    {
      price: number;
      title: string; // عنوان السعر large, medium, small ect
      isDefault?: boolean; // هل هو السعر الافتراضي
    }[];
  
  expiresAt?: Date; // تاريخ انتهاء الصلاحية
 
  createdAt: Date;
  updatedAt?: Date;
}

// ==========================
// ✅ Clicks (النقرات)
// ==========================
export interface Click {
  id: string;
  profileId: string;
  userId?: string;       // ممكن يكون زائر
  clickedOn: string; // العنصر الذي تم النقر عليه
  createdAt: Date;
}



export interface UserPayment {
  id: string;
  userId?: string;    // صاحب الدفع
  amount: number;     // المبلغ المدفوع
 // currency: string;   // العملة
  status: "pending" | "completed" | "failed"; // حالة الدفع
  plan: "free" | "premium" | "starter" | "enterprise"; // نوع الخطة
  createdAt: Date;
  updatedAt?: Date;
}

