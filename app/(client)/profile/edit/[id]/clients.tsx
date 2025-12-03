// 'use client';

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useRouter } from 'next/navigation';
// import { Button } from '@/components/ui/button';
// import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { Profile, SocialMediaLink, WorkingHour } from '@/firebase/models';
// import { ArrowLeft, Camera, Clock, Facebook, Globe, Instagram, Linkedin, MessageSquare, Save, Star, Twitter } from 'lucide-react';
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
// import { Textarea } from '@/components/ui/textarea';
// import { motion } from 'framer-motion';
// import { Label } from '@/components/ui/label';
// import { Switch } from '@/components/ui/switch';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { toast } from "sonner";
// import { updateProfileWithImages } from '../../actions';

// interface ProfileFormValues {
//   name: string;
//   bio: string;
//   phone: string;
//   email: string;
//   address: string;
//   website?: string;
//   enableFeedback: boolean;
// }

// interface ProfileEditProps {
//   profileData: Profile;
//    isFree: boolean;
// }
// const socialPlatforms = [
//   { name: 'facebook', icon: Facebook, color: 'text-blue-600', bg: 'bg-blue-100' },
//   { name: 'instagram', icon: Instagram, color: 'text-pink-600', bg: 'bg-pink-100' },
//   { name: 'twitter', icon: Twitter, color: 'text-sky-500', bg: 'bg-sky-100' },
//   { name: 'linkedin', icon: Linkedin, color: 'text-blue-700', bg: 'bg-blue-100' },
// ];

// export default function ProfileEditForm({ profileData, isFree }: ProfileEditProps) {
//   const route = useRouter();
//   const [logoImage, setLogoImage] = useState<string | null>(profileData.image || null);
//   const [bannerImage, setBannerImage] = useState<string | null>(profileData.banner || null);
//   const [logoFile, setLogoFile] = useState<File | null>(null);
//   const [bannerFile, setBannerFile] = useState<File | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const [workingHours, setWorkingHours] = useState<WorkingHour[]>(
//     profileData.workingHours || []
//   );

//   const [socialLinks, setSocialLinks] = useState<SocialMediaLink[]>(
//     profileData.socialMediaLinks || []
//   );

//   const form = useForm<ProfileFormValues>({
//     defaultValues: {
//       name: profileData.name || '',
//       bio: profileData.bio || '',
//       phone: profileData.contacts!.phone || '',
//       email: profileData.contacts!.email || '',
//       address: profileData.address || '',
//       website: profileData.contacts!.website || '',
//       enableFeedback: profileData.hasfeedback || false,
//     }
//   });

//   const updateWorkingHour = (index: number, field: keyof WorkingHour, value: any) => {
//     const updated = [...workingHours];
//     updated[index] = { ...updated[index], [field]: value };
//     setWorkingHours(updated);
//   };

//   const updateSocialLink = (platform: string, url: string) => {
//     setSocialLinks(prev =>
//       prev.map(link =>
//         link.platform === platform ? { ...link, url } : link
//       )
//     );
//   };

//   const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setLogoImage(e.target?.result as string);
//       };
//       reader.readAsDataURL(file);
//       setLogoFile(file);
//     }
//   };

//   const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setBannerImage(e.target?.result as string);
//       };
//       reader.readAsDataURL(file);
//       setBannerFile(file);
//     }
//   };

//   const onSubmit = async (values: ProfileFormValues) => {
//     try {
//       setIsLoading(true);
//       const updatedProfile: Profile = {
//         ...profileData, // 👈 نبدأ من البروفايل الحالي
//         name: values.name,
//         bio: values.bio,
//         address: values.address,
//         contacts: {
//           phone: values.phone,
//           email: values.email,
//           website: values.website,
//         },
//         workingHours,
//         socialMediaLinks: socialLinks,
//         hasfeedback: values.enableFeedback,
//         updatedAt: new Date(),
//       };

//       await updateProfileWithImages( updatedProfile.id,updatedProfile, logoFile || undefined, bannerFile || undefined);
//       toast.success("تم تحديث الملف الشخصي بنجاح 🎉");
//       route.push('/dashboard');
//     } catch (error) {
//       console.error("فشل تحديث الملف الشخصي:", error);
//       toast.error("فشل التحديث 😢");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//  return (
  
//       <div className={`p-6 lg:p-8`}>
//         <div className="max-w-6xl mx-auto">
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Star className="h-5 w-5 text-primary" />
//                 {'تعديل ملف شخصي'}
//               </CardTitle>
//               <CardDescription>
//                {''}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
//                   <Tabs defaultValue="basic" className="w-full">
//                  <TabsList className="flex flex-wrap gap-2 justify-start sm:justify-between overflow-x-auto">
//                                        <TabsTrigger value="basic">
//                                          {'المعلومات الأساسية'}
//                                        </TabsTrigger>
                 
//                                        { !isFree &&(
//                                        <TabsTrigger value="hours">
//                                          <Clock className="w-4 h-4 mr-1" />
//                                          {'ساعات العمل'}
//                                        </TabsTrigger>
//                                        )}
                 
//                                        <TabsTrigger value="social">
//                                          <Globe className="w-4 h-4 mr-1" />
//                                          {'وسائل التواصل'}
//                                        </TabsTrigger>
                                      
//                                        {!isFree &&(
//                                          <TabsTrigger value="settings">
//                                          <MessageSquare className="w-4 h-4 mr-1" />
//                                          {'الإعدادات'}
//                                        </TabsTrigger>
//                                        )}
                 
//                     </TabsList>

//                     <TabsContent value="basic" className="space-y-6 mt-6">
//                       {/* Images Section */}
//                       <motion.div 
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="grid grid-cols-1 md:grid-cols-2 gap-6"
//                       >
//                         {/* Logo Upload */}
//                         <div className="space-y-4">
//                           <Label className="text-base font-medium">
//                             {'الشعار *'}
//                           </Label>
//                           <div className="flex flex-col items-center gap-4">
//                             <div className="relative">
//                               <Avatar className="w-32 h-32 border-4 border-background shadow-xl">
//                                 <AvatarImage src={logoImage || ""} />
//                                 <AvatarFallback className="bg-primary/10 text-2xl">
//                                   {form.watch('name') ? form.watch('name').substring(0, 2).toUpperCase() : 'LP'}
//                                 </AvatarFallback>
//                               </Avatar>
//                               <div className="absolute -bottom-2 -right-2">
//                                 <Label htmlFor="logo-upload" className="cursor-pointer">
//                                   <div className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg">
//                                     <Camera className="h-5 w-5" />
//                                   </div>
//                                 </Label>
//                                 <Input 
//                                   id="logo-upload" 
//                                   type="file" 
//                                   accept="image/*" 
//                                   className="hidden" 
//                                   onChange={handleLogoUpload}
//                                 />
//                               </div>
//                             </div>
//                             <p className="text-sm text-muted-foreground text-center">
//                               {'المقاس الموصى به: 500 × 500 بكسل'}
//                             </p>
//                           </div>
//                         </div>

//                         {/* Banner Upload */}
//                         <div className="space-y-4">
//                           <Label className="text-base font-medium">
//                             {'صورة الغلاف *'}
//                           </Label>
//                           <div className="relative h-48 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border-2 border-dashed border-primary/20 flex justify-center items-center">
//                             {bannerImage ? (
//                               <img 
//                                 src={bannerImage} 
//                                 alt="Banner preview" 
//                                 className="w-full h-full object-cover rounded-lg"
//                               />
//                             ) : (
//                               <div className="text-center p-6">
//                                 <Camera className="mx-auto h-12 w-12 text-primary/60 mb-2" />
//                                 <p className="text-sm text-muted-foreground">
//                                   { 'انقر لتحميل صورة الغلاف'}
//                                 </p>
//                               </div>
//                             )}
//                             <Input 
//                               id="banner-upload" 
//                               type="file" 
//                               accept="image/*"
//                               className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
//                               onChange={handleBannerUpload}
//                             />
//                           </div>
//                           <p className="text-sm text-muted-foreground">
//                             {'المقاس الموصى به: 1200 × 400 بكسل'}
//                           </p>
//                         </div>
//                       </motion.div>

//                       {/* Basic Information */}
//                       <div className="grid gap-4">
//                         <FormField
//                           control={form.control}
//                           rules={{ required: "الإسم مطلوب" }}
//                           name="name"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel className="text-base">{'الإسم  *'}</FormLabel>
//                               <FormControl>
//                                 <Input 
//                                   placeholder={'مطعم السعادة'} 
//                                   className="h-12"
//                                   {...field} 
//                                 />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />

//                         <FormField
//                           control={form.control}
//                           name="bio"
//                         //  rules={{ required: "الوصف مطلوب" }}

//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel className="text-base">{'نبذة عنك  *'}</FormLabel>
//                               <FormControl>
//                                 <Textarea 
//                                   placeholder={'اكتب نبذة موجزة عن ملفك وما يميزه...'}
//                                   className="min-h-[120px]" 
//                                   {...field} 
//                                 />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />

//                         <div className="grid gap-4 sm:grid-cols-2">
//                           <FormField
//                             control={form.control}
//                           //rules={{ required: "الإسم مطلوب" }}
//                              rules={{
//                               required: "رقم الهاتف مطلوب",
//                               pattern: {
//                                 value: /^0\d{9,10}$/, // يبدأ بـ 0 ويتبع 9/ 10 أرقام
//                                 message: "رقم الهاتف غير صالح"
//                               }
//                             }}
//                             name="phone"
//                             render={({ field }) => (
//                               <FormItem>
//                                 <FormLabel className="text-base">{'رقم الهاتف *'}</FormLabel>
//                                 <FormControl>
//                                   <Input placeholder="+20 188 888 8888" className="h-12" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                               </FormItem>
//                             )}
//                           />

//                           <FormField
//                             control={form.control}
//                             name="email"
//                              rules={{
//                                 required: "البريد الإلكتروني مطلوب",
//                                 pattern: {
//                                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                                   message: "البريد الإلكتروني غير صالح"
//                                 }
//                               }}
//                             render={({ field }) => (
//                               <FormItem>
//                                 <FormLabel className="text-base">{'البريد الإلكتروني *'}</FormLabel>
//                                 <FormControl>
//                                   <Input placeholder="contact@example.com" className="h-12" {...field} />
//                                 </FormControl>
//                                 <FormMessage />
//                               </FormItem>
//                             )}
//                           />
//                         </div>

//                         <FormField
//                           control={form.control}
//                          rules={{ required: "العنوان مطلوب" }}
//                           name="address"
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel className="text-base">{ 'العنوان *' }</FormLabel>
//                               <FormControl>
//                                 <Input 
//                                   placeholder={'ادخل عنوان يسهل علي الزوار الوصول اليه'} 
//                                   className="h-12"
//                                   {...field} 
//                                 />
//                               </FormControl>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />

//                         <FormField
//                           control={form.control}
//                           name="website"
//                           rules={{
//                               pattern: {
//                                 value: /^(https?:\/\/)?([\w\-]+\.)+[\w\-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
//                                 message: "رابط غير صالح",
//                               },
//                             }}
//                           render={({ field }) => (
//                             <FormItem>
//                               <FormLabel className="text-base">{'الموقع الإلكتروني'}</FormLabel>
//                               <FormControl>
//                                 <Input placeholder="https://example.com" className="h-12" {...field} />
//                               </FormControl>
//                               <FormDescription>
//                                 {'اختياري'}
//                               </FormDescription>
//                               <FormMessage />
//                             </FormItem>
//                           )}
//                         />
//                       </div>
//                     </TabsContent>

//                     {/* <TabsContent value="hours" className="space-y-6 mt-6">
//                       <div className="space-y-4">
//                         <div className="flex justify-between items-center">
//                           <h3 className="text-lg font-medium">{'ساعات العمل'}</h3>
                          
//                         </div>
                        
//                         {workingHours.map((hour, index) => (
//                           <Card key={index} className="p-4">
//                             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//                               <div className="flex-1">
//                                 <Input
//                                   placeholder={'اليوم'}
//                                   value={hour.day}
//                                   onChange={(e) => updateWorkingHour(index, 'day', e.target.value)}
//                                   className="mb-2"
//                                 />
//                                 <div className="flex items-center gap-2">
//                                   <Switch
//                                     checked={hour.isOpen}
//                                     onCheckedChange={(checked) => updateWorkingHour(index, 'isOpen', checked)}
//                                   />
//                                   <span className="text-sm">{'مفتوح'}</span>
//                                 </div>
//                               </div>
                              
//                               {hour.isOpen && (
//                                 <div className="flex items-center gap-2">
//                                   <Input
//                                     type="time"
//                                     value={hour.openTime}
//                                     onChange={(e) => updateWorkingHour(index, 'openTime', e.target.value)}
//                                     className="w-32"
//                                   />
//                                   <span>-</span>
//                                   <Input
//                                     type="time"
//                                     value={hour.closeTime}
//                                     onChange={(e) => updateWorkingHour(index, 'closeTime', e.target.value)}
//                                     className="w-32"
//                                   />
//                                 </div>
//                               )}
                              
                             
//                             </div>
//                           </Card>
//                         ))}
//                       </div>
//                     </TabsContent> */}
         
//                     <TabsContent value="hours" className="space-y-6 mt-6">
//                       <div className="space-y-4">
//                         <div className="flex justify-between items-center">
//                           <h3 className="text-lg font-medium">{'ساعات العمل'}</h3>
//                         </div>

//                         {workingHours.map((hour, index) => (
//                           <Card key={index} className="p-4">
//                             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                               {/* اليوم والسويتش */}
//                               <div className="flex flex-col gap-2">
//                                 <Input
//                                   placeholder="اليوم"
//                                   value={hour.day}
//                                   onChange={(e) => updateWorkingHour(index, 'day', e.target.value)}
//                                 />
//                                 <div className="flex items-center gap-2">
//                                   <Switch
//                                     checked={hour.isOpen}
//                                     onCheckedChange={(checked) => updateWorkingHour(index, 'isOpen', checked)}
//                                   />
//                                   <span className="text-sm">مفتوح</span>
//                                 </div>
//                               </div>

//                               {/* الأوقات */}
//                               {hour.isOpen && (
//                                 <div className="flex items-center gap-2 col-span-2">
//                                   <Input
//                                     type="time"
//                                     value={hour.openTime}
//                                     onChange={(e) => updateWorkingHour(index, 'openTime', e.target.value)}
//                                     className="w-full sm:w-32"
//                                   />
//                                   <span>-</span>
//                                   <Input
//                                     type="time"
//                                     value={hour.closeTime}
//                                     onChange={(e) => updateWorkingHour(index, 'closeTime', e.target.value)}
//                                     className="w-full sm:w-32"
//                                   />
//                                 </div>
//                               )}
//                             </div>
//                           </Card>
//                         ))}
//                       </div>
//                     </TabsContent>




//                     <TabsContent value="social" className="space-y-6 mt-6">
//                       <div className="space-y-4">
//                         <h3 className="text-lg font-medium">{ 'وسائل التواصل الاجتماعي'}</h3>
                        
//                         {socialPlatforms.map((platform) => {
//                           const IconComponent = platform.icon;
//                           const currentLink = socialLinks.find(link => link.platform === platform.name);
                          
//                           return (
//                             <Card key={platform.name} className="p-4">
//                               <div className="flex items-center gap-4">
//                                 <div className={`p-3 rounded-lg ${platform.bg}`}>
//                                   <IconComponent className={`w-5 h-5 ${platform.color}`} />
//                                 </div>
//                                 <div className="flex-1">
//                                   <Label className="text-sm font-medium capitalize mb-2 block">
//                                     {platform.name}
//                                   </Label>
//                                   <Input
//                                     placeholder={`https://${platform.name}.com/yourprofile`}
//                                     value={currentLink?.url || ''}
//                                     onChange={(e) => updateSocialLink(platform.name, e.target.value)}
//                                     className="h-10"
//                                   />
//                                 </div>
//                               </div>
//                             </Card>
//                           );
//                         })}
//                       </div>
//                     </TabsContent>

//                     <TabsContent value="settings" className="space-y-6 mt-6">
//                       <div className="space-y-4">
//                         <h3 className="text-lg font-medium">{'إعدادات الملف الشخصي'}</h3>
                        
//                         <Card className="p-4">
//                           <FormField
//                             control={form.control}
//                             name="enableFeedback"
//                             render={({ field }) => (
//                               <FormItem className="flex items-center justify-between">
//                                 <div>
//                                   <FormLabel className="text-base font-medium">
//                                     { 'تفعيل التقييمات والمراجعات'}
//                                   </FormLabel>
//                                   <FormDescription>
//                                     { 'السماح للعملاء بترك تقييمات ومراجعات لملفك الشخصي' 
//                                      }
//                                   </FormDescription>
//                                 </div>
//                                 <FormControl>
//                                   <Switch
//                                     checked={field.value}
//                                     onCheckedChange={field.onChange}
//                                   />
//                                 </FormControl>
//                               </FormItem>
//                             )}
//                           />
//                             {/* <FormField
//                             control={form.control}
//                             name="enableFeedback"
//                             render={({ field }) => (
//                               <FormItem className="flex items-center justify-between">
//                                 <div>
//                                   <FormLabel className="text-base font-medium">
//                                     { 'تفعيل التقييمات والمراجعات'}
//                                   </FormLabel>
//                                   <FormDescription>
//                                     { 'السماح للعملاء بترك تقييمات ومراجعات لملفك الشخصي' 
//                                      }
//                                   </FormDescription>
//                                 </div>
//                                 <FormControl>
//                                   <Switch
//                                     checked={field.value}
//                                     onCheckedChange={field.onChange}
//                                   />
//                                 </FormControl>
//                               </FormItem>
//                             )}
//                           /> */}
//                         </Card>
//                       </div>
//                     </TabsContent>
                 
                 
//                   </Tabs>

//                   <div className="flex gap-4 pt-6">
//                     <Button 
//                       type="button" 
//                       variant="outline" 
//                       className="flex-1"
//                       disabled={isLoading}
//                       onClick={() => route.push('/dashboard')}
//                     >
//                       { 'إلغاء' }
//                     </Button>
//                     <Button type="submit" className="flex-1" disabled={isLoading}>
//                      {isLoading ? (
//     <>
//       <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
//       جاري الحفظ...
//     </>
//   ) : (
//     <>
//       <Save className="mr-2 h-4 w-4" />
//       تعديل الملف الشخصي
//     </>
//   )}
//                     </Button>
//                   </div>
//                 </form>
//               </Form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
    
//   );
// }

"use client";

// ... [الاستيرادات هي نفسها كما في ملف ProfileForm الأصلي]
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Camera, EarthIcon, Facebook, Filter, Instagram, Linkedin, MessageCircle, Phone, Save, Send, Star, Twitter, Youtube, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MenuItem } from "@/components/templates/new/t8tempo/mock"; // تأكد من المسار
import { toast } from "sonner";
import { GeneralResponse } from "@/lib/db/repo"; // تأكد من المسار
import { templatesList } from "@/app/(client)/themes/mocks/mockdata";

// ----------------------------------------
// Interfaces (نفس الـ Interfaces الأصلية)
// ----------------------------------------

interface SocialMediaplatformBuilder {
  id: string;
  name: string;
  icon: string;
  open_type: string;
}

export interface SocialMediaplatform {
  social: SocialMediaplatformBuilder;
  value: string;
  is_Active: boolean;
}

export interface DataModelTODB {
  id : string;
  title: string;
  description: string;
  address: string;
  logo: File | null;
  banner: File | null;
  socialLinks: SocialMediaplatform[];
  selectedItems: MenuItem[];
  selectedTheme: string;
}

// ----------------------------------------
// New/Modified Interfaces (إضافة البيانات الأولية)
// ----------------------------------------

interface InitialData {
    id: string;
    title: string;
    description: string;
    address: string;
    logoUrl: string | null;
    bannerUrl: string | null;
    socialLinks: SocialMediaplatform[];
    selectedItems: MenuItem[];
    selectedTheme: string;
}

interface ProfileEditFormProps {
  isFreePlan: boolean;
  items: MenuItem[];
  //mn: boolean;
  actions: {
    updateProfile: (arg: DataModelTODB) => Promise<GeneralResponse>; // تحديث الـ action
  };
  initialData: InitialData; // إضافة البيانات الأولية
}

// ----------------------------------------
// getSocialIcon (نفس الدالة الأصلية)
// ----------------------------------------
const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case "whatsapp": return <MessageCircle className="w-5 h-5 text-green-600" />;
    case "phone": return <Phone className="w-5 h-5 text-blue-600" />;
    case "facebook": return <Facebook className="w-5 h-5 text-blue-700" />;
    case "instagram": return <Instagram className="w-5 h-5 text-pink-600" />;
    case "youtube": return <Youtube className="w-5 h-5 text-red-600" />;
    case "twitter": return <Twitter className="w-5 h-5 text-sky-500" />;
    case "tiktok": return <Send className="w-5 h-5 text-black" />;
    case "linkedin": return <Linkedin className="w-5 h-5 text-blue-700" />;
    default: return <EarthIcon className="w-5 h-5" />;
  }
};

// ----------------------------------------
// ProfileEditFormClient (الـ Component المعدّل)
// ----------------------------------------

export default function ProfileEditFormClient(
  { isFreePlan, items, actions, initialData }: ProfileEditFormProps) {
  const route = useRouter();
  const [logoImage, setLogoImage] = useState<string | null>(initialData.logoUrl); // تعيين الـ URL الأولي
  const [bannerImage, setBannerImage] = useState<string | null>(initialData.bannerUrl); // تعيين الـ URL الأولي
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

  // دمج الـ socials الثابتة مع البيانات الأولية
  const initialSocials = socials.map(s => {
    const existing = initialData.socialLinks.find(link => link.social.id === s.id);
    return existing || { social: s, value: "", is_Active: false };
  });

  const [socialLinks, setSocialLinks] = useState<SocialMediaplatform[]>(initialSocials);

  // يجب أن تكون هذه الـ state هي لملف جديد تم اختياره فقط
  const [logoFile, setLogoFile] = useState<File | null>(null); 
  const [bannerFile, setBannerFile] = useState<File | null>(null);

  // responsive states
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"basic" | "themes" | "social" | "items">("basic");

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const [selectedItems, setSelectedItems] = useState<MenuItem[]>(initialData.selectedItems); // تعيين العناصر الأولية
  const [selectedTheme, setselectedTheme] = useState<string>(initialData.selectedTheme); // تعيين القالب الأولي

  const form = useForm({
    defaultValues: {
      title:           initialData.title,
      description:            initialData.description,
      address:           initialData.address,
    },
    mode: "onBlur",
  });

  // ----------------------------------------
  // Handlers (مع تحديث ليتعامل مع الـ File/URL)
  // ----------------------------------------
  
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setLogoImage(ev.target?.result as string);
      reader.readAsDataURL(file);
      setLogoFile(file); // حفظ الملف الجديد
    }
  };

  const handleBannerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setBannerImage(ev.target?.result as string);
      reader.readAsDataURL(file);
      setBannerFile(file); // حفظ الملف الجديد
    }
  };

  // ----------------------------------------
  // Validation & Social Helpers (نفس الدالة الأصلية)
  // ----------------------------------------
  
  const sanitizeInput = (value: string) => value.replace(/<[^>]*>?/gm, "").trim();
  
  const validateSocialInput = (socialId: string, value: string): { valid: boolean; sanitizedValue: string; error?: string } => {
    // ... [نفس منطق التحقق في الكومبوننت الأصلي]
    const social = socials.find((s) => s.id === socialId);
    const val = sanitizeInput(value);

    if (!social) return { valid: false, sanitizedValue: val, error: "منصة غير موجودة" };

    switch (social.icon) {
      case "phone":
      case "whatsapp":
        if (!/^\+?\d{10,15}$/.test(val)) return { valid: false, sanitizedValue: val, error: "رقم غير صالح" };
        break;
      default:
        if (!/^https?:\/\/.+/.test(val)) return { valid: false, sanitizedValue: val, error: "رابط غير صالح" };
        break;
    }

    return { valid: true, sanitizedValue: val };
  };
  
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

  const toggleSocialActive = (socialId: string) => {
    setSocialLinks((prev) =>
      prev.map((l) => {
        if (l.social.id !== socialId) return l;
        return { ...l, is_Active: l.value.length > 0 ? !l.is_Active : false };
      })
    );
  };
  
  const getPlaceholder = (type: string) => {
    // ... [نفس الدالة الأصلية]
    switch (type) {
      case "phone": return "+201012345678";
      case "whatsapp": return "+201012345678";
      // case "instagram": return "مثال: https://instagram.com/username";
      // case "facebook": return "مثال: https://facebook.com/username";
      // case "tiktok": return "مثال: https://tiktok.com/@username";
      default: return "ضع الرابط هنا";
    }
  };
  
  // ----------------------------------------
  // onSubmit (تعديل لإرسال الـ updateProfile action)
  // ----------------------------------------
  const onSubmit = async () => {
    
    try {
      setIsLoading(true);
      
      // التحقق من صلاحية الإدخال الاجتماعي
      for (const link of socialLinks) {
        if (link.value.trim().length > 0 && !link.is_Active) {
          toast.error(`القيمة المدخلة لـ ${link.social.name} غير صالحة`);
          return;
        }
      }
      
      // لا نحتاج للتحقق من mn (الحد الأقصى) هنا لأنه تحديث وليس إضافة
      
      // نجمع كل البيانات في object واحد
      const payload: DataModelTODB = {
        id: initialData.id,
        title: form.getValues().title,
        description: form.getValues().description,
        address: form.getValues().address,
        logo: logoFile, 
        banner: bannerFile,
        socialLinks: socialLinks.filter((s) => s.is_Active),
        selectedItems: selectedItems,
        selectedTheme: selectedTheme,
      };

      // التحقق من وجود الشعار/البانر (سواء كان URL قديم أو File جديد)
      if ((!initialData.logoUrl && !payload.logo) || (!initialData.bannerUrl && !payload.banner)) {
        toast.error('يرجى تحديد الشعار والبانر');
        return;
      }

      // إرسال إلى الـ updateProfile action
      const res = await actions.updateProfile(payload);
      // console.log(res)
      
      if (!res.status) {
     
        toast.error(res.error);
        return;

      }

      toast.success('تم تحديث الملف الشخصي بنجاح');
       route.push("/dashboard")

    

    } catch (err) {
      console.error("Submit Error:", err);
      toast.error('حدث خطأ أثناء التحديث.');
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



//   return (
//     <div className="p-4">
//       <div className="max-w-6xl mx-auto">
//         <Card><CardHeader><CardTitle className="flex items-center gap-2">
//               <Star className="h-5 w-5 text-primary" />
//               **{"تعديل الملف الشخصي:    " + initialData.title}**             </CardTitle>
//           </CardHeader>

//           <CardContent>
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//                 <div className="mb-4">
//                   {!isMobile ? (
//                     <Tabs defaultValue="basic" value={activeTab} onValueChange={(v: any) => setActiveTab(v)}>
//                       <TabsList>
//                         <TabsTrigger value="basic">المعلومات الأساسية</TabsTrigger>
//                         <TabsTrigger value="social">وسائل التواصل</TabsTrigger>
//                         {!isFreePlan && <TabsTrigger value="items">عناصر القائمة</TabsTrigger>}
//                         <TabsTrigger value="themes">قالب العرض </TabsTrigger>
//                       </TabsList>
//                     </Tabs>
//                   ) : (
//                     <div className="w-full">
//                       <Select value={activeTab} onValueChange={(v: any) => setActiveTab(v)}>
//                         <SelectTrigger className="w-full">
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {tabOptions.map((opt) => (
//                             <SelectItem key={opt.value} value={opt.value}>
//                               {opt.label}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   )}
//                 </div>

//                 {/* باقي الـ JSX (BASIC, SOCIAL, ITEMS, THEMES) هو نفسه بالضبط */}
//                 <div>
//                    {/* BASIC */}
//                    {activeTab === "basic" && (
//                      // ... [نفس محتوى الـ BASIC tab]
//                       <div className="space-y-6">
//                       <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }}>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                           {/* Logo */}
//                           <div>
//                             <Label className="text-base font-medium mb-2">الشعار *</Label>
//                             <div className="flex flex-col items-center gap-3">
//                               <div className="relative">
//                                 <Avatar className="w-28 h-28 border-4 border-background shadow-xl">
//                                   <AvatarImage src={logoImage || initialData.logoUrl || ""} />
//                                   <AvatarFallback className="bg-primary/10 text-2xl">
//                                     {form.watch("title") ? form.watch("title").substring(0, 2).toUpperCase() : "LP"}
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

//                       {/* data fields */}
//                       <div className="space-y-4">
// {/* 
//                         <FormField control={form.control} name="title" rules={{ required: "الإسم مطلوب" }} render={({ field }) => (
//                           <FormItem>
//                             <FormLabel className="text-base">الإسم *</FormLabel>
//                             <FormControl>
//                               <Input className="h-12" placeholder="إسم النشاط " {...field} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )} /> */}
// <FormField
//   control={form.control}
//   name="title"
//   rules={{ required: "الإسم مطلوب" }}
//   render={({ field }) => (
//     <FormItem>
//       <FormLabel className="text-base">الإسم *</FormLabel>
//       <FormControl><Input className="h-12" placeholder="إسم النشاط " {...field} /></FormControl>
//       <FormMessage />
//     </FormItem>
//   )}
// />

//                         <FormField control={form.control} name="address" rules={{ required: "العنوان مطلوب" }} render={({ field }) => (
//                           <FormItem>
//                             <FormLabel>العنوان *</FormLabel>
//                             <FormControl><Input className="h-12" placeholder="ادخل عنوان..." {...field} /></FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )} />
// <FormField
//   control={form.control}
//   name="description"
//   render={({ field }) => (
//     <FormItem>
//       <FormLabel className="text-base">نبذة عنك *</FormLabel>
//       <FormControl><Textarea className="min-h-[120px]" placeholder="اكتب نبذة موجزة..." {...field} /></FormControl>
//       <FormMessage />
//     </FormItem>
//   )}
// />
// {/*                         <FormField control={form.control} name="description" render={({ field }) => (
//                           <FormItem>
//                             <FormLabel className="text-base">نبذة عنك *</FormLabel>
//                             <FormControl>
//                               <Textarea className="min-h-[120px]" placeholder="اكتب نبذة موجزة..." {...field} />
//                             </FormControl>
//                             <FormMessage />
//                           </FormItem>
//                         )} /> */}

//                       </div>
//                     </div>
//                    )}
//                    {/* SOCIAL */}
//                    {activeTab === "social" && (
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
//                                     const cur = socialLinks.find((s) => s.social.id === platform.id);
//                                     if (cur && cur.value.trim().length === 0) {
//                                       updateSocialLink(platform.id, "");
//                                     }
//                                   }}
//                                 />
//                                 {(current?.value?.length ?? 0) > 0 && !current?.is_Active && (
//                                   <p className="text-xs text-red-500 mt-1">القيمة غير صالحة</p>
//                                 )}
//                               </div>
//                               <div className="flex items-center gap-2">
//                                 <button
//                                   type="button"
//                                   onClick={() => toggleSocialActive(platform.id)}
//                                   className={`p-2 rounded-md border ${
//                                     current?.is_Active ? "bg-primary text-white border-primary" : "bg-white text-muted-foreground"
//                                   }`}
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
//                    )}
//                    {/* ITEMS */}
//                    {activeTab === "items" && !isFreePlan && (
//                      <div className="space-y-4">
//                        <h3 className="text-lg font-medium">عناصر القائمة</h3>
//                        <MenuItemsSelector selectedItems={selectedItems} setSelectedItems={setSelectedItems} items={items} />
//                      </div>
//                    )}
//                    {/* Themes */}
//                    {activeTab === "themes" && (
//                      <div className="space-y-4">
//                        <h3 className="text-lg font-medium">قوالب العرض</h3>
//                        <TemplatesGridList
//                          selectedTheme={selectedTheme}
//                          setSelectedTheme={setselectedTheme}
//                          isFreePlan={isFreePlan}
//                        />
//                      </div>
//                    )}
//                 </div>

//                 <div className="flex gap-4 pt-6">
//                   <Button type="button" variant="outline" className="flex-1" disabled={isLoading} onClick={() => route.push("/dashboard")}>إلغاء</Button>
//                   <Button type="submit" className="flex-1" disabled={isLoading}>
//                     {isLoading ? (<><span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" /> جاري الحفظ...</>) : (<><Save className="mr-2 h-4 w-4" /> حفظ التعديلات</>)}
//                   </Button>
//                 </div>
//               </form>
//             </Form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );




  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              {"تعديل الملف الشخصي:    " + initialData.title}
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
                                  <AvatarImage src={logoImage || initialData.logoUrl || ""} />
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


// /* ---------------------------
//    MenuItemsSelector Component (نفس الكومبوننت الأصلي)
//    ---------------------------*/
// function MenuItemsSelector({ selectedItems, setSelectedItems, items }: { selectedItems: MenuItem[]; setSelectedItems: React.Dispatch<React.SetStateAction<MenuItem[]>>; items: MenuItem[]; }) {
// // ... [نفس منطق الـ MenuItemsSelector]
//   const toggleItem = (item: MenuItem) => {
//   setSelectedItems((prev) => {
//     const exists = prev.some((i) => i.id === item.id);
//     if (exists) {
//       return prev.filter((i) => i.id !== item.id);
//     } else {
//       return [...prev, item];
//     }
//   });
// };


//   const categories = items && items.length > 0 ? Array.from(new Set(items.map((item) => item.category))) : [];
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const filteredItems = selectedCategory === "all" ? items || [] : items?.filter((item) => item.category === selectedCategory) || [];

//   return (
//     <div className="min-h-screen relative text-black bg-blue-200 overflow-hidden">
//       <div className="absolute inset-0 z-0 flame-bg"></div>

//       <div className="top-0 z-20 relative">
//         <div className="absolute inset-0 bg-white"></div>


//         <div className="relative max-w-7xl mx-auto px-4 py-4 flex items-center gap-3 overflow-x-auto scrollbar-hide">
//           <Filter className="w-5 h-5 text-blue-700 shrink-0 z-10" />
//           <Button type="button" onClick={() => setSelectedCategory("all")} className={`whitespace-nowrap relative z-10 ${selectedCategory === "all" ? "bg-linear-to-r from-blue-300 to-blue-700 text-white shadow-[0_0_10px_rgba(255,140,0,0.7)]" : "bg-linear-to-r from-brown to-orange-900 text-white"}`}>الكل</Button>
//           {categories.map((category) => (
//             <Button type="button" key={category} onClick={() => setSelectedCategory(category)} className={`whitespace-nowrap relative z-10 ${selectedCategory === category ? "bg-linear-to-r from-blue-300 to-blue-700 text-white shadow-[0_0_10px_rgba(255,140,0,0.7)]" : "bg-linear-to-r from-brown to-orange-900 text-white"}`}>{category}</Button>
//           ))}
//         </div>
//       </div>


//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pr-5 mt-6 p-2">
//         {filteredItems.map((i) => {
//           const selected = selectedItems.some((s) => s.id === i.id);
//           return (
//             <div
//               key={i.id}
//               className={`bg-white rounded-xl shadow p-3 flex flex-row gap-3 items-center cursor-pointer hover:shadow-lg transition relative ${selected ? "border-2 border-blue-500" : ""}`}
//               onClick={() => toggleItem(i)}
//             >
//               {/* CHECK MARK */}
//               {selected && (
//                 <div className="absolute -top-2 -left-2 z-30">
//                   <div className="bg-blue-600 text-white rounded-full p-1 shadow-md">
//                     <Check className="w-4 h-4" />
//                   </div>
//                 </div>
//               )}

//               <div className="w-20 h-20 shrink-0 relative">
//                 <img src={i.image} alt={i.name} className="w-full h-full object-contain rounded bg-gray-100" />
//                 <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition rounded"></div>
//               </div>

//               <div className="flex flex-col text-right flex-1">
//                 <h2 className="text-sm font-semibold text-gray-800">{i.name}</h2>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <style jsx>{`
//         .flame-bg {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(45deg, rgba(255,80,0,0.08), rgba(255,160,0,0.06), rgba(255,40,0,0.04), rgba(255,120,0,0.03));
//           background-size: 400% 400%;
//           animation: flameAnim 12s ease-in-out infinite;
//         }
//         @keyframes flameAnim { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
//       `}</style>
//     </div>
//   );
// }

// /* ---------------------------
//    TemplatesGridList Component (نفس الكومبوننت الأصلي)
//    ---------------------------*/
// // ... [نفس الكومبوننت TemplateGridList]

// function TemplatesGridList({
//   isFreePlan,
//   selectedTheme,
//   setSelectedTheme,
// }: {
//   isFreePlan: boolean;
//   selectedTheme: string | null;
//   setSelectedTheme: React.Dispatch<React.SetStateAction<string>>;
// }) {
//     // جلب templatesList و TemplateInfo

//   const publicTemplates = isFreePlan ? templatesList.filter((tpl) => tpl.theme_type === "public" && tpl.isPremium === false) : templatesList;

//   useEffect(() => {
//     if (publicTemplates.length > 0) {
//       setSelectedTheme((prev) => (prev ? prev : publicTemplates[0].id));
//     } else {
//       setSelectedTheme("profile-f-a");
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isFreePlan]);

//   const toggleTheme = (id: string) => {
//     setSelectedTheme(selectedTheme === id ? "profile-f-a" : id);
//   };

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//         {publicTemplates.map((tpl) => {
//           const selected = selectedTheme === tpl.id;
//           return (
//             <div
//               key={tpl.id}
//               className={`bg-white rounded-xl shadow p-3 flex flex-row gap-3 items-center cursor-pointer hover:shadow-lg transition relative ${selected ? "border-2 border-blue-500" : ""}`}
//               onClick={() => toggleTheme(tpl.id)}
//             >
//               {/* Check overlay when selected */}
//               {selected && (
//                 <div className="absolute -top-2 -left-2 z-30">
//                   <div className="bg-blue-600 text-white rounded-full p-1 shadow-md">
//                     <Check className="w-4 h-4" />
//                   </div>
//                 </div>
//               )}

//               <div className="w-20 h-20 shrink-0 relative">
//                 <img src={tpl.thumbnail} alt={tpl.title} className="w-full h-full object-contain rounded bg-gray-100" />
//                 <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition rounded"></div>
//               </div>

//               <div className="flex flex-col text-right flex-1">
//                 <h2 className="text-sm font-semibold text-gray-800">{tpl.title}</h2>
//                 <p className="text-xs text-gray-500">اضغط للمعاينة</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

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
          // const selected = selectedItems.includes(i);
          const selected = selectedItems.some((s) => s.id === i.id);
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
