// "use client";

// import React from 'react';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Progress } from '@/components/ui/progress';
// import { Clock, Users, FileText, Star, Eye, Utensils, Share2, Download, Pencil, Trash2, BarChart2 } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Button } from '../ui/button';
// import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
// import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
// import { DashBoardProfilesData } from '@/lib/supabase/models';

// interface CompactPlanCardProps {
//   planName: string;
//   price: number;
//   billingCycle: string;
//   profilesUsed: number;
//   profilesLimit: number;
//   itemsUsed: number;
//   itemsLimit: number;
//   daysUntilRenewal: number;
// }

// // const router = useRouter();

// const CompactPlanCard = ({
//   planName,
//   price,
//   billingCycle,
//   profilesUsed,
//   profilesLimit,
//   itemsUsed,
//   itemsLimit,
//   daysUntilRenewal
// }: CompactPlanCardProps) => {
  

//   return (
//     <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
//       <CardHeader className="pb-3">
//         <div className="flex items-center justify-between">
//           <div>
//             <CardTitle className="text-lg">{planName}</CardTitle>
//             <p className="text-sm text-muted-foreground">{price}/{billingCycle}</p>
//           </div>
//           <div className="flex items-center text-sm text-muted-foreground">
//             <Clock className="h-4 w-4 mr-1" />
//             <span> {daysUntilRenewal}  {'يوم متبقي'} </span>
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         {/* Profiles Usage */}
//         <div className="space-y-2">
//           <div className="flex items-center justify-between text-sm">
//             <div className="flex items-center">
//               <Users className="h-4 w-4 mr-2 text-primary" />
//               <span>{'الملفات'}</span>
//             </div>
//             <span className="font-medium">{profilesUsed}/{profilesLimit}</span>
//           </div>
//           <Progress value={(profilesUsed / profilesLimit) * 100} className="h-2" />
//         </div>

//         {/* Items Usage */}
//         <div className="space-y-2">
//           <div className="flex items-center justify-between text-sm">
//             <div className="flex items-center">
//               <FileText className="h-4 w-4 mr-2 text-primary" />
//               <span>{'قائمة العناصر'}</span>
//             </div>
//             <span className="font-medium">{itemsUsed}/{itemsLimit}</span>
//           </div>
//           <Progress value={(itemsUsed / itemsLimit) * 100} className="h-2" />
//         </div>
//       </CardContent>
//     </Card>
//   );
// };




// interface ProfileCardProps {
//   profile: DashBoardProfilesData;
//   onDelete: (id: string) => void;
//   onEdit:(id:string)=>void;
//   onShareLink: (id: string) => void;
//   onView: (id: string) => void;
//   onViewMenu: (id: string) => void;
//   onQRdownload: (id: string) => void;
// }

// const ProfileCard: React.FC<ProfileCardProps> = ({ 
//   profile, 
//   onDelete,
//   onShareLink,
//   onEdit,
//   onView,
//   onQRdownload,
//   onViewMenu
// }) => {
  


  
//   const bannerImage = profile.banner || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3';
//   const logoImage = profile.image || 'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3';

//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       transition={{ duration: 0.2 }}
//       className="h-full"
//     >
//       <Card className="overflow-hidden h-full flex flex-col">
//         <div className="relative h-32">
//           <img 
//             src={bannerImage} 
//             alt={profile.name} 
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute -bottom-8 left-4">
//             <Avatar className="h-16 w-16 border-4 border-background shadow-lg">
//               <AvatarImage src={logoImage} alt={profile.name} />
//               <AvatarFallback>{profile.name.substring(0, 2)}</AvatarFallback>
//             </Avatar>
//           </div>
//           {profile.hasfeedback &&(
// <> 
//  <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
//             <Star className="h-3 w-3 text-yellow-500" />
//             <span>{profile.averageRating!.toFixed(1)}</span>
//           </div>
//            <div className="absolute top-10 right-2 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
//             <Eye className="h-3 w-3 text-white-500" />
//             <span>{profile.views!.toFixed(0)}</span>
//           </div>
// </>
//           )}
//           {/* <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
//             <Star className="h-3 w-3 text-yellow-500" />
//             <span>{profile.averageRating!.toFixed(1)}</span>
//           </div>
//            <div className="absolute top-10 right-2 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
//             <Eye className="h-3 w-3 text-white-500" />
//             <span>{profile.views!.toFixed(0)}</span>
//           </div> */}
         
//         </div>
        
//         <CardHeader className="pt-10 pb-3">
//           <div className="flex justify-between items-start">
//             <CardTitle className="text-lg">{profile.name}</CardTitle>
//           </div>
//           <CardDescription className="text-xs pt-1">
//             {/* المفروض هنا يكون تاريخ جلب البيانات اللي هو وقت تحديث الصفحه  */}
//             {/* {'آخر تحديث: '}{profile.lastUpdated} */}
//           </CardDescription>
//         </CardHeader>
        
//      {/* <CardContent className="pb-3 flex-grow">
//           <div className="flex items-center justify-between">
//             <div></div>
//             <div className="flex items-center gap-1 text-sm text-muted-foreground">
//               <Eye className="h-4 w-4" />
//               <span className="font-medium">{profile.views}</span>
//             </div>
//           </div>
//         </CardContent> */}
        
//         <CardFooter className="flex flex-col gap-2 border-t p-3">
//           <div className="grid grid-cols-2 gap-2 w-full">
//             <Button variant="outline" size="sm" className="w-full" onClick={()=>onView(profile.id)}>
//               <Eye className="h-4 w-4 mr-1" />
//               {'عرض'}
//             </Button>
//             <Button variant="outline" size="sm" className="w-full" onClick={()=>onViewMenu(profile.id)} disabled ={!profile.hasItems}>
             
//               <Utensils className="h-4 w-4 mr-1" />
//               {'القائمة'}
//             </Button>
//           </div>
//           <div className="grid grid-cols-2 gap-2 w-full">
//             <Button 
//               variant="outline" 
//               size="sm" 
//               className="w-full"
//               onClick={() => onShareLink(profile.id)}
//               disabled = {!profile.hasfeedback}
//             >
//               <BarChart2 className="h-4 w-4 mr-1" />
//               { 'الاحصائيات' }
//             </Button>
//             <Button 
//               variant="outline" 
//               size="sm" 
//               className="w-full"
//               onClick={() => onQRdownload(profile.id) }
//             >
//               <Download className="h-4 w-4 mr-1" />
//               {'رمز QR'}
//             </Button>
//           </div>
//           <div className="grid grid-cols-2 gap-2 w-full">
//             <Button variant="outline" size="sm" className="w-full" onClick={()=>onEdit(profile.id)}>
//               <Pencil className="h-4 w-4 mr-1" />
//               {'تعديل'}
//             </Button>
//             <AlertDialog>
//               <AlertDialogTrigger asChild>
//                 <Button variant="outline" size="sm" className="w-full text-destructive hover:text-destructive hover:bg-destructive/10">
//                   <Trash2 className="h-4 w-4 mr-1" />
//                   { 'حذف'}
//                 </Button>
//               </AlertDialogTrigger>
//               <AlertDialogContent>
//                 <AlertDialogHeader>
//                   <AlertDialogTitle>{'هل أنت متأكد تمامًا؟'}</AlertDialogTitle>
//                   <AlertDialogDescription>
//                     {'لا يمكن التراجع عن هذا الإجراء. سيؤدي هذا إلى حذف ملفك الشخصي نهائيًا وإزالته من خوادمنا.'}
//                   </AlertDialogDescription>
//                 </AlertDialogHeader>
//                 <AlertDialogFooter>
//                   <AlertDialogCancel>{'إلغاء'}</AlertDialogCancel>
//                   <AlertDialogAction
//                     className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
//                     onClick={() => onDelete(profile.id)}
//                   >
//                     {'حذف'}
//                   </AlertDialogAction>
//                 </AlertDialogFooter>
//               </AlertDialogContent>
//             </AlertDialog>
//           </div>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );
// };










// export  {CompactPlanCard, ProfileCard};