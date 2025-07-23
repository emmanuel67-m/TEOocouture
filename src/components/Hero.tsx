import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.querySelector('#products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative bg-[#C1CCBD] min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23445744' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="flex items-center bg-[#E4C8C4] px-6 py-3 rounded-full">
              <Star className="h-5 w-5 text-[#445744] mr-2" />
              <span className="text-sm font-semibold text-[#445744]">
                #1 Authentic Teocuture Fashion
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#445744] mb-8 leading-tight"
          >
            Crafting
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#445744] to-[#445744] block">
              Perfect Fits
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-[#445744] mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            A fashion brand redefining elegance through couture tailoring and stylish ready-to-wear collections.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="bg-[#445744] hover:bg-[#364632] text-white px-8 py-4 text-lg font-semibold group"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="border-2 border-[#445744] text-[#445744] hover:bg-[#445744] hover:text-white px-8 py-4 text-lg font-semibold"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-[#A6B1A3]"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#445744] mb-2">500+</div>
              <div className="text-[#445744]">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#445744] mb-2">100+</div>
              <div className="text-[#445744]">Unique Designs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#445744] mb-2">24/7</div>
              <div className="text-[#445744]">Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
