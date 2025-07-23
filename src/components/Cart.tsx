import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useStore } from '../store/useStore';

const Cart = () => {
  const {
    isCartOpen,
    setCartOpen,
    cartItems,
    updateCartItem,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const total = getCartTotal();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#A9B7AC] text-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-6 w-6 text-[#DDBEBE]" />
                <h2 className="text-xl font-semibold">Shopping Cart</h2>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCartOpen(false)}
                className="p-2 hover:bg-[#4A5759]/30 rounded-full"
              >
                <X className="h-6 w-6 text-white" />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="h-16 w-16 text-[#DDBEBE] mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-white/70 mb-6">
                    Start shopping to add items to your cart
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCartOpen(false)}
                    className="bg-[#4A5759] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#3b4546]"
                  >
                    Continue Shopping
                  </motion.button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={`${item.product.id}-${item.selectedSize}`}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-[#DDBEBE] text-[#4A5759] rounded-lg p-4"
                    >
                      <div className="flex space-x-4">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm mb-1">
                            {item.product.name}
                          </h4>
                          <p className="text-sm mb-2">
                            Size: {item.selectedSize}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() =>
                                  updateCartItem(
                                    item.product.id,
                                    item.selectedSize,
                                    item.quantity - 1
                                  )
                                }
                                className="p-1 hover:bg-white/30 rounded"
                              >
                                <Minus className="h-4 w-4" />
                              </motion.button>
                              <span className="text-sm font-medium w-8 text-center">
                                {item.quantity}
                              </span>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() =>
                                  updateCartItem(
                                    item.product.id,
                                    item.selectedSize,
                                    item.quantity + 1
                                  )
                                }
                                className="p-1 hover:bg-white/30 rounded"
                              >
                                <Plus className="h-4 w-4" />
                              </motion.button>
                            </div>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() =>
                                removeFromCart(item.product.id, item.selectedSize)
                              }
                              className="p-1 text-red-500 hover:bg-red-200/20 rounded"
                            >
                              <Trash2 className="h-4 w-4" />
                            </motion.button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Clear Cart Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={clearCart}
                    className="w-full text-center text-red-100 hover:text-white text-sm font-medium py-2"
                  >
                    Clear Cart
                  </motion.button>
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-white/20 p-6 space-y-4">
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span className="text-[#DDBEBE]">
                    {formatPrice(total)}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#4A5759] text-white py-3 rounded-lg font-semibold hover:bg-[#3b4546]"
                >
                  Proceed to Checkout
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCartOpen(false)}
                  className="w-full border border-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/10"
                >
                  Continue Shopping
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
