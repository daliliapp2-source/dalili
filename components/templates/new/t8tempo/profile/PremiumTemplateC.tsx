// import { profileWithoutMenu } from "../mock";
// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Facebook, Sparkles, ArrowRight } from "lucide-react";

// const PremiumTemplateC = () => {
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
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Animated Gradient Background */}
//       <div className="fixed inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 animate-gradient-shift"></div>
//       <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
//       {/* Floating Orbs */}
//       <div className="fixed top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="fixed bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

//       <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
//         <div className="max-w-4xl w-full space-y-8 animate-fade-in">
//           {/* Header Card */}
//           <div className="glass-effect rounded-3xl p-8 md:p-12 text-center backdrop-blur-xl border-2 border-white/20 shadow-2xl">
//             <div className="relative inline-block mb-6">
//               <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-white/90 flex items-center justify-center shadow-2xl transform hover:rotate-6 transition-transform">
//                 <span className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
//                   {profile.title.charAt(0)}
//                 </span>
//               </div>
//               <Sparkles className="absolute -top-3 -right-3 w-10 h-10 text-yellow-300 animate-pulse" />
//             </div>
            
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
//               {profile.title}
//             </h1>
            
//             <div className="flex items-center justify-center gap-2 text-white/90 text-lg backdrop-blur-sm bg-white/10 rounded-full px-6 py-3 inline-flex">
//               <MapPin className="w-5 h-5" />
//               <span>{profile.address}</span>
//             </div>
//           </div>

//           {/* Description Card */}
//           <div className="glass-effect rounded-3xl p-8 md:p-10 backdrop-blur-xl border-2 border-white/20 shadow-xl">
//             <div className="flex items-start gap-4 mb-4">
//               <div className="w-2 h-12 bg-gradient-to-b from-yellow-300 to-pink-300 rounded-full"></div>
//               <h2 className="text-3xl font-bold text-white">
//                 عن خدماتنا
//               </h2>
//             </div>
//             <p className="text-xl leading-relaxed text-white/90">
//               {profile.description}
//             </p>
//           </div>

//           {/* Social Cards Grid */}
//           <div className="grid md:grid-cols-2 gap-4">
//             {profile.socials.map((social, index) => (
//               <div
//                 key={social.id}
//                 className="glass-effect rounded-2xl p-6 backdrop-blur-xl border-2 border-white/20 hover:border-white/40 transition-all cursor-pointer group shadow-xl hover:shadow-2xl hover:-translate-y-1 animate-fade-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onClick={() => window.open(social.value, '_blank')}
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <div className="p-4 rounded-2xl bg-white/20 group-hover:bg-white/30 transition-all group-hover:scale-110 transform">
//                       {getSocialIcon(social.icon)}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-white mb-1">
//                         {social.name}
//                       </h3>
//                       <p className="text-white/80 text-sm">{social.value}</p>
//                     </div>
//                   </div>
//                   <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Footer Badge */}
//           <div className="text-center">
//             <div className="glass-effect inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl border border-white/20">
//               <Sparkles className="w-4 h-4 text-yellow-300" />
//               <span className="text-sm text-white/90">
//                 Profile – Premium Template C (Animated Gradient)
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PremiumTemplateC;


// "use client";

// import { profileWithoutMenu } from "../mock";
// import { MapPin, Sparkles, ArrowRight, Phone, Facebook, Instagram, Youtube, Twitter, Linkedin, Send } from "lucide-react";
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

// const PremiumTemplateC = () => {
//   const profile = profileWithoutMenu;

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Animated Gradient Background */}
//       <div className="fixed inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 animate-gradient-shift"></div>
//       <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>

//       {/* Floating Orbs */}
//       <div className="fixed top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="fixed bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

//       <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
//         <div className="max-w-4xl w-full space-y-8 animate-fade-in">
//           {/* Header Card */}
//           <div className="glass-effect rounded-3xl p-8 md:p-12 text-center backdrop-blur-xl border-2 border-white/20 shadow-2xl">
//             <div className="relative inline-block mb-6">
//               <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden bg-white/90 flex items-center justify-center shadow-2xl transform hover:rotate-6 transition-transform">
//                 <Image
//                   src={profile.logo}
//                   alt={profile.title}
//                   width={160}
//                   height={160}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//               <Sparkles className="absolute -top-3 -right-3 w-10 h-10 text-yellow-300 animate-pulse" />
//             </div>

//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
//               {profile.title}
//             </h1>

//             <div className="flex items-center justify-center gap-2 text-white/90 text-lg backdrop-blur-sm bg-white/10 rounded-full px-6 py-3 inline-flex">
//               <MapPin className="w-5 h-5" />
//               <span>{profile.address}</span>
//             </div>
//           </div>

//           {/* Description Card */}
//           <div className="glass-effect rounded-3xl p-8 md:p-10 backdrop-blur-xl border-2 border-white/20 shadow-xl">
//             <div className="flex items-start gap-4 mb-4">
//               <div className="w-2 h-12 bg-gradient-to-b from-yellow-300 to-pink-300 rounded-full"></div>
//               <h2 className="text-3xl font-bold text-white">
//                 عن خدماتنا
//               </h2>
//             </div>
//             <p className="text-xl leading-relaxed text-white/90">
//               {profile.description}
//             </p>
//           </div>

//           {/* Social Cards Grid */}
//           <div className="grid md:grid-cols-2 gap-4">
//             {profile.socials.map((social, index) => (
//               <div
//                 key={social.id}
//                 className="glass-effect rounded-2xl p-6 backdrop-blur-xl border-2 border-white/20 hover:border-white/40 transition-all cursor-pointer group shadow-xl hover:shadow-2xl hover:-translate-y-1 animate-fade-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onClick={() => window.open(formatSocialUrl(social.icon, social.value), '_blank')}
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <div className="p-4 rounded-2xl bg-white/20 group-hover:bg-white/30 transition-all group-hover:scale-110 transform">
//                       {getSocialIcon(social.icon)}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-white mb-1">
//                         {social.name}
//                       </h3>
//                       <p className="text-white/80 text-sm">{social.value}</p>
//                     </div>
//                   </div>
//                   <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Footer Badge */}
//           <div className="text-center">
//             <div className="glass-effect inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl border border-white/20">
//               <Sparkles className="w-4 h-4 text-yellow-300" />
//               <span className="text-sm text-white/90">
//                 Profile – Premium Template C (Animated Gradient)
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PremiumTemplateC;



// "use client";

// import { profileWithoutMenu } from "../mock";
// import { MapPin, Sparkles, ArrowRight, Phone, Facebook, Instagram, Youtube, Twitter, Linkedin, Send } from "lucide-react";
// import Image from "next/image";

// const formatSocialUrl = (icon: string, value: string) => {
//   value = value.trim();
//   if (icon === "phone") return `tel:${value}`;
//   if (icon === "whatsapp") return `https://wa.me/${value.replace(/\D/g, "")}`;
//   if (!value.startsWith("http")) return `https://${value}`;
//   return value;
// };

// const getSocialIcon = (iconName: string) => {
//   switch (iconName) {
//     case "whatsapp": return <Send className="w-5 h-5 text-green-500" />;
//     case "phone": return <Phone className="w-5 h-5 text-blue-500" />;
//     case "facebook": return <Facebook className="w-5 h-5 text-blue-700" />;
//     case "instagram": return <Instagram className="w-5 h-5 text-pink-500" />;
//     case "youtube": return <Youtube className="w-5 h-5 text-red-600" />;
//     case "twitter": return <Twitter className="w-5 h-5 text-sky-500" />;
//     case "linkedin": return <Linkedin className="w-5 h-5 text-blue-700" />;
//     default: return <Phone className="w-5 h-5" />;
//   }
// };

// const PremiumTemplateC = () => {
//   const profile = profileWithoutMenu;

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Animated Gradient Background */}
//       <div className="fixed inset-0 bg-linear-to-br from-violet-500 via-fuchsia-500 to-pink-500 animate-gradient-shift"></div>
//       <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>

//       {/* Floating Orbs */}
//       <div className="fixed top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="fixed bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

//       <div className="relative z-10 min-h-screen flex flex-col items-center justify-start p-4 md:p-8">
//         {/* Hero / Logo Banner */}
//         <div className="relative w-full max-w-4xl flex flex-col items-center text-center mt-12 md:mt-20 animate-fade-in">
//           <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
//             <Image
//               src={profile.logo}
//               alt={profile.title}
//               width={192}
//               height={192}
//               className="object-cover w-full h-full"
//             />
//           </div>
//           <Sparkles className="absolute -top-3 -right-3 w-10 h-10 text-yellow-300 animate-pulse" />

//           <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 drop-shadow-lg">{profile.title}</h1>
//           <div className="flex items-center justify-center gap-2 text-white/90 text-lg mt-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
//             <MapPin className="w-5 h-5" />
//             <span>{profile.address}</span>
//           </div>
//         </div>

//         {/* Description Card */}
//         <div className="glass-effect rounded-3xl p-8 md:p-10 mt-12 backdrop-blur-xl border-2 border-white/20 shadow-xl max-w-4xl animate-fade-in">
//           <div className="flex items-start gap-4 mb-4">
//             <div className="w-2 h-12 bg-gradient-to-b from-yellow-300 to-pink-300 rounded-full"></div>
//             <h2 className="text-3xl font-bold text-white">عن خدماتنا</h2>
//           </div>
//           <p className="text-xl leading-relaxed text-white/90">{profile.description}</p>
//         </div>

//         {/* Social Cards Grid */}
//         <div className="grid md:grid-cols-2 gap-4 mt-8 max-w-4xl w-full animate-fade-in">
//           {profile.socials.map((social, index) => (
//             <div
//               key={social.id}
//               className="glass-effect rounded-2xl p-6 backdrop-blur-xl border-2 border-white/20 hover:border-white/40 transition-all cursor-pointer group shadow-xl hover:shadow-2xl hover:-translate-y-1"
//               style={{ animationDelay: `${index * 0.1}s` }}
//               onClick={() => window.open(formatSocialUrl(social.icon, social.value), '_blank')}
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-4">
//                   <div className="p-4 rounded-2xl bg-white/20 group-hover:bg-white/30 transition-all group-hover:scale-110 transform">
//                     {getSocialIcon(social.icon)}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-1">{social.name}</h3>
//                     <p className="text-white/80 text-sm">{social.value}</p>
//                   </div>
//                 </div>
//                 <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer Badge */}
//         <div className="text-center mt-16">
//           <div className="glass-effect inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl border border-white/20">
//             <Sparkles className="w-4 h-4 text-yellow-300" />
//             <span className="text-sm text-white/90">Profile – Premium Template C (Banner Logo)</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PremiumTemplateC;



// "use client";

// import { profileWithoutMenu } from "../mock";
// import { MapPin, Sparkles, ArrowRight, Phone, Facebook, Instagram } from "lucide-react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// const getSocialIcon = (iconName: string) => {
//   switch (iconName) {
//     case "whatsapp": return <Phone className="w-5 h-5 text-green-500" />;
//     case "facebook": return <Facebook className="w-5 h-5 text-blue-700" />;
//     case "instagram": return <Instagram className="w-5 h-5 text-pink-500" />;
//     default: return <Phone className="w-5 h-5" />;
//   }
// };

// const PremiumTemplateC = () => {
//   const profile = profileWithoutMenu;

//   return (
//     <div className="min-h-screen relative overflow-hidden bg-slate-900">
//       {/* Hero Banner */}
//       <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
//         <Image
//           src={profile.banner || "/placeholder-banner.jpg"}
//           alt="Banner"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>

//       {/* Logo Card */}
//       <div className="relative max-w-4xl mx-auto -mt-20 md:-mt-32 px-4">
//         <div className="glass-effect bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 text-center">
//           {/* Logo */}
//           <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-white/30">
//             <Image
//               src={profile.logo || "/placeholder-logo.png"}
//               alt={profile.title}
//               fill
//               className="object-cover w-full h-full"
//             />
//             <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-300 animate-pulse" />
//           </div>

//           {/* Title */}
//           <h1 className="text-4xl md:text-6xl font-bold text-white mt-4">{profile.title}</h1>

//           {/* Address */}
//           <div className="flex items-center justify-center gap-2 mt-2 text-white/90 text-lg bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full inline-flex">
//             <MapPin className="w-5 h-5" />
//             <span>{profile.address}</span>
//           </div>

//           {/* Description */}
//           <p className="text-white/90 mt-6 text-lg leading-relaxed">{profile.description}</p>

//           {/* Socials */}
//           <div className="grid md:grid-cols-2 gap-4 mt-8">
//             {profile.socials.map((social, index) => (
//               <Button
//                 key={social.id}
//                 variant="outline"
//                 className="flex items-center justify-between p-4 rounded-2xl glass-effect border border-white/20 text-white hover:bg-white/10 transition-all"
//                 onClick={() => window.open(social.value, "_blank")}
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 rounded-lg bg-white/20">{getSocialIcon(social.icon)}</div>
//                   <span className="font-semibold">{social.name}</span>
//                 </div>
//                 <ArrowRight className="w-5 h-5 text-white" />
//               </Button>
//             ))}
//           </div>

//           {/* Footer */}
//           <div className="mt-8 text-sm text-white/70">Profile – Premium Template C</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PremiumTemplateC;




// "use client";

// import { profileWithoutMenu } from "../mock";
// import { MapPin, Sparkles, ArrowRight, Phone, Facebook, Instagram } from "lucide-react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// const getSocialIcon = (iconName: string) => {
//   switch (iconName) {
//     case "whatsapp": return <Phone className="w-5 h-5 text-white" />;
//     case "facebook": return <Facebook className="w-5 h-5 text-white" />;
//     case "instagram": return <Instagram className="w-5 h-5 text-white" />;
//     default: return <Phone className="w-5 h-5 text-white" />;
//   }
// };

// const PremiumTemplateC = () => {
//   const profile = profileWithoutMenu;

//   return (
//     <div className="min-h-screen relative overflow-hidden bg-slate-900">
//       {/* Hero Banner */}
//       <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
//         <Image
//           src={profile.banner || "/placeholder-banner.jpg"}
//           alt="Banner"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>

//       {/* Logo Card */}
//       <div className="relative max-w-4xl mx-auto -mt-20 md:-mt-32 px-4">
//         <div className="bg-gradient-to-r from-black/70 to-slate-800/70 rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 text-center backdrop-blur-lg">
//           {/* Logo */}
//           <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-white/30">
//             <Image
//               src={profile.logo || "/placeholder-logo.png"}
//               alt={profile.title}
//               fill
//               className="object-cover w-full h-full"
//             />
//             <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-300 animate-pulse" />
//           </div>

//           {/* Title */}
//           <h1 className="text-4xl md:text-6xl font-bold text-white mt-4">{profile.title}</h1>

//           {/* Address */}
//           <div className="flex items-center justify-center gap-2 mt-2 text-white text-lg bg-black/40 px-6 py-2 rounded-full inline-flex">
//             <MapPin className="w-5 h-5" />
//             <span>{profile.address}</span>
//           </div>

//           {/* Description */}
//           <p className="text-white/90 mt-6 text-lg leading-relaxed">{profile.description}</p>

//           {/* Socials */}
//           <div className="grid md:grid-cols-2 gap-4 mt-8">
//             {profile.socials.map((social, index) => (
//               <Button
//                 key={social.id}
//                 variant="outline"
//                 className="flex items-center justify-between p-4 rounded-2xl shadow-lg transition-all cursor-pointer group hover:scale-[1.02]"
//                 style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
//                 onClick={() => window.open(social.value, "_blank")}
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white">
//                     {getSocialIcon(social.icon)}
//                   </div>
//                   <span className="font-semibold text-white">{social.name}</span>
//                 </div>
//                 <ArrowRight className="w-5 h-5 text-white" />
//               </Button>
//             ))}
//           </div>

//           {/* Footer */}
//           <div className="mt-8 text-sm text-white/70">Profile – Premium Template C</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PremiumTemplateC;


// "use client";

// import { profileWithoutMenu } from "../mock";
// import { MapPin, Sparkles, ArrowRight, Phone, Facebook, Instagram, Youtube, Twitter, Linkedin, Send } from "lucide-react";
// import Image from "next/image";
// import { Profilexx } from "./FreeTemplateA";


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
// type Props = {
//   model?: Profilexx;
// };

// const PremiumTemplatePC =({ model }: Props) => {
//   const profile = model || profileWithoutMenu;

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Animated Gradient Background */}
//       <div className="fixed inset-0 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 animate-gradient-shift"></div>
//       <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>

//       {/* Floating Orbs */}
//       <div className="fixed top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="fixed bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

//       <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
//         <div className="max-w-4xl w-full space-y-8 animate-fade-in">
          
//           {/* Header Card with Banner */}
//           <div
//             className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20"
//             style={{
//               backgroundImage: `url(${profile.banner || "/placeholder-banner.jpg"})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             {/* Overlay خفيف */}
//             <div className="absolute inset-0 bg-black/30"></div>

//             <div className="relative p-8 md:p-12 text-center z-10">
//               {/* Logo */}
//               <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
//                 <Image
//                   src={profile.logo}
//                   alt={profile.title}
//                   width={160}
//                   height={160}
//                   className="object-cover w-full h-full"
//                 />
//               </div>

//               {/* Sparkles */}
//               <Sparkles className="absolute -top-3 -right-3 w-10 h-10 text-yellow-300 animate-pulse" />

//               {/* Title */}
//               <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 drop-shadow-lg">
//                 {profile.title}
//               </h1>

//               {/* Address */}
//               <div className="flex items-center justify-center gap-2 text-white/90 text-lg bg-black/40 px-6 py-3 rounded-full inline-flex mt-2">
//                 <MapPin className="w-5 h-5" />
//                 <span>{profile.address}</span>
//               </div>
//             </div>
//           </div>

//           {/* Description Card */}
//           <div className="glass-effect rounded-3xl p-8 md:p-10 backdrop-blur-xl border-2 border-white/20 shadow-xl">
//             <div className="flex items-start gap-4 mb-4">
//               <div className="w-2 h-12 bg-gradient-to-b from-yellow-300 to-pink-300 rounded-full"></div>
//               <h2 className="text-3xl font-bold text-white">
//                 عن خدماتنا
//               </h2>
//             </div>
//             <p className="text-xl leading-relaxed text-white/90">
//               {profile.description}
//             </p>
//           </div>

//           {/* Social Cards Grid */}
//           <div className="grid md:grid-cols-2 gap-4">
//             {profile.socials.map((social, index) => (
//               <div
//                 key={social.id}
//                 className="glass-effect rounded-2xl p-6 backdrop-blur-xl border-2 border-white/20 hover:border-white/40 transition-all cursor-pointer group shadow-xl hover:shadow-2xl hover:-translate-y-1 animate-fade-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 onClick={() => window.open(formatSocialUrl(social.icon, social.value), '_blank')}
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <div className="p-4 rounded-2xl bg-white/20 group-hover:bg-white/30 transition-all group-hover:scale-110 transform">
//                       {getSocialIcon(social.icon)}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-white mb-1">
//                         {social.name}
//                       </h3>
//                       <p className="text-white/80 text-sm">{social.value}</p>
//                     </div>
//                   </div>
//                   <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Footer Badge */}
//           <div className="text-center">
//             <div className="glass-effect inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl border border-white/20">
//               <Sparkles className="w-4 h-4 text-yellow-300" />
//               <span className="text-sm text-white/90">
//                 Profile – Premium Template C (Animated Gradient + Banner)
//               </span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default PremiumTemplatePC;

"use client";

import { profileWithoutMenu } from "../mock";
import { MapPin, Sparkles, ArrowRight, Phone, Facebook, Instagram, Youtube, Twitter, Linkedin, Send } from "lucide-react";
import Image from "next/image";
import { Profilexx } from "./FreeTemplateA";
import { getSocialIconHelper, openSocialLinkHelper } from "../menu/helpers";

type Props = {
  model?: Profilexx;
};

// const formatSocialUrl = (icon: string, value: string) => {
//   value = value.trim();
//   if (icon === "phone") return `tel:${value}`;
//   if (icon === "whatsapp") return `https://wa.me/${value.replace(/\D/g, "")}`;
//   if (!value.startsWith("http")) return `https://${value}`;
//   return value;
// };

// const getSocialIcon = (iconName: string) => {
//   switch (iconName) {
//     case "whatsapp": return <Send className="w-5 h-5 text-[#0ff] drop-shadow-[0_0_10px_#0ff] group-hover:drop-shadow-[0_0_30px_#f0f]" />;
//     case "phone": return <Phone className="w-5 h-5 text-[#0ff] drop-shadow-[0_0_10px_#0ff] group-hover:drop-shadow-[0_0_30px_#f0f]" />;
//     case "facebook": return <Facebook className="w-5 h-5 text-[#0ff] drop-shadow-[0_0_10px_#0ff]" />;
//     case "instagram": return <Instagram className="w-5 h-5 text-[#f0f] drop-shadow-[0_0_10px_#f0f]" />;
//     case "youtube": return <Youtube className="w-5 h-5 text-[#ff0] drop-shadow-[0_0_10px_#ff0]" />;
//     case "twitter": return <Twitter className="w-5 h-5 text-[#0ff] drop-shadow-[0_0_10px_#0ff]" />;
//     case "linkedin": return <Linkedin className="w-5 h-5 text-[#0ff] drop-shadow-[0_0_10px_#0ff]" />;
//     default: return <Phone className="w-5 h-5 text-[#0ff]" />;
//   }
// };



const PremiumTemplatePC = ({ model }: Props) => {
  const profile = model || profileWithoutMenu;

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Neon Animated Gradient Background */}
      <div className="fixed inset-0 bg-linear-to-r from-[#0ff] via-[#f0f] to-[#ff0] bg-[length:400%_400%] animate-[gradient_12s_ease_infinite]"></div>

      {/* Neon Orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 rounded-full bg-gradient-radial from-[#0ff] via-[#f0f] to-[#ff0] opacity-50 animate-[pulse_4s_infinite_alternate]"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-radial from-[#0ff] via-[#f0f] to-[#ff0] opacity-50 animate-[pulse_4s_infinite_alternate_1s]"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
        <div className="max-w-4xl w-full space-y-8 animate-fade-in">

          {/* Header Card with Banner */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-xl"
            style={{
              backgroundImage: `url(${profile.banner || "/placeholder-banner.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative p-8 md:p-12 text-center z-10">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
                <Image
                  src={profile.logo}
                  alt={profile.title}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>

              <Sparkles className="absolute -top-3 -right-3 w-10 h-10 text-yellow-300 animate-pulse" />

              <h1 className="text-4xl md:text-6xl font-bold text-[#0ff] drop-shadow-[0_0_10px_#0ff]">{profile.title}</h1>

              <div className="flex items-center justify-center gap-2 text-white/90 text-lg bg-black/40 px-6 py-3 rounded-full inline-flex mt-2">
                <MapPin className="w-5 h-5 text-[#0ff]" />
                <span>{profile.address}</span>
              </div>
            </div>
          </div>

          {/* Description Card */}
          <div className="rounded-3xl p-8 md:p-10 border-2 border-white/20 shadow-xl backdrop-blur-xl bg-black/30">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-2 h-12 bg-linear-to-b from-[#0ff] to-[#f0f] rounded-full"></div>
              <h2 className="text-3xl font-bold text-[#0ff] drop-shadow-[0_0_10px_#0ff]">عن خدماتنا</h2>
            </div>
            <p className="text-xl leading-relaxed text-[#0ff]/80">{profile.description}</p>
          </div>

          {/* Social Cards Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {profile.socials.map((social, index) => (
              <div
                key={social.id}
                className="rounded-2xl p-6 border-2 border-white/20 shadow-xl backdrop-blur-xl bg-black/30 cursor-pointer group hover:shadow-2xl transition-all animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() =>openSocialLinkHelper(social.icon, social.value)}
              >
                <div className="flex items-center justify-between overflow-hidden">
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className="p-4 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-all group-hover:scale-110 transform">
                      {getSocialIconHelper(social.icon)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold text-[#0ff] drop-shadow-[0_0_10px_#0ff] mb-1 truncate">{social.name}</h3>
                      <p className="text-[#0ff]/80 text-sm truncate">{social.value}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#0ff] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Footer Badge */}
          {/* <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 backdrop-blur-xl bg-black/30">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm text-[#0ff]/90">
                Profile – Premium Template C (Neon Future Glow)
              </span>
            </div>
          </div> */}

        </div>
      </div>

      {/* Tailwind Keyframes Inline */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-[gradient_12s_ease_infinite] {
          animation: gradient 12s ease infinite;
          background-size: 400% 400%;
        }
        @keyframes pulse {
          0%,100% { transform: scale(1); filter: drop-shadow(0 0 10px #0ff); }
          50% { transform: scale(1.2); filter: drop-shadow(0 0 30px #f0f); }
        }
        .animate-[pulse_4s_infinite_alternate] { animation: pulse 4s infinite alternate; }
        .animate-[pulse_4s_infinite_alternate_1s] { animation: pulse 4s infinite alternate 1s; }
        @keyframes fade-in { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.8s ease forwards; }
      `}</style>
    </div>
  );
};

export default PremiumTemplatePC;
