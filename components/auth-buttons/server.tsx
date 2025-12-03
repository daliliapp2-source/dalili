'use server';
import { createClient } from "@/lib/supabase/server";
import {ClientMenu, LinkLogo} from "./client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
// import { createClient } from "../../lib/supabase/server";


// ----------- SERVER COMPONENT -----------
export default async function AuthButtons() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data?.user;

  if (!user) return;
// احضار الاشتراك
  const { data: subscription } = await supabase
    .from("user_subscriptions")
    .select("*")
    .eq("user_id", user.id)
    .single();

  const isFree = subscription?.type === "free";
  // plan: "free" | "pro" ... حسب ما انت مضيف metadata



  return <ClientMenu user={user} isFree={isFree} />;
}


export  async function DynamicLogoLink() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data?.user;

  // لو فيه يوزر → Dashboard
  // لو مفيش → الصفحة الرئيسية
  const linkHref = user ? "/dashboard" : "/";

  return <LinkLogo href={linkHref} />;
}




export async function logoutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  // Revalidate UI fully
  revalidatePath("/", "layout");


  redirect("/");
}


// export async function logoutAction() {
//   const supabase = await createClient();
//   await supabase.auth.signOut();
//  // const response = NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/`);
//   redirect("/");
// }

/////////////////////// ظبط ازرار التنقل + بداية العلم علي الصفحات 
