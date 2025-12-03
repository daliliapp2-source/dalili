import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";



// Feature Item Component
const FeatureItem = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

// Use Case Component
const UseCase = ({ icon, title, description, image }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-background rounded-lg overflow-hidden shadow-md border"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

// Pricing Card Component
const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  buttonAction,
  highlighted = false 
}: { 
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonAction: () => void;
  highlighted?: boolean;
}) => {
  return (
    <motion.div 
      className={`bg-background rounded-lg p-8 border ${highlighted ? 'border-primary shadow-lg ring-2 ring-primary/20' : 'shadow-sm'}`}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-muted-foreground">/month</span>
      </div>
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className="w-full" 
        variant={highlighted ? "default" : "outline"}
        onClick={buttonAction}
      >
        {buttonText}
      </Button>
    </motion.div>
  );
};



export {
  FeatureItem,
  UseCase,
  PricingCard
};