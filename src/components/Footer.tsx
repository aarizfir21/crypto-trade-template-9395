import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-medium text-lg">ARIZYEN</h3>
              <p className="text-sm text-muted-foreground">
                AI automation agency helping businesses save time and grow faster.
              </p>
              <Button className="button-gradient">
                <a href="https://cal.com/aariz21" target="_blank" rel="noopener noreferrer">
                  Book a Consultation
                </a>
              </Button>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:aariz@arizyen.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    aariz@arizyen.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+60122448099" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +60 12 244 8099 (Malaysia)
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+61421640977" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +61 421 640 977 (Australia)
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Address</h4>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  160 City Rd, Darlington<br />
                  2008, NSW, Australia
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} ARIZYEN. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;