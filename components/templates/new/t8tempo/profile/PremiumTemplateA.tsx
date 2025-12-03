// import { profileWithoutMenu } from "../mock";
// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Facebook, ExternalLink } from "lucide-react";

// const PremiumTemplateA = () => {
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
//     <div className="min-h-screen bg-slate-900">
//       {/* Hero Banner Section */}
//       <div className="relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 overflow-hidden">
//         <div className="absolute inset-0 bg-black/20"></div>
        
//         {/* Logo in Center */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="relative z-10 text-center animate-fade-in">
//             <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl border-4 border-white/50">
//               <span className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-amber-600 to-orange-600 bg-clip-text text-transparent">
//                 {profile.title.charAt(0)}
//               </span>
//             </div>
            
//             <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
//               {profile.title}
//             </h1>
            
//             <div className="flex items-center justify-center gap-2 text-white/90 text-lg">
//               <MapPin className="w-5 h-5" />
//               <span>{profile.address}</span>
//             </div>
//           </div>
//         </div>

//         {/* Decorative Gradient Overlay */}
//         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
//         {/* Description */}
//         <div className="premium-card p-8 md:p-10 rounded-2xl mb-8 animate-fade-in">
//           <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
//             نبذة عن خدماتنا
//           </h2>
//           <p className="text-lg leading-relaxed text-slate-700">
//             {profile.description}
//           </p>
//         </div>

//         {/* Social Bar */}
//         <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 shadow-xl animate-fade-in">
//           <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
//             تواصل معنا الآن
//           </h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {profile.socials.map((social) => (
//               <Button
//                 key={social.id}
//                 size="lg"
//                 className="h-16 bg-white hover:bg-amber-50 text-slate-900 text-lg font-semibold gap-3 shadow-lg hover:shadow-xl transition-all group border-2 border-transparent hover:border-amber-400"
//                 onClick={() => window.open(social.value, '_blank')}
//               >
//                 <div className="p-2 rounded-full bg-amber-100 group-hover:bg-amber-200 transition-colors">
//                   {getSocialIcon(social.icon)}
//                 </div>
//                 <span className="flex-1 text-right">{social.name}</span>
//                 <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
//               </Button>
//             ))}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-12 text-slate-500">
//           <p className="text-sm">Profile – Premium Template A</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PremiumTemplateA;

"use client";

import { profileWithoutMenu } from "../mock";
import { Button } from "@/components/ui/button";
import { MapPin, ExternalLink, Phone, Facebook, Instagram, Youtube, Twitter, Linkedin, Send } from "lucide-react";
import Image from "next/image";
import { Profilexx } from "./FreeTemplateA";
import { getSocialIconHelper, openSocialLinkHelper } from "../menu/helpers";

// ----------- FORMAT SOCIAL URLS -----------
// const formatSocialUrl = (icon: string, value: string) => {
//   value = value.trim();
//   if (icon === "phone") return `tel:${value}`;
//   if (icon === "whatsapp") return `https://wa.me/${value.replace(/\D/g, "")}`;
//   if (!value.startsWith("http")) return `https://${value}`;
//   return value;
// };

// // ----------- ICONS -----------
// const getSocialIcon = (iconName: string) => {
//   switch (iconName) {
//     case "whatsapp":
//       return <Send className="w-6 h-6 text-green-600" />;
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
//     case "tiktok":
//       return <Send className="w-6 h-6 text-black" />;
//     default:
//       return <Phone className="w-6 h-6" />;
//   }
// };



type Props = {
  model?: Profilexx;
};

const PremiumTemplatePA = ({ model }: Props) => {
  const profile = model || profileWithoutMenu;

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Banner */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <Image
          src={profile.banner}
          alt={profile.title}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/25"></div>

        {/* Logo + Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6">
            <Image
              src={profile.logo}
              alt={profile.title}
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-2">
            {profile.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/90 text-lg">
            <MapPin className="w-5 h-5" />
            <span>{profile.address}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 space-y-8">
        {/* Description */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            نبذة عن خدماتنا
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            {profile.description}
          </p>
        </div>

        {/* Social Links */}
        <div className="bg-linear-to-r from-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 shadow-xl animate-fade-in">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
            تواصل معنا الآن
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profile.socials.map((social) => (


              // <Button
              //   key={social.id}
              //   size="lg"
              //   className="h-16 bg-white hover:bg-amber-50 text-slate-900 text-lg font-semibold gap-3 shadow-lg hover:shadow-xl transition-all group border-2 border-transparent hover:border-amber-400"
              //   onClick={() =>{openSocialLinkHelper(social.icon, social.value);}}
              // >
              //   <div className="p-2 rounded-full bg-amber-100 group-hover:bg-amber-200 transition-colors">
              //     {getSocialIconHelper(social.icon)}
              //   </div>
              //  <div className="min-w-0">
              //    <span className="flex-1 text-right truncate">{social.name}</span>
              //   <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity truncate" />
              //  </div>
              // </Button>
<Button
  key={social.id}
  size="lg"
  className="flex justify-between items-center h-16 bg-white hover:bg-amber-50 text-slate-900 text-lg font-semibold gap-3 shadow-lg hover:shadow-xl transition-all group border-2 border-transparent hover:border-amber-400 overflow-hidden"
  onClick={() => openSocialLinkHelper(social.icon, social.value)}
>
  <div className="p-2 rounded-full bg-amber-100 group-hover:bg-amber-200 transition-colors flex-shrink-0">
    {getSocialIconHelper(social.icon)}
  </div>
  <div className="flex-1 flex justify-between items-center min-w-0">
    <span className="truncate text-right">{social.name}</span>
    <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
  </div>
</Button>

            ))}
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default PremiumTemplatePA;
