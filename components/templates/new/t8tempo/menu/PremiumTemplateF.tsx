// import { useState } from "react";
// import { profileWithMenu, allCategories } from "../mock";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { MapPin, Phone, Instagram, ShoppingBag } from "lucide-react";

// const PremiumTemplateF = () => {
//   const profile = profileWithMenu;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
//       {/* Elegant Header */}
//       <header className="bg-white shadow-sm py-8 px-4 sticky top-0 z-10 border-b-4 border-rose-500">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center shadow-lg">
//                 <span className="text-2xl font-bold text-white">
//                   {profile.title.charAt(0)}
//                 </span>
//               </div>
//               <div className="text-center md:text-right">
//                 <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{profile.title}</h1>
//                 <p className="text-slate-600">{profile.description}</p>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-3">
//               {profile.socials.map((social) => (
//                 <Button
//                   key={social.id}
//                   size="icon"
//                   className="rounded-full bg-gradient-to-br from-rose-500 to-orange-500"
//                   onClick={() => window.open(social.value, '_blank')}
//                 >
//                   {social.icon === 'whatsapp' ? <Phone className="w-4 h-4" /> : <Instagram className="w-4 h-4" />}
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Tabs Navigation */}
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <Tabs defaultValue={allCategories[0]} className="w-full">
//           <TabsList className="w-full justify-start overflow-x-auto h-auto flex-wrap gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-sm mb-8">
//             {allCategories.map((category) => (
//               <TabsTrigger
//                 key={category}
//                 value={category}
//                 className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-orange-500 data-[state=active]:text-white px-6 py-3 font-semibold transition-all"
//               >
//                 {category}
//               </TabsTrigger>
//             ))}
//           </TabsList>

//           {allCategories.map((category) => {
//             const categoryItems = profile.menuItems?.filter(
//               item => item.category === category
//             ) || [];

//             return (
//               <TabsContent key={category} value={category} className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {categoryItems.map((item, index) => (
//                     <div
//                       key={item.id}
//                       className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-rose-300 animate-fade-in"
//                       style={{ animationDelay: `${index * 0.05}s` }}
//                     >
//                       <div className="relative h-48 bg-gradient-to-br from-rose-100 to-orange-100 flex items-center justify-center overflow-hidden">
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                         <span className="text-7xl relative z-10 group-hover:scale-110 transition-transform">🍽️</span>
//                         <div className="absolute top-3 left-3 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold">
//                           {item.price} ج.م
//                         </div>
//                       </div>
                      
//                       <div className="p-5">
//                         <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-1">
//                           {item.name}
//                         </h3>
//                         <p className="text-sm text-slate-600 line-clamp-2 mb-4">
//                           {item.description}
//                         </p>
//                         <Button 
//                           className="w-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 group-hover:shadow-lg transition-all"
//                           size="sm"
//                         >
//                           <ShoppingBag className="w-4 h-4 ml-2" />
//                           إضافة للطلب
//                         </Button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </TabsContent>
//             );
//           })}
//         </Tabs>
//       </div>

//       {/* Footer */}
//       <footer className="bg-white border-t border-rose-200 py-8 px-4 mt-12">
//         <div className="max-w-6xl mx-auto text-center space-y-3">
//           <div className="flex items-center justify-center gap-2 text-slate-600">
//             <MapPin className="w-4 h-4" />
//             <span>{profile.address}</span>
//           </div>
//           <p className="text-xs text-slate-500">
//             Menu – Premium Template F (Tabs with Animations)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PremiumTemplateF;

// "use client";

// import { useState } from "react";
// import { profileWithMenu, allCategories, Social } from "../mock";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { MapPin, Phone, Instagram, Facebook, Twitter, Youtube, Linkedin, MessageCircle, Smartphone, Globe, ShoppingBag } from "lucide-react";
// import { Profilexm } from "./FreeTemplateA";

// type Props = {
//   model?: Profilexm;
// };

// const PremiumTemplateF = ({ model }: Props) => {
//   const profile = model || profileWithMenu;

// const categories = profile.menuItems && profile.menuItems.length > 0
//   ? Array.from(new Set(profile.menuItems.map(item => item.category)))
//   : allCategories;

//   // const [selectedCategory, setSelectedCategory] = useState(categories[0]);


//   const getSocialIcon = (iconName: string) => {
//     switch(iconName.toLowerCase()) {
//       case 'whatsapp': return <MessageCircle className="w-4 h-4" />;
//       case 'phone': return <Phone className="w-4 h-4" />;
//       case 'instagram': return <Instagram className="w-4 h-4" />;
//       case 'facebook': return <Facebook className="w-4 h-4" />;
//       case 'twitter': return <Twitter className="w-4 h-4" />;
//       case 'youtube': return <Youtube className="w-4 h-4" />;
//       case 'linkedin': return <Linkedin className="w-4 h-4" />;
//       case 'tiktok': return <Smartphone className="w-4 h-4" />;
//       default: return <Globe className="w-4 h-4" />;
//     }
//   };

//   const getSocialLink = (social : Social) => {
//     switch(social.icon.toLowerCase()) {
//       case 'phone': return `tel:${social.value}`;
//       case 'whatsapp': return social.value.includes('http') ? social.value : `https://wa.me/${social.value}`;
//       case 'mail': return `mailto:${social.value}`;
//       default: return social.value.startsWith('http') ? social.value : `https://${social.value}`;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-linear-to-br from-rose-50 via-orange-50 to-amber-50">
      
//       {/* Elegant Header */}
//       <header className="bg-white shadow-sm py-8 px-4 sticky top-0 z-10 border-b-4 border-rose-500">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="flex items-center gap-4">
//             <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
//               <img src={profile.logo} alt={profile.title} className="w-full h-full object-cover" />
//             </div>
//             <div className="text-center md:text-right">
//               <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{profile.title}</h1>
//               <p className="text-slate-600">{profile.description}</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 size="icon"
//                 className="rounded-full bg-linear-to-br from-rose-500 to-orange-500"
//                 onClick={() => window.open(getSocialLink(social), '_blank')}
//               >
//                 {getSocialIcon(social.icon)}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </header>

//       {/* Tabs Navigation */}
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <Tabs defaultValue={categories[0]} className="w-full">
//           <TabsList className="w-full justify-start overflow-x-auto h-auto flex-wrap gap-2 bg-white/80 backdrop-blur-sm p-3 rounded-2xl shadow-sm mb-8">
//             {categories.map((category) => (
//               <TabsTrigger
//                 key={category}
//                 value={category}
//                 className="rounded-xl data-[state=active]:bg-linear-to-r data-[state=active]:from-rose-500 data-[state=active]:to-orange-500 data-[state=active]:text-white px-6 py-3 font-semibold transition-all"
//               >
//                 {category}
//               </TabsTrigger>
//             ))}
//           </TabsList>

//           {categories.map((category) => {
//             const categoryItems = profile.menuItems?.filter(item => item.category === category) || [];
//             return (
//               <TabsContent key={category} value={category} className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {categoryItems.map((item, index) => (
//                     <div
//                       key={item.id}
//                       className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-rose-300 animate-fade-in"
//                       style={{ animationDelay: `${index * 0.05}s` }}
//                     >
//                       <div className="relative h-48 flex items-center justify-center overflow-hidden bg-linear-to-br from-rose-100 to-orange-100">
//                         {item.image ? (
//                           <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                         ) : (
//                           <span className="text-7xl relative z-10">🍽️</span>
//                         )}
//                         <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                       </div>

//                       <div className="p-5">
//                         <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-1">{item.name}</h3>
//                         <p className="text-sm text-slate-600 line-clamp-2 mb-4">{item.description}</p>

//                         {/* Display All Prices */}
//                         <div className="flex flex-col gap-1 mb-3">
//                           {item.prices.map((p) => (
//                             <span key={p.id} className="text-sm text-rose-600">
//                               {p.lable} : {p.amount} ج.م
//                             </span>
//                           ))}
//                         </div>

//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </TabsContent>
//             );
//           })}
//         </Tabs>
//       </div>

//       {/* Footer */}
//       <footer className="bg-white border-t border-rose-200 py-8 px-4 mt-12">
//         <div className="max-w-6xl mx-auto text-center space-y-3">
//           <div className="flex items-center justify-center gap-2 text-slate-600">
//             <MapPin className="w-4 h-4" />
//             <span>{profile.address}</span>
//           </div>
//           <p className="text-xs text-slate-500">
//             Menu – Premium Template F (Tabs with Animations)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PremiumTemplateF;


// البحر الهادي 


"use client";

import { useState } from "react";
import { profileWithMenu, allCategories, Social } from "../mock";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  MessageCircle,
  Smartphone,
  Globe,
} from "lucide-react";
import { Profilexm } from "./FreeTemplateA";
import { getSocialIconHelper, openSocialLinkHelper } from "./helpers";

type Props = {
  model?: Profilexm;
};

const PremiumTemplateF = ({ model }: Props) => {
  const profile = model || profileWithMenu;

const isMock = !model; // معناها: مفيش model مبعوت

const categories = isMock
  ? allCategories
  : Array.from(new Set(profile.menuItems?.map(item => item.category) || []));

  // const getSocialIcon = (iconName: string) => {
  //   switch (iconName.toLowerCase()) {
  //     case "whatsapp":
  //       return <MessageCircle className="w-4 h-4" />;
  //     case "phone":
  //       return <Phone className="w-4 h-4" />;
  //     case "instagram":
  //       return <Instagram className="w-4 h-4" />;
  //     case "facebook":
  //       return <Facebook className="w-4 h-4" />;
  //     case "twitter":
  //       return <Twitter className="w-4 h-4" />;
  //     case "youtube":
  //       return <Youtube className="w-4 h-4" />;
  //     case "linkedin":
  //       return <Linkedin className="w-4 h-4" />;
  //     case "tiktok":
  //       return <Smartphone className="w-4 h-4" />;
  //     default:
  //       return <Globe className="w-4 h-4" />;
  //   }
  // };

  // const getSocialLink = (social: Social) => {
  //   switch (social.icon.toLowerCase()) {
  //     case "phone":
  //       return `tel:${social.value}`;
  //     case "whatsapp":
  //       return social.value.includes("http")
  //         ? social.value
  //         : `https://wa.me/${social.value}`;
  //     case "mail":
  //       return `mailto:${social.value}`;
  //     default:
  //       return social.value.startsWith("http")
  //         ? social.value
  //         : `https://${social.value}`;
  //   }
  // };

  return (
    <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-[#b4e0ff] via-[#d7f3ff] to-white">

      {/* 🌊 خلفية البحر المتحركة */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* موجة 1 */}
        <div className="absolute top-0 left-0 w-full h-[300px] bg-[url('/waves/wave1.svg')] bg-repeat-x opacity-40 animate-wave-slow" />
        {/* موجة 2 */}
        <div className="absolute top-10 left-0 w-full h-[300px] bg-[url('/waves/wave2.svg')] bg-repeat-x opacity-30 animate-wave-medium" />
        {/* موجة 3 */}
        <div className="absolute top-20 left-0 w-full h-[300px] bg-[url('/waves/wave3.svg')] bg-repeat-x opacity-20 animate-wave-fast" />
      </div>

      {/* HEADER */}
      <header className="relative z-10 bg-white/70 backdrop-blur-md shadow-sm py-8 px-4 sticky top-0 border-b-4 border-[#4aa8df]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-[#66bdf3]">
              <img
                src={profile.logo}
                alt={profile.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center md:text-right">
              <h1 className="text-2xl md:text-3xl font-bold text-[#003e5f]">
                {profile.title}
              </h1>
              <p className="text-[#005a7a]">{profile.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {profile.socials.map((social) => (
              <Button
                key={social.id}
                size="icon"
                className="rounded-full bg-gradient-to-br from-[#4aa8df] to-[#2f7eb4] hover:opacity-90"
                onClick={() => {openSocialLinkHelper(social.icon,social.value)}}
              >
                {getSocialIconHelper(social.icon)}
              </Button>
            ))}
          </div>
        </div>
      </header>

      {/* TABS */}
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto h-auto flex-wrap gap-2 bg-white/70 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-[#a7d8f3] mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="rounded-xl data-[state=active]:bg-linear-to-r data-[state=active]:from-[#4aa8df] data-[state=active]:to-[#2f7eb4] data-[state=active]:text-white px-6 py-3 font-semibold transition-all"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => {
            const categoryItems =
              profile.menuItems?.filter(
                (item) => item.category === category
              ) || [];

            return (
              <TabsContent key={category} value={category} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="group bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-transparent hover:border-[#8ccbf0] transition-all cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="relative h-48 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#cfefff] to-[#a8d9f5]">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-7xl">🍽️</span>
                        )}

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>

                      <div className="p-5">
                        <h3 className="font-bold text-lg text-[#003e5c] mb-2 line-clamp-1">
                          {item.name}
                        </h3>

                        <p className="text-sm text-[#00648a] line-clamp-2 mb-4">
                          {item.description}
                        </p>

                        <div className="flex flex-col gap-1 mb-3">
                          {item.prices.map((p) => (
                            <span key={p.id} className="text-sm text-[#0073a6]">
                              {p.lable} : {p.amount} ج.م
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 bg-white/70 backdrop-blur-md border-t border-[#8ccbf0] py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-[#005777]">
            <MapPin className="w-4 h-4" />
            <span>{profile.address}</span>
          </div>
          {/* <p className="text-xs text-[#00425e]">
            Menu – Premium Template F (Ocean Calm Edition)
          </p> */}
        </div>
      </footer>
    </div>
  );
};

export default PremiumTemplateF;

// "use client";

// import { useState } from "react";
// import { profileWithMenu, allCategories, Social } from "../mock";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { MapPin, Phone, Instagram, Facebook, Twitter, Youtube, Linkedin, MessageCircle, Smartphone, Globe } from "lucide-react";
// import { Profilexm } from "./FreeTemplateA";

// type Props = {
//   model?: Profilexm;
// };

// const PremiumTemplateF = ({ model }: Props) => {
//   const profile = model || profileWithMenu;
//   const categories = profile.menuItems?.length ? Array.from(new Set(profile.menuItems.map(i => i.category))) : allCategories;

//   const getSocialIcon = (iconName: string) => {
//     switch (iconName.toLowerCase()) {
//       case "whatsapp": return <MessageCircle className="w-4 h-4" />;
//       case "phone": return <Phone className="w-4 h-4" />;
//       case "instagram": return <Instagram className="w-4 h-4" />;
//       case "facebook": return <Facebook className="w-4 h-4" />;
//       case "twitter": return <Twitter className="w-4 h-4" />;
//       case "youtube": return <Youtube className="w-4 h-4" />;
//       case "linkedin": return <Linkedin className="w-4 h-4" />;
//       case "tiktok": return <Smartphone className="w-4 h-4" />;
//       default: return <Globe className="w-4 h-4" />;
//     }
//   };

//   const getSocialLink = (social: Social) => {
//     switch(social.icon.toLowerCase()){
//       case "phone": return `tel:${social.value}`;
//       case "whatsapp": return social.value.includes("http") ? social.value : `https://wa.me/${social.value}`;
//       case "mail": return `mailto:${social.value}`;
//       default: return social.value.startsWith("http") ? social.value : `https://${social.value}`;
//     }
//   };

//   return (
//     <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#00cfff] via-[#66e0ff] to-[#a7f0ff]">

//       {/* 🌊 خلفية البحر المتوسط المتحركة */}
//       <div className="pointer-events-none absolute inset-0 z-0">
//         <div className="absolute top-0 left-0 w-full h-[250px] bg-[url('/waves/med_wave1.svg')] bg-repeat-x opacity-40 animate-wave-slow" />
//         <div className="absolute top-10 left-0 w-full h-[250px] bg-[url('/waves/med_wave2.svg')] bg-repeat-x opacity-30 animate-wave-medium" />
//       </div>

//       {/* HEADER */}
//       <header className="relative z-10 bg-white/50 backdrop-blur-md shadow-sm py-8 px-4 sticky top-0 border-b-4 border-[#00a3cc]">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="flex items-center gap-4">
//             <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-[#33c0e0]">
//               <img src={profile.logo} alt={profile.title} className="w-full h-full object-cover" />
//             </div>
//             <div className="text-center md:text-right">
//               <h1 className="text-2xl md:text-3xl font-bold text-[#004e6b]">{profile.title}</h1>
//               <p className="text-[#007da6]">{profile.description}</p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             {profile.socials.map(social => (
//               <Button
//                 key={social.id}
//                 size="icon"
//                 className="rounded-full bg-gradient-to-br from-[#00a3cc] to-[#0090b8] hover:opacity-90"
//                 onClick={() => window.open(getSocialLink(social), "_blank")}
//               >
//                 {getSocialIcon(social.icon)}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </header>

//       {/* TABS */}
//       <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
//         <Tabs defaultValue={categories[0]} className="w-full">
//           <TabsList className="flex-wrap gap-2 bg-white/50 backdrop-blur-md p-3 rounded-2xl border border-[#66d4e5] shadow-inner mb-8">
//             {categories.map(category => (
//               <TabsTrigger
//                 key={category}
//                 value={category}
//                 className="text-[#007da6] border border-[#66d4e5]/50 rounded-xl px-6 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00cfff] data-[state=active]:to-[#00a3cc] data-[state=active]:text-white transition-all"
//               >
//                 {category}
//               </TabsTrigger>
//             ))}
//           </TabsList>

//           {categories.map(category => {
//             const items = profile.menuItems?.filter(i=>i.category===category) || [];
//             return (
//               <TabsContent key={category} value={category} className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {items.map((item,i)=>(
//                     <div key={item.id} className="group rounded-2xl overflow-hidden bg-white/40 border border-[#00cfff]/30 hover:border-[#33e0ff] hover:shadow-lg transition-all cursor-pointer">
//                       <div className="relative h-48 overflow-hidden">
//                         {item.image ? <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition" /> : <span className="text-7xl text-[#00cfff]">🍽️</span>}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-70 transition"></div>
//                       </div>

//                       <div className="p-5">
//                         <h3 className="font-bold text-lg text-[#004e6b] mb-2">{item.name}</h3>
//                         <p className="text-sm text-[#007da6] mb-3">{item.description}</p>
//                         <div className="flex flex-col gap-1">
//                           {item.prices.map(p => <span key={p.id} className="text-sm text-[#0090b8]">{p.lable}: {p.amount} ج.م</span>)}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </TabsContent>
//             );
//           })}

//         </Tabs>
//       </div>

//       {/* FOOTER */}
//       <footer className="relative z-10 bg-white/50 backdrop-blur-md border-t border-[#66d4e5] py-8 px-4 mt-12">
//         <div className="max-w-6xl mx-auto text-center space-y-3">
//           <div className="flex items-center justify-center gap-2 text-[#007da6]">
//             <MapPin className="w-4 h-4" />
//             <span>{profile.address}</span>
//           </div>
//           <p className="text-xs text-[#004e6b]">Menu – Premium Template F (Mediterranean Blue Edition)</p>
//         </div>
//       </footer>

//     </div>
//   );
// };

// export default PremiumTemplateF;
