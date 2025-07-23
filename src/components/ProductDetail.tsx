// Improved ProductDetail with refined dark mode styling

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingCart, Heart, ZoomIn, Minus, Plus } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../store/useStore';

interface ProductDetailProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useStore();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    onClose();
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-[#F3EDE7] dark:bg-[#1A3E3E] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#1A3E3E] dark:text-white">Product Details</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[#D7E0D1] dark:hover:bg-[#2a4d4d] rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-[#1A3E3E] dark:text-white" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Images */}
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={product.images[selectedImageIndex]}
                    alt={product.name}
                    className="w-full h-96 object-cover rounded-lg cursor-zoom-in"
                    onClick={() => setIsZoomed(true)}
                  />
                  <button
                    onClick={() => setIsZoomed(true)}
                    className="absolute top-4 right-4 bg-white dark:bg-[#D7E0D1] p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
                  >
                    <ZoomIn className="h-5 w-5 text-[#1A3E3E]" />
                  </button>
                </div>
                {product.images.length > 1 && (
                  <div className="flex space-x-2">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                          selectedImageIndex === idx
                            ? 'border-[#1A3E3E] dark:border-[#D7E0D1]'
                            : 'border-[#D7E0D1] dark:border-[#2a4d4d]'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-[#1A3E3E] dark:text-white">{product.name}</h1>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? 'text-[#E6BFCB] fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-[#1A3E3E] dark:text-[#D7E0D1]">
                      ({product.rating}) • {product.reviews.length} reviews
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-[#1A3E3E] dark:text-[#E6BFCB]">
                    ₦{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      ₦{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <p className="text-[#1A3E3E] dark:text-[#D7E0D1] leading-relaxed">{product.description}</p>

                {/* Size Selector */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1A3E3E] dark:text-white mb-2">Size</h3>
                  <div className="flex space-x-2">
                    {product.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors ${
                          selectedSize === size
                            ? 'bg-[#D7E0D1] border-[#1A3E3E] text-[#1A3E3E]'
                            : 'border-gray-300 hover:border-[#1A3E3E] dark:hover:border-[#D7E0D1] text-[#1A3E3E] dark:text-[#D7E0D1]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1A3E3E] dark:text-white mb-2">Quantity</h3>
                  <div className="flex items-center border border-gray-300 dark:border-[#2a4d4d] rounded-lg overflow-hidden">
                    <button
                      onClick={decrementQuantity}
                      className="p-2 hover:bg-[#D7E0D1] dark:hover:bg-[#2a4d4d] transition-colors"
                    >
                      <Minus className="h-4 w-4 text-[#1A3E3E] dark:text-white" />
                    </button>
                    <span className="px-4 py-2 font-medium text-[#1A3E3E] dark:text-white">{quantity}</span>
                    <button
                      onClick={incrementQuantity}
                      className="p-2 hover:bg-[#D7E0D1] dark:hover:bg-[#2a4d4d] transition-colors"
                    >
                      <Plus className="h-4 w-4 text-[#1A3E3E] dark:text-white" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.availability}
                    className="flex-1 bg-[#1A3E3E] hover:bg-[#2B3D31] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 disabled:bg-gray-400"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>{product.availability ? 'Add to Cart' : 'Out of Stock'}</span>
                  </button>
                  <button className="p-3 border border-gray-300 dark:border-[#2a4d4d] rounded-lg hover:bg-[#D7E0D1] dark:hover:bg-[#2a4d4d] transition-colors">
                    <Heart className="h-5 w-5 text-[#1A3E3E] dark:text-white" />
                  </button>
                </div>

                {/* Availability */}
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${product.availability ? 'bg-[#1A3E3E]' : 'bg-red-500'}`} />
                  <span className={`text-sm ${product.availability ? 'text-[#1A3E3E] dark:text-[#D7E0D1]' : 'text-red-600'}`}>
                    {product.availability ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>
            </div>

            {/* Reviews */}
            {product.reviews.length > 0 && (
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-[#2a4d4d]">
                <h3 className="text-xl font-bold text-[#1A3E3E] dark:text-white mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                  {product.reviews.map(review => (
                    <div key={review.id} className="bg-[#D7E0D1] dark:bg-[#2a4d4d] p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-[#1A3E3E] dark:text-white">{review.userName}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? 'text-[#E6BFCB] fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                      </div>
                      <p className="text-[#1A3E3E] dark:text-[#F3EDE7]">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Zoom Modal */}
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-60 flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductDetail;
