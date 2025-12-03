// "use client";

// import { useState } from "react";
// import { TemplateInfo } from "./mockdata";
// import { profileWithMenu, profileWithoutMenu } from "@/components/templates/new/t8tempo/mock";

// interface TemplatesGridProps {
//   templates: TemplateInfo[];
// }

// export default function TemplatesGrid({ templates }: TemplatesGridProps) {
//   const [previewTemplate, setPreviewTemplate] = useState<TemplateInfo | null>(null);

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {templates.map((tpl) => (
//           <div
//             key={tpl.id}
//             className="bg-white rounded shadow p-4 flex flex-col items-center gap-4"
//           >
//             <img
//               src={tpl.thumbnail}
//               alt={tpl.title}
//               className="w-full h-40 object-contain rounded"
//             />
//             <h2 className="text-lg font-semibold">{tpl.title}</h2>
//             <button
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               onClick={() => setPreviewTemplate(tpl)}
//             >
//               Preview
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {previewTemplate && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded shadow-lg w-full max-w-5xl h-full overflow-auto relative">
//             {/* <button
//               className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white rounded"
//               onClick={() => setPreviewTemplate(null)}
//             >
//               اغلاق
//             </button> */}

// <button
//   className="fixed top-6 right-6 z-999999 px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700"
//   onClick={() => setPreviewTemplate(null)}
// >
//   اغلاق
// </button>

//             {/* Render the component with mock data */}
//             {(() => {
//               const PreviewComponent = previewTemplate.component;
              
//               // لو القالب بياخد model optional هيستخدم الموك جوه القالب
//               return <PreviewComponent  />;
//             })()}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


// "use client";

// import { useState } from "react";
// import { TemplateInfo } from "./mockdata";

// export default function TemplatesGrid({ templates }: { templates: TemplateInfo[] }) {
//   const [previewTemplate, setPreviewTemplate] = useState<TemplateInfo | null>(null);

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//         {templates.map((tpl) => (
//           <div
//             key={tpl.id}
//             className="bg-white rounded-xl shadow p-3 flex flex-row gap-3 items-center cursor-pointer hover:shadow-lg transition"
//             onClick={() => setPreviewTemplate(tpl)}
//           >
//             {/* الصورة يمين */}
//             <div className="w-20 h-20 flex-shrink-0 relative">
//               <img
//                 src={tpl.thumbnail}
//                 alt={tpl.title}
//                 className="w-full h-full object-contain rounded bg-gray-100"
//               />

//               {/* طبقة إشارة الضغط */}
//               <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition rounded"></div>
//             </div>

//             {/* الاسم */}
//             <div className="flex flex-col text-right flex-1">
//               <h2 className="text-sm font-semibold text-gray-800">{tpl.title}</h2>
//               <p className="text-xs text-gray-500">اضغط للمعاينة</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Preview Modal */}
//       {previewTemplate && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded shadow-lg w-full max-w-5xl h-full overflow-auto relative">

//             <button
//               className="fixed top-6 right-6 z-50 px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700"
//               onClick={() => setPreviewTemplate(null)}
//             >
//               اغلاق
//             </button>

//             {(() => {
//               const PreviewComponent = previewTemplate.component;
//               return <PreviewComponent />;
//             })()}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// "use client";

// import { useState } from "react";
// import { TemplateInfo } from "./mockdata";
// import { Star, User, ShoppingBag } from "lucide-react";

// export default function TemplatesGrid({ templates }: { templates: TemplateInfo[] }) {
//   const [previewTemplate, setPreviewTemplate] = useState<TemplateInfo | null>(null);

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//         {templates.map((tpl) => (
//           <div
//             key={tpl.id}
//             className="bg-white rounded-xl shadow p-3 flex flex-row gap-3 items-center cursor-pointer hover:shadow-lg transition relative"
//             onClick={() => setPreviewTemplate(tpl)}
//           >
//             {/* BADGES (نجمة + أيقونة نوع القالب) */}
//             <div className="absolute top-2 left-2 flex gap-1">
//               {tpl.isPremium && (
//                 <div className="bg-yellow-400 text-white rounded-full p-1 shadow-md">
//                   <Star className="w-4 h-4" />
//                 </div>
//               )}

//               {tpl.profileOnly ? (
//                 <div className="bg-blue-500 text-white rounded-full p-1 shadow-md">
//                   <User className="w-4 h-4" />
//                 </div>
//               ) : (
//                 <div className="bg-green-500 text-white rounded-full p-1 shadow-md">
//                   <ShoppingBag className="w-4 h-4" />
//                 </div>
//               )}
//             </div>

//             {/* الصورة يمين */}
//             <div className="w-20 h-20 shrink-0 relative">
//               <img
//                 src={tpl.thumbnail}
//                 alt={tpl.title}
//                 className="w-full h-full object-contain rounded bg-gray-100"
//               />
//               {/* طبقة إشارة الضغط */}
//               <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition rounded"></div>
//             </div>

//             {/* الاسم */}
//             <div className="flex flex-col text-right flex-1">
//               <h2 className="text-sm font-semibold text-gray-800">{tpl.title}</h2>
//               <p className="text-xs text-gray-500">اضغط للمعاينة</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Preview Modal */}
//       {previewTemplate && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded shadow-lg w-full max-w-5xl h-full overflow-auto relative">
//             <button
//               className="fixed top-6 right-6 z-50 px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700"
//               onClick={() => setPreviewTemplate(null)}
//             >
//               اغلاق
//             </button>

//             {(() => {
//               const PreviewComponent = previewTemplate.component;
//               return <PreviewComponent />;
//             })()}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

"use client";

import { useState } from "react";
import { TemplateInfo } from "./mockdata";
import { Star, User, ShoppingBag } from "lucide-react";

export default function TemplatesGrid({ templates }: { templates: TemplateInfo[] }) {
  const [previewTemplate, setPreviewTemplate] = useState<TemplateInfo | null>(null);

  // فلتر لعرض public فقط
  const publicTemplates = templates.filter((tpl) => tpl.theme_type === "public");

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {publicTemplates.map((tpl) => (
          <div
            key={tpl.id}
            className="bg-white rounded-xl shadow p-3 flex flex-row gap-3 items-center cursor-pointer hover:shadow-lg transition relative"
            onClick={() => setPreviewTemplate(tpl)}
          >
            {/* BADGES (نجمة + أيقونة نوع القالب) */}
            <div className="absolute top-2 left-2 flex gap-1">
              {tpl.isPremium && (
                <div className="bg-yellow-400 text-white rounded-full p-1 shadow-md">
                  <Star className="w-4 h-4" />
                </div>
              )}

              {tpl.profileOnly ? (
                <div className="bg-blue-500 text-white rounded-full p-1 shadow-md">
                  <User className="w-4 h-4" />
                </div>
              ) : (
                <div className="bg-green-500 text-white rounded-full p-1 shadow-md">
                  <ShoppingBag className="w-4 h-4" />
                </div>
              )}
            </div>

            {/* الصورة يمين */}
            <div className="w-20 h-20 shrink-0 relative">
              <img
                src={tpl.thumbnail}
                alt={tpl.title}
                className="w-full h-full object-contain rounded bg-gray-100"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition rounded"></div>
            </div>

            {/* الاسم */}
            <div className="flex flex-col text-right flex-1">
              <h2 className="text-sm font-semibold text-gray-800">{tpl.title}</h2>
              <p className="text-xs text-gray-500">اضغط للمعاينة</p>
            </div>

            
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewTemplate && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded shadow-lg w-full max-w-5xl h-full overflow-auto relative">
            <button
              className="fixed top-6 right-6 z-50 px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700"
              onClick={() => setPreviewTemplate(null)}
            >
              اغلاق
            </button>

            {(() => {
              const PreviewComponent = previewTemplate.component;
              return <PreviewComponent />;
            })()}
          </div>
        </div>
      )}
    </>
  );
}

