import { Instagram, MessageCircle, Twitter, Facebook } from "lucide-react";
import { ProfileData } from "@/types/template";

interface ProfileTemplate9Props {
  data: ProfileData;
}

export const ProfileTemplate9 = ({ data }: ProfileTemplate9Props) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Brutalist Design */}
        <div className="border-8 border-yellow-400 m-4">
          <div className="bg-yellow-400 p-8 border-b-8 border-black">
            <div className="flex items-center gap-6">
              <img src={data.logo} alt={data.name} className="w-32 h-32 border-8 border-black" />
              <div>
                <h1 className="text-6xl font-black text-black uppercase mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>
                  {data.name}
                </h1>
                <p className="text-xl text-black font-bold">{data.description}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border-4 border-black p-6 bg-gray-50">
                <h3 className="text-2xl font-black uppercase mb-4 bg-black text-white p-2">معلومات</h3>
                <div className="space-y-3 text-lg">
                  <p className="font-bold">📍 {data.address}</p>
                  <p className="font-bold" dir="ltr">📞 {data.phone}</p>
                  <p className="font-bold" dir="ltr">✉️ {data.email}</p>
                </div>
              </div>

              {data.workingHours && (
                <div className="border-4 border-black p-6 bg-yellow-400">
                  <h3 className="text-2xl font-black uppercase mb-4 bg-black text-white p-2">أوقات العمل</h3>
                  <p className="text-2xl font-black mb-2">{data.workingHours.days}</p>
                  <p className="text-xl font-bold">{data.workingHours.hours}</p>
                </div>
              )}
            </div>

            <div className="border-4 border-black p-6 bg-black">
              <h3 className="text-2xl font-black uppercase mb-6 text-yellow-400">تابعنا</h3>
              <div className="grid grid-cols-4 gap-4">
                {data.social.instagram && (
                  <a href={`https://instagram.com/${data.social.instagram}`} className="aspect-square bg-yellow-400 border-4 border-white flex items-center justify-center hover:bg-white hover:border-yellow-400 transition-colors">
                    <Instagram className="w-10 h-10 text-black" />
                  </a>
                )}
                {data.social.whatsapp && (
                  <a href={`https://wa.me/${data.social.whatsapp}`} className="aspect-square bg-yellow-400 border-4 border-white flex items-center justify-center hover:bg-white hover:border-yellow-400 transition-colors">
                    <MessageCircle className="w-10 h-10 text-black" />
                  </a>
                )}
                {data.social.twitter && (
                  <a href={`https://twitter.com/${data.social.twitter}`} className="aspect-square bg-yellow-400 border-4 border-white flex items-center justify-center hover:bg-white hover:border-yellow-400 transition-colors">
                    <Twitter className="w-10 h-10 text-black" />
                  </a>
                )}
                {data.social.facebook && (
                  <a href={`https://facebook.com/${data.social.facebook}`} className="aspect-square bg-yellow-400 border-4 border-white flex items-center justify-center hover:bg-white hover:border-yellow-400 transition-colors">
                    <Facebook className="w-10 h-10 text-black" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
