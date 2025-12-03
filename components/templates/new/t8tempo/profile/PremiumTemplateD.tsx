// import { profileWithoutMenu } from "../mock";
// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Facebook, Zap } from "lucide-react";

// const PremiumTemplateD = () => {
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
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4" style={{ perspective: '1000px' }}>
//       <div className="max-w-6xl mx-auto">
//         {/* Hero Section with 3D Effect */}
//         <div className="text-center mb-16 animate-fade-in" style={{ transformStyle: 'preserve-3d' }}>
//           <div className="relative inline-block mb-8">
//             <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 p-1 shadow-2xl transform hover:scale-105 transition-transform" style={{ transform: 'rotateX(5deg) rotateY(-5deg)' }}>
//               <div className="w-full h-full rounded-3xl bg-slate-900 flex items-center justify-center">
//                 <span className="text-6xl font-bold bg-gradient-to-br from-amber-400 to-pink-500 bg-clip-text text-transparent">
//                   {profile.title.charAt(0)}
//                 </span>
//               </div>
//             </div>
//             <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
//           </div>
          
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
//             {profile.title}
//           </h1>
          
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
//             <MapPin className="w-5 h-5" />
//             <span className="text-lg">{profile.address}</span>
//           </div>
//         </div>

//         {/* Main Grid with 3D Cards */}
//         <div className="grid md:grid-cols-3 gap-6 mb-8">
//           {/* Description Card */}
//           <div className="md:col-span-2 group animate-fade-in" style={{ animationDelay: '0.1s' }}>
//             <div 
//               className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all shadow-2xl transform hover:-translate-y-2"
//               style={{ transformStyle: 'preserve-3d', transform: 'rotateX(2deg)' }}
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <Zap className="w-8 h-8 text-amber-400" />
//                 <h2 className="text-3xl font-bold text-white">عن خدماتنا</h2>
//               </div>
//               <p className="text-xl leading-relaxed text-white/90">
//                 {profile.description}
//               </p>
//             </div>
//           </div>

//           {/* Stats Card */}
//           <div className="group animate-fade-in" style={{ animationDelay: '0.2s' }}>
//             <div 
//               className="h-full bg-gradient-to-br from-amber-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-8 border border-amber-400/30 shadow-2xl transform hover:-translate-y-2 transition-all"
//               style={{ transformStyle: 'preserve-3d', transform: 'rotateX(2deg)' }}
//             >
//               <div className="text-center space-y-4">
//                 <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-400 to-pink-500 flex items-center justify-center shadow-lg">
//                   <Zap className="w-8 h-8 text-white" />
//                 </div>
//                 <div>
//                   <div className="text-5xl font-bold text-white mb-2">100%</div>
//                   <div className="text-white/80">جودة عالية</div>
//                 </div>
//                 <div className="pt-4 border-t border-white/20">
//                   <div className="text-3xl font-bold text-amber-400 mb-1">{profile.socials.length}+</div>
//                   <div className="text-white/80 text-sm">وسائل تواصل</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Social Cards */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {profile.socials.map((social, index) => (
//             <div
//               key={social.id}
//               className="group animate-fade-in"
//               style={{ animationDelay: `${0.3 + index * 0.1}s` }}
//             >
//               <div
//                 className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-amber-400/50 cursor-pointer transform hover:-translate-y-2 transition-all shadow-xl hover:shadow-2xl"
//                 style={{ transformStyle: 'preserve-3d', transform: 'rotateX(1deg)' }}
//                 onClick={() => window.open(social.value, '_blank')}
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-400/20 to-pink-500/20 group-hover:from-amber-400/30 group-hover:to-pink-500/30 transition-all group-hover:scale-110 transform">
//                     {getSocialIcon(social.icon)}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-white mb-1">
//                       {social.name}
//                     </h3>
//                     <p className="text-white/70">{social.value}</p>
//                   </div>
//                   <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center group-hover:bg-amber-400 transition-all">
//                     <span className="text-white font-bold group-hover:translate-x-1 transition-transform inline-block">→</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-12">
//           <p className="text-sm text-white/50 bg-white/5 inline-block px-6 py-3 rounded-full backdrop-blur-sm">
//             Profile – Premium Template D (3D Cards)
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PremiumTemplateD;


// "use client";

// import { profileWithoutMenu } from "../mock";
// import { MapPin, Zap, Phone, Facebook, Instagram, Youtube, Twitter, Linkedin, Send } from "lucide-react";
// import Image from "next/image";

// // ----------- FORMAT SOCIAL URLS -----------
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
//     default:
//       return <Phone className="w-5 h-5" />;
//   }
// };

// // ----------- SOCIAL BG GRADIENTS -----------
// const socialBgGradient = (icon: string) => {
//   switch (icon) {
//     case "whatsapp":
//       return "from-green-400 to-green-600";
//     case "phone":
//       return "from-blue-400 to-blue-600";
//     case "facebook":
//       return "from-blue-600 to-blue-800";
//     case "instagram":
//       return "from-pink-400 via-purple-500 to-yellow-400";
//     case "youtube":
//       return "from-red-500 to-red-700";
//     case "twitter":
//       return "from-sky-400 to-sky-600";
//     case "linkedin":
//       return "from-blue-500 to-blue-700";
//     default:
//       return "from-gray-400 to-gray-500";
//   }
// };

// const PremiumTemplateD = () => {
//   const profile = profileWithoutMenu;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4" style={{ perspective: '1000px' }}>
//       <div className="max-w-6xl mx-auto">
//         {/* Hero Section with 3D Effect */}
//         <div className="text-center mb-16 animate-fade-in" style={{ transformStyle: 'preserve-3d' }}>
//           <div className="relative inline-block mb-8">
//             <div className="w-40 h-40 rounded-3xl p-1 shadow-2xl transform hover:scale-105 transition-transform bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600" style={{ transform: 'rotateX(5deg) rotateY(-5deg)' }}>
//               <div className="w-full h-full rounded-3xl flex items-center justify-center bg-white/10 overflow-hidden">
//                 {profile.logo ? (
//                   <Image
//                     src={profile.logo}
//                     alt={profile.title}
//                     width={160}
//                     height={160}
//                     className="object-cover w-full h-full rounded-3xl"
//                   />
//                 ) : (
//                   <span className="text-6xl font-bold bg-gradient-to-br from-amber-400 to-pink-500 bg-clip-text text-transparent">
//                     {profile.title.charAt(0)}
//                   </span>
//                 )}
//               </div>
//             </div>
//             <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
//             {profile.title}
//           </h1>

//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
//             <MapPin className="w-5 h-5" />
//             <span className="text-lg">{profile.address}</span>
//           </div>
//         </div>

//         {/* Main Grid with 3D Cards */}
//         <div className="grid md:grid-cols-3 gap-6 mb-8">
//           {/* Description Card */}
//           <div className="md:col-span-2 group animate-fade-in" style={{ animationDelay: '0.1s' }}>
//             <div className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all shadow-2xl transform hover:-translate-y-2" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(2deg)' }}>
//               <div className="flex items-center gap-3 mb-6">
//                 <Zap className="w-8 h-8 text-amber-400" />
//                 <h2 className="text-3xl font-bold text-white">عن خدماتنا</h2>
//               </div>
//               <p className="text-xl leading-relaxed text-white/90">
//                 {profile.description}
//               </p>
//             </div>
//           </div>

//           {/* Stats Card */}
//           <div className="group animate-fade-in" style={{ animationDelay: '0.2s' }}>
//             <div className="h-full bg-gradient-to-br from-amber-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-8 border border-amber-400/30 shadow-2xl transform hover:-translate-y-2 transition-all" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(2deg)' }}>
//               <div className="text-center space-y-4">
//                 <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-400 to-pink-500 flex items-center justify-center shadow-lg">
//                   <Zap className="w-8 h-8 text-white" />
//                 </div>
//                 <div>
//                   <div className="text-5xl font-bold text-white mb-2">100%</div>
//                   <div className="text-white/80">جودة عالية</div>
//                 </div>
//                 <div className="pt-4 border-t border-white/20">
//                   <div className="text-3xl font-bold text-amber-400 mb-1">{profile.socials.length}+</div>
//                   <div className="text-white/80 text-sm">وسائل تواصل</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Social Cards */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {profile.socials.map((social, index) => (
//             <div key={social.id} className="group animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
//               <div
//                 className={`bg-gradient-to-br ${socialBgGradient(social.icon)}/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 cursor-pointer transform hover:-translate-y-2 transition-all shadow-xl hover:shadow-2xl`}
//                 style={{ transformStyle: 'preserve-3d', transform: 'rotateX(1deg)' }}
//                 onClick={() => window.open(formatSocialUrl(social.icon, social.value), '_blank')}
//               >
//                 <div className="flex items-center gap-4">
//                   <div className={`p-4 rounded-2xl bg-gradient-to-br ${socialBgGradient(social.icon)}/30 group-hover:from-green-500 group-hover:to-green-700 transition-all group-hover:scale-110 transform`}>
//                     {getSocialIcon(social.icon)}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-white mb-1">
//                       {social.name}
//                     </h3>
//                     <p className="text-white/70">{social.value}</p>
//                   </div>
//                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
//                     <span className="text-white font-bold group-hover:translate-x-1 transition-transform inline-block">→</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-12">
//           <p className="text-sm text-white/50 bg-white/5 inline-block px-6 py-3 rounded-full backdrop-blur-sm">
//             Profile – Premium Template D (3D Cards)
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PremiumTemplateD;


"use client";

import { profileWithoutMenu } from "../mock";
import { MapPin, Zap, Phone, Facebook, Instagram, Youtube, Twitter, Linkedin, Send, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Profilexx } from "./FreeTemplateA";
import { getSocialIconHelper, openSocialLinkHelper } from "../menu/helpers";


type Props = {
  model?: Profilexx;
};



// const PremiumTemplatePD = ({ model }: Props) => {
//   const profile = model || profileWithoutMenu;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4" style={{ perspective: '1000px' }}>
//       <div className="max-w-6xl mx-auto">
//         {/* Hero Section with 3D Effect */}
//         <div className="text-center mb-16 animate-fade-in" style={{ transformStyle: 'preserve-3d' }}>
//           <div className="relative inline-block mb-8">
//             <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 p-1 shadow-2xl transform hover:scale-105 transition-transform" style={{ transform: 'rotateX(5deg) rotateY(-5deg)' }}>
//               <div className="w-full h-full rounded-3xl flex items-center justify-center bg-slate-900 overflow-hidden">
//                 {profile.logo ? (
//                   <Image
//                     src={profile.logo}
//                     alt={profile.title}
//                     width={160}
//                     height={160}
//                     className="object-cover w-full h-full rounded-3xl"
//                   />
//                 ) : (
//                   <span className="text-6xl font-bold bg-gradient-to-br from-amber-400 to-pink-500 bg-clip-text text-transparent">
//                     {profile.title.charAt(0)}
//                   </span>
//                 )}
//               </div>
//             </div>
//             <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
//             {profile.title}
//           </h1>

//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
//             <MapPin className="w-5 h-5" />
//             <span className="text-lg">{profile.address}</span>
//           </div>
//         </div>

//         {/* Main Grid with 3D Cards */}
//         <div className="grid md:grid-cols-3 gap-6 mb-8">
//           {/* Description Card */}
//           <div className="md:col-span-2 group animate-fade-in" style={{ animationDelay: '0.1s' }}>
//             <div className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all shadow-2xl transform hover:-translate-y-2" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(2deg)' }}>
//               <div className="flex items-center gap-3 mb-6">
//                 <Zap className="w-8 h-8 text-amber-400" />
//                 <h2 className="text-3xl font-bold text-white">عن خدماتنا</h2>
//               </div>
//               <p className="text-xl leading-relaxed text-white/90">
//                 {profile.description}
//               </p>
//             </div>
//           </div>

//           {/* Stats Card */}
//           <div className="group animate-fade-in" style={{ animationDelay: '0.2s' }}>
//             <div className="h-full bg-gradient-to-br from-amber-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-8 border border-amber-400/30 shadow-2xl transform hover:-translate-y-2 transition-all" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(2deg)' }}>
//               <div className="text-center space-y-4">
//                 <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-400 to-pink-500 flex items-center justify-center shadow-lg">
//                   <Zap className="w-8 h-8 text-white" />
//                 </div>
//                 <div>
//                   <div className="text-5xl font-bold text-white mb-2">100%</div>
//                   <div className="text-white/80">جودة عالية</div>
//                 </div>
//                 <div className="pt-4 border-t border-white/20">
//                   <div className="text-3xl font-bold text-amber-400 mb-1">{profile.socials.length}+</div>
//                   <div className="text-white/80 text-sm">وسائل تواصل</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Social Cards */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {profile.socials.map((social, index) => (
//             <div key={social.id} className="group animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
//               <div
//                 className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-amber-400/50 cursor-pointer transform hover:-translate-y-2 transition-all shadow-xl hover:shadow-2xl"
//                 style={{ transformStyle: 'preserve-3d', transform: 'rotateX(1deg)' }}
//                 onClick={() => openSocialLinkHelper(social.icon, social.value)}
//               >
//                 <div className="flex items-center gap-4">
//                   <div className="p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/20 group-hover:scale-110 transform transition-all">
//                     {getSocialIconHelper(social.icon)}
//                   </div>
//                   {/* <div className="flex-1">
//                     <h3 className="text-xl font-bold text-white mb-1">
//                       {social.name}
//                     </h3>
//                     <p className="text-white/70">{social.value}</p>
//                   </div> */}
//                   <div className="flex-1 min-w-0">
//   <h3 className="text-xl font-bold text-white mb-1 truncate" title={social.name}>
//     {social.name}
//   </h3>
//   <p className="text-white/70 truncate" title={social.value}>
//     {social.value}
//   </p>
// </div>

//                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
//                     <span className="text-white font-bold group-hover:translate-x-1 transition-transform inline-block">→</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         {/* <div className="text-center mt-12">
//           <p className="text-sm text-white/50 bg-white/5 inline-block px-6 py-3 rounded-full backdrop-blur-sm">
//             Profile – Premium Template D (3D Cards)
//           </p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default PremiumTemplatePD;


const PremiumTemplatePD = ({ model }: Props) => {
  const profile = model || profileWithoutMenu;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4" style={{ perspective: '1000px' }}>
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative inline-block mb-8">
            <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 p-1 shadow-2xl transform hover:scale-105 transition-transform md:rotate-x-5 md:rotate-y--5">
              <div className="w-full h-full rounded-3xl flex items-center justify-center bg-slate-900 overflow-hidden">
                {profile.logo ? (
                  <Image
                    src={profile.logo}
                    alt={profile.title}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full rounded-3xl"
                  />
                ) : (
                  <span className="text-6xl font-bold bg-gradient-to-br from-amber-400 to-pink-500 bg-clip-text text-transparent">
                    {profile.title.charAt(0)}
                  </span>
                )}
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">{profile.title}</h1>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{profile.address}</span>
          </div>
        </div>

        {/* Main Grid with 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Description Card */}
          <div className="md:col-span-2 group animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="h-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 hover:border-white/40 transition-all shadow-2xl transform hover:-translate-y-2 md:rotate-x-2">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-amber-400" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">عن خدماتنا</h2>
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-white/90">{profile.description}</p>
            </div>
          </div>

          {/* Stats Card */}
          <div className="group animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="h-auto bg-gradient-to-br from-amber-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-amber-400/30 shadow-2xl transform hover:-translate-y-2 md:rotate-x-2 transition-all">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-400 to-pink-500 flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-1">100%</div>
                  <div className="text-white/80">جودة عالية</div>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">{profile.socials.length}+</div>
                  <div className="text-white/80 text-sm">وسائل تواصل</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.socials.map((social, index) => (
            <div key={social.id} className="group animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <div
                className="h-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 md:p-6 border border-white/20 hover:border-amber-400/50 cursor-pointer transform hover:-translate-y-2 transition-all shadow-xl hover:shadow-2xl overflow-hidden"
                onClick={() => openSocialLinkHelper(social.icon, social.value)}
              >
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className="p-3 md:p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/20 group-hover:scale-110 transform transition-all flex-shrink-0">
                    {getSocialIconHelper(social.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 truncate" title={social.name}>
                      {social.name}
                    </h3>
                    <p className="text-sm md:text-base text-white/70 truncate" title={social.value}>
                      {social.value}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all flex-shrink-0">
                    <ArrowRight className="text-white w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Tailwind Keyframes */}
      <style jsx>{`
        @keyframes fade-in { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.8s ease forwards; }
      `}</style>
    </div>
  );
};

export default PremiumTemplatePD;