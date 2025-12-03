
"use client";


import { useState, useEffect } from "react";
import { profileWithMenu, allCategories } from "../mock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Instagram, Globe, MessageCircle } from "lucide-react";
import { Profilexm } from "./FreeTemplateA";
import { getSocialIconHelper, openSocialLinkHelper } from "./helpers";

const FreeTemplateB = ({ model }: Props) => {
  const profile = model || profileWithMenu;

const isMock = !model; // معناها: مفيش model مبعوت

const categories = isMock
  ? allCategories
  : Array.from(new Set(profile.menuItems?.map(item => item.category) || []));

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  // const [openStatus, setOpenStatus] = useState({ status: "", remaining: "" });

  // useEffect(() => {
  //   const updateStatus = () => {
  //     const now = new Date();
  //     const dayIndex = now.getDay();
  //     const dayMap = [1, 2, 3, 4, 5, 6, 0];
  //     const today = profile.workingHours?.[dayMap[dayIndex]];

  //     if (!today || today.is_closed) {
  //       setOpenStatus({ status: "مغلق", remaining: "" });
  //       return;
  //     }

  //     const [openH, openM] = today.open_time.split(":").map(Number);
  //     const [closeH, closeM] = today.close_time.split(":").map(Number);
  //     const openDate = new Date();
  //     const closeDate = new Date();
  //     openDate.setHours(openH, openM, 0);
  //     closeDate.setHours(closeH, closeM, 0);

  //     if (now >= openDate && now <= closeDate) {
  //       const diff = closeDate.getTime() - now.getTime();
  //       const hours = Math.floor(diff / (1000 * 60 * 60));
  //       const minutes = Math.floor((diff / (1000 * 60)) % 60);
  //       setOpenStatus({ status: "مفتوح", remaining: `${hours}س ${minutes}د` });
  //     } else {
  //       setOpenStatus({ status: "مغلق", remaining: "" });
  //     }
  //   };

  //   updateStatus();
  //   const interval = setInterval(updateStatus, 60000);
  //   return () => clearInterval(interval);
  // }, [profile.workingHours]);

  const filteredItems =
    profile.menuItems?.filter((item) => item.category === selectedCategory) || [];

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/30">
      {/* Header */}
      <header className="bg-card shadow-sm py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl overflow-hidden">
            <img src={profile.logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{profile.title}</h1>
          <p className="text-muted-foreground mb-1">{profile.description}</p>
          {/* <p className={`text-sm font-semibold mb-3 ${openStatus.status === "مفتوح" ? "text-green-500" : "text-red-500"}`}>
            {openStatus.status} {openStatus.remaining && `- باقي ${openStatus.remaining}`}
          </p> */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{profile.address}</span>
          </div>
        </div>
      </header>

      {/* Category Pills */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center">
            {allCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <Card key={item.id} className="hover-scale overflow-hidden">
              <CardContent className="p-0">
                <div className="flex">
                  {/* Image */}
                  <div className="w-32 h-32 bg-muted flex items-center justify-center flex-shrink-0">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-5xl">🍽️</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{item.name}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>
                    </div>
                    <div className="mt-2 space-y-1">
                      {item.prices.map((price) => (
                        <div key={price.id} className="flex justify-between text-primary text-sm font-medium">
                          <span>{price.lable}</span>
                          <span>{price.amount} ج.م</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4 mt-12">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="flex justify-center gap-3">
            {profile.socials.map((social) => (
              <Button
                key={social.id}
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => {
                openSocialLinkHelper(social.icon, social.value);
                }}
              >
                {getSocialIconHelper(social.icon)}
              </Button>
            ))}
          </div>
          {/* <p className="text-xs text-muted-foreground">
            Menu – Free Template B (Minimalist Cards)
          </p> */}
        </div>
      </footer>
    </div>
  );
};

export default FreeTemplateB;

// أيقونات التواصل
// function getSocialIcon(iconName: string) {
//   switch (iconName) {
//     case "whatsapp":
//       return <MessageCircle className="w-4 h-4" />;
//     case "instagram":
//       return <Instagram className="w-4 h-4" />;
//     case "tiktok":
//       return <Globe className="w-4 h-4" />;
//     case "globe":
//       return <Globe className="w-4 h-4" />;
//     default:
//       return <Globe className="w-4 h-4" />;
//   }
// }


type Props = {
  model?: Profilexm;
};