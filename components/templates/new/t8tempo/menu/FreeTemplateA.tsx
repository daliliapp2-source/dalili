

"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Instagram, Globe, MessageCircle, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { profileWithMenu, allCategories } from "../mock";
import { getSocialIconHelper, openSocialLinkHelper } from "./helpers";



export interface Socialxm {
  id: string;
  name: string;
  value: string;
  open_type: string;
  icon: string;
}
export interface profile_working_hours_xm {
    day_name : string
    open_time : string
    close_time : string
    is_closed : boolean
}

export interface ItemPricexm { id?: string; lable: string; amount: number; }

export interface MenuItemx {
  id: string;
  name: string;
  description: string;
  prices: ItemPricexm[];
  image: string;
  category: string;
}

export interface Profilexm {
  id: string;
  user_id: string;
  banner: string;
  logo: string;
  title: string;
  description: string;
  address: string;
  profile_theme?: string;
  link_slug?: string;
  socials: Socialxm[];
  menuItems?: MenuItemx[];
}



// const getSocialIcon = (iconName: string) => {
//   switch (iconName) {
//     case "whatsapp":
//       return <MessageCircle className="w-4 h-4" />;
//     case "instagram":
//       return <Instagram className="w-4 h-4" />;
//     case "tiktok":
//       return <Youtube className="w-4 h-4" />; // لو تحب ممكن تضيف أيقونة TikTok خاصة
//     case "globe":
//       return <Globe className="w-4 h-4" />;
//     default:
//       return <Globe className="w-4 h-4" />;
//   }
// };




type Props = {
  model?: Profilexm;
};

const FreeTemplateA = ({ model }: Props) => {
  const profile = model || profileWithMenu;
const isMock = !model; // معناها: مفيش model مبعوت

const categories = isMock
  ? allCategories
  : Array.from(new Set(profile.menuItems?.map(item => item.category) || []));


// const categories = profile.menuItems && profile.menuItems.length > 0
//   ? Array.from(new Set(profile.menuItems.map(item => item.category)))
//   : allCategories;

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState("");
  //const [openStatus, setOpenStatus] = useState({ status: "", remaining: "" });

  // useEffect(() => {
  // //  setOpenStatus(isOpenNow(profile.workingHours));
  //   const interval = setInterval(() => {
  //     setOpenStatus(isOpenNow(profile.workingHours));
  //   }, 60000);
  //   return () => clearInterval(interval);
  // }, [profile.workingHours]);

  const filteredItems =
    profile.menuItems?.filter(
      (item) =>
        item.category === selectedCategory &&
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border py-6 px-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
              <img src={profile.logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl md:text-2xl font-bold text-foreground">{profile.title}</h1>
              <p className="text-sm text-muted-foreground">{profile.description}</p>
              
              {/* <p className={`text-sm font-semibold mt-1 ${openStatus.status === "مفتوح" ? "text-green-500" : "text-red-500"}`}>
                {openStatus.status}
                {openStatus.remaining && ` - باقي ${openStatus.remaining}`}
              </p> */}

            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Input
              type="text"
              placeholder="ابحث عن منتج..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="sticky top-[140px] md:top-[132px] z-10 bg-muted/50 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* List of Items */}
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{item.description}</p>

                {/* عرض كل الأسعار لكل عنصر */}
                <div className="space-y-1">
                  {item.prices.map((price) => (
                    <div key={price.id} className="flex justify-between items-center text-primary">
                      <span>{price.lable}</span>
                      <span>{price.amount} ج.م</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* صورة افتراضية */}
              <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            <span>{profile.address}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {profile.socials.map((social) => (
              <Button
                key={social.id}
                variant="outline"
                size="icon"
                onClick={() => { openSocialLinkHelper(social.icon,social.value);
               
               
                  // let url = social.value;
                  // switch (social.open_type) {
                  //   case "whatsapp":
                  //     url = `https://wa.me/${social.value}`;
                  //     break;
                  //   case "facebook":
                  //     url = `https://www.facebook.com/${social.value}`;
                  //     break;
                  //   case "tiktok":
                  //     url = `https://www.tiktok.com/${social.value}`;
                  //     break;
                  //   case "website":
                  //     url = `https://${social.value}`;
                  //     break;
                  // }
                  // window.open(url, "_blank");
              
              
                }
              
              }
              >
                {getSocialIconHelper(social.icon)}
              </Button>
            ))}
          </div>
{/* 
          <p className="text-xs text-muted-foreground">
            Menu – Free Template A (List with Multiple Prices)
          </p> */}


        </div>
      </footer>
    </div>
  );
};

export default FreeTemplateA;





