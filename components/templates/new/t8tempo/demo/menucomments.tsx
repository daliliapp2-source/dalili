/*




////////

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { MapPin, Instagram, Globe, MessageCircle, Youtube } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { profileWithMenu, allCategories } from "../mock";

// const FreeTemplateATabs = () => {
//   const profile = profileWithMenu;
//   const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [openStatus, setOpenStatus] = useState({ status: "", remaining: "" });

//   useEffect(() => {
//     // تحديث حالة مفتوح/مغلق كل دقيقة
//     const updateStatus = () => {
//       const now = new Date();
//       const dayIndex = now.getDay();
//       const dayMap = [1, 2, 3, 4, 5, 6, 0];
//       const today = profile.workingHours?.[dayMap[dayIndex]];

//       if (!today || today.is_closed) {
//         setOpenStatus({ status: "مغلق", remaining: "" });
//         return;
//       }

//       const [openH, openM] = today.open_time.split(":").map(Number);
//       const [closeH, closeM] = today.close_time.split(":").map(Number);
//       const openDate = new Date();
//       const closeDate = new Date();
//       openDate.setHours(openH, openM, 0);
//       closeDate.setHours(closeH, closeM, 0);

//       if (now >= openDate && now <= closeDate) {
//         const diff = closeDate.getTime() - now.getTime();
//         const hours = Math.floor(diff / (1000 * 60 * 60));
//         const minutes = Math.floor((diff / (1000 * 60)) % 60);
//         setOpenStatus({ status: "مفتوح", remaining: `${hours}س ${minutes}د` });
//       } else {
//         setOpenStatus({ status: "مغلق", remaining: "" });
//       }
//     };

//     updateStatus();
//     const interval = setInterval(updateStatus, 60000);
//     return () => clearInterval(interval);
//   }, [profile.workingHours]);

//   const filteredItems =
//     profile.menuItems?.filter(
//       (item) =>
//         item.category === selectedCategory &&
//         item.name.toLowerCase().includes(searchQuery.toLowerCase())
//     ) || [];

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */
// }
//       <header className="bg-card border-b border-border py-6 px-4 sticky top-0 z-10">
//         <div className="max-w-4xl mx-auto">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
//               <img src={profile.logo} alt="Logo" className="w-full h-full object-cover" />
//             </div>
//             <div className="flex-1">
//               <h1 className="text-xl md:text-2xl font-bold text-foreground">{profile.title}</h1>
//               <p className="text-sm text-muted-foreground">{profile.description}</p>
//               <p className={`text-sm font-semibold mt-1 ${openStatus.status === "مفتوح" ? "text-green-500" : "text-red-500"}`}>
//                 {openStatus.status}
//                 {openStatus.remaining && ` - باقي ${openStatus.remaining}`}
//               </p>
//             </div>
//           </div>

//           {/* Search */}
//           <div className="relative mb-3">
//             <Input
//               type="text"
//               placeholder="ابحث عن منتج..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pr-10"
//             />
//           </div>

//           {/* Tabs */}
//           <div className="flex gap-2 overflow-x-auto scrollbar-hide">
//             {allCategories.map((category) => (
//               <button
//                 key={category}
//                 className={`px-4 py-2 rounded-full ${
//                   selectedCategory === category
//                     ? "bg-primary text-white"
//                     : "bg-muted text-foreground"
//                 }`}
//                 onClick={() => setSelectedCategory(category)}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </header>

//       {/* Items */}
//       <div className="max-w-4xl mx-auto px-4 py-6 space-y-3">
//         {filteredItems.map((item) => (
//           <div key={item.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
//             <div className="flex justify-between items-start gap-4">
//               <div className="flex-1">
//                 <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
//                 <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{item.description}</p>
//                 {item.prices.map((price) => (
//                   <div key={price.id} className="flex justify-between text-primary">
//                     <span>{price.lable}</span>
//                     <span>{price.amount} ج.م</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
//                 <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <footer className="bg-card border-t border-border py-6 px-4 mt-12">
//         <div className="max-w-4xl mx-auto text-center space-y-4">
//           <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
//             <MapPin className="w-4 h-4" />
//             <span>{profile.address}</span>
//           </div>
//           <div className="flex justify-center gap-3">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 variant="outline"
//                 size="icon"
//                 onClick={() => {
//                   let url = social.value;
//                   switch (social.open_type) {
//                     case "whatsapp":
//                       url = `https://wa.me/${social.value}`;
//                       break;
//                     case "facebook":
//                       url = `https://www.facebook.com/${social.value}`;
//                       break;
//                     case "tiktok":
//                       url = `https://www.tiktok.com/${social.value}`;
//                       break;
//                     case "website":
//                       url = `https://${social.value}`;
//                       break;
//                   }
//                   window.open(url, "_blank");
//                 }}
//               >
//                 {getSocialIcon(social.icon)}
//               </Button>
//             ))}
//           </div>
//           <p className="text-xs text-muted-foreground">
//             Menu – Free Template A (Tabs View)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FreeTemplateATabs;

// // أيقونات وسائل التواصل
// function getSocialIcon(iconName: string) {
//   switch (iconName) {
//     case "whatsapp":
//       return <MessageCircle className="w-4 h-4" />;
//     case "instagram":
//       return <Instagram className="w-4 h-4" />;
//     case "tiktok":
//       return <Youtube className="w-4 h-4" />;
//     case "globe":
//       return <Globe className="w-4 h-4" />;
//     default:
//       return <Globe className="w-4 h-4" />;
//   }
// }


// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { MapPin, Instagram, Globe, MessageCircle, Youtube } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { profileWithMenu, allCategories } from "../mock";

// const FreeTemplateATabs = () => {
//   const profile = profileWithMenu;
//   const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [openStatus, setOpenStatus] = useState({ status: "", remaining: "" });

//   useEffect(() => {
//     // تحديث حالة مفتوح/مغلق كل دقيقة
//     const updateStatus = () => {
//       const now = new Date();
//       const dayIndex = now.getDay();
//       const dayMap = [1, 2, 3, 4, 5, 6, 0];
//       const today = profile.workingHours?.[dayMap[dayIndex]];

//       if (!today || today.is_closed) {
//         setOpenStatus({ status: "مغلق", remaining: "" });
//         return;
//       }

//       const [openH, openM] = today.open_time.split(":").map(Number);
//       const [closeH, closeM] = today.close_time.split(":").map(Number);
//       const openDate = new Date();
//       const closeDate = new Date();
//       openDate.setHours(openH, openM, 0);
//       closeDate.setHours(closeH, closeM, 0);

//       if (now >= openDate && now <= closeDate) {
//         const diff = closeDate.getTime() - now.getTime();
//         const hours = Math.floor(diff / (1000 * 60 * 60));
//         const minutes = Math.floor((diff / (1000 * 60)) % 60);
//         setOpenStatus({ status: "مفتوح", remaining: `${hours}س ${minutes}د` });
//       } else {
//         setOpenStatus({ status: "مغلق", remaining: "" });
//       }
//     };

//     updateStatus();
//     const interval = setInterval(updateStatus, 60000);
//     return () => clearInterval(interval);
//   }, [profile.workingHours]);

//   const filteredItems =
//     profile.menuItems?.filter(
//       (item) =>
//         item.category === selectedCategory &&
//         item.name.toLowerCase().includes(searchQuery.toLowerCase())
//     ) || [];

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <header className="bg-card border-b border-border py-6 px-4 sticky top-0 z-10">
//         <div className="max-w-4xl mx-auto">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
//               <img src={profile.logo} alt="Logo" className="w-full h-full object-cover" />
//             </div>
//             <div className="flex-1">
//               <h1 className="text-xl md:text-2xl font-bold text-foreground">{profile.title}</h1>
//               <p className="text-sm text-muted-foreground">{profile.description}</p>
//               <p className={`text-sm font-semibold mt-1 ${openStatus.status === "مفتوح" ? "text-green-500" : "text-red-500"}`}>
//                 {openStatus.status}
//                 {openStatus.remaining && ` - باقي ${openStatus.remaining}`}
//               </p>
//             </div>
//           </div>

//           {/* Search */}
//           <div className="relative mb-3">
//             <Input
//               type="text"
//               placeholder="ابحث عن منتج..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pr-10"
//             />
//           </div>

//           {/* Tabs */}
//           <div className="flex gap-2 overflow-x-auto scrollbar-hide">
//             {allCategories.map((category) => (
//               <button
//                 key={category}
//                 className={`px-4 py-2 rounded-full ${
//                   selectedCategory === category
//                     ? "bg-primary text-white"
//                     : "bg-muted text-foreground"
//                 }`}
//                 onClick={() => setSelectedCategory(category)}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </header>

//       {/* Items */}
//       <div className="max-w-4xl mx-auto px-4 py-6 space-y-3">
//         {filteredItems.map((item) => (
//           <div key={item.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
//             <div className="flex justify-between items-start gap-4">
//               <div className="flex-1">
//                 <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
//                 <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{item.description}</p>
//                 {item.prices.map((price) => (
//                   <div key={price.id} className="flex justify-between text-primary">
//                     <span>{price.lable}</span>
//                     <span>{price.amount} ج.م</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
//                 <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <footer className="bg-card border-t border-border py-6 px-4 mt-12">
//         <div className="max-w-4xl mx-auto text-center space-y-4">
//           <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
//             <MapPin className="w-4 h-4" />
//             <span>{profile.address}</span>
//           </div>
//           <div className="flex justify-center gap-3">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 variant="outline"
//                 size="icon"
//                 onClick={() => {
//                   let url = social.value;
//                   switch (social.open_type) {
//                     case "whatsapp":
//                       url = `https://wa.me/${social.value}`;
//                       break;
//                     case "facebook":
//                       url = `https://www.facebook.com/${social.value}`;
//                       break;
//                     case "tiktok":
//                       url = `https://www.tiktok.com/${social.value}`;
//                       break;
//                     case "website":
//                       url = `https://${social.value}`;
//                       break;
//                   }
//                   window.open(url, "_blank");
//                 }}
//               >
//                 {getSocialIcon(social.icon)}
//               </Button>
//             ))}
//           </div>
//           <p className="text-xs text-muted-foreground">
//             Menu – Free Template A (Tabs View)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FreeTemplateATabs;

// // أيقونات وسائل التواصل
// function getSocialIcon(iconName: string) {
//   switch (iconName) {
//     case "whatsapp":
//       return <MessageCircle className="w-4 h-4" />;
//     case "instagram":
//       return <Instagram className="w-4 h-4" />;
//     case "tiktok":
//       return <Youtube className="w-4 h-4" />;
//     case "globe":
//       return <Globe className="w-4 h-4" />;
//     default:
//       return <Globe className="w-4 h-4" />;
//   }
// }








// // دالة لحساب إذا كان المكان مفتوح أو مغلق حسب الوقت الحالي
// const isOpenNow = (workingHours:profile_working_hours_xm) => {
//   if (!workingHours) return { status: "مغلق", remaining: "" };
//   const now = new Date();
//   const dayIndex = now.getDay(); // 0 = الأحد, 6 = السبت
//   const dayMap = [1, 2, 3, 4, 5, 6, 0]; // ترتيب الأيام في الموك يبدأ من السبت
//   const today = workingHours[dayMap[dayIndex]];

//   if (!today || today.is_closed) return { status: "مغلق", remaining: "" };

//   const [openH, openM] = today.open_time.split(":").map(Number);
//   const [closeH, closeM] = today.close_time.split(":").map(Number);

//   const openDate = new Date();
//   openDate.setHours(openH, openM, 0);

//   const closeDate = new Date();
//   closeDate.setHours(closeH, closeM, 0);

//   if (now >= openDate && now <= closeDate) {
//     // باقي قد ايه لاغلاق
//     const diff = closeDate.getTime() - now.getTime();
//     const hours = Math.floor(diff / (1000 * 60 * 60));
//     const minutes = Math.floor((diff / (1000 * 60)) % 60);
//     return { status: "مفتوح", remaining: `${hours}س ${minutes}د` };
//   }

//   return { status: "مغلق", remaining: "" };
// };



// دالة لاختيار أيقونة وسائل التواصل





// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Instagram, Search } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { allCategories, profileWithMenu } from "../mock";

// const FreeTemplateA = () => {
//   const profile = profileWithMenu;
//   const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredItems = profile.menuItems?.filter(
//     item => item.category === selectedCategory && 
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   ) || [];

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Simple Header */}
//       <header className="bg-card border-b border-border py-6 px-4 sticky top-0 z-10">
//         <div className="max-w-4xl mx-auto">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
//               <span className="text-xl font-bold text-primary-foreground">
//                 {profile.title.charAt(0)}
//               </span>
//             </div>
//             <div className="flex-1">
//               <h1 className="text-xl md:text-2xl font-bold text-foreground">{profile.title}</h1>
//               <p className="text-sm text-muted-foreground">{profile.description}</p>
//             </div>
//           </div>
          
//           {/* Search */}
//           <div className="relative">
//             <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//             <Input
//               type="text"
//               placeholder="ابحث عن منتج..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pr-10"
//             />
//           </div>
//         </div>
//       </header>

//       {/* Categories - Horizontal Scroll */}
//       <div className="sticky top-[140px] md:top-[132px] z-10 bg-muted/50 backdrop-blur-sm border-b border-border">
//         <div className="max-w-4xl mx-auto px-4 py-3">
//           <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
//             {allCategories.map((category) => (
//               <Button
//                 key={category}
//                 variant={selectedCategory === category ? "default" : "outline"}
//                 size="sm"
//                 onClick={() => setSelectedCategory(category)}
//                 className="whitespace-nowrap"
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Simple List View */}
//       <div className="max-w-4xl mx-auto px-4 py-6">
//         <div className="space-y-3">
//           {filteredItems.map((item) => (
//             <div
//               key={item.id}
//               className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
//             >
//               <div className="flex justify-between items-start gap-4">
//                 <div className="flex-1">
//                   <h3 className="font-semibold text-foreground mb-1">
//                     {item.name}
//                   </h3>
//                   <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
//                     {item.description}
//                   </p>
//                   <div className="text-lg font-bold text-primary">
//                     {item.price} ج.م
//                   </div>
//                 </div>
//                 <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
//                   <span className="text-3xl">🍽️</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Simple Footer */}
//       <footer className="bg-card border-t border-border py-6 px-4 mt-12">
//         <div className="max-w-4xl mx-auto text-center space-y-4">
//           <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
//             <MapPin className="w-4 h-4" />
//             <span>{profile.address}</span>
//           </div>
//           <div className="flex justify-center gap-3">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 variant="outline"
//                 size="icon"
//                 onClick={() => window.open(social.value, '_blank')}
//               >
//                 {social.icon === 'whatsapp' ? <Phone className="w-4 h-4" /> : <Instagram className="w-4 h-4" />}
//               </Button>
//             ))}
//           </div>
//           <p className="text-xs text-muted-foreground">
//             Menu – Free Template A (Simple List)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FreeTemplateA;



// "use client";

// import { useState, useMemo } from "react";
// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Instagram } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import Image from "next/image";
// import { profileWithMenu, allCategories, profile_working_hours } from "../mock";

// // ---------- FORMAT SOCIAL URLS ----------
// const formatSocialUrl = (icon: string, value: string) => {
//   value = value.trim();
//   if (icon === "phone") return `tel:${value}`;
//   if (icon === "whatsapp") return `https://wa.me/${value.replace(/\D/g, "")}`;
//   if (!value.startsWith("http")) return `https://${value}`;
//   return value;
// };

// // ---------- CHECK OPEN/CLOSED ----------
// const isOpenNow = (workingHours?: profile_working_hours[]) => {
//   if (!workingHours || workingHours.length === 0) return { open: false, text: "مغلق" };

//   const now = new Date();
//   const dayName = now.toLocaleDateString("ar-EG", { weekday: "long" });
//   const today = workingHours.find(d => d.day_name === dayName);
//   if (!today || today.is_closed) return { open: false, text: "مغلق" };

//   const [openHour, openMin] = today.open_time.split(":").map(Number);
//   const [closeHour, closeMin] = today.close_time.split(":").map(Number);
//   const openTime = new Date();
//   openTime.setHours(openHour, openMin, 0, 0);
//   const closeTime = new Date();
//   closeTime.setHours(closeHour, closeMin, 0, 0);

//   if (now >= openTime && now <= closeTime) {
//     const diff = Math.floor((closeTime.getTime() - now.getTime()) / 60000);
//     return { open: true, text: `مفتوح - باقي ${diff} دقيقة` };
//   } else {
//     return { open: false, text: "مغلق" };
//   }
// };

// const FreeTemplateA = () => {
//   const profile = profileWithMenu;
//   const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredItems = useMemo(
//     () =>
//       profile.menuItems
//         ?.filter(
//           item =>
//             item.category === selectedCategory &&
//             item.name.toLowerCase().includes(searchQuery.toLowerCase())
//         ) || [],
//     [selectedCategory, searchQuery, profile.menuItems]
//   );

//   const openStatus = useMemo(() => isOpenNow(profile.workingHours), [profile.workingHours]);

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header with Banner */}
//       <header className="relative">
//         {profile.banner && (
//           <div className="w-full h-48 md:h-64 relative">
//             <Image
//               src={profile.banner}
//               alt="Banner"
//               fill
//               className="object-cover"
//             />
//           </div>
//         )}
//         <div className="absolute top-4 left-4 flex items-center gap-4">
//           {profile.logo && (
//             <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-white shadow-lg flex items-center justify-center">
//               <Image
//                 src={profile.logo}
//                 alt={profile.title}
//                 width={80}
//                 height={80}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           )}
//           <div className="text-white">
//             <h1 className="text-xl md:text-2xl font-bold">{profile.title}</h1>
//             <p className="text-sm">{profile.description}</p>
//             <div className="flex items-center gap-2 mt-1 text-sm">
//               <MapPin className="w-4 h-4" />
//               <span>{profile.address}</span>
//             </div>
//             <div className={`mt-1 px-2 py-1 rounded text-xs font-semibold ${openStatus.open ? "bg-green-500/70" : "bg-red-500/70"}`}>
//               {openStatus.text}
//             </div>
//           </div>
//         </div>

//         {/* Search */}
//         <div className="max-w-4xl mx-auto mt-48 md:mt-64 px-4">
//           <div className="relative mb-4">
//             <Input
//               type="text"
//               placeholder="ابحث عن منتج..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pr-10"
//             />
//           </div>
//         </div>
//       </header>

//       {/* Categories */}
//       <div className="sticky top-[calc(16rem)] md:top-[18rem] z-10 bg-muted/50 backdrop-blur-sm border-b border-border">
//         <div className="max-w-4xl mx-auto px-4 py-3">
//           <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
//             {allCategories.map((category) => (
//               <Button
//                 key={category}
//                 variant={selectedCategory === category ? "default" : "outline"}
//                 size="sm"
//                 onClick={() => setSelectedCategory(category)}
//                 className="whitespace-nowrap"
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Items List */}
//       <div className="max-w-4xl mx-auto px-4 py-6 space-y-3">
//         {filteredItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
//           >
//             <div className="flex justify-between items-start gap-4">
//               <div className="flex-1">
//                 <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
//                 <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{item.description}</p>
//                 <div className="space-y-1">
//                   {item.prices.map((price) => (
//                     <div key={price.id} className="text-lg font-bold text-primary">
//                       {price.lable}: {price.amount} ج.م
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
//                 <span className="text-3xl">🍽️</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <footer className="bg-card border-t border-border py-6 px-4 mt-12">
//         <div className="max-w-4xl mx-auto text-center space-y-4">
//           <div className="flex items-center justify-center gap-3">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 variant="outline"
//                 size="icon"
//                 onClick={() => window.open(formatSocialUrl(social.open_type, social.value), "_blank")}
//               >
//                 {social.icon === "whatsapp" ? <Phone className="w-4 h-4" /> : <Instagram className="w-4 h-4" />}
//               </Button>
//             ))}
//           </div>
//           <p className="text-xs text-muted-foreground">
//             Menu – Free Template A (List with multiple prices)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FreeTemplateA;






// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Instagram, Search, Whatsapp } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { profileWithMenu, allCategories, ProfileFullData } from "../mock";
// import Image from "next/image";

// // دالة للتحقق إذا اليوم مفتوح حسب workingHours
// const isOpenNow = (workingHours: ProfileFullData["workingHours"]) => {
//   if (!workingHours) return false;
//   const now = new Date();
//   const dayIndex = now.getDay(); // 0 = الأحد, 6 = السبت
//   // ضبط اليوم ليتوافق مع الداتا العربية (السبت=0)
//   const daysMap = [1,2,3,4,5,6,0]; 
//   const day = workingHours[daysMap[dayIndex]];
//   if (!day || day.is_closed) return { open: false, text: "مغلق" };

//   const [openH, openM] = day.open_time.split(":").map(Number);
//   const [closeH, closeM] = day.close_time.split(":").map(Number);

//   const openDate = new Date();
//   openDate.setHours(openH, openM, 0, 0);
//   const closeDate = new Date();
//   closeDate.setHours(closeH, closeM, 0, 0);

//   const open = now >= openDate && now <= closeDate;
//   const remaining = open ? Math.floor((closeDate.getTime() - now.getTime()) / 60000) : 0;

//   return { open, text: open ? `مفتوح – باقي ${remaining} دقيقة` : "مغلق" };
// };

// // دالة لتنسيق روابط التواصل حسب النوع
// const formatSocialUrl = (social: any) => {
//   const value = social.value.trim();
//   switch (social.open_type) {
//     case "whatsapp":
//       return `https://wa.me/${value.replace(/\D/g, "")}`;
//     case "phone":
//       return `tel:${value}`;
//     case "facebook":
//       return value.startsWith("http") ? value : `https://facebook.com/${value}`;
//     case "instagram":
//       return value.startsWith("http") ? value : `https://instagram.com/${value}`;
//     default:
//       return value.startsWith("http") ? value : `https://${value}`;
//   }
// };

// // دالة لاختيار أيقونة التواصل
// const getSocialIcon = (iconName: string) => {
//   switch (iconName) {
//     case "whatsapp":
//       return <Whatsapp className="w-4 h-4" />;
//     case "phone":
//       return <Phone className="w-4 h-4" />;
//     case "facebook":
//       return <Instagram className="w-4 h-4" />; // مؤقت بدل facebook icon
//     case "instagram":
//       return <Instagram className="w-4 h-4" />;
//     default:
//       return <Phone className="w-4 h-4" />;
//   }
// };

// const FreeTemplateA = () => {
//   const profile = profileWithMenu;
//   const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredItems = profile.menuItems?.filter(
//     (item) =>
//       item.category === selectedCategory &&
//       item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   ) || [];

//   const status = isOpenNow(profile.workingHours);

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <header className="bg-card border-b border-border py-6 px-4 sticky top-0 z-10">
//         <div className="max-w-4xl mx-auto">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 overflow-hidden">
//               {profile.logo ? (
//                 <Image
//                   src={profile.logo}
//                   alt={profile.title}
//                   width={48}
//                   height={48}
//                   className="object-cover w-full h-full"
//                 />
//               ) : (
//                 <span className="text-xl font-bold text-primary-foreground">
//                   {profile.title.charAt(0)}
//                 </span>
//               )}
//             </div>
//             <div className="flex-1">
//               <h1 className="text-xl md:text-2xl font-bold text-foreground">{profile.title}</h1>
//               <p className="text-sm text-muted-foreground">{profile.description}</p>
//               <p className={`text-sm mt-1 ${status.open ? "text-green-500" : "text-red-500"}`}>
//                 {status.text}
//               </p>
//             </div>
//           </div>

//           {/* Search */}
//           <div className="relative">
//             <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//             <Input
//               type="text"
//               placeholder="ابحث عن منتج..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pr-10"
//             />
//           </div>
//         </div>
//       </header>

//       {/* Categories */}
//       <div className="sticky top-[140px] md:top-[132px] z-10 bg-muted/50 backdrop-blur-sm border-b border-border">
//         <div className="max-w-4xl mx-auto px-4 py-3">
//           <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
//             {allCategories.map((category) => (
//               <Button
//                 key={category}
//                 variant={selectedCategory === category ? "default" : "outline"}
//                 size="sm"
//                 onClick={() => setSelectedCategory(category)}
//                 className="whitespace-nowrap"
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Menu Items */}
//       <div className="max-w-4xl mx-auto px-4 py-6 space-y-3">
//         {filteredItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
//           >
//             <div className="flex justify-between items-start gap-4">
//               <div className="flex-1">
//                 <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
//                 <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
//                   {item.description}
//                 </p>
//                 <div className="space-y-1">
//                   {item.prices.map((price) => (
//                     <div key={price.id} className="flex justify-between text-sm text-foreground">
//                       <span>{price.lable}</span>
//                       <span>{price.amount} ج.م</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
//                 <span className="text-3xl">🍽️</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <footer className="bg-card border-t border-border py-6 px-4 mt-12">
//         <div className="max-w-4xl mx-auto text-center space-y-4">
//           <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
//             <MapPin className="w-4 h-4" />
//             <span>{profile.address}</span>
//           </div>
//           <div className="flex justify-center gap-3">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 variant="outline"
//                 size="icon"
//                 onClick={() => window.open(formatSocialUrl(social), "_blank")}
//               >
//                 {getSocialIcon(social.icon)}
//               </Button>
//             ))}
//           </div>
//           <p className="text-xs text-muted-foreground">
//             Menu – Free Template A (Simple List)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FreeTemplateA;



// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Instagram, Search, Whatsapp } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { allCategories, profileWithMenu, ProfileFullData } from "../mock";
// import Image from "next/image";

// // دالة للتحقق إذا اليوم مفتوح حسب workingHours
// const getOpenStatus = (workingHours: ProfileFullData["workingHours"]) => {
//   if (!workingHours) return { open: false, text: "مغلق" };
//   const now = new Date();
//   const dayIndex = now.getDay(); // 0=الأحد, 6=السبت
//   const daysMap = [6, 0, 1, 2, 3, 4, 5]; // تحويل لبيانات الداتا
//   const day = workingHours[daysMap[dayIndex]];
//   if (!day || day.is_closed) return { open: false, text: "مغلق" };

//   const [openH, openM] = day.open_time.split(":").map(Number);
//   const [closeH, closeM] = day.close_time.split(":").map(Number);

//   const openDate = new Date();
//   openDate.setHours(openH, openM, 0, 0);
//   const closeDate = new Date();
//   closeDate.setHours(closeH, closeM, 0, 0);

//   const open = now >= openDate && now <= closeDate;
//   const remaining = open ? Math.floor((closeDate.getTime() - now.getTime()) / 60000) : 0;

//   return { open, text: open ? `مفتوح – باقي ${remaining} دقيقة` : "مغلق" };
// };

// // دالة لتنسيق روابط التواصل حسب النوع
// const formatSocialUrl = (social: any) => {
//   const value = social.value.trim();
//   switch (social.open_type) {
//     case "whatsapp":
//       return `https://wa.me/${value.replace(/\D/g, "")}`;
//     case "phone":
//       return `tel:${value}`;
//     case "facebook":
//       return value.startsWith("http") ? value : `https://facebook.com/${value}`;
//     case "instagram":
//       return value.startsWith("http") ? value : `https://instagram.com/${value}`;
//     case "tiktok":
//       return value.startsWith("http") ? value : `https://www.tiktok.com/${value}`;
//     case "website":
//       return value.startsWith("http") ? value : `https://${value}`;
//     default:
//       return value.startsWith("http") ? value : `https://${value}`;
//   }
// };

// // دالة لاختيار أيقونة التواصل
// const getSocialIcon = (iconName: string) => {
//   switch (iconName) {
//     case "whatsapp":
//       return <Whatsapp className="w-4 h-4" />;
//     case "phone":
//       return <Phone className="w-4 h-4" />;
//     case "facebook":
//       return <Instagram className="w-4 h-4" />; // مؤقت بدل أيقونة الفيسبوك
//     case "instagram":
//       return <Instagram className="w-4 h-4" />;
//     default:
//       return <Phone className="w-4 h-4" />;
//   }
// };

// const FreeTemplateA = () => {
//   const profile = profileWithMenu;
//   const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredItems = profile.menuItems?.filter(
//     (item) =>
//       item.category === selectedCategory &&
//       item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   ) || [];

//   const status = getOpenStatus(profile.workingHours);

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <header className="bg-card border-b border-border py-6 px-4 sticky top-0 z-10">
//         <div className="max-w-4xl mx-auto">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 overflow-hidden">
//               {profile.logo ? (
//                 <Image
//                   src={profile.logo}
//                   alt={profile.title}
//                   width={48}
//                   height={48}
//                   className="object-cover w-full h-full"
//                 />
//               ) : (
//                 <span className="text-xl font-bold text-primary-foreground">
//                   {profile.title.charAt(0)}
//                 </span>
//               )}
//             </div>
//             <div className="flex-1">
//               <h1 className="text-xl md:text-2xl font-bold text-foreground">{profile.title}</h1>
//               <p className="text-sm text-muted-foreground">{profile.description}</p>
//               <p className={`text-sm mt-1 ${status.open ? "text-green-500" : "text-red-500"}`}>
//                 {status.text}
//               </p>
//             </div>
//           </div>

//           {/* Search */}
//           <div className="relative">
//             <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//             <Input
//               type="text"
//               placeholder="ابحث عن منتج..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pr-10"
//             />
//           </div>
//         </div>
//       </header>

//       {/* Categories */}
//       <div className="sticky top-[140px] md:top-[132px] z-10 bg-muted/50 backdrop-blur-sm border-b border-border">
//         <div className="max-w-4xl mx-auto px-4 py-3">
//           <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
//             {allCategories.map((category) => (
//               <Button
//                 key={category}
//                 variant={selectedCategory === category ? "default" : "outline"}
//                 size="sm"
//                 onClick={() => setSelectedCategory(category)}
//                 className="whitespace-nowrap"
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Menu Items */}
//       <div className="max-w-4xl mx-auto px-4 py-6 space-y-3">
//         {filteredItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
//           >
//             <div className="flex justify-between items-start gap-4">
//               <div className="flex-1">
//                 <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
//                 <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
//                   {item.description}
//                 </p>
//                 <div className="space-y-1">
//                   {item.prices.map((price) => (
//                     <div key={price.id} className="flex justify-between text-sm text-foreground">
//                       <span>{price.lable}</span>
//                       <span>{price.amount} ج.م</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
//                 <span className="text-3xl">🍽️</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <footer className="bg-card border-t border-border py-6 px-4 mt-12">
//         <div className="max-w-4xl mx-auto text-center space-y-4">
//           <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
//             <MapPin className="w-4 h-4" />
//             <span>{profile.address}</span>
//           </div>
//           <div className="flex justify-center gap-3">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 variant="outline"
//                 size="icon"
//                 onClick={() => window.open(formatSocialUrl(social), "_blank")}
//               >
//                 {getSocialIcon(social.icon)}
//               </Button>
//             ))}
//           </div>
//           <p className="text-xs text-muted-foreground">
//             Menu – Free Template A (Simple List)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FreeTemplateA;

/// GOOD ONE 

// import { useState } from "react";
// import { profileWithMenu, allCategories } from "../mock";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { MapPin, Phone, Instagram } from "lucide-react";

// const FreeTemplateB = () => {
//   const profile = profileWithMenu;
//   const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);

//   const filteredItems = profile.menuItems?.filter(
//     item => item.category === selectedCategory
//   ) || [];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
//       {/* Clean Header */}
//       <header className="bg-card shadow-sm py-8 px-4">
//         <div className="max-w-5xl mx-auto text-center">
//           <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
//             <span className="text-2xl font-bold text-primary-foreground">
//               {profile.title.charAt(0)}
//             </span>
//           </div>
//           <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{profile.title}</h1>
//           <p className="text-muted-foreground mb-3">{profile.description}</p>
//           <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
//             <MapPin className="w-4 h-4" />
//             <span>{profile.address}</span>
//           </div>
//         </div>
//       </header>

//       {/* Category Pills */}
//       <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
//         <div className="max-w-5xl mx-auto px-4 py-4">
//           <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
//             {allCategories.map((category) => (
//               <Button
//                 key={category}
//                 variant={selectedCategory === category ? "default" : "secondary"}
//                 onClick={() => setSelectedCategory(category)}
//                 className="whitespace-nowrap rounded-full"
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Minimalist Cards Grid */}
//       <div className="max-w-5xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {filteredItems.map((item) => (
//             <Card key={item.id} className="hover-scale overflow-hidden">
//               <CardContent className="p-0">
//                 <div className="flex">
//                   {/* Image */}
//                   <div className="w-32 h-32 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center flex-shrink-0">
//                     <span className="text-5xl">🍽️</span>
//                   </div>
                  
//                   {/* Content */}
//                   <div className="flex-1 p-4 flex flex-col justify-between">
//                     <div>
//                       <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
//                         {item.name}
//                       </h3>
//                       <p className="text-xs text-muted-foreground line-clamp-2">
//                         {item.description}
//                       </p>
//                     </div>
//                     <div className="text-xl font-bold text-primary mt-2">
//                       {item.price} ج.م
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-card border-t border-border py-8 px-4 mt-12">
//         <div className="max-w-5xl mx-auto text-center space-y-4">
//           <div className="flex justify-center gap-3">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 variant="outline"
//                 size="icon"
//                 className="rounded-full"
//                 onClick={() => window.open(social.value, '_blank')}
//               >
//                 {social.icon === 'whatsapp' ? <Phone className="w-4 h-4" /> : <Instagram className="w-4 h-4" />}
//               </Button>
//             ))}
//           </div>
//           <p className="text-xs text-muted-foreground">
//             Menu – Free Template B (Minimalist Cards)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FreeTemplateB;



// import { useState } from "react";
// import { profileWithMenu, allCategories } from "../mock";
// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Instagram } from "lucide-react";

// const PremiumTemplateA = () => {
//   const profile = profileWithMenu;
//   const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);

//   const filteredItems = profile.menuItems?.filter(
//     item => item.category === selectedCategory
//   ) || [];

//   return (
//     <div className="min-h-screen bg-slate-50">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-6 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
//             <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
//               <span className="text-2xl font-bold text-amber-600">
//                 {profile.title.charAt(0)}
//               </span>
//             </div>
//             <div className="text-center md:text-right flex-1">
//               <h1 className="text-2xl md:text-3xl font-bold">{profile.title}</h1>
//               <p className="text-amber-100">{profile.description}</p>
//             </div>
//           </div>
          
//           <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
//             <MapPin className="w-4 h-4" />
//             <span>{profile.address}</span>
//           </div>
//         </div>
//       </header>

//       {/* Category Navigation */}
//       <div className="sticky top-0 z-10 bg-white border-b shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
//             {allCategories.map((category) => (
//               <Button
//                 key={category}
//                 variant={selectedCategory === category ? "default" : "outline"}
//                 onClick={() => setSelectedCategory(category)}
//                 className="whitespace-nowrap min-w-fit"
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//           {filteredItems.map((item) => (
//             <div
//               key={item.id}
//               className="group cursor-pointer hover-lift rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all"
//             >
//               <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 <span className="text-6xl">🍽️</span>
//               </div>
              
//               <div className="p-3">
//                 <h3 className="font-semibold text-sm mb-1 line-clamp-1">
//                   {item.name}
//                 </h3>
//                 <p className="text-xs text-slate-600 line-clamp-2 mb-2">
//                   {item.description}
//                 </p>
//                 <div className="text-lg font-bold text-amber-600">
//                   {item.price} ج.م
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-slate-900 text-white py-8 px-4 mt-12">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="flex justify-center gap-4 mb-4">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 variant="outline"
//                 size="icon"
//                 className="rounded-full border-white/20 hover:bg-white/10"
//                 onClick={() => window.open(social.value, '_blank')}
//               >
//                 {social.icon === 'whatsapp' ? <Phone className="w-5 h-5" /> : <Instagram className="w-5 h-5" />}
//               </Button>
//             ))}
//           </div>
//           <p className="text-sm text-slate-400">
//             Menu – Premium Template A (Image Grid)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PremiumTemplateA;




// import { useState } from "react";
// import { profileWithMenu, allCategories }from "../mock";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { MapPin, Phone, Instagram, Filter } from "lucide-react";

// const PremiumTemplateB = () => {
//   const profile = profileWithMenu;
//   const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);

//   const filteredItems = profile.menuItems?.filter(
//     item => item.category === selectedCategory
//   ) || [];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
//       {/* Hero Header */}
//       <div className="bg-gradient-to-r from-amber-900 to-orange-900 text-white">
//         <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
//           <div className="flex items-center gap-4 mb-6">
//             <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-xl">
//               <span className="text-3xl font-bold bg-gradient-to-br from-amber-600 to-orange-600 bg-clip-text text-transparent">
//                 {profile.title.charAt(0)}
//               </span>
//             </div>
//             <div className="flex-1">
//               <h1 className="text-3xl md:text-4xl font-bold mb-2">{profile.title}</h1>
//               <p className="text-amber-200 text-sm md:text-base">{profile.description}</p>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-2">
//             <MapPin className="w-4 h-4" />
//             <span className="text-sm">{profile.address}</span>
//           </div>
//         </div>
//       </div>

//       {/* Category Filter */}
//       <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm shadow-md border-b">
//         <div className="max-w-6xl mx-auto px-4 py-4">
//           <div className="flex items-center gap-3 mb-3">
//             <Filter className="w-5 h-5 text-amber-600" />
//             <h2 className="font-semibold text-lg">الأقسام</h2>
//           </div>
//           <div className="flex gap-2 overflow-x-auto pb-2">
//             {allCategories.map((category) => (
//               <Button
//                 key={category}
//                 variant={selectedCategory === category ? "default" : "outline"}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`whitespace-nowrap ${
//                   selectedCategory === category 
//                     ? 'bg-gradient-to-r from-amber-600 to-orange-600' 
//                     : ''
//                 }`}
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Card Menu Layout */}
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="space-y-4">
//           {filteredItems.map((item, index) => (
//             <Card 
//               key={item.id}
//               className="hover-lift overflow-hidden border-2 hover:border-amber-400 transition-all animate-fade-in"
//               style={{ animationDelay: `${index * 0.05}s` }}
//             >
//               <CardContent className="p-0">
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   {/* Image */}
//                   <div className="sm:w-48 h-48 sm:h-auto bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
//                     <span className="text-7xl">🍽️</span>
//                   </div>
                  
//                   {/* Content */}
//                   <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
//                         {item.name}
//                       </h3>
//                       <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
//                         {item.description}
//                       </p>
//                       <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
//                         {item.category}
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center justify-between mt-4 pt-4 border-t">
//                       <div className="text-2xl md:text-3xl font-bold text-amber-600">
//                         {item.price} ج.م
//                       </div>
//                       <Button 
//                         variant="outline"
//                         className="border-amber-600 text-amber-600 hover:bg-amber-50"
//                       >
//                         اطلب الآن
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-white py-8 px-4 mt-12">
//         <div className="max-w-6xl mx-auto text-center">
//           <div className="flex justify-center gap-4 mb-4">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 size="icon"
//                 className="rounded-full bg-white/10 hover:bg-white/20"
//                 onClick={() => window.open(social.value, '_blank')}
//               >
//                 {social.icon === 'whatsapp' ? <Phone className="w-5 h-5" /> : <Instagram className="w-5 h-5" />}
//               </Button>
//             ))}
//           </div>
//           <p className="text-sm text-amber-200">
//             Menu – Premium Template B (Card Menu)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PremiumTemplateB;


// import { useState } from "react";
// import { profileWithMenu, allCategories } from "../mock";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { MapPin, Phone, Instagram, Filter } from "lucide-react";

// const PremiumTemplateB = () => {
//   const profile = profileWithMenu;
//   const [selectedCategory, setSelectedCategory] = useState(allCategories[0]);

//   const filteredItems = profile.menuItems?.filter(
//     item => item.category === selectedCategory
//   ) || [];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
//       {/* Hero Header with Banner */}
//       <header
//         className="relative w-full h-64 md:h-80 flex items- center"
//         style={{
//           backgroundImage: `url(${profile.banner})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 bg-black/40"></div>
//         <div className="relative w-full px-6 flex flex-col items-center text-center md:flex-row md:justify-start md:text-right gap-6">
//           {/* Logo */}
//           <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white flex items-center justify-center shrink-0">
//             <img src={profile.logo} alt="Logo" className="w-full h-full object-cover" />
//           </div>
//           {/* Title & Description */}
//           <div className="text-white max-w-md">
//             <h1 className="text-3xl md:text-4xl font-bold mb-2">{profile.title}</h1>
//             <p className="text-amber-200 mb-2">{profile.description}</p>
//             <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-white/90">
//               <MapPin className="w-4 h-4" />
//               <span>{profile.address}</span>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Category Filter */}
//       <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm shadow-md border-b">
//         <div className="max-w-6xl mx-auto px-4 py-4">
//           <div className="flex items-center gap-3 mb-3">
//             <Filter className="w-5 h-5 text-amber-600" />
//             <h2 className="font-semibold text-lg">الأقسام</h2>
//           </div>
//           <div className="flex gap-2 overflow-x-auto pb-2">
//             {allCategories.map((category) => (
//               <Button
//                 key={category}
//                 variant={selectedCategory === category ? "default" : "outline"}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`whitespace-nowrap ${
//                   selectedCategory === category 
//                     ? 'bg-gradient-to-r from-amber-600 to-orange-600' 
//                     : ''
//                 }`}
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Card Menu Layout */}
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="space-y-4">
//           {filteredItems.map((item, index) => (
//             <Card
//               key={item.id}
//               className="hover-lift overflow-hidden border-2 hover:border-amber-400 transition-all animate-fade-in"
//               style={{ animationDelay: `${index * 0.05}s` }}
//             >
//               <CardContent className="p-0">
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   {/* Image */}
//                   <div className="sm:w-48 h-48 sm:h-auto bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
//                     <span className="text-7xl">🍽️</span>
//                   </div>
//                   {/* Content */}
//                   <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
//                         {item.name}
//                       </h3>
//                       <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
//                         {item.description}
//                       </p>
//                       <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
//                         {item.category}
//                       </div>
//                     </div>
//                     <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 pt-4 border-t gap-2">
//                       {/* Multiple Prices */}
//                       <div className="flex flex-wrap gap-2">
//                         {item.prices.map((p) => (
//                           <div
//                             key={p.id}
//                             className="px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full"
//                           >
//                             {p.lable}: {p.amount} ج.م
//                           </div>
//                         ))}
//                       </div>
//                       <Button
//                         variant="outline"
//                         className="border-amber-600 text-amber-600 hover:bg-amber-50 mt-2 sm:mt-0"
//                       >
//                         اطلب الآن
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-white py-8 px-4 mt-12">
//         <div className="max-w-6xl mx-auto text-center">
//           <div className="flex justify-center gap-4 mb-4">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 size="icon"
//                 className="rounded-full bg-white/10 hover:bg-white/20"
//                 onClick={() => window.open(social.value, '_blank')}
//               >
//                 {social.icon === 'whatsapp' ? <Phone className="w-5 h-5" /> : <Instagram className="w-5 h-5" />}
//               </Button>
//             ))}
//           </div>
//           <p className="text-sm text-amber-200">
//             Menu – Premium Template B (Card Menu)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PremiumTemplateB;





