// import { profileWithoutMenu } from "../mock";
// import { Button } from "@/components/ui/button";
// import { MapPin, Phone, Facebook, ArrowRight } from "lucide-react";

// const FreeTemplateC = () => {
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
//     <div className="min-h-screen bg-background">
//       {/* Split Screen Layout */}
//       <div className="grid md:grid-cols-2 min-h-screen">
//         {/* Left Side - Brand Section */}
//         <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-8 md:p-12 flex flex-col justify-center items-center text-center text-primary-foreground relative overflow-hidden">
//           {/* Decorative Elements */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-32 translate-x-32"></div>
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-y-48 -translate-x-48"></div>
          
//           <div className="relative z-10 space-y-6 max-w-md animate-fade-in">
//             <div className="w-28 h-28 mx-auto rounded-2xl bg-primary-foreground/95 flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-transform">
//               <span className="text-5xl font-bold text-primary">
//                 {profile.title.charAt(0)}
//               </span>
//             </div>
            
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//               {profile.title}
//             </h1>
            
//             <div className="flex items-center justify-center gap-2 text-primary-foreground/90">
//               <MapPin className="w-5 h-5" />
//               <span className="text-lg">{profile.address}</span>
//             </div>

//             <div className="h-1 w-24 mx-auto bg-primary-foreground/30 rounded-full"></div>
//           </div>
//         </div>

//         {/* Right Side - Content Section */}
//         <div className="p-8 md:p-12 flex flex-col justify-center bg-background">
//           <div className="max-w-lg mx-auto w-full space-y-8 animate-fade-in">
//             {/* Description */}
//             <div>
//               <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
//                 <div className="w-1 h-8 bg-primary rounded-full"></div>
//                 عن خدماتنا
//               </h2>
//               <p className="text-lg leading-relaxed text-muted-foreground">
//                 {profile.description}
//               </p>
//             </div>

//             {/* Social Links */}
//             <div className="space-y-3">
//               <h3 className="text-xl font-semibold text-foreground mb-4">
//                 تواصل معنا
//               </h3>
              
//               {profile.socials.map((social) => (
//                 <Button
//                   key={social.id}
//                   variant="outline"
//                   size="lg"
//                   className="w-full justify-between group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
//                   onClick={() => window.open(social.value, '_blank')}
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary-foreground/20">
//                       {getSocialIcon(social.icon)}
//                     </div>
//                     <div className="text-right">
//                       <div className="font-semibold">{social.name}</div>
//                       <div className="text-xs opacity-70">{social.value}</div>
//                     </div>
//                   </div>
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               ))}
//             </div>

//             <div className="pt-6 border-t border-border">
//               <p className="text-sm text-muted-foreground text-center">
//                 Profile – Free Template C (Split Screen)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FreeTemplateC;

"use client";

import Image from "next/image";
import { profileWithoutMenu } from "../mock";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Facebook, Instagram, Youtube, Twitter, Linkedin, Send, MessageCircle, ArrowRight } from "lucide-react";
import { Profilexx } from "./FreeTemplateA";
import { getSocialIconHelper, openSocialLinkHelper } from "../menu/helpers";



type Props = {
  model?: Profilexx;
};

const FreeTemplateProfileC = ({ model }: Props) => {
  const profile = model || profileWithoutMenu;

  return (
    <div className="min-h-screen bg-background">
      <div className="grid md:grid-cols-2 min-h-screen">

        {/* Left Side - Banner + Logo */}
        <div className="relative flex flex-col justify-center items-center text-center text-primary-foreground overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={profile.banner}
              alt="banner"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/25"></div>
          </div>

          <div className="relative z-10 space-y-6 max-w-md animate-fade-in p-8 md:p-12">
            <div className="w-28 h-28 mx-auto rounded-2xl bg-white flex items-center justify-center shadow-2xl overflow-hidden rotate-3 hover:rotate-0 transition-transform">
              <Image
                src={profile.logo}
                alt={profile.title}
                width={112}
                height={112}
                className="object-cover w-full h-full"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
              {profile.title}
            </h1>

            <div className="flex items-center justify-center gap-2 text-white/90 drop-shadow-lg">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{profile.address}</span>
            </div>

            <div className="h-1 w-24 mx-auto bg-white/50 rounded-full"></div>
          </div>
        </div>

        {/* Right Side - Content Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-background">
          <div className="max-w-lg mx-auto w-full space-y-8 animate-fade-in">

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <div className="w-1 h-8 bg-primary rounded-full"></div>
                عن خدماتنا
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {profile.description}
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3 overflow-hidden">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                تواصل معنا
              </h3>

              {profile.socials.map((social) => (
                <Button
                  key={social.id}
                  variant="outline"
                  size="lg"
                  className="w-full justify-between group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all overflow-hidden"
                  onClick={() => {openSocialLinkHelper(social.icon,social.value);}}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary-foreground/20">
                      {getSocialIconHelper(social.icon)}
                    </div>
                    <div className="text-right min-w-0">
                      <div className="font-semibold truncate">{social.name}</div>
                      <div className="text-xs opacity-70 truncate">{social.value}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              ))}
            </div>



          </div>
        </div>

      </div>
    </div>
  );
};

export default FreeTemplateProfileC;
