// import { profileWithoutMenu } from "../mock";
// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Facebook, ExternalLink } from "lucide-react";

// const FreeTemplateD = () => {
//   const profile = profileWithoutMenu;

//   const getSocialIcon = (iconName: string) => {
//     switch (iconName) {
//       case 'whatsapp':
//         return <Phone className="w-6 h-6" />;
//       case 'facebook':
//         return <Facebook className="w-6 h-6" />;
//       default:
//         return <Phone className="w-6 h-6" />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
//       <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
//         {/* Timeline Flow Layout */}
//         <div className="space-y-8 relative">
//           {/* Vertical Line */}
//           <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>

//           {/* Logo & Title Section */}
//           <div className="relative animate-fade-in">
//             <div className="flex items-start gap-6 md:gap-8">
//               <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg flex-shrink-0 relative z-10">
//                 <span className="text-3xl md:text-4xl font-bold text-primary-foreground">
//                   {profile.title.charAt(0)}
//                 </span>
//               </div>
              
//               <div className="flex-1 bg-card rounded-2xl p-6 shadow-sm border border-border hover-scale">
//                 <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
//                   {profile.title}
//                 </h1>
//                 <div className="flex items-center gap-2 text-muted-foreground">
//                   <MapPin className="w-4 h-4" />
//                   <span>{profile.address}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Description Section */}
//           <div className="relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
//             <div className="flex items-start gap-6 md:gap-8">
//               <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 flex items-center justify-center relative z-10">
//                 <div className="w-4 h-4 rounded-full bg-primary shadow-lg"></div>
//               </div>
              
//               <div className="flex-1 bg-card rounded-2xl p-6 shadow-sm border border-border hover-scale">
//                 <h2 className="text-xl font-bold text-foreground mb-3">
//                   نبذة عن الخدمات
//                 </h2>
//                 <p className="text-base leading-relaxed text-muted-foreground">
//                   {profile.description}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Social Links Section */}
//           {profile.socials.map((social, index) => (
//             <div 
//               key={social.id}
//               className="relative animate-fade-in"
//               style={{ animationDelay: `${0.2 + index * 0.1}s` }}
//             >
//               <div className="flex items-start gap-6 md:gap-8">
//                 <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 flex items-center justify-center relative z-10">
//                   <div className="w-3 h-3 rounded-full bg-primary/50 shadow-md"></div>
//                 </div>
                
//                 <Button
//                   variant="outline"
//                   className="flex-1 h-auto p-6 justify-between group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-2xl"
//                   onClick={() => window.open(social.value, '_blank')}
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary-foreground/20">
//                       {getSocialIcon(social.icon)}
//                     </div>
//                     <div className="text-right">
//                       <div className="text-lg font-semibold mb-1">{social.name}</div>
//                       <div className="text-sm opacity-70">{social.value}</div>
//                     </div>
//                   </div>
//                   <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
//                 </Button>
//               </div>
//             </div>
//           ))}

//           {/* Footer */}
//           <div className="text-center pt-8">
//             <p className="text-sm text-muted-foreground">
//               Profile – Free Template D (Timeline Flow)
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FreeTemplateD;


"use client";

import Image from "next/image";
import { profileWithoutMenu } from "../mock";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Facebook, Instagram, Youtube, Twitter, Linkedin, Send, MessageCircle, ExternalLink } from "lucide-react";
import { Profilexx } from "./FreeTemplateA";
import { getSocialIconHelper, openSocialLinkHelper } from "../menu/helpers";

// --------- Helper functions ----------
// const formatSocialUrl = (icon: string, value: string) => {
//   value = value.trim();
//   if (icon === "phone") return `tel:${value}`;
//   if (icon === "whatsapp") {
//     const digits = value.replace(/\D/g, "");
//     return `https://wa.me/${digits}`;
//   }
//   if (!value.startsWith("http")) return `https://${value}`;
//   return value;
// };

// const getSocialIcon = (iconName: string) => {
//   switch (iconName) {
//     case "whatsapp": return <MessageCircle className="w-6 h-6 text-green-600" />;
//     case "phone": return <Phone className="w-6 h-6 text-blue-600" />;
//     case "facebook": return <Facebook className="w-6 h-6 text-blue-700" />;
//     case "instagram": return <Instagram className="w-6 h-6 text-pink-600" />;
//     case "youtube": return <Youtube className="w-6 h-6 text-red-600" />;
//     case "twitter": return <Twitter className="w-6 h-6 text-sky-500" />;
//     case "tiktok": return <Send className="w-6 h-6 text-black" />;
//     case "linkedin": return <Linkedin className="w-6 h-6 text-blue-700" />;
//     default: return <Phone className="w-6 h-6" />;
//   }
// };



type Props = {
  model?: Profilexx;
};

const FreeTemplateProfileD = ({ model }: Props) => {
  const profile = model || profileWithoutMenu;

  return (
    <div className="min-h-screen bg-linear-to-b from-background to-muted/20">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <div className="space-y-8 relative">

          {/* Vertical Line */}
          <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>

          {/* Logo & Title Section */}
          <div className="relative animate-fade-in">
            <div className="flex items-start gap-6 md:gap-8">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg shrink-0 relative z-10 overflow-hidden">
                <Image
                  src={profile.logo}
                  alt={profile.title}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="flex-1 bg-card rounded-2xl p-6 shadow-sm border border-border hover-scale">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {profile.title}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-start gap-6 md:gap-8">
              <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 flex items-center justify-center relative z-10">
                <div className="w-4 h-4 rounded-full bg-primary shadow-lg"></div>
              </div>
              
              <div className="flex-1 bg-card rounded-2xl p-6 shadow-sm border border-border hover-scale">
                <h2 className="text-xl font-bold text-foreground mb-3">
                  نبذة عن الخدمات
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {profile.description}
                </p>
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          {profile.socials.map((social, index) => (
            <div 
              key={social.id}
              className="relative animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-6 md:gap-8">
                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 flex items-center justify-center relative z-10">
                  <div className="w-3 h-3 rounded-full bg-primary/50 shadow-md"></div>
                </div>
                
                <Button
                  variant="outline"
                  className="flex-1 h-auto p-6 justify-between group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-2xl"
                  onClick={() =>{openSocialLinkHelper(social.icon, social.value);}}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary-foreground/20">
                      {getSocialIconHelper(social.icon)}
                    </div>
                    <div className="text-right min-w-0">
                      <div className="text-lg font-semibold mb-1 truncate">{social.name}</div>
                      <div className="text-sm opacity-70 truncate">{social.value}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default FreeTemplateProfileD;


// "use client";

// import Image from "next/image";
// import { profileWithoutMenu } from "../mock";
// import { Button } from "@/components/ui/button";
// import {
//   MapPin,
//   Phone,
//   Facebook,
//   Instagram,
//   Youtube,
//   Twitter,
//   Linkedin,
//   ExternalLink,
//   MessageCircle,
// } from "lucide-react";

// // ------------ HANDLE SOCIAL URLS -------------
// const formatSocialUrl = (icon: string, value: string) => {
//   value = value.trim();

//   if (icon === "phone") return `tel:${value}`;
//   if (icon === "whatsapp") {
//     const digits = value.replace(/\D/g, "");
//     return `https://wa.me/${digits}`;
//   }
//   if (!value.startsWith("http")) return `https://${value}`;
//   return value;
// };

// // ------------ ICONS -------------
// const getSocialIcon = (iconName: string) => {
//   switch (iconName) {
//     case "whatsapp":
//       return <MessageCircle className="w-6 h-6 text-green-600" />;
//     case "phone":
//       return <Phone className="w-6 h-6 text-blue-600" />;
//     case "facebook":
//       return <Facebook className="w-6 h-6 text-blue-700" />;
//     case "instagram":
//       return <Instagram className="w-6 h-6 text-pink-600" />;
//     case "youtube":
//       return <Youtube className="w-6 h-6 text-red-600" />;
//     case "twitter":
//       return <Twitter className="w-6 h-6 text-sky-500" />;
//     case "linkedin":
//       return <Linkedin className="w-6 h-6 text-blue-700" />;
//     default:
//       return <Phone className="w-6 h-6 text-gray-600" />;
//   }
// };

// const FreeTemplateD = () => {
//   const profile = profileWithoutMenu;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12 px-4 md:px-8">
//       <div className="max-w-3xl mx-auto space-y-12 relative">
//         {/* Timeline Flow Layout */}
//         {/* Header: Logo + Title */}
//         <div className="relative animate-fade-in flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
//           {/* Logo */}
//           <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 relative z-10 overflow-hidden">
//             <Image
//               src={profile.logo}
//               alt={profile.title}
//               width={112}
//               height={112}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           {/* Text Section */}
//           <div className="flex-1 bg-card rounded-2xl p-6 shadow-sm border border-border hover-scale text-center md:text-right">
//             <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
//               {profile.title}
//             </h1>
//             <div className="flex justify-center md:justify-start items-center gap-2 text-muted-foreground">
//               <MapPin className="w-4 h-4" />
//               <span>{profile.address}</span>
//             </div>
//           </div>
//         </div>

//         {/* Description Section */}
//         <div className="relative animate-fade-in flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
//           {/* Decorative Dot */}
//           <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary shadow-lg flex-shrink-0"></div>

//           <div className="flex-1 bg-card rounded-2xl p-6 shadow-sm border border-border hover-scale text-center md:text-right">
//             <h2 className="text-xl font-bold text-foreground mb-3">
//               نبذة عن الخدمات
//             </h2>
//             <p className="text-base leading-relaxed text-muted-foreground">
//               {profile.description}
//             </p>
//           </div>
//         </div>

//         {/* Social Links */}
//         <div className="space-y-4">
//           {profile.socials.map((social, index) => (
//             <div
//               key={social.id}
//               className="relative animate-fade-in flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8"
//               style={{ animationDelay: `${0.1 + index * 0.1}s` }}
//             >
//               {/* Decorative Dot */}
//               <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary/50 shadow-md flex-shrink-0"></div>

//               {/* Button */}
//               <Button
//                 variant="outline"
//                 className="flex-1 h-auto p-5 justify-between group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-2xl"
//                 onClick={() =>
//                   window.open(formatSocialUrl(social.icon, social.value), "_blank")
//                 }
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary-foreground/20">
//                     {getSocialIcon(social.icon)}
//                   </div>
//                   <div className="text-right">
//                     <div className="text-lg font-semibold mb-1">{social.name}</div>
//                     <div className="text-sm opacity-70">{social.value}</div>
//                   </div>
//                 </div>
//                 <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
//               </Button>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="text-center pt-8">
//           <p className="text-sm text-muted-foreground">
//             Profile – Free Template D (Timeline Flow Responsive)
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FreeTemplateD;
