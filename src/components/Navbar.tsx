import React from 'react';
import { Search, ShoppingBag, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';

const Navbar = () => {
  const {
    theme,
    toggleTheme,
    isMobileMenuOpen,
    setMobileMenuOpen,
    setCartOpen,
    getCartItemsCount,
    filters,
    setFilters,
    searchQuery,
    setSearchQuery,
  } = useStore();

  const cartItemsCount = getCartItemsCount();

  const navItems = [{ name: 'Ready-to-Wear', value: 'Ready-to-Wear' }];

  const handleCategoryChange = (category: 'Ready-to-Wear') => {
    setFilters({ category });
    setMobileMenuOpen(false);
    const productsSection = document.querySelector('#products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const productsSection = document.querySelector('#products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 dark:bg-[#2D3F32]/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-[#9FAF8A] dark:border-[#E6BFCB] transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection('#hero-section')}
          >
            <h1 className="text-2xl font-bold text-[#364C3D] dark:text-[#E6BFCB]">
              TEOCUTURE
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleCategoryChange(item.value as 'Ready-to-Wear')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#E6BFCB] dark:focus:ring-[#9FAF8A] ${
                  filters.category === item.value
                    ? 'bg-[#E6BFCB] text-[#364C3D] dark:bg-[#364C3D] dark:text-[#E6BFCB]'
                    : 'text-[#364C3D] dark:text-[#E6BFCB] hover:text-[#364C3D] dark:hover:text-[#E6BFCB] hover:bg-[#9FAF8A] dark:hover:bg-[#2F4033] hover:shadow-md dark:hover:shadow-[#E6BFCB]/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}

            <motion.button
              onClick={() => scrollToSection('#about-section')}
              className="px-4 py-2 rounded-lg text-sm font-medium text-[#364C3D] dark:text-[#E6BFCB] hover:bg-[#9FAF8A] dark:hover:bg-[#2F4033] hover:shadow-md dark:hover:shadow-[#E6BFCB]/20 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#E6BFCB] dark:focus:ring-[#9FAF8A]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="h-5 w-5 text-[#A0B192]" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search Here..."
                className="block w-full pl-10 pr-3 py-2 border border-[#9FAF8A] dark:border-[#E6BFCB] rounded-lg bg-white dark:bg-[#2D3F32] text-[#364C3D] dark:text-[#E6BFCB] placeholder-[#A0B192] focus:outline-none focus:ring-2 focus:ring-[#E6BFCB] dark:focus:ring-[#9FAF8A] transition-colors"
              />
            </form>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 text-[#364C3D] dark:text-[#E6BFCB] hover:bg-[#9FAF8A] dark:hover:bg-[#2F4033] rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </motion.button>

            {/* Cart */}
            <motion.button
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-[#364C3D] dark:text-[#E6BFCB] hover:bg-[#9FAF8A] dark:hover:bg-[#2F4033] rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingBag className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-[#E6BFCB] text-[#364C3D] text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </motion.button>

            {/* Mobile menu */}
            <motion.button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#364C3D] dark:text-[#E6BFCB] rounded-lg hover:bg-[#9FAF8A] dark:hover:bg-[#2F4033] transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#2D3F32] border-t dark:border-[#9FAF8A] transition-all duration-300 ease-in-out"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search className="h-5 w-5 text-[#A0B192]" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                  className="block w-full pl-10 pr-3 py-2 border border-[#9FAF8A] dark:border-[#E6BFCB] rounded-md bg-white dark:bg-[#2D3F32] text-[#364C3D] dark:text-[#E6BFCB] placeholder-[#A0B192] focus:outline-none focus:ring-2 focus:ring-[#E6BFCB] dark:focus:ring-[#9FAF8A]"
                />
              </form>

              {/* Mobile Navigation */}
              <div className="space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleCategoryChange(item.value as 'Ready-to-Wear')}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#E6BFCB] dark:focus:ring-[#9FAF8A] ${
                      filters.category === item.value
                        ? 'bg-[#E6BFCB] text-[#364C3D] dark:bg-[#364C3D] dark:text-[#E6BFCB]'
                        : 'text-[#364C3D] dark:text-[#E6BFCB] hover:bg-[#9FAF8A] dark:hover:bg-[#2F4033]'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}

                <motion.button
                  onClick={() => scrollToSection('#about-section')}
                  className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-[#364C3D] dark:text-[#E6BFCB] hover:bg-[#9FAF8A] dark:hover:bg-[#2F4033] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E6BFCB] dark:focus:ring-[#9FAF8A]"
                  whileTap={{ scale: 0.95 }}
                >
                  About
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
