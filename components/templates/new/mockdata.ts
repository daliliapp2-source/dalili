
// ////// ############################################# MODELS ############################################# //////


// export type TemplateType = "profile" | "pro-Menu";


// export interface Template {
//   id: string;
//   name: string;
//   description: string;
//   type: TemplateType;
//   premium: boolean;
//   component: React.ComponentType<any>;
// }


// export interface profile_working_hours {
//     day_name : string
//     open_time : string
//     close_time : string
//     is_closed : boolean
// }


// export interface ItemPricex { id?: string; title: string; price: number; }
// export interface profile_menu_items {
//   id?: string;
//   name: string;
//   description: string;
//   image?: string;
//   category: string;
//   category_id: string;
//   prices: ItemPricex[];
// }

// export interface profile_contacts {
//   id?: string;
//   name: string;
//   value: string;
//   open_type: string;
//   icon: string;
// }


// export interface ProfileFullData {
//   id?: string;
//   banner: string; //banner_url
//   logo: string;  // logo_url
//   title: string; 
//   description: string;
//   address: string;

//   /////

//   profile_theme?: string;
//  // menu_theme?: string;
//   link_slug?: string;

// ///////

//   socials: profile_contacts[];
//   workingHours? : profile_working_hours[];

//   menuItems?: profile_menu_items[];


// }



// export const mockProfileNoMenu: ProfileFullData = {
//   id: "p1",
//   banner: "/mock/banner.jpg",
//   logo: "/mock/logo.png",
//   title: "صالون النخبة",
//   description: "خبرة سنوات في تقديم أفضل خدمات العناية والجمال.",
//   address: "القاهرة، مدينة نصر، شارع الطيران",

//   profile_theme: "classic",
//   link_slug: "elite-salon",

//   socials: [
//     { id: "s1", name: "واتساب", value: "01234567890", open_type: "whatsapp", icon: "whatsapp" },
//     { id: "s2", name: "فيسبوك", value: "elite-salon", open_type: "facebook", icon: "facebook" },
//     { id: "s3", name: "انستجرام", value: "elite_salon", open_type: "instagram", icon: "instagram" },
//   ],

//   workingHours: [
//     { day_name: "السبت", open_time: "10:00", close_time: "22:00", is_closed: false },
//     { day_name: "الأحد", open_time: "10:00", close_time: "22:00", is_closed: false },
//     { day_name: "الإثنين", open_time: "10:00", close_time: "22:00", is_closed: false },
//     { day_name: "الثلاثاء", open_time: "10:00", close_time: "22:00", is_closed: false },
//     { day_name: "الأربعاء", open_time: "10:00", close_time: "22:00", is_closed: false },
//     { day_name: "الخميس", open_time: "10:00", close_time: "22:00", is_closed: false },
//     { day_name: "الجمعة", open_time: "مغلق", close_time: "مغلق", is_closed: true },
//   ],
// };

// const mockCategories = [
//   { id: "c1", name: "الوجبات السريعة" },
//   { id: "c2", name: "المشروبات" },
//   { id: "c3", name: "الحلويات" },
//   { id: "c4", name: "الساندوتشات" },
//   { id: "c5", name: "السلطات" },
// ];


// const generateItems = (categoryId: string, categoryName: string): profile_menu_items[] => {
//   const items: profile_menu_items[] = [];

//   for (let i = 1; i <= 20; i++) {
//     items.push({
//       id: `${categoryId}-i${i}`,
//       name: `${categoryName} ${i}`,
//       description: `وصف مختصر للعنصر رقم ${i} من فئة ${categoryName}.`,
//       image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=400&fit=crop",
//       category: categoryName,
//       category_id: categoryId,
//       prices: [
//         { id: `${categoryId}-i${i}-p1`, title: "السعر الأساسي", price: 20 + i },
//       ],
//     });
//   }

//   return items;
// };


// export const mockMenuData: profile_menu_items[] = [
//   ...generateItems("c1", "الوجبات السريعة"),
//   ...generateItems("c2", "المشروبات"),
//   ...generateItems("c3", "الحلويات"),
//   ...generateItems("c4", "الساندوتشات"),
//   ...generateItems("c5", "السلطات"),
// ];


// export const mockProfileWithMenu: ProfileFullData = {
//   id: "p2",
//   banner: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=400&fit=crop",
//   logo: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=400&fit=crop",
//   title: "مطعم الشيف",
//   description: "أفضل مأكولات شرقية وغربية بخبرة أكثر من 10 سنوات.",
//   address: "القاهرة، التجمع الخامس، شارع التسعين",

//   profile_theme: "modern",
//   link_slug: "chef-restaurant",

//   socials: [
//     { id: "s1", name: "واتساب", value: "01123456789", open_type: "whatsapp", icon: "whatsapp" },
//     { id: "s2", name: "تيك توك", value: "@chef_restaurant", open_type: "tiktok", icon: "tiktok" },
//     { id: "s3", name: "موقع إلكتروني", value: "chef.com", open_type: "website", icon: "globe" },
//   ],

//   workingHours: [
//     { day_name: "السبت", open_time: "09:00", close_time: "00:00", is_closed: false },
//     { day_name: "الأحد", open_time: "09:00", close_time: "00:00", is_closed: false },
//     { day_name: "الإثنين", open_time: "09:00", close_time: "00:00", is_closed: false },
//     { day_name: "الثلاثاء", open_time: "09:00", close_time: "00:00", is_closed: false },
//     { day_name: "الأربعاء", open_time: "09:00", close_time: "00:00", is_closed: false },
//     { day_name: "الخميس", open_time: "09:00", close_time: "00:00", is_closed: false },
//     { day_name: "الجمعة", open_time: "12:00", close_time: "00:00", is_closed: false },
//   ],

//   menuItems: mockMenuData,
// };


















// // export const mockProfileData: ProfileData = {
// //   banner: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=400&fit=crop",
// //   logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
// //   name: "مطعم الذوق الرفيع",
// //   description: "نقدم لكم أشهى المأكولات العربية والعالمية بجودة عالية وخدمة متميزة",
// //   address: "شارع الملك فهد، الرياض، المملكة العربية السعودية",
// //   phone: "+966 50 123 4567",
// //   email: "info@restaurant.com",
// //   social: {
// //     instagram: "restaurant",
// //     whatsapp: "966501234567",
// //     twitter: "restaurant",
// //     facebook: "restaurant",
// //     snapchat: "restaurant",
// //     tiktok: "restaurant",
// //     youtube: "restaurant",
// //   },
// //   workingHours: {
// //     days: "السبت - الخميس",
// //     hours: "١٠:٠٠ص - ١٢:٠٠ص",
// //   },
// // };

// // export const mockMenuData: MenuData = {
// //   logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
// //   ownerName: "مطعم الذوق الرفيع",
// //   workingHours: {
// //     days: "السبت - الخميس",
// //     hours: "١٠:٠٠ص - ١٢:٠٠ص",
// //     isOpen: true,
// //     nextOpenTime: "١٠:٠٠ صباحاً",
// //   },
// //   social: {
// //     instagram: "restaurant",
// //     whatsapp: "966501234567",
// //     twitter: "restaurant",
// //     facebook: "restaurant",
// //   },
// //   items: [
// //     {
// //       id: "1",
// //       name: "برجر اللحم الفاخر",
// //       description: "برجر لحم مع الجبن والخضروات الطازجة",
// //       image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
// //       price: 45,
// //     },
// //     {
// //       id: "2",
// //       name: "بيتزا مارجريتا",
// //       description: "بيتزا إيطالية كلاسيكية بالجبن والطماطم",
// //       image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
// //       prices: [
// //         { label: "صغير", value: 35 },
// //         { label: "وسط", value: 50 },
// //         { label: "كبير", value: 65 },
// //       ],
// //     },
// //     {
// //       id: "3",
// //       name: "سلطة سيزر",
// //       description: "سلطة طازجة مع الدجاج المشوي",
// //       image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
// //       price: 28,
// //     },
// //     {
// //       id: "4",
// //       name: "باستا الفريدو",
// //       description: "باستا بصلصة الكريمة البيضاء",
// //       image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
// //       price: 38,
// //     },
// //     {
// //       id: "5",
// //       name: "عصير طبيعي",
// //       description: "عصائر طازجة متنوعة",
// //       prices: [
// //         { label: "برتقال", value: 15 },
// //         { label: "فراولة", value: 18 },
// //         { label: "مانجو", value: 20 },
// //       ],
// //     },
// //   ],
// // };
