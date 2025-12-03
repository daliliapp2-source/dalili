// أيقونات بديلة — غيّرها زي ما تحب
// import { MessageCircle, Phone } from "lucide-react";
 import { MessageCircle, Phone } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaLinkedin, FaYoutube, FaGlobe } from "react-icons/fa";

type SocialKey =
  | "whatsapp"
  | "facebook"
  | "instagram"
  | "tiktok"
  | "twitter"
  | "linkedin"
  | "youtube"
  | "phone";

export function getSocialIconHelper(type: string) {
  switch (type) {
    case "whatsapp":return <MessageCircle className="w-5 h-5 text-green-600" />;
    case "facebook": return <FaFacebook className="w-5 h-5 text-blue-700" />;
    case "instagram": return <FaInstagram className="w-5 h-5 text-pink-600" />;
    case "tiktok": return <FaTiktok className="w-5 h-5 text-black" />;
    case "twitter": return <FaTwitter className="w-5 h-5 text-sky-500"  />;
    case "linkedin": return <FaLinkedin className="w-5 h-5 text-blue-700" />;
    case "youtube": return <FaYoutube className="w-5 h-5 text-red-600"/>;
    case "phone": return <Phone className="w-5 h-5 text-blue-600" />;
    default: return null;
  }
}






export function openSocialLinkHelper(type: string, value: string) {
  if (!value) return;

  let link = value.trim();

  switch (type) {
     case "whatsapp": {
      // إزالة أي بروتوكول مسبق ومسافات وعلامات
      let number = link.replace(/\D/g, ""); // يخلي الرقم أرقام بس
      // لو الرقم بيبدأ بـ 0 نبدله بـ 20 (مصر كمثال)
      if (number.startsWith("0")) number = "20" + number.slice(1);
      link = `https://wa.me/${number}`;
      break;
    }

    case "phone": {
      let number = link.replace(/\D/g, "");
      // لو الرقم يبتدي بـ 0 نضيف 20 (مصر)
      if (number.startsWith("0")) number = "20" + number.slice(1);
      link = `tel:+${number}`;
      break;
    }
    case "facebook":
      if (!link.startsWith("http")) link = `https://www.facebook.com/${link}`;
      break;

    case "instagram":
      if (!link.startsWith("http")) link = `https://www.instagram.com/${link}`;
      break;

    case "tiktok":
      if (!link.startsWith("http")) {
        if (!link.startsWith("@")) link = "@" + link;
        link = `https://www.tiktok.com/${link}`;
      }
      break;

    case "twitter":
      if (!link.startsWith("http")) link = `https://twitter.com/${link.replace("@", "")}`;
      break;

    case "linkedin":
      if (!link.startsWith("http")) link = `https://www.linkedin.com/in/${link}`;
      break;

    case "youtube":
      if (!link.startsWith("http")) link = `https://www.youtube.com/${link}`;
      break;

    // case "website":
    //   if (!link.startsWith("http")) link = `https://${link}`;
    //   break;

    // case "phone":
    //   link = `tel:${link.replace(/[^0-9+]/g, "")}`;
    //   break;
  }

  // التأكد أن كل رابط ويب يبدأ بـ http/https
  if (!link.startsWith("http") && !link.startsWith("tel:")) {
    link = "https://" + link;
  }

  window.open(link, "_blank");
  return link;
}


// const isMock = !model; // معناها: مفيش model مبعوت

// const categories = isMock
//   ? allCategories
//   : Array.from(new Set(profile.menuItems?.map(item => item.category) || []));















// export function openSocialLinkHelper(type: string, value: string) {
//   if (!value) return;

//   let link = value.trim();

//   switch (type) {
//     case "whatsapp":
//       link = link.replace(/^https?:\/\/wa\.me\//, "");
//       link = `https://wa.me/${link}`;
//       break;

//     case "facebook":
//       if (!link.startsWith("http")) link = `https://www.facebook.com/${link}`;
//       break;

//     case "instagram":
//       if (!link.startsWith("http")) link = `https://www.instagram.com/${link}`;
//       break;

//     case "tiktok":
//       if (!link.startsWith("http")) {
//         if (!link.startsWith("@")) link = "@" + link;
//         link = `https://www.tiktok.com/${link}`;
//       }
//       break;

//     case "twitter":
//       if (!link.startsWith("http")) link = `https://twitter.com/${link.replace("@", "")}`;
//       break;

//     case "linkedin":
//       if (!link.startsWith("http")) link = `https://www.linkedin.com/in/${link}`;
//       break;

//     case "youtube":
//       if (!link.startsWith("http")) link = `https://www.youtube.com/${link}`;
//       break;

//     // case "website":
//     //   if (!link.startsWith("http")) link = `https://${link}`;
//     //   break;

//     case "phone":
//       link = `tel:${link.replace(/[^0-9+]/g, "")}`;
//       break;
//   }

//   window.open(link, "_blank");
// }
