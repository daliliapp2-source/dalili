import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";
import { Template } from "../data/tempo";
import Link from "next/link";

interface TemplateCardProps {
  template: Template;
  index: number;
}

export const TemplateCard = ({ template, index }: TemplateCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
    >
      <Card className="overflow-hidden bg-store-card hover:bg-store-card-hover transition-all duration-300 border-border group">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">معاينة القالب</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {template.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {template.description}
            </p>
          </div>
          
          <Link href={`/preview/${template.type}/${template.id}`} className="block">
            <Button className="w-full" variant="default">
              <Eye className="ml-2 h-4 w-4" />
              معاينة القالب
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};
