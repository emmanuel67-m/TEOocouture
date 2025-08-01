import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../store/useStore';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart } = useStore();

  const handleAddToCart = () => {
    const defaultSize = product.sizes[0];
    addToCart(product, defaultSize);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-[#2D3F32] rounded-xl shadow-lg overflow-hidden group transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onQuickView?.(product)}
              className="bg-white text-[#2D3F32] p-2 rounded-full shadow-lg hover:bg-[#E6BFCB]"
            >
              <Eye className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-[#2D3F32] p-2 rounded-full shadow-lg hover:bg-[#E6BFCB]"
            >
              <Heart className="h-4 w-4" />
            </motion.button>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1">
          {product.isNew && (
            <span className="bg-[#9FAF8A] text-[#2D3F32] text-xs px-2 py-1 rounded-full font-semibold">
              New
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-[#E6BFCB] text-[#2D3F32] text-xs px-2 py-1 rounded-full font-semibold">
              Sale
            </span>
          )}
          {!product.availability && (
            <span className="bg-gray-400 text-white text-xs px-2 py-1 rounded-full font-semibold">
              Out of Stock
            </span>
          )}
        </div>

        {/* Popular */}
        {product.isPopular && (
          <div className="absolute top-3 right-3">
            <div className="bg-[#E6BFCB] text-[#2D3F32] p-1 rounded-full">
              <Star className="h-4 w-4 fill-current" />
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="text-sm text-[#9FAF8A] uppercase tracking-wide mb-1">
          {product.category}
        </div>

        <h3 className="text-lg font-semibold text-[#2D3F32] dark:text-white mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-[#E6BFCB] fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-[#9FAF8A] ml-2">
            ({product.rating})
          </span>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-[#2D3F32] dark:text-[#E6BFCB]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          disabled={!product.availability}
          className={`w-full py-2 px-4 rounded-lg font-semibold text-sm flex items-center justify-center space-x-2 transition-all duration-200 ${
            product.availability
              ? 'bg-[#2D3F32] hover:bg-[#253429] text-white shadow-md hover:shadow-lg'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingBag className="h-4 w-4" />
          <span>{product.availability ? 'Add to Cart' : 'Out of Stock'}</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
