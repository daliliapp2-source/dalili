import { createClient as createSupabaseClient } from '@supabase/supabase-js' // 🚨 استيراد العميل العادي
import { createBrowserClient, createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export const createClient = async () => {
  // انتظر الكوكيز قبل ما تستخدمها
  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options)
            })
          } catch {
            // Next.js API routes لا تسمح بتعديل الكوكيز هنا
          }
        },
      },
    }
  )


  return supabase
}





// export async function createCliento() {
//   const cookieStore = await cookies()
//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return cookieStore.getAll()
//         },
//         setAll(cookiesToSet) {
//           try {
//             cookiesToSet.forEach(({ name, value, options }) =>
//               cookieStore.set(name, value, options)
//             )
//           } catch {
//             // The `setAll` method was called from a Server Component.
//             // This can be ignored if you have middleware refreshing
//             // user sessions.
//           }
//         },
//       },
//     }
//   )
// }








// export function createClientx() {
//     return createBrowserClient(
//         process.env.NEXT_PUBLIC_SUPABASE_URL!,
//         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
//     )
// }

// export const createActionClient =async () => {
//   const cookieStore =await cookies()

//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll: () => cookieStore.getAll(),
//         // setAll فارغة لتجنب التعارض في Server Actions
//         setAll: () => {
//           return
//         }, 
//       },
//     }
//   )

// }

// export const createClientWithAuthHeader = async () => {
    
//     // 1. إنشاء العميل الأساسي الذي يقرأ الكوكيز
//     const supabaseBase = await createClient(); // دالتك القديمة التي تستخدم createServerClient

//     // 2. استخلاص الجلسة ورمز الوصول
//     const { data: { session } } = await supabaseBase.auth.getSession();
    
//     if (!session || !session.access_token) {
//         // إذا لم يكن هناك جلسة، نرجع عميل عادي بدون مصادقة (كـ anon)
//         return createSupabaseClient(
//             process.env.NEXT_PUBLIC_SUPABASE_URL!,
//             process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//             { auth: { persistSession: false } }
//         );
//     }
    
//     // 3. إنشاء عميل جديد بحقن الهيدر
//     return createSupabaseClient(
//         process.env.NEXT_PUBLIC_SUPABASE_URL!,
//         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//         {
//             auth: { persistSession: false }, // لا نحتاج لحفظ الجلسة
//             global: {
//                 headers: {
//                     // 💡 حقن الـ Token هنا
//                     'Authorization': `Bearer ${session.access_token}`,
//                 },
//             },
//         }
//     );
// }

/// الاختبار الجديد 
// ملف: createClient.ts أو المسار الذي توجد به الدالة
// ملف: createClient.ts أو المسار الذي توجد به الدالة

//import { createServerClient } from '@supabase/ssr'

// import { cookies } from 'next/headers'

// export const createClient = async () => {
//   const cookieStore =await cookies()
  
//   // 🚨 الخطوة 1: طباعة كل الكوكيز التي وجدتها
//   const allCookies = cookieStore.getAll();
//   console.log("--- All Cookies Read by createClient ---");
//   console.log(allCookies); // ابحث عن 'sb-access-token' و 'sb-refresh-token' هنا
//   console.log("---------------------------------------");

//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           // 🚨 الخطوة 2: طباعة الكوكيز التي تم تمريرها للـ Supabase SDK
//           // هذا يضمن أن الدالة تعرف أي كوكيز تستخدم
//           console.log("Passing Cookies to Supabase SDK:", allCookies.length);
//           return allCookies; 
//         },
//         setAll() {
//           return
//         },
//       },
//     }
//   )

//   return supabase
// }