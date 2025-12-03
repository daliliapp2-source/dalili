// ----------- CLIENT COMPONENT -----------
"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { User } from "@supabase/supabase-js";
import { QrCode } from "lucide-react";
import { logoutAction } from "./server";


export function ClientMenu({ user, isFree }: {
  
    user: User ;
  isFree: boolean;
//  logoutAction: any;

}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          {!!user.user_metadata?.avatar_url && (
            <Image
              src={user.user_metadata.avatar_url}
              width={32}
              height={32}
              alt="user avatar"
            />
          )}

          <AvatarFallback>
            {(user.user_metadata?.name || user.email)?.[0]}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent>

        {/* USER DATA */}
        <DropdownMenuLabel>
          <div>{user.user_metadata?.name || "-"}</div>
          <div className="text-xs opacity-70">{user.email}</div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* DASHBOARD */}
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="w-full">لوحة التحكم</Link>
        </DropdownMenuItem>

        {/* ITEMS — ONLY IF NOT FREE */}
        {!isFree && (
          <DropdownMenuItem asChild>
            <Link href="/items" className="w-full">العناصر</Link>
          </DropdownMenuItem>
        )}

        {/* THEMES STORE */}
        <DropdownMenuItem asChild>
          <Link href="/themes" className="w-full">متجر القوالب</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* LOGOUT */}
           <DropdownMenuItem asChild>
          <form action={logoutAction} className="w-full">
            <button type="submit" className="w-full text-left">
              تسجيل الخروج
            </button>
          </form>
        </DropdownMenuItem>
        {/* <DropdownMenuItem>
        <form action={logoutAction} className="w-full">
            <button type="submit" className="w-full text-right">
            تسجيل الخروج
            </button>
        </form>
        </DropdownMenuItem> */}




         {/* <DropdownMenuItem asChild>

        <Link href="/auth/logout" className="w-full"> تسجيل الخروج</Link>
       
        </DropdownMenuItem> */}

        {/* <form action={logoutAction}>
          <LogoutButton />
        </form> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


export  function LinkLogo({ href }: { href: string }) {
  return (
    <Link href={href} className="text-2xl font-bold flex gap-2 items-center">
      {/* <QrCode className="h-8 w-8 text-primary" /> */}
       <Image 
        src="/bdqr.png" // استبدل بالمسار الصحيح للصورة في public أو assets
        alt="Logo"
        width={32}   // 8 * 4px = 32px، نفس حجم h-8
        height={32}  // نفس الحجم عشان ما يتشوهش
        className="object-contain"
      />
      <span>دليلي</span>
    </Link>
  );
}
