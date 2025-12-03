// "use client";

// import FreeTemplateA from "@/components/templates/new/t8tempo/menu/FreeTemplateA";
// import FreeTemplateB from "@/components/templates/new/t8tempo/menu/FreeTemplateB";
// import PremiumTemplateA from "@/components/templates/new/t8tempo/menu/PremiumTemplateA";
// import PremiumTemplateB from "@/components/templates/new/t8tempo/menu/PremiumTemplateB";
// import PremiumTemplateC from "@/components/templates/new/t8tempo/menu/PremiumTemplateC";
// import PremiumTemplateD from "@/components/templates/new/t8tempo/menu/PremiumTemplateD";
// import PremiumTemplateE from "@/components/templates/new/t8tempo/menu/PremiumTemplateE";
// import PremiumTemplateF from "@/components/templates/new/t8tempo/menu/PremiumTemplateF";

// // import PremiumTemplateA from "@/components/templates/new/t8tempo/profile/PremiumTemplateA";
// // import FreeTemplateA from "@/components/templates/new/t8tempo/profile/FreeTemplateA";
// // import FreeTemplateB from "@/components/templates/new/t8tempo/profile/FreeTemplateB";
// // import FreeTemplateC from "@/components/templates/new/t8tempo/profile/FreeTemplateC";
// // import FreeTemplateD from "@/components/templates/new/t8tempo/profile/FreeTemplateD";
// // import ThemeStore from "@/components/templates/view/ThemeStore"
// // import PremiumTemplateB from "@/components/templates/new/t8tempo/profile/PremiumTemplateB";
// // import PremiumTemplateC from "@/components/templates/new/t8tempo/profile/PremiumTemplateC";
// // import PremiumTemplateD from "@/components/templates/new/t8tempo/profile/PremiumTemplateD";


// export default function Themes() {
//     return <div>
        
//         {/* PROFILES SECTION */}


//          {/* <FreeTemplateA />; */}
//          {/* <FreeTemplateB />; */}
//          {/* <FreeTemplateC />; */}
//          {/* <FreeTemplateD />; */}
//          {/* <PremiumTemplateA />; */}
//          {/* <PremiumTemplateB />; */}
//          {/* <PremiumTemplateC />; */}
//          {/* <PremiumTemplateD />; */}

//         {/* MENU SECTION */}

//          {/* <FreeTemplateA />; */}
//          {/* <FreeTemplateB />; */}
//          {/* <PremiumTemplateA />; */}
//          {/* <PremiumTemplateB />; */}
//          {/* <PremiumTemplateC />; */}
//          {/* <PremiumTemplateD />; */}
//          {/* <PremiumTemplateE />; */}
//          <PremiumTemplateF />;


//          </div>
//     // <ThemeStore />;
   
// }

// import TemplatesGrid from "@/components/TemplatesGrid";
// import { templatesList } from "@/data/templates";
// import { profileWithMenu } from "@/data/mock";

// export default async function TemplatesPage() {
//   // لو عندك fetch حقيقي من DB ممكن تحطه هنا بدل الـ mock
//   const profiles = templatesList.map((tpl) => ({
//     ...tpl,
//     mockProfile: profileWithMenu, // mock data لكل قالب
//   }));

//   return (
//     <main className="p-6 md:p-12">
//       <h1 className="text-3xl md:text-4xl font-bold mb-8">قوالب المتجر</h1>
//       <TemplatesGrid templates={profiles} />
//     </main>
//   );
// }

// import { templatesList, TemplateInfo } from "@/data/templates";



import TemplatesGrid from "./mocks/grids";
import { TemplateInfo, templatesList } from "./mocks/mockdata";

// لو حبيت بعدين تجيب الداتا من DB هتستبدل الموك هنا
const getTemplatesData = async (): Promise<TemplateInfo[]> => {
  // مثال لو من قاعدة البيانات:
  // return await fetchTemplatesFromDB();
  return templatesList; // حالياً mock data
};

export default async function StorePage() {
  const templates = await getTemplatesData();

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">متجر القوالب</h1>
      <TemplatesGrid templates={templates} />
    </div>
  );
}
