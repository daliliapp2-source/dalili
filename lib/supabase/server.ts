

/*
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookieOptions: {

        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // The [set](cci:1://file:///c:/Users/elmos/Desktop/work/Rifle/Dalili/dalili/lib/supabase/server.ts:14:9-22:9) method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.delete({ name, value: '', ...options })
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}

// utils/supabaseServer.ts
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr' // أو '@supabase/auth-helpers-nextjs' حسب اللي عندك
// تأكّد إن الاستيراد يتطابق مع الحزمة اللي مركّبها عندك

export function createClient() {
  const cookieStore = cookies()

  // تحويل كل الكوكيز لــ Record<string, string>
  const getAll = async () => {
    const all = (await cookieStore).getAll()
    const map: Record<string, string> = {}
    all.forEach((c) => {
      // في بعض البيئات قيمة الكوكي ممكن تكون undefined — نتجنّبها
      if (c?.name) map[c.name] = c?.value ?? ''
    })
    return map
  }

  // setAll يتوقع object يحط كل الكوكيز دفعة واحدة
  const setAll = (cookieMap: Record<string, string>) => {
    // نحذف كل الكوكيز الحالية أولًا (اختياري، بحسب سلوك المكتبة)
    // ثم نضيف القيم الجديدة
    Object.entries(cookieMap).forEach(([name, value]) => {
      // Next.js cookies().set تقبل كائن أو وسيطين حسب النسخة
      cookieStore.set(name, value)
    })
  }

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      // الميزة هنا: نمرّر getAll و setAll بدلاً من get/set/remove
      cookies: {
        getAll,
        setAll,
      },
      // يمكنك إضافة cookieEncoding أو cookieOptions لو احتجت
    }
  )
}


import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'

export async function createClient() {
  const  cookieStore  = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // ✅ الشكل الجديد المتوافق مع Next.js 15+ و16
        getAll() {
          const all = cookieStore.getAll()
          const result: Record<string, string> = {}
          all.forEach((cookie) => {
            result[cookie.name] = cookie.value
          })
          return result
        },
        setAll(cookiesToSet) {
          Object.entries(cookiesToSet).forEach(([name, value]) => {
            cookieStore.set(name, value)
          })
        },
      },
    }
  )
}

*/



// اللي شغاله تمام ما عدا الاستورج 
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


// export const supabaseStorageClient =async () => {
//   // انتظر الكوكيز قبل ما تستخدمها
//   const cookieStore = await cookies()

//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return cookieStore.getAll()
//         },
//         setAll(cookiesToSet) {
//           try {
//             cookiesToSet.forEach(({ name, value, options }) => {
//               cookieStore.set(name, value, options)
//             })
//           } catch {
//             // Next.js API routes لا تسمح بتعديل الكوكيز هنا
//           }
//         },
//       },
//       db: { schema: 'public' },
//       auth: { persistSession: false },
//       // 🚨 تمرير الـ JWT يدوياً ليتضمنه في الـ Storage Requests
//       global: {
//           headers: {
//               Authorization: `Bearer ${session.access_token}`,
//           },
//       },
//     }
//   )




//   return supabase
// }




export async function createCliento() {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}








export function createClientx() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
}

export const createActionClient =async () => {
  const cookieStore =await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        // setAll فارغة لتجنب التعارض في Server Actions
        setAll: () => {
          return
        }, 
      },
    }
  )

}

export const createClientWithAuthHeader = async () => {
    
    // 1. إنشاء العميل الأساسي الذي يقرأ الكوكيز
    const supabaseBase = await createClient(); // دالتك القديمة التي تستخدم createServerClient

    // 2. استخلاص الجلسة ورمز الوصول
    const { data: { session } } = await supabaseBase.auth.getSession();
    
    if (!session || !session.access_token) {
        // إذا لم يكن هناك جلسة، نرجع عميل عادي بدون مصادقة (كـ anon)
        return createSupabaseClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            { auth: { persistSession: false } }
        );
    }
    
    // 3. إنشاء عميل جديد بحقن الهيدر
    return createSupabaseClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            auth: { persistSession: false }, // لا نحتاج لحفظ الجلسة
            global: {
                headers: {
                    // 💡 حقن الـ Token هنا
                    'Authorization': `Bearer ${session.access_token}`,
                },
            },
        }
    );
}

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