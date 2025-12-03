import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (!code) return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/`)

  const supabase = await createClient()
  const { data, error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) {
    console.error(error)
 return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/`)  }
// بعد نجاح تسجيل الدخول، Supabase يخزن الكوكيز تلقائيًا في response
  const response = NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`)

  return response
  // لو كله تمام نرجع المستخدم للصفحة الرئيسية (أو الداشبورد)
  // return redirect('/dashboard')
}
