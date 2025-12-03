

// utils/templateHelper.tsx
"use client";


import { templatesList } from "@/app/(client)/themes/mocks/mockdata";



// ---------- 1. Build Profile Model from DB Payload ----------
 interface ProfileToRender {
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

 interface Socialxx {
  id: string;
  name: string;
  value: string;
  open_type: string;
  icon: string;
}
interface SocialMediaplatformBuilder {
  id: string;
  name: string;
  icon: string;
  open_type: string;
}

interface SocialMediaplatform {
  social: SocialMediaplatformBuilder;
  value: string;
  is_Active: boolean;
}

interface DataModelTOFromDB {

id: string|null;
title: string;
description : string;
address: string;
logo: string;
banner: string;
socialLinks: SocialMediaplatform[];
selectedItems: MenuItemx[];
selectedTheme: string;


}

/**
 * يحوّل DataModelTOFromDB إلى Profilexx صالح للعرض على القالب
 */
export const buildProfileModel = (data: DataModelTOFromDB): ProfileToRender => {
  return {
    id: data.id || "",
    banner: data.banner,
    logo: data.logo,
    title: data.title,
    description: data.description,
    address: data.address,
    socials: data.socialLinks.map((s) => ({
      id: s.social.id,
      name: s.social.name,
      icon: s.social.icon,
      open_type: s.social.open_type,
      value: s.value,
    })),
    menuItems:data.selectedItems,
    profile_theme: data.selectedTheme

  };
};

// ---------- 2. Get Template Component ----------
/**
 * يجيب الكومبوننت المناسب بناءً على id القالب أو profileOnly
 */
export const getTemplateComponent = (templateId: string) => {
  const template = templatesList.find((t) => t.id === templateId);
  if (!template) return null;
  return template.component;
};

// ---------- 3. Generate Page HTML (String) ----------
/**
 * يعمّل export للملفات ك html string جاهزة للرفع على أي CDN
 * لو عايز ممكن تحوّلها بعد كده لملف .html أو zip
 */
export const generateHtmlPage = (profile: ProfileToRender, templateId: string) => {
  const Component = getTemplateComponent(templateId);
  if (!Component) return "";

  // مبدأياً نستخدم renderToString من react-dom/server
  // عشان نقدر نطلع HTML كامل
  const { renderToString } = require("react-dom/server");
  const html = renderToString(<Component model={profile} />);

  // لف HTML في قالب كامل مع head
  return `
  <!DOCTYPE html>
  <html lang="ar">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${profile.title}</title>
      <link rel="stylesheet" href="styles.css" /> <!-- لو عندك ستايلات خارجية -->
    </head>
    <body>
      ${html}
    </body>
  </html>
  `;
};


 const SomePage = ({ data }: { data: DataModelTOFromDB }) => {
  const profile = buildProfileModel(data);

  const handleExport = () => {
    const html = generateHtmlPage(profile, data.selectedTheme); // id القالب
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${profile.title}.html`;
    a.click();
  };

  const TemplateComponent = getTemplateComponent(data.selectedTheme);

  return (
    <div>
      {TemplateComponent && <TemplateComponent model={profile} />}
      <button onClick={handleExport} className="btn-export">
        استخراج الملفات
      </button>
    </div>
  );
};


export function exportDataToWHERE (data: DataModelTOFromDB) {
  return SomePage({ data });
}