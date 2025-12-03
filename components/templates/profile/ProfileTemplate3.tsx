import { Instagram, MessageCircle, Twitter, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { ProfileData } from "@/types/template";

interface ProfileTemplate3Props {
  data: ProfileData;
}

export const ProfileTemplate3 = ({ data }: ProfileTemplate3Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-5xl mx-auto p-4 md:p-8">
        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Image & Logo */}
          <div className="space-y-6">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src={data.banner} alt="Banner" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl -mt-20 bg-white">
                <img src={data.logo} alt={data.name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right Side - Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">{data.name}</h1>
              <p className="text-xl text-gray-700 leading-relaxed">{data.description}</p>
            </div>

            <div className="space-y-4 bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{data.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-gray-700" dir="ltr">{data.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-gray-700" dir="ltr">{data.email}</p>
              </div>
            </div>

            {data.workingHours && (
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-lg">
                <p className="text-2xl font-bold mb-2">{data.workingHours.days}</p>
                <p className="text-xl">{data.workingHours.hours}</p>
              </div>
            )}

            <div className="flex gap-4">
              {data.social.instagram && (
                <a href={`https://instagram.com/${data.social.instagram}`} className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <Instagram className="w-6 h-6 text-pink-600" />
                </a>
              )}
              {data.social.whatsapp && (
                <a href={`https://wa.me/${data.social.whatsapp}`} className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </a>
              )}
              {data.social.twitter && (
                <a href={`https://twitter.com/${data.social.twitter}`} className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <Twitter className="w-6 h-6 text-blue-500" />
                </a>
              )}
              {data.social.facebook && (
                <a href={`https://facebook.com/${data.social.facebook}`} className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <Facebook className="w-6 h-6 text-blue-700" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
