import FreeTemplateA from "@/components/templates/new/t8tempo/menu/FreeTemplateA";
import FreeTemplateB from "@/components/templates/new/t8tempo/menu/FreeTemplateB";
import PremiumTemplateA from "@/components/templates/new/t8tempo/menu/PremiumTemplateA";
import PremiumTemplateB from "@/components/templates/new/t8tempo/menu/PremiumTemplateB";
import PremiumTemplateC from "@/components/templates/new/t8tempo/menu/PremiumTemplateC";
import PremiumTemplateD from "@/components/templates/new/t8tempo/menu/PremiumTemplateD";
import PremiumTemplateE from "@/components/templates/new/t8tempo/menu/PremiumTemplateE";
import PremiumTemplateF from "@/components/templates/new/t8tempo/menu/PremiumTemplateF";
import FreeTemplateProfileA from "@/components/templates/new/t8tempo/profile/FreeTemplateA";
import FreeTemplateProfileB from "@/components/templates/new/t8tempo/profile/FreeTemplateB";
import FreeTemplateProfileC from "@/components/templates/new/t8tempo/profile/FreeTemplateC";
import FreeTemplateProfileD from "@/components/templates/new/t8tempo/profile/FreeTemplateD";
import PremiumTemplatePA from "@/components/templates/new/t8tempo/profile/PremiumTemplateA";
import PremiumTemplatePB from "@/components/templates/new/t8tempo/profile/PremiumTemplateB";
import PremiumTemplatePC from "@/components/templates/new/t8tempo/profile/PremiumTemplateC";
import PremiumTemplatePD from "@/components/templates/new/t8tempo/profile/PremiumTemplateD";

export interface TemplateInfo {
  id: string;
  title: string;
  thumbnail: string;
  theme_type: string;  // public or private
  profileOnly: boolean; // has menu ? 
  component: React.ComponentType<any>; // رابط صفحة المعاينة
  isPremium?: boolean;
}


export const templatesList: TemplateInfo[] = [
  // profiles without menu
  {
    id: "profile-f-a",
    title: "التصميم البسيط",
    thumbnail: "/thumbs/p1.png",
    component: FreeTemplateProfileA,
    isPremium: false,
     theme_type: "public",  // public or private
     profileOnly: true // has menu ? 
  },
  {
    id: "profile-f-b",
    title: "العرض الكلاسيكي",
    thumbnail: "/thumbs/p2.png",
    component: FreeTemplateProfileB,
    // path: "/templates/premium-f",
    isPremium: false,
     theme_type: "public",  // public or private
     profileOnly: true // has menu ? 
  },
  {
   id: "profile-f-c",
    title: "العرض المزدوج",
    thumbnail: "/thumbs/p3.png",
    component: FreeTemplateProfileC,
    isPremium: false,
     theme_type: "public",  // public or private
     profileOnly: true // has menu ? 
  },
   {
    id: "profile-f-d",
    title: "الخط الزمني",
    thumbnail: "/thumbs/p4.png",
    component: FreeTemplateProfileD,
    // path: "/templates/premium-f",
    isPremium: false,
     theme_type: "public",  // public or private
     profileOnly: true // has menu ? 
  },
  {
    id: "profile-p-a",
    title: "التصميم العصري",
    thumbnail: "/thumbs/p5.png",
    // path: "/templates/premium-f",  
    component: PremiumTemplatePA,
 theme_type: "public",  // public or private
     profileOnly: true, // has menu ? 
    isPremium: true,
  },
  {
    id: "profile-p-b",
    title: "انيق ومتطور ",
    thumbnail: "/thumbs/p6.png",
    // path: "/templates/premium-f", 
    component: PremiumTemplatePB,
 theme_type: "public",  // public or private
     profileOnly: true, // has menu ? 
    isPremium: true,
  },
  {
   id: "profile-p-e",
    title: "نيون متألق",
    thumbnail: "/thumbs/p7.png",
 theme_type: "public",  // public or private
     profileOnly: true, // has menu ? 
    component: PremiumTemplatePC,

    isPremium: true,
  },
   {
    id: "profile-p-f",
    title: "العرض الراقي",
    thumbnail: "/thumbs/p8.png",
    component: PremiumTemplatePD,
 theme_type: "public",  // public or private
     profileOnly: true, // has menu ? 
    isPremium: true,
  },



  // profiles with menu



  {
    id: "menu-f-a",
    title: "القائمة الكلاسيكية",
    thumbnail: "/thumbs/pm1.png",
    // path: "/templates/premium-f",
    component: FreeTemplateA,
 theme_type: "public",  // public or private
     profileOnly: false, // has menu ? 
    isPremium: true,
  },
  {
    id: "menu-f-b",
    title: "القائمة المنوعة",
    thumbnail: "/thumbs/pm2.png",
    component: FreeTemplateB,
 theme_type: "public",  // public or private
     profileOnly: false, // has menu ? 
    isPremium: true,
  },
  {
    id: "menu-p-a",
    title: "الشبكة الليلية",
    thumbnail: "/thumbs/pm3.png",
    component: PremiumTemplateA,
 theme_type: "public",  // public or private
     profileOnly: false, // has menu ? 
    isPremium: true,
  },
  {
    id: "menu-p-b",
   title: "الكروت الذهبية",
    thumbnail: "/thumbs/pm4.png",
    component: PremiumTemplateB,
    isPremium: true,
     theme_type: "public",  // public or private
     profileOnly: false, // has menu ? 
  },
  {
    id: "menu-p-c",
    title: "عاشق الظلام",
    thumbnail: "/thumbs/pm5.png",
    component: PremiumTemplateC,
    // path: "/templates/premium-f",
    isPremium: true,
     theme_type: "public",  // public or private
     profileOnly: false, // has menu ? 
  },
  {
    id: "menu-p-d",
    title: "كلاسيكي متدرج",
    thumbnail: "/thumbs/pm6.png",
    component: PremiumTemplateD,
    // path: "/templates/premium-f",
    isPremium: true,
     theme_type: "public",  // public or private
     profileOnly: false, // has menu ? 
  },
  {
   id: "menu-p-e",
    title: "القائمة النارية",
    thumbnail: "/thumbs/pm7.png",
    component: PremiumTemplateE,
    // path: "/templates/premium-f",
    isPremium: true,
     theme_type: "public",  // public or private
     profileOnly: false, // has menu ? 
  },
  {
    id: "menu-p-f",
    title: "البحر الهادئ",
    thumbnail: "/thumbs/pm8.png",
    component: PremiumTemplateF,
    // path: "/templates/premium-f",
    isPremium: true,
     theme_type: "public",  // public or private
     profileOnly: false, // has menu ? 
  },


];
