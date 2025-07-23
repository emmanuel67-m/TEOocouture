import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#253E35] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-[#F2C6C2] mb-4">
              TEOCUTURE
            </h3>
            <p className="text-[#B2BFAE] mb-6">
              A fashion brand redefining elegance through couture tailoring and stylish ready-to-wear collections.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-[#B2BFAE] hover:text-[#F2C6C2] transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#F2C6C2]">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "About Us",
                "Our Story",
                "Collections",
                "Size Guide",
                "Care Instructions",
              ].map((link) => (
                <li key={link}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-[#B2BFAE] hover:text-[#F2C6C2] transition-all duration-200"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#F2C6C2]">Customer Service</h4>
            <ul className="space-y-2">
              {[
                "Contact Us",
                "Shipping Info",
                "Returns & Exchange",
                "FAQ",
                "Support",
              ].map((link) => (
                <li key={link}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-[#B2BFAE] hover:text-[#F2C6C2] transition-all duration-200"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#F2C6C2]">Get in Touch</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#F2C6C2]" />
                <span className="text-[#B2BFAE] text-sm">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#F2C6C2]" />
                <span className="text-[#B2BFAE] text-sm">+234 9060295114</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#F2C6C2]" />
                <span className="text-[#B2BFAE] text-sm">
                  osasonadabira@gmail.com
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-semibold mb-2 text-[#F2C6C2]">Newsletter</h5>
              <p className="text-[#B2BFAE] text-sm mb-3">
                Subscribe for updates and exclusive offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-[#B2BFAE] text-[#253E35] border border-[#F2C6C2] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#F2C6C2] text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#F2C6C2] hover:bg-pink-300 px-4 py-2 rounded-r-lg transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#253E35]" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-[#B2BFAE] mt-12 pt-8 flex flex-col justify-between items-center"
        >
          <p className="text-[#B2BFAE] text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TEOCUTURE. All rights reserved. Made with ❤️ in Nigeria.
          </p>
          <div className="flex space-x-4 text-sm">
            {["Privacy Policy", "Terms of Service"].map((text, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.05 }}
                href="#"
                className="text-[#B2BFAE] hover:text-[#F2C6C2] transition-colors"
              >
                {text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
