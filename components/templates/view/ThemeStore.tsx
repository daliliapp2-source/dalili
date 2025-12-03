
 "use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuTemplates, profileTemplates } from "../data/temps";
import { TemplateCard } from "./TemplateCard";

const ThemeStore = () => {
  const [activeTab, setActiveTab] = useState("profiles");

  return (
    <div className="min-h-screen bg-store-bg">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            متجر القوالب
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اختر من بين مجموعة متنوعة من القوالب الاحترافية لإنشاء هويتك الرقمية المميزة
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="profiles" className="text-lg">
              قوالب البروفايلات
            </TabsTrigger>
            <TabsTrigger value="menus" className="text-lg">
              القوائم الإلكترونية
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profiles" className="mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {profileTemplates.map((template, index) => (
                  <TemplateCard key={template.id} template={template} index={index} />
                ))}
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="menus" className="mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {menuTemplates.map((template, index) => (
                  <TemplateCard key={template.id} template={template} index={index} />
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ThemeStore;
