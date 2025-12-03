// "use client";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Textarea } from "@/components/ui/textarea";
// import { motion } from "framer-motion";
// import { Camera, EarthIcon,Facebook, Filter, Instagram, Linkedin, MessageCircle, Phone, Save, Send, ShoppingBag, Star, Twitter, User, Youtube } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";





// interface ProfileFormProps {
//   isFreePlan: boolean;
//   items: MenuItem[];
// }

// interface SocialMediaplatform {
//   social: SocialMediaplatformBuilder;
//   value: string;
//   is_Active: boolean;
// }

// interface SocialMediaplatformBuilder {
//   id: string;
//   name: string;
//   icon: string;
//   open_type: string;
 
// }

// const getSocialIcon = (iconName: string) => {
//   switch (iconName) {
//     case "whatsapp":
//       return <MessageCircle className="w-5 h-5 text-green-600" />;
//     case "phone":
//       return <Phone className="w-5 h-5 text-blue-600" />;
//     case "facebook":
//       return <Facebook className="w-5 h-5 text-blue-700" />;
//     case "instagram":
//       return <Instagram className="w-5 h-5 text-pink-600" />;
//     case "youtube":
//       return <Youtube className="w-5 h-5 text-red-600" />;
//     case "twitter":
//       return <Twitter className="w-5 h-5 text-sky-500" />;
//     case "tiktok":
//       return <Send className="w-5 h-5 text-black" />;
//     case "linkedin":
//       return <Linkedin className="w-5 h-5 text-blue-700" />;
//     default:
//       return <EarthIcon className="w-5 h-5" />;
//   }
// };


// export default function ProfileForm({ isFreePlan, items }: ProfileFormProps) {
//   const route = useRouter();
//   const [logoImage, setLogoImage] = useState<string | null>(null);
//   const [bannerImage, setBannerImage] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

// const  socials :    SocialMediaplatformBuilder[] = [
//     { id: "eb4b895f-c58e-469d-b28b-e91d4254a0df", name: "واتساب", open_type: "external", icon: "whatsapp"},
//     { id: "b17eb45f-71cc-4940-95c7-206973d4f950", name: "هاتف",  open_type: "external", icon: "phone"  },
//     { id: "09b3ed0f-b411-4327-84fb-72980125c366", name: "انستجرام",  open_type: "external", icon: "instagram" },
//     { id: "4d69745d-3a8e-46f2-8fcb-cc845dbfc475", name: "فيسبوك", open_type: "external", icon: "facebook" },
//     { id: "b2de09a9-cd1c-451e-9df1-424dd2ff173b", name: "تويتر", open_type: "external", icon: "twitter" },
//     { id: "71b0595a-d4ee-4c23-bab2-a6cd7abfe27d", name: "يوتيوب",  open_type: "external", icon: "youtube" },
//     { id: "980c89a5-dfba-4280-a648-df008b6d812a", name: "تيك توك",  open_type: "external", icon: "tiktok" },
//     { id: "02a7a5f6-3176-4e56-9b41-54abcd81c2d7", name: "لينكدان",  open_type: "external", icon: "linkedin" },

//   ];

//   const [socialLinks, setSocialLinks] = useState<SocialMediaplatform[]>(
//     socials.map(s => ({
//       social: s,
//       value: '',
//       is_Active: false
//     })) 
//   );
  
//   const [logoFile, setLogoFile] = useState<File | null>(null);
//   const [bannerFile, setBannerFile] = useState<File | null>(null);

//   // responsive: when small -> use dropdown instead of TabsList scroll
//   const [isMobile, setIsMobile] = useState<boolean>(false);
//   const [activeTab, setActiveTab] = useState<'basic'|'themes'|'social'|'items'>('basic');

//   useEffect(() => {
//     const mq = window.matchMedia('(max-width: 640px)'); // small breakpoint
//     const onChange = () => setIsMobile(mq.matches);
//     onChange();
//     mq.addEventListener?.('change', onChange);
//     return () => mq.removeEventListener?.('change', onChange);
//   }, []);


//   const [selectedItems, setSelectedItems] = useState<string[]>([]);
//   const [selectedTheme, setselectedTheme] = useState<string | null>('');

// // البيانات للفورم  فارغ في التحميل الاولي 


//   const form = useForm
//  // <ProfileFormValues>
//     ({
//     defaultValues: {
//       title: '',
//       description: '',
//       phone: '',
//       email: '',
//       address: '',
//       website: '',
//     },
//     mode: 'onBlur'
//   });

//   const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (ev) => setLogoImage(ev.target?.result as string);
//       reader.readAsDataURL(file);
//       setLogoFile(file);
//     }
//   };

//   const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (ev) => setBannerImage(ev.target?.result as string);
//       reader.readAsDataURL(file);
//       setBannerFile(file);
//     }
//   };

//   const updateSocialLink = (platform: SocialMediaplatformBuilder, value: string) => {
//     setSocialLinks(prev =>
//       prev.map(link =>
//         link.social === platform ? { ...link, value } : link
//       )
//     );
//   };

//   const onSubmit = async (
//    // values: ProfileFormValues
// ) => {
//     // try {
//     //   setIsLoading(true);
//     //   // build profile payload
//     //   const profile: Profile = {
//     //     id: '',
//     //     userId: "",
//     //     name: values.name,
//     //     bio: values.bio,
//     //     image: '', banner: '',
//     //     address: values.address,
//     //     location: '',
//     //     contacts: { phone: values.phone, email: values.email, website: values.website },
//     //     workingHours: workHoursEnabled ? workingHours : [],
//     //     socialMediaLinks: socialLinks,
//     //     hasItems: false,
//     //     hasfeedback: values.enableFeedback,
//     //     averageRating: 0,
//     //     totalRatings: 0,
//     //     createdAt: new Date(),
//     //     updatedAt: new Date(),
//     //   };

//     //   // TODO: call server action to create profile and upload files (logoFile, bannerFile)
//     //   // await createProfileWithImages(profile, logoFile, bannerFile);

//     //   toast.success('تم حفظ الملف الشخصي (محلي - احتياطي)');
//     //   route.push('/dashboard');
//     // } catch (err) {
//     //   console.error(err);
//     //   toast.error('فشل حفظ الملف الشخصي');
//     // } finally {
//     //   setIsLoading(false);
//     // }
//   };

//   // small helper: tabs options for dropdown on mobile
//   const tabOptions = [
//     { value: 'basic', label: 'المعلومات الأساسية' },
//     { value: 'social', label: 'وسائل التواصل' },
//     ...(isFreePlan ? [] : [{ value: 'items', label: 'عناصر القائمة' }]),
//     { value: 'themes', label: 'قالب العرض' },

//   ] as const;

//   return (
//     <div className="p-4">
//       <div className="max-w-6xl mx-auto">
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <Star className="h-5 w-5 text-primary" />
//               {'إنشاء ملف شخصي جديد'}
//             </CardTitle>
//           </CardHeader>

//           <CardContent>
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

//                 {/* Tabs header: desktop -> TabsList, mobile -> Select dropdown */}
//                 <div className="mb-4">
//                   {!isMobile ? (
//                     <Tabs defaultValue="basic" value={activeTab} onValueChange={(v:any) => setActiveTab(v)}>
//                       <TabsList>
//                         <TabsTrigger value="basic">المعلومات الأساسية</TabsTrigger>
//                         <TabsTrigger value="social">وسائل التواصل</TabsTrigger>
//                         {!isFreePlan && <TabsTrigger value="items">عناصر القائمة</TabsTrigger>}
//                         <TabsTrigger value="themes">قالب العرض </TabsTrigger>
//                       </TabsList>
//                     </Tabs>
//                   ) : (
//                     <div className="w-full">
//                       <Select value={activeTab} onValueChange={(v:any) => setActiveTab(v)}>
//                         <SelectTrigger className="w-full">
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {tabOptions.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   )}
//                 </div>

//                 {/* Content: we show sections conditionally based on activeTab (desktop TabsContent kept for compatibility) */}
//                 <div>


//                   {/* BASIC */}
//                   {(activeTab === 'basic') && (
//                     <div className="space-y-6">
//                       <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }}>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                           {/* Logo */}
//                           <div>
//                             <Label className="text-base font-medium mb-2">الشعار *</Label>
//                             <div className="flex flex-col items-center gap-3">
//                               <div className="relative">
//                                 <Avatar className="w-28 h-28 border-4 border-background shadow-xl">
//                                   <AvatarImage src={logoImage || ""} />
//                                   <AvatarFallback className="bg-primary/10 text-2xl">
//                                     {form.watch('title') ? form.watch('title').substring(0,2).toUpperCase() : 'LP'}
//                                   </AvatarFallback>
//                                 </Avatar>
//                                 <div className="absolute -bottom-2 -right-2">
//                                   <Label htmlFor="logo-upload" className="cursor-pointer">
//                                     <div className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors shadow-lg">
//                                       <Camera className="h-4 w-4" />
//                                     </div>
//                                   </Label>
//                                   <Input id="logo-upload" type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
//                                 </div>
//                               </div>
//                               <p className="text-xs text-muted-foreground text-center">500 × 500 px</p>
//                             </div>
//                           </div>

//                           {/* Banner */}
//                           <div>
//                             <Label className="text-base font-medium mb-2">صورة الغلاف *</Label>
//                             <div className="relative rounded-lg overflow-hidden h-44 bg-linear-to-br from-primary/5 to-primary/10 border-2 border-dashed border-primary/20 flex items-center justify-center">
//                               {bannerImage ? (
//                                 <img src={bannerImage} alt="banner" className="w-full h-full object-cover" />
//                               ) : (
//                                 <div className="text-center p-4">
//                                   <Camera className="mx-auto h-10 w-10 text-primary/60 mb-2" />
//                                   <p className="text-sm text-muted-foreground">انقر لتحميل صورة الغلاف</p>
//                                   <p className="text-xs text-muted-foreground">1200 × 400 px</p>
//                                 </div>
//                               )}
//                               <Input id="banner-upload" type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={handleBannerUpload} />
//                             </div>
//                           </div>
//                         </div>
//                       </motion.div>


//                             {/* // data fields  */}

//                       <div className="space-y-4">
//                         <FormField control={form.control} name="title" rules={{ required: "الإسم مطلوب" }} render={({ field }) => (
//                           <FormItem>
//                             <FormLabel className="text-base">الإسم *</FormLabel>
//                             <FormControl><Input className="h-12" placeholder="إسم النشاط " {...field} /></FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )} />

//                         <FormField control={form.control} name="description" render={({ field }) => (
//                           <FormItem>
//                             <FormLabel className="text-base">نبذة عنك *</FormLabel>
//                             <FormControl><Textarea className="min-h-[120px]" placeholder="اكتب نبذة موجزة..." {...field} /></FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )} />

//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                           <FormField control={form.control} name="phone" rules={{
//                             required: "رقم الهاتف مطلوب",
//                             pattern: { value: /^0\d{9,10}$/, message: "رقم الهاتف غير صالح" }
//                           }} render={({ field }) => (
//                             <FormItem>
//                               <FormLabel>رقم الهاتف *</FormLabel>
//                               <FormControl><Input className="h-12" placeholder="+20 188 ..." {...field} /></FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )} />

//                           <FormField control={form.control} name="email" rules={{
//                             required: "البريد مطلوب",
//                             pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "بريد غير صالح" }
//                           }} render={({ field }) => (
//                             <FormItem>
//                               <FormLabel>البريد الإلكتروني *</FormLabel>
//                               <FormControl><Input className="h-12" placeholder="contact@example.com" {...field} /></FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )} />
//                         </div>

//                         <FormField control={form.control} name="address" rules={{ required: "العنوان مطلوب" }} render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>العنوان *</FormLabel>
//                             <FormControl><Input className="h-12" placeholder="ادخل عنوان..." {...field} /></FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )} />

//                         {/* <FormField control={form.control} name="website" rules={{
//                           pattern: { value: /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/, message: "رابط غير صالح" }
//                         }} render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>الموقع الإلكتروني</FormLabel>
//                             <FormControl><Input className="h-12" placeholder="https://example.com" {...field} /></FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )} /> */}


//                       </div>
//                     </div>
//                   )}

          
//                   {/* SOCIAL */}
//                   {(activeTab === 'social') && (
//                     <div className="space-y-4">
//                       <h3 className="text-lg font-medium">وسائل التواصل الاجتماعي</h3>
//                       {socials.map(platform => {
//                        // const Iconx = getSocialIcon(platform.icon)  ;
//                         const current = socialLinks.find(s=>s.social===platform);
//                         return (
//                           <Card key={platform.name} className="p-3">
//                             <div className="flex items-center gap-3">
//                               <div className={`p-2 rounded-md`}>
//                                {getSocialIcon(platform.icon) }
//                                 </div>
//                               <div className="flex-1">
//                                 <Label className="text-sm capitalize mb-1">{platform.name}</Label>
//                                 <Input placeholder={`https://${platform.name}.com/yourprofile`} value={current?.value||''} onChange={(e)=> updateSocialLink(platform, e.target.value)} />
//                               </div>
//                             </div>
//                           </Card>
//                         );
//                       })}
//                     </div>
//                   )}


//                   {/* ITEMS */}
//                   {(activeTab === 'items' && !isFreePlan) && (
//                     <div className="space-y-4">
//                       <h3 className="text-lg font-medium">عناصر القائمة</h3>
//                    <MenuItemsSelector 
//                         selectedItems={selectedItems}
//                         setSelectedItems={setSelectedItems} 
//                         items={items}/>
//                     </div>
//                   )}


//                    {/* Themes */}
//                   {(activeTab === 'themes') && (
//                     <div className="space-y-4">
//                       <h3 className="text-lg font-medium">عناصر القائمة</h3>
//                    <TemplatesGridList 
//                   selectedTheme={selectedTheme}
//                   setSelectedTheme={setselectedTheme} 
//                         isFreePlan={isFreePlan}/>
//                     </div>
//                   )}

//                 </div>

//                 <div className="flex gap-4 pt-6">
//                   <Button type="button" variant="outline" className="flex-1" disabled={isLoading} onClick={()=> route.push('/dashboard')}>إلغاء</Button>
//                   <Button type="submit" className="flex-1" disabled={isLoading}>
//                     {isLoading ? (<><span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" /> جاري الحفظ...</>) : (<><Save className="mr-2 h-4 w-4" /> حفظ ونشر</>)}
//                   </Button>
//                 </div>

//               </form>
//             </Form>
//           </CardContent>
      
      
      
//         </Card>
//       </div>
//     </div>
//   );
// }



















// import { MenuItem } from "@/components/templates/new/t8tempo/mock";
// import { TemplateInfo, templatesList } from "@/app/(client)/themes/mocks/mockdata";


//  function MenuItemsSelector({ selectedItems, setSelectedItems ,items }:{
//   selectedItems: string[];
//   setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
//   items: MenuItem[]

// }) {

//   const toggleItem = (id: string) => {
//     setSelectedItems(prev =>
//       prev.includes(id)
//         ? prev.filter(i => i !== id)
//         : [...prev, id]
//     );
//   };


//   const categories = items && items.length > 0
//     ? Array.from(new Set(items.map(item => item.category)))
//     : [];

//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const filteredItems = selectedCategory === "all" 
//     ? items || []
//     : items?.filter(item => item.category === selectedCategory) || [];




//   return (
//         <div className="min-h-screen relative text-black bg-white overflow-hidden">
//       {/* Animated Flame Background */}
//       <div className="absolute inset-0 z-0 flame-bg"></div>

// {/* Filter Bar */}
//           <div className="top-0 z-20 relative">
//   {/* Animated flame background for filter bar */}
//   <div className="absolute inset-0 bg-accent-900"></div>

//   <div className="relative max-w-7xl mx-auto px-4 py-4 flex items-center gap-3 overflow-x-auto scrollbar-hide">
//     <Filter className="w-5 h-5 text-orange-400 shrink-0 z-10" />
//     <Button
//       onClick={() => setSelectedCategory("all")}
//       className={`whitespace-nowrap relative z-10 ${
//         selectedCategory === "all"
//           ? "bg-linear-to-r from-red-600 to-orange-600 text-white shadow-[0_0_10px_rgba(255,140,0,0.7)]"
//           : "bg-linear-to-r from-brown to-orange-900   text-white"
//       }`}
//     >
//       الكل
//     </Button>
//     {categories.map((category) => (
//       <Button
//         key={category}
//         onClick={() => setSelectedCategory(category)}
//         className={`whitespace-nowrap relative z-10 ${
//           selectedCategory === category
//             ? "bg-linear-to-r from-red-600 to-orange-600 text-white shadow-[0_0_10px_rgba(255,140,0,0.7)]"
//           : "bg-linear-to-r from-brown to-orange-900   text-white"
//         }`}
//       >
//         {category}
//       </Button>
//     ))}
//   </div>

//           </div>


//       {/* Masonry Grid */}
   

      
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pr-5">
//         {filteredItems.map((i) => (
//           <div
//             key={i.id}
//             className="bg-white rounded-xl shadow p-3 flex flex-row gap-3 items-center cursor-pointer hover:shadow-lg transition relative"
//             onClick={() => toggleItem(i.id)}
//           >
//                {/* الصورة المصغرة */}
//             <div className="w-20 h-20 shrink-0 relative">
//               <img
//                 src={i.image}
//                 alt={i.name}
//                 className="w-full h-full object-contain rounded bg-gray-100"
//               />
//               <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition rounded"></div>
//             </div>

//             {/* الاسم */}
//             <div className="flex flex-col text-right flex-1">
//               <h2 className="text-sm font-semibold text-gray-800">{i.name}</h2>
             
//             </div>

            
//           </div>
//         ))}
//       </div>


//       {/* Flame Animation CSS */}
//       <style jsx>{`
//         .flame-bg {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(45deg, rgba(255,80,0,0.2), rgba(255,160,0,0.15), rgba(255,40,0,0.1), rgba(255,120,0,0.1));
//           background-size: 400% 400%;
//           animation: flameAnim 12s ease-in-out infinite;
//         }

//         .flame-overlay {
//           background: radial-gradient(circle, rgba(255,140,0,0.1) 0%, rgba(255,60,0,0) 70%);
//           mix-blend-mode: screen;
//           animation: flameAnimOverlay 6s ease-in-out infinite;
//         }

//         @keyframes flameAnim {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         @keyframes flameAnimOverlay {
//           0% { transform: translateY(0) scale(1); opacity: 0.5; }
//           50% { transform: translateY(-20px) scale(1.05); opacity: 0.3; }
//           100% { transform: translateY(0) scale(1); opacity: 0.5; }
//         }
//         @keyframes flameBg {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .animate-flame-bg {
//           background-size: 400% 400%;
//           animation: flameBg 8s ease-in-out infinite;
//         }
//       `}</style>
//     </div>

//   );
// }




//   function TemplatesGridList({  
//     isFreePlan,
//     selectedTheme,
//     setSelectedTheme
//    }: {
//   isFreePlan: boolean;
//   selectedTheme: string | null;
//   setSelectedTheme: React.Dispatch<React.SetStateAction<string | null>>;
//   }) {
    

//   // فلتر 
//   const publicTemplates = isFreePlan
//    ? templatesList.filter((tpl) => tpl.theme_type === "public" && tpl.isPremium === false)
//    : templatesList ;
 
//    const toggleTheme = (id: string) => {
//     setSelectedTheme(
//       selectedTheme === id ? null : id
//     );
//   };

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//         {publicTemplates.map((tpl) => (
//           <div
//             key={tpl.id}
//             className="bg-white rounded-xl shadow p-3 flex flex-row gap-3 items-center cursor-pointer hover:shadow-lg transition relative"
//             onClick={() => toggleTheme(tpl.id)}
//           >
//             {/* BADGES (نجمة + أيقونة نوع القالب) */}
//             <div className="absolute top-2 left-2 flex gap-1">
//               {tpl.isPremium && (
//                 <div className="bg-yellow-400 text-white rounded-full p-1 shadow-md">
//                   <Star className="w-4 h-4" />
//                 </div>
//               )}

//               {tpl.profileOnly ? (
//                 <div className="bg-blue-500 text-white rounded-full p-1 shadow-md">
//                   <User className="w-4 h-4" />
//                 </div>
//               ) : (
//                 <div className="bg-green-500 text-white rounded-full p-1 shadow-md">
//                   <ShoppingBag className="w-4 h-4" />
//                 </div>
//               )}
//             </div>

//             {/* الصورة يمين */}
//             <div className="w-20 h-20 shrink-0 relative">
//               <img
//                 src={tpl.thumbnail}
//                 alt={tpl.title}
//                 className="w-full h-full object-contain rounded bg-gray-100"
//               />
//               <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition rounded"></div>
//             </div>

//             {/* الاسم */}
//             <div className="flex flex-col text-right flex-1">
//               <h2 className="text-sm font-semibold text-gray-800">{tpl.title}</h2>
//               <p className="text-xs text-gray-500">اضغط للمعاينة</p>
//             </div>

            
//           </div>
//         ))}
//       </div>

//     </>
//   );
// }



/////////############################## الكود ده شغاااااااااااااال وزي الفل ###################################



"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  Camera,
  EarthIcon,
  Facebook,
  Filter,
  Instagram,
  Linkedin,
  MessageCircle,
  Phone,
  Save,
  Send,
  ShoppingBag,
  Star,
  Twitter,
  User,
  Youtube,
  Check
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { MenuItem } from "@/components/templates/new/t8tempo/mock";
import { TemplateInfo, templatesList } from "@/app/(client)/themes/mocks/mockdata";
import { toast } from "sonner";
import { exportDataToWHERE } from "./emuns";
import { GeneralResponse } from "@/lib/db/repo";

interface ProfileFormProps {
  isFreePlan: boolean;
  items: MenuItem[];
//  mn:Boolean;
  actions: {
  addProfile: (arg: DataModelTODB) => Promise<GeneralResponse>;
  // updateProfile: (arg: any) => Promise<any>;
  // deleteProfile: (id: string, publicId: string) => Promise<any>;
  // addCategory: (arg: any) => Promise<any>;
  // updateCategory: (arg: any) => Promise<any>;
  // deleteCategory: (id: string) => Promise<any>;
 // updateall: () => Promise<any>;
};
}

interface SocialMediaplatformBuilder {
  id: string;
  name: string;
  icon: string;
  open_type: string;
}

interface SocialMediaplatform {
  social: SocialMediaplatformBuilder;
  value: string;
  is_Active: boolean;
}

export interface DataModelTODB {

title: string;
description : string;
address: string;
logo: File | null;
banner: File | null;
socialLinks: SocialMediaplatform[];
selectedItems: MenuItem[];
selectedTheme: string;

}
////////////////////////////////////////////////////

 ///////////////////////////////////////



const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case "whatsapp":
      return <MessageCircle className="w-5 h-5 text-green-600" />;
    case "phone":
      return <Phone className="w-5 h-5 text-blue-600" />;
    case "facebook":
      return <Facebook className="w-5 h-5 text-blue-700" />;
    case "instagram":
      return <Instagram className="w-5 h-5 text-pink-600" />;
    case "youtube":
      return <Youtube className="w-5 h-5 text-red-600" />;
    case "twitter":
      return <Twitter className="w-5 h-5 text-sky-500" />;
    case "tiktok":
      return <Send className="w-5 h-5 text-black" />;
    case "linkedin":
      return <Linkedin className="w-5 h-5 text-blue-700" />;
    default:
      return <EarthIcon className="w-5 h-5" />;
  }
};

export default function ProfileForm(
  { isFreePlan, items, actions}: ProfileFormProps) {
  const route = useRouter();
  const [logoImage, setLogoImage] = useState<string | null>(null);
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const socials: SocialMediaplatformBuilder[] = [
    { id: "eb4b895f-c58e-469d-b28b-e91d4254a0df", name: "واتساب", open_type: "external", icon: "whatsapp" },
    { id: "b17eb45f-71cc-4940-95c7-206973d4f950", name: "هاتف", open_type: "external", icon: "phone" },
    { id: "09b3ed0f-b411-4327-84fb-72980125c366", name: "انستجرام", open_type: "external", icon: "instagram" },
    { id: "4d69745d-3a8e-46f2-8fcb-cc845dbfc475", name: "فيسبوك", open_type: "external", icon: "facebook" },
    { id: "b2de09a9-cd1c-451e-9df1-424dd2ff173b", name: "تويتر", open_type: "external", icon: "twitter" },
    { id: "71b0595a-d4ee-4c23-bab2-a6cd7abfe27d", name: "يوتيوب", open_type: "external", icon: "youtube" },
    { id: "980c89a5-dfba-4280-a648-df008b6d812a", name: "تيك توك", open_type: "external", icon: "tiktok" },
    { id: "02a7a5f6-3176-4e56-9b41-54abcd81c2d7", name: "لينكدان", open_type: "external", icon: "linkedin" },
  ];

  const [socialLinks, setSocialLinks] = useState<SocialMediaplatform[]>(
    socials.map((s) => ({
    
      social: s,
      value: "",
      is_Active: false,
    }))
  );

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [bannerFile, setBannerFile] = useState<File | null>(null);

  // responsive: when small -> use dropdown instead of TabsList scroll
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"basic" | "themes" | "social" | "items">("basic");

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)"); // small breakpoint
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const [selectedItems, setSelectedItems] = useState< MenuItem[]>([]);
  const [selectedTheme, setselectedTheme] = useState<string>("profile-f-a");

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      // phone: "",
      // email: "",
      address: "",
    //  website: "",
    },
    mode: "onBlur",
  });

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setLogoImage(ev.target?.result as string);
      reader.readAsDataURL(file);
      setLogoFile(file);
    }
  };

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setBannerImage(ev.target?.result as string);
      reader.readAsDataURL(file);
      setBannerFile(file);
    }
  };


  // -------------------------
  // VALIDATION & SANITIZATION
  // -------------------------
  const sanitizeInput = (value: string) => value.replace(/<[^>]*>?/gm, "").trim();
const validateSocialInput = (socialId: string, value: string): { valid: boolean; sanitizedValue: string; error?: string } => {
    const social = socials.find((s) => s.id === socialId);
    const val = sanitizeInput(value);

    if (!social) return { valid: false, sanitizedValue: val, error: "منصة غير موجودة" };

    switch (social.icon) {
      case "phone":
      case "whatsapp":
        // ارقام فقط، 10-15 رقم
        if (!/^\+?\d{10,15}$/.test(val)) return { valid: false, sanitizedValue: val, error: "رقم غير صالح" };
        break;
      default:
        // باقي المنصات: URL صالح
        if (!/^https?:\/\/.+/.test(val)) return { valid: false, sanitizedValue: val, error: "رابط غير صالح" };
        break;
    }

    return { valid: true, sanitizedValue: val };
  };

  // FIX: update by social id (not by object reference) -> more robust
  // const updateSocialLink = (socialId: string, value: string) => {
  //   setSocialLinks((prev) =>
  //     prev.map((link) =>
  //       link.social.id === socialId ? { ...link, value, is_Active: value.trim().length > 0 } : link
  //     )
  //   );
  // };
 const updateSocialLink = (socialId: string, value: string) => {
    setSocialLinks((prev) =>
      prev.map((link) => {
        if (link.social.id !== socialId) return link;

        const { valid, sanitizedValue } = validateSocialInput(socialId, value);
        return {
          ...link,
          value: sanitizedValue,
          is_Active: valid && sanitizedValue.length > 0,
        };
      })
    );
  };

  // const toggleSocialActive = (socialId: string) => {
  //   setSocialLinks((prev) => prev.map((l) => (l.social.id === socialId ? { ...l, is_Active: !l.is_Active } : l)));
  // };
    const toggleSocialActive = (socialId: string) => {
    setSocialLinks((prev) =>
      prev.map((l) => {
        if (l.social.id !== socialId) return l;
        // فقط يمكن تفعيل خانة تحتوي على قيمة صالحة
        return { ...l, is_Active: l.value.length > 0 ? !l.is_Active : false };
      })
    );
  };
 const getPlaceholder = (type: string) => {
    switch (type) {
      case "phone":
        return "+201012345678";
      case "whatsapp":
        return "+201012345678";
      // case "instagram":
      //   return "مثال: https://instagram.com/username";
      // case "facebook":
      //   return "مثال: https://facebook.com/username";
      // case "tiktok":
      //   return "مثال: https://tiktok.com/@username";
      // case "website":
      //   return "مثال: https://yourwebsite.com";
      default:
        return "ضع الرابط هنا";
    }
  };

  // const onSubmit = async () => {
  //   // placeholder: your real submit logic here
  //   // currently commented as in original
  //   try {
  //     setIsLoading(true);
  //     // build payload and call API...
  //     // route.push('/dashboard');
  //     console.log("submit", form.getValues(), { socialLinks, selectedItems, selectedTheme });
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };


  const onSubmit = async () => {
    
  try {
    setIsLoading(true);
    // اختبار صلاحية الاضافة


// if (mn) {
//    toast.error('لقد وصلت الى الحد الاقصي - قم بالترقية للحصول على المزيد');
//    return;
// }

    for (const link of socialLinks) {
      if (link.value.trim().length > 0 && !link.is_Active) {
        toast.error(`القيمة المدخلة لـ ${link.social.name} غير صالحة`);
        return; // توقف عن السابمت
      }
    }
    // نجمع كل البيانات في object واحد
    const payload : DataModelTODB = {
      title: form.getValues().title,
      description: form.getValues().description,
      address: form.getValues().address,
      logo: logoFile,
      banner: bannerFile,
      socialLinks: socialLinks.filter((s) => s.is_Active),
      selectedItems: selectedItems,
      selectedTheme: selectedTheme,
    };

// handle the payload :- 

// 1- check if the payload is empty
if(!payload.logo || !payload.banner){
  toast.error('يرجى تحديد الشعار والبانر');
  return;
}



// send to server 

   const res = await   actions.addProfile(payload);
    // نعرض الداتا في الكونسل أولاً
  
    // deal with response:- 

if (!res.status) {

    toast.error(res.error);
    return;
}

// console.log(res.data);  
toast.success('تم انشاء الملف الشخصي بنجاح');
route.push("/dashboard")



////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////


  } catch (err) {
    console.error("Submit Error:", err);
  } finally {
    setIsLoading(false);
  }
};


  const tabOptions = [
    { value: "basic", label: "المعلومات الأساسية" },
    { value: "social", label: "وسائل التواصل" },
    ...(isFreePlan ? [] : [{ value: "items", label: "عناصر القائمة" }]),
    { value: "themes", label: "قالب العرض" },
  ] as const;

  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              {"إنشاء ملف شخصي جديد"}
            </CardTitle>
          </CardHeader>

          <CardContent>
        
        
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="mb-4">
                  {!isMobile ? (
                    <Tabs defaultValue="basic" value={activeTab} onValueChange={(v: any) => setActiveTab(v)}>
                      <TabsList>
                        <TabsTrigger value="basic">المعلومات الأساسية</TabsTrigger>
                        <TabsTrigger value="social">وسائل التواصل</TabsTrigger>
                        {!isFreePlan && <TabsTrigger value="items">عناصر القائمة</TabsTrigger>}
                        <TabsTrigger value="themes">قالب العرض </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  ) : (
                    <div className="w-full">
                      <Select value={activeTab} onValueChange={(v: any) => setActiveTab(v)}>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {tabOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>

                <div>
                  {/* BASIC */}
                  {activeTab === "basic" && (
                    <div className="space-y-6">
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Logo */}
                          <div>
                            <Label className="text-base font-medium mb-2">الشعار *</Label>
                            <div className="flex flex-col items-center gap-3">
                              <div className="relative">
                                <Avatar className="w-28 h-28 border-4 border-background shadow-xl">
                                  <AvatarImage src={logoImage || ""} />
                                  <AvatarFallback className="bg-primary/10 text-2xl">
                                    {form.watch("title") ? form.watch("title").substring(0, 2).toUpperCase() : "LP"}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="absolute -bottom-2 -right-2">
                                  <Label htmlFor="logo-upload" className="cursor-pointer">
                                    <div className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors shadow-lg">
                                      <Camera className="h-4 w-4" />
                                    </div>
                                  </Label>
                                  <Input id="logo-upload" type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
                                </div>
                              </div>
                              <p className="text-xs text-muted-foreground text-center">500 × 500 px</p>
                            </div>
                          </div>

                          {/* Banner */}
                          <div>
                            <Label className="text-base font-medium mb-2">صورة الغلاف *</Label>
                            <div className="relative rounded-lg overflow-hidden h-44 bg-linear-to-br from-primary/5 to-primary/10 border-2 border-dashed border-primary/20 flex items-center justify-center">
                              {bannerImage ? (
                                <img src={bannerImage} alt="banner" className="w-full h-full object-cover" />
                              ) : (
                                <div className="text-center p-4">
                                  <Camera className="mx-auto h-10 w-10 text-primary/60 mb-2" />
                                  <p className="text-sm text-muted-foreground">انقر لتحميل صورة الغلاف</p>
                                  <p className="text-xs text-muted-foreground">1200 × 400 px</p>
                                </div>
                              )}
                              <Input id="banner-upload" type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={handleBannerUpload} />
                            </div>
                          </div>
                        </div>
                      </motion.div>


                      {/* data fields */}
                      <div className="space-y-4">
                        <FormField control={form.control} name="title" rules={{ required: "الإسم مطلوب" }} render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base">الإسم *</FormLabel>
                            <FormControl>
                              <Input className="h-12" placeholder="إسم النشاط " {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="address" rules={{ required: "العنوان مطلوب" }} render={({ field }) => (
                          <FormItem>
                            <FormLabel>العنوان *</FormLabel>
                            <FormControl><Input className="h-12" placeholder="ادخل عنوان..." {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="description" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base">نبذة عنك *</FormLabel>
                            <FormControl>
                              <Textarea className="min-h-[120px]" placeholder="اكتب نبذة موجزة..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField control={form.control} name="phone" rules={{
                            required: "رقم الهاتف مطلوب",
                            pattern: { value: /^0\d{9,10}$/, message: "رقم الهاتف غير صالح" }
                          }} render={({ field }) => (
                            <FormItem>
                              <FormLabel>رقم الهاتف *</FormLabel>
                              <FormControl><Input className="h-12" placeholder="+20 188 ..." {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />

                          <FormField control={form.control} name="email" rules={{
                            required: "البريد مطلوب",
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "بريد غير صالح" }
                          }} render={({ field }) => (
                            <FormItem>
                              <FormLabel>البريد الإلكتروني *</FormLabel>
                              <FormControl><Input className="h-12" placeholder="contact@example.com" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div> */}

                      </div>
                    </div>
                  )}

                  {/* SOCIAL */}
                 
                 
                 
           
 {activeTab === "social" && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">وسائل التواصل الاجتماعي</h3>
                    {socials.map((platform) => {
                      const current = socialLinks.find((s) => s.social.id === platform.id);
                      return (
                        <Card key={platform.id} className="p-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-md">{getSocialIcon(platform.icon)}</div>
                            <div className="flex-1">
                              <Label className="text-sm capitalize mb-1">{platform.name}</Label>
                              <Input
                                placeholder={getPlaceholder(platform.icon)}
                                value={current?.value || ""}
                                onChange={(e) => updateSocialLink(platform.id, e.target.value)}
                                onBlur={() => {
                                  const cur = socialLinks.find((s) => s.social.id === platform.id);
                                  if (cur && cur.value.trim().length === 0) {
                                    updateSocialLink(platform.id, "");
                                  }
                                }}
                              />
                          {(current?.value?.length ?? 0) > 0 && !current?.is_Active && (
  <p className="text-xs text-red-500 mt-1">القيمة غير صالحة</p>
)}

                            </div>

                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => toggleSocialActive(platform.id)}
                                className={`p-2 rounded-md border ${
                                  current?.is_Active ? "bg-primary text-white border-primary" : "bg-white text-muted-foreground"
                                }`}
                                title={current?.is_Active ? "مفعل" : "غير مفعل"}
                              >
                                {current?.is_Active ? <Check className="w-4 h-4" /> : <EarthIcon className="w-4 h-4" />}
                              </button>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                )}




                  

                  {/* ITEMS */}
                  {activeTab === "items" && !isFreePlan && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">عناصر القائمة</h3>
                      <MenuItemsSelector selectedItems={selectedItems} setSelectedItems={setSelectedItems} items={items} />
                    </div>
                  )}

                  {/* Themes */}
                  {activeTab === "themes" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">قوالب العرض</h3>
                      <TemplatesGridList
                        selectedTheme={selectedTheme}
                        setSelectedTheme={setselectedTheme}
                        isFreePlan={isFreePlan}
                      />
                    </div>
                  )}
                </div>

                <div className="flex gap-4 pt-6">
                  <Button type="button" variant="outline" className="flex-1" disabled={isLoading} onClick={() => route.push("/dashboard")}>إلغاء</Button>
                  <Button type="submit" className="flex-1" disabled={isLoading}>
                    {isLoading ? (<><span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" /> جاري الحفظ...</>) : (<><Save className="mr-2 h-4 w-4" /> حفظ ونشر</>)}
                  </Button>
                </div>
              </form>
            </Form>
         
         
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/* ---------------------------
   MenuItemsSelector Component
   ---------------------------*/

   function MenuItemsSelector({
  selectedItems,
  setSelectedItems,
  items,
}: {
  selectedItems: MenuItem[];
  setSelectedItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  items: MenuItem[];
}) {
  // const toggleItem = (id: string) => {
  //   setSelectedItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  // };
  const toggleItem = (item: MenuItem) => {
  setSelectedItems((prev) => {
    // نبحث لو العنصر موجود بالفعل (حسب الـ id)
    const exists = prev.some((i) => i.id === item.id);
    if (exists) {
      // لو موجود، نشيله
      return prev.filter((i) => i.id !== item.id);
    } else {
      // لو مش موجود، نضيفه
      return [...prev, item];
    }
  });
};


  const categories = items && items.length > 0 ? Array.from(new Set(items.map((item) => item.category))) : [];
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredItems = selectedCategory === "all" ? items || [] : items?.filter((item) => item.category === selectedCategory) || [];

  return (
    <div className="min-h-screen relative text-black bg-blue-200 overflow-hidden">
      <div className="absolute inset-0 z-0 flame-bg"></div>

      <div className="top-0 z-20 relative">
        <div className="absolute inset-0 bg-white"></div>


        <div className="relative max-w-7xl mx-auto px-4 py-4 flex items-center gap-3 overflow-x-auto scrollbar-hide">
          <Filter className="w-5 h-5 text-blue-700 shrink-0 z-10" />
          <Button type="button" onClick={() => setSelectedCategory("all")} className={`whitespace-nowrap relative z-10 ${selectedCategory === "all" ? "bg-linear-to-r from-blue-300 to-blue-700 text-white shadow-[0_0_10px_rgba(255,140,0,0.7)]" : "bg-linear-to-r from-brown to-orange-900 text-white"}`}>الكل</Button>
          {categories.map((category) => (
            <Button type="button" key={category} onClick={() => setSelectedCategory(category)} className={`whitespace-nowrap relative z-10 ${selectedCategory === category ? "bg-linear-to-r from-blue-300 to-blue-700 text-white shadow-[0_0_10px_rgba(255,140,0,0.7)]" : "bg-linear-to-r from-brown to-orange-900 text-white"}`}>{category}</Button>
          ))}
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pr-5 mt-6 p-2">
        {filteredItems.map((i) => {
          const selected = selectedItems.includes(i);
          return (
            <div
              key={i.id}
              className={`bg-white rounded-xl shadow p-3 flex flex-row gap-3 items-center cursor-pointer hover:shadow-lg transition relative ${selected ? "border-2 border-blue-500" : ""}`}
              onClick={() => toggleItem(i)}
            >
              {/* CHECK MARK */}
              {selected && (
                <div className="absolute -top-2 -left-2 z-30">
                  <div className="bg-blue-600 text-white rounded-full p-1 shadow-md">
                    <Check className="w-4 h-4" />
                  </div>
                </div>
              )}

              <div className="w-20 h-20 shrink-0 relative">
                <img src={i.image} alt={i.name} className="w-full h-full object-contain rounded bg-gray-100" />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition rounded"></div>
              </div>

              <div className="flex flex-col text-right flex-1">
                <h2 className="text-sm font-semibold text-gray-800">{i.name}</h2>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .flame-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(255,80,0,0.08), rgba(255,160,0,0.06), rgba(255,40,0,0.04), rgba(255,120,0,0.03));
          background-size: 400% 400%;
          animation: flameAnim 12s ease-in-out infinite;
        }
        @keyframes flameAnim { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}</style>
    </div>
  );
}


/* ---------------------------
   TemplatesGridList Component
   ---------------------------*/


   function TemplatesGridList({
  isFreePlan,
  selectedTheme,
  setSelectedTheme,
}: {
  isFreePlan: boolean;
  selectedTheme: string | null;
  setSelectedTheme: React.Dispatch<React.SetStateAction<string>>;
}) {
  // فلتر
  const publicTemplates = isFreePlan ? templatesList.filter((tpl) => tpl.theme_type === "public" && tpl.isPremium === false) : templatesList;

  // set default first template on mount (if any)
  useEffect(() => {
    if (publicTemplates.length > 0) {
      setSelectedTheme((prev) => (prev ? prev : publicTemplates[0].id));
    } else {
      setSelectedTheme("profile-f-a");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFreePlan]);

  const toggleTheme = (id: string) => {
    setSelectedTheme(selectedTheme === id ? "profile-f-a" : id);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {publicTemplates.map((tpl) => {
          const selected = selectedTheme === tpl.id;
          return (
            <div
              key={tpl.id}
              className={`bg-white rounded-xl shadow p-3 flex flex-row gap-3 items-center cursor-pointer hover:shadow-lg transition relative ${selected ? "border-2 border-blue-500" : ""}`}
              onClick={() => toggleTheme(tpl.id)}
            >
              {/* Check overlay when selected */}
              {selected && (
                <div className="absolute -top-2 -left-2 z-30">
                  <div className="bg-blue-600 text-white rounded-full p-1 shadow-md">
                    <Check className="w-4 h-4" />
                  </div>
                </div>
              )}

              <div className="w-20 h-20 shrink-0 relative">
                <img src={tpl.thumbnail} alt={tpl.title} className="w-full h-full object-contain rounded bg-gray-100" />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition rounded"></div>
              </div>

              <div className="flex flex-col text-right flex-1">
                <h2 className="text-sm font-semibold text-gray-800">{tpl.title}</h2>
                <p className="text-xs text-gray-500">اضغط للمعاينة</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}





// /*

      
                 
//                   {activeTab === "social" && (
//                     <div className="space-y-4">
//                       <h3 className="text-lg font-medium">وسائل التواصل الاجتماعي</h3>
//                       {socials.map((platform) => {
//                         const current = socialLinks.find((s) => s.social.id === platform.id);
//                         return (
//                           <Card key={platform.id} className="p-3">
//                             <div className="flex items-center gap-3">
//                               <div className="p-2 rounded-md">{getSocialIcon(platform.icon)}</div>
//                               <div className="flex-1">
//                                 <Label className="text-sm capitalize mb-1">{platform.name}</Label>
//                                 <Input
//                                   placeholder={getPlaceholder(platform.icon)}
//                                   value={current?.value || ""}
//                                   onChange={(e) => updateSocialLink(platform.id, e.target.value)}
//                                   onBlur={() => {
//                                     // if user left the field empty, keep is_Active false
//                                     const cur = socialLinks.find((s) => s.social.id === platform.id);
//                                     if (cur && cur.value.trim().length === 0) {
//                                       updateSocialLink(platform.id, "");
//                                     }
//                                   }}
//                                 />
//                               </div>

//                               {/* small toggle for active */}
//                               <div className="flex items-center gap-2">
//                                 <button
//                                   type="button"
//                                   onClick={() => toggleSocialActive(platform.id)}
//                                   className={`p-2 rounded-md border ${current?.is_Active ? "bg-primary text-white border-primary" : "bg-white text-muted-foreground"}`}
//                                   title={current?.is_Active ? "مفعل" : "غير مفعل"}
//                                 >
//                                   {current?.is_Active ? <Check className="w-4 h-4" /> : <EarthIcon className="w-4 h-4" />}
//                                 </button>
//                               </div>
//                             </div>
//                           </Card>
//                         );
//                       })}
//                     </div>
//                   )}


// */






/*

{
    "title": "الاسمممممممم",
    "description": "تاتلاتلاتلاتلاتلاتلاتل",
    "address": "العنوااااااااااااان",
    "logo": {},
    "banner": {},
    "socialLinks": [
        {
            "socialId": "eb4b895f-c58e-469d-b28b-e91d4254a0df",
            "social": {
                "id": "eb4b895f-c58e-469d-b28b-e91d4254a0df",
                "name": "واتساب",
                "open_type": "external",
                "icon": "whatsapp"
            },
            "value": "01واتس",
            "is_Active": true
        },
        {
            "socialId": "b17eb45f-71cc-4940-95c7-206973d4f950",
            "social": {
                "id": "b17eb45f-71cc-4940-95c7-206973d4f950",
                "name": "هاتف",
                "open_type": "external",
                "icon": "phone"
            },
            "value": "02 هاتف",
            "is_Active": true
        },
        {
            "socialId": "b2de09a9-cd1c-451e-9df1-424dd2ff173b",
            "social": {
                "id": "b2de09a9-cd1c-451e-9df1-424dd2ff173b",
                "name": "تويتر",
                "open_type": "external",
                "icon": "twitter"
            },
            "value": "تويتر",
            "is_Active": true
        },
        {
            "socialId": "980c89a5-dfba-4280-a648-df008b6d812a",
            "social": {
                "id": "980c89a5-dfba-4280-a648-df008b6d812a",
                "name": "تيك توك",
                "open_type": "external",
                "icon": "tiktok"
            },
            "value": "تيكتوك 4",
            "is_Active": true
        }
    ],
    "selectedItems": [
        "16be4288-ee8d-40c4-a874-314f20d22897",
        "5cafcd85-9d87-42d0-8155-568aa4334c1f"
    ],
    "selectedTheme": "profile-f-a"
}

*/