import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import AuthButtons, { DynamicLogoLink } from "@/components/auth-buttons/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "دليلي",
  description: "ملفات تعريف رقمية مميزة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* {to be done } */}
          <nav className="bg-white text-black flex items-center justify-between p-6 md:px-11 lg:px-20 relative z-20">
         
   
            <DynamicLogoLink />

          <ul >

            <li>
            <AuthButtons />
                
            </li>

          </ul>



         </nav>




        {children}
 <Toaster position="top-center" richColors closeButton />

      </body>
    </html>
  );
}
