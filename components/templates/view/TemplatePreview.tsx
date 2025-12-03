// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import { mockMenuData, mockProfileData } from "../data/mock";
// import { allTemplates } from "../data/temps";
// import { useParams } from "next/navigation";
// import { useRouter } from "next/navigation";

// const TemplatePreview = () => {
//   const { type, id } = useParams<{ type: string; id: string }>();
// const router = useRouter();

//   const template = allTemplates.find((t) => t.id === id);

//   if (!template) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-background">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-foreground mb-4">القالب غير موجود</h1>
//           <Button onClick={() => router.push("/")}>
//             <ArrowRight className="ml-2 h-4 w-4" />
//             العودة للمتجر
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   const TemplateComponent = template.component;

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Navigation Bar */}
//       <div className="bg-preview-nav text-white sticky top-0 z-50 shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//           <Button
//             variant="ghost"
//             onClick={() => router.push("/")}
//             className="text-white hover:bg-white/10"
//           >
//             <ArrowRight className="ml-2 h-5 w-5" />
//             العودة للمتجر
//           </Button>
//           <div className="text-center">
//             <h2 className="text-xl font-bold">{template.name}</h2>
//             <p className="text-sm text-gray-300">{template.description}</p>
//           </div>
//           <div className="w-32" /> {/* Spacer for center alignment */}
//         </div>
//       </div>

//       {/* Template Preview */}
//       <div className="w-full">
//         {type === "profile" ? (
//           <TemplateComponent data={mockProfileData} />
//         ) : (
//           <TemplateComponent data={mockMenuData} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default TemplatePreview;


"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { mockMenuData, mockProfileData } from "../data/mock";
import { allTemplates } from "../data/temps";

export default function TemplatePreview() {
  const params = useParams();
  const router = useRouter();

  const type = params.type as string;
  const id = params.id as string;

  const template = allTemplates.find((t) => t.id === id);

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            القالب غير موجود
          </h1>
          <Button onClick={() => router.push("/")}>
            <ArrowRight className="ml-2 h-4 w-4" />
            العودة للمتجر
          </Button>
        </div>
      </div>
    );
  }

  const TemplateComponent = template.component;

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-preview-nav text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="text-white hover:bg-white/10"
          >
            <ArrowRight className="ml-2 h-5 w-5" />
            العودة للمتجر
          </Button>

          <div className="text-center">
            <h2 className="text-xl font-bold">{template.name}</h2>
            <p className="text-sm text-gray-300">{template.description}</p>
          </div>

          <div className="w-32" />
        </div>
      </div>

      <div className="w-full">
        {type === "profile" ? (
          <TemplateComponent data={mockProfileData} />
        ) : (
          <TemplateComponent data={mockMenuData} />
        )}
      </div>
    </div>
  );
}
