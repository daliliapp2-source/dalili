
"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlusCircle, Search, Edit, Trash2, Package, Tag, Camera, X, Plus, Pencil, Trash } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useRouter } from "next/navigation";

type Price = { id?: string; title: string; price: number; };
type Item = { id?: string; name: string; public_id: string; description: string; image?: string | null; category: string; category_id?: string; prices: Price[]; };
type Category = { id: string; name: string; itemCount?: number; };

type ActionsProp = {
  addItem: (arg: any) => Promise<any>;
  updateItem: (arg: any) => Promise<any>;
  deleteItem: (id: string, publicId: string) => Promise<any>;
  addCategory: (arg: any) => Promise<any>;
  updateCategory: (arg: any) => Promise<any>;
  deleteCategory: (id: string) => Promise<any>;
 // updateall: () => Promise<any>;
};

type ItemPayload = {
  id?: string;
  name: string;
  description: string;
  category_id: string;
  prices: Price[];
  public_id?: string;
  imageFile?: File | null; // <--- هنا اجعلها اختيارية
};

export default function ItemsClient({ items = [], categories = [], actions }: { items: Item[]; categories: Category[]; actions: ActionsProp }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showItemDialog, setShowItemDialog] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [showCategoryDialog, setShowCategoryDialog] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [categoryName, setCategoryName] = useState('');
  const [showDeleteDialog, setShowDeleteDialog] = useState<{type:'item'|'category', id?:string, publicId?:string, name?:string}|null>(null);
  const [itemList, setItemList] = useState<Item[]>(items);
  const [categoryList, setCategoryList] = useState<Category[]>(categories);

  const filteredItems = itemList.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } };
  const itemVariants = { hidden: { y: 12, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.28 } } };

  /** Item Handlers */
  const handleDeleteItem = async (id?: string, publicId?: string) => {
    if (!id || !publicId) return;
    try {
      await actions.deleteItem(id, publicId);
      toast.success('تم حذف العنصر بنجاح');
      setItemList(prev => prev.filter(i => i.id !== id));
      setShowDeleteDialog(null);
    } catch (err) {
      console.error(err); toast.error('حدث خطأ أثناء الحذف');
    }
  };

  const handleEditItem = (item: Item) => { setEditingItem(item); setShowItemDialog(true); };

  /** Category Handlers */
  const openCategoryDialog = (category?: Category) => {
    if (category) { setEditingCategory(category); setCategoryName(category.name); } else { setEditingCategory(null); setCategoryName(''); }
    setShowCategoryDialog(true);
  };

  const handleAddOrUpdateCategory = async () => {
    if (!categoryName.trim()) return toast.error('اسم الفئة مطلوب');
    try {
      if (editingCategory) {
        await actions.updateCategory({ ...editingCategory, name: categoryName });
        toast.success('تم تعديل الفئة بنجاح');
        setCategoryList(prev => prev.map(c => c.id === editingCategory.id ? { ...c, name: categoryName } : c));
      } else {
        const newCategory = await actions.addCategory({ name: categoryName });
        toast.success('تم إضافة الفئة بنجاح');
        setCategoryList(prev => [...prev, newCategory]);
      }
      setShowCategoryDialog(false); setCategoryName('');
    } catch (err) { console.error(err); toast.error('حدث خطأ أثناء الحفظ'); }
  };

  const handleDeleteCategory = async (category: Category) => {
    try {
      await actions.deleteCategory(category.id);
      toast.success('تم حذف الفئة بنجاح');
      setCategoryList(prev => prev.filter(c => c.id !== category.id));
      setShowDeleteDialog(null);
      window.location.reload();
    } catch (err) { console.error(err); toast.error('حدث خطأ أثناء الحذف'); }
  };

  return (
    <motion.div className="min-h-screen bg-background p-6" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div variants={itemVariants} className="max-w-6xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{'إدارة العناصر'}</h1>
            <p className="text-muted-foreground">{'إدارة العناصر والفئات الخاصة بك'}</p>
          </div>
          <Button onClick={() => { setEditingItem(null); setShowItemDialog(true); }}>
            <PlusCircle className="mr-2 h-4 w-4" />{'إضافة عنصر'}
          </Button>
        </div>

        {/* Categories */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2"><Tag className="h-5 w-5" />{'الفئات'}</div>
                <Button variant="outline" size="sm" onClick={() => openCategoryDialog()}><PlusCircle className="mr-2 h-4 w-4" />{'إضافة فئة'}</Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {categoryList.length === 0 ? (
                <div className="text-center py-8"><p className="text-muted-foreground mb-4">لا توجد فئات بعد</p><Button onClick={() => openCategoryDialog()}>إضافة فئة</Button></div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {categoryList.map((category) => (
                    <div key={category.id} className="relative p-4 bg-muted/50 rounded-lg text-center flex flex-col justify-between">
                      <div className="absolute top-2 right-2 flex gap-2">
                        <button className="p-1 rounded-full hover:bg-gray-200 transition" onClick={() => openCategoryDialog(category)}><Pencil className="h-4 w-4" /></button>
                        <button className="p-1 rounded-full hover:bg-red-200 text-red-600 transition" onClick={() => setShowDeleteDialog({type:'category', id: category.id, name: category.name})}><Trash className="h-4 w-4" /></button>
                      </div>
                      <div className="pt-6">
                        <h3 className="font-medium mb-2">{category.name}</h3>
                        <p className="text-2xl font-bold text-primary">{category.itemCount ?? 0}</p>
                        <p className="text-sm text-muted-foreground">{'عنصر'}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter />
          </Card>
        </motion.div>

        {/* Search */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardContent className="p-4 flex gap-4 flex-col sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder={'البحث في العناصر...'} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48"><SelectValue placeholder={'كل الفئات'} /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{'كل الفئات'}</SelectItem>
                  {categoryList.map((cat) => (<SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </motion.div>

        {/* Items Grid */}
        <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              {item.image && <div className="h-48 overflow-hidden"><img src={item.image} alt={item.name} className="w-full h-full object-cover" /></div>}
              <CardHeader className="pb-2 flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <Badge variant="secondary" className="mt-1">{item.category}</Badge>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" onClick={() => handleEditItem(item)}><Edit className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm" onClick={() => setShowDeleteDialog({type:'item', id:item.id, publicId:item.public_id, name:item.name})} className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium">{'الأسعار:'}</h4>
                  {item.prices.map((price, idx) => (
                    <div key={idx} className="flex justify-between text-sm"><span>{price.title}</span><span className="font-medium">${price.price}</span></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>

      {/* Dialogs */}
      <AddEditItemDialog open={showItemDialog} onOpenChange={setShowItemDialog} categories={categoryList} addItemAction={actions.addItem} updateItemAction={actions.updateItem} editingItem={editingItem} 
  
  />
      {showCategoryDialog && <AddEditCategoryDialog open={showCategoryDialog} onOpenChange={setShowCategoryDialog} name={categoryName} setName={setCategoryName} saveAction={handleAddOrUpdateCategory} />}
      {showDeleteDialog && <DeleteConfirmDialog dialog={showDeleteDialog} onCancel={()=>setShowDeleteDialog(null)} onConfirm={()=>{if(showDeleteDialog.type==='item') handleDeleteItem(showDeleteDialog.id,showDeleteDialog.publicId); else if(showDeleteDialog.type==='category') handleDeleteCategory({id:showDeleteDialog.id!,name:showDeleteDialog.name!});}} />}
    </motion.div>
  );
}


/** Delete Confirmation Dialog */
const DeleteConfirmDialog: React.FC<{dialog:{type:'item'|'category', id?:string, publicId?:string, name?:string}, onCancel:()=>void, onConfirm:()=>void}> = ({dialog,onCancel,onConfirm}) => (
  <Dialog open={true} onOpenChange={onCancel}>
    <DialogContent className="max-w-md">
      <DialogHeader >
        <DialogTitle>{dialog.type==='item'?'حذف العنصر':'حذف الفئة'}</DialogTitle>
        <DialogDescription >{`هل أنت متأكد أنك تريد حذف ${dialog.name ?? ''}?`}</DialogDescription>
      </DialogHeader>
      <div className="flex gap-2 justify-end pt-4">
        <Button variant="outline" onClick={onCancel}>إلغاء</Button>
        <Button variant="destructive" onClick={onConfirm}>حذف</Button>
      </div>
    </DialogContent>
  </Dialog>
);


/** Add/Edit Item Dialog */
export const AddEditItemDialog: React.FC<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categories: Category[];
  addItemAction: (payload:any)=>Promise<any>;
  updateItemAction: (payload:any)=>Promise<any>;
  editingItem?: Item | null;
 // onSave?: (item: Item) => void; // 👈 الدالة الجديدة
}> = ({ open, onOpenChange, categories, addItemAction, updateItemAction, editingItem }) => {
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [prices, setPrices] = useState<Price[]>([{ title:'', price:0 }]);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      name: editingItem?.name || '',
      description: editingItem?.description || '',
      category: editingItem?.category_id || '',
    }
  });

useEffect(() => {
  if (editingItem) {
    form.reset({
      name: editingItem.name,
      description: editingItem.description,
      category: editingItem.category_id,
    });
    setPrices(editingItem.prices.length > 0 ? editingItem.prices : [{ title: '', price: 0 }]);
    setImage(editingItem.image || null);
  } else {
    form.reset({
      name: '',
      description: '',
      category: '',
    });
    setPrices([{ title: '', price: 0 }]);
    setImage(null);
  }
}, [editingItem, form]);

  const handleImageUpload = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files?.[0];
    if(file){
      const reader = new FileReader();
      reader.onload=(ev)=>setImage(ev.target?.result as string);
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const addPrice = ()=>setPrices(prev=>[...prev,{title:'',price:0}]);
  const removePrice = (index:number)=>{ if(prices.length>1) setPrices(prev=>prev.filter((_,i)=>i!==index)); };
  const updatePrice=(index:number,field:keyof Price,value:any)=>{ const copy=[...prices]; copy[index]={...copy[index],[field]:value}; setPrices(copy); };

  const onSubmit = async (data:any)=>{

    if(!data.name||!data.description||!data.category){ toast.error('يرجى ملء الحقول المطلوبة'); return; }
    const validPrices = prices.filter(p=>p.title && p.price>0);
    if(validPrices.length===0){ toast.error('يجب إضافة سعر واحد على الأقل'); return; }


const payload: ItemPayload = {
  id: editingItem?.id,
  name: data.name,
  description: data.description,
  category_id: data.category,
  prices: validPrices,
  public_id: editingItem?.public_id
};

if (imageFile) {
  payload.imageFile = imageFile; // يتم إضافتها فقط لو غيرت الصورة
}


  try{
    setSubmitting(true);
    const res = editingItem ? await updateItemAction(payload) : await addItemAction(payload);
    if(res === 'success') {
      toast.success(editingItem?'تم تعديل العنصر بنجاح':'تم إضافة العنصر بنجاح');
      onOpenChange(false);
       window.location.reload();
    } else {
      //console.log(res);
      toast.error('حدث خطأ أثناء الحفظ');
    }
  }catch(err){ console.error(err); toast.error('حدث خطأ أثناء الإرسال'); }
  finally{ setSubmitting(false); }

  };
const selectedCategory = form.watch('category');
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5 text-primary" />
            {editingItem?'تعديل العنصر':'إضافة عنصر جديد'}
          </DialogTitle>
          <DialogDescription>
            {'أضف أو عدل عنصر مع تفاصيله وأسعاره'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={(e)=>{e.preventDefault(); form.handleSubmit(onSubmit)();}} className="space-y-6">
          {/* Image Upload */}
          <div className="space-y-4">
            <Label className="text-base font-medium">{'صورة العنصر'}</Label>
            <div className="relative h-48 bg-linear-to-br from-primary/5 to-primary/10 rounded-lg border-2 border-dashed border-primary/20 flex justify-center items-center">
              {image ? (
                <>
                  <img src={image} alt="Item preview" className="w-full h-full object-cover rounded-lg"/>
                  <Button type="button" variant="destructive" size="sm" className="absolute top-2 right-2" onClick={()=>{setImage(null); setImageFile(null);}}>
                    <X className="h-4 w-4"/>
                  </Button>
                </>
              ) : (
                <div className="text-center p-6">
                  <Camera className="mx-auto h-12 w-12 text-primary/60 mb-2" />
                  <p className="text-sm text-muted-foreground">{'انقر لتحميل صورة العنصر'}</p>
                </div>
              )}
              <Input type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={handleImageUpload}/>
            </div>
          </div>

          {/* Basic Info */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>{'اسم العنصر *'}</Label>
              <Input placeholder={'مثال: كابتشينو'} className="h-12" {...form.register('name',{required:true})}/>
            </div>
            <div className="space-y-2">
              <Label>{'الفئة *'}</Label>


<Select
  value={selectedCategory} // استخدم watch بدل getValues
  onValueChange={(v) => form.setValue('category', v)}
>
  <SelectTrigger className="h-12">
    <SelectValue placeholder={'اختر الفئة'} />
  </SelectTrigger>
  <SelectContent>
    {categories.map(c => (
      <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
    ))}
  </SelectContent>
</Select>
              
            </div>
          </div>
          <div className="space-y-2">
            <Label>{'وصف العنصر *'}</Label>
            <Textarea placeholder={'اكتب وصفاً موجزاً للعنصر...'} className="min-h-[100px]" {...form.register('description',{required:true})}/>
          </div>

          {/* Prices */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-base font-medium">{'الأسعار *'}</Label>
              <Button type="button" variant="outline" onClick={addPrice}><Plus className="w-4 h-4 mr-2" />{'إضافة سعر'}</Button>
            </div>
            {prices.map((price,index)=>(
              <Card key={index} className="p-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1 grid gap-2 sm:grid-cols-2">
                    <Input placeholder={'مثال: صغير'} value={price.title} onChange={(e)=>updatePrice(index,'title',e.target.value)} />
                    <Input type="number" step="0.01" placeholder="0.00" value={price.price || ''} onChange={(e)=>updatePrice(index,'price',parseFloat(e.target.value)||0)}/>
                  </div>
                  {prices.length>1 && <Button type="button" variant="outline" size="sm" onClick={()=>removePrice(index)}><Trash2 className="w-4 h-4"/></Button>}
                </div>
              </Card>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-6">
            <Button type="button" variant="outline" className="flex-1" onClick={()=>onOpenChange(false)}>إلغاء</Button>
            <Button type="submit" className="flex-1" disabled={submitting}><Plus className="mr-2 h-4 w-4" />{editingItem?'تعديل العنصر':'إضافة العنصر'}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

/** Add/Edit Category Dialog */
export const AddEditCategoryDialog: React.FC<{open:boolean,onOpenChange:(b:boolean)=>void,name:string,setName:(v:string)=>void,saveAction:()=>void}> = ({open,onOpenChange,name,setName,saveAction})=>(
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle>{name?'تعديل الفئة':'إضافة فئة جديدة'}</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <Input placeholder="اسم الفئة..." value={name} onChange={e=>setName(e.target.value)}/>
        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={()=>onOpenChange(false)}>إلغاء</Button>
          <Button onClick={saveAction}>حفظ</Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

