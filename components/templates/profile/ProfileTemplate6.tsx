import { Instagram, MessageCircle, Twitter, Facebook, Youtube, Smile } from "lucide-react";
import { ProfileData } from "@/types/template";

interface ProfileTemplate6Props {
  data: ProfileData;
}

export const ProfileTemplate6 = ({ data }: ProfileTemplate6Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
      <div className="max-w-4xl mx-auto p-6">
        {/* Glassmorphism Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <img 
                src={data.logo} 
                alt={data.name} 
                className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center border-4 border-white">
                <Smile className="w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-black text-white mb-3">{data.name}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">{data.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <p className="text-sm text-white/70 mb-1">📍 العنوان</p>
              <p className="text-white font-medium">{data.address}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <p className="text-sm text-white/70 mb-1">📞 الهاتف</p>
              <p className="text-white font-medium" dir="ltr">{data.phone}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <p className="text-sm text-white/70 mb-1">✉️ البريد</p>
              <p className="text-white font-medium" dir="ltr">{data.email}</p>
            </div>
          </div>

          {data.workingHours && (
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 text-center text-white font-bold text-xl mb-8">
              {data.workingHours.days} • {data.workingHours.hours}
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-4">
            {data.social.instagram && (
              <a href={`https://instagram.com/${data.social.instagram}`} className="group relative overflow-hidden w-14 h-14 bg-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Instagram className="w-7 h-7 text-pink-600 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            )}
            {data.social.whatsapp && (
              <a href={`https://wa.me/${data.social.whatsapp}`} className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <MessageCircle className="w-7 h-7 text-green-600" />
              </a>
            )}
            {data.social.twitter && (
              <a href={`https://twitter.com/${data.social.twitter}`} className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Twitter className="w-7 h-7 text-blue-500" />
              </a>
            )}
            {data.social.facebook && (
              <a href={`https://facebook.com/${data.social.facebook}`} className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Facebook className="w-7 h-7 text-blue-700" />
              </a>
            )}
            {data.social.youtube && (
              <a href={`https://youtube.com/${data.social.youtube}`} className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                <Youtube className="w-7 h-7 text-red-600" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
