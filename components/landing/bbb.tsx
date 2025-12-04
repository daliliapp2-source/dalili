// import { MessageCircle } from "lucide-react";
// import { useMemo } from "react";

// export default function WhatsAppContactButton() {
//   // حساب الأيام المتبقية من الشهر
//   const daysLeft = useMemo(() => {
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     const currentMonth = today.getMonth();

//     const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
//     const diff = lastDayOfMonth.getDate() - today.getDate();

//     return diff;
//   }, []);

//   return (
//     <div className="flex flex-col items-center gap-2">
//       <a
//         href="https://wa.me/+201023340549" // ← ضع رقمك هنا
//         target="_blank"
//         rel="noopener noreferrer"
//         className="
//           group flex items-center gap-3
//           px-6 py-3 rounded-2xl
//           font-semibold text-white text-lg
//           bg-linear-to-r from-green-500 via-green-600 to-emerald-600
//           shadow-lg shadow-green-500/30
//           hover:shadow-green-500/50 hover:scale-[1.05]
//           active:scale-95 transition-all duration-300
//         "
//       >
//         <span
//           className="
//             flex items-center justify-center w-10 h-10 rounded-full
//             bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition
//           "
//         >
//           <MessageCircle className="w-6 h-6 text-white" />
//         </span>

//         <span className="drop-shadow-sm">تواصل معنا الآن</span>
//       </a>

//       {/* الجملة المطلوبة */}
//       <p className="text-sm text-gray-600 mt-1">
//          فقط لمدة <span className="font-semibold text-green-700">{daysLeft} يوم</span>  

//       </p>
//     </div>
//   );
// }


import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppContactButton() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // حساب الوقت المتبقي حتى نهاية الشهر
  const calculateTimeLeft = () => {
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const diff = endOfMonth.getTime() - now.getTime();

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <a
        href="https://wa.me/+201023340549" // ← ضع رقم الواتساب هنا
        target="_blank"
        rel="noopener noreferrer"
        className="
          group flex items-center gap-3
          px-6 py-3 rounded-2xl
          font-semibold text-white text-lg
          bg-linear-to-r from-green-500 via-green-600 to-emerald-600
          shadow-lg shadow-green-500/30
          hover:shadow-green-500/50 hover:scale-[1.05]
          active:scale-95 transition-all duration-300
        "
      >
        <span
          className="
            flex items-center justify-center w-10 h-10 rounded-full
            bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition
          "
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </span>

        <span className="drop-shadow-sm">تواصل معنا الآن</span>
      </a>

      {/* العد التنازلي */}
      <p className="text-sm text-gray-700 font-medium mt-1">
        حتي فقط لمدة  
        <span className="text-green-700 font-semibold mx-1">
          {timeLeft.days} يوم — {timeLeft.hours} ساعة — {timeLeft.minutes} دقيقة — {timeLeft.seconds} ثانية
        </span>
       
      </p>
    </div>
  );
}
