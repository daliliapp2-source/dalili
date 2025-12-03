'use client'

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { BarChart2, Clock, Download, Eye, FileText, PlusCircle, Users, Utensils } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Card, CardHeader, CardTitle, CardFooter, CardContent, CardDescription } from "@/components/ui/card"
import { Pencil, Trash2 } from "lucide-react"
import { confirmPayment, CurrentPlan, deleteProfile, getUserPayments, ProfileData } from "../actions/servaction"
import { Progress } from "@/components/ui/progress"
import { m, motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { GeneralResponse } from "@/lib/db/repo"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ar";

dayjs.extend(relativeTime);
dayjs.locale("ar");

interface Props {
  profiles: ProfileData[]
  currentPlan: CurrentPlan
  actions: ActionsProp
}

interface Propsprofilecard {
  profile: ProfileData
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onView: (id: string) => void;
isloading: boolean
 // onQRdownload: (id: string) => void;
handleAsync: (id: string) => void;
}
interface Propsplancard {
  planName: string
  profilesUsed: number
  profilesLimit: number
  itemsUsed: number
  itemsLimit: number
  daysUntilRenewal: number
  amount: number

}

type ActionsProp = {
 
  acyncProfile: (id: string) => Promise<GeneralResponse>;
  //qrProfile: (id: string) => Promise<GeneralResponse>;
  deleteProfile: (id: string) => Promise<GeneralResponse>;
 // updateall: () => Promise<any>;
};



// function CompactPlanCard({ planName, profilesUsed, profilesLimit, itemsUsed, itemsLimit, daysUntilRenewal, amount }: Propsplancard) {
// const [editMode, setEditMode] = useState(false);
// const [renewMode, setRenewMode] = useState(false);

// // Slider state
// const [profilesCount, setProfilesCount] = useState(profilesUsed);
// const [itemsCount, setItemsCount] = useState(itemsUsed);

// // الحد الأقصى
// const maxProfiles = 20;
// const maxItems = 200;

// // حساب السعر تلقائيًا
// const calculatePrice = (profiles: number, items: number, months: number = 1) => {
//   return (100 + profiles * 20 + items * 2) * months;
// };
// const [processing, setProcessing] = useState(false);
//   const [visibleTime, setVisibleTime] = useState<number | null>(null);

// const [months, setMonths] = useState(1);
// const [price, setPrice] = useState(calculatePrice(profilesCount, itemsCount, months));
// const [showPaymentHistory, setShowPaymentHistory] = useState(false);
// const [paymentHistory, setPaymentHistory] = useState<any[]>([]);
// const [showPaymentDialog, setShowPaymentDialog] = useState(false);
// const [phoneNumber, setPhoneNumber] = useState("");
// const [selectedCash, setSelectedCash] = useState<"vodafone" | "etisalat" | "instapay" | null>(null);
// const [receiptFile, setReceiptFile] = useState<File | null>(null);
// // تحديث السعر عند تعديل القيم
// useEffect(() => {
//   setPrice(calculatePrice(profilesCount, itemsCount, months));
// }, [profilesCount, itemsCount, months]);


// const getnumber = (selectedCash : "vodafone" | "etisalat" | "orange" | null) => {
//   switch (selectedCash) {
//     case "vodafone":
//       return " 01012345678";
//     case "etisalat":
//       return " 01123456789";
//     case "orange":
//       return " 0123456789";
//     default:
//       return "";
//   }
// }
// function getGiftLink(method: string) {
//   switch (method) {
//     case "vodafone": return "http://vf.eg/vfcash?id=mt&qrId=83YxKc";
//     case "etisalat": return "https://flous.page.link/cFzU";
//    // case "orange": return "https://your-link-orange.com";
//     case "instapay": return "https://ipn.eg/S/mohamed.alnasser1229/instapay/4S5QjL";
//     default: return "#";
//   }
// }

// const validatePayment= () : GeneralResponse  => {


// //   if (!phoneNumber || phoneNumber.length !== 11) {
// //     return {
// //   status: false,
// //   data: null,
// //   error: "رقم الهاتف يجب أن يكون 11 رقم"
// // };

// //   }

//   if (!selectedCash) {
//   return {
//   status: false,
//   data: null,
//   error: "يجب اختيار طريقة الدفع"
// };
   
//   }

//   if (!receiptFile) {return {
//   status: false,
//   data: null,
//   error: "يجب رفع صورة إيصال الدفع"
// };
   
   
//   }
//   return {
//   status: true,
//   data: null,
//   error:null
// };
   
// };


// type CashMethod = "vodafone" | "etisalat" | "instapay";

// const CASH_METHODS: { key: CashMethod; label: string; color: string }[] = [
//   { key: "vodafone", label: "فودافون", color: "red-500" },
//   { key: "etisalat", label: "E&-money", color: "green-500" },
//   //{ key: "orange", label: "أورنج", color: "orange-500" },
//   { key: "instapay", label: "InstaPay", color: "blue-500" },
// ];








//   return (
//     <Card className="bg-linear-to-r from-primary/5 to-primary/10 border-primary/20">
//       <CardHeader className="pb-3">
//         <div className="flex items-center justify-between">
//           <div>
//             <CardTitle className="text-lg">{planName}</CardTitle>
//             <p className="text-sm text-muted-foreground">{amount}/"شهر"</p>
//           </div>
//           <div className="flex items-center text-sm text-muted-foreground">
//             <Clock className="h-4 w-4 mr-1" />
//             <span> {daysUntilRenewal}  {'يوم متبقي'} </span>
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent className="space-y-4">

//         {/* Profiles Usage */}
// {!editMode && (
//   <div className="space-y-2">
//     <div className="flex items-center justify-between text-sm">
//       <div className="flex items-center">
//         <Users className="h-4 w-4 mr-2 text-primary" />
//         <span>{'الملفات'}</span>
//       </div>
//       <span className="font-medium">{profilesUsed}/{profilesLimit}</span>
//     </div>
//     <Progress value={(profilesUsed / profilesLimit) * 100} className="h-2"  />
//   </div>
// )}
//         {/* Items Usage */}
//  { (!editMode && planName === 'الخطة المدفوعة') && (
//              <div className="space-y-2">
//           <div className="flex items-center justify-between text-sm">
//             <div className="flex items-center">
//               <FileText className="h-4 w-4 mr-2 text-primary" />
//               <span>{'قائمة العناصر'}</span>
//             </div>
//             <span className="font-medium">{itemsUsed}/{itemsLimit}</span>
//           </div>
//           <Progress value={(itemsUsed / itemsLimit) * 100} className="h-2" />
//         </div>
//          ) }

//      {editMode && (
//   <div className="space-y-4 mt-4">
//     <div>
//       <label className="text-sm font-medium">عدد البروفايلات: {profilesCount}</label>
//       <input
//         type="range"
//         min={profilesUsed}
//         max={maxProfiles}
//         value={profilesCount}
//         onChange={(e) => setProfilesCount(Number(e.target.value))}
//         className="w-full"
//       />
//     </div>

//     <div>
//       <label className="text-sm font-medium">عدد العناصر: {itemsCount}</label>
//       <input
//         type="range"
//         min={itemsUsed}
//         max={maxItems}
//         value={itemsCount}
//         onChange={(e) => setItemsCount(Number(e.target.value))}
//         className="w-full"
//       />
//     </div>

//     <div className="flex justify-between items-center">
//       <label className="text-sm font-medium">عدد الأشهر: </label>
//       <input
//         type="number"
//         min={1}
//         value={months}
//         onChange={(e) => setMonths(Number(e.target.value))}
//         className="w-16 border rounded px-2 py-1"
//       />
//     </div>

//     <p className="text-sm font-semibold">السعر الشهري: {price} جنيه</p>

//     <Button className="w-full" onClick={() => setShowPaymentDialog(true)}>
//       إتمام العملية
//     </Button>
//   </div>
// )}



//       </CardContent>

// <CardFooter className="mt-auto flex flex-col gap-2">
//   <div className="flex gap-2 mt-4 justify-end w-full">
//     <Button
//       size="sm"
//       className={`${
//         editMode ? "bg-red-100 text-red-800 hover:bg-red-200" : "bg-blue-100 text-blue-800 hover:bg-blue-200"
//       }`}
//       onClick={() => {
//         if (editMode) {
//           setEditMode(false);
//           setProfilesCount(profilesUsed);
//           setItemsCount(itemsUsed);
//           setMonths(1);
//           setPrice(calculatePrice(profilesUsed, itemsUsed, 1));
//         } else {
//           setEditMode(true);
//           setProfilesCount(Math.max(profilesUsed, 1));
//           setItemsCount(Math.max(itemsUsed, 1));
//           setMonths(1);
//           setPrice(calculatePrice(Math.max(profilesUsed, 1), Math.max(itemsUsed, 1), 1));
//         }
//       }}
//       disabled={processing}
//     >
//       {editMode ? "إلغاء" : "تغيير "}
//     </Button>

//     <Button
//       size="sm"
//       className="bg-green-100 text-green-800 hover:bg-green-200"
//       onClick={() => {
//         setProfilesCount(Math.max(profilesUsed, 1));
//         setItemsCount(Math.max(itemsUsed, 1));
//         setMonths(1);
//         setPrice(calculatePrice(Math.max(profilesUsed, 1), Math.max(itemsUsed, 1), 1));
//         setShowPaymentDialog(true);
//       }}
//       disabled={processing}
//     >
//       تجديد 
//     </Button>

//     <Button
//       size="sm"
//       variant="outline"
//       onClick={async () => {
//         try {
//           const data = await getUserPayments();
//           setPaymentHistory(data || []);
//           setShowPaymentHistory(true);
//         } catch (err) {
//           toast.error("حدث خطأ أثناء جلب المدفوعات");
//         }
//       }}
//     >
//       عرض المدفوعات
//     </Button>
//   </div>
// </CardFooter>


// {/* 
// {showPaymentDialog && (
//   <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//     <div className="bg-white p-6 rounded shadow-lg w-96">
//       <h2 className="text-lg font-bold mb-4">إتمام الدفع</h2>

//       <p>عدد البروفايلات: {profilesCount}</p>
//       <p>عدد العناصر: {itemsCount}</p>
//       <p>عدد الأشهر: {months}</p>
//       <p>الإجمالي: {price} جنيه</p>

//       <div className="mt-4 space-y-2">
//         <label>رقم الهاتف:</label>
//         <input
//           type="tel"
//           value={phoneNumber}
//           onChange={(e) => {
//     const value = e.target.value.replace(/\D/g, ""); // يحذف أي حرف غير رقم
//     setPhoneNumber(value);
//   }}
//           className="w-full border rounded px-2 py-1"
//         />
//       </div>
//       {selectedCash && (
//   <p className="text-sm text-muted-foreground mt-1">
//     {selectedCash === "vodafone" && "رقم فودافون كاش: 01012345678"}
//     {selectedCash === "etisalat" && "رقم اتصالات كاش: 01123456789"}
//     {selectedCash === "orange" && "رقم اورنج كاش: 0123456789"}
//   </p>
// )}

//       <div className="mt-4 flex gap-2">
//         <button
//           className={`p-2 border rounded ${selectedCash === "vodafone" ? "bg-red-500 text-white" : ""}`}
//           onClick={() => setSelectedCash("vodafone")}
//         >
//           Vodafone Cash
//         </button>
//         <button
//           className={`p-2 border rounded ${selectedCash === "etisalat" ? "bg-green-500 text-white" : ""}`}
//           onClick={() => setSelectedCash("etisalat")}
//         >
//           Etisalat Cash
//         </button>
//         <button
//           className={`p-2 border rounded ${selectedCash === "orange" ? "bg-orange-500 text-white" : ""}`}
//           onClick={() => setSelectedCash("orange")}
//         >
//           Orange Cash
//         </button>
//       </div>

//       <div className="mt-4">
//         <label>رفع صورة الإيصال:</label>
//         <input type="file" onChange={(e) => setReceiptFile(e.target.files?.[0] ?? null)} />
//       </div>

//       <div className="mt-6 flex justify-end gap-2">
//         <Button variant="outline" onClick={() => setShowPaymentDialog(false)}>إلغاء</Button>
//         <Button
//           onClick={async() => {
// setProcessing(true);

//             // حفظ البيانات في DB أو إرسالها لاحقاً
// try {
  
//             const res =  await confirmPayment({
//         profilesCount,
//         itemsCount,
//         months,
//         price,
//         phoneNumber,
//         selectedCash: selectedCash!,
//         recieverphoneNumber : 
//       getnumber(selectedCash)
//         // recieverphoneNumber
        
//         ,
//         imageFile: receiptFile
//                     });
      

//  if (res) {
  
//             console.log({ profilesCount, itemsCount, months, phoneNumber, selectedCash, receiptFile });
//             setShowPaymentDialog(false);
//             toast.success("تم حفظ بيانات الدفع بنجاح");
//  }
// else {
//   console.error(res);
//   toast.error("حدث خطأ في حفظ بيانات الدفع");
// }

// } catch (error) {
//   console.error(error);
//   toast.error("حدث خطأ في حفظ بيانات الدفع");
// }finally{
//   setProcessing(false);
// }

//           }}
//         >
//           تأكيد الدفع
//         </Button>
//       </div>
//     </div>
//   </div>
// )} */}





// {showPaymentDialog && (
//   <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//     <Card className="w-full max-w-md rounded-2xl shadow-xl border border-primary/20">
      
//       <CardHeader>
//         <CardTitle className="text-xl font-bold text-center">💳 إتمام الدفع</CardTitle>
//         <p className="text-center text-muted-foreground text-sm">
//           يرجى مراجعة بيانات الباقة قبل تأكيد العملية
//         </p>
//       </CardHeader>

//       <CardContent className="space-y-4">

//         {/* Summary */}
//         <div className="bg-primary/5 p-4 rounded-xl space-y-1">
//           <div className="flex justify-between text-sm"><span>عدد البروفايلات:</span><span>{profilesCount}</span></div>
//           <div className="flex justify-between text-sm"><span>عدد العناصر:</span><span>{itemsCount}</span></div>
//           <div className="flex justify-between text-sm"><span>عدد الأشهر:</span><span>{months}</span></div>
//           <div className="flex justify-between font-semibold text-primary">
//             <span>الإجمالي:</span><span>{price} جنيه</span>
//           </div>
//         </div>

//         {/* CASH Buttons */}
//         <div className="space-y-2">
//           <label className="text-sm font-medium">اختر طريقة الدفع:</label>

//           <div className="grid grid-cols-3 gap-2">

//             {/* {[
//               { key: "vodafone", label: "فودافون", color: "red-500" },
//               { key: "etisalat", label: "اتصالات", color: "green-500" },
//               { key: "orange", label: "أورنج", color: "orange-500" },
//               { key: "instapay", label: "انستا باي", color: "blue-500" },
//             ].map((cash) => (
//               <button
//                 key={cash.key}
//                 onClick={() => setSelectedCash(cash.key)}
//                 className={`p-2 rounded-xl border text-sm transition ${
//                   selectedCash === cash.key
//                     ? `bg-${cash.color} text-white border-${cash.color.replace("500","600")}`
//                     : "bg-white hover:bg-gray-100"
//                 }`}
//               >
//                 {cash.label}
//               </button>
//             ))} */}

// {CASH_METHODS.map((cash) => (
//   <button
//     key={cash.key}
//     onClick={() => setSelectedCash(cash.key)} // خلاص دلوقتي مفيش error
//     className={`p-2 rounded-xl border text-sm transition ${
//       selectedCash === cash.key
//         ? `bg-${cash.color} text-white`
//         : "bg-white hover:bg-gray-100"
//     }`}
//   >
//     {cash.label}
//   </button>
// ))}



//           </div>
//         </div>

//         {/* QR + Link */}
//         {selectedCash && (
//           <div className="space-y-2 text-center">

//             <img
//               src={`/qr/${selectedCash}.png`}
//               alt="QR Code"
//               className="w-40 mx-auto rounded-lg shadow-md border"
//             />

//             <a
//               href={getGiftLink(selectedCash)}
//               target="_blank"
//               className="inline-block mt-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 text-sm"
//             >
//               فتح الرابط المخصص 🎁
//             </a>
//           </div>
//         )}

//         {/* Receipt */}
//         <div>
//           <label className="text-sm font-medium mb-1 block">رفع إيصال الدفع:</label>

//           <label className="w-full cursor-pointer flex items-center justify-center gap-2 border rounded-lg py-3 text-sm bg-gray-50 hover:bg-gray-100 transition">
//             <input
//               type="file"
//               className="hidden"
//               onChange={(e) => setReceiptFile(e.target.files?.[0] ?? null)}
//             />
//             <span className="material-icons">upload</span>
//             <span>{receiptFile ? "تم اختيار ملف" : "اضغط لاختيار صورة الإيصال"}</span>
//           </label>
//         </div>

//       </CardContent>

//       <CardFooter className="flex justify-end gap-2">
//         <Button variant="outline" onClick={() => setShowPaymentDialog(false)}>
//           إلغاء
//         </Button>

//         <Button
//           onClick={async () => {
//             const resc = validatePayment();
//             if (!resc.status) return toast.error(resc.error);
//             setProcessing(true);
//             if (selectedCash === null) return toast.error("يجب اختيار طريقة الدفع");
//             try {
//               const res = await confirmPayment({
//                 profilesCount,
//                 itemsCount,
//                 months,
//                 price,
//                 selectedCash,
//               //  recieverphoneNumber: getnumber(selectedCash),
//                 imageFile: receiptFile,
//               });

//               if (res) {
//                 setReceiptFile(null);
//                 setShowPaymentDialog(false);
//                 toast.success("تم حفظ بيانات الدفع بنجاح");
//               } else toast.error("حدث خطأ أثناء حفظ البيانات");

//             } catch (err) {
//               setReceiptFile(null);
//               console.error(err);
//               toast.error("حدث خطأ أثناء العملية");
//             } finally {
//               setReceiptFile(null);
//               setProcessing(false);
//             }
//           }}
//         >
//           {processing ? "جاري المعالجة..." : "تأكيد الدفع"}
//         </Button>
//       </CardFooter>

//     </Card>
//   </div>
// )}























// {/* تاناتناتن */}




// {/* 
//    {showPaymentHistory && (
//   <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//     <div className="bg-white p-6 rounded shadow-lg w-96 max-h-[80vh] overflow-y-auto">
//       <h2 className="text-lg font-bold mb-4">المدفوعات السابقة</h2>
//       {paymentHistory.length === 0 ? (
//         <p>لا توجد مدفوعات سابقة</p>
//       ) : (
//         <div className="space-y-2">
//           {paymentHistory.map((p, idx) => (
//             <div key={idx} className="border p-2 rounded">
//               <p>عدد البروفايلات: {p.profiles_count}</p>
//               <p>عدد العناصر: {p.items_count}</p>
//               <p>عدد الأشهر: {p.months}</p>
//               <p>السعر: {p.price} جنيه</p>
//               <p>طريقة الدفع: {p.cash_type}</p>
//               <p>رقم الهاتف: {p.phone_number}</p>
//               <p> الحالة: {p.isPinding?"قيد الانتظار":"مكتمل"}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       <div className="mt-4 flex justify-end">
//         <Button variant="outline" onClick={() => setShowPaymentHistory(false)}>إغلاق</Button>
//       </div>
//     </div>
//   </div>
// )} */}

//    {showPaymentHistory && (
//   <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//     <Card className="w-full max-w-md rounded-2xl shadow-xl border border-primary/20 max-h-[85vh] overflow-hidden">
//       <CardHeader>
//         <CardTitle className="text-xl font-bold text-center">📜 المدفوعات السابقة</CardTitle>
//         <p className="text-center text-muted-foreground text-sm">عرض جميع عمليات الدفع السابقة</p>
//       </CardHeader>

//       <CardContent className="space-y-3 overflow-y-auto max-h-[60vh] pr-2">
//         {paymentHistory.length === 0 ? (
//           <p className="text-center text-muted-foreground py-6">لا توجد مدفوعات سابقة</p>
//         ) : (


//           // paymentHistory.map((p, idx) => (
//           //   <div key={idx} className="border p-3 rounded-xl bg-primary/5 shadow-sm">
            
              
//           //       <button
//           //         onClick={() =>
//           //           setVisibleTime(visibleTime === idx ? null : idx)
//           //         }
//           //         className="absolute top-2 left-2 bg-background/90 border rounded-full p-1 shadow-sm hover:bg-primary/10 transition"
//           //       >
//           //        {visibleTime === idx ? (
//           //           <span className="text-[11px] text-muted-foreground px-2">
//           //             {dayjs(p.payment_date).fromNow()}
//           //           </span>
//           //         ) : (
//           //           <Clock size={14} className="text-muted-foreground" />
//           //         )}
//           //       </button>
//           //     <div className="flex justify-between text-sm"><span>البروفايلات:</span><span>{p.profiles_count}</span></div>
//           //     <div className="flex justify-between text-sm"><span>العناصر:</span><span>{p.items_count}</span></div>
//           //     <div className="flex justify-between text-sm"><span>الأشهر:</span><span>{p.months}</span></div>

//           //     <div className="flex justify-between font-semibold mt-2">
//           //       <span>السعر:</span>
//           //       <span className="text-primary">{p.amount} جنيه</span>
//           //     </div>

//           //     <div className="flex justify-between text-sm mt-2">
//           //       <span>طريقة الدفع:</span><span>{p.cash_type}</span>
//           //     </div>

//           //     <div className="flex justify-between text-sm mt-1">
//           //       <span>رقم الهاتف:</span><span>{p.phone_number}</span>
//           //     </div>

//           //     <div className={`mt-2 text-center px-2 py-1 rounded-lg text-sm ${
//           //       p.isPinding ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"
//           //     }`}>
//           //       {p.isPinding ? "قيد المراجعة" : "مكتمل"}
//           //     </div>
//           //   </div>
//           // ))
// paymentHistory.map((p, idx) => (
//   <div key={idx} className="border p-3 rounded-xl bg-primary/5 shadow-sm relative">
//     <button
//       onClick={() => setVisibleTime(visibleTime === idx ? null : idx)}
//       className="absolute top-2 left-1/2 -translate-x-1/2 bg-background/90 border rounded-full p-1 shadow-sm hover:bg-primary/10 transition text-blue-500"
//     >
//       {visibleTime === idx ? (
//         <span className="text-[11px] px-2">
//           {dayjs(p.payment_date).fromNow()}
//         </span>
//       ) : (
//         <Clock size={14} className="text-blue-500" />
//       )}
//     </button>

//     <div className="flex justify-between text-sm"><span>البروفايلات:</span><span>{p.profiles_count}</span></div>
//     <div className="flex justify-between text-sm"><span>العناصر:</span><span>{p.items_count}</span></div>
//     <div className="flex justify-between text-sm"><span>الأشهر:</span><span>{p.months}</span></div>

//     <div className="flex justify-between font-semibold mt-2">
//       <span>السعر:</span>
//       <span className="text-primary">{p.amount} جنيه</span>
//     </div>

//     <div className="flex justify-between text-sm mt-2">
//       <span>طريقة الدفع:</span><span>{p.cash_type}</span>
//     </div>


//     <div className={`mt-2 text-center px-2 py-1 rounded-lg text-sm ${
//       p.isPinding ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"
//     }`}>
//       {p.isPinding ? "قيد المراجعة" : "مكتمل"}
//     </div>
//   </div>
// ))


//         )}
//       </CardContent>

//       <CardFooter className="flex justify-end">
//         <Button variant="outline" onClick={() => setShowPaymentHistory(false)}>إغلاق</Button>
//       </CardFooter>
//     </Card>
//   </div>

// )}




//     </Card>
    
//   );

// }


function CompactPlanCard({
  planName,
  profilesUsed,
  profilesLimit,
  itemsUsed,
  itemsLimit,
  daysUntilRenewal,
  amount,
}: Propsplancard) {
  const [editMode, setEditMode] = useState(false);
  const [renewMode, setRenewMode] = useState(false);

  // Slider state
  const [profilesCount, setProfilesCount] = useState(profilesUsed);
  const [itemsCount, setItemsCount] = useState(itemsUsed);

  // الحد الأقصى
  const maxProfiles = 20;
  const maxItems = 200;

  // حساب السعر تلقائيًا
  const calculatePrice = (profiles: number, items: number, months: number = 1) => {
    return (100 + profiles * 20 + items * 2) * months;
  };
  const [processing, setProcessing] = useState(false);
  const [visibleTime, setVisibleTime] = useState<number | null>(null);

  const [months, setMonths] = useState(1);
  const [price, setPrice] = useState(calculatePrice(profilesCount, itemsCount, months));
  const [showPaymentHistory, setShowPaymentHistory] = useState(false);
  const [paymentHistory, setPaymentHistory] = useState<any[]>([]);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCash, setSelectedCash] = useState<"vodafone" | "etisalat" | "instapay" | null>(null);
  const [receiptFile, setReceiptFile] = useState<File | null>(null);

  // تحديث السعر عند تعديل القيم
  useEffect(() => {
    setPrice(calculatePrice(profilesCount, itemsCount, months));
  }, [profilesCount, itemsCount, months]);
useEffect(() => {
  if (!showPaymentDialog) {
    setReceiptFile(null);
    setSelectedCash(null);
  }
}, [showPaymentDialog]);

 function getGiftLink(method: string) {
  switch (method) {
    case "vodafone": return "http://vf.eg/vfcash?id=mt&qrId=83YxKc";
    case "etisalat": return "https://flous.page.link/cFzU";
   // case "orange": return "https://your-link-orange.com";
    case "instapay": return "https://ipn.eg/S/mohamed.alnasser1229/instapay/4S5QjL";
    default: return "#";
  }
}


  const validatePayment = (): GeneralResponse => {
    if (!selectedCash) {
      return {
        status: false,
        data: null,
        error: "يجب اختيار طريقة الدفع",
      };
    }

    if (!receiptFile) {
      return {
        status: false,
        data: null,
        error: "يجب رفع صورة إيصال الدفع",
      };
    }

    return {
      status: true,
      data: null,
      error: null,
    };
  };

type CashMethod = "vodafone" | "etisalat" | "instapay";

const CASH_METHODS: { key: CashMethod; label: string; color: string }[] = [
  { key: "vodafone", label: "فودافون", color: "red-500" },
  { key: "etisalat", label: "E&-money", color: "green-500" },
  //{ key: "orange", label: "أورنج", color: "orange-500" },
  { key: "instapay", label: "InstaPay", color: "blue-500" },
];


  return (
    <Card className="bg-linear-to-r from-primary/5 to-primary/10 border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{planName}</CardTitle>
            <p className="text-sm text-muted-foreground">{amount}/شهر</p>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span> {daysUntilRenewal} يوم متبقي </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Progress Bars */}
        {!editMode && (
          <div className="space-y-2">
            {/* Profiles */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                <span>الملفات</span>
              </div>
              <span className="font-medium">
                {profilesUsed}/{profilesLimit}
              </span>
            </div>
            {/* <Progress
              value={((profilesLimit - profilesUsed) / profilesLimit) * 100}
              className="h-2"
            /> */}
{/* custom RTL progress */}
{(() => {
  const percent = ((profilesLimit - profilesUsed) / profilesLimit) * 100;
  return (
    <div className="relative h-2 bg-blue-200 rounded overflow-hidden">
      {/* fill aligned to the RIGHT */}
      <div
        className="absolute top-0 bottom-0 right-0 rounded transition-all duration-300"
        style={{
          width: `${Math.max(0, Math.min(100, percent))}%`,
          background: "linear-gradient(90deg, rgba(59,130,246,1), rgba(99,102,241,1))",
          // يمكنك استبدال الخلفية باللون الأساسي لديك:
          // background: 'var(--colors-primary)'
        }}
      />
    </div>
  );
})()}
            {/* Items */}
            {planName === "الخطة المدفوعة" && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2 text-primary" />
                    <span>قائمة العناصر</span>
                  </div>
                  <span className="font-medium">
                    {itemsUsed}/{itemsLimit}
                  </span>
                </div>
                {/* <Progress
                  value={((itemsLimit - itemsUsed) / itemsLimit) * 100}
                  className="h-2 "
                /> */}

                {/* custom RTL progress */}
{(() => {
  const percent = ((itemsLimit - itemsUsed) / itemsLimit) * 100;
  return (
    <div className="relative h-2 bg-blue-200 rounded overflow-hidden">
      {/* fill aligned to the RIGHT */}
      <div
        className="absolute top-0 bottom-0 right-0 rounded transition-all duration-300"
        style={{
          width: `${Math.max(0, Math.min(100, percent))}%`,
          background: "linear-gradient(90deg, rgba(59,130,246,1), rgba(99,102,241,1))",
          // يمكنك استبدال الخلفية باللون الأساسي لديك:
          // background: 'var(--colors-primary)'
        }}
      />
    </div>
  );
})()}

              </div>
            )}
          </div>
        )}

        {/* Edit Mode */}

{/*         
        {editMode && (
          <div className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium">عدد البروفايلات: {profilesCount}</label>
              <input
                type="range"
                min={profilesUsed}
                max={maxProfiles}
                value={profilesCount}
                onChange={(e) => setProfilesCount(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium">عدد العناصر: {itemsCount}</label>
              <input
                type="range"
                min={itemsUsed}
                max={maxItems}
                value={itemsCount}
                onChange={(e) => setItemsCount(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">عدد الأشهر: </label>
              <input
                type="number"
                min={1}
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-16 border rounded px-2 py-1"
              />
            </div>

            <p className="text-sm font-semibold">السعر الشهري: {price} جنيه</p>

            <Button className="w-full" onClick={() => setShowPaymentDialog(true)}>
              إتمام العملية
            </Button>
          </div>
        )} */}
{editMode && (
  <div className="space-y-6 mt-4">

    {/* عدد البروفايلات */}
    <div className="flex justify-between items-center">
      <label className="text-sm font-medium">عدد البروفايلات:</label>
      <input
        type="number"
        min={profilesUsed}
        max={maxProfiles}
        value={profilesCount}
        onChange={(e) => {
          let val = Number(e.target.value);
          if (val > maxProfiles) val = maxProfiles;
          if (val < profilesUsed) val = profilesUsed;
          setProfilesCount(val);
        }}
        className="w-20 border rounded px-2 py-1 text-center"
      />
    </div>

    {/* <Progress value={(profilesCount / maxProfiles) * 100} className="h-2" /> */}

 <input
                type="range"
                min={profilesUsed}
                max={maxProfiles}
                value={profilesCount}
                onChange={(e) => setProfilesCount(Number(e.target.value))}
                className="w-full"
              />





    {/* عدد العناصر */}
    <div className="flex justify-between items-center">
      <label className="text-sm font-medium">عدد العناصر:</label>
      <input
        type="number"
        min={itemsUsed}
        max={maxItems}
        value={itemsCount}
        onChange={(e) => {
          let val = Number(e.target.value);
          if (val > maxItems) val = maxItems;
          if (val < itemsUsed) val = itemsUsed;
          setItemsCount(val);
        }}
        className="w-20 border rounded px-2 py-1 text-center"
      />
    </div>
    {/* <Progress value={(itemsCount / maxItems) * 100} className="h-2" /> */}

 <input
                type="range"
                min={itemsUsed}
                max={maxItems}
                value={itemsCount}
                onChange={(e) => setItemsCount(Number(e.target.value))}
                className="w-full"
              />


    {/* عدد الأشهر + الإجمالي */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium">عدد الأشهر:</label>
        <input
          type="number"
          min={1}
          value={months}
          onChange={(e) => {
            let val = Number(e.target.value);
            if (val < 1) val = 1;
            setMonths(val);
          }}
          className="w-20 border rounded px-2 py-1 text-center"
        />
      </div>
      <p className="text-sm font-semibold">الإجمالي: {price} / شهر</p>
    </div>

    <Button className="w-full" onClick={() => setShowPaymentDialog(true)}>
      إتمام العملية
    </Button>
  </div>
)}





      </CardContent>

      {/* Footer Buttons */}
      <CardFooter className="mt-auto flex flex-col gap-2">
        <div className="flex gap-2 mt-4 justify-end w-full">
          {/* تغيير */}
          <Button
            size="sm"
            className={`${
              editMode ? "bg-red-200 text-red-900 hover:bg-red-300" : "bg-blue-200 text-blue-900 hover:bg-blue-300"
            }`}
            onClick={() => {
              if (editMode) {
                setEditMode(false);
                setProfilesCount(profilesUsed);
                setItemsCount(itemsUsed);
                setMonths(1);
                setPrice(calculatePrice(profilesUsed, itemsUsed, 1));
              } else {
                setEditMode(true);
                setProfilesCount(Math.max(profilesUsed, 1));
                setItemsCount(Math.max(itemsUsed, 1));
                setMonths(1);
                setPrice(calculatePrice(Math.max(profilesUsed, 1), Math.max(itemsUsed, 1), 1));
              }
            }}
            disabled={processing}
          >
            {editMode ? "إلغاء" : "تغيير"}
          </Button>

          {/* تجديد */}
          {!editMode && (
            <Button
              size="sm"
              className="bg-green-200 text-green-900 hover:bg-green-300"
              onClick={() => {
                setProfilesCount(profilesLimit);
                setItemsCount(itemsLimit);
                setMonths(1);
                setPrice(calculatePrice(profilesLimit, itemsLimit, 1));
                setShowPaymentDialog(true);
              }}
              disabled={processing}
            >
              تجديد
            </Button>
          )}

          {/* عرض المدفوعات */}
          {!editMode && (
            <Button
              size="sm"
              className="bg-yellow-200 text-yellow-900 hover:bg-yellow-300"
              variant="outline"
              onClick={async () => {
                try {
                  const data = await getUserPayments();
                  setPaymentHistory(data || []);
                  setShowPaymentHistory(true);
                } catch (err) {
                  toast.error("حدث خطأ أثناء جلب المدفوعات");
                }
              }}
            >
              عرض المدفوعات
            </Button>
          )}
        </div>
      </CardFooter>

{/* 
{showPaymentDialog && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded shadow-lg w-96">
      <h2 className="text-lg font-bold mb-4">إتمام الدفع</h2>

      <p>عدد البروفايلات: {profilesCount}</p>
      <p>عدد العناصر: {itemsCount}</p>
      <p>عدد الأشهر: {months}</p>
      <p>الإجمالي: {price} جنيه</p>

      <div className="mt-4 space-y-2">
        <label>رقم الهاتف:</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => {
    const value = e.target.value.replace(/\D/g, ""); // يحذف أي حرف غير رقم
    setPhoneNumber(value);
  }}
          className="w-full border rounded px-2 py-1"
        />
      </div>
      {selectedCash && (
  <p className="text-sm text-muted-foreground mt-1">
    {selectedCash === "vodafone" && "رقم فودافون كاش: 01012345678"}
    {selectedCash === "etisalat" && "رقم اتصالات كاش: 01123456789"}
    {selectedCash === "orange" && "رقم اورنج كاش: 0123456789"}
  </p>
)}

      <div className="mt-4 flex gap-2">
        <button
          className={`p-2 border rounded ${selectedCash === "vodafone" ? "bg-red-500 text-white" : ""}`}
          onClick={() => setSelectedCash("vodafone")}
        >
          Vodafone Cash
        </button>
        <button
          className={`p-2 border rounded ${selectedCash === "etisalat" ? "bg-green-500 text-white" : ""}`}
          onClick={() => setSelectedCash("etisalat")}
        >
          Etisalat Cash
        </button>
        <button
          className={`p-2 border rounded ${selectedCash === "orange" ? "bg-orange-500 text-white" : ""}`}
          onClick={() => setSelectedCash("orange")}
        >
          Orange Cash
        </button>
      </div>

      <div className="mt-4">
        <label>رفع صورة الإيصال:</label>
        <input type="file" onChange={(e) => setReceiptFile(e.target.files?.[0] ?? null)} />
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <Button variant="outline" onClick={() => setShowPaymentDialog(false)}>إلغاء</Button>
        <Button
          onClick={async() => {
setProcessing(true);

            // حفظ البيانات في DB أو إرسالها لاحقاً
try {
  
            const res =  await confirmPayment({
        profilesCount,
        itemsCount,
        months,
        price,
        phoneNumber,
        selectedCash: selectedCash!,
        recieverphoneNumber : 
      getnumber(selectedCash)
        // recieverphoneNumber
        
        ,
        imageFile: receiptFile
                    });
      

 if (res) {
  
            console.log({ profilesCount, itemsCount, months, phoneNumber, selectedCash, receiptFile });
            setShowPaymentDialog(false);
            toast.success("تم حفظ بيانات الدفع بنجاح");
 }
else {
  console.error(res);
  toast.error("حدث خطأ في حفظ بيانات الدفع");
}

} catch (error) {
  console.error(error);
  toast.error("حدث خطأ في حفظ بيانات الدفع");
}finally{
  setProcessing(false);
}

          }}
        >
          تأكيد الدفع
        </Button>
      </div>
    </div>
  </div>
)} */}





{showPaymentDialog && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <Card className="w-full max-w-md rounded-2xl shadow-xl border border-primary/20">
      
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">💳 إتمام الدفع</CardTitle>
        <p className="text-center text-muted-foreground text-sm">
          يرجى مراجعة بيانات الباقة قبل تأكيد العملية
        </p>
      </CardHeader>

      <CardContent className="space-y-4">

        {/* Summary */}
        <div className="bg-primary/5 p-4 rounded-xl space-y-1">
          <div className="flex justify-between text-sm"><span>عدد البروفايلات:</span><span>{profilesCount}</span></div>
          <div className="flex justify-between text-sm"><span>عدد العناصر:</span><span>{itemsCount}</span></div>
          <div className="flex justify-between text-sm"><span>عدد الأشهر:</span><span>{months}</span></div>
          <div className="flex justify-between font-semibold text-primary">
            <span>الإجمالي:</span><span>{price} جنيه</span>
          </div>
        </div>

        {/* CASH Buttons */}
        <div className="space-y-2">
          <label className="text-sm font-medium">اختر طريقة الدفع:</label>

          <div className="grid grid-cols-3 gap-2">

            {/* {[
              { key: "vodafone", label: "فودافون", color: "red-500" },
              { key: "etisalat", label: "اتصالات", color: "green-500" },
              { key: "orange", label: "أورنج", color: "orange-500" },
              { key: "instapay", label: "انستا باي", color: "blue-500" },
            ].map((cash) => (
              <button
                key={cash.key}
                onClick={() => setSelectedCash(cash.key)}
                className={`p-2 rounded-xl border text-sm transition ${
                  selectedCash === cash.key
                    ? `bg-${cash.color} text-white border-${cash.color.replace("500","600")}`
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {cash.label}
              </button>
            ))} */}

{CASH_METHODS.map((cash) => (
  <button
    key={cash.key}
    onClick={() => setSelectedCash(cash.key)} // خلاص دلوقتي مفيش error
    className={`p-2 rounded-xl border text-sm transition ${
      selectedCash === cash.key
        ? `bg-${cash.color} text-white`
        : "bg-white hover:bg-gray-100"
    }`}
  >
    {cash.label}
  </button>
))}



          </div>
        </div>

        {/* QR + Link */}
        {selectedCash && (
          <div className="space-y-2 text-center">

            <img
              src={`/qr/${selectedCash}.png`}
              alt="QR Code"
              className="w-40 mx-auto rounded-lg shadow-md border"
            />

            <a
              href={getGiftLink(selectedCash)}
              target="_blank"
              className="inline-block mt-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 text-sm"
            >
              فتح الرابط المخصص 🎁
            </a>
          </div>
        )}

        {/* Receipt */}
        <div>
          <label className="text-sm font-medium mb-1 block">رفع إيصال الدفع:</label>

          <label className="w-full cursor-pointer flex items-center justify-center gap-2 border rounded-lg py-3 text-sm bg-gray-50 hover:bg-gray-100 transition">
            <input
              type="file"
              className="hidden"
              onChange={(e) => setReceiptFile(e.target.files?.[0] ?? null)}
            />
            <span className="material-icons">upload</span>
            <span>{receiptFile ? "تم اختيار ملف" : "اضغط لاختيار صورة الإيصال"}</span>
          </label>
        </div>

      </CardContent>

      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" onClick={() => setShowPaymentDialog(false)}>
          إلغاء
        </Button>

        <Button
          onClick={async () => {
            const resc = validatePayment();
            if (!resc.status) return toast.error(resc.error);
            setProcessing(true);
            if (selectedCash === null) return toast.error("يجب اختيار طريقة الدفع");
            try {
              const res = await confirmPayment({
                profilesCount,
                itemsCount,
                months,
                price,
                selectedCash,
              //  recieverphoneNumber: getnumber(selectedCash),
                imageFile: receiptFile,
              });

              if (res) {
                setReceiptFile(null);
                setShowPaymentDialog(false);
                toast.success("تم حفظ بيانات الدفع بنجاح");
              } else toast.error("حدث خطأ أثناء حفظ البيانات");

            } catch (err) {
              setReceiptFile(null);
              console.error(err);
              toast.error("حدث خطأ أثناء العملية");
            } finally {
              setReceiptFile(null);
              setProcessing(false);
            }
          }}
        >
          {processing ? "جاري المعالجة..." : "تأكيد الدفع"}
        </Button>
      </CardFooter>

    </Card>
  </div>
)}























{/* تاناتناتن */}




{/* 
   {showPaymentHistory && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded shadow-lg w-96 max-h-[80vh] overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">المدفوعات السابقة</h2>
      {paymentHistory.length === 0 ? (
        <p>لا توجد مدفوعات سابقة</p>
      ) : (
        <div className="space-y-2">
          {paymentHistory.map((p, idx) => (
            <div key={idx} className="border p-2 rounded">
              <p>عدد البروفايلات: {p.profiles_count}</p>
              <p>عدد العناصر: {p.items_count}</p>
              <p>عدد الأشهر: {p.months}</p>
              <p>السعر: {p.price} جنيه</p>
              <p>طريقة الدفع: {p.cash_type}</p>
              <p>رقم الهاتف: {p.phone_number}</p>
              <p> الحالة: {p.isPinding?"قيد الانتظار":"مكتمل"}</p>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4 flex justify-end">
        <Button variant="outline" onClick={() => setShowPaymentHistory(false)}>إغلاق</Button>
      </div>
    </div>
  </div>
)} */}

   {showPaymentHistory && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <Card className="w-full max-w-md rounded-2xl shadow-xl border border-primary/20 max-h-[85vh] overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-center">📜 المدفوعات السابقة</CardTitle>
        <p className="text-center text-muted-foreground text-sm">عرض جميع عمليات الدفع السابقة</p>
      </CardHeader>

      <CardContent className="space-y-3 overflow-y-auto max-h-[60vh] pr-2">
        {paymentHistory.length === 0 ? (
          <p className="text-center text-muted-foreground py-6">لا توجد مدفوعات سابقة</p>
        ) : (


          // paymentHistory.map((p, idx) => (
          //   <div key={idx} className="border p-3 rounded-xl bg-primary/5 shadow-sm">
            
              
          //       <button
          //         onClick={() =>
          //           setVisibleTime(visibleTime === idx ? null : idx)
          //         }
          //         className="absolute top-2 left-2 bg-background/90 border rounded-full p-1 shadow-sm hover:bg-primary/10 transition"
          //       >
          //        {visibleTime === idx ? (
          //           <span className="text-[11px] text-muted-foreground px-2">
          //             {dayjs(p.payment_date).fromNow()}
          //           </span>
          //         ) : (
          //           <Clock size={14} className="text-muted-foreground" />
          //         )}
          //       </button>
          //     <div className="flex justify-between text-sm"><span>البروفايلات:</span><span>{p.profiles_count}</span></div>
          //     <div className="flex justify-between text-sm"><span>العناصر:</span><span>{p.items_count}</span></div>
          //     <div className="flex justify-between text-sm"><span>الأشهر:</span><span>{p.months}</span></div>

          //     <div className="flex justify-between font-semibold mt-2">
          //       <span>السعر:</span>
          //       <span className="text-primary">{p.amount} جنيه</span>
          //     </div>

          //     <div className="flex justify-between text-sm mt-2">
          //       <span>طريقة الدفع:</span><span>{p.cash_type}</span>
          //     </div>

          //     <div className="flex justify-between text-sm mt-1">
          //       <span>رقم الهاتف:</span><span>{p.phone_number}</span>
          //     </div>

          //     <div className={`mt-2 text-center px-2 py-1 rounded-lg text-sm ${
          //       p.isPinding ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"
          //     }`}>
          //       {p.isPinding ? "قيد المراجعة" : "مكتمل"}
          //     </div>
          //   </div>
          // ))
paymentHistory.map((p, idx) => (
  <div key={idx} className="border p-3 rounded-xl bg-primary/5 shadow-sm relative">
    <button
      onClick={() => setVisibleTime(visibleTime === idx ? null : idx)}
      className="absolute top-2 left-1/2 -translate-x-1/2 bg-background/90 border rounded-full p-1 shadow-sm hover:bg-primary/10 transition text-blue-500"
    >
      {visibleTime === idx ? (
        <span className="text-[11px] px-2">
          {dayjs(p.payment_date).fromNow()}
        </span>
      ) : (
        <Clock size={14} className="text-blue-500" />
      )}
    </button>

    <div className="flex justify-between text-sm"><span>البروفايلات:</span><span>{p.profiles_count}</span></div>
    <div className="flex justify-between text-sm"><span>العناصر:</span><span>{p.items_count}</span></div>
    <div className="flex justify-between text-sm"><span>الأشهر:</span><span>{p.months}</span></div>

    <div className="flex justify-between font-semibold mt-2">
      <span>السعر:</span>
      <span className="text-primary">{p.amount} جنيه</span>
    </div>

    <div className="flex justify-between text-sm mt-2">
      <span>طريقة الدفع:</span><span>{p.cash_type}</span>
    </div>


    <div className={`mt-2 text-center px-2 py-1 rounded-lg text-sm ${
      p.isPinding ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"
    }`}>
      {p.isPinding ? "قيد المراجعة" : "مكتمل"}
    </div>
  </div>
))


        )}
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button variant="outline" onClick={() => setShowPaymentHistory(false)}>إغلاق</Button>
      </CardFooter>
    </Card>
  </div>

)}










    </Card>

  
  );
}




function ProfileCard({ profile, onDelete,
  onEdit,
  onView,
  //onQRdownload,
  handleAsync,
  isloading
}: Propsprofilecard) {


  const bannerImage = profile.banner || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3';
  const logoImage = profile.logo || 'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3';




const generateQR = async () => {
  if (!canvasRef.current) return;

  const link = `${window.location.origin}/profiles/${profile.link}`;

  const QRCode = await import("qrcode");
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  // 1. توليد QR
  await QRCode.toCanvas(canvas, link, {
    width: qrSize,
    margin: 2,
    errorCorrectionLevel: "H",
  });

  // 2. حساب مكان وحجم اللوجو
  const logoSize = qrSize * 0.28;
  const logoX = (qrSize - logoSize) / 2;
  const logoY = (qrSize - logoSize) / 2;

  // --------- خلفية دائرية بيضاء قبل رسم اللوجو ---------
  ctx.save();
  ctx.beginPath();
  ctx.arc(
    logoX + logoSize / 2,
    logoY + logoSize / 2,
    logoSize / 2,
    0,
    Math.PI * 2
  );
  ctx.fillStyle = "#ffffff"; // الخلفية البيضاء
  ctx.fill();
  ctx.restore();

  // --------- قص دائري للوجو ---------
  ctx.save();
  ctx.beginPath();
  ctx.arc(
    logoX + logoSize / 2,
    logoY + logoSize / 2,
    logoSize / 2,
    0,
    Math.PI * 2
  );
  ctx.clip();

  // تحميل اللوجو
  const logo = new Image(300, 300);
  logo.src = "/bdqr.png";
  await new Promise((resolve) => (logo.onload = resolve));

  // رسم اللوجو
  ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);

  ctx.restore();
  // --------- END قص ---------

  // 6. تحميل الصورة
  const url = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = url;
  a.download = `qr-${profile.name}.png`;
  a.click();

  setQROpen(false);
};




  const [qrOpen, setQROpen] = useState(false);
  const [qrSize, setQRSize] = useState(300);
  const canvasRef = useRef<HTMLCanvasElement>(null);





  return (
     <>
      {/* QR SIZE DIALOG */}
      <Dialog open={qrOpen} onOpenChange={setQROpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>اختر حجم رمز QR</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <Select defaultValue="300" onValueChange={(v) => setQRSize(parseInt(v))}>
              <SelectTrigger>
                <SelectValue placeholder="الحجم" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="256">256px</SelectItem>
                <SelectItem value="300">300px</SelectItem>
                <SelectItem value="512">512px</SelectItem>
                <SelectItem value="1024">1024px</SelectItem>
              </SelectContent>
            </Select>

            <canvas ref={canvasRef} className="hidden" />
          </div>

          <DialogFooter>
            <Button onClick={generateQR}>تحميل</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-32">
          <img
            src={bannerImage}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute -bottom-8 left-4">
            <Avatar className="h-16 w-16 border-4 border-background shadow-lg">
              <AvatarImage src={logoImage} alt={profile.name} />
              <AvatarFallback>{profile.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
          </div>

        </div>

        <CardHeader className="pt-10 pb-3">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg">{profile.name}</CardTitle>
          </div>
          <CardDescription className="text-xs pt-1">
            {/* المفروض هنا يكون تاريخ جلب البيانات اللي هو وقت تحديث الصفحه  */}
            {/* {'آخر تحديث: '}{profile.lastUpdated} */}
          </CardDescription>
        </CardHeader>


        <CardFooter className="flex flex-col gap-2 border-t p-3">

          <div className="grid grid-cols-2 gap-2 w-full">
            <Button variant="outline" size="sm" className="w-full" onClick={() => onView(profile.link||"")}>
              <Eye className="h-4 w-4 mr-1" />
              {'عرض'}
            </Button>
              <Button variant="outline" size="sm" className="w-full" onClick={() => onEdit(profile.id)} disabled={isloading}>
              <Pencil className="h-4 w-4 mr-1" />
              {'تعديل'}
            </Button>

            {/* <Button variant="outline" size="sm" className="w-full" onClick={() => onViewMenu(profile.id)} disabled={!profile.hasItems}>

              <Utensils className="h-4 w-4 mr-1" />
              {'القائمة'}
            </Button>
             */}
          </div>

          <div className="grid grid-cols-2 gap-2 w-full">

            {/* <Button variant="outline" size="sm" className="w-full" onClick={() => onEdit(profile.id)}>
              <Pencil className="h-4 w-4 mr-1" />
              {'تعديل'}
            </Button> */}


    {profile.isActive ? (
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() =>    
                      // sss(profile.link!)
                    setQROpen(true)
                    } 
                disabled={isloading}
              >
                <Download className="h-4 w-4 mr-1" />
                {'رمز QR'}
              </Button>
            ) : (
              <Button
                variant="destructive" // لون أحمر فاتح
                size="sm"
                className="w-full"
                onClick={() => handleAsync(profile.id)}
                 disabled={isloading}
              >
                <Download className="h-4 w-4 mr-1" />
                {'مزامنة'}
              </Button>
            )}
            
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm" className="w-full text-destructive hover:text-destructive hover:bg-destructive/10">
                  <Trash2 className="h-4 w-4 mr-1" />
                  {'حذف'}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{'هل أنت متأكد تمامًا؟'}</AlertDialogTitle>
                  <AlertDialogDescription>
                    {'لا يمكن التراجع عن هذا الإجراء. سيؤدي هذا إلى حذف ملفك الشخصي نهائيًا وإزالته من خوادمنا.'}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>{'إلغاء'}</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    onClick={() => onDelete(profile.id)}
                  >
                    {'حذف'}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div
          // className="grid grid-cols-2 gap-2 w-full"
          >


            {/* <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="sm" className="w-full text-destructive hover:text-destructive hover:bg-destructive/10">
                  <Trash2 className="h-4 w-4 mr-1" />
                  {'حذف'}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>{'هل أنت متأكد تمامًا؟'}</AlertDialogTitle>
                  <AlertDialogDescription>
                    {'لا يمكن التراجع عن هذا الإجراء. سيؤدي هذا إلى حذف ملفك الشخصي نهائيًا وإزالته من خوادمنا.'}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>{'إلغاء'}</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    onClick={() => onDelete(profile.id)}
                  >
                    {'حذف'}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog> */}
          </div>


        </CardFooter>
      </Card>
    </motion.div>
     </>
  );


}





export default function ClientDashboard({ profiles, currentPlan,actions }: Props) {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const [localProfiles, setLocalProfiles] = useState(profiles)

  const handleAdd = () => router.push("/profile/add");
  const handleopenmenu = () => router.push("/items");



const handleDelete = async (id: string) => {
    
    try {
      setLoading(true)

     const res=  await actions.deleteProfile(id);

      if (!res.status) {
        toast.error(res.error)
        setLoading(false)
        return;
      }

      toast.success('تم حذف الملف الشخصي بنجاح')
    //  setLoading(false)
      setLocalProfiles(localProfiles.filter(p => p.id !== id))

    } catch (error) {
      // console.log(error)
       setLoading(false)
      
    }finally{
       setLoading(false)
    }
   

  }


  async function handleAsynco(id: string) {
   try {
      setLoading(true)

     const res=  await actions.acyncProfile(id);

      if (!res.status) {
        toast.error(res.error)
        setLoading(false)
        return;
      }

      toast.success('تمت مزامنة الملف الشخصي بنجاح')
   window.location.reload();
    } catch (error) {
      // console.log(error)
       setLoading(false)
      
    }finally{
       setLoading(false)
    }
   

  }



  ///////
  const handleEdit = (id: string) => router.push(`/profile/edit/${id}`)

  async function handleView(slug: string) {
    router.push(`/profiles/${slug}`)
  }

  // async function handleMenuView(id: string) {
  // }


  return (
    <div className="flex flex-col gap-6 p-6 lg:p-8">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">لوحة التحكم</h1>
          <p className="text-muted-foreground">إدارة ملفاتك الشخصية</p>
        </div>
      </div>

      <CompactPlanCard {...currentPlan} />

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* هنا ممكن تحط أي بطاقات ثانية */}
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">ملفاتي الشخصية</h2>
          <div className="flex items-center justify-between mb-4 ">
            <Button size="sm" onClick={handleAdd}>
              <PlusCircle className="mr-2 h-4 w-4" /> جديد
            </Button>

         { (currentPlan.planName === 'الخطة المدفوعة') && (
            <div className="flex items-center p-2">
              <Button size="sm" onClick={handleopenmenu}>
                <PlusCircle className="mr-2 h-4 w-4" /> ادارة القائمة
              </Button>

            </div>
         ) }
           


          </div>

        </div>

        {localProfiles.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10">
            <p>لا توجد ملفات شخصية حتى الآن</p>
            <Button onClick={handleAdd}>إنشاء أول ملف شخصي</Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {localProfiles.map(profile => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onView={handleView}
                handleAsync={handleAsynco}
               // onQRdownload={handleQR}
                isloading={loading}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
