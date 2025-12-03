// import { type NextRequest } from 'next/server'
// import { updateSession } from './lib/supabase/middleware'

// export async function middleware(request: NextRequest) {
//   return await updateSession(request)
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * Feel free to modify this pattern to include more paths.
//      */
//     '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
//   ],
// }


// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { createClient } from './lib/supabase/client'

// export async function middleware(request: NextRequest) {
//   const supabase = await createClient()
//   const { data: { user } } = await supabase.auth.getUser()

//   const url = request.nextUrl.clone()

//   // لو المستخدم داخل login أو home ومافيش جلسة → يسمح
//   if (!user && (url.pathname === '/' || url.pathname === '/login')) {
//     return NextResponse.next()
//   }

//   // لو المستخدم مسجل دخول وحاول يروح لصفحة login → نحوله للداشبورد
//   if (user && (url.pathname === '/' || url.pathname === '/login')) {
//     return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`)
//   }

//   // لو المستخدم ما مسجلش دخول وحاول يدخل صفحات محمية → نحوله للصفحة الرئيسية
//   if (!user && url.pathname !== '/' && url.pathname !== '/login') {
//     return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/`)
//   }

//   return NextResponse.next()
// }

// // تحديد الصفحات اللي ينطبق عليهم middleware
// export const config = {
//   matcher: ['/', '/login', '/dashboard', '/auth/:path*'],
// }



// /middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from './lib/supabase/server'

export async function middleware(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const url = request.nextUrl.clone()

  if (!user && (url.pathname === '/' || url.pathname === '/login' || 
      url.pathname.startsWith('/auth'))) {
    return NextResponse.next()
  }

  if (user && (url.pathname === '/' || url.pathname === '/login'
   
   // || url.pathname.startsWith('/auth')
    
    )) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`)
  }

  if (!user) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/`)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
     '/',
     '/login',
      '/dashboard', 
      '/items', 
      '/profile/add', 
      '/profile/edit/:id', 
      '/themes', 
      '/auth/:path*'
    
    
    ],
}
