import { Instagram, MessageCircle, Twitter, Facebook, Youtube, Clock } from "lucide-react";
import { ProfileData } from "@/types/template";

interface ProfileTemplate4Props {
  data: ProfileData;
}

export const ProfileTemplate4 = ({ data }: ProfileTemplate4Props) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 opacity-30">
          <img src={data.banner} alt="Banner" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        
        <div className="relative z-10 text-center px-4">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.5)]">
            <img src={data.logo} alt={data.name} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {data.name}
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl mx-auto">{data.description}</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-yellow-400/20">
            <h3 className="text-yellow-400 text-sm font-bold mb-4 uppercase tracking-wider">معلومات الاتصال</h3>
            <div className="space-y-4">
              <p className="text-lg">📍 {data.address}</p>
              <p className="text-lg" dir="ltr">📞 {data.phone}</p>
              <p className="text-lg" dir="ltr">✉️ {data.email}</p>
            </div>
          </div>

          {data.workingHours && (
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-2xl text-black">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-6 h-6" />
                <h3 className="text-sm font-bold uppercase tracking-wider">أوقات العمل</h3>
              </div>
              <p className="text-2xl font-bold mb-2">{data.workingHours.days}</p>
              <p className="text-xl">{data.workingHours.hours}</p>
            </div>
          )}
        </div>

        {/* Social Media */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {data.social.instagram && (
            <a href={`https://instagram.com/${data.social.instagram}`} className="group relative w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center overflow-hidden hover:scale-110 transition-transform">
              <Instagram className="w-8 h-8 text-white relative z-10" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
          )}
          {data.social.whatsapp && (
            <a href={`https://wa.me/${data.social.whatsapp}`} className="group relative w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center overflow-hidden hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-white relative z-10" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
          )}
          {data.social.twitter && (
            <a href={`https://twitter.com/${data.social.twitter}`} className="group relative w-16 h-16 bg-blue-400 rounded-xl flex items-center justify-center overflow-hidden hover:scale-110 transition-transform">
              <Twitter className="w-8 h-8 text-white relative z-10" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
          )}
          {data.social.facebook && (
            <a href={`https://facebook.com/${data.social.facebook}`} className="group relative w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center overflow-hidden hover:scale-110 transition-transform">
              <Facebook className="w-8 h-8 text-white relative z-10" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
          )}
          {data.social.youtube && (
            <a href={`https://youtube.com/${data.social.youtube}`} className="group relative w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center overflow-hidden hover:scale-110 transition-transform">
              <Youtube className="w-8 h-8 text-white relative z-10" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
