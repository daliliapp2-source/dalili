// // app/components/AuthButtons.tsx
// import { createClient } from "@/lib/supabase/server";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import Image from "next/image";
// import Link from "next/link";

// // ----------- SERVER ACTION (LOGOUT) -----------
// export async function logoutAction() {
//   "use server";

//   const supabase = await createClient();
//   await supabase.auth.signOut();
//   return { success: true };
// }

// // ----------- SERVER COMPONENT -----------
// export default async function AuthButtons() {
//   const supabase = await createClient();
//   const { data } = await supabase.auth.getUser();
//   const user = data?.user;

//   if (!user) return null;

//   // plan: "free" | "pro" ... حسب ما انت مضيف metadata
//   const isFree = user.user_metadata?.plan === "free";

//   return <ClientMenu user={user} isFree={isFree} />;
// }

// // ----------- CLIENT COMPONENT -----------
// "use client";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";

// function ClientMenu({ user, isFree }) {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger>
//         <Avatar>
//           {!!user.user_metadata?.avatar_url && (
//             <Image
//               src={user.user_metadata.avatar_url}
//               width={32}
//               height={32}
//               alt="user avatar"
//             />
//           )}

//           <AvatarFallback>
//             {(user.user_metadata?.name || user.email)?.[0]}
//           </AvatarFallback>
//         </Avatar>
//       </DropdownMenuTrigger>

//       <DropdownMenuContent>

//         {/* USER DATA */}
//         <DropdownMenuLabel>
//           <div>{user.user_metadata?.name || "بدون اسم"}</div>
//           <div className="text-xs opacity-70">{user.email}</div>
//         </DropdownMenuLabel>

//         <DropdownMenuSeparator />

//         {/* DASHBOARD */}
//         <DropdownMenuItem asChild>
//           <Link href="/dashboard" className="w-full">لوحة التحكم</Link>
//         </DropdownMenuItem>

//         {/* ITEMS — ONLY IF NOT FREE */}
//         {!isFree && (
//           <DropdownMenuItem asChild>
//             <Link href="/items" className="w-full">العناصر</Link>
//           </DropdownMenuItem>
//         )}

//         {/* THEMES STORE */}
//         <DropdownMenuItem asChild>
//           <Link href="/themes" className="w-full">متجر القوالب</Link>
//         </DropdownMenuItem>

//         <DropdownMenuSeparator />

//         {/* LOGOUT */}
//         <form action={logoutAction}>
//           <LogoutButton />
//         </form>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

// function LogoutButton() {
//   const { pending } = useFormStatus();

//   return (
//     <button
//       type="submit"
//       className="w-full text-left px-2 py-1 cursor-pointer"
//       disabled={pending}
//     >
//       {pending ? "جاري تسجيل الخروج..." : "تسجيل الخروج"}
//     </button>
//   );
// }
