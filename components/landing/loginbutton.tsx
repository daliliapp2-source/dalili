// import Link from "next/link";
// import React from "react";
// // import { useAuth } from "@/context/auth";

// interface LoginButtonProps {
//   title: string;
// }

// const LoginButton = ({ title }: LoginButtonProps) => {
// //   const auth = useAuth();

//   return (
//     <Link
//       href={auth.isLoggedIn ? "/profile" : "/login"}
//       color={auth.isLoggedIn ? "primary" : "white"}
//       className="rounded-full px-4 py-2 text-sm font-medium"
//     >
//       {title}
//     </Link>
//   );
// };

// export default LoginButton;



// 'use client'
// import React from 'react'

// export default function GoogleSignInButton() {
//   const handleSignIn = async () => {
//     await supabase
//     .auth.signInWithOAuth({
//       provider: 'google',
//       options: {
//         // redirectTo يجب أن يكون نفس الّذي ضفته في Google OAuth و في redirect allow list
//         redirectTo: `${window.location.origin}/auth/callback`
//       }
//     })
//     // تلقائياً سيتم إعادة توجيه المستخدم إلى Google
//   }

//   return (
//     <button onClick={handleSignIn} style={{ padding: '8px 12px', borderRadius: 6 }}>
//       تسجيل الدخول بـ Google
//     </button>
//   )
// }


'use client'
import { Button } from '@/components/ui/button'


interface LoginButtonProps {
  title: string;
}

export default function LoginButton({ title }: LoginButtonProps) {




  return (
    <Button
      onClick={() => (window.location.href = '/auth/login')}
      className="w-full bg-blue-500 hover:bg-green-600 text-white"
    >
     {title}
    </Button>
  )
}

export  function LogoutButton() {
  const handleLogout = () => {
    window.location.href = '/auth/logout'
  }

  return (
    <button
      onClick={handleLogout}
      className="p-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600"
    >
      تسجيل الخروج
    </button>
  )
}