import { NextResponse } from "next/server";
import { decryptSlug } from "@/lib/slug-crypto";

export async function GET(
   request: Request,
  context: { params: { slug: string } }

) {
  try {
    const { slug } = context.params;
  
    const payload = decryptSlug(slug);


    const userId = payload.uid;
    const profileId = payload.pid;

    const jsonUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/public_profiles/${encodeURIComponent(userId)}/${encodeURIComponent(profileId)}.json`;
   
    return NextResponse.json({ url: jsonUrl });
  } catch (err: any) {
    return new NextResponse(JSON.stringify({ error: "invalid_slug", details: err.message }), { status: 400 });
  }
}
