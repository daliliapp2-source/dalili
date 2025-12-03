// // app/dashboard/items/clientcomponents.tsx
// "use client";

// import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Badge } from '@/components/ui/badge';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { PlusCircle, Search, Edit, Trash2, Package, Tag, Camera, X, Plus, Pencil, Trash } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useForm } from 'react-hook-form';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import { CardFooter } from '@/components/ui/card';
// import { toast } from 'sonner';

// type Price = {
//   id?: string;
//   title: string;
//   price: number;
// };

// type Item = {
//   id?: string;
//   name: string;
//   public_id: string;
//   description: string;
//   image?: string | null;
//   category: string;
//   category_id?: string;
//   prices: Price[];
// };

// type Category = {
//   id: string;
//   name: string;
//   itemCount?: number;
// };

// type ActionsProp = {
//   addItem: (arg: any) => Promise<any>;
//   updateItem: (arg: any) => Promise<any>;
//   deleteItem: (id: string, bublicId: string) => Promise<any>;
//   addCategory: (arg: any) => Promise<any>;
//   updateCategory: (arg: any) => Promise<any>;
//   deleteCategory: (id: string) => Promise<any>;
// };

// export default function ItemsClient({ items = [], categories = [], actions }: { items: Item[]; categories: Category[]; actions: ActionsProp }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [showAddItem, setShowAddItem] = useState(false);
//   const [showAddCategory, setShowAddCategory] = useState(false);
//   const [newCategoryName, setNewCategoryName] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const filteredItems = items.filter(item => {
//     const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.06 }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 12, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.28 }
//     }
//   };

//   const handleDeleteItem = async (itemId: string | undefined , publicId: string) => {
//     if (!itemId) return;
//     if (!confirm('هل أنت متأكد أنك تريد حذف العنصر؟')) return;
//     try {
//       setIsSubmitting(true);
//       await actions.deleteItem(itemId,publicId);
//       toast.success("تم حذف العنصر بنجاح");
//       // بعد الحذف لازم تعيد تحميل الصفحة أو تعمل refresh للـ data
//       // لأن هذا client component لا يجلب الداتا مباشرة من سيرفر بعد التعديل.
//       // أفضل خيار: reload الصفحة
//       window.location.reload();
//     } catch (err) {
//       console.error(err);
//       toast.error('حدث خطأ أثناء الحذف');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleAddCategory = async () => {
//     if (!newCategoryName.trim()) return;
//     try {
//       setIsSubmitting(true);
//       await actions.addCategory({ name: newCategoryName });
//       toast.success('تم إضافة الفئة بنجاح');
//       setNewCategoryName('');
//       setShowAddCategory(false);
//       window.location.reload(); // refresh to show new category
//     } catch (err) {
//       console.error(err);
//       toast.error('حدث خطأ اثناء الاضافة');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <motion.div
//       className={`min-h-screen bg-background p-6`}
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <motion.div variants={itemVariants} className="max-w-6xl mx-auto space-y-6">
//         {/* Header */}
//         <div className="flex items-center gap-4 mb-6">
//           <div className="flex-1">
//             <h1 className="text-3xl font-bold">{'إدارة العناصر'}</h1>
//             <p className="text-muted-foreground">
//               {'إدارة العناصر والفئات الخاصة بك'}
//             </p>
//           </div>
//           <Button onClick={() => setShowAddItem(true)}>
//             <PlusCircle className="mr-2 h-4 w-4" />
//             إضافة عنصر
//           </Button>
//         </div>

//         {/* Categories Overview */}
//         {showAddCategory && (
//           <motion.div
//             className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <motion.div
//               className="bg-background p-6 rounded-lg shadow-lg w-full max-w-md mx-4"
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//             >
//               <h3 className="text-lg font-semibold mb-4">
//                 {'إضافة فئة جديدة'}
//               </h3>
//               <div className="space-y-4">
//                 <Input
//                   placeholder={'اسم الفئة...'}
//                   value={newCategoryName}
//                   onChange={(e) => setNewCategoryName(e.target.value)}
//                 />
//                 <div className="flex gap-2 justify-end">
//                   <Button
//                     variant="outline"
//                     onClick={() => {
//                       setShowAddCategory(false);
//                       setNewCategoryName('');
//                     }}
//                   >
//                     {'إلغاء'}
//                   </Button>
//                   <Button onClick={handleAddCategory} disabled={isSubmitting}>
//                     {'إضافة'}
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}

//         <motion.div variants={itemVariants}>
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <Tag className="h-5 w-5" />
//                   {'الفئات'}
//                 </div>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={() => setShowAddCategory(true)}
//                 >
//                   <PlusCircle className="mr-2 h-4 w-4" />
//                   {'إضافة فئة'}
//                 </Button>
//               </CardTitle>
//             </CardHeader>

//             <CardContent>
//               {categories.length === 0 ? (
//                 <div className="text-center py-8">
//                   <p className="text-muted-foreground mb-4">لا توجد فئات بعد</p>
//                   <Button onClick={() => setShowAddCategory(true)}>إضافة فئة</Button>
//                 </div>
//               ) : (
//                 <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//                   {categories.map((category) => (
//                     <div
//                       key={category.id}
//                       className="relative p-4 bg-muted/50 rounded-lg text-center flex flex-col justify-between"
//                     >
//                       <div className="absolute top-2 right-2 flex gap-2">
//                         <button className="p-1 rounded-full hover:bg-gray-200 transition">
//                           <Pencil className="h-4 w-4" />
//                         </button>
//                         <button className="p-1 rounded-full hover:bg-red-200 text-red-600 transition">
//                           <Trash className="h-4 w-4" />
//                         </button>
//                       </div>

//                       <div className="pt-6">
//                         <h3 className="font-medium mb-2">{category.name}</h3>
//                         <p className="text-2xl font-bold text-primary">{category.itemCount ?? 0}</p>
//                         <p className="text-sm text-muted-foreground">{'عنصر'}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </CardContent>
//             <CardFooter />
//           </Card>
//         </motion.div>

//         {/* Search and Filters */}
//         <motion.div variants={itemVariants}>
//           <Card>
//             <CardContent className="p-4">
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <div className="relative flex-1">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                   <Input
//                     placeholder={'البحث في العناصر...'}
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="pl-10"
//                   />
//                 </div>
//                 <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//                   <SelectTrigger className="w-48">
//                     <SelectValue placeholder={'كل الفئات'} />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">{'كل الفئات'}</SelectItem>
//                     {categories.map((category) => (
//                       <SelectItem key={category.id} value={category.name}>
//                         {category.name}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>

//         {/* Items Grid */}
//         <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredItems.map((item) => (
//             <Card key={item.id} className="overflow-hidden">
//               {item.image && (
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={item.image as string}
//                     alt={item.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               )}
//               <CardHeader className="pb-2">
//                 <div className="flex items-start justify-between">
//                   <div className="flex-1">
//                     <CardTitle className="text-lg">{item.name}</CardTitle>
//                     <Badge variant="secondary" className="mt-1">
//                       {item.category}
//                     </Badge>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Button variant="ghost" size="sm">
//                       <Edit className="h-4 w-4" />
//                     </Button>
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       onClick={() => handleDeleteItem(item.id,item.public_id)}
//                       className="text-red-600 hover:text-red-700"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

//                 {/* Prices */}
//                 <div className="space-y-2 mb-4">
//                   <h4 className="text-sm font-medium">{'الأسعار:'}</h4>
//                   {item.prices.map((price, idx) => (
//                     <div key={idx} className="flex justify-between text-sm">
//                       <span>{price.title}</span>
//                       <span className="font-medium">${price.price}</span>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </motion.div>

//         {filteredItems.length === 0 && (
//           <motion.div variants={itemVariants}>
//             <Card>
//               <CardContent className="py-12">
//                 <div className="text-center">
//                   <Package className="h-12 w-12 text-muted-foreground/60 mx-auto mb-4" />
//                   <h3 className="text-lg font-medium mb-2">
//                     { 'لا توجد عناصر' }
//                   </h3>
//                   <p className="text-muted-foreground mb-6">
//                     { 'لا توجد عناصر تطابق معايير البحث.' }
//                   </p>
//                   <Button onClick={() => setShowAddItem(true)}>
//                     <PlusCircle className="mr-2 h-4 w-4" />
//                     {'إضافة أول عنصر'}
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )}
//       </motion.div>

//       {/* Add Item Dialog */}
//       <AddItemDialog
//         open={showAddItem}
//         onOpenChange={setShowAddItem}
//         categories={categories}
//         addItemAction={actions.addItem}
//       />
//     </motion.div>
//   );
// }

// /** AddItemDialog - embedded داخل clientcomponents.tsx لسهولة النسخ */
// export const AddItemDialog: React.FC<{
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   categories: Category[];
//   addItemAction: (payload: any) => Promise<any>;
// }> = ({ open, onOpenChange, categories, addItemAction }) => {
//   const [image, setImage] = useState<string | null>(null);
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [prices, setPrices] = useState<Price[]>([{ title: '', price: 0 }]);
//   const [selectedProfiles, setSelectedProfiles] = useState<string[]>([]);
//   const [submitting, setSubmitting] = useState(false);

//   const form = useForm({
//     defaultValues: {
//       name: '',
//       description: '',
//       category: '',
//     }
//   });

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (ev) => setImage(ev.target?.result as string);
//       reader.readAsDataURL(file);
//       setImageFile(file);
//     }
//   };

//   const addPrice = () => setPrices(prev => [...prev, { title: '', price: 0 }]);
//   const removePrice = (index: number) => {
//     if (prices.length > 1) setPrices(prev => prev.filter((_, i) => i !== index));
//   };
//   const updatePrice = (index: number, field: keyof Price, value: any) => {
//     const copy = [...prices];
//     copy[index] = { ...copy[index], [field]: value };
//     setPrices(copy);
//   };

//   const onSubmit = async (data: any) => {
//     // validation
//     if (!data.name || !data.description || !data.category) {
//       toast.error('يرجى ملء الحقول المطلوبة');
//       return;
//     }
//     const validPrices = prices.filter(p => p.title && p.price > 0);
//     if (validPrices.length === 0) {
//       toast.error('يجب إضافة سعر واحد على الأقل');
//       return;
//     }

//     // prepare payload
//     const payload = {
//       name: data.name,
//       description: data.description,
//       category_id: data.category,
//       prices: validPrices,
//       imageFile // may be null
//     };

//     try {
//       setSubmitting(true);
//       const res = await addItemAction(payload);
//       // if (res === 'success') {
//       //   // close and refresh to see new item
//       //   onOpenChange(false);
//       //   window.location.reload();
//       // } else {
//       //   alert('حدث خطأ: ' + res);
//       // }
//     switch (res) {
//       case 'success':
//         toast.success('تم إضافة العنصر بنجاح');
//         onOpenChange(false);
//         window.location.reload();
//         break;
//       case 'limit':
//         toast.error('تم الوصول للحد الأقصى للعناصر في اشتراكك');
//         break;
//       case 'unAuth':
//         toast.error('يجب تسجيل الدخول');
//         break;
//       case 'errormaster':
//             toast.error('خطأ في حفظ العنصر');
//         break;
//       case 'errordetails':
//              toast.error('خطأ في حفظ الاسعار');
//         break;
//       case 'gerror':
//         toast.error('حدث خطاء ما');
//         break;
//       default:
//         toast.error('حدث خطأ أثناء الإضافة');
//         break;
//     }


//     } catch (err) {
//       console.error(err);
//     toast.error('حدث خطأ أثناء الإرسال');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle className="flex items-center gap-2">
//             <Plus className="h-5 w-5 text-primary" />
//             {'إضافة عنصر جديد'}
//           </DialogTitle>
//           <DialogDescription>
//             {'أضف عنصراً جديداً إلى قائمتك مع تفاصيله وأسعاره'}
//           </DialogDescription>
//         </DialogHeader>

//         <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit(onSubmit)(); }} className="space-y-6">
//           {/* Image Upload */}
//           <div className="space-y-4">
//             <Label className="text-base font-medium">
//               {'صورة العنصر'}
//             </Label>
//             <div className="relative h-48 bg-linear-to-br from-primary/5 to-primary/10 rounded-lg border-2 border-dashed border-primary/20 flex justify-center items-center">
//               {image ? (
//                 <>
//                   <img
//                     src={image}
//                     alt="Item preview"
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                   <Button
//                     type="button"
//                     variant="destructive"
//                     size="sm"
//                     className="absolute top-2 right-2"
//                     onClick={() => { setImage(null); setImageFile(null); }}
//                   >
//                     <X className="h-4 w-4" />
//                   </Button>
//                 </>
//               ) : (
//                 <div className="text-center p-6">
//                   <Camera className="mx-auto h-12 w-12 text-primary/60 mb-2" />
//                   <p className="text-sm text-muted-foreground">
//                     {'انقر لتحميل صورة العنصر'}
//                   </p>
//                 </div>
//               )}
//               <Input
//                 type="file"
//                 accept="image/*"
//                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                 onChange={handleImageUpload}
//               />
//             </div>
//           </div>

//           {/* Basic Info */}
//           <div className="grid gap-4">
//             <div className="grid gap-4 sm:grid-cols-2">
//               <div className="space-y-2">
//                 <Label className="text-base">{'اسم العنصر *'}</Label>
//                 <Input
//                   placeholder={'مثال: كابتشينو'}
//                   className="h-12"
//                   {...form.register('name', { required: true })}
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label className="text-base">{'الفئة *'}</Label>
//                 <Select onValueChange={(value) => form.setValue('category', value)}>
//                   <SelectTrigger className="h-12">
//                     <SelectValue placeholder={'اختر الفئة'} />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {categories.map((category) => (
//                       <SelectItem key={category.id} value={category.id}>
//                         {category.name}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label className="text-base">{'وصف العنصر *'}</Label>
//               <Textarea
//                 placeholder={'اكتب وصفاً موجزاً للعنصر...'}
//                 className="min-h-[100px]"
//                 {...form.register('description', { required: true })}
//               />
//             </div>
//           </div>

//           {/* Prices */}
//           <div className="space-y-4">
//             <div className="flex justify-between items-center">
//               <Label className="text-base font-medium">
//                 {'الأسعار *'}
//               </Label>
//               <Button type="button" variant="outline" onClick={addPrice}>
//                 <Plus className="w-4 h-4 mr-2" />
//                 {'إضافة سعر'}
//               </Button>
//             </div>

//             {prices.map((price, index) => (
//               <Card key={index} className="p-4">
//                 <div className="flex items-center gap-4">
//                   <div className="flex-1 grid gap-2 sm:grid-cols-2">
//                     <Input
//                       placeholder={'مثال: صغير'}
//                       value={price.title}
//                       onChange={(e) => updatePrice(index, 'title', e.target.value)}
//                     />
//                     <Input
//                       type="number"
//                       step="0.01"
//                       placeholder="0.00"
//                       value={price.price || ''}
//                       onChange={(e) => updatePrice(index, 'price', parseFloat(e.target.value) || 0)}
//                     />
//                   </div>
//                   {prices.length > 1 && (
//                     <Button
//                       type="button"
//                       variant="outline"
//                       size="sm"
//                       onClick={() => removePrice(index)}
//                     >
//                       <Trash2 className="w-4 h-4" />
//                     </Button>
//                   )}
//                 </div>
//               </Card>
//             ))}
//           </div>

//           {/* Actions */}
//           <div className="flex gap-4 pt-6">
//             <Button
//               type="button"
//               variant="outline"
//               className="flex-1"
//               onClick={() => onOpenChange(false)}
//             >
//               {'إلغاء'}
//             </Button>
//             <Button
//               type="submit"
//               className="flex-1"
//               disabled={submitting}
//             >
//               <Plus className="mr-2 h-4 w-4" />
//               {'إضافة العنصر'}
//             </Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// "use client";



// import React, { useState, useEffect } from 'react';
// import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Badge } from '@/components/ui/badge';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { PlusCircle, Search, Edit, Trash2, Package, Tag, Camera, X, Plus, Pencil, Trash } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useForm } from 'react-hook-form';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import { toast } from 'sonner';

// type Price = { id?: string; title: string; price: number; };
// type Item = { id?: string; name: string; public_id: string; description: string; image?: string | null; category: string; category_id?: string; prices: Price[]; };
// type Category = { id: string; name: string; itemCount?: number; };

// type ActionsProp = {
//   addItem: (arg: any) => Promise<any>;
//   updateItem: (arg: any) => Promise<any>;
//   deleteItem: (id: string, publicId: string) => Promise<any>;
//   addCategory: (arg: any) => Promise<any>;
//   updateCategory: (arg: any) => Promise<any>;
//   deleteCategory: (id: string) => Promise<any>;
// };

// export default function ItemsClient({ items = [], categories = [], actions }: { items: Item[]; categories: Category[]; actions: ActionsProp }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [showItemDialog, setShowItemDialog] = useState(false);
//   const [editingItem, setEditingItem] = useState<Item | null>(null);
//   const [showCategoryDialog, setShowCategoryDialog] = useState(false);
//   const [editingCategory, setEditingCategory] = useState<Category | null>(null);
//   const [categoryName, setCategoryName] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const filteredItems = items.filter(item => {
//     const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } };
//   const itemVariants = { hidden: { y: 12, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.28 } } };

//   /** Item Handlers */
//   const handleDeleteItem = async (itemId?: string, publicId?: string) => {
//     if (!itemId || !publicId) return;
//     if (!confirm('هل أنت متأكد أنك تريد حذف العنصر؟')) return;
//     try { setIsSubmitting(true); await actions.deleteItem(itemId, publicId); toast.success('تم حذف العنصر بنجاح'); window.location.reload(); }
//     catch (err) { console.error(err); toast.error('حدث خطأ أثناء الحذف'); }
//     finally { setIsSubmitting(false); }
//   };

//   const handleEditItem = (item: Item) => { setEditingItem(item); setShowItemDialog(true); };

//   /** Category Handlers */
//   const openCategoryDialog = (category?: Category) => {
//     if (category) { setEditingCategory(category); setCategoryName(category.name); } else { setEditingCategory(null); setCategoryName(''); }
//     setShowCategoryDialog(true);
//   };

//   const handleAddOrUpdateCategory = async () => {
//     if (!categoryName.trim()) return toast.error('اسم الفئة مطلوب');
//     try {
//       setIsSubmitting(true);
//       if (editingCategory) { await actions.updateCategory({ ...editingCategory, name: categoryName }); toast.success('تم تعديل الفئة بنجاح'); }
//       else { await actions.addCategory({ name: categoryName }); toast.success('تم إضافة الفئة بنجاح'); }
//       setShowCategoryDialog(false); setCategoryName(''); window.location.reload();
//     } catch (err) { console.error(err); toast.error('حدث خطأ أثناء الحفظ'); } finally { setIsSubmitting(false); }
//   };

//   const handleDeleteCategory = async (category: Category) => {
//     if (!confirm('هل أنت متأكد أنك تريد حذف الفئة؟')) return;
//     try { setIsSubmitting(true); await actions.deleteCategory(category.id); toast.success('تم حذف الفئة بنجاح'); window.location.reload(); }
//     catch (err) { console.error(err); toast.error('حدث خطأ أثناء الحذف'); } finally { setIsSubmitting(false); }
//   };

//   return (
//     <motion.div className="min-h-screen bg-background p-6" initial="hidden" animate="visible" variants={containerVariants}>
//       <motion.div variants={itemVariants} className="max-w-6xl mx-auto space-y-6">

//         {/* Header */}
//         <div className="flex items-center gap-4 mb-6">
//           <div className="flex-1">
//             <h1 className="text-3xl font-bold">{'إدارة العناصر'}</h1>
//             <p className="text-muted-foreground">{'إدارة العناصر والفئات الخاصة بك'}</p>
//           </div>
//           <Button onClick={() => { setEditingItem(null); setShowItemDialog(true); }}>
//             <PlusCircle className="mr-2 h-4 w-4" />{'إضافة عنصر'}
//           </Button>
//         </div>

//         {/* Categories */}
//         <motion.div variants={itemVariants}>
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center justify-between">
//                 <div className="flex items-center gap-2"><Tag className="h-5 w-5" />{'الفئات'}</div>
//                 <Button variant="outline" size="sm" onClick={() => openCategoryDialog()}><PlusCircle className="mr-2 h-4 w-4" />{'إضافة فئة'}</Button>
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               {categories.length === 0 ? (
//                 <div className="text-center py-8"><p className="text-muted-foreground mb-4">لا توجد فئات بعد</p><Button onClick={() => openCategoryDialog()}>إضافة فئة</Button></div>
//               ) : (
//                 <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//                   {categories.map((category) => (
//                     <div key={category.id} className="relative p-4 bg-muted/50 rounded-lg text-center flex flex-col justify-between">
//                       <div className="absolute top-2 right-2 flex gap-2">
//                         <button className="p-1 rounded-full hover:bg-gray-200 transition" onClick={() => openCategoryDialog(category)}><Pencil className="h-4 w-4" /></button>
//                         <button className="p-1 rounded-full hover:bg-red-200 text-red-600 transition" onClick={() => handleDeleteCategory(category)}><Trash className="h-4 w-4" /></button>
//                       </div>
//                       <div className="pt-6">
//                         <h3 className="font-medium mb-2">{category.name}</h3>
//                         <p className="text-2xl font-bold text-primary">{category.itemCount ?? 0}</p>
//                         <p className="text-sm text-muted-foreground">{'عنصر'}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </CardContent>
//             <CardFooter />
//           </Card>
//         </motion.div>

//         {/* Search */}
//         <motion.div variants={itemVariants}>
//           <Card>
//             <CardContent className="p-4 flex gap-4 flex-col sm:flex-row">
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input placeholder={'البحث في العناصر...'} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
//               </div>
//               <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//                 <SelectTrigger className="w-48"><SelectValue placeholder={'كل الفئات'} /></SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">{'كل الفئات'}</SelectItem>
//                   {categories.map((cat) => (<SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>))}
//                 </SelectContent>
//               </Select>
//             </CardContent>
//           </Card>
//         </motion.div>

//         {/* Items Grid */}
//         <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredItems.map((item) => (
//             <Card key={item.id} className="overflow-hidden">
//               {item.image && <div className="h-48 overflow-hidden"><img src={item.image} alt={item.name} className="w-full h-full object-cover" /></div>}
//               <CardHeader className="pb-2 flex justify-between items-start">
//                 <div className="flex-1">
//                   <CardTitle className="text-lg">{item.name}</CardTitle>
//                   <Badge variant="secondary" className="mt-1">{item.category}</Badge>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Button variant="ghost" size="sm" onClick={() => handleEditItem(item)}><Edit className="h-4 w-4" /></Button>
//                   <Button variant="ghost" size="sm" onClick={() => handleDeleteItem(item.id,item.public_id)} className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
//                 <div className="space-y-2 mb-4">
//                   <h4 className="text-sm font-medium">{'الأسعار:'}</h4>
//                   {item.prices.map((price, idx) => (
//                     <div key={idx} className="flex justify-between text-sm"><span>{price.title}</span><span className="font-medium">${price.price}</span></div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </motion.div>

//         {filteredItems.length === 0 && (
//           <motion.div variants={itemVariants}>
//             <Card>
//               <CardContent className="py-12 text-center">
//                 <Package className="h-12 w-12 text-muted-foreground/60 mx-auto mb-4" />
//                 <h3 className="text-lg font-medium mb-2">{ 'لا توجد عناصر' }</h3>
//                 <p className="text-muted-foreground mb-6">{ 'لا توجد عناصر تطابق معايير البحث.' }</p>
//                 <Button onClick={() => { setEditingItem(null); setShowItemDialog(true); }}><PlusCircle className="mr-2 h-4 w-4" />{'إضافة أول عنصر'}</Button>
//               </CardContent>
//             </Card>
//           </motion.div>
//         )}

//       </motion.div>

//       {/* Item Dialog */}
//       <AddEditItemDialog open={showItemDialog} onOpenChange={setShowItemDialog} categories={categories} addItemAction={actions.addItem} updateItemAction={actions.updateItem} editingItem={editingItem} />

//       {/* Category Dialog */}
//       {showCategoryDialog && (
//         <AddEditCategoryDialog open={showCategoryDialog} onOpenChange={setShowCategoryDialog} name={categoryName} setName={setCategoryName} saveAction={handleAddOrUpdateCategory} />
//       )}

//     </motion.div>
//   );
// }

// /** Add/Edit Item Dialog */
// export const AddEditItemDialog: React.FC<{
//   open: boolean; onOpenChange: (open: boolean) => void; categories: Category[];
//   addItemAction: (payload: any) => Promise<any>;
//   updateItemAction: (payload: any) => Promise<any>;
//   editingItem: Item | null;
// }> = ({ open, onOpenChange, categories, addItemAction, updateItemAction, editingItem }) => {
//   const [image, setImage] = useState<string | null>(null);
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [prices, setPrices] = useState<Price[]>([{ title: '', price: 0 }]);
//   const [submitting, setSubmitting] = useState(false);
//   const form = useForm({ defaultValues: { name: '', description: '', category: '' } });

//   useEffect(() => {
//     if (editingItem) {
//       form.reset({ name: editingItem.name, description: editingItem.description, category: editingItem.category_id ?? '' });
//       setPrices(editingItem.prices.length ? editingItem.prices : [{ title: '', price: 0 }]);
//       setImage(editingItem.image ?? null);
//     } else {
//       form.reset({ name: '', description: '', category: '' });
//       setPrices([{ title: '', price: 0 }]);
//       setImage(null);
//       setImageFile(null);
//     }
//   }, [editingItem]);

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]; if (!file) return;
//     const reader = new FileReader();
//     reader.onload = (ev) => setImage(ev.target?.result as string); reader.readAsDataURL(file); setImageFile(file);
//   };

//   const addPrice = () => setPrices(prev => [...prev, { title: '', price: 0 }]);
//   const removePrice = (index: number) => { if (prices.length > 1) setPrices(prev => prev.filter((_, i) => i !== index)); };
//   const updatePrice = (index: number, field: keyof Price, value: any) => { const copy = [...prices]; copy[index] = { ...copy[index], [field]: value }; setPrices(copy); };

//   const onSubmit = async (data: any) => {
//     if (!data.name || !data.description || !data.category) { toast.error('يرجى ملء الحقول المطلوبة'); return; }
//     const validPrices = prices.filter(p => p.title && p.price > 0);
//     if (!validPrices.length) { toast.error('يجب إضافة سعر واحد على الأقل'); return; }

//     const payload = { ...data, prices: validPrices, imageFile, id: editingItem?.id, public_id: editingItem?.public_id };
//     try {
//       setSubmitting(true);
//       const res = editingItem ? await updateItemAction(payload) : await addItemAction(payload);
//       if (res === 'success') { toast.success(editingItem ? 'تم تعديل العنصر بنجاح' : 'تم إضافة العنصر بنجاح'); onOpenChange(false); window.location.reload(); }
//       else toast.error('حدث خطأ أثناء العملية');
//     } catch (err) { console.error(err); toast.error('حدث خطأ أثناء الإرسال'); }
//     finally { setSubmitting(false); }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle className="flex items-center gap-2"><Plus className="h-5 w-5 text-primary" />{editingItem ? 'تعديل العنصر' : 'إضافة عنصر جديد'}</DialogTitle>
//           <DialogDescription>{editingItem ? 'عدل بيانات العنصر' : 'أضف عنصراً جديداً إلى قائمتك'}</DialogDescription>
//         </DialogHeader>
//         <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit(onSubmit)(); }} className="space-y-6">
//           {/* Image Upload */}
//           <div className="space-y-4">
//             <Label className="text-base font-medium">{'صورة العنصر'}</Label>
//             <div className="relative h-48 bg-linear-to-br from-primary/5 to-primary/10 rounded-lg border-2 border-dashed border-primary/20 flex justify-center items-center">
//               {image ? <>
//                 <img src={image} alt="Item preview" className="w-full h-full object-cover rounded-lg" />
//                 <Button type="button" variant="destructive" size="sm" className="absolute top-2 right-2" onClick={() => { setImage(null); setImageFile(null); }}><X className="h-4 w-4" /></Button>
//               </> : <div className="text-center p-6"><Camera className="mx-auto h-12 w-12 text-primary/60 mb-2" /><p className="text-sm text-muted-foreground">{'انقر لتحميل صورة العنصر'}</p></div>}
//               <Input type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={handleImageUpload} />
//             </div>
//           </div>

//           {/* Basic Info */}
//           <div className="grid gap-4">
//             <div className="grid gap-4 sm:grid-cols-2">
//               <div className="space-y-2">
//                 <Label className="text-base">{'اسم العنصر *'}</Label>
//                 <Input placeholder={'مثال: كابتشينو'} className="h-12" {...form.register('name', { required: true })} />
//               </div>
//               <div className="space-y-2">
//                 <Label className="text-base">{'الفئة *'}</Label>
//                 <Select onValueChange={(value) => form.setValue('category', value)} value={form.getValues('category')}>
//                   <SelectTrigger className="h-12"><SelectValue placeholder={'اختر الفئة'} /></SelectTrigger>
//                   <SelectContent>{categories.map((cat) => (<SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>))}</SelectContent>
//                 </Select>
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label className="text-base">{'وصف العنصر *'}</Label>
//               <Textarea placeholder={'اكتب وصفاً موجزاً للعنصر...'} className="min-h-[100px]" {...form.register('description', { required: true })} />
//             </div>
//           </div>

//           {/* Prices */}
//           <div className="space-y-4">
//             <div className="flex justify-between items-center">
//               <Label className="text-base font-medium">{'الأسعار *'}</Label>
//               <Button type="button" variant="outline" onClick={addPrice}><Plus className="w-4 h-4 mr-2" />{'إضافة سعر'}</Button>
//             </div>
//             {prices.map((price, index) => (
//               <Card key={index} className="p-4">
//                 <div className="flex items-center gap-4">
//                   <div className="flex-1 grid gap-2 sm:grid-cols-2">
//                     <Input placeholder={'مثال: صغير'} value={price.title} onChange={(e) => updatePrice(index, 'title', e.target.value)} />
//                     <Input type="number" step="0.01" placeholder="0.00" value={price.price || ''} onChange={(e) => updatePrice(index, 'price', parseFloat(e.target.value) || 0)} />
//                   </div>
//                   {prices.length > 1 && (<Button type="button" variant="outline" size="sm" onClick={() => removePrice(index)}><Trash2 className="w-4 h-4" /></Button>)}
//                 </div>
//               </Card>
//             ))}
//           </div>

//           {/* Actions */}
//           <div className="flex gap-4 pt-6">
//             <Button type="button" variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>{'إلغاء'}</Button>
//             <Button type="submit" className="flex-1" disabled={submitting}><Plus className="mr-2 h-4 w-4" />{editingItem ? 'تعديل العنصر' : 'إضافة العنصر'}</Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// /** Add/Edit Category Dialog */
// export const AddEditCategoryDialog: React.FC<{
//   open: boolean; onOpenChange: (open: boolean) => void;
//   name: string; setName: (val: string) => void; saveAction: () => void;
// }> = ({ open, onOpenChange, name, setName, saveAction }) => (
//   <Dialog open={open} onOpenChange={onOpenChange}>
//     <DialogContent className="max-w-md">
//       <DialogHeader>
//         <DialogTitle>{'الفئة'}</DialogTitle>
//         <DialogDescription>{'أضف أو عدل اسم الفئة'}</DialogDescription>
//       </DialogHeader>
//       <div className="space-y-4">
//         <Input placeholder={'اسم الفئة...'} value={name} onChange={(e) => setName(e.target.value)} />
//         <div className="flex gap-2 justify-end">
//           <Button variant="outline" onClick={() => onOpenChange(false)}>إلغاء</Button>
//           <Button onClick={saveAction}>حفظ</Button>
//         </div>
//       </div>
//     </DialogContent>
//   </Dialog>
// );


//////////////##########################################################################################


// "use client";

// import React, { useState, useEffect } from 'react';
// import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Badge } from '@/components/ui/badge';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { PlusCircle, Search, Edit, Trash2, Package, Tag, Camera, X, Plus, Pencil, Trash } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useForm } from 'react-hook-form';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import { toast } from 'sonner';
// import { useRouter } from "next/navigation";

// type Price = { id?: string; title: string; price: number; };
// type Item = { id?: string; name: string; public_id: string; description: string; image?: string | null; category: string; category_id?: string; prices: Price[]; };
// type Category = { id: string; name: string; itemCount?: number; };

// type ActionsProp = {
//   addItem: (arg: any) => Promise<any>;
//   updateItem: (arg: any) => Promise<any>;
//   deleteItem: (id: string, publicId: string) => Promise<any>;
//   addCategory: (arg: any) => Promise<any>;
//   updateCategory: (arg: any) => Promise<any>;
//   deleteCategory: (id: string) => Promise<any>;
//  // updateall: () => Promise<any>;
// };

// type ItemPayload = {
//   id?: string;
//   name: string;
//   description: string;
//   category_id: string;
//   prices: Price[];
//   public_id?: string;
//   imageFile?: File | null; // <--- هنا اجعلها اختيارية
// };

// export default function ItemsClient({ items = [], categories = [], actions }: { items: Item[]; categories: Category[]; actions: ActionsProp }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [showItemDialog, setShowItemDialog] = useState(false);
//   const [editingItem, setEditingItem] = useState<Item | null>(null);
//   const [showCategoryDialog, setShowCategoryDialog] = useState(false);
//   const [editingCategory, setEditingCategory] = useState<Category | null>(null);
//   const [categoryName, setCategoryName] = useState('');
//   const [showDeleteDialog, setShowDeleteDialog] = useState<{type:'item'|'category', id?:string, publicId?:string, name?:string}|null>(null);
//   const [itemList, setItemList] = useState<Item[]>(items);
//   const [categoryList, setCategoryList] = useState<Category[]>(categories);

//   const filteredItems = itemList.filter(item => {
//     const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } };
//   const itemVariants = { hidden: { y: 12, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.28 } } };

//   /** Item Handlers */
//   const handleDeleteItem = async (id?: string, publicId?: string) => {
//     if (!id || !publicId) return;
//     try {
//       await actions.deleteItem(id, publicId);
//       toast.success('تم حذف العنصر بنجاح');
//       setItemList(prev => prev.filter(i => i.id !== id));
//       setShowDeleteDialog(null);
//     } catch (err) {
//       console.error(err); toast.error('حدث خطأ أثناء الحذف');
//     }
//   };

//   const handleEditItem = (item: Item) => { setEditingItem(item); setShowItemDialog(true); };

//   /** Category Handlers */
//   const openCategoryDialog = (category?: Category) => {
//     if (category) { setEditingCategory(category); setCategoryName(category.name); } else { setEditingCategory(null); setCategoryName(''); }
//     setShowCategoryDialog(true);
//   };

//   const handleAddOrUpdateCategory = async () => {
//     if (!categoryName.trim()) return toast.error('اسم الفئة مطلوب');
//     try {
//       if (editingCategory) {
//         await actions.updateCategory({ ...editingCategory, name: categoryName });
//         toast.success('تم تعديل الفئة بنجاح');
//         setCategoryList(prev => prev.map(c => c.id === editingCategory.id ? { ...c, name: categoryName } : c));
//       } else {
//         const newCategory = await actions.addCategory({ name: categoryName });
//         toast.success('تم إضافة الفئة بنجاح');
//         setCategoryList(prev => [...prev, newCategory]);
//       }
//       setShowCategoryDialog(false); setCategoryName('');
//     } catch (err) { console.error(err); toast.error('حدث خطأ أثناء الحفظ'); }
//   };

//   const handleDeleteCategory = async (category: Category) => {
//     try {
//       await actions.deleteCategory(category.id);
//       toast.success('تم حذف الفئة بنجاح');
//       setCategoryList(prev => prev.filter(c => c.id !== category.id));
//       setShowDeleteDialog(null);
//     } catch (err) { console.error(err); toast.error('حدث خطأ أثناء الحذف'); }
//   };

//   return (
//     <motion.div className="min-h-screen bg-background p-6" initial="hidden" animate="visible" variants={containerVariants}>
//       <motion.div variants={itemVariants} className="max-w-6xl mx-auto space-y-6">

//         {/* Header */}
//         <div className="flex items-center gap-4 mb-6">
//           <div className="flex-1">
//             <h1 className="text-3xl font-bold">{'إدارة العناصر'}</h1>
//             <p className="text-muted-foreground">{'إدارة العناصر والفئات الخاصة بك'}</p>
//           </div>
//           <Button onClick={() => { setEditingItem(null); setShowItemDialog(true); }}>
//             <PlusCircle className="mr-2 h-4 w-4" />{'إضافة عنصر'}
//           </Button>
//         </div>

//         {/* Categories */}
//         <motion.div variants={itemVariants}>
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center justify-between">
//                 <div className="flex items-center gap-2"><Tag className="h-5 w-5" />{'الفئات'}</div>
//                 <Button variant="outline" size="sm" onClick={() => openCategoryDialog()}><PlusCircle className="mr-2 h-4 w-4" />{'إضافة فئة'}</Button>
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               {categoryList.length === 0 ? (
//                 <div className="text-center py-8"><p className="text-muted-foreground mb-4">لا توجد فئات بعد</p><Button onClick={() => openCategoryDialog()}>إضافة فئة</Button></div>
//               ) : (
//                 <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//                   {categoryList.map((category) => (
//                     <div key={category.id} className="relative p-4 bg-muted/50 rounded-lg text-center flex flex-col justify-between">
//                       <div className="absolute top-2 right-2 flex gap-2">
//                         <button className="p-1 rounded-full hover:bg-gray-200 transition" onClick={() => openCategoryDialog(category)}><Pencil className="h-4 w-4" /></button>
//                         <button className="p-1 rounded-full hover:bg-red-200 text-red-600 transition" onClick={() => setShowDeleteDialog({type:'category', id: category.id, name: category.name})}><Trash className="h-4 w-4" /></button>
//                       </div>
//                       <div className="pt-6">
//                         <h3 className="font-medium mb-2">{category.name}</h3>
//                         <p className="text-2xl font-bold text-primary">{category.itemCount ?? 0}</p>
//                         <p className="text-sm text-muted-foreground">{'عنصر'}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </CardContent>
//             <CardFooter />
//           </Card>
//         </motion.div>

//         {/* Search */}
//         <motion.div variants={itemVariants}>
//           <Card>
//             <CardContent className="p-4 flex gap-4 flex-col sm:flex-row">
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input placeholder={'البحث في العناصر...'} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
//               </div>
//               <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//                 <SelectTrigger className="w-48"><SelectValue placeholder={'كل الفئات'} /></SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">{'كل الفئات'}</SelectItem>
//                   {categoryList.map((cat) => (<SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>))}
//                 </SelectContent>
//               </Select>
//             </CardContent>
//           </Card>
//         </motion.div>

//         {/* Items Grid */}
//         <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredItems.map((item) => (
//             <Card key={item.id} className="overflow-hidden">
//               {item.image && <div className="h-48 overflow-hidden"><img src={item.image} alt={item.name} className="w-full h-full object-cover" /></div>}
//               <CardHeader className="pb-2 flex justify-between items-start">
//                 <div className="flex-1">
//                   <CardTitle className="text-lg">{item.name}</CardTitle>
//                   <Badge variant="secondary" className="mt-1">{item.category}</Badge>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Button variant="ghost" size="sm" onClick={() => handleEditItem(item)}><Edit className="h-4 w-4" /></Button>
//                   <Button variant="ghost" size="sm" onClick={() => setShowDeleteDialog({type:'item', id:item.id, publicId:item.public_id, name:item.name})} className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
//                 <div className="space-y-2 mb-4">
//                   <h4 className="text-sm font-medium">{'الأسعار:'}</h4>
//                   {item.prices.map((price, idx) => (
//                     <div key={idx} className="flex justify-between text-sm"><span>{price.title}</span><span className="font-medium">${price.price}</span></div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </motion.div>
//       </motion.div>

//       {/* Dialogs */}
//       <AddEditItemDialog open={showItemDialog} onOpenChange={setShowItemDialog} categories={categoryList} addItemAction={actions.addItem} updateItemAction={actions.updateItem} editingItem={editingItem} 
  
//   />
//       {showCategoryDialog && <AddEditCategoryDialog open={showCategoryDialog} onOpenChange={setShowCategoryDialog} name={categoryName} setName={setCategoryName} saveAction={handleAddOrUpdateCategory} />}
//       {showDeleteDialog && <DeleteConfirmDialog dialog={showDeleteDialog} onCancel={()=>setShowDeleteDialog(null)} onConfirm={()=>{if(showDeleteDialog.type==='item') handleDeleteItem(showDeleteDialog.id,showDeleteDialog.publicId); else if(showDeleteDialog.type==='category') handleDeleteCategory({id:showDeleteDialog.id!,name:showDeleteDialog.name!});}} />}
//     </motion.div>
//   );
// }


// /** Delete Confirmation Dialog */
// const DeleteConfirmDialog: React.FC<{dialog:{type:'item'|'category', id?:string, publicId?:string, name?:string}, onCancel:()=>void, onConfirm:()=>void}> = ({dialog,onCancel,onConfirm}) => (
//   <Dialog open={true} onOpenChange={onCancel}>
//     <DialogContent className="max-w-md">
//       <DialogHeader >
//         <DialogTitle>{dialog.type==='item'?'حذف العنصر':'حذف الفئة'}</DialogTitle>
//         <DialogDescription >{`هل أنت متأكد أنك تريد حذف ${dialog.name ?? ''}?`}</DialogDescription>
//       </DialogHeader>
//       <div className="flex gap-2 justify-end pt-4">
//         <Button variant="outline" onClick={onCancel}>إلغاء</Button>
//         <Button variant="destructive" onClick={onConfirm}>حذف</Button>
//       </div>
//     </DialogContent>
//   </Dialog>
// );


// /** Add/Edit Item Dialog */
// export const AddEditItemDialog: React.FC<{
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   categories: Category[];
//   addItemAction: (payload:any)=>Promise<any>;
//   updateItemAction: (payload:any)=>Promise<any>;
//   editingItem?: Item | null;
//  // onSave?: (item: Item) => void; // 👈 الدالة الجديدة
// }> = ({ open, onOpenChange, categories, addItemAction, updateItemAction, editingItem }) => {
//   const [image, setImage] = useState<string | null>(null);
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [prices, setPrices] = useState<Price[]>([{ title:'', price:0 }]);
//   const [submitting, setSubmitting] = useState(false);
//   const router = useRouter();

//   const form = useForm({
//     defaultValues: {
//       name: editingItem?.name || '',
//       description: editingItem?.description || '',
//       category: editingItem?.category_id || '',
//     }
//   });

// useEffect(() => {
//   if (editingItem) {
//     form.reset({
//       name: editingItem.name,
//       description: editingItem.description,
//       category: editingItem.category_id,
//     });
//     setPrices(editingItem.prices.length > 0 ? editingItem.prices : [{ title: '', price: 0 }]);
//     setImage(editingItem.image || null);
//   } else {
//     form.reset({
//       name: '',
//       description: '',
//       category: '',
//     });
//     setPrices([{ title: '', price: 0 }]);
//     setImage(null);
//   }
// }, [editingItem, form]);

//   const handleImageUpload = (e:React.ChangeEvent<HTMLInputElement>)=>{
//     const file = e.target.files?.[0];
//     if(file){
//       const reader = new FileReader();
//       reader.onload=(ev)=>setImage(ev.target?.result as string);
//       reader.readAsDataURL(file);
//       setImageFile(file);
//     }
//   };

//   const addPrice = ()=>setPrices(prev=>[...prev,{title:'',price:0}]);
//   const removePrice = (index:number)=>{ if(prices.length>1) setPrices(prev=>prev.filter((_,i)=>i!==index)); };
//   const updatePrice=(index:number,field:keyof Price,value:any)=>{ const copy=[...prices]; copy[index]={...copy[index],[field]:value}; setPrices(copy); };

//   const onSubmit = async (data:any)=>{

//     if(!data.name||!data.description||!data.category){ toast.error('يرجى ملء الحقول المطلوبة'); return; }
//     const validPrices = prices.filter(p=>p.title && p.price>0);
//     if(validPrices.length===0){ toast.error('يجب إضافة سعر واحد على الأقل'); return; }


// const payload: ItemPayload = {
//   id: editingItem?.id,
//   name: data.name,
//   description: data.description,
//   category_id: data.category,
//   prices: validPrices,
//   public_id: editingItem?.public_id
// };

// if (imageFile) {
//   payload.imageFile = imageFile; // يتم إضافتها فقط لو غيرت الصورة
// }


//   try{
//     setSubmitting(true);
//     const res = editingItem ? await updateItemAction(payload) : await addItemAction(payload);
//     if(res === 'success') {
//       toast.success(editingItem?'تم تعديل العنصر بنجاح':'تم إضافة العنصر بنجاح');
//       onOpenChange(false);
//        window.location.reload();
//     } else {
//       //console.log(res);
//       toast.error('حدث خطأ أثناء الحفظ');
//     }
//   }catch(err){ console.error(err); toast.error('حدث خطأ أثناء الإرسال'); }
//   finally{ setSubmitting(false); }

//   };
// const selectedCategory = form.watch('category');
//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle className="flex items-center gap-2">
//             <Plus className="h-5 w-5 text-primary" />
//             {editingItem?'تعديل العنصر':'إضافة عنصر جديد'}
//           </DialogTitle>
//           <DialogDescription>
//             {'أضف أو عدل عنصر مع تفاصيله وأسعاره'}
//           </DialogDescription>
//         </DialogHeader>

//         <form onSubmit={(e)=>{e.preventDefault(); form.handleSubmit(onSubmit)();}} className="space-y-6">
//           {/* Image Upload */}
//           <div className="space-y-4">
//             <Label className="text-base font-medium">{'صورة العنصر'}</Label>
//             <div className="relative h-48 bg-linear-to-br from-primary/5 to-primary/10 rounded-lg border-2 border-dashed border-primary/20 flex justify-center items-center">
//               {image ? (
//                 <>
//                   <img src={image} alt="Item preview" className="w-full h-full object-cover rounded-lg"/>
//                   <Button type="button" variant="destructive" size="sm" className="absolute top-2 right-2" onClick={()=>{setImage(null); setImageFile(null);}}>
//                     <X className="h-4 w-4"/>
//                   </Button>
//                 </>
//               ) : (
//                 <div className="text-center p-6">
//                   <Camera className="mx-auto h-12 w-12 text-primary/60 mb-2" />
//                   <p className="text-sm text-muted-foreground">{'انقر لتحميل صورة العنصر'}</p>
//                 </div>
//               )}
//               <Input type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={handleImageUpload}/>
//             </div>
//           </div>

//           {/* Basic Info */}
//           <div className="grid gap-4 sm:grid-cols-2">
//             <div className="space-y-2">
//               <Label>{'اسم العنصر *'}</Label>
//               <Input placeholder={'مثال: كابتشينو'} className="h-12" {...form.register('name',{required:true})}/>
//             </div>
//             <div className="space-y-2">
//               <Label>{'الفئة *'}</Label>


// <Select
//   value={selectedCategory} // استخدم watch بدل getValues
//   onValueChange={(v) => form.setValue('category', v)}
// >
//   <SelectTrigger className="h-12">
//     <SelectValue placeholder={'اختر الفئة'} />
//   </SelectTrigger>
//   <SelectContent>
//     {categories.map(c => (
//       <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
//     ))}
//   </SelectContent>
// </Select>
              
//             </div>
//           </div>
//           <div className="space-y-2">
//             <Label>{'وصف العنصر *'}</Label>
//             <Textarea placeholder={'اكتب وصفاً موجزاً للعنصر...'} className="min-h-[100px]" {...form.register('description',{required:true})}/>
//           </div>

//           {/* Prices */}
//           <div className="space-y-4">
//             <div className="flex justify-between items-center">
//               <Label className="text-base font-medium">{'الأسعار *'}</Label>
//               <Button type="button" variant="outline" onClick={addPrice}><Plus className="w-4 h-4 mr-2" />{'إضافة سعر'}</Button>
//             </div>
//             {prices.map((price,index)=>(
//               <Card key={index} className="p-4">
//                 <div className="flex items-center gap-4">
//                   <div className="flex-1 grid gap-2 sm:grid-cols-2">
//                     <Input placeholder={'مثال: صغير'} value={price.title} onChange={(e)=>updatePrice(index,'title',e.target.value)} />
//                     <Input type="number" step="0.01" placeholder="0.00" value={price.price || ''} onChange={(e)=>updatePrice(index,'price',parseFloat(e.target.value)||0)}/>
//                   </div>
//                   {prices.length>1 && <Button type="button" variant="outline" size="sm" onClick={()=>removePrice(index)}><Trash2 className="w-4 h-4"/></Button>}
//                 </div>
//               </Card>
//             ))}
//           </div>

//           {/* Actions */}
//           <div className="flex gap-4 pt-6">
//             <Button type="button" variant="outline" className="flex-1" onClick={()=>onOpenChange(false)}>إلغاء</Button>
//             <Button type="submit" className="flex-1" disabled={submitting}><Plus className="mr-2 h-4 w-4" />{editingItem?'تعديل العنصر':'إضافة العنصر'}</Button>
//           </div>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// /** Add/Edit Category Dialog */
// export const AddEditCategoryDialog: React.FC<{open:boolean,onOpenChange:(b:boolean)=>void,name:string,setName:(v:string)=>void,saveAction:()=>void}> = ({open,onOpenChange,name,setName,saveAction})=>(
//   <Dialog open={open} onOpenChange={onOpenChange}>
//     <DialogContent className="max-w-md">
//       <DialogHeader>
//         <DialogTitle>{name?'تعديل الفئة':'إضافة فئة جديدة'}</DialogTitle>
//       </DialogHeader>
//       <div className="space-y-4">
//         <Input placeholder="اسم الفئة..." value={name} onChange={e=>setName(e.target.value)}/>
//         <div className="flex gap-2 justify-end">
//           <Button variant="outline" onClick={()=>onOpenChange(false)}>إلغاء</Button>
//           <Button onClick={saveAction}>حفظ</Button>
//         </div>
//       </div>
//     </DialogContent>
//   </Dialog>
// );





//////////////////////########################### menu #######################################///////////

// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { motion } from "framer-motion";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { MapPin, Star, Timer, List, Tag as TagIcon } from 'lucide-react';
// import { useState } from "react";

// const menuData = {
//   profile: {
//     id: '1',
//     name: "Alex's Restaurant",
//     logo: "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//     address: "123 Main Street, New York",
//     rating: 4.8,
//     hours: "10:00 AM - 10:00 PM"
//   },
//   categories: [
//     {
//       id: 'appetizers',
//       name: 'Appetizers',
//       nameAr: 'المقبلات',
//       items: [
//         { id: 1, name: 'Bruschetta', nameAr: 'بروسكيتا', price: '$8.99', description: 'Toasted bread topped with tomatoes, garlic, and basil', descriptionAr: 'خبز محمص مع طماطم وثوم وريحان', image: 'https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', featured: true },
//         { id: 2, name: 'Calamari', nameAr: 'كالاماري', price: '$10.99', description: 'Fried squid served with marinara sauce', descriptionAr: 'حبار مقلي يقدم مع صلصة مارينارا', image: 'https://images.unsplash.com/photo-1533040364654-4f5be6143c35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//         { id: 3, name: 'Mozzarella Sticks', nameAr: 'أصابع الموزاريلا', price: '$7.99', description: 'Breaded mozzarella with marinara sauce', descriptionAr: 'جبنة موزاريلا مغطاة بالبقسماط مع صلصة مارينارا', image: 'https://images.unsplash.com/photo-1548340748-6d2b7c7a531d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//         { id: 4, name: 'Garlic Bread', nameAr: 'خبز بالثوم', price: '$5.99', description: 'Toasted bread with garlic butter and herbs', descriptionAr: 'خبز محمص مع زبدة الثوم والأعشاب', image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//         { id: 5, name: 'Caprese Salad', nameAr: 'سلطة كابريزي', price: '$9.99', description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze', descriptionAr: 'جبنة موزاريلا طازجة وطماطم وريحان مع صلصة البلسميك', image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//       ]
//     },
//     {
//       id: 'mains',
//       name: 'Main Courses',
//       nameAr: 'الأطباق الرئيسية',
//       items: [
//         { id: 6, name: 'Margherita Pizza', nameAr: 'بيتزا مارجريتا', price: '$14.99', description: 'Classic pizza with tomato sauce, mozzarella, and basil', descriptionAr: 'بيتزا كلاسيكية مع صلصة طماطم وجبنة موزاريلا وريحان', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', featured: true },
//         { id: 7, name: 'Pasta Carbonara', nameAr: 'باستا كاربونارا', price: '$16.99', description: 'Spaghetti with egg, cheese, pancetta, and black pepper', descriptionAr: 'سباغيتي مع بيض ��جبنة وبانسيتا وفلفل أسود', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//         { id: 8, name: 'Lasagna', nameAr: 'لازانيا', price: '$18.99', description: 'Layered pasta with meat sauce and cheese', descriptionAr: 'طبقات من الباستا مع صلصة اللحم والجبن', image: 'https://images.unsplash.com/photo-1574894086106-4411802712fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//         { id: 9, name: 'Chicken Parmesan', nameAr: 'دجاج بارميزان', price: '$17.99', description: 'Breaded chicken with tomato sauce and melted mozzarella', descriptionAr: 'دجاج مغطى بالبقسماط مع صلصة طماطم وجبنة موزاريلا ذائبة', image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//         { id: 10, name: 'Seafood Risotto', nameAr: 'ريزوتو المأكولات البحرية', price: '$21.99', description: 'Creamy rice with assorted seafood and herbs', descriptionAr: 'أرز كريمي مع تشكيلة من المأكولات البحرية والأعشاب', image: 'https://images.unsplash.com/photo-1635321593217-40050ad13c74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', featured: true },
//         { id: 11, name: 'Grilled Salmon', nameAr: 'سلمون مشوي', price: '$22.99', description: 'Fresh salmon fillet with lemon butter sauce', descriptionAr: 'فيليه سلمون طازج مع صلصة الزبدة والليمون', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//       ]
//     },
//     {
//       id: 'desserts',
//       name: 'Desserts',
//       nameAr: 'الحلويات',
//       items: [
//         { id: 12, name: 'Tiramisu', nameAr: 'تيراميسو', price: '$7.99', description: 'Coffee-flavored Italian dessert', descriptionAr: 'حلوى إيطالية بنكهة القهوة', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//         { id: 13, name: 'Cheesecake', nameAr: 'تشيز كيك', price: '$6.99', description: 'New York style cheesecake with berry compote', descriptionAr: 'كعكة الجبن على طريقة نيويورك مع كومبوت التوت', image: 'https://images.unsplash.com/photo-1533134242443-d4fd258f00e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', featured: true },
//         { id: 14, name: 'Cannoli', nameAr: 'كانولي', price: '$5.99', description: 'Sicilian pastry dessert filled with sweet cream', descriptionAr: 'حلوى صقلية مملوءة بالكريمة الحلوة', image: 'https://images.unsplash.com/photo-1558326567-98166332163b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//         { id: 15, name: 'Panna Cotta', nameAr: 'بانا كوتا', price: '$6.49', description: 'Italian custard dessert with berry sauce', descriptionAr: 'حلوى كسترد إيطالية مع صلصة التوت', image: 'https://images.unsplash.com/photo-1488477181946-6428a0bfdf32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//         { id: 16, name: 'Gelato', nameAr: 'جيلاتو', price: '$4.99', description: 'Italian ice cream in various flavors', descriptionAr: 'آيس كريم إيطالي بنكهات متنوعة', image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//       ]
//     },
//     {
//       id: 'drinks',
//       name: 'Beverages',
//       nameAr: 'المشروبات',
//       items: [
//         { id: 17, name: 'Italian Soda', nameAr: 'صودا إيطالية', price: '$3.99', description: 'Sparkling water with fruit syrup', descriptionAr: 'مياه غازية مع شراب الفواكه', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//         { id: 18, name: 'Cappuccino', nameAr: 'كابتشينو', price: '$4.50', description: 'Espresso with steamed milk and foam', descriptionAr: 'إسبريسو مع حليب مبخر ورغوة', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', featured: true },
//         { id: 19, name: 'Red Wine', nameAr: 'نبيذ أحمر', price: '$7.50', description: 'Glass of house red wine', descriptionAr: 'كأس من النبيذ الأحمر المنزلي', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//         { id: 20, name: 'Espresso', nameAr: 'إسبريسو', price: '$3.50', description: 'Strong Italian coffee', descriptionAr: 'قهوة إيطالية قوية', image: 'https://images.unsplash.com/photo-1596952954288-16862d37405b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//         { id: 21, name: 'Fresh Lemonade', nameAr: 'ليموناضة طازجة', price: '$4.99', description: 'Freshly squeezed lemons with sugar', descriptionAr: 'ليمون معصور طازج مع سكر', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//       ]
//     },
//     {
//       id: 'sides',
//       name: 'Side Dishes',
//       nameAr: 'الأطباق الجانبية',
//       items: [
//         { id: 22, name: 'French Fries', nameAr: 'بطاطس مقلية', price: '$4.99', description: 'Crispy potato fries with sea salt', descriptionAr: 'بطاطس مقلية مقرمشة مع ملح البحر', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//         { id: 23, name: 'Garden Salad', nameAr: 'سلطة الحديقة', price: '$6.99', description: 'Mixed greens with house dressing', descriptionAr: 'خضروات مشكلة مع صلصة المنزل', image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//         { id: 24, name: 'Roasted Vegetables', nameAr: 'خضروات محمصة', price: '$7.99', description: 'Seasonal vegetables roasted with herbs', descriptionAr: 'خضروات موسمية محمصة مع الأعشاب', image: 'https://images.unsplash.com/photo-1574894086106-4411802712fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', featured: true },
//         { id: 25, name: 'Garlic Mashed Potatoes', nameAr: 'بطاطس مهروسة بالثوم', price: '$5.99', description: 'Creamy potatoes with roasted garlic', descriptionAr: 'بطاطس كريمية مع ثوم محمص', image: 'https://images.unsplash.com/photo-1633436375743-b40e1bc01d9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' },
//       ]
//     }
//   ],
//   promotions: [
//     {
//       id: 'promo1',
//       title: 'Happy Hour Special',
//       titleAr: 'عرض الساعة السعيدة',
//       description: '20% off all appetizers and drinks from 4-6 PM daily',
//       descriptionAr: 'خصم 20٪ على جميع المقبلات والمشروبات من 4-6 مساءً يوميًا',
//       image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
//     },
//     {
//       id: 'promo2',
//       title: 'Family Dinner Deal',
//       titleAr: 'عرض عشاء العائلة',
//       description: 'Order 2 main courses and get a free dessert',
//       descriptionAr: 'اطلب طبقين رئيسيين واحصل على حلوى مجانية',
//       image: 'https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
//     },
//     {
//       id: 'promo3',
//       title: 'Weekend Brunch',
//       titleAr: 'فطور نهاية الأسبوع',
//       description: 'Special brunch menu on weekends 9 AM - 2 PM',
//       descriptionAr: 'قائمة فطور خاصة في عطلات نهاية الأسبوع من 9 صباحًا حتى 2 مساءً',
//       image: 'https://images.unsplash.com/photo-1533920379810-6bedac9e31e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
//     }
//   ]
// };

// const Menu = () => {
//   const [selectedCategory, setSelectedCategory] = useState(menuData.categories[0].id);
  
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         staggerChildren: 0.1
//       }
//     }
//   };
  
//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 }
//   };

//   const handleCategorySelect = (categoryId: string) => {
//     setSelectedCategory(categoryId);
//   };

//   const selectedCategoryData = menuData.categories.find(cat => cat.id === selectedCategory);

//   return (
//     <div className={`min-h-screen bg-background rtl`}>
//       <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-30">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <Avatar 
//                 className="h-10 w-10 border-2 border-primary/20 cursor-pointer"
//                 onClick={() => window.history.back()}
//               >
//                 <AvatarImage src={menuData.profile.logo} alt={menuData.profile.name} />
//                 <AvatarFallback>{menuData.profile.name.substring(0, 2)}</AvatarFallback>
//               </Avatar>
//               <div>
//                 <h1 className="text-xl font-bold">{menuData.profile.name}</h1>
//                 <div className="flex items-center text-sm text-muted-foreground gap-4">
//                   <div className="flex items-center gap-1">
//                     <MapPin className="h-3 w-3" />
//                     <span>{menuData.profile.address}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Star className="h-3 w-3 text-yellow-500" />
//                     <span>{menuData.profile.rating}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <DropdownMenu>
//               <DropdownMenuTrigger>
//                 <List className="h-6 w-6" />
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-56">
//                 {menuData.categories.map((category) => (
//                   <div
//                     key={category.id}
//                     className="px-3 py-2 hover:bg-accent cursor-pointer"
//                     onClick={() => handleCategorySelect(category.id)}
//                   >
//                     { category.nameAr}
//                   </div>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
          
//           <div className="mt-3 bg-secondary/10 rounded-lg p-3 flex items-center gap-2 text-sm">
//             <Timer className="h-4 w-4 text-primary" />
//             <span>
//               {'ساعات العمل: '}
//               <span className="font-medium">{menuData.profile.hours}</span>
//             </span>
//           </div>
//         </div>
//       </header>
      
//       <main className="container mx-auto px-4 py-6">
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="space-y-8"
//         >
//           {menuData.promotions && menuData.promotions.length > 0 && (
//             <motion.section variants={itemVariants} className="mb-8">
//               <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
//                 <TagIcon className="h-5 w-5 text-primary" />
//                 {'عروض خاصة'}
//               </h2>
              
//               <ScrollArea className="w-full">
//                 <div className="flex space-x-4 pb-4">
//                   {menuData.promotions.map((promo) => (
//                     <motion.div 
//                       key={promo.id}
//                       whileHover={{ scale: 1.02 }}
//                       className="relative overflow-hidden rounded-lg flex-shrink-0 w-[280px]"
//                     >
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>
//                       <img 
//                         src={promo.image} 
//                         alt={promo.titleAr} 
//                         className="w-full h-48 object-cover"
//                       />
//                       <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
//                         <h3 className="font-bold text-lg">
//                           { promo.titleAr}
//                         </h3>
//                         <p className="text-sm opacity-90">
//                           {promo.descriptionAr}
//                         </p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </ScrollArea>
//             </motion.section>
//           )}
          
//           <motion.div variants={itemVariants} className="flex items-center justify-between pb-4 mb-6 border-b">
//             <h2 className="text-2xl font-bold">
//               {selectedCategoryData?.nameAr}
//             </h2>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           >
//             {selectedCategoryData?.items.map((item) => (
//               <motion.div
//                 key={item.id}
//                 whileHover={{ y: -5 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//               >
//                 <Card className="h-full overflow-hidden">
//                   <div className="relative h-48 overflow-hidden">
//                     <img 
//                       src={item.image} 
//                       alt={item.nameAr} 
//                       className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                     />
//                     {item.featured && (
//                       <div className="absolute top-2 right-2">
//                         <Badge variant="secondary" className="bg-primary text-primary-foreground">
//                           { 'مميز'}
//                         </Badge>
//                       </div>
//                     )}
//                   </div>
//                   <CardHeader className="pb-2">
//                     <div className="flex justify-between items-start">
//                       <CardTitle className="text-lg">
//                         {item.nameAr}
//                       </CardTitle>
//                     </div>
//                     <div className="flex flex-col gap-1 mt-2">
//                       {Array.isArray(item.price) ? (
//                         item.price.map((p, idx) => (
//                           <div key={idx} className="flex justify-between items-center">
//                             <span className="text-sm text-muted-foreground">
//                               {
//                                 ['صغير', 'وسط', 'كبير'][idx]
//                               }
//                             </span>
//                             <span className="font-bold text-primary">${p}</span>
//                           </div>
//                         ))
//                       ) : (
//                         <span className="font-bold text-primary">${item.price}</span>
//                       )}
//                     </div>
//                     <CardDescription>
//                       {item.descriptionAr}
//                     </CardDescription>
//                   </CardHeader>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </main>
//     </div>
//   );
// };

// export default Menu;
