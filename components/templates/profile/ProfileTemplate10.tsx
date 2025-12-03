import { Instagram, MessageCircle, Twitter, Facebook, Sparkles } from "lucide-react";
import { ProfileData } from "@/types/template";

interface ProfileTemplate10Props {
  data: ProfileData;
}

export const ProfileTemplate10 = ({ data }: ProfileTemplate10Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Floating Card */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="text-center mb-10">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-75" />
              <img 
                src={data.logo} 
                alt={data.name} 
                className="relative w-36 h-36 rounded-full border-4 border-white shadow-2xl"
              />
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 mb-4">
              {data.name}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">{data.description}</p>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="group bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all">
              <p className="text-sm text-white/60 mb-2">📍 العنوان</p>
              <p className="text-white font-medium group-hover:text-purple-200 transition-colors">{data.address}</p>
            </div>
            <div className="group bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all">
              <p className="text-sm text-white/60 mb-2">📞 الهاتف</p>
              <p className="text-white font-medium group-hover:text-pink-200 transition-colors" dir="ltr">{data.phone}</p>
            </div>
            <div className="group bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all">
              <p className="text-sm text-white/60 mb-2">✉️ البريد</p>
              <p className="text-white font-medium group-hover:text-purple-200 transition-colors" dir="ltr">{data.email}</p>
            </div>
          </div>

          {data.workingHours && (
            <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white text-center shadow-xl">
              <p className="text-2xl font-black mb-2">{data.workingHours.days}</p>
              <p className="text-lg font-medium">{data.workingHours.hours}</p>
            </div>
          )}

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-4">
            {data.social.instagram && (
              <a href={`https://instagram.com/${data.social.instagram}`} className="group relative w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg overflow-hidden">
                <Instagram className="w-8 h-8 text-white relative z-10" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
            )}
            {data.social.whatsapp && (
              <a href={`https://wa.me/${data.social.whatsapp}`} className="group relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg overflow-hidden">
                <MessageCircle className="w-8 h-8 text-white relative z-10" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
            )}
            {data.social.twitter && (
              <a href={`https://twitter.com/${data.social.twitter}`} className="group relative w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg overflow-hidden">
                <Twitter className="w-8 h-8 text-white relative z-10" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
            )}
            {data.social.facebook && (
              <a href={`https://facebook.com/${data.social.facebook}`} className="group relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg overflow-hidden">
                <Facebook className="w-8 h-8 text-white relative z-10" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
