
"use client";

import { useState, useEffect } from "react";
import { profileWithMenu, allCategories } from "../mock";
import { Button } from "@/components/ui/button";
import { MapPin, Instagram, Globe, MessageCircle } from "lucide-react";
import { Profilexm } from "./FreeTemplateA";
import { getSocialIconHelper, openSocialLinkHelper } from "./helpers";


type Props = {
  model?: Profilexm;
};

const PremiumTemplateA = ({ model }: Props) => {
  const profile = model || profileWithMenu;

const isMock = !model; // معناها: مفيش model مبعوت

const categories = isMock
  ? allCategories
  : Array.from(new Set(profile.menuItems?.map(item => item.category) || []));

  
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredItems =
    profile.menuItems?.filter((item) => item.category === selectedCategory) || [];
    //  bg-slate-50    bg-blue-900
  return (
    <div className="min-h-screen
 
 bg-gray-800
 
    ">
{/* Header */}
<header
  className="relative h-64 w-full text-white flex items-center justify-start"
  style={{
    backgroundImage: `url(${profile.banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
  <div className="relative px-4 max-w-5xl flex flex-col items-center md:items-end md:flex-row md:justify-end gap-4">
    {/* Logo */}
    <div className="w-20 h-20 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
      <img src={profile.logo} alt="Logo" className="w-full h-full object-cover" />
    </div>

    {/* Content */}
    <div className="text-center md:text-right">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{profile.title}</h1>
      <p className="text-amber-100 mb-2">{profile.description}</p>
      <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-white">
        <MapPin className="w-4 h-4" />
        <span>{profile.address}</span>
      </div>
    </div>
  </div>
</header>

      {/* Category Navigation */}
      <div className="sticky top-0 z-10
      
 bg-gray-900
       border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {allCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap min-w-fit"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer hover-lift rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all"
            >
              <div className="aspect-square bg-slate-100 flex items-center justify-center relative overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-6xl">🍽️</span>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-3">
                <h3 className="font-semibold text-sm mb-1 line-clamp-1">{item.name}</h3>
                <p className="text-xs text-slate-600 line-clamp-2 mb-2">{item.description}</p>
                <div className="space-y-1">
                  {item.prices.map((price) => (
                    <div key={price.id} className="flex justify-between text-shadow-indigo-800 text-sm font-medium">
                      <span>{price.lable}</span>
                      <span>{price.amount} ج.م</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-4">
            {profile.socials.map((social) => (
              <Button
                key={social.id}
                variant="outline"
                size="icon"
                className="rounded-full border-white/20 hover:bg-white/10"
                onClick={() => {openSocialLinkHelper(social.icon, social.value);}}
              >
                {getSocialIconHelper(social.icon)}
              </Button>
            ))}
          </div>
          {/* <p className="text-sm text-slate-400">
            Menu – Premium Template A (Image Grid)
          </p> */}
        </div>
      </footer>
    </div>
  );
};

export default PremiumTemplateA;



// // أيقونات التواصل
// function getSocialIcon(iconName: string) {
//   switch (iconName) {
//     case "whatsapp":
//       return <MessageCircle className="w-5 h-5" />;
//     case "instagram":
//       return <Instagram className="w-5 h-5" />;
//     case "tiktok":
//     case "globe":
//       return <Globe className="w-5 h-5" />;
//     default:
//       return <Globe className="w-5 h-5" />;
//   }
// }



// // صياغة روابط التواصل
// function formatSocialURL(social: any) {
//   switch (social.open_type) {
//     case "whatsapp":
//       return `https://wa.me/${social.value}`;
//     case "facebook":
//       return `https://www.facebook.com/${social.value}`;
//     case "tiktok":
//       return `https://www.tiktok.com/${social.value}`;
//     case "website":
//       return `https://${social.value}`;
//     default:
//       return social.value;
//   }
// }
