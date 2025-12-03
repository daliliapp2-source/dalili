import { Instagram, MessageCircle, Twitter, Facebook } from "lucide-react";
import { ProfileData } from "@/types/template";

interface ProfileTemplate7Props {
  data: ProfileData;
}

export const ProfileTemplate7 = ({ data }: ProfileTemplate7Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-3xl mx-auto">
        {/* Magazine Style */}
        <div className="bg-white">
          <div className="relative h-96 overflow-hidden">
            <img src={data.banner} alt="Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-8 right-8">
              <img src={data.logo} alt={data.name} className="w-24 h-24 rounded-2xl border-4 border-white shadow-2xl" />
            </div>
          </div>

          <div className="px-8 py-12">
            <div className="border-r-4 border-gray-900 pr-6 mb-8">
              <h1 className="text-6xl font-black text-gray-900 mb-4 leading-tight">{data.name}</h1>
              <p className="text-2xl text-gray-600 leading-relaxed">{data.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">معلومات الاتصال</h3>
                <div className="space-y-3">
                  <p className="text-gray-900 text-lg">{data.address}</p>
                  <p className="text-gray-900 text-lg" dir="ltr">{data.phone}</p>
                  <p className="text-gray-900 text-lg" dir="ltr">{data.email}</p>
                </div>
              </div>

              {data.workingHours && (
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">ساعات العمل</h3>
                  <p className="text-gray-900 text-2xl font-bold mb-2">{data.workingHours.days}</p>
                  <p className="text-gray-600 text-xl">{data.workingHours.hours}</p>
                </div>
              )}
            </div>

            <div className="border-t-2 border-gray-900 pt-8">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">تابعنا</h3>
              <div className="flex gap-4">
                {data.social.instagram && (
                  <a href={`https://instagram.com/${data.social.instagram}`} className="w-12 h-12 border-2 border-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                )}
                {data.social.whatsapp && (
                  <a href={`https://wa.me/${data.social.whatsapp}`} className="w-12 h-12 border-2 border-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </a>
                )}
                {data.social.twitter && (
                  <a href={`https://twitter.com/${data.social.twitter}`} className="w-12 h-12 border-2 border-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                )}
                {data.social.facebook && (
                  <a href={`https://facebook.com/${data.social.facebook}`} className="w-12 h-12 border-2 border-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors">
                    <Facebook className="w-6 h-6" />
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
