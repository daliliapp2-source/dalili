import { Instagram, MessageCircle, Twitter, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { ProfileData } from "@/types/template";

interface ProfileTemplate5Props {
  data: ProfileData;
}

export const ProfileTemplate5 = ({ data }: ProfileTemplate5Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100">
      <div className="max-w-md mx-auto">
        {/* Card Design */}
        <div className="m-4 bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header with Banner */}
          <div className="relative h-48 bg-gradient-to-br from-pink-400 to-purple-500">
            <img src={data.banner} alt="Banner" className="w-full h-full object-cover mix-blend-overlay" />
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2">
              <div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                <img src={data.logo} alt={data.name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-16 pb-8 px-6">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">{data.name}</h1>
            <p className="text-center text-gray-600 leading-relaxed mb-6">{data.description}</p>

            {/* Contact Cards */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-gray-700">{data.address}</p>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-gray-700" dir="ltr">{data.phone}</p>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-gray-700" dir="ltr">{data.email}</p>
              </div>
            </div>

            {data.workingHours && (
              <div className="mb-6 p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl text-white text-center">
                <p className="font-bold text-lg mb-1">{data.workingHours.days}</p>
                <p className="text-sm opacity-90">{data.workingHours.hours}</p>
              </div>
            )}

            {/* Social Icons */}
            <div className="flex justify-center gap-3">
              {data.social.instagram && (
                <a href={`https://instagram.com/${data.social.instagram}`} className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              )}
              {data.social.whatsapp && (
                <a href={`https://wa.me/${data.social.whatsapp}`} className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
              )}
              {data.social.twitter && (
                <a href={`https://twitter.com/${data.social.twitter}`} className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
              )}
              {data.social.facebook && (
                <a href={`https://facebook.com/${data.social.facebook}`} className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
