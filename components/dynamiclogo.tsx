// "use client";

// import Link from "next/link";
// import { QrCode } from "lucide-react";
// import { createClient } from "@/lib/supabase/server";
// export default async function DynamicLogoLink() {
// const supabase = await createClient();
//   const { data } = await supabase.auth.getUser();
//   const user = data?.user;

//   let linkHref = "/";
 
//   if (!user) {
//     linkHref = "/dashboard";
//   }

//   return (
//     <Link href={linkHref} className="text-2xl font-bold flex gap-2 items-center">
//       <QrCode className="h-8 w-8 text-primary" />
//       <span>دليلي</span>
//     </Link>
//   );
// }

// "use client";

// import Link from "next/link";
// import { QrCode } from "lucide-react";
// import { createClient } from "@/lib/supabase/client";
// import { useEffect, useState } from "react";

// export default function DynamicLogoLink() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const supabase = createClient();
//     supabase.auth.getUser().then(({ data }) => {
//       setUser(data?.user || null);
//     });
//   }, []);

//   const linkHref = user ? "/dashboard" : "/";

//   return (
//     <Link href={linkHref} className="text-2xl font-bold flex gap-2 items-center">
//       <QrCode className="h-8 w-8 text-primary" />
//       <span>دليلي</span>
//     </Link>
//   );
// }

