
"use client";

import { useState } from "react";
import { profileWithMenu, allCategories } from "../mock";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Instagram, Filter, MessageCircle } from "lucide-react";
import { Profilexm } from "./FreeTemplateA";
import { getSocialIconHelper, openSocialLinkHelper } from "./helpers";
type Props = {
  model?: Profilexm;
};
const PremiumTemplateB = ({ model }: Props) => {
  const profile = model || profileWithMenu;

const isMock = !model; // معناها: مفيش model مبعوت

const categories = isMock
  ? allCategories
  : Array.from(new Set(profile.menuItems?.map(item => item.category) || []));

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredItems = profile.menuItems?.filter(
    item => item.category === selectedCategory
  ) || [];

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Header with Banner */}
      <header
        className="relative h-64 w-full text-white flex items-center justify-start"
        style={{
          backgroundImage: `url(${profile.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center md:text-right md:mr-12 max-w-3xl px-4">
          <div className="w-24 h-24 mx-auto md:mx-0 mb-4 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-xl">
            <img src={profile.logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{profile.title}</h1>
          <p className="text-white-200 mb-2">{profile.description}</p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-white/90">
            <MapPin className="w-4 h-4" />
            <span>{profile.address}</span>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm shadow-md border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-3">
            <Filter className="w-5 h-5 text-amber-600" />
            <h2 className="font-semibold text-lg">الأقسام</h2>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {allCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-linear-to-r from-amber-600 to-orange-600 text-white"
                    : ""
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Card Menu Layout */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="hover-lift overflow-hidden border-2 hover:border-amber-400 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Image */}
                  <div className="sm:w-48 h-48 sm:h-auto bg-linear-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-7xl">🍽️</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <div className="inline-block px-3 py-1 bg-amber-800 text-amber-100 text-xs rounded-full mb-2">
                        {item.category}
                      </div>
                      {/* All Prices */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.prices.map((p) => (
                          <span
                            key={p.id}
                            className="px-2 py-1 bg-linear-to-r from-amber-900 to-orange-400 text-white text-xs rounded-md"
                          >
                            {p.lable}: {p.amount} ج.م
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-linear-to-r from-amber-900 to-orange-900 text-white py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-4">
            {profile.socials.map((social) => (
              <Button
                key={social.id}
                size="icon"
                className="rounded-full bg-white/10 hover:bg-white/20"
                onClick={() =>{openSocialLinkHelper(social.icon, social.value);}}
              >
               {getSocialIconHelper(social.icon)}
              </Button>
            ))}
          </div>
          {/* <p className="text-sm text-amber-200">
            Menu – Premium Template B (Card Menu)
          </p> */}
        </div>
      </footer>
    </div>
  );
};

export default PremiumTemplateB;
