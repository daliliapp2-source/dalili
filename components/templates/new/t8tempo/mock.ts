
export interface Social {
  id: string;
  name: string;
  value: string;
  open_type: string;
  icon: string;
}
export interface profile_working_hours {
    day_name : string
    open_time : string
    close_time : string
    is_closed : boolean
}

export interface ItemPricex { id?: string; lable: string; amount: number; }

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  prices: ItemPricex[];
  image: string;
  category: string;
}

export interface Profile {
  id: string;
  banner: string;
  logo: string;
  title: string;
  description: string;
  address: string;
  profile_theme?: string;
  link_slug?: string;
  socials: Social[];
  menuItems?: MenuItem[];
  workingHours? : profile_working_hours[]
}

// Profile WITHOUT Menu
export const profileWithoutMenu: Profile = {
  id: "101",
  banner: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3",
  logo: "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3",
  title: "ستوديو باور للتصميم",
  description: "نقدّم خدمات تصميم الهوية البصرية، الموشن جرافيك وتصميم السوشيال ميديا.",
  address: "القاهرة – مدينة نصر",
  socials: [
    { id: "1", name: "واتساب", value: "0102222222", open_type: "external", icon: "whatsapp" },
    { id: "8", name: "هاتف", value: "0102222222", open_type: "external", icon: "phone" },
    { id: "2", name: "انستجرام", value: "instagram.com/primo", open_type: "external", icon: "instagram" },
    { id: "3", name: "فيسبوك", value: "fb.com/primo", open_type: "external", icon: "facebook" },
    { id: "4", name: "تويتر", value: "twitter.com/primoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimoprimo", open_type: "external", icon: "twitter" },
    { id: "5", name: "يوتيوب", value: "youtube.com/primo", open_type: "external", icon: "youtube" },
    { id: "6", name: "تيك توك", value: "tiktok.com/primo", open_type: "external", icon: "tiktok" },
    { id: "7", name: "لينكدان", value: "linkedin.com/primo", open_type: "external", icon: "linkedin" },
  ]
};

// Generate 5 categories with 20 items each
const categories = [
  "قهوة ساخنة",
  "قهوة باردة", 
  "مشروبات خاصة",
  "حلويات",
  "qسناكس",
  "wqسناكس",
  "wwسناكس",
  "eسناكس",
  "rسناكس",
  "wسناكس",
  "qwfسناكس",
  "ssسناكس",
  "sسناكس",
  "aaسناكس",
  "ssssسناكس",
  "dddسناكس",
  "fffسناكس",
  "gggسناكس",
  "hhhسناكس",
  "jjjسناكس",
];

const generateMenuItems = (): MenuItem[] => {
  const items: MenuItem[] = [];
  let itemId = 1;
  
  categories.forEach((category) => {
    for (let i = 1; i <= 20; i++) {
      items.push({
        id: `item-${itemId}`,
        name: `${category} ${i}`,
        description: `وصف تفصيلي للمنتج ${i} من فئة ${category} - مكونات طازجة عالية الجودة`,

        prices: [
          { id: `item-${itemId}-p1`, lable: "السعر الأساسي", amount: Math.floor(Math.random() * 50) + 20 },
          { id: `item-${itemId}-p2`, lable: "السعر الثانوي", amount: Math.floor(Math.random() * 50) + 20 },
          { id: `item-${itemId}-p3`, lable: "السعر الثالث", amount: Math.floor(Math.random() * 50) + 20 }
        ],
        // price: Math.floor(Math.random() * 50) + 20,
        
        image:"https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3",
        category: category
      });
      itemId++;
    }
  });
  
  return items;
};

// Profile WITH Menu
export const profileWithMenu: Profile = {
  id: "202",
   banner: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3",
   logo: "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3",

  title: "كافيه بريمو",
  description: "أجود أنواع القهوة المختصة – مشروبات باردة – حلويات طازجة",
  address: "الإسكندرية – سموحة",
  // profile_theme: "premium",
  // link_slug: "primo-cafe",
  socials: [
    { id: "1", name: "واتساب", value: "0102222222", open_type: "external", icon: "whatsapp" },
    { id: "8", name: "هاتف", value: "0102222222", open_type: "external", icon: "phone" },
    { id: "2", name: "انستجرام", value: "instagram.com/primo", open_type: "external", icon: "instagram" },
    { id: "3", name: "فيسبوك", value: "fb.com/primo", open_type: "external", icon: "facebook" },
    { id: "4", name: "تويتر", value: "twitter.com/primo", open_type: "external", icon: "twitter" },
    { id: "5", name: "يوتيوب", value: "youtube.com/primo", open_type: "external", icon: "youtube" },
    { id: "6", name: "تيك توك", value: "tiktok.com/primo", open_type: "external", icon: "tiktok" },
    { id: "7", name: "لينكدان", value: "linkedin.com/primo", open_type: "external", icon: "linkedin" },

  ],
  menuItems: generateMenuItems(),
  workingHours: [
    { day_name : "الاثنين", open_time : "10:00", close_time : "22:00", is_closed : true },
    { day_name : "الثلاثاء", open_time : "10:00", close_time : "22:00", is_closed : true },
    { day_name : "الاربعاء", open_time : "10:00", close_time : "22:00", is_closed : true },
    { day_name : "الخميس", open_time : "10:00", close_time : "22:00", is_closed : true },
    { day_name : "الجمعة", open_time : "10:00", close_time : "22:00", is_closed : false },
    { day_name : "السبت", open_time : "10:00", close_time : "22:00", is_closed : true },
    { day_name : "الاحد", open_time : "10:00", close_time : "22:00", is_closed : true },
     ],

};

export const allCategories = categories;

