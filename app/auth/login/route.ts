import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

export async function GET() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  })

  if (error) {
    console.error(error)
    return new Response('Authentication error', { status: 400 })
  }

  // Supabase بيرجعلك URL جاهز تروح عليه
 return NextResponse.redirect(data.url)
// return redirect(data.url)
}
