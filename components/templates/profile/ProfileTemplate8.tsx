import { Instagram, MessageCircle, Twitter, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";
import { ProfileData } from "@/types/template";

interface ProfileTemplate8Props {
  data: ProfileData;
}

export const ProfileTemplate8 = ({ data }: ProfileTemplate8Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[300px,1fr] gap-6">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <img src={data.logo} alt={data.name} className="w-full aspect-square rounded-2xl object-cover mb-4" />
              <h1 className="text-3xl font-black text-gray-900 mb-2">{data.name}</h1>
              <p className="text-gray-600">{data.description}</p>
            </div>

            {data.workingHours && (
              <div className="bg-white rounded-3xl p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <h3 className="font-bold text-gray-900">أوقات العمل</h3>
                </div>
                <p className="text-gray-900 font-bold mb-1">{data.workingHours.days}</p>
                <p className="text-gray-600">{data.workingHours.hours}</p>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">معلومات الاتصال</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-2xl">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">العنوان</p>
                    <p className="text-gray-900 font-medium">{data.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-cyan-50 rounded-2xl">
                  <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">الهاتف</p>
                    <p className="text-gray-900 font-medium" dir="ltr">{data.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-2xl">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">البريد الإلكتروني</p>
                    <p className="text-gray-900 font-medium" dir="ltr">{data.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">تواصل معنا</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {data.social.instagram && (
                  <a href={`https://instagram.com/${data.social.instagram}`} className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex flex-col items-center justify-center text-white hover:scale-105 transition-transform shadow-lg">
                    <Instagram className="w-8 h-8 mb-2" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                )}
                {data.social.whatsapp && (
                  <a href={`https://wa.me/${data.social.whatsapp}`} className="aspect-square bg-green-500 rounded-2xl flex flex-col items-center justify-center text-white hover:scale-105 transition-transform shadow-lg">
                    <MessageCircle className="w-8 h-8 mb-2" />
                    <span className="text-sm font-medium">WhatsApp</span>
                  </a>
                )}
                {data.social.twitter && (
                  <a href={`https://twitter.com/${data.social.twitter}`} className="aspect-square bg-blue-400 rounded-2xl flex flex-col items-center justify-center text-white hover:scale-105 transition-transform shadow-lg">
                    <Twitter className="w-8 h-8 mb-2" />
                    <span className="text-sm font-medium">Twitter</span>
                  </a>
                )}
                {data.social.facebook && (
                  <a href={`https://facebook.com/${data.social.facebook}`} className="aspect-square bg-blue-600 rounded-2xl flex flex-col items-center justify-center text-white hover:scale-105 transition-transform shadow-lg">
                    <Facebook className="w-8 h-8 mb-2" />
                    <span className="text-sm font-medium">Facebook</span>
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
