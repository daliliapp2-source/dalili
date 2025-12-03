import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createClient()
  await supabase.auth.signOut() // يمسح الكوكيز وجلسة المستخدم
  
  const response = NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/`);
  


  // مسح الكوكيز تمامًا
  response.cookies.delete('sb-access-token')
  response.cookies.delete('sb-refresh-token')

  return response
}
