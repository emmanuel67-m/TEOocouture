import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';
import { Product } from '../types';
import { useStore } from '../store/useStore';
import { filterAndSortProducts } from '../utils/mockData';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  const { filters, searchQuery } = useStore();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const filteredProducts = filterAndSortProducts(
    products,
    filters.category,
    filters.priceRange,
    filters.sortBy,
    searchQuery
  );

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedProduct(null);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-[#E6BFCB] dark:bg-[#364C3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#364C3D] dark:text-[#E6BFCB] mb-6">
              {title}
            </h2>
            <div className="w-24 h-1 bg-[#364C3D] dark:bg-[#E6BFCB] mx-auto rounded-full"></div>
          </motion.div>
        )}

        {/* Filter Info */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#364C3D] dark:text-[#E6BFCB]"
          >
            Showing <span className="font-semibold">{filteredProducts.length}</span> products
            {filters.category !== 'Ready-to-Wear' && (
              <span> in <span className="font-semibold capitalize">{filters.category}</span></span>
            )}
            {searchQuery && searchQuery.trim() !== '' && (
              <span> for "<span className="font-semibold">{searchQuery}</span>"</span>
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <select
              value={filters.sortBy}
              onChange={(e) => useStore.getState().setFilters({ sortBy: e.target.value as any })}
              className="px-4 py-2 border border-[#B6C1A9] dark:border-[#E6BFCB] rounded-lg bg-white dark:bg-[#364C3D] text-[#364C3D] dark:text-[#E6BFCB] focus:outline-none focus:ring-2 focus:ring-[#364C3D]"
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </motion.div>
        </div>

        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <div className="text-8xl mb-6">🛍️</div>
            <h3 className="text-2xl font-semibold text-[#364C3D] dark:text-[#E6BFCB] mb-4">
              No products found
            </h3>
            <p className="text-[#364C3D] dark:text-[#E6BFCB] text-lg">
              {searchQuery?.trim() ? (
                <>
                  Try searching with different keywords or{' '}
                  <button
                    onClick={() => useStore.getState().setSearchQuery('')}
                    className="text-[#B6C1A9] hover:underline"
                  >
                    clear your search
                  </button>
                </>
              ) : (
                'Try adjusting your filters or search terms'
              )}
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={item}>
                <ProductCard product={product} onQuickView={handleQuickView} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          isOpen={isDetailOpen}
          onClose={handleCloseDetail}
        />
      )}
    </section>
  );
};

export default ProductGrid;
