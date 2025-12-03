// // import React from 'react';
// import ProfileForm from './clientsection';
// // import { isFreeUser } from '../actions';

import { AddProfileToDb ,getUserPlanAndItems } from "./new/actions";
import ProfileForm from "./new/components";

// export default async function AddProfilePage() {
//    const isFree =   false;     //await isFreeUser(); // ✅ استدعاء الدالة
//   return (
//     <div
//     // className="max-w-4xl mx-auto py-10"
//      >
//   {/* <h1 className="text-2xl font-bold mb-6">إنشاء ملف شخصي جديد</h1> */}
//       <ProfileForm isFreePlan={isFree}/>
//     </div>
//   );
// }


// 'use client';

// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Badge } from '@/components/ui/badge';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Switch } from '@/components/ui/switch';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { 
//   Camera, 
//   Save, 
//   Facebook, 
//   Instagram, 
//   Twitter, 
//   Linkedin, 
//   Globe,
//   Clock,
//   Check,
//   Eye,
//   Package,
//   Image as ImageIcon,
//   Sparkles
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { cn } from '@/lib/utils';

// interface WorkingHour {
//   day: string;
//   isOpen: boolean;
//   openTime: string;
//   closeTime: string;
//   period: 'AM' | 'PM';
// }

// interface SocialMediaLink {
//   platform: string;
//   url: string;
// }

// interface ProfileFormValues {
//   name: string;
//   type: 'restaurant' | 'retail' | 'professional';
//   bio: string;
//   phone: string;
//   email: string;
//   address: string;
//   website?: string;
// }

// interface Item {
//   id: string;
//   name: string;
//   image: string;
//   price: number;
//   description: string;
//   selected: boolean;
// }

// interface Template {
//   id: string;
//   name: string;
//   nameAr: string;
//   thumbnail: string;
//   description: string;
//   descriptionAr: string;
// }

// const socialPlatforms = [
//   { name: 'facebook', icon: Facebook, color: 'text-blue-600', bg: 'bg-blue-50' },
//   { name: 'instagram', icon: Instagram, color: 'text-pink-600', bg: 'bg-pink-50' },
//   { name: 'twitter', icon: Twitter, color: 'text-sky-500', bg: 'bg-sky-50' },
//   { name: 'linkedin', icon: Linkedin, color: 'text-blue-700', bg: 'bg-blue-50' },
//   { name: 'website', icon: Globe, color: 'text-gray-600', bg: 'bg-gray-50' },
// ];

// const daysOfWeek = [
//   'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
// ];

// const templates: Template[] = [
//   {
//     id: 'modern',
//     name: 'Modern Minimal',
//     nameAr: 'عصري بسيط',
//     thumbnail: '/placeholder.svg',
//     description: 'Clean and modern design with minimalist layout',
//     descriptionAr: 'تصميم نظيف وعصري مع تخطيط بسيط'
//   },
//   {
//     id: 'elegant',
//     name: 'Elegant Pro',
//     nameAr: 'أنيق احترافي',
//     thumbnail: '/placeholder.svg',
//     description: 'Professional design with elegant typography',
//     descriptionAr: 'تصميم احترافي مع طباعة أنيقة'
//   },
//   {
//     id: 'vibrant',
//     name: 'Vibrant Colors',
//     nameAr: 'ألوان زاهية',
//     thumbnail: '/placeholder.svg',
//     description: 'Colorful and energetic design for creative businesses',
//     descriptionAr: 'تصميم ملون ونشط للأعمال الإبداعية'
//   },
//   {
//     id: 'classic',
//     name: 'Classic Business',
//     nameAr: 'كلاسيكي للأعمال',
//     thumbnail: '/placeholder.svg',
//     description: 'Traditional professional design',
//     descriptionAr: 'تصميم احترافي تقليدي'
//   }
// ];

// export default function AddProfile ()  {
  
//   const [logoImage, setLogoImage] = useState<string | null>(null);
//   const [bannerImage, setBannerImage] = useState<string | null>(null);
//   const [selectedTemplate, setSelectedTemplate] = useState<string>('modern');
//   const [items, setItems] = useState<Item[]>([
//     { id: '1', name: 'Item 1', image: '/placeholder.svg', price: 29.99, description: 'Sample item description', selected: false },
//     { id: '2', name: 'Item 2', image: '/placeholder.svg', price: 39.99, description: 'Sample item description', selected: false },
//     { id: '3', name: 'Item 3', image: '/placeholder.svg', price: 49.99, description: 'Sample item description', selected: false },
//     { id: '4', name: 'Item 4', image: '/placeholder.svg', price: 59.99, description: 'Sample item description', selected: false },
//   ]);
//   const [workingHours, setWorkingHours] = useState<WorkingHour[]>(
//     daysOfWeek.map(day => ({
//       day,
//       isOpen: true,
//       openTime: '09:00',
//       closeTime: '17:00',
//       period: 'AM' as const
//     }))
//   );
//   const [socialLinks, setSocialLinks] = useState<SocialMediaLink[]>(
//     socialPlatforms.map(platform => ({
//       platform: platform.name,
//       url: ''
//     }))
//   );
  
//   const form = useForm<ProfileFormValues>({
//     defaultValues: {
//       name: '',
//       type: 'restaurant',
//       bio: '',
//       phone: '',
//       email: '',
//       address: '',
//       website: '',
//     }
//   });

//   const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setLogoImage(e.target?.result as string);
//       };
//       reader.readAsDataURL(file);
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
//     }
//   };

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

//   const toggleItemSelection = (itemId: string) => {
//     setItems(prev =>
//       prev.map(item =>
//         item.id === itemId ? { ...item, selected: !item.selected } : item
//       )
//     );
//   };

//   const onSubmit = async (data: ProfileFormValues) => {
//     // try {
//     //   if (!logoImage || !bannerImage) {
//     //     // toast({
//     //     //   title: 'صور مطلوبة' : 'Images Required',
//     //     //   description: isArabic ? 'يجب رفع صورة الشعار وصورة الغلاف' : 'Logo and banner images are required',
//     //     //   variant: 'destructive',
//     //     // });
//     //     return;
//     //   }

//     // //   await profileService.createProfile({
//     // //     ...data,
//     // //     description: data.bio,
//     // //     logoImage,
//     // //     bannerImage,
//     // //   });
      
//     // //   toast({
//     // //     title:  'تم إنشاء الملف الشخصي بنجاح',
//     // //     description:  'تم إنشاء الملف الشخصي الخاص بك' ,
//     // //   });
      
//     //   navigate('/dashboard');
//     // } catch (error) {
//     //   console.error('Error creating profile:', error);
//     //   toast({
//     //     title:'خطأ في إنشاء الملف الشخصي',
//     //     description: 'حدث خطأ أثناء محاولة إنشاء الملف الشخصي',
//     //     variant: 'destructive',
//     //   });
//     // }
//   };

//   return (
//       <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20">
//         {/* Header */}
//         <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b">
//           <div className="container mx-auto px-4 py-4">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
//                   <Sparkles className="w-5 h-5 text-primary" />
//                 </div>
//                 <div>
//                   <h1 className="text-xl font-bold">
//                     { 'إنشاء ملف شخصي جديد'}
//                   </h1>
//                   <p className="text-sm text-muted-foreground">
//                     { 'املأ التفاصيل لإنشاء ملفك الشخصي'}
//                   </p>
//                 </div>
//               </div>
//               <Button  variant="ghost">
//                 {'إلغاء'}
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="container mx-auto px-4 py-8 pb-24">
//           <div className="grid lg:grid-cols-3 gap-6">
//             {/* Main Form - Takes 2 columns */}
//             <div className="lg:col-span-2 space-y-6">
//               {/* Images Section */}
//               <Card className="border-2">
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-2 mb-6">
//                     <Camera className="w-5 h-5 text-primary" />
//                     <h2 className="text-lg font-semibold">
//                       {'الصور'}
//                     </h2>
//                     <Badge variant="secondary" className="ml-auto">
//                       { 'مطلوب'}
//                     </Badge>
//                   </div>
                  
//                   <div className="grid md:grid-cols-2 gap-6">
//                     {/* Logo */}
//                     <div className="space-y-3">
//                       <Label className="text-sm font-medium">
//                         {'شعار المنشأة'}
//                       </Label>
//                       <div className="flex flex-col items-center gap-4 p-6 border-2 border-dashed rounded-xl hover:border-primary/50 transition-colors">
//                         <Avatar className="w-24 h-24 border-4 border-background shadow-lg">
//                           <AvatarImage src={logoImage || ""} />
//                           <AvatarFallback className="bg-primary/10 text-lg">
//                             {form.watch('name') ? form.watch('name').substring(0, 2).toUpperCase() : 'LP'}
//                           </AvatarFallback>
//                         </Avatar>
//                         <Label htmlFor="logo-upload" className="cursor-pointer">
//                           <div className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
//                             {logoImage ? ( 'تغيير الشعار') : ( 'رفع الشعار' )}
//                           </div>
//                         </Label>
//                         <Input 
//                           id="logo-upload" 
//                           type="file" 
//                           accept="image/*" 
//                           className="hidden" 
//                           onChange={handleLogoUpload}
//                         />
//                         <p className="text-xs text-muted-foreground text-center">
//                           {'500 × 500 بكسل' }
//                         </p>
//                       </div>
//                     </div>

//                     {/* Banner */}
//                     <div className="space-y-3">
//                       <Label className="text-sm font-medium">
//                         {'صورة الغلاف'}
//                       </Label>
//                       <div className="relative h-full min-h-[200px] border-2 border-dashed rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
//                         {bannerImage ? (
//                           <img 
//                             src={bannerImage} 
//                             alt="Banner" 
//                             className="w-full h-full object-cover"
//                           />
//                         ) : (
//                           <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
//                             <ImageIcon className="w-10 h-10 text-muted-foreground/50" />
//                             <p className="text-sm text-muted-foreground text-center">
//                               { 'انقر لرفع صورة الغلاف'}
//                             </p>
//                             <p className="text-xs text-muted-foreground">
//                               { '1200 × 400 بكسل'}
//                             </p>
//                           </div>
//                         )}
//                         <Input 
//                           id="banner-upload" 
//                           type="file" 
//                           accept="image/*"
//                           className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
//                           onChange={handleBannerUpload}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Basic Info */}
//               <Card className="border-2">
//                 <CardContent className="p-6">
//                   <h2 className="text-lg font-semibold mb-6">
//                     { 'المعلومات الأساسية'}
//                   </h2>
                  
//                   <div className="space-y-4">
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="name">
//                           {'اسم المنشأة *'}
//                         </Label>
//                         <Input 
//                           id="name"
//                           placeholder={ 'مطعم السعادة' } 
//                           {...form.register('name', { required: true })}
//                         />
//                       </div>
                      
//                       <div className="space-y-2">
//                         <Label htmlFor="type">
//                           { 'نوع النشاط *'}
//                         </Label>
//                         <Select 
//                           onValueChange={(value) => form.setValue('type', value as any)}
//                           defaultValue={form.watch('type')}
//                         >
//                           <SelectTrigger>
//                             <SelectValue />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="restaurant">{ 'مطعم'}</SelectItem>
//                             <SelectItem value="retail">{ 'متجر'}</SelectItem>
//                             <SelectItem value="professional">{ 'خدمات مهنية' }</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="bio">
//                         { 'نبذة عن المنشأة *'}
//                       </Label>
//                       <Textarea 
//                         id="bio"
//                         rows={4}
//                         placeholder={ 'اكتب نبذة موجزة...' }
//                         {...form.register('bio', { required: true })}
//                       />
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="phone">
//                           { 'رقم الهاتف' }
//                         </Label>
//                         <Input 
//                           id="phone"
//                           type="tel"
//                           placeholder="+1234567890"
//                           {...form.register('phone')}
//                         />
//                       </div>
                      
//                       <div className="space-y-2">
//                         <Label htmlFor="email">
//                           { 'البريد الإلكتروني' }
//                         </Label>
//                         <Input 
//                           id="email"
//                           type="email"
//                           placeholder="info@example.com"
//                           {...form.register('email')}
//                         />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="address">
//                         { 'العنوان'}
//                       </Label>
//                       <Input 
//                         id="address"
//                         placeholder={ '123 شارع الرئيسي، المدينة'}
//                         {...form.register('address')}
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="website">
//                         { 'الموقع الإلكتروني' }
//                       </Label>
//                       <Input 
//                         id="website"
//                         type="url"
//                         placeholder="https://example.com"
//                         {...form.register('website')}
//                       />
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Working Hours */}
//               <Card className="border-2">
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-2 mb-6">
//                     <Clock className="w-5 h-5 text-primary" />
//                     <h2 className="text-lg font-semibold">
//                       {'ساعات العمل'}
//                     </h2>
//                   </div>
                  
//                   <div className="space-y-3">
//                     {workingHours.map((hour, index) => (
//                       <div 
//                         key={hour.day} 
//                         className="flex flex-wrap items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
//                       >
//                         <div className="w-28">
//                           <Label className="text-sm font-medium">{hour.day}</Label>
//                         </div>
                        
//                         <div className="flex items-center gap-2">
//                           <input 
//                             type="checkbox"
//                             checked={hour.isOpen}
//                             onChange={(e) => updateWorkingHour(index, 'isOpen', e.target.checked)}
//                             className="w-4 h-4 rounded border-primary"
//                           />
//                           <span className="text-sm text-muted-foreground">
//                             {'مفتوح' }
//                           </span>
//                         </div>

//                         {hour.isOpen && (
//                           <>
//                             <Input 
//                               type="time"
//                               value={hour.openTime}
//                               onChange={(e) => updateWorkingHour(index, 'openTime', e.target.value)}
//                               className="w-32"
//                             />
//                             <span className="text-muted-foreground">-</span>
//                             <Input 
//                               type="time"
//                               value={hour.closeTime}
//                               onChange={(e) => updateWorkingHour(index, 'closeTime', e.target.value)}
//                               className="w-32"
//                             />
//                             <Select 
//                               value={hour.period}
//                               onValueChange={(value) => updateWorkingHour(index, 'period', value)}
//                             >
//                               <SelectTrigger className="w-24">
//                                 <SelectValue />
//                               </SelectTrigger>
//                               <SelectContent>
//                                 <SelectItem value="AM">AM</SelectItem>
//                                 <SelectItem value="PM">PM</SelectItem>
//                               </SelectContent>
//                             </Select>
//                           </>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Social Media */}
//               <Card className="border-2">
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-2 mb-6">
//                     <Globe className="w-5 h-5 text-primary" />
//                     <h2 className="text-lg font-semibold">
//                       { 'وسائل التواصل الاجتماعي'}
//                     </h2>
//                   </div>
                  
//                   <div className="grid gap-4">
//                     {socialPlatforms.map((platform) => {
//                       const Icon = platform.icon;
//                       const link = socialLinks.find(l => l.platform === platform.name);
                      
//                       return (
//                         <div key={platform.name} className="flex items-center gap-3">
//                           <div className={`w-10 h-10 rounded-lg ${platform.bg} flex items-center justify-center flex-shrink-0`}>
//                             <Icon className={`w-5 h-5 ${platform.color}`} />
//                           </div>
//                           <Input 
//                             placeholder={`https://${platform.name}.com/yourprofile`}
//                             value={link?.url || ''}
//                             onChange={(e) => updateSocialLink(platform.name, e.target.value)}
//                             className="flex-1"
//                           />
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Sidebar - Templates & Items */}
//             <div className="space-y-6">
//               {/* Templates Section */}
//               <Card className="border-2 sticky top-24">
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-2 mb-6">
//                     <Sparkles className="w-5 h-5 text-primary" />
//                     <h2 className="text-lg font-semibold">
//                       { 'قوالب العرض'}
//                     </h2>
//                   </div>
                  
//                   <ScrollArea className="h-[400px] pr-4">
//                     <div className="space-y-3">
//                       {templates.map((template) => (
//                         <motion.div
//                           key={template.id}
//                           whileHover={{ scale: 1.02 }}
//                           whileTap={{ scale: 0.98 }}
//                           className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
//                             selectedTemplate === template.id 
//                               ? 'border-primary bg-primary/5' 
//                               : 'border-border hover:border-primary/50'
//                           }`}
//                           onClick={() => setSelectedTemplate(template.id)}
//                         >
//                           <div className="flex gap-3">
//                             <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
//                               <img 
//                                 src={template.thumbnail} 
//                                 alt={template.name}
//                                 className="w-full h-full object-cover"
//                               />
//                             </div>
//                             <div className="flex-1 min-w-0">
//                               <div className="flex items-start justify-between gap-2 mb-1">
//                                 <h3 className="font-medium text-sm truncate">
//                                   {template.nameAr }
//                                 </h3>
//                                 {selectedTemplate === template.id && (
//                                   <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
//                                     <Check className="w-3 h-3 text-primary-foreground" />
//                                   </div>
//                                 )}
//                               </div>
//                               <p className="text-xs text-muted-foreground line-clamp-2">
//                                 { template.descriptionAr}
//                               </p>
//                             </div>
//                           </div>
                          
//                           <Button
//                             size="sm"
//                             variant="ghost"
//                             className="w-full mt-3"
//                             onClick={(e) => {
//                               e.stopPropagation();
//                             //   toast({
//                             //     title: isArabic ? 'معاينة القالب' : 'Preview Template',
//                             //     description: isArabic ? 'فتح المعاينة...' : 'Opening preview...',
//                             //   });
//                             }}
//                           >
//                             <Eye className="w-4 h-4 mr-2" />
//                             {'معاينة' }
//                           </Button>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </ScrollArea>
//                 </CardContent>
//               </Card>

//               {/* Items Section */}
//               <Card className="border-2">
//                 <CardContent className="p-6">
//                   <div className="flex items-center gap-2 mb-6">
//                     <Package className="w-5 h-5 text-primary" />
//                     <h2 className="text-lg font-semibold">
//                       {'العناصر' }
//                     </h2>
//                     <Badge variant="outline" className="ml-auto">
//                       {items.filter(i => i.selected).length} / {items.length}
//                     </Badge>
//                   </div>
                  
//                   <ScrollArea className="h-[400px] pr-4">
//                     <div className="space-y-3">
//                       {items.map((item) => (
//                         <motion.div
//                           key={item.id}
//                           whileHover={{ scale: 1.02 }}
//                           className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
//                             item.selected 
//                               ? 'border-primary bg-primary/5' 
//                               : 'border-border hover:border-primary/50'
//                           }`}
//                           onClick={() => toggleItemSelection(item.id)}
//                         >
//                           <div className="flex gap-3">
//                             <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
//                               <img 
//                                 src={item.image} 
//                                 alt={item.name}
//                                 className="w-full h-full object-cover"
//                               />
//                             </div>
//                             <div className="flex-1 min-w-0">
//                               <div className="flex items-start justify-between gap-2 mb-1">
//                                 <h3 className="font-medium text-sm truncate">{item.name}</h3>
//                                 {item.selected && (
//                                   <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
//                                     <Check className="w-3 h-3 text-primary-foreground" />
//                                   </div>
//                                 )}
//                               </div>
//                               <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
//                                 {item.description}
//                               </p>
//                               <p className="text-sm font-semibold text-primary">
//                                 ${item.price.toFixed(2)}
//                               </p>
//                             </div>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </ScrollArea>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>

//         {/* Save Button - Fixed at bottom */}
//         <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t p-4 z-20">
//           <div className="container mx-auto flex justify-end">
//             <Button 
//               size="lg"
//               onClick={form.handleSubmit(onSubmit)}
//               className="min-w-[200px]"
//             >
//               <Save className="w-5 h-5 mr-2" />
//               {'حفظ الملف الشخصي' }
//             </Button>
//           </div>
//         </div>
//       </div>
   
//   );
// };




export default async function AddProfilePage() {
   const {isfree , items} = await getUserPlanAndItems();     //await isFreeUser(); // ✅ استدعاء الدالة
 // const maxprofiles = false;
  
   return (
    <div
    // className="max-w-4xl mx-auto py-10"
     >
  {/* <h1 className="text-2xl font-bold mb-6">إنشاء ملف شخصي جديد</h1> */}
      <ProfileForm
      isFreePlan={isfree}
      items={items}
   //   mn={maxprofiles}
      actions={{
        addProfile: AddProfileToDb
       }} />
    </div>
  );
}

