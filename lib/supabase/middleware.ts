// import { createServerClient, type CookieOptions } from '@supabase/ssr'
// import { NextResponse, type NextRequest } from 'next/server'

// export async function updateSession(request: NextRequest) {
//   let response = NextResponse.next({
//     request: {
//       headers: request.headers,
//     },
//   })


//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         get(name: string) {
//           return request.cookies.get(name)?.value
//         },
//         set(name: string, value: string, options: CookieOptions) {
//           request.cookies.set({
//             name,
//             value,
//             ...options,
//           })
//           response = NextResponse.next({
//             request: {
//               headers: request.headers,
//             },
//           })
//           response.cookies.set({
//             name,
//             value,
//             ...options,
//           })
//         },
//         remove(name: string, options: CookieOptions) {
//           request.cookies.set({
//             name,
//             value: '',
//             ...options,
//           })
//           response = NextResponse.next({
//             request: {
//               headers: request.headers,
//             },
//           })
//           response.cookies.set({
//             name,
//             value: '',
//             ...options,
//           })
//         },
//       },
//     }
//   )




//   await supabase.auth.getUser()

//   return response
// }




// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import { createClient } from './server'

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