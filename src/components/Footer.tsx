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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-green-400 mb-4">
            TEOCUTURE
            </h3>
            <p className="text-gray-300 mb-6">
            A fashion brand redefining elegance through couture tailoring and stylish ready-to-wear collections.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
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
                    className="text-gray-300 hover:text-green-400 transition-all duration-200"
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
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
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
                    className="text-gray-300 hover:text-green-400 transition-all duration-200"
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
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">+234 9060295114</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300 text-sm">
                  osasonadabira@gmail.com
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <p className="text-gray-400 text-sm mb-3">
                Subscribe for updates and exclusive offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-lg transition-colors"
                >
                  <Mail className="h-4 w-4" />
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
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TEOCUTURE. All rights reserved.
            Made with ❤️ in Nigeria.
          </p>
          <div className="flex space-x-2 text-sm">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
