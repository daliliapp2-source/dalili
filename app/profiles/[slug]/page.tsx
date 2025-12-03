

// interface SocialMediaplatformBuilder {
//   id: string;
//   name: string;
//   icon: string;
//   open_type: string;
// }

// interface SocialMediaplatform {
//   social: SocialMediaplatformBuilder;
//   value: string;
//   is_Active: boolean;
// }
// interface ProfilePageProps {
//   params: { 
// id: string|null;
// title: string;
// description : string;
// address: string;
// logo: File | null;
// banner: File | null;
// socialLinks: SocialMediaplatform[];
// selectedItems: string[];
// selectedTheme: string;};
// }




// export async function generateStaticParams() {
//   // هتولد كل صفحات profile
//   return profiles.map((p) => ({ id: p.id }));
// }

// export default function ProfilePage({ params }: ProfilePageProps) {

//   const Template = templatesMap[profile.theme] || Theme1;

//   return <Template profile={profile} />;
// }


"use client";
import { Profilexm } from "@/components/templates/new/t8tempo/menu/FreeTemplateA";
import { useEffect, useState } from "react";
import { use } from "react";
import { templatesMap } from "./map";
export default  function PublicPage( { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [profile, setProfile] = useState<Profilexm | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const lookup = await fetch(`/pd/${slug}`);
        console.log(lookup)
        console.log(slug)
        if (!lookup.ok) throw new Error("not found");
        const { url } = await lookup.json();
        const res = await fetch(url);
        if (!res.ok) throw new Error("json not found");
        const json = await res.json();
        setProfile(json);
      } catch (e) {
        setProfile(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!profile) return <div>Profile Not Found</div>;
  //   if (profile) return <Profilexm profile={profile} />;
  
  // if (profile) return <div>{profile.title}</div>;


  // === 🔥 هنا نجيب القالب المناسب ===
  const TemplateComponent = templatesMap[profile.profile_theme || ""];

  if (!TemplateComponent) return <div>Template Not Found</div>;

  return <TemplateComponent model={profile} />;

  // render as before...
}

