// import { profileWithMenu, allCategories } from "../mock";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { MapPin, Phone, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
// import { useState, useRef } from "react";

// const PremiumTemplateD = () => {
//   const profile = profileWithMenu;

//   const CategoryCarousel = ({ category }: { category: string }) => {
//     const scrollRef = useRef<HTMLDivElement>(null);
//     const [canScrollLeft, setCanScrollLeft] = useState(false);
//     const [canScrollRight, setCanScrollRight] = useState(true);

//     const items = profile.menuItems?.filter(item => item.category === category) || [];

//     const scroll = (direction: 'left' | 'right') => {
//       if (scrollRef.current) {
//         const scrollAmount = 300;
//         scrollRef.current.scrollBy({
//           left: direction === 'left' ? -scrollAmount : scrollAmount,
//           behavior: 'smooth'
//         });
        
//         setTimeout(() => {
//           checkScrollButtons();
//         }, 300);
//       }
//     };

//     const checkScrollButtons = () => {
//       if (scrollRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//         setCanScrollLeft(scrollLeft > 0);
//         setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
//       }
//     };

//     return (
//       <div className="mb-12">
//         <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 px-4">
//           {category}
//         </h2>
        
//         <div className="relative group">
//           {/* Scroll Buttons */}
//           {canScrollLeft && (
//             <Button
//               size="icon"
//               variant="outline"
//               className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
//               onClick={() => scroll('left')}
//             >
//               <ChevronRight className="w-5 h-5" />
//             </Button>
//           )}
          
//           {canScrollRight && (
//             <Button
//               size="icon"
//               variant="outline"
//               className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
//               onClick={() => scroll('right')}
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </Button>
//           )}

//           {/* Carousel */}
//           <div
//             ref={scrollRef}
//             onScroll={checkScrollButtons}
//             className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-2"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {items.map((item) => (
//               <Card
//                 key={item.id}
//                 className="flex-shrink-0 w-72 hover-lift cursor-pointer border-2 hover:border-primary transition-all"
//               >
//                 <CardContent className="p-0">
//                   {/* Image */}
//                   <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
//                     <span className="text-7xl">🍽️</span>
//                   </div>
                  
//                   {/* Content */}
//                   <div className="p-4">
//                     <h3 className="font-bold text-lg mb-2 line-clamp-1">
//                       {item.name}
//                     </h3>
//                     <p className="text-sm text-slate-600 line-clamp-2 mb-3">
//                       {item.description}
//                     </p>
                    
//                     <div className="flex items-center justify-between">
//                       <span className="text-2xl font-bold text-primary">
//                         {item.price} ج.م
//                       </span>
//                       <Button size="sm" variant="outline">
//                         أضف
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-4 shadow-xl">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
//             <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-2xl">
//               <span className="text-4xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 {profile.title.charAt(0)}
//               </span>
//             </div>
            
//             <div className="text-center md:text-right flex-1">
//               <h1 className="text-3xl md:text-4xl font-bold mb-2">
//                 {profile.title}
//               </h1>
//               <p className="text-blue-100 text-lg">
//                 {profile.description}
//               </p>
//             </div>

//             <div className="flex gap-3">
//               {profile.socials.map((social) => (
//                 <Button
//                   key={social.id}
//                   size="icon"
//                   variant="outline"
//                   className="rounded-full bg-white/10 border-white/30 hover:bg-white/20"
//                   onClick={() => window.open(social.value, '_blank')}
//                 >
//                   {social.icon === 'whatsapp' ? <Phone className="w-5 h-5" /> : <Instagram className="w-5 h-5" />}
//                 </Button>
//               ))}
//             </div>
//           </div>
          
//           <div className="flex items-center justify-center md:justify-start gap-2">
//             <MapPin className="w-4 h-4" />
//             <span>{profile.address}</span>
//           </div>
//         </div>
//       </header>

//       {/* Category Carousels */}
//       <div className="max-w-7xl mx-auto py-12">
//         {allCategories.map((category) => (
//           <CategoryCarousel key={category} category={category} />
//         ))}
//       </div>

//       {/* Footer */}
//       <footer className="bg-slate-900 text-white py-8 px-4 mt-12">
//         <div className="max-w-7xl mx-auto text-center">
//           <p className="text-sm text-slate-400">
//             Menu – Premium Template D (Carousel Sections)
//           </p>
//           <p className="text-xs text-slate-500 mt-2">
//             مرر للجانب لعرض المزيد من المنتجات
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PremiumTemplateD



// "use client";

// import { profileWithMenu, allCategories, MenuItem, Social } from "../mock";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { 
//   MapPin, 
//   Phone, 
//   Instagram, 
//   Facebook, 
//   Twitter, 
//   Youtube, 
//   Linkedin, 
//   MessageCircle, // for generic or whatsapp
//   Smartphone, // for generic phone
//   ChevronLeft, 
//   ChevronRight,
//   Globe
// } from "lucide-react";
// import { useState, useRef } from "react";
// import { Profilexm } from "./FreeTemplateA";
// import { getSocialIconHelper, openSocialLinkHelper } from "./helpers";
// type Props = {
//   model?: Profilexm;
// };

// const PremiumTemplateD = ({ model }: Props) => {
//   const profile = model || profileWithMenu;

// const isMock = !model; // معناها: مفيش model مبعوت

// const categories = isMock
//   ? allCategories
//   : Array.from(new Set(profile.menuItems?.map(item => item.category) || []));

//   // const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  

//   const CategoryCarousel = ({ category }: { category: string }) => {
//     const scrollRef = useRef<HTMLDivElement>(null);
//     const [canScrollLeft, setCanScrollLeft] = useState(false); // RTL logic inverted below for visual flow
//     const [canScrollRight, setCanScrollRight] = useState(true);

//     const items = profile.menuItems?.filter(item => item.category === category) || [];

//     if (items.length === 0) return null;

//     const scroll = (direction: 'left' | 'right') => {
//       if (scrollRef.current) {
//         const scrollAmount = 300;
//         // Note: In RTL, scrolling "left" means moving to negative X visually to the left
//         scrollRef.current.scrollBy({
//           left: direction === 'left' ? -scrollAmount : scrollAmount,
//           behavior: 'smooth'
//         });
        
//         setTimeout(() => {
//           checkScrollButtons();
//         }, 300);
//       }
//     };

//     const checkScrollButtons = () => {
//       if (scrollRef.current) {
//         // Simple logic for checking scroll bounds
//         const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//         // Logic might vary slightly based on browser RTL implementation, simplified here:
//         setCanScrollLeft(Math.abs(scrollLeft) > 0);
//         setCanScrollRight(Math.abs(scrollLeft) < scrollWidth - clientWidth - 10);
//       }
//     };

//     return (
//       <div className="mb-12">
//         <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 px-4 border-r-4 border-primary mr-4">
//           {category}
//         </h2>
        
//         <div className="relative group">
//           {/* Scroll Buttons (Adjusted for RTL visual feel) */}
//           <Button
//             size="icon"
//             variant="outline"
//             className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg bg-white/95 backdrop-blur-sm transition-opacity ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
//             onClick={() => scroll('left')}
//           >
//             <ChevronRight className="w-5 h-5" />
//           </Button>
          
//           <Button
//             size="icon"
//             variant="outline"
//             className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg bg-white/95 backdrop-blur-sm transition-opacity ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
//             onClick={() => scroll('right')}
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </Button>

//           {/* Carousel */}
//           <div
//             ref={scrollRef}
//             onScroll={checkScrollButtons}
//             className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4 pt-2"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {items.map((item) => {
//                 // Price Handling: Get the first price or find the lowest
//                 const mainPrice = item.prices && item.prices.length > 0 ? item.prices[0] : { amount: 0, lable: '' };
//                 const hasMultiplePrices = item.prices && item.prices.length > 1;

//                 return (
//                     <Card
//                         key={item.id}
//                         className="shrink-0 w-72 hover-lift cursor-pointer border hover:border-primary transition-all duration-300 overflow-hidden group/card"
//                     >
//                         <CardContent className="p-0">
//                         {/* Item Image */}
//                         <div className="h-48 overflow-hidden relative">
//                             <img 
//                                 src={item.image} 
//                                 alt={item.name}
//                                 className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
//                                 onError={(e) => {
//                                     // Fallback if image fails
//                                     (e.target as HTMLImageElement).style.display = 'none';
//                                     (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
//                                 }}
//                             />
//                              {/* Fallback Placeholder */}
//                              <div className="hidden w-full h-full bg-slate-100 flex items-center justify-center absolute top-0 left-0">
//                                 <span className="text-4xl">🍽️</span>
//                              </div>
//                         </div>
                        
//                         {/* Content */}
//                         <div className="p-4">
//                             <div className="flex justify-between items-start mb-2">
//                                 <h3 className="font-bold text-lg line-clamp-1 text-slate-800">
//                                 {item.name}
//                                 </h3>
//                             </div>

//                             <p className="text-sm text-slate-500 line-clamp-2 mb-4 h-10 leading-relaxed">
//                                 {item.description}
//                             </p>
                            
//                             <div >
// <div className="flex flex-col gap-1 mb-2 pr-2 pl-2">
//   {item.prices.map((p) => (
//     <span key={p.id} className="text-sm text-slate-700 flex justify-between mb-1">
//       <span>{p.lable}</span>
//       <span>{p.amount} </span>
//     </span>
//   ))}
// </div>

//                                 {/* <Button size="sm" className="bg-primary hover:bg-primary/90 text-white shadow-md">
//                                 أضف
//                                 </Button> */}
//                             </div>
//                         </div>
//                         </CardContent>
//                     </Card>
//                 );
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-slate-50" dir="rtl">
      
//       {/* Header Section */}
//       <header className="relative bg-slate-900 text-white shadow-xl overflow-hidden">
//         {/* Banner Background */}
//         <div className="absolute inset-0 z-0">
//             {profile.banner ? (
//                 <>
//                  <img 
//                     src={profile.banner} 
//                     alt="Cover" 
//                     className="w-full h-full object-cover opacity-40 blur-[2px]"
//                 />
//                 <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />
//                 </>
//             ) : (
//                 <div className="w-full h-full bg-linear-to-r from-blue-600 to-purple-600 opacity-50" />
//             )}
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto py-12 px-4">
//           <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-6">
            
//             {/* Logo */}
//             <div className="w-32 h-32 rounded-2xl bg-white p-1 shadow-2xl -mb-16 md:mb-0 relative z-20 shrink-0">
//                 <img 
//                     src={profile.logo} 
//                     alt={profile.title}
//                     className="w-full h-full object-cover rounded-xl"
//                     onError={(e) => {
//                          (e.target as HTMLImageElement).src = "https://via.placeholder.com/150?text=" + profile.title.charAt(0);
//                     }}
//                 />
//             </div>
            
//             {/* Profile Info */}
//             <div className="text-center md:text-right flex-1 pt-16 md:pt-0">
//               <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-md">
//                 {profile.title}
//               </h1>
//               <p className="text-slate-200 text-lg max-w-2xl leading-relaxed">
//                 {profile.description}
//               </p>
//             </div>
//           </div>

//           <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-6">
//             {/* Address */}
//              <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
//                 <MapPin className="w-4 h-4 text-primary-foreground" />
//                 <span>{profile.address}</span>
//             </div>

//             {/* Social Icons */}
//             <div className="flex flex-wrap justify-center gap-3">
            
//               {/* {profile.socials.map((social) => (
//                 <a
//                   key={social.id}
//                   href={openSocialLinkHelper(social.icon,social.value)}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-primary hover:-translate-y-1 transition-all duration-300"
//                   title={social.name}
//                 >
//                   {getSocialIconHelper(social.icon)}
//                 </a>
//               ))} */}
//     {profile.socials.map((social) => (
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


//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content Area */}
//       <div className="max-w-7xl mx-auto py-16 space-y-8">
//         {/* Spacer for the logo overflow */}
//         <div className="h-6 md:h-0"></div> 

//         {categories.map((category) => (
//           <CategoryCarousel key={category} category={category} />
//         ))}
//       </div>

//       {/* Footer */}
  
  

//     </div>
//   );
// };

// export default PremiumTemplateD;






"use client";

import { profileWithMenu, allCategories, MenuItem, Social } from "../mock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  ChevronLeft, 
  ChevronRight,
  Globe
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Profilexm } from "./FreeTemplateA";
import { getSocialIconHelper, openSocialLinkHelper } from "./helpers";

type Props = {
  model?: Profilexm;
};



const PremiumTemplateD = ({ model }: Props) => {
  const profile = model || profileWithMenu;

  const isMock = !model;
  const categories = isMock
    ? allCategories
    : Array.from(new Set(profile.menuItems?.map(item => item.category) || []));

  const CategoryCarousel = ({ category }: { category: string }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const items = profile.menuItems?.filter(item => item.category === category) || [];

    if (items.length === 0) return null;

    const checkScrollButtons = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    };

    const scroll = (direction: "left" | "right") => {
      if (!scrollRef.current) return;
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 350);
    };

    // تحديث الأزرار عند التحميل والتغيير
    useEffect(() => {
      checkScrollButtons();
    }, [items]);

    return (
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 px-4 border-r-4 border-primary mr-4">
          {category}
        </h2>

        <div className="relative group">
          {/* Scroll Buttons */}
          <Button
            size="icon"
            variant="outline"
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg bg-white/95 backdrop-blur-sm transition-opacity ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg bg-white/95 backdrop-blur-sm transition-opacity ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => scroll("right")}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            onScroll={checkScrollButtons}
            className="flex gap-4 overflow-x-auto px-4 pb-4 pt-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            dir="ltr"
          >
            {items.map(item => {
              const mainPrice = item.prices && item.prices.length > 0 ? item.prices[0] : { amount: 0, lable: "" };
              return (
                <Card
                  key={item.id}
                  className="shrink-0 w-72 hover-lift cursor-pointer border hover:border-primary transition-all duration-300 overflow-hidden group/card"
                >
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="h-48 overflow-hidden relative">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                          onError={e => {
                            (e.target as HTMLImageElement).style.display = "none";
                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-100 text-4xl">
                          🍽️
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg line-clamp-1 text-slate-800">{item.name}</h3>
                      </div>

                      <p className="text-sm text-slate-500 line-clamp-2 mb-4 h-10 leading-relaxed">{item.description}</p>

                      <div className="flex flex-col gap-1 mb-2 pr-2 pl-2">
                        {item.prices.map(p => (
                          <span key={p.id} className="text-sm text-slate-700 flex justify-between mb-1">
                            <span>{p.lable}</span>
                            <span>{p.amount}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  };


  
  return (
    <div className="min-h-screen bg-slate-50" dir="rtl">
      {/* Header Section */}
      <header className="relative bg-slate-900 text-white shadow-xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          {profile.banner ? (
            <>
              <img
                src={profile.banner}
                alt="Cover"
                className="w-full h-full object-cover opacity-40 blur-[2px]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent" />
            </>
          ) : (
            <div className="w-full h-full bg-linear-to-r from-blue-600 to-purple-600 opacity-50" />
          )}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto py-12 px-4">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-6">
            <div className="w-32 h-32 rounded-2xl bg-white p-1 shadow-2xl -mb-16 md:mb-0 relative z-20 shrink-0">
              <img
                src={profile.logo}
                alt={profile.title}
                className="w-full h-full object-cover rounded-xl"
                onError={e => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/150?text=" + profile.title.charAt(0);
                }}
              />
            </div>

            <div className="text-center md:text-right flex-1 pt-16 md:pt-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-md">{profile.title}</h1>
              <p className="text-slate-200 text-lg max-w-2xl leading-relaxed">{profile.description}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-6">
            {/* Address */}
            <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-primary-foreground" />
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 space-y-8">
        <div className="h-6 md:h-0"></div>
        {categories.map(category => (
          <CategoryCarousel key={category} category={category} />
        ))}
      </div>
    </div>
  );
};

export default PremiumTemplateD;














































// --- Helper Functions ---

// 1. Social Media Icon Mapper
// const getSocialIcon = (iconName: string) => {
//   switch (iconName.toLowerCase()) {
//     case 'whatsapp': return <MessageCircle className="w-5 h-5" />;
//     case 'phone': return <Phone className="w-5 h-5" />;
//     case 'instagram': return <Instagram className="w-5 h-5" />;
//     case 'facebook': return <Facebook className="w-5 h-5" />;
//     case 'twitter': return <Twitter className="w-5 h-5" />;
//     case 'youtube': return <Youtube className="w-5 h-5" />;
//     case 'linkedin': return <Linkedin className="w-5 h-5" />;
//     case 'tiktok': return <Smartphone className="w-5 h-5" />; // Lucide doesn't have tiktok, using Smartphone as fallback
//     default: return <Globe className="w-5 h-5" />;
//   }
// };

// // 2. Social Link Formatter
// const getSocialLink = (social: Social) => {
//   const value = social.value;
//   switch (social.icon.toLowerCase()) {
//     case 'phone':
//       return `tel:${value}`;
//     case 'whatsapp':
//       // Basic check, might need stripping special chars in a real app
//       return value.includes('http') ? value : `https://wa.me/${value}`;
//     case 'mail':
//         return `mailto:${value}`;
//     default:
//       return value.startsWith('http') ? value : `https://${value}`;
//   }
// };



// import { profileWithMenu, allCategories } from "../mock";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Phone, MessageCircle, Video, Instagram, Facebook, Twitter, Youtube, Linkedin, ChevronRight, ChevronLeft, MapPin } from "lucide-react";
// import { useState, useRef, useEffect } from "react";

// const PremiumTemplateD = () => {
//   const profile = profileWithMenu;

//   // Map for social icons
//   const SocialIcon = ({ iconName }: { iconName: string }) => {
//     switch (iconName) {
//     case "whatsapp": return <MessageCircle className="w-5 h-5" />; // بديل واتساب
//       case "phone": return <Phone className="w-5 h-5" />;
//       case "instagram": return <Instagram className="w-5 h-5" />;
//       case "facebook": return <Facebook className="w-5 h-5" />;
//       case "twitter": return <Twitter className="w-5 h-5" />;
//       case "youtube": return <Youtube className="w-5 h-5" />;
//     case "tiktok": return <Video className="w-5 h-5" />; // بديل تيك توك
//       case "linkedin": return <Linkedin className="w-5 h-5" />;
//       default: return <Phone className="w-5 h-5" />;
//     }
//   };

//   const CategoryCarousel = ({ category }: { category: string }) => {
//     const scrollRef = useRef<HTMLDivElement>(null);
//     const [canScrollLeft, setCanScrollLeft] = useState(false);
//     const [canScrollRight, setCanScrollRight] = useState(true);

//     const items = profile.menuItems?.filter(item => item.category === category) || [];

//     const scroll = (direction: 'left' | 'right') => {
//       if (scrollRef.current) {
//         const scrollAmount = 300;
//         scrollRef.current.scrollBy({
//           left: direction === 'left' ? -scrollAmount : scrollAmount,
//           behavior: 'smooth'
//         });

//         setTimeout(() => {
//           checkScrollButtons();
//         }, 300);
//       }
//     };

//     const checkScrollButtons = () => {
//       if (scrollRef.current) {
//         const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//         setCanScrollLeft(scrollLeft > 0);
//         setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
//       }
//     };

//     useEffect(() => {
//       checkScrollButtons();
//     }, []);

//     return (
//       <div className="mb-12">
//         <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 px-4">
//           {category}
//         </h2>

//         <div className="relative group">
//           {/* Scroll Buttons */}
//           {canScrollLeft && (
//             <Button
//               size="icon"
//               variant="outline"
//               className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
//               onClick={() => scroll('left')}
//             >
//               <ChevronRight className="w-5 h-5" />
//             </Button>
//           )}

//           {canScrollRight && (
//             <Button
//               size="icon"
//               variant="outline"
//               className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
//               onClick={() => scroll('right')}
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </Button>
//           )}

//           {/* Carousel */}
//           <div
//             ref={scrollRef}
//             onScroll={checkScrollButtons}
//             className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-2"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {items.map((item) => (
//               <Card
//                 key={item.id}
//                 className="flex-shrink-0 w-72 hover-lift cursor-pointer border-2 hover:border-primary transition-all"
//               >
//                 <CardContent className="p-0">
//                   {/* Image */}
//                   <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
//                     <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
//                   </div>

//                   {/* Content */}
//                   <div className="p-4">
//                     <h3 className="font-bold text-lg mb-2 line-clamp-1">
//                       {item.name}
//                     </h3>
//                     <p className="text-sm text-slate-600 line-clamp-2 mb-3">
//                       {item.description}
//                     </p>

//                     <div className="flex flex-col gap-2 mb-3">
//                       {item.prices.map((p) => (
//                         <span key={p.id} className="text-sm text-slate-700">
//                           {p.lable}: {p.amount} ج.م
//                         </span>
//                       ))}
//                     </div>

//                     <Button size="sm" variant="outline">
//                       أضف
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
//       {/* Header */}
//       <header className="relative">
//         <img src={profile.banner} alt={profile.title} className="w-full h-64 object-cover" />
//         <div className="absolute inset-0 bg-black/25 flex flex-col md:flex-row items-center justify-between px-4 py-6 md:py-12">
//           <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-2xl">
//             <img src={profile.logo} alt={profile.title} className="w-full h-full object-cover" />
//           </div>

//           <div className="text-center md:text-right flex-1 text-white md:ml-6">
//             <h1 className="text-3xl md:text-4xl font-bold mb-2">
//               {profile.title}
//             </h1>
//             <p className="text-lg">
//               {profile.description}
//             </p>
//           </div>

//           <div className="flex gap-3 mt-4 md:mt-0">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 size="icon"
//                 variant="outline"
//                 className="rounded-full bg-white/10 border-white/30 hover:bg-white/20"
//                 onClick={() => {
//                   if (social.open_type === "external") window.open(social.value, "_blank");
//                   else window.location.href = social.value;
//                 }}
//               >
//                 <SocialIcon iconName={social.icon} />
//               </Button>
//             ))}
//           </div>
//         </div>

//         <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
//           <MapPin className="w-4 h-4" />
//           <span>{profile.address}</span>
//         </div>
//       </header>

//       {/* Category Carousels */}
//       <div className="max-w-7xl mx-auto py-12">
//         {allCategories.map((category) => (
//           <CategoryCarousel key={category} category={category} />
//         ))}
//       </div>

//       {/* Footer */}
//       <footer className="bg-slate-900 text-white py-8 px-4 mt-12">
//         <div className="max-w-7xl mx-auto text-center">
//           <p className="text-sm text-slate-400">
//             Menu – Premium Template D (Carousel Sections)
//           </p>
//           <p className="text-xs text-slate-500 mt-2">
//             مرر للجانب لعرض المزيد من المنتجات
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PremiumTemplateD;
