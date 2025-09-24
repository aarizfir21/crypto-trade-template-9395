import { motion } from "framer-motion";
import { Zap, MessageSquare, BarChart3, Database } from "lucide-react";

const ServicesCarousel = () => {
  const services = [
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and optimize business processes"
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots & Integrations",
      description: "Intelligent customer service and automated interactions"
    },
    {
      icon: BarChart3,
      title: "Data & Reporting Dashboards",
      description: "Real-time insights and automated reporting systems"
    },
    {
      icon: Database,
      title: "Marketing and CRM Automation",
      description: "Automated lead generation and customer relation management"
    }
  ];

  // Duplicate services for seamless loop
  const extendedServices = [...services, ...services, ...services];

  return (
    <div className="w-full overflow-hidden py-12">
      <motion.div 
        className="flex space-x-8"
        initial={{ opacity: 0, x: "0%" }}
        animate={{
          opacity: 1,
          x: "-33.33%"
        }}
        transition={{
          opacity: { duration: 0.5 },
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5
          }
        }}
        style={{
          width: "fit-content",
          display: "flex",
          gap: "2rem"
        }}
      >
        {extendedServices.map((service, index) => (
          <motion.div
            key={`service-${index}`}
            className="glass glass-hover rounded-xl p-6 text-center min-w-[280px] flex-shrink-0"
            initial={{ opacity: 0.8 }}
            whileHover={{ 
              opacity: 1,
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-[#22c55e] rounded-lg flex items-center justify-center mx-auto mb-4">
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-medium mb-3">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesCarousel;