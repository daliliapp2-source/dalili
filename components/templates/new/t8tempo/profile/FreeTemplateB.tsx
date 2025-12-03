// import { profileWithoutMenu } from "../mock";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Facebook, Mail } from "lucide-react";

// const FreeTemplateB = () => {
//   const profile = profileWithoutMenu;

//   const getSocialIcon = (iconName: string) => {
//     switch (iconName) {
//       case 'whatsapp':
//         return <Phone className="w-5 h-5" />;
//       case 'facebook':
//         return <Facebook className="w-5 h-5" />;
//       case 'instagram':
//         return <Mail className="w-5 h-5" />;
//       default:
//         return <Phone className="w-5 h-5" />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-6 px-4">
//       <div className="max-w-4xl mx-auto space-y-6">
//         {/* Header Card */}
//         <Card className="border-2 shadow-sm">
//           <CardHeader className="text-center pb-4">
//             <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
//               <span className="text-4xl font-bold text-white">
//                 {profile.title.charAt(0)}
//               </span>
//             </div>
//             <CardTitle className="text-2xl md:text-3xl mb-2">
//               {profile.title}
//             </CardTitle>
//             <div className="flex items-center justify-center gap-2 text-muted-foreground">
//               <MapPin className="w-4 h-4" />
//               <span className="text-sm">{profile.address}</span>
//             </div>
//           </CardHeader>
//         </Card>

//         {/* Description Card */}
//         <Card className="border-2 shadow-sm">
//           <CardHeader>
//             <CardTitle className="text-xl">نبذة عن الخدمات</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-base leading-relaxed text-slate-700">
//               {profile.description}
//             </p>
//           </CardContent>
//         </Card>

//         {/* Social Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {profile.socials.map((social) => (
//             <Card 
//               key={social.id}
//               className="border-2 hover:shadow-md transition-shadow cursor-pointer group"
//               onClick={() => window.open(social.value, '_blank')}
//             >
//               <CardContent className="p-6">
//                 <div className="flex items-center gap-4">
//                   <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
//                     {getSocialIcon(social.icon)}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-lg mb-1">{social.name}</h3>
//                     <p className="text-sm text-muted-foreground">{social.value}</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Action Card */}
//         <Card className="border-2 shadow-sm bg-gradient-to-r from-blue-50 to-purple-50">
//           <CardContent className="p-6 text-center">
//             <p className="text-sm text-slate-600 mb-4">
//               اضغط على أي وسيلة تواصل للتواصل مباشرة
//             </p>
//             <p className="text-xs text-slate-500">
//               Profile – Free Template B (Modular Simple)
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default FreeTemplateB;


"use client";

import Image from "next/image";
import { profileWithoutMenu } from "../mock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Facebook, Instagram, Youtube, Twitter, Linkedin, Send, MessageCircle } from "lucide-react";
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
//     case "whatsapp": return <MessageCircle className="w-5 h-5 text-green-600" />;
//     case "phone": return <Phone className="w-5 h-5 text-blue-600" />;
//     case "facebook": return <Facebook className="w-5 h-5 text-blue-700" />;
//     case "instagram": return <Instagram className="w-5 h-5 text-pink-600" />;
//     case "youtube": return <Youtube className="w-5 h-5 text-red-600" />;
//     case "twitter": return <Twitter className="w-5 h-5 text-sky-500" />;
//     case "tiktok": return <Send className="w-5 h-5 text-black" />;
//     case "linkedin": return <Linkedin className="w-5 h-5 text-blue-700" />;
//     default: return <Phone className="w-5 h-5" />;
//   }
// };

type Props = {
  model?: Profilexx;
};


const FreeTemplateProfileB = ({ model }: Props) => {
  const profile = model || profileWithoutMenu;

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100 py-6 px-4">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Header Card with Banner */}
        <Card className="border-2 shadow-sm relative overflow-hidden">
          <div className="relative w-full h-48 md:h-64">
            <Image
              src={profile.banner}
              alt="banner"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <div className="w-24 h-24 mb-4 rounded-2xl bg-white/20 flex items-center justify-center shadow-lg overflow-hidden">
                <Image
                  src={profile.logo}
                  alt={profile.title}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardTitle className="text-2xl md:text-3xl mb-2 drop-shadow-lg">{profile.title}</CardTitle>
              <div className="flex items-center gap-2 text-sm drop-shadow-lg">
                <MapPin className="w-4 h-4" />
                <span>{profile.address}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Description Card */}
        <Card className="border-2 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">نبذة عن الخدمات</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-slate-700">
              {profile.description}
            </p>
          </CardContent>
        </Card>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.socials.map((social) => (
            <Card 
              key={social.id}
              className="border-2 hover:shadow-md transition-shadow cursor-pointer group"
              onClick={() => {openSocialLinkHelper(social.icon,social.value);}}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {getSocialIconHelper(social.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1 truncate">{social.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">{social.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

    
      </div>
    </div>
  );
};

export default FreeTemplateProfileB;
