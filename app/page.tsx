// import { supabase } from "@/lib/supabaseClient";
// import Image from "next/image";

// export default function Home() {
// // const setNewView = async () => {
// //     const { data, error } = await supabase
// //       .from("UserPlans")
// //       .insert({
// //         isActive: 'true',
// //         maxItems: 2,
// //         maxProfiles: 1
// //       })

// //     if (data) console.log(data)
// //     if (error) console.log(error)
// //   };

// //   setNewView();

//   return <div>hello</div>
//   ;
// }

// import React from "react";
// import HeroText from "./components/landing/HeroText";
// import HeroCarousel from "./components/landing/HeroCarousel";
// import Features from "./components/landing/Features";
// import UseCases from "./components/landing/UseCases";
// import Testimonials from "./components/landing/Testimonials";
// import Pricing from "./components/landing/Pricing";
// import CTA from "./components/landing/CTA";
// import LoginButton from "./components/landing/LoginButton";



///////////////%#######################################################$///////////////

'use client';

import { FeatureItem, UseCase } from "@/components/landing/serversec";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { CheckCircle, GraduationCap, Menu, QrCode, Star, Store, UserCircle, Utensils } from "lucide-react";
import React from "react";
import Image from "next/image";
import LoginButton from "@/components/landing/loginbutton";
import ProfileSlider from "@/components/landing/aaa";
import Head from "next/head";


export default function Home() {

  const profileExamples = [
   


    {
      type: "مطعم",
      name: "مطعم الصديقان",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      logo: "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 4.8,
      reviews: 142
    },
    {
      type: "اعمال",
      name: "د. سارة حسن",
      image: "88.jpg",
      logo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 4.9,
      reviews: 87
    }, 
    {
      type: "تجزئة",
      name: "معرض أزياء",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      logo: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 4.7,
      reviews: 113
    }, 
  ];

  const testimonials = [
    {
      name: "ساره حسن",
      role: "مالكة مطعم",
      text: "ساعدني تطبيق دليلي في ادارة وعرض منتجاتي بشكل احترافي وسهل.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      name: "ديفيد مجدي",
      role: "مدير متجر تجزئة",
      text: "لقد شهدنا زيادة بنسبة 30% في تفاعل العملاء مع المنتجات منذ استخدام دليلي.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "مرتضي عثمان",
      role: "عامل حر",
      text: "لقد ساعدني تطبيق دليلي في بناء ملفي الشخصي وعرض خدماتي بشكل احترافي مما جعلني أحصل على عملاء جدد بسهولة.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
    }
  ];

// ✅ Animation Variants
 const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

 const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

 const [api, setApi] = React.useState<any>(null);

  React.useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [api]);





  
  return (
    <> 
          <Head>
        <title>دليلي | أنشئ ملفات تعريف رقمية مميزة</title>
        <meta name="description" content="شارك معلومات عملك ومنتجاتك وشهاداتك فورًا بمسح بسيط. أنشئ ملفك الرقمي مع دليلي." />
        <meta property="og:title" content="دليلي | ملفات تعريف رقمية" />
        <meta property="og:description" content="شارك معلومات عملك ومنتجاتك وشهاداتك فورًا." />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "دليلي",
            "description": "شارك معلومات عملك ومنتجاتك وشهاداتك فورًا بملف رقمي احترافي."
          }
        `}} />
      </Head>

    <div className="min-h-screen bg-background overflow-hidden">
      {/* ✅ Hero Section */}
      <section className="relative pb-20">
        <div className="container mx-auto px-4 pt-20 md:pt-32 relative z-20 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* <HeroText /> */}
       
        <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="md:w-1/2 text-center md:text-left"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        variants={fadeInUp}
      >
        {"أنشئ ملفات تعريف رقمية مميزة ودعها تتحدث عنك"}
      </motion.h1>
      <motion.p
        className="text-xl text-muted-foreground mb-10"
        variants={fadeInUp}
      >
        {"شارك معلومات عملك ومنتجاتك وشهاداتك فورًا بمسح بسيط."}
      </motion.p>
      <motion.div variants={fadeInUp}>











        {/* <LoginButton title="نقره واحده للبدأ" /> */}
     
        <LoginButton title="نقره واحده للبدأ" />  





      </motion.div>
    </motion.div>

{/* 
<div className="md:w-1/2 mt-8 md:mt-0 ">
 <ProfileSlider profiles={profileExamples} />
</div> */}

{/* <div className="md:w-1/2 mt-8 md:mt-0 min-h-[350px] flex items-center justify-center">
  <ProfileSlider profiles={profileExamples} />
</div> */}

<div className="w-full md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
  <div className="w-full">
    <ProfileSlider profiles={profileExamples} />
  </div>
</div>

        </div>
      </section>




      {/* ✅ Use Cases */}
      <section className="py-20 bg-linear-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <UseCase
            icon={<Utensils className="h-12 w-12 text-primary" />}
            title="المطاعم والمقاهي"
            description="قوائم طعام رقمية يمكن الوصول إليها عبر QR"
            image="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500"
          />
          <UseCase
            icon={<GraduationCap className="h-12 w-12 text-primary" />}
            title="المهنيين"
            description="شارك شهاداتك وخدماتك من خلال ملف رقمي احترافي."
            image= "77.jpg"
           // "https://images.unsplash.com/photo-1532619675605-1ede6c2d2e97?w=500"
          />
          <UseCase
            icon={<Store className="h-12 w-12 text-primary" />}
            title="متاجر التجزئة"
            description="اعرض منتجاتك مع معلومات تفصيلية في كتالوج رقمي."
            image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500"
          />
        </div>
      </section>


  {/* ✅ Features Section */}
      {/* <FeaturesSection /> */}

 <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-6">
            كل ما تحتاجه لوجودك الرقمي
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* النصوص والفيتشرز */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <FeatureItem
              icon={<UserCircle className="h-10 w-10 text-primary" />}
              title="ملفات تعريف جميلة"
              description="قم بإنشاء صفحات ملفات تعريف مذهلة تحتوي على البانر والشعار ومعلومات الاتصال وروابط التواصل الاجتماعي."
            />
            <FeatureItem
              icon={<Menu className="h-10 w-10 text-primary" />}
              title="كتالوجات رقمية"
              description="عرض منتجاتك أو شهاداتك أو عناصر القائمة في تنسيق رقمي أنيق يتم تحديثه في الوقت الفعلي."
            />
            <FeatureItem
              icon={<QrCode className="h-10 w-10 text-primary" />}
              title="رموز QR فورية"
              description="قم بإنشاء رموز QR لملفات التعريف وعناصر القائمة الخاصة بك والتي يمكن طباعتها أو مشاركتها رقميًا."
            />
            {/* <FeatureItem
              icon={<Star className="h-10 w-10 text-primary" />}
              title="تعليقات العملاء"
              description="اجمع التقييمات والملاحظات القيمة مباشرة من خلال ملف التعريف الخاص بك لتحسين عملك."
            />
           */}
          </motion.div>

          {/* الصورة */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Woman using ProfileQR app"
                width={800}
                height={600}
                className="w-full h-auto"
              />
      

            </div>

            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <p className="font-medium text-sm">سهل الإعداد</p>
              </div>
              <p className="text-xs text-muted-foreground">
                قم بإنشاء ملف التعريف الخاص بك في دقائق وابدأ في مشاركته مع عملائك.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    



      {/* ✅ Testimonials */}
      <section className="py-20 bg-linear-to-br from-purple-50 to-blue-50">
        {/* <TestimonialsCarousel testimonials={testimonials} /> */}
     
      <Carousel opts={{ loop: true, align: "start" }} className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground grow">"{testimonial.text}"</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious className="-left-4 md:-left-6" />
        <CarouselNext className="-right-4 md:-right-6" />
      </div>
    </Carousel>
     
     
     
      </section>







  {/* ✅ CTA Section */}
      {/* <CTASection /> */}


 <section className="py-20 bg-linear-to-br from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            {"هل أنت مستعد لتحويل وجودك الرقمي؟"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {"انضم إلى آلاف الشركات التي تستخدم بالفعل دليلي للتواصل مع عملائها."}
          </p>
          
          
          {/* <LoginButton title="ابدأ التجربة الآن" /> */}
      
          <LoginButton    title="ابدأ التجربة الآن" />  
        </motion.div>
      </div>
    </section>


      {/* Footer */}
      <footer className="bg-secondary/50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0 ">
              {/* <QrCode className="h-6 w-6 text-primary" /> */}
                 <Image 
                      src="/bdqr.png" // استبدل بالمسار الصحيح للصورة في public أو assets
                      alt="Logo"
                      width={60}   // 8 * 4px = 32px، نفس حجم h-8
                      height={32}  // نفس الحجم عشان ما يتشوهش
                      className="object-contain"
                        // className="object-contain invert-0 brightness-0 saturate-100 hue-rotate-200"

                    />
              <span className="text-xl font-bold ">دليلي</span>
            </div>
            {/* <div className="flex gap-8">
              <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground">{ 'الشروط'}</a>
              <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">{ 'سياسة الخصوصية'}</a>
              <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground">{ 'اتصل بنا'}</a>
            </div> */}
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()}  جميع الحقوق محفوظة. دليلي.
          </div>
        </div>
     </footer>







    </div>
</>
  );

}

///////////////%#######################################################$///////////////


// 'use client';

// import { FeatureItem, UseCase } from "@/components/landing/serversec";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { motion } from "framer-motion";
// import { CheckCircle, GraduationCap, Menu, QrCode, Star, Store, UserCircle, Utensils } from "lucide-react";
// import React from "react";
// import Image from "next/image";
// import LoginButton from "@/components/landing/loginbutton";
// import ProfileSlider from "@/components/landing/aaa";
// import Head from "next/head";

// export default function Home() {

//   const profileExamples = [
//     { type: "مطعم", name: "مطعم الصديقان", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60", logo: "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=200&auto=format&fit=crop&q=60", rating: 4.8, reviews: 142 },
//     { type: "اعمال", name: "د. سارة حسن", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60", logo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60", rating: 4.9, reviews: 87 },
//     { type: "تجزئة", name: "معرض أزياء", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60", logo: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=200&auto=format&fit=crop&q=60", rating: 4.7, reviews: 113 },
//   ];

//   const testimonials = [
//     { name: "ساره حسن", role: "مالكة مطعم", text: "ساعدني تطبيق دليلي في ادارة وعرض منتجاتي بشكل احترافي وسهل.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
//     { name: "ديفيد مجدي", role: "مدير متجر تجزئة", text: "لقد شهدنا زيادة بنسبة 30% في تفاعل العملاء مع المنتجات منذ استخدام دليلي.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
//     { name: "مرتضي عثمان", role: "عامل حر", text: "لقد ساعدني تطبيق دليلي في بناء ملفي الشخصي وعرض خدماتي بشكل احترافي مما جعلني أحصل على عملاء جدد بسهولة.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" }
//   ];

//   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
//   const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

//   return (
//     <>
//       <Head>
//         <title>دليلي | أنشئ ملفات تعريف رقمية مميزة</title>
//         <meta name="description" content="شارك معلومات عملك ومنتجاتك وشهاداتك فورًا بمسح بسيط. أنشئ ملفك الرقمي مع دليلي." />
//         <meta property="og:title" content="دليلي | ملفات تعريف رقمية" />
//         <meta property="og:description" content="شارك معلومات عملك ومنتجاتك وشهاداتك فورًا." />
//         <meta property="og:image" content="/preview.png" />
//         <meta property="og:type" content="website" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
//           {
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             "name": "دليلي",
//             "description": "شارك معلومات عملك ومنتجاتك وشهاداتك فورًا بملف رقمي احترافي."
//           }
//         `}} />
//       </Head>

//       <div className="min-h-screen bg-background overflow-hidden">

//         {/* Hero Section */}
//         <section className="relative pb-20">
//           <div className="container mx-auto px-4 pt-20 md:pt-32 relative z-20 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
//             <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="md:w-1/2 text-center md:text-left">
//               <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" variants={fadeInUp}>
//                 أنشئ ملفات تعريف رقمية مميزة ودعها تتحدث عنك
//               </motion.h1>
//               <motion.p className="text-xl text-muted-foreground mb-10" variants={fadeInUp}>
//                 شارك معلومات عملك ومنتجاتك وشهاداتك فورًا بمسح بسيط.
//               </motion.p>
//               <motion.div variants={fadeInUp}>
//                 <LoginButton title="نقره واحده للبدأ" />
//               </motion.div>
//             </motion.div>

//             <div className="w-full md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
//               <div className="w-full">
//                 <ProfileSlider profiles={profileExamples} />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Use Cases */}
//         <section className="py-20 bg-linear-to-br from-blue-50 to-purple-50">
//           <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
//             <UseCase
//               icon={<Utensils className="h-12 w-12 text-primary" />}
//               title="المطاعم والمقاهي"
//               description="قوائم طعام رقمية يمكن الوصول إليها عبر QR"
//               image="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500"
//             />
//             <UseCase
//               icon={<GraduationCap className="h-12 w-12 text-primary" />}
//               title="المهنيين"
//               description="شارك شهاداتك وخدماتك من خلال ملف رقمي احترافي."
//               image="77.jpg"
//             />
//             <UseCase
//               icon={<Store className="h-12 w-12 text-primary" />}
//               title="متاجر التجزئة"
//               description="اعرض منتجاتك مع معلومات تفصيلية في كتالوج رقمي."
//               image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500"
//             />
//           </div>
//         </section>

//         {/* Features */}
//         <section className="py-20">
//           <div className="container mx-auto px-4">
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-16">
//               <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-6">
//                 كل ما تحتاجه لوجودك الرقمي
//               </motion.h2>
//             </motion.div>
//             <div className="grid md:grid-cols-2 gap-16 items-center">
//               <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
//                 <FeatureItem icon={<UserCircle className="h-10 w-10 text-primary" />} title="ملفات تعريف جميلة" description="قم بإنشاء صفحات ملفات تعريف مذهلة تحتوي على البانر والشعار ومعلومات الاتصال وروابط التواصل الاجتماعي."/>
//                 <FeatureItem icon={<Menu className="h-10 w-10 text-primary" />} title="كتالوجات رقمية" description="عرض منتجاتك أو شهاداتك أو عناصر القائمة في تنسيق رقمي أنيق يتم تحديثه في الوقت الفعلي."/>
//                 <FeatureItem icon={<QrCode className="h-10 w-10 text-primary" />} title="رموز QR فورية" description="قم بإنشاء رموز QR لملفات التعريف وعناصر القائمة الخاصة بك والتي يمكن طباعتها أو مشاركتها رقميًا."/>
//               </motion.div>
//               <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
//                 <div className="rounded-xl overflow-hidden shadow-xl">
//                   <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60" alt="Woman using ProfileQR app" width={800} height={600} className="w-full h-auto"/>
//                 </div>
//                 <motion.div initial={{ x: "100%", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
//                   <div className="flex items-center gap-2 mb-2">
//                     <CheckCircle className="h-5 w-5 text-green-500" />
//                     <p className="font-medium text-sm">سهل الإعداد</p>
//                   </div>
//                   <p className="text-xs text-muted-foreground">
//                     قم بإنشاء ملف التعريف الخاص بك في دقائق وابدأ في مشاركته مع عملائك.
//                   </p>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="py-20 bg-linear-to-br from-purple-50 to-blue-50">
//           <Carousel opts={{ loop: true, align: "start" }} className="w-full max-w-5xl mx-auto">
//             <CarouselContent>
//               {testimonials.map((testimonial, index) => (
//                 <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
//                   <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-lg p-6 shadow-md h-full flex flex-col">
//                     <div className="flex items-center gap-4 mb-4">
//                       <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover"/>
//                       <div>
//                         <h4 className="font-semibold">{testimonial.name}</h4>
//                         <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//                       </div>
//                     </div>
//                     <p className="text-muted-foreground grow">"{testimonial.text}"</p>
//                     <div className="flex mt-4">
//                       {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 text-yellow-400"/>))}
//                     </div>
//                   </motion.div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <div className="hidden md:block">
//               <CarouselPrevious className="-left-4 md:-left-6" />
//               <CarouselNext className="-right-4 md:-right-6" />
//             </div>
//           </Carousel>
//         </section>

//         {/* CTA */}
//         <section className="py-20 bg-linear-to-br from-primary/10 to-primary/5">
//           <div className="container mx-auto px-4">
//             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
//               <h2 className="text-3xl font-bold mb-6">هل أنت مستعد لتحويل وجودك الرقمي؟</h2>
//               <p className="text-xl text-muted-foreground mb-8">انضم إلى آلاف الشركات التي تستخدم بالفعل دليلي للتواصل مع عملائها.</p>
//               <LoginButton title="ابدأ التجربة الآن"/>
//             </motion.div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="bg-secondary/50 py-10">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <div className="flex items-center gap-2 mb-6 md:mb-0">
//                 <Image src="/bdqr.png" alt="Logo دليلي" width={32} height={32} className="object-contain"/>
//                 <span className="text-xl font-bold text-blue-600">دليلي</span>
//               </div>
//             </div>
//             <div className="mt-8 text-center text-sm text-muted-foreground">
//               © {new Date().getFullYear()} جميع الحقوق محفوظة. دليلي.
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }



// 'use client';

// import { FeatureItem, UseCase } from "@/components/landing/serversec";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { motion } from "framer-motion";
// import { CheckCircle, GraduationCap, Menu, QrCode, Star, Store, UserCircle, Utensils } from "lucide-react";
// import React from "react";
// import Image from "next/image";
// import LoginButton from "@/components/landing/loginbutton";
// import ProfileSlider from "@/components/landing/aaa";
// import Head from "next/head";

// export default function Home() {

//   const profileExamples = [
//     { type: "مطعم", name: "مطعم الصديقان", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60", logo: "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=200&auto=format&fit=crop&q=60", rating: 4.8, reviews: 142 },
//     { type: "اعمال", name: "د. سارة حسن", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60", logo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60", rating: 4.9, reviews: 87 },
//     { type: "تجزئة", name: "معرض أزياء", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60", logo: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=200&auto=format&fit=crop&q=60", rating: 4.7, reviews: 113 },
//   ];

//   const testimonials = [
//     { name: "ساره حسن", role: "مالكة مطعم", text: "ساعدني تطبيق دليلي في ادارة وعرض منتجاتي بشكل احترافي وسهل.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
//     { name: "ديفيد مجدي", role: "مدير متجر تجزئة", text: "لقد شهدنا زيادة بنسبة 30% في تفاعل العملاء مع المنتجات منذ استخدام دليلي.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
//     { name: "مرتضي عثمان", role: "عامل حر", text: "لقد ساعدني تطبيق دليلي في بناء ملفي الشخصي وعرض خدماتي بشكل احترافي مما جعلني أحصل على عملاء جدد بسهولة.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" }
//   ];

//   const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
//   const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

//   return (
//     <>
//       <Head>
//         <title>دليلي | أنشئ ملفات تعريف رقمية مميزة</title>
//         <meta name="description" content="شارك معلومات عملك ومنتجاتك وشهاداتك فورًا بمسح بسيط. أنشئ ملفك الرقمي مع دليلي." />
//         <meta property="og:title" content="دليلي | ملفات تعريف رقمية" />
//         <meta property="og:description" content="شارك معلومات عملك ومنتجاتك وشهاداتك فورًا." />
//         <meta property="og:image" content="/preview.png" />
//         <meta property="og:type" content="website" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
//           {
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             "name": "دليلي",
//             "description": "شارك معلومات عملك ومنتجاتك وشهاداتك فورًا بملف رقمي احترافي."
//           }
//         `}} />
//       </Head>

//       <div className="min-h-screen bg-background overflow-hidden">

//         {/* Hero Section */}
//         <section className="relative pb-20">
//           <div className="container mx-auto px-4 pt-20 md:pt-32 relative z-20 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
//             <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="md:w-1/2 text-center md:text-left">
//               <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" variants={fadeInUp}>
//                 أنشئ ملفات تعريف رقمية مميزة ودعها تتحدث عنك
//               </motion.h1>
//               <motion.p className="text-xl text-muted-foreground mb-10" variants={fadeInUp}>
//                 شارك معلومات عملك ومنتجاتك وشهاداتك فورًا بمسح بسيط.
//               </motion.p>
//               <motion.div variants={fadeInUp}>
//                 <LoginButton title="نقره واحده للبدأ" />
//               </motion.div>
//             </motion.div>

//             <div className="w-full md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
//               <div className="w-full">
//                 <ProfileSlider profiles={profileExamples} />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Use Cases */}
//         <section className="py-20 bg-linear-to-br from-blue-50 to-purple-50">
//           <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
//             <UseCase
//               icon={<Utensils className="h-12 w-12 text-primary" />}
//               title="المطاعم والمقاهي"
//               description="قوائم طعام رقمية يمكن الوصول إليها عبر QR"
//               image="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500"
//             />
//             <UseCase
//               icon={<GraduationCap className="h-12 w-12 text-primary" />}
//               title="المهنيين"
//               description="شارك شهاداتك وخدماتك من خلال ملف رقمي احترافي."
//               image="77.jpg"
//             />
//             <UseCase
//               icon={<Store className="h-12 w-12 text-primary" />}
//               title="متاجر التجزئة"
//               description="اعرض منتجاتك مع معلومات تفصيلية في كتالوج رقمي."
//               image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500"
//             />
//           </div>
//         </section>

//         {/* Features */}
//         <section className="py-20">
//           <div className="container mx-auto px-4">
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-16">
//               <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-6">
//                 كل ما تحتاجه لوجودك الرقمي
//               </motion.h2>
//             </motion.div>
//             <div className="grid md:grid-cols-2 gap-16 items-center">
//               <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">
//                 <FeatureItem icon={<UserCircle className="h-10 w-10 text-primary" />} title="ملفات تعريف جميلة" description="قم بإنشاء صفحات ملفات تعريف مذهلة تحتوي على البانر والشعار ومعلومات الاتصال وروابط التواصل الاجتماعي."/>
//                 <FeatureItem icon={<Menu className="h-10 w-10 text-primary" />} title="كتالوجات رقمية" description="عرض منتجاتك أو شهاداتك أو عناصر القائمة في تنسيق رقمي أنيق يتم تحديثه في الوقت الفعلي."/>
//                 <FeatureItem icon={<QrCode className="h-10 w-10 text-primary" />} title="رموز QR فورية" description="قم بإنشاء رموز QR لملفات التعريف وعناصر القائمة الخاصة بك والتي يمكن طباعتها أو مشاركتها رقميًا."/>
//               </motion.div>
//               <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
//                 <div className="rounded-xl overflow-hidden shadow-xl">
//                   <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60" alt="Woman using ProfileQR app" width={800} height={600} className="w-full h-auto" priority />
//                 </div>
//                 <motion.div initial={{ x: "100%", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }} className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
//                   <div className="flex items-center gap-2 mb-2">
//                     <CheckCircle className="h-5 w-5 text-green-500" />
//                     <p className="font-medium text-sm">سهل الإعداد</p>
//                   </div>
//                   <p className="text-xs text-muted-foreground">
//                     قم بإنشاء ملف التعريف الخاص بك في دقائق وابدأ في مشاركته مع عملائك.
//                   </p>
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="py-20 bg-linear-to-br from-purple-50 to-blue-50">
//           <Carousel opts={{ loop: true, align: "start" }} className="w-full max-w-5xl mx-auto">
//             <CarouselContent>
//               {testimonials.map((testimonial, index) => (
//                 <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
//                   <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-lg p-6 shadow-md h-full flex flex-col">
//                     <div className="flex items-center gap-4 mb-4">
//                       <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
//                       <div>
//                         <h4 className="font-semibold">{testimonial.name}</h4>
//                         <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//                       </div>
//                     </div>
//                     <p className="text-muted-foreground grow">"{testimonial.text}"</p>
//                     <div className="flex mt-4">
//                       {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 text-yellow-400"/>))}
//                     </div>
//                   </motion.div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <div className="hidden md:block">
//               <CarouselPrevious className="-left-4 md:-left-6" />
//               <CarouselNext className="-right-4 md:-right-6" />
//             </div>
//           </Carousel>
//         </section>

//         {/* CTA */}
//         <section className="py-20 bg-linear-to-br from-primary/10 to-primary/5">
//           <div className="container mx-auto px-4">
//             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
//               <h2 className="text-3xl font-bold mb-6">هل أنت مستعد لتحويل وجودك الرقمي؟</h2>
//               <p className="text-xl text-muted-foreground mb-8">انضم إلى آلاف الشركات التي تستخدم بالفعل دليلي للتواصل مع عملائها.</p>
//               <LoginButton title="ابدأ التجربة الآن"/>
//             </motion.div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="bg-secondary/50 py-10">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <div className="flex items-center gap-2 mb-6 md:mb-0">
//                 <Image src="/bdqr.png" alt="Logo دليلي" width={32} height={32} className="object-contain"/>
//                 <span className="text-xl font-bold text-blue-600">دليلي</span>
//               </div>
//             </div>
//             <div className="mt-8 text-center text-sm text-muted-foreground">
//               © {new Date().getFullYear()} جميع الحقوق محفوظة. دليلي.
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }







/*
 const profileExamples = [
    {
      type: "restaurant",
      name: "Alex's Restaurant",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      logo: "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 4.8,
      reviews: 142
    },
    {
      type: "professional",
      name: "Dr. Sarah Johnson",
      image: "https://images.unsplash.com/photo-1532619675605-1ede6c2d2e97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      logo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 4.9,
      reviews: 87
    },
    {
      type: "retail",
      name: "Fashion Boutique",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      logo: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      rating: 4.7,
      reviews: 113
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      text: "Paperless transformed our business! Our customers love scanning our QR code to view our menu and specials.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
    },
    {
      name: "David Chen",
      role: "Retail Shop Manager",
      text: "We've seen a 30% increase in product engagement since using Paperless to showcase our products.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60"
    },
    {
      name: "Michelle Rodriguez",
      role: "Bakery Owner",
      text: "The QR codes for our baked goods have been amazing for customer interaction and feedback!",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60"
    }
  ];

*/










