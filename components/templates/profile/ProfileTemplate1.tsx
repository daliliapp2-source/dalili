import { Instagram, MessageCircle, Twitter, Facebook, Youtube } from "lucide-react";
import { ProfileData } from "@/types/template";
import { Card } from "@/components/ui/card";

interface ProfileTemplate1Props {
  data: ProfileData;
}

export const ProfileTemplate1 = ({ data }: ProfileTemplate1Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Banner */}
      <div className="relative h-64 overflow-hidden">
        <img src={data.banner} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80" />
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white">
            <img src={data.logo} alt={data.name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Info Card */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8 text-white">
          <h1 className="text-4xl font-bold text-center mb-3">{data.name}</h1>
          <p className="text-lg text-center text-gray-200 mb-6">{data.description}</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-2 text-gray-200">
              <span>📍</span>
              <span>{data.address}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-200">
              <span>📞</span>
              <span dir="ltr">{data.phone}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-200">
              <span>✉️</span>
              <span dir="ltr">{data.email}</span>
            </div>
          </div>

          {data.workingHours && (
            <div className="text-center mb-8 p-4 bg-white/10 rounded-lg">
              <p className="text-lg font-semibold mb-1">{data.workingHours.days}</p>
              <p className="text-gray-200">{data.workingHours.hours}</p>
            </div>
          )}

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-4">
            {data.social.instagram && (
              <a href={`https://instagram.com/${data.social.instagram}`} className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6 text-white" />
              </a>
            )}
            {data.social.whatsapp && (
              <a href={`https://wa.me/${data.social.whatsapp}`} className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </a>
            )}
            {data.social.twitter && (
              <a href={`https://twitter.com/${data.social.twitter}`} className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter className="w-6 h-6 text-white" />
              </a>
            )}
            {data.social.facebook && (
              <a href={`https://facebook.com/${data.social.facebook}`} className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6 text-white" />
              </a>
            )}
            {data.social.youtube && (
              <a href={`https://youtube.com/${data.social.youtube}`} className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Youtube className="w-6 h-6 text-white" />
              </a>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};
