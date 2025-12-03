// import { useState } from "react";
// import { profileWithMenu, allCategories } from "../mock";
// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Instagram, Filter } from "lucide-react";

// const PremiumTemplateE = () => {
//   const profile = profileWithMenu;
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const filteredItems = selectedCategory === "all" 
//     ? profile.menuItems || []
//     : profile.menuItems?.filter(item => item.category === selectedCategory) || [];

//   return (
//     <div className="min-h-screen bg-slate-900">
//       {/* Premium Header */}
//       <header className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-12 px-4 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="flex items-center gap-4 mb-6">
//             <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-xl">
//               <span className="text-3xl font-bold bg-gradient-to-br from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
//                 {profile.title.charAt(0)}
//               </span>
//             </div>
//             <div>
//               <h1 className="text-3xl md:text-4xl font-bold">{profile.title}</h1>
//               <p className="text-emerald-100">{profile.description}</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <MapPin className="w-4 h-4" />
//             <span>{profile.address}</span>
//           </div>
//         </div>
//       </header>

//       {/* Filter Bar */}
//       <div className="sticky top-0 z-20 bg-slate-800 border-b border-slate-700 shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
//             <Filter className="w-5 h-5 text-emerald-400 flex-shrink-0" />
//             <Button
//               variant={selectedCategory === "all" ? "default" : "outline"}
//               onClick={() => setSelectedCategory("all")}
//               className="whitespace-nowrap"
//             >
//               الكل
//             </Button>
//             {allCategories.map((category) => (
//               <Button
//                 key={category}
//                 variant={selectedCategory === category ? "default" : "outline"}
//                 onClick={() => setSelectedCategory(category)}
//                 className="whitespace-nowrap"
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Masonry Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
//           {filteredItems.map((item, index) => (
//             <div
//               key={item.id}
//               className="break-inside-avoid animate-fade-in"
//               style={{ animationDelay: `${(index % 12) * 0.05}s` }}
//             >
//               <div className="bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all cursor-pointer group border border-slate-700 hover:border-emerald-500/50">
//                 {/* Random Height Images */}
//                 <div 
//                   className={`bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center relative overflow-hidden ${
//                     index % 3 === 0 ? 'h-48' : index % 3 === 1 ? 'h-64' : 'h-56'
//                   }`}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                   <span className="text-6xl relative z-10">🍽️</span>
//                 </div>
                
//                 <div className="p-4">
//                   <div className="text-xs text-emerald-400 font-semibold mb-2">
//                     {item.category}
//                   </div>
//                   <h3 className="font-bold text-white mb-2 line-clamp-1 text-lg">
//                     {item.name}
//                   </h3>
//                   <p className="text-sm text-slate-400 line-clamp-2 mb-3">
//                     {item.description}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <span className="text-2xl font-bold text-emerald-400">
//                       {item.price} ج.م
//                     </span>
//                     <Button size="sm" variant="outline" className="group-hover:bg-emerald-600 group-hover:text-white transition-colors">
//                       طلب
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-slate-800 border-t border-slate-700 py-8 px-4 mt-12">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="flex justify-center gap-4 mb-4">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 variant="outline"
//                 size="icon"
//                 className="rounded-full border-slate-600 hover:bg-emerald-600 hover:border-emerald-600"
//                 onClick={() => window.open(social.value, '_blank')}
//               >
//                 {social.icon === 'whatsapp' ? <Phone className="w-5 h-5" /> : <Instagram className="w-5 h-5" />}
//               </Button>
//             ))}
//           </div>
//           <p className="text-sm text-slate-500">
//             Menu – Premium Template E (Masonry Grid)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PremiumTemplateE;







// وضغ اخضر 



// "use client";


// import { useState } from "react";
// import { profileWithMenu, allCategories, Social } from "../mock";
// import { Button } from "@/components/ui/button";
// import { MapPin, Filter, Phone, Instagram, Facebook, Twitter, Youtube, Linkedin, MessageCircle, Smartphone, Globe } from "lucide-react";
// import { Profilexm } from "./FreeTemplateA";
// type Props = {
//   model?: Profilexm;
// };
// const PremiumTemplateE = ({ model }: Props) => {
//   const profile = model || profileWithMenu;

// const categories = profile.menuItems && profile.menuItems.length > 0
//   ? Array.from(new Set(profile.menuItems.map(item => item.category)))
//   : allCategories;

//   // const [selectedCategory, setSelectedCategory] = useState(categories[0]);

//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const filteredItems = selectedCategory === "all" 
//     ? profile.menuItems || []
//     : profile.menuItems?.filter(item => item.category === selectedCategory) || [];

//   // --- Helpers for Social Media ---
//   const getSocialIcon = (iconName: string) => {
//     switch(iconName.toLowerCase()) {
//       case 'whatsapp': return <MessageCircle className="w-5 h-5" />;
//       case 'phone': return <Phone className="w-5 h-5" />;
//       case 'instagram': return <Instagram className="w-5 h-5" />;
//       case 'facebook': return <Facebook className="w-5 h-5" />;
//       case 'twitter': return <Twitter className="w-5 h-5" />;
//       case 'youtube': return <Youtube className="w-5 h-5" />;
//       case 'linkedin': return <Linkedin className="w-5 h-5" />;
//       case 'tiktok': return <Smartphone className="w-5 h-5" />; // fallback
//       default: return <Globe className="w-5 h-5" />;
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
//     <div className="min-h-screen bg-slate-900">
      
//       {/* Premium Header */}
  
//   {/* اخضر  */}
//       <header className="relative bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-12 px-4 overflow-hidden">
//   {/* ناري  */}

//      {/* <header className="relative bg-linear-to-r from-red-600 via-orange-500 to-yellow-400 text-white py-12 px-4 overflow-hidden"> */}

     
//         <div className="absolute inset-0">
//           {profile.banner ? (
//             <img src={profile.banner} alt="Banner" className="w-full h-full object-cover opacity-50" />
//           ) : (
//             <div className="w-full h-full bg-slate-800 opacity-50"></div>
//           )}
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto flex items-center gap-4 py-4">
//           <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
//             <img src={profile.logo} alt={profile.title} className="w-full h-full object-cover" />
//           </div>
//           <div>
//             <h1 className="text-3xl md:text-4xl font-bold">{profile.title}</h1>
//             <p className="text-black-900 font-bold">{profile.description}</p>
//             <div className="flex items-center gap-2 mt-2 font-bold">
//               <MapPin className="w-4 h-4" />
//               <span>{profile.address}</span>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Filter Bar */}
//       <div className="sticky top-0 z-20 bg-slate-800 border-b border-slate-700 shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
//             <Filter className="w-5 h-5 text-emerald-400 shrink-0" />
//             <Button
//               variant={selectedCategory === "all" ? "default" : "outline"}
//               onClick={() => setSelectedCategory("all")}
//               className="whitespace-nowrap"
//             >
//               الكل
//             </Button>
//             {categories.map((category) => (
           
//            <Button
//                 key={category}
//                 variant={selectedCategory === category ? "default" : "outline"}
//                 onClick={() => setSelectedCategory(category)}
//                 className="whitespace-nowrap"
//               >
//                 {category}
//               </Button>

// //<Button
// //  variant={selectedCategory === category ? "default" : "outline"}
//  // className="whitespace-nowrap text-red-500 border-red-500 hover:bg-red-600 hover:text-white"
// //>
//  //</div> {category}
// //</Button>


//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Masonry Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
//           {filteredItems.map((item, index) => (
//             <div
//               key={item.id}
//               className="break-inside-avoid animate-fade-in"
//               style={{ animationDelay: `${(index % 12) * 0.05}s` }}
//             >
           
//            {/* وضع داكن */}
//               <div className="bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all cursor-pointer group border border-slate-700 hover:border-emerald-500/50">
//            {/* وضع ناري */}

// {/* <div className="bg-slate-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/40 transition-all cursor-pointer group border border-slate-800 hover:border-red-500/50"> */}

//                 {/* Item Image */}
//                 <div 
//                   className={`relative overflow-hidden ${
//                     index % 3 === 0 ? 'h-48' : index % 3 === 1 ? 'h-64' : 'h-56'
//                   }`}
//                 >
//                   {item.image ? (
//                     <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center bg-slate-700 text-6xl">🍽️</div>
//                   )}
//                   <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 </div>

//                 <div className="p-4">
//                   <div className="text-xs text-emerald-400 font-semibold mb-2">
//                     {item.category}
//                   </div>
//                   <h3 className="font-bold text-white mb-2 line-clamp-1 text-lg">
//                     {item.name}
//                   </h3>
//                   <p className="text-sm text-slate-400 line-clamp-2 mb-3">
//                     {item.description}
//                   </p>

//                   {/* All Prices */}
//                   <div className="flex flex-col gap-1 mb-2">
//                     {item.prices.map((p) => (
//                       <span key={p.id} className="text-sm text-emerald-400">
//                         {p.lable} : {p.amount} ج.م
//                       </span>
//                     ))}
//                   </div>

//                   {/* <Button size="sm" variant="outline" className="group-hover:bg-emerald-600 group-hover:text-white transition-colors mt-2">
//                     طلب
//                   </Button> */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-slate-800 border-t border-slate-700 py-8 px-4 mt-12">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="flex justify-center gap-4 mb-4">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 variant="outline"
//                 size="icon"
//                 className="rounded-full border-slate-600 hover:bg-emerald-600 hover:border-emerald-600"
//                 onClick={() => window.open(getSocialLink(social), '_blank')}
//               >
//                 {getSocialIcon(social.icon)}
//               </Button>
//             ))}
//           </div>
//           <p className="text-sm text-slate-500">
//             Menu – Premium Template E (Masonry Grid)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PremiumTemplateE;


// وضغ ناري 

// "use client";

// import { useState } from "react";
// import { profileWithMenu, allCategories, Social } from "../mock";
// import { Button } from "@/components/ui/button";
// import { MapPin, Filter, Phone, Instagram, Facebook, Twitter, Youtube, Linkedin, MessageCircle, Smartphone, Globe } from "lucide-react";
// import { Profilexm } from "./FreeTemplateA";

// type Props = {
//   model?: Profilexm;
// };

// const PremiumTemplateE = ({ model }: Props) => {
//   const profile = model || profileWithMenu;

//   const categories = profile.menuItems && profile.menuItems.length > 0
//     ? Array.from(new Set(profile.menuItems.map(item => item.category)))
//     : allCategories;

//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const filteredItems = selectedCategory === "all" 
//     ? profile.menuItems || []
//     : profile.menuItems?.filter(item => item.category === selectedCategory) || [];

//   // --- Helpers for Social Media ---
//   const getSocialIcon = (iconName: string) => {
//     switch(iconName.toLowerCase()) {
//       case 'whatsapp': return <MessageCircle className="w-5 h-5" />;
//       case 'phone': return <Phone className="w-5 h-5" />;
//       case 'instagram': return <Instagram className="w-5 h-5" />;
//       case 'facebook': return <Facebook className="w-5 h-5" />;
//       case 'twitter': return <Twitter className="w-5 h-5" />;
//       case 'youtube': return <Youtube className="w-5 h-5" />;
//       case 'linkedin': return <Linkedin className="w-5 h-5" />;
//       case 'tiktok': return <Smartphone className="w-5 h-5" />; // fallback
//       default: return <Globe className="w-5 h-5" />;
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
//     <div className="min-h-screen bg-black">
      
//       {/* Premium Header */}
//       <header className="relative py-12 px-4 overflow-hidden">
//         <div className="absolute inset-0">
//           {profile.banner ? (
//             <img src={profile.banner} alt="Banner" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
//           ) : (
//             <div className="w-full h-full bg-gradient-to-b from-orange-800 via-red-900 to-yellow-600 opacity-50"></div>
//           )}
//           {/* Overlay Flame Effect */}
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,120,0,0.6)_0%,_rgba(255,0,0,0.6)_60%,_rgba(0,0,0,0.0)_100%)] animate-pulse"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto flex items-center gap-4 py-4">
//           <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
//             <img src={profile.logo} alt={profile.title} className="w-full h-full object-cover" />
//           </div>
//           <div>
//             <h1 className="text-3xl md:text-4xl font-bold text-yellow-50 drop-shadow-lg">{profile.title}</h1>
//             <p className="text-yellow-200 drop-shadow-sm">{profile.description}</p>
//             <div className="flex items-center gap-2 mt-2 text-yellow-300">
//               <MapPin className="w-4 h-4" />
//               <span>{profile.address}</span>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Filter Bar */}
//       <div className="sticky top-0 z-20 bg-gradient-to-r from-red-900 via-orange-800 to-yellow-700 border-b border-red-700 shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
//             <Filter className="w-5 h-5 text-yellow-400 shrink-0" />
//             <Button
//               variant={selectedCategory === "all" ? "default" : "outline"}
//               onClick={() => setSelectedCategory("all")}
//               className="whitespace-nowrap text-yellow-100 border-yellow-200 hover:bg-yellow-500 hover:text-white"
//             >
//               الكل
//             </Button>
//             {categories.map((category) => (
//               <Button
//                 key={category}
//                 variant={selectedCategory === category ? "default" : "outline"}
//                 onClick={() => setSelectedCategory(category)}
//                 className="whitespace-nowrap text-yellow-100 border-yellow-200 hover:bg-yellow-500 hover:text-white"
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Masonry Grid Layout */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
//           {filteredItems.map((item, index) => (
//             <div
//               key={item.id}
//               className="break-inside-avoid animate-fade-in"
//               style={{ animationDelay: `${(index % 12) * 0.05}s` }}
//             >
//               <div className="bg-black/80 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-orange-600/40 transition-all cursor-pointer group border border-red-800 hover:border-yellow-400">
                
//                 {/* Item Image */}
//                 <div 
//                   className={`relative overflow-hidden ${
//                     index % 3 === 0 ? 'h-48' : index % 3 === 1 ? 'h-64' : 'h-56'
//                   }`}
//                 >
//                   {item.image ? (
//                     <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center bg-red-900 text-6xl animate-pulse">🔥</div>
//                   )}
//                   <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 via-orange-700/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 </div>

//                 <div className="p-4">
//                   <div className="text-xs text-orange-400 font-semibold mb-2">
//                     {item.category}
//                   </div>
//                   <h3 className="font-bold text-yellow-50 mb-2 line-clamp-1 text-lg drop-shadow-md">
//                     {item.name}
//                   </h3>
//                   <p className="text-sm text-yellow-200 line-clamp-2 mb-3">
//                     {item.description}
//                   </p>

//                   {/* All Prices */}
//                   <div className="flex flex-col gap-1 mb-2">
//                     {item.prices.map((p) => (
//                       <span key={p.id} className="text-sm text-orange-300">
//                         {p.lable} : {p.amount} ج.م
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gradient-to-r from-red-900 via-orange-800 to-yellow-700 border-t border-red-700 py-8 px-4 mt-12">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="flex justify-center gap-4 mb-4">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 variant="outline"
//                 size="icon"
//                 className="rounded-full border-orange-600 hover:bg-orange-600 hover:border-yellow-400"
//                 onClick={() => window.open(getSocialLink(social), '_blank')}
//               >
//                 {getSocialIcon(social.icon)}
//               </Button>
//             ))}
//           </div>
//           <p className="text-sm text-yellow-200">
//             Menu – Premium Template E (Masonry Grid)
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PremiumTemplateE;


// "use client";

// import { useState } from "react";
// import { profileWithMenu, allCategories, Social } from "../mock";
// import { Button } from "@/components/ui/button";
// import { MapPin, Filter, MessageCircle, Phone, Instagram, Facebook, Twitter, Youtube, Linkedin, Globe } from "lucide-react";
// import { Profilexm } from "./FreeTemplateA";

// type Props = {
//   model?: Profilexm;
// };

// const PremiumTemplateE = ({ model }: Props) => {
//   const profile = model || profileWithMenu;

//   const categories = profile.menuItems && profile.menuItems.length > 0
//     ? Array.from(new Set(profile.menuItems.map(item => item.category)))
//     : allCategories;

//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const filteredItems = selectedCategory === "all" 
//     ? profile.menuItems || []
//     : profile.menuItems?.filter(item => item.category === selectedCategory) || [];

//   // --- Helpers for Social Media ---
//   const getSocialIcon = (iconName: string) => {
//     switch(iconName.toLowerCase()) {
//       case 'whatsapp': return <MessageCircle className="w-5 h-5" />;
//       case 'phone': return <Phone className="w-5 h-5" />;
//       case 'instagram': return <Instagram className="w-5 h-5" />;
//       case 'facebook': return <Facebook className="w-5 h-5" />;
//       case 'twitter': return <Twitter className="w-5 h-5" />;
//       case 'youtube': return <Youtube className="w-5 h-5" />;
//       case 'linkedin': return <Linkedin className="w-5 h-5" />;
//       case 'tiktok': return <Globe className="w-5 h-5" />; 
//       default: return <Globe className="w-5 h-5" />;
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
//     <div className="min-h-screen relative text-white bg-black overflow-hidden">
//       {/* Animated Flame Background */}
//       <div className="absolute inset-0 bg-black z-0">
//         <div className="absolute inset-0 flame-bg"></div>
//       </div>

      // {/* Header */}
      // <header className="relative z-10 py-12 px-4">
      //   <div className="max-w-7xl mx-auto flex items-center gap-4">
      //     <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
      //       <img src={profile.logo} alt={profile.title} className="w-full h-full object-cover" />
      //     </div>
      //     <div>
      //       <h1 className="text-3xl md:text-4xl font-bold">{profile.title}</h1>
      //       <p className="text-orange-200">{profile.description}</p>
      //       <div className="flex items-center gap-2 mt-2 text-sm text-orange-100">
      //         <MapPin className="w-4 h-4" />
      //         <span>{profile.address}</span>
      //       </div>
      //     </div>
      //   </div>
      // </header>

//       {/* Filter Bar */}
//       <div className="sticky top-0 z-20 bg-black/70 border-b border-orange-700">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3 overflow-x-auto scrollbar-hide">
//           <Filter className="w-5 h-5 text-orange-400 shrink-0" />
//           <Button
//             variant={selectedCategory === "all" ? "default" : "outline"}
//             onClick={() => setSelectedCategory("all")}
//             className="whitespace-nowrap"
//           >
//             الكل
//           </Button>
//           {categories.map((category) => (
//             <Button
//               key={category}
//               variant={selectedCategory === category ? "default" : "outline"}
//               onClick={() => setSelectedCategory(category)}
//               className="whitespace-nowrap"
//             >
//               {category}
//             </Button>
//           ))}
//         </div>
//       </div>

//       {/* Masonry Grid */}
//       <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
//         <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
//           {filteredItems.map((item, index) => (
//             <div
//               key={item.id}
//               className="break-inside-avoid animate-fade-in"
//               style={{ animationDelay: `${(index % 12) * 0.05}s` }}
//             >
//               <div className="bg-black/70 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-orange-500 transition-all cursor-pointer group border border-orange-700 hover:border-orange-500/70">
//                 <div className={`relative overflow-hidden h-56`}>
//                   {item.image ? (
//                     <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center bg-black/50 text-6xl">🍽️</div>
//                   )}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 </div>
//                 <div className="p-4">
//                   <div className="text-xs text-orange-400 font-semibold mb-2">{item.category}</div>
//                   <h3 className="font-bold text-white mb-2 line-clamp-1 text-lg">{item.name}</h3>
//                   <p className="text-sm text-orange-200 line-clamp-2 mb-3">{item.description}</p>
//                   <div className="flex flex-col gap-1 mb-2">
//                     {item.prices.map((p) => (
//                       <span key={p.id} className="text-sm text-orange-400">{p.lable} : {p.amount} ج.م</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-black/70 border-t border-orange-700 py-8 px-4 mt-12 relative z-10">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="flex justify-center gap-4 mb-4">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 variant="outline"
//                 size="icon"
//                 className="rounded-full border-orange-700 hover:bg-orange-600 hover:border-orange-500"
//                 onClick={() => window.open(getSocialLink(social), '_blank')}
//               >
//                 {getSocialIcon(social.icon)}
//               </Button>
//             ))}
//           </div>
//           <p className="text-sm text-orange-300">Menu – Premium Template E (Flame Grid)</p>
//         </div>
//       </footer>

//       {/* Flame Animation CSS */}
//       <style jsx>{`
//         .flame-bg {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(45deg, rgba(255,80,0,0.2), rgba(255,160,0,0.2), rgba(255,40,0,0.15), rgba(255,120,0,0.15));
//           background-size: 400% 400%;
//           animation: flameAnim 12s ease-in-out infinite;
//         }

//         @keyframes flameAnim {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PremiumTemplateE;

//////////##################### دا تماااااااااام وزي الفل ماعدا الاسكرول #########################################

"use client";

import { useState } from "react";
import { profileWithMenu, allCategories, Social } from "../mock";
import { Button } from "@/components/ui/button";
import { MapPin, Filter, MessageCircle, Phone, Instagram, Facebook, Twitter, Youtube, Linkedin, Globe } from "lucide-react";
import { Profilexm } from "./FreeTemplateA";
import { getSocialIconHelper, openSocialLinkHelper } from "./helpers";

type Props = {
  model?: Profilexm;
};

const PremiumTemplateE = ({ model }: Props) => {
  const profile = model || profileWithMenu;
const isMock = !model; // معناها: مفيش model مبعوت

const categories = isMock
  ? allCategories
  : Array.from(new Set(profile.menuItems?.map(item => item.category) || []));

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = selectedCategory === "all" 
    ? profile.menuItems || []
    : profile.menuItems?.filter(item => item.category === selectedCategory) || [];

  // --- Helpers for Social Media ---
  // const getSocialIcon = (iconName: string) => {
  //   switch(iconName.toLowerCase()) {
  //     case 'whatsapp': return <MessageCircle className="w-5 h-5" />;
  //     case 'phone': return <Phone className="w-5 h-5" />;
  //     case 'instagram': return <Instagram className="w-5 h-5" />;
  //     case 'facebook': return <Facebook className="w-5 h-5" />;
  //     case 'twitter': return <Twitter className="w-5 h-5" />;
  //     case 'youtube': return <Youtube className="w-5 h-5" />;
  //     case 'linkedin': return <Linkedin className="w-5 h-5" />;
  //     case 'tiktok': return <Globe className="w-5 h-5" />; 
  //     default: return <Globe className="w-5 h-5" />;
  //   }
  // };

  // const getSocialLink = (social : Social) => {
  //   switch(social.icon.toLowerCase()) {
  //     case 'phone': return `tel:${social.value}`;
  //     case 'whatsapp': return social.value.includes('http') ? social.value : `https://wa.me/${social.value}`;
  //     case 'mail': return `mailto:${social.value}`;
  //     default: return social.value.startsWith('http') ? social.value : `https://${social.value}`;
  //   }
  // };

  return (
    <div className="min-h-screen relative text-white bg-black overflow-hidden">
      {/* Animated Flame Background */}
      <div className="absolute inset-0 z-0 flame-bg"></div>

      {/* Header */}
      {/* <header className="relative z-10 py-12 px-4">

        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
            <img src={profile.logo} alt={profile.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{profile.title}</h1>
            <p className="text-orange-200">{profile.description}</p>
            <div className="flex items-center gap-2 mt-2 text-sm text-orange-100">
              <MapPin className="w-4 h-4" />
              <span>{profile.address}</span>
            </div>
          </div>
        </div>
      </header> */}
  {/* اخضر  */}
       {/* <header className="relative bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-12 px-4 overflow-hidden"> */}
   {/* ناري  */}

     {/* <header className="relative bg-linear-to-r from-red-600 via-orange-500 to-yellow-400 text-white py-12 px-4 overflow-hidden">

     
         <div className="absolute inset-0">
           {profile.banner ? (
             <img src={profile.banner} alt="Banner" className="w-full h-full object-cover opacity-50" />
           ) : (
             <div className="w-full h-full bg-slate-800 opacity-50"></div>
           )}
         </div>

         <div className="relative z-10 max-w-7xl mx-auto flex items-center gap-4 py-4">
           <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
             <img src={profile.logo} alt={profile.title} className="w-full h-full object-cover" />
           </div>
           <div>
             <h1 className="text-3xl md:text-4xl font-bold text-black ">{profile.title}</h1>
             <p className="  font-bold text-black ">{profile.description}</p>
             <div className="flex items-center gap-2 mt-2 font-bold text-black">
               <MapPin className="w-4 h-4" />
               <span>{profile.address}</span>
             </div>
           </div>
         </div>
       </header> */}
  {/* Header */}
   <header className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0">
          {profile.banner ? (
            <img src={profile.banner} alt="Banner" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
          ) : (
            <div className="w-full h-full bg-linear-to-b from-orange-800 via-red-900 to-yellow-600 opacity-50"></div>
          )}
          {/* Overlay Flame Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,120,0,0.6)_0%,rgba(255,0,0,0.6)_60%,rgba(0,0,0,0.0)_100%)] animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex items-center gap-4 py-4">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl">
            <img src={profile.logo} alt={profile.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-50 drop-shadow-lg">{profile.title}</h1>
            <p className="text-yellow-200 drop-shadow-sm">{profile.description}</p>
            <div className="flex items-center gap-2 mt-2 text-yellow-300">
              <MapPin className="w-4 h-4" />
              <span>{profile.address}</span>
            </div>

     {/* Social Icons */}
            <div className="flex flex-wrap justify-center gap-3">
              {profile.socials.map(social => (
                <Button
                  key={social.id}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-orange-700 hover:bg-orange-600 hover:border-orange-500 bg-gray-800"
                  onClick={() => openSocialLinkHelper(social.icon, social.value)}
                >
                  {getSocialIconHelper(social.icon)}
                </Button>
              ))}
            </div>

          </div>
        </div>


      </header>




      {/* Filter Bar */}
      {/* <div className="sticky top-0 z-20 bg-black/70 border-b border-orange-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3 overflow-x-auto scrollbar-hide">
          <Filter className="w-5 h-5 text-orange-400 shrink-0" />
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
            className="whitespace-nowrap"
          >
            الكل
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </div> */}

{/* Filter Bar */}
<div className="top-0 z-20 relative">
  {/* Animated flame background for filter bar */}
  <div className="absolute inset-0 bg-accent-900"></div>

  <div className="relative max-w-7xl mx-auto px-4 py-4 flex items-center gap-3 overflow-x-auto scrollbar-hide">
    <Filter className="w-5 h-5 text-orange-400 shrink-0 z-10" />
    <Button
    //  variant={selectedCategory === "all" ? "default" : "outline"}
      onClick={() => setSelectedCategory("all")}
      className={`whitespace-nowrap relative z-10 ${
        selectedCategory === "all"
          ? "bg-linear-to-r from-red-600 to-orange-600 text-white shadow-[0_0_10px_rgba(255,140,0,0.7)]"
          : "bg-linear-to-r from-brown to-orange-900   text-white"
      }`}
    >
      الكل
    </Button>
    {categories.map((category) => (
      <Button
        key={category}
       // variant={selectedCategory === category ? "default" : "outline"}
        onClick={() => setSelectedCategory(category)}
        className={`whitespace-nowrap relative z-10 ${
          selectedCategory === category
            ? "bg-linear-to-r from-red-600 to-orange-600 text-white shadow-[0_0_10px_rgba(255,140,0,0.7)]"
          : "bg-linear-to-r from-brown to-orange-900   text-white"
        }`}
      >
        {category}
      </Button>
    ))}
  </div>

</div>


      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid animate-fade-in"
              style={{ animationDelay: `${(index % 12) * 0.05}s` }}
            >
              <div className="bg-black/70 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-orange-500 transition-all cursor-pointer group border border-orange-700 hover:border-orange-500/70 relative">
                
                {/* Item Image */}
                <div className="relative overflow-hidden h-56">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black/50 text-6xl">🍽️</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Fire overlay animation */}
                  <div className="absolute inset-0 flame-overlay pointer-events-none"></div>
                </div>

                <div className="p-4">
                  <div className="text-xs text-orange-400 font-semibold mb-2">{item.category}</div>
                  <h3 className="font-bold text-white mb-2 line-clamp-1 text-lg">{item.name}</h3>
                  <p className="text-sm text-orange-200 line-clamp-2 mb-3">{item.description}</p>
                  <div className="flex flex-col gap-1 mb-2">
                    {item.prices.map((p) => (
                      <span key={p.id} className="text-sm text-orange-400">{p.lable} : {p.amount} ج.م</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>







      {/* Flame Animation CSS */}
      <style jsx>{`
        .flame-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(255,80,0,0.2), rgba(255,160,0,0.15), rgba(255,40,0,0.1), rgba(255,120,0,0.1));
          background-size: 400% 400%;
          animation: flameAnim 12s ease-in-out infinite;
        }

        .flame-overlay {
          background: radial-gradient(circle, rgba(255,140,0,0.1) 0%, rgba(255,60,0,0) 70%);
          mix-blend-mode: screen;
          animation: flameAnimOverlay 6s ease-in-out infinite;
        }

        @keyframes flameAnim {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes flameAnimOverlay {
          0% { transform: translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateY(-20px) scale(1.05); opacity: 0.3; }
          100% { transform: translateY(0) scale(1); opacity: 0.5; }
        }
        @keyframes flameBg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-flame-bg {
          background-size: 400% 400%;
          animation: flameBg 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PremiumTemplateE;














//       {
// /* Footer */
//     }
//       <footer className="bg-black/70 border-t border-orange-700 py-8 px-4 mt-12 relative z-10">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="flex justify-center gap-4 mb-4">
          
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 variant="outline"
//                 size="icon"
//                 className="rounded-full border-orange-700 hover:bg-orange-600 hover:border-orange-500 bg-gray-800"
//                 onClick={() => {openSocialLinkHelper(social.icon, social.value);}}
//               >
//                 {getSocialIconHelper(social.icon)}
//               </Button>
//             ))}


//           </div>
//           {/* <p className="text-sm text-orange-300">Menu – Premium Template E (Flame Grid)</p> */}
//         </div>
//       </footer>















//////////##################### دا تماااااااااام وزي الفل #########################################

