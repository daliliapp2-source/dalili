// "use client";

// import { profileWithoutMenu } from "../mock";
// import { Button } from "@/components/ui/button";
// import { MapPin, Facebook, Phone , } from "lucide-react";

// const FreeTemplateA = () => {
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
//     <div className="min-h-screen bg-white">
//       {/* Simple Header */}
//       <div className="bg-slate-100 py-6 px-4 border-b border-slate-200">
//         <div className="max-w-2xl mx-auto text-center">
//           <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
//             {profile.title}
//           </h1>
//           <div className="flex items-center justify-center gap-2 text-slate-600">
//             <MapPin className="w-4 h-4" />
//             <span className="text-sm">{profile.address}</span>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
//         {/* Logo */}
//         <div className="flex justify-center mb-8">
//           <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-200 flex items-center justify-center border-4 border-white shadow-lg">
//             <span className="text-4xl md:text-5xl font-bold text-slate-700">
//               {profile.title.charAt(0)}
//               {/* {profile.logo} */}
//             </span>
//           </div>
//         </div>

//         {/* Description */}
//         <div className="mb-12">
//           <h2 className="text-xl font-semibold text-slate-900 mb-3 text-center">
//             عن الخدمة
//           </h2>
//           <p className="text-slate-700 leading-relaxed text-center text-base md:text-lg">
//             {profile.description}
//           </p>
//         </div>

//         {/* Social Links */}
//         <div className="space-y-3">
//           <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">
//             تواصل معنا
//           </h3>
//           {profile.socials.map((social) => (
//             <Button
//               key={social.id}
//               variant="outline"
//               className="w-full h-14 text-base justify-start gap-3 border-2 hover:bg-slate-50"
//               onClick={() => window.open(social.value, '_blank')}
//             >
//               {getSocialIcon(social.icon)}
//               <span>{social.name}</span>
//               <span className="mr-auto text-slate-500 text-sm">{social.value}</span>
//             </Button>
//           ))}
//         </div>

//         {/* Footer Note
//         <div className="mt-12 pt-8 border-t border-slate-200 text-center">
//           <p className="text-sm text-slate-500">
//             Profile – Free Template A
//           </p>
//         </div> */}
        
//       </div>
//     </div>
//   );
// };

// export default FreeTemplateA;




 "use client";

import Image from "next/image";
import { profileWithoutMenu } from "../mock";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Send,
  MessageCircle,
} from "lucide-react";
import { getSocialIconHelper, openSocialLinkHelper } from "../menu/helpers";

// ------------ HANDLE SOCIAL URLS -------------
// const formatSocialUrl = (icon: string, value: string) => {
//   // remove spaces
//   value = value.trim();

//   // PHONE
//   if (icon === "phone") {
//     return `tel:${value}`;
//   }

//   // WHATSAPP
//   if (icon === "whatsapp") {
//     // لو المستخدم كتب رقم مباشرة
//     const digits = value.replace(/\D/g, "");
//     return `https://wa.me/${digits}`;
//   }

//   // IF URL WITHOUT HTTP -> add https
//   if (!value.startsWith("http")) {
//     return `https://${value}`;
//   }

//   return value;
// };

// ------------ ICONS -------------
// const getSocialIcon = (iconName: string) => {
//   switch (iconName) {
//     case "whatsapp":
//       return <MessageCircle className="w-5 h-5 text-green-600" />;
//     case "phone":
//       return <Phone className="w-5 h-5 text-blue-600" />;
//     case "facebook":
//       return <Facebook className="w-5 h-5 text-blue-700" />;
//     case "instagram":
//       return <Instagram className="w-5 h-5 text-pink-600" />;
//     case "youtube":
//       return <Youtube className="w-5 h-5 text-red-600" />;
//     case "twitter":
//       return <Twitter className="w-5 h-5 text-sky-500" />;
//     case "tiktok":
//       return <Send className="w-5 h-5 text-black" />;
//     case "linkedin":
//       return <Linkedin className="w-5 h-5 text-blue-700" />;
//     default:
//       return <Phone className="w-5 h-5" />;
//   }
// };


export interface Profilexx {
  id: string;
  banner: string;
  logo: string;
  title: string;
  description: string;
  address: string;
  socials: Socialxx[];
  profile_theme?: string;
  menuItems?: MenuItemx[];
}


 interface MenuItemx {
  id: string;
  name: string;
  description: string;
  prices: ItemPricexm[];
  image: string;
  category: string;
}

interface ItemPricexm { id?: string; lable: string; amount: number; }

export interface Socialxx {
  id: string;
  name: string;
  value: string;
  open_type: string;
  icon: string;
}

type Props = {
  model?: Profilexx;
};


const FreeTemplateProfileA = ({ model }: Props) => {
  const profile = model || profileWithoutMenu;
 
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <div className="bg-slate-100 py-6 px-4 border-b border-slate-200">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            {profile.title}
          </h1>

          <div className="flex items-center justify-center gap-2 text-slate-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{profile.address}</span>
          </div>
        </div>
      </div> */}
{/* Header → Banner Background */}
<div className="relative w-full h-48 md:h-64">
  <Image
    src={profile.banner}
    alt="banner"
    fill
    className="object-cover"
  />

  {/* Dark overlay (اختياري) */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Text on Banner */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-2xl md:text-4xl font-bold mb-2 drop-shadow-lg">
      {profile.title}
    </h1>

    <div className="flex items-center gap-2 text-sm md:text-base drop-shadow-lg">
      <MapPin className="w-4 h-4" />
      <span>{profile.address}</span>
    </div>
  </div>
</div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={profile.logo}
              alt={profile.title}
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-slate-900 mb-3 text-center">
            عن الخدمة
          </h2>
          <p className="text-slate-700 leading-relaxed text-center text-base md:text-lg">
            {profile.description}
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">
            تواصل معنا
          </h3>

          {profile.socials.map((social) => (
            <Button
              key={social.id}
              variant="outline"
              className="w-full h-14 text-base justify-start gap-3 border-2 hover:bg-slate-50"
              onClick={() =>
              {openSocialLinkHelper(social.icon, social.value)}
              }
            >
              {getSocialIconHelper(social.icon)}
              <span>{social.name}</span>
              <span className="mr-auto text-slate-500 text-sm truncate">
                {social.value}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeTemplateProfileA;
