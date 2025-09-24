import { motion } from "framer-motion";
import { ArrowRight, Bot, Users, Star, CheckCircle, Zap, BarChart3, MessageSquare, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ServicesCarousel from "@/components/ServicesCarousel";
import teamPhoto from "@/assets/team-photo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20 text-center"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Bot className="w-4 h-4 inline-block mr-2" />
            AI Automation Agency
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10 mx-auto">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-center">
            <span className="text-gray-200">
              <TextGenerateEffect words="We build automation systems" />
            </span>
            <br />
            <span className="text-white font-medium">
              <TextGenerateEffect words="that help businesses grow 🚀" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-center mx-auto"
          >
            ARIZYEN is an automation agency that helps businesses save time and grow faster through AI integrations, workflow automation, and system optimization.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Button size="lg" className="button-gradient">
              <a href="https://cal.com/aariz21" target="_blank" rel="noopener noreferrer">
                Book a Free Consultation
              </a>
            </Button>
            <Button size="lg" variant="link" className="text-white">
              View Case Studies <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <section id="about" className="container px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-normal mb-6"
            >
              About <span className="text-gradient font-medium">ARIZYEN</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-lg text-gray-400 leading-relaxed text-left max-w-md"
            >
              ARIZYEN is an automation agency that helps businesses save time and grow faster through AI integrations, workflow automation, and system optimization. We specialize in creating custom solutions that eliminate manual processes and boost productivity.
            </motion.p>
          </div>
          
          {/* Right side - Team placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            <div className="glass rounded-xl overflow-hidden">
              <img 
                src={teamPhoto} 
                alt="ARIZYEN Team" 
                className="w-full h-full object-cover aspect-video"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container px-4 py-24">
        <div className="max-w-2xl mb-16 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight">
            Our <span className="text-gradient font-medium">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            We offer comprehensive automation solutions tailored to your business needs.
          </p>
        </div>

        <ServicesCarousel />
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="container px-4 py-24">
        <div className="max-w-2xl mb-16 mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight">
            Success <span className="text-gradient font-medium">Stories</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            See how we've helped businesses transform their operations and achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Thermomix Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass glass-hover rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#22c55e] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-medium">Thermomix Project</h3>
            </div>
            <p className="text-gray-400 mb-6">
              We helped Thermomix streamline their lead management and customer engagement. Previously, sales consultants relied on manual processes, leading to delays. ARIZYEN built an AI-powered CRM automation that:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">Routed leads to the correct consultants automatically</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">Reduced response time from hours to under 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">Freed up consultants to focus on customers instead of admin</span>
              </div>
            </div>
            <div className="bg-primary/10 rounded-lg p-4">
              <p className="text-primary font-medium">Result: 30% faster onboarding and major time savings per consultant</p>
            </div>
          </motion.div>

          {/* EatClub Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass glass-hover rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#22c55e] rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-medium">EatClub Project</h3>
            </div>
            <p className="text-gray-400 mb-6">
              EatClub runs guerilla marketing campaigns with many contractors. Their challenge: onboarding, scheduling, and invoicing were all manual and error-prone. ARIZYEN implemented a full automation system that:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">Collected contractor profiles automatically</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">Enabled shift creation and confirmation via chatbot</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">Generated invoices automatically from confirmed shifts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-gray-300">Linked campaign ROI metrics to performance and location</span>
              </div>
            </div>
            <div className="bg-primary/10 rounded-lg p-4">
              <p className="text-primary font-medium">Result: 80% reduction in invoice errors and smoother campaigns</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-6">Your business could be the next success story.</p>
          <Button className="button-gradient">
            <a href="https://cal.com/aariz21" target="_blank" rel="noopener noreferrer">
              Schedule Your Consultation
            </a>
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container px-4 py-24">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-6">
            How It <span className="text-gradient font-medium">Works</span>
          </h2>
          <p className="text-lg text-gray-400">
            Our proven process ensures seamless automation implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Book a free consultation",
              description: "Schedule a call to discuss your needs and challenges"
            },
            {
              step: "02",
              title: "We analyze your workflows",
              description: "Our team studies your processes to identify optimization opportunities"
            },
            {
              step: "03",
              title: "We design and implement tailored automation",
              description: "Custom solutions built specifically for your business requirements"
            },
            {
              step: "04",
              title: "You grow faster while saving time and costs",
              description: "Enjoy increased efficiency and reduced operational overhead"
            }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-white">{item.step}</span>
              </div>
              <h3 className="text-lg font-medium mb-3">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-normal mb-6">
              Get In <span className="text-gradient font-medium">Touch</span>
            </h2>
            <p className="text-lg text-gray-400">
              Ready to transform your business with automation? Let's discuss your project.
            </p>
          </div>

          <div className="glass glass-hover rounded-xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
