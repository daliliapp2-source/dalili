// import { useState } from "react";
// import { profileWithMenu, allCategories } from "../mock";
// import { Button } from "@/components/ui/button";
// import { MapPin, ChevronRight } from "lucide-react";

// const PremiumTemplateC = () => {
//   const profile = profileWithMenu;
//   const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);

//   const filteredItems = profile.menuItems?.filter(
//     item => item.category === selectedCategory
//   ) || [];

//   return (
//     <div className="min-h-screen bg-slate-950 text-white">
//       {/* Magazine Header */}
//       <header className="relative h-[60vh] bg-gradient-to-br from-red-900 via-slate-900 to-slate-950 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
//         <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
//           <div className="flex items-center gap-4 mb-6">
//             <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl">
//               <span className="text-4xl font-bold text-red-600">
//                 {profile.title.charAt(0)}
//               </span>
//             </div>
//           </div>
          
//           <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
//             {profile.title}
//           </h1>
          
//           <p className="text-xl md:text-2xl text-slate-300 mb-6 max-w-2xl">
//             {profile.description}
//           </p>
          
//           <div className="flex items-center gap-2 text-red-300">
//             <MapPin className="w-5 h-5" />
//             <span className="text-lg">{profile.address}</span>
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
//       </header>

//       {/* Category Sidebar + Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar Categories */}
//           <aside className="lg:w-64 flex-shrink-0">
//             <h2 className="text-2xl font-bold mb-6 text-red-400">قائمة الأقسام</h2>
//             <nav className="space-y-2">
//               {allCategories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`w-full text-right px-4 py-3 rounded-lg transition-all flex items-center justify-between group ${
//                     selectedCategory === category
//                       ? 'bg-red-600 text-white'
//                       : 'bg-slate-900 hover:bg-slate-800 text-slate-300'
//                   }`}
//                 >
//                   <span className="font-semibold">{category}</span>
//                   <ChevronRight className={`w-5 h-5 transition-transform ${
//                     selectedCategory === category ? 'rotate-90' : ''
//                   }`} />
//                 </button>
//               ))}
//             </nav>
//           </aside>

//           {/* Magazine Style Grid */}
//           <main className="flex-1">
//             <h2 className="text-3xl font-bold mb-8 text-red-400">{selectedCategory}</h2>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {filteredItems.map((item, index) => (
//                 <article
//                   key={item.id}
//                   className={`group cursor-pointer ${
//                     index % 5 === 0 ? 'md:col-span-2' : ''
//                   }`}
//                 >
//                   <div className={`relative overflow-hidden rounded-2xl bg-slate-900 hover-lift ${
//                     index % 5 === 0 ? 'h-96' : 'h-80'
//                   }`}>
//                     {/* Image Placeholder */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-slate-900 flex items-center justify-center">
//                       <span className="text-8xl">🍽️</span>
//                     </div>
                    
//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    
//                     {/* Content */}
//                     <div className="absolute bottom-0 left-0 right-0 p-6">
//                       <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs rounded-full mb-3">
//                         {item.category}
//                       </div>
                      
//                       <h3 className={`font-bold text-white mb-2 ${
//                         index % 5 === 0 ? 'text-3xl' : 'text-xl'
//                       }`}>
//                         {item.name}
//                       </h3>
                      
//                       <p className="text-slate-300 text-sm mb-3 line-clamp-2">
//                         {item.description}
//                       </p>
                      
//                       <div className="flex items-center justify-between">
//                         <span className="text-2xl font-bold text-red-400">
//                           {item.price} ج.م
//                         </span>
//                         <Button 
//                           size="sm"
//                           className="bg-red-600 hover:bg-red-700"
//                         >
//                           اطلب
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </main>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-slate-900 py-8 px-4 mt-16 border-t border-slate-800">
//         <div className="max-w-7xl mx-auto text-center">
//           <p className="text-sm text-slate-500">
//             Menu – Premium Template C (Magazine Style)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PremiumTemplateC;

"use client";

import { useState } from "react";
import { profileWithMenu, allCategories } from "../mock";
import { Button } from "@/components/ui/button";
import { MapPin, ChevronRight, Phone, Instagram, MessageCircle, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import { Profilexm } from "./FreeTemplateA";
import { getSocialIconHelper, openSocialLinkHelper } from "./helpers";
type Props = {
  model?: Profilexm;
};
const PremiumTemplateC = ({ model }: Props) => {
  const profile = model || profileWithMenu;

const isMock = !model; // معناها: مفيش model مبعوت

const categories = isMock
  ? allCategories
  : Array.from(new Set(profile.menuItems?.map(item => item.category) || []));

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredItems = profile.menuItems?.filter(
    item => item.category === selectedCategory
  ) || [];

  // -------------------------------------
  // ⭐ Social Icons + Link Handler
  // -------------------------------------

  // const SocialIcon = (icon: string) => {
  //   switch (icon) {
  //     case "whatsapp":
  //       return <MessageCircle className="w-5 h-5" />;
  //     case "phone":
  //       return <Phone className="w-5 h-5" />;
  //     case "facebook":
  //       return <Facebook className="w-5 h-5" />;
  //     case "instagram":
  //       return <Instagram className="w-5 h-5" />;
  //     case "twitter":
  //       return <Twitter className="w-5 h-5" />;
  //     case "youtube":
  //       return <Youtube className="w-5 h-5" />;
  //     case "linkedin":
  //       return <Linkedin className="w-5 h-5" />;
  //     default:
  //       return <MessageCircle className="w-5 h-5" />;
  //   }
  // };

  // const openSocial = (s: any) => {
  //   const v = s.value;
  //   switch (s.icon) {
  //     case "whatsapp":
  //       window.open(`https://wa.me/${v}`, "_blank");
  //       break;
  //     case "phone":
  //       window.open(`tel:${v}`);
  //       break;
  //     default:
  //       window.open(`https://${v}`, "_blank");
  //   }
  // };



  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Header with Banner */}
      <header
        className="relative h-[60vh] overflow-hidden"
        style={{
          backgroundImage: profile.banner ? `url(${profile.banner})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          {profile.logo && (
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl mb-4">
              <img src={profile.logo} alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
          )}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            {profile.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-6 max-w-2xl">
            {profile.description}
          </p>
          {profile.address && (
            <div className="flex items-center gap-2 text-red-300">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{profile.address}</span>
            </div>
          )}
          {/* {profile.socials && profile.socials.length > 0 && (
            <div className="flex items-center gap-4 mt-4">
              {profile.socials.map((social) => (
                <Button
                  key={social.id}
                  size="icon"
                  className="rounded-full bg-white/10 hover:bg-white/20"
                  onClick={() => window.open(social.value, "_blank")}
                >
                  {social.open_type === "whatsapp" ? (
                    <MessageCircle className="w-5 h-5 text-white" />
                  ) : (
                    <Instagram className="w-5 h-5 text-white" />
                  )}
                </Button>
              ))}
            </div>
          )} */}
             {/* Social Icons */}
           <div className="flex items-center gap-4 mt-6">
             {profile.socials?.map((s: any) => (
            <Button
               key={s.id}
              size="icon"
                className="rounded-full bg-white/10 hover:bg-white/20"
               onClick={() => openSocialLinkHelper(s.icon, s.value)}
             >
               {getSocialIconHelper(s.icon)}
            </Button>
            ))}
           </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-950 to-transparent"></div>
      </header>

      {/* Category Sidebar + Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Categories */}
          <aside className="lg:w-64 shrink-0">
            <h2 className="text-2xl font-bold mb-6 text-red-400">قائمة الأقسام</h2>
            <nav className="space-y-2">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-right px-4 py-3 rounded-lg transition-all flex items-center justify-between group ${
                    selectedCategory === category
                      ? "bg-red-600 text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-slate-300"
                  }`}
                >
                  <span className="font-semibold">{category}</span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      selectedCategory === category ? "rotate-90" : ""
                    }`}
                  />
                </button>
              ))}
            </nav>
          </aside>

          {/* Magazine Style Grid */}
          <main className="flex-1">
            <h2 className="text-3xl font-bold mb-8 text-red-400">{selectedCategory}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map((item, index) => (
                <article
                  key={item.id}
                  className={`group cursor-pointer ${
                    index % 5 === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl bg-slate-900 hover-lift ${
                      index % 5 === 0 ? "h-96" : "h-80"
                    }`}
                  >
                    {/* Image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        <span className="text-8xl">🍽️</span>
                      )}
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs rounded-full mb-3">
                        {item.category}
                      </div>

                      <h3
                        className={`font-bold text-white mb-2 ${
                          index % 5 === 0 ? "text-3xl" : "text-xl"
                        }`}
                      >
                        {item.name}
                      </h3>

                      <p className="text-slate-300 text-sm mb-3 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Prices */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.prices?.map((p) => (
                          <span
                            key={p.id}
                            className="px-2 py-1 bg-red-600 text-white text-xs rounded-md"
                          >
                            {p.lable}: {p.amount} ج.م
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-slate-900 py-8 px-4 mt-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-500">
            Menu – Premium Template C (Magazine Style)
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default PremiumTemplateC;




// "use client";

// import { useState, useMemo } from "react";
// import {
//   MapPin,
//   MessageCircle,
//   Phone,
//   Instagram,
//   Facebook,
//   Twitter,
//   Youtube,
//   Linkedin,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// import { profileWithMenu, allCategories } from "../mock";

// const PremiumTemplateC = () => {
//   const profile = profileWithMenu;

//   const [selectedCategory, setSelectedCategory] = useState(
//     allCategories[0] || null
//   );

//   const filteredItems = profile.menuItems?.filter(
//     (item: any) => item.category === selectedCategory
//   );

//   // -------------------------------------
//   // ⭐ Working Hours – Today Only
//   // -------------------------------------

//   const todayName = useMemo(() => {
//     const daysMap: any = {
//       Monday: "الاثنين",
//       Tuesday: "الثلاثاء",
//       Wednesday: "الاربعاء",
//       Thursday: "الخميس",
//       Friday: "الجمعة",
//       Saturday: "السبت",
//       Sunday: "الاحد",
//     };

//     const eng = new Date().toLocaleDateString("en-US", { weekday: "long" });
//     return daysMap[eng];
//   }, []);

//   const todayWorking = profile.workingHours?.find(
//     (w: any) => w.day_name === todayName
//   );

//   const isOpenNow = useMemo(() => {
//     if (!todayWorking || todayWorking.is_closed) return false;

//     const now = new Date();
//     const [oh, om] = todayWorking.open_time.split(":").map(Number);
//     const [ch, cm] = todayWorking.close_time.split(":").map(Number);

//     const openDate = new Date();
//     openDate.setHours(oh, om);

//     const closeDate = new Date();
//     closeDate.setHours(ch, cm);

//     return now >= openDate && now <= closeDate;
//   }, [todayWorking]);

//   // -------------------------------------
//   // ⭐ Social Icons + Link Handler
//   // -------------------------------------

//   const SocialIcon = (icon: string) => {
//     switch (icon) {
//       case "whatsapp":
//         return <MessageCircle className="w-5 h-5" />;
//       case "phone":
//         return <Phone className="w-5 h-5" />;
//       case "facebook":
//         return <Facebook className="w-5 h-5" />;
//       case "instagram":
//         return <Instagram className="w-5 h-5" />;
//       case "twitter":
//         return <Twitter className="w-5 h-5" />;
//       case "youtube":
//         return <Youtube className="w-5 h-5" />;
//       case "linkedin":
//         return <Linkedin className="w-5 h-5" />;
//       default:
//         return <MessageCircle className="w-5 h-5" />;
//     }
//   };

//   const openSocial = (s: any) => {
//     const v = s.value;
//     switch (s.icon) {
//       case "whatsapp":
//         window.open(`https://wa.me/${v}`, "_blank");
//         break;
//       case "phone":
//         window.open(`tel:${v}`);
//         break;
//       default:
//         window.open(`https://${v}`, "_blank");
//     }
//   };

//   // ====================================================
//   // ==================== TEMPLATE ======================
//   // ====================================================

//   return (
//     <div className="min-h-screen bg-slate-950 text-white">

//       {/* ================= HEADER ================ */}
//       <header
//         className="relative h-[60vh] overflow-hidden"
//         style={{
//           backgroundImage: profile.banner ? `url(${profile.banner})` : undefined,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-slate-950/70"></div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">

//           {/* Logo */}
//           {profile.logo && (
//             <div className="w-24 h-24 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-2xl mb-4">
//               <img
//                 src={profile.logo}
//                 alt="Logo"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           )}

//           {/* Title */}
//           <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
//             {profile.title}
//           </h1>

//           {/* Description */}
//           <p className="text-xl md:text-2xl text-slate-300 mb-6 max-w-2xl">
//             {profile.description}
//           </p>

//           {/* Address */}
//           {profile.address && (
//             <div className="flex items-center gap-2 text-red-300">
//               <MapPin className="w-5 h-5" />
//               <span className="text-lg">{profile.address}</span>
//             </div>
//           )}

//           {/* Social Icons */}
//           <div className="flex items-center gap-4 mt-6">
//             {profile.socials?.map((s: any) => (
//               <Button
//                 key={s.id}
//                 size="icon"
//                 className="rounded-full bg-white/10 hover:bg-white/20"
//                 onClick={() => openSocial(s)}
//               >
//                 {SocialIcon(s.icon)}
//               </Button>
//             ))}
//           </div>

//           {/* Today Working Hours */}
//           {todayWorking && (
//             <div className="mt-6 bg-slate-900/70 backdrop-blur-sm px-6 py-4 rounded-xl w-fit border border-slate-800">
//               <p className="text-lg font-bold text-red-400 mb-1">
//                 ساعات العمل – {todayWorking.day_name}
//               </p>

//               {todayWorking.is_closed ? (
//                 <p className="text-slate-300">المكان مغلق اليوم</p>
//               ) : (
//                 <div>
//                   <p className="text-slate-300">
//                     من{" "}
//                     <span className="text-red-400">{todayWorking.open_time}</span>{" "}
//                     – إلى{" "}
//                     <span className="text-red-400">{todayWorking.close_time}</span>
//                   </p>

//                   <p
//                     className={`mt-1 font-bold ${
//                       isOpenNow ? "text-green-400" : "text-red-500"
//                     }`}
//                   >
//                     {isOpenNow ? "مفتوح الآن" : "مغلق الآن"}
//                   </p>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Bottom Gradient */}
//         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
//       </header>

//       {/* ================= CATEGORY TABS ================ */}
//       <div className="max-w-7xl mx-auto px-4 mt-10">
//         <div className="flex gap-3 overflow-x-auto no-scrollbar pb-3">
//           {allCategories.map((cat: string) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-5 py-2 rounded-full border ${
//                 selectedCategory === cat
//                   ? "bg-red-600 border-red-600"
//                   : "bg-slate-800 border-slate-700 text-slate-300"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* ================= MENU ITEMS ================ */}
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredItems?.map((item: any) => (
//             <div
//               key={item.id}
//               className="bg-slate-900 border border-slate-800 rounded-xl p-4"
//             >
//               {item.image && (
//                 <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
//                   <img
//                     src={item.image}
//                     className="w-full h-full object-cover"
//                     alt={item.name}
//                   />
//                 </div>
//               )}

//               <h3 className="text-xl font-bold mb-1">{item.name}</h3>
//               <p className="text-slate-400 text-sm mb-3">{item.description}</p>

//               <p className="text-red-400 font-bold text-lg">{item.price} EGP</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ================= FOOTER ================ */}
//       <footer className="mt-20 py-10 bg-slate-900 border-t border-slate-800 text-center text-slate-400">
//         <p>© {new Date().getFullYear()} {profile.title}. جميع الحقوق محفوظة.</p>
//       </footer>
//     </div>
//   );
// };

// export default PremiumTemplateC;




























































// import { useState, useEffect } from "react";
// import { profileWithMenu, allCategories } from "../mock";
// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Instagram, MessageCircle, ChevronRight } from "lucide-react";

// const PremiumTemplateC = () => {
//   const profile = profileWithMenu;
//   const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);
//   const [statusText, setStatusText] = useState("");

//   const filteredItems = profile.menuItems?.filter(
//     (item) => item.category === selectedCategory
//   ) || [];

//   // حساب حالة الفتح/الإغلاق
//   useEffect(() => {
//     if (profile.workingHours) {
//       const now = new Date();
//       const day = now.getDay(); // 0=Sun, 1=Mon...
//       const todayHours = profile.workingHours[day];
//       if (!todayHours) {
//         setStatusText("مغلق اليوم");
//         return;
//       }
//       const [openH, openM] = todayHours.open.split(":").map(Number);
//       const [closeH, closeM] = todayHours.close.split(":").map(Number);
//       const openTime = new Date(now);
//       openTime.setHours(openH, openM, 0, 0);
//       const closeTime = new Date(now);
//       closeTime.setHours(closeH, closeM, 0, 0);

//       if (now >= openTime && now <= closeTime) {
//         const diff = closeTime.getTime() - now.getTime();
//         const hrs = Math.floor(diff / (1000 * 60 * 60));
//         const mins = Math.floor((diff / (1000 * 60)) % 60);
//         setStatusText(`مفتوح الآن - يغلق بعد ${hrs}س و${mins}د`);
//       } else {
//         const diff = now < openTime
//           ? openTime.getTime() - now.getTime()
//           : openTime.getTime() + 24 * 60 * 60 * 1000 - now.getTime();
//         const hrs = Math.floor(diff / (1000 * 60 * 60));
//         const mins = Math.floor((diff / (1000 * 60)) % 60);
//         setStatusText(`مغلق حالياً - يفتح بعد ${hrs}س و${mins}د`);
//       }
//     }
//   }, [profile.openingHours]);

//   return (
//     <div className="min-h-screen bg-slate-950 text-white">
//       {/* Hero Header with Banner */}
//       <header
//         className="relative h-[60vh] overflow-hidden"
//         style={{
//           backgroundImage: profile.banner ? `url(${profile.banner})` : undefined,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-slate-950/70"></div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
//           {profile.logo && (
//             <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl mb-4">
//               <img src={profile.logo} alt="Logo" className="w-full h-full object-cover rounded-full" />
//             </div>
//           )}
//           <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">{profile.title}</h1>
//           <p className="text-xl md:text-2xl text-slate-300 mb-2 max-w-2xl">{profile.description}</p>

//           {profile.address && (
//             <div className="flex items-center gap-2 text-red-300 mb-2">
//               <MapPin className="w-5 h-5" />
//               <span className="text-lg">{profile.address}</span>
//             </div>
//           )}

//           {statusText && (
//             <div className="text-green-400 font-semibold mb-4">{statusText}</div>
//           )}

//           {profile.socials && profile.socials.length > 0 && (
//             <div className="flex items-center gap-4 mt-2">
//               {profile.socials.map((social) => (
//                 <Button
//                   key={social.id}
//                   size="icon"
//                   className="rounded-full bg-white/10 hover:bg-white/20"
//                   onClick={() => window.open(social.value, "_blank")}
//                 >
//                   {social.icon === "whatsapp" ? (
//                     <MessageCircle className="w-5 h-5 text-white" />
//                   ) : social.icon === "phone" ? (
//                     <Phone className="w-5 h-5 text-white" />
//                   ) : (
//                     <Instagram className="w-5 h-5 text-white" />
//                   )}
//                 </Button>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
//       </header>

//       {/* Category Sidebar + Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar Categories */}
//           <aside className="lg:w-64 flex-shrink-0">
//             <h2 className="text-2xl font-bold mb-6 text-red-400">قائمة الأقسام</h2>
//             <nav className="space-y-2">
//               {allCategories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`w-full text-right px-4 py-3 rounded-lg transition-all flex items-center justify-between group ${
//                     selectedCategory === category
//                       ? "bg-red-600 text-white"
//                       : "bg-slate-900 hover:bg-slate-800 text-slate-300"
//                   }`}
//                 >
//                   <span className="font-semibold">{category}</span>
//                   <ChevronRight
//                     className={`w-5 h-5 transition-transform ${
//                       selectedCategory === category ? "rotate-90" : ""
//                     }`}
//                   />
//                 </button>
//               ))}
//             </nav>
//           </aside>

//           {/* Magazine Style Grid */}
//           <main className="flex-1">
//             <h2 className="text-3xl font-bold mb-8 text-red-400">{selectedCategory}</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {filteredItems.map((item, index) => (
//                 <article
//                   key={item.id}
//                   className={`group cursor-pointer ${
//                     index % 5 === 0 ? "md:col-span-2" : ""
//                   }`}
//                 >
//                   <div
//                     className={`relative overflow-hidden rounded-2xl bg-slate-900 hover-lift ${
//                       index % 5 === 0 ? "h-96" : "h-80"
//                     }`}
//                   >
//                     {/* Image */}
//                     <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20">
//                       {item.image ? (
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="w-full h-full object-cover rounded-2xl"
//                         />
//                       ) : (
//                         <span className="text-8xl">🍽️</span>
//                       )}
//                     </div>

//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

//                     {/* Content */}
//                     <div className="absolute bottom-0 left-0 right-0 p-6">
//                       <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs rounded-full mb-3">
//                         {item.category}
//                       </div>

//                       <h3
//                         className={`font-bold text-white mb-2 ${
//                           index % 5 === 0 ? "text-3xl" : "text-xl"
//                         }`}
//                       >
//                         {item.name}
//                       </h3>

//                       <p className="text-slate-300 text-sm mb-3 line-clamp-2">
//                         {item.description}
//                       </p>

//                       {/* Prices */}
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {item.prices?.map((p) => (
//                           <span
//                             key={p.id}
//                             className="px-2 py-1 bg-red-600 text-white text-xs rounded-md"
//                           >
//                             {p.lable}: {p.amount} ج.م
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </main>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-slate-900 py-8 px-4 mt-16 border-t border-slate-800">
//         <div className="max-w-7xl mx-auto text-center">
//           <p className="text-sm text-slate-500">
//             Menu – Premium Template C (Magazine Style)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PremiumTemplateC;






// import { useState, useMemo } from "react";
// import { profileWithMenu, allCategories } from "../mock";
// import { Button } from "@/components/ui/button";
// import {
//   MapPin,
//   ChevronRight,
//   Phone,
//   Instagram,
//   Facebook,
//   Youtube,
//   Twitter,
//   Linkedin,
//   MessageCircle,
//   Smartphone,
// } from "lucide-react";

// // ========= ICON MAP =========
// const socialIcons: Record<string, any> = {
//   whatsapp: MessageCircle,
//   phone: Smartphone,
//   instagram: Instagram,
//   facebook: Facebook,
//   twitter: Twitter,
//   youtube: Youtube,
//   linkedin: Linkedin,
//   tiktok: MessageCircle,
// };

// // ========= SOCIAL LINK BUILDER =========
// const buildSocialLink = (social: any) => {
//   if (social.icon === "whatsapp") return `https://wa.me/${social.value}`;
//   if (social.icon === "phone") return `tel:${social.value}`;
//   return social.value.startsWith("http") ? social.value : `https://${social.value}`;
// };

// // ========= WORKING HOURS CALC =========
// const getWorkingStatus = (workingHours: any[]) => {
//   if (!workingHours) return null;

//   const days = [
//     "الأحد",
//     "الاثنين",
//     "الثلاثاء",
//     "الأربعاء",
//     "الخميس",
//     "الجمعة",
//     "السبت",
//   ];

//   const now = new Date();
//   const dayName = days[now.getDay()];
//   const today = workingHours.find((d) => d.day_name === dayName);
//   if (!today) return null;

//   if (today.is_closed)
//     return { status: "closed", msg: "مغلق اليوم بالكامل" };

//   const [openH, openM] = today.open_time.split(":").map(Number);
//   const [closeH, closeM] = today.close_time.split(":").map(Number);

//   const openDate = new Date();
//   openDate.setHours(openH, openM, 0, 0);

//   const closeDate = new Date();
//   closeDate.setHours(closeH, closeM, 0, 0);

//   if (now < openDate) {
//     const diff = openDate.getTime() - now.;
//     const mins = Math.floor(diff / 1000 / 60);
//     return {
//       status: "closed",
//       msg: `سيفتح بعد ${Math.floor(mins / 60)} ساعة و ${mins % 60} دقيقة`,
//     };
//   }

//   if (now > closeDate) {
//     return { status: "closed", msg: "مغلق الآن" };
//   }

//   const diff = closeDate - now;
//   const mins = Math.floor(diff / 1000 / 60);

//   return {
//     status: "open",
//     msg: `يغلق بعد ${Math.floor(mins / 60)} ساعة و ${mins % 60} دقيقة`,
//   };
// };

// const PremiumTemplateC = () => {
//   const profile = profileWithMenu;
//   const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);

//   const filteredItems =
//     profile.menuItems?.filter((item) => item.category === selectedCategory) ||
//     [];

//   const workingStatus = useMemo(
//     () => getWorkingStatus(profile.workingHours || []),
//     [profile.workingHours]
//   );

//   return (
//     <div className="min-h-screen bg-slate-950 text-white">
//       {/* ===================== HERO HEADER ===================== */}
//       <header
//         className="relative h-[60vh] overflow-hidden"
//         style={{
//           backgroundImage: profile.banner
//             ? `url(${profile.banner})`
//             : undefined,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-slate-950/70"></div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
//           {profile.logo && (
//             <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl mb-4">
//               <img
//                 src={profile.logo}
//                 alt="Logo"
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>
//           )}

//           <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
//             {profile.title}
//           </h1>

//           <p className="text-xl md:text-2xl text-slate-300 mb-6 max-w-2xl">
//             {profile.description}
//           </p>

//           {profile.address && (
//             <div className="flex items-center gap-2 text-red-300 mt-1">
//               <MapPin className="w-5 h-5" />
//               <span className="text-lg">{profile.address}</span>
//             </div>
//           )}

//           {/* Working Status */}
//           {workingStatus && (
//             <div
//               className={`mt-4 inline-block px-4 py-2 rounded-full text-sm font-semibold ${
//                 workingStatus.status === "open"
//                   ? "bg-green-600 text-white"
//                   : "bg-red-600 text-white"
//               }`}
//             >
//               {workingStatus.status === "open" ? "مفتوح الآن" : "مغلق الآن"} —{" "}
//               {workingStatus.msg}
//             </div>
//           )}

//           {/* SOCIAL ICONS */}
//           {profile.socials && profile.socials.length > 0 && (
//             <div className="flex items-center gap-3 mt-6">
//               {profile.socials.map((social) => {
//                 const Icon =
//                   socialIcons[social.icon] || MessageCircle;

//                 return (
//                   <Button
//                     key={social.id}
//                     size="icon"
//                     className="rounded-full bg-white/10 hover:bg-white/20"
//                     onClick={() =>
//                       window.open(buildSocialLink(social), "_blank")
//                     }
//                   >
//                     <Icon className="w-5 h-5 text-white" />
//                   </Button>
//                 );
//               })}
//             </div>
//           )}
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-950 to-transparent"></div>
//       </header>

//       {/* ===================== CONTENT ===================== */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar */}
//           <aside className="lg:w-64 shrink-0">
//             <h2 className="text-2xl font-bold mb-6 text-red-400">
//               قائمة الأقسام
//             </h2>
//             <nav className="space-y-2">
//               {allCategories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`w-full text-right px-4 py-3 rounded-lg flex items-center justify-between ${
//                     selectedCategory === category
//                       ? "bg-red-600 text-white"
//                       : "bg-slate-900 hover:bg-slate-800 text-slate-300"
//                   }`}
//                 >
//                   <span className="font-semibold">{category}</span>
//                   <ChevronRight
//                     className={`w-5 h-5 ${
//                       selectedCategory === category ? "rotate-90" : ""
//                     }`}
//                   />
//                 </button>
//               ))}
//             </nav>
//           </aside>

//           {/* Magazine Items */}
//           <main className="flex-1">
//             <h2 className="text-3xl font-bold mb-8 text-red-400">
//               {selectedCategory}
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {filteredItems.map((item, index) => (
//                 <article
//                   key={item.id}
//                   className={`${index % 5 === 0 ? "md:col-span-2" : ""}`}
//                 >
//                   <div
//                     className={`relative overflow-hidden rounded-2xl bg-slate-900 ${
//                       index % 5 === 0 ? "h-96" : "h-80"
//                     }`}
//                   >
//                     {item.image && (
//                       <img
//                         src={item.image}
//                         className="absolute inset-0 w-full h-full object-cover"
//                       />
//                     )}

//                     <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/50 to-transparent"></div>

//                     <div className="absolute bottom-0 left-0 right-0 p-6">
//                       <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs rounded-full mb-3">
//                         {item.category}
//                       </div>

//                       <h3
//                         className={`font-bold text-white mb-2 ${
//                           index % 5 === 0 ? "text-3xl" : "text-xl"
//                         }`}
//                       >
//                         {item.name}
//                       </h3>

//                       <p className="text-slate-300 text-sm mb-3 line-clamp-2">
//                         {item.description}
//                       </p>

//                       {/* Prices */}
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {item.prices?.map((p) => (
//                           <span
//                             key={p.id}
//                             className="px-2 py-1 bg-red-600 text-white text-xs rounded-md"
//                           >
//                             {p.lable}: {p.amount} ج.م
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </main>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-slate-900 py-8 px-4 mt-16 border-t border-slate-800">
//         <div className="max-w-7xl mx-auto text-center">
//           <p className="text-sm text-slate-500">
//             Menu – Premium Template C (Magazine Style)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PremiumTemplateC;









