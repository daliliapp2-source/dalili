import { Instagram, MessageCircle, Twitter, Facebook } from "lucide-react";
import { ProfileData } from "@/types/template";

interface ProfileTemplate2Props {
  data: ProfileData;
}

export const ProfileTemplate2 = ({ data }: ProfileTemplate2Props) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-md mx-auto">
        {/* Minimal Header */}
        <div className="pt-12 pb-6 px-6">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-200">
            <img src={data.logo} alt={data.name} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-light text-center text-gray-900 mb-2">{data.name}</h1>
          <p className="text-center text-gray-600 text-sm leading-relaxed px-4">{data.description}</p>
        </div>

        {/* Clean Info Sections */}
        <div className="px-6 space-y-4">
          <div className="py-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-1">العنوان</p>
            <p className="text-gray-900">{data.address}</p>
          </div>
          
          <div className="py-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-1">الهاتف</p>
            <p className="text-gray-900" dir="ltr">{data.phone}</p>
          </div>
          
          <div className="py-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-1">البريد الإلكتروني</p>
            <p className="text-gray-900" dir="ltr">{data.email}</p>
          </div>

          {data.workingHours && (
            <div className="py-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-1">أوقات العمل</p>
              <p className="text-gray-900">{data.workingHours.days}</p>
              <p className="text-gray-600 text-sm mt-1">{data.workingHours.hours}</p>
            </div>
          )}

          {/* Minimal Social */}
          <div className="py-6 border-t border-gray-200 flex justify-center gap-6">
            {data.social.instagram && (
              <a href={`https://instagram.com/${data.social.instagram}`} className="text-gray-400 hover:text-gray-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {data.social.whatsapp && (
              <a href={`https://wa.me/${data.social.whatsapp}`} className="text-gray-400 hover:text-gray-900 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            )}
            {data.social.twitter && (
              <a href={`https://twitter.com/${data.social.twitter}`} className="text-gray-400 hover:text-gray-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {data.social.facebook && (
              <a href={`https://facebook.com/${data.social.facebook}`} className="text-gray-400 hover:text-gray-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
