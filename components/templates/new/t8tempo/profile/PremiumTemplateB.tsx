// import { profileWithoutMenu } from "../mock";
// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Facebook, Sparkles } from "lucide-react";

// const PremiumTemplateB = () => {
//   const profile = profileWithoutMenu;

//   const getSocialIcon = (iconName: string) => {
//     switch (iconName) {
//       case 'whatsapp':
//         return <Phone className="w-5 h-5" />;
//       case 'facebook':
//         return <Facebook className="w-5 h-5" />;
//       default:
//         return <Phone className="w-5 h-5" />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-950 relative overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 -right-4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-20">
//         {/* Logo Section */}
//         <div className="text-center mb-12 animate-fade-in">
//           <div className="relative inline-block mb-6">
//             <div className="w-32 h-32 md:w-40 md:h-40 rounded-full glass-effect flex items-center justify-center neon-glow">
//               <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                 {profile.title.charAt(0)}
//               </span>
//             </div>
//             <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-cyan-400 animate-pulse" />
//           </div>
          
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
//             {profile.title}
//           </h1>
          
//           <div className="flex items-center justify-center gap-2 text-cyan-300">
//             <MapPin className="w-5 h-5" />
//             <span className="text-lg">{profile.address}</span>
//           </div>
//         </div>

//         {/* Glass Card Description */}
//         <div className="glass-effect rounded-3xl p-8 md:p-10 mb-8 animate-fade-in backdrop-blur-xl">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
//             <h2 className="text-2xl md:text-3xl font-bold text-white">
//               عن خدماتنا
//             </h2>
//           </div>
//           <p className="text-lg leading-relaxed text-slate-300">
//             {profile.description}
//           </p>
//         </div>

//         {/* Neon Social Cards */}
//         <div className="space-y-4 animate-fade-in">
//           <h3 className="text-2xl font-bold text-white text-center mb-6">
//             تواصل معنا
//           </h3>
          
//           {profile.socials.map((social, index) => (
//             <div
//               key={social.id}
//               className="glass-effect rounded-2xl p-6 hover:scale-[1.02] transition-all cursor-pointer group relative overflow-hidden"
//               onClick={() => window.open(social.value, '_blank')}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {/* Gradient on Hover */}
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
//               <div className="relative flex items-center gap-4">
//                 <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
//                   {getSocialIcon(social.icon)}
//                 </div>
                
//                 <div className="flex-1">
//                   <h4 className="text-xl font-semibold text-white mb-1">
//                     {social.name}
//                   </h4>
//                   <p className="text-cyan-300/80 text-sm">{social.value}</p>
//                 </div>
                
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <span className="text-white font-bold">→</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-16 text-slate-500">
//           <p className="text-sm glass-effect inline-block px-6 py-2 rounded-full">
//             Profile – Premium Template B (Dark×Neon)
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PremiumTemplateB;

"use client";

import { profileWithoutMenu } from "../mock";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Facebook, Sparkles, Instagram, Youtube, Twitter, Linkedin, Send } from "lucide-react";
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
//       return <Send className="w-5 h-5 text-green-500" />;
//     case "phone":
//       return <Phone className="w-5 h-5 text-blue-500" />;
//     case "facebook":
//       return <Facebook className="w-5 h-5 text-blue-700" />;
//     case "instagram":
//       return <Instagram className="w-5 h-5 text-pink-500" />;
//     case "youtube":
//       return <Youtube className="w-5 h-5 text-red-600" />;
//     case "twitter":
//       return <Twitter className="w-5 h-5 text-sky-500" />;
//     case "linkedin":
//       return <Linkedin className="w-5 h-5 text-blue-700" />;
//     case "tiktok":
//       return <Send className="w-5 h-5 text-black" />;
//     default:
//       return <Phone className="w-5 h-5" />;
//   }
// };




type Props = {
  model?: Profilexx;
};

const PremiumTemplatePB = ({ model }: Props) => {
  const profile = model || profileWithoutMenu;

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-12">
        {/* Logo Section */}
        <div className="text-center animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden glass-effect flex items-center justify-center neon-glow">
              <Image
                src={profile.logo}
                alt={profile.title}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-cyan-400 animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {profile.title}
          </h1>

          <div className="flex items-center justify-center gap-2 text-cyan-300">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{profile.address}</span>
          </div>
        </div>

        {/* Glass Card Description */}
        <div className="glass-effect rounded-3xl p-8 md:p-10 mb-8 animate-fade-in backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-linear-to-b from-cyan-400 to-purple-400 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              عن خدماتنا
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-slate-300">
            {profile.description}
          </p>
        </div>

        {/* Neon Social Cards */}
        <div className="space-y-4 animate-fade-in">
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            تواصل معنا
          </h3>

          {profile.socials.map((social, index) => (
            <div
              key={social.id}
              className="glass-effect rounded-2xl p-6 hover:scale-[1.02] transition-all cursor-pointer group relative overflow-hidden"
              onClick={() => openSocialLinkHelper(social.icon, social.value)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative flex items-center gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                  {getSocialIconHelper(social.icon)}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-xl font-semibold text-white mb-1 truncate">
                    {social.name}
                  </h4>
                  <p className="text-cyan-300/80 text-sm truncate">{social.value}</p>
                </div>

                <div className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {/* <div className="text-center mt-16 text-slate-500">
          <p className="text-sm glass-effect inline-block px-6 py-2 rounded-full">
            Profile – Premium Template B (Dark×Neon)
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default PremiumTemplatePB;






// "use client";

// import Image from "next/image";
// import { profileWithoutMenu } from "../mock";
// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Facebook, Instagram, Youtube, Twitter, Linkedin, ExternalLink, MessageCircle } from "lucide-react";

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
//     case "whatsapp": return <MessageCircle className="w-6 h-6 text-green-600" />;
//     case "phone": return <Phone className="w-6 h-6 text-blue-600" />;
//     case "facebook": return <Facebook className="w-6 h-6 text-blue-700" />;
//     case "instagram": return <Instagram className="w-6 h-6 text-pink-600" />;
//     case "youtube": return <Youtube className="w-6 h-6 text-red-600" />;
//     case "twitter": return <Twitter className="w-6 h-6 text-sky-500" />;
//     case "linkedin": return <Linkedin className="w-6 h-6 text-blue-700" />;
//     default: return <Phone className="w-6 h-6 text-gray-600" />;
//   }
// };

// const PremiumTemplateA = () => {
//   const profile = profileWithoutMenu;

//   return (
//     <div className="min-h-screen bg-slate-900">
//       {/* Hero Banner Section */}
//       <div className="relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 overflow-hidden">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 animate-fade-in">
//           {/* Logo */}
//           <div className="w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl border-4 border-white/50">
//             <span className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-amber-600 to-orange-600 bg-clip-text text-transparent">
//               {profile.title.charAt(0)}
//             </span>
//           </div>
//           {/* Title */}
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
//             {profile.title}
//           </h1>
//           {/* Address */}
//           <div className="flex items-center justify-center gap-2 text-white/90 text-lg">
//             <MapPin className="w-5 h-5" />
//             <span>{profile.address}</span>
//           </div>
//         </div>
//         {/* Decorative Gradient Overlay */}
//         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 space-y-12">
//         {/* Description */}
//         <div className="premium-card p-8 md:p-10 rounded-2xl bg-white shadow-lg animate-fade-in">
//           <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">نبذة عن خدماتنا</h2>
//           <p className="text-lg leading-relaxed text-slate-700">{profile.description}</p>
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
//                 onClick={() => window.open(formatSocialUrl(social.icon, social.value), "_blank")}
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
