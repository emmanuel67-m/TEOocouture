
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, Theme, FilterState } from '../types';

interface StoreState {
  // Cart state
  cartItems: CartItem[];
  addToCart: (product: Product, size: string, quantity?: number) => void;
  updateCartItem: (productId: string, size: string, quantity: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;

  // Theme state
  theme: Theme;
  toggleTheme: () => void;

  // Filter state
  filters: FilterState;
  setFilters: (filters: Partial<FilterState>) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // UI state
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Cart state
      cartItems: [],
      addToCart: (product, size, quantity = 1) => {
        const existingItem = get().cartItems.find(
          (item) => item.product.id === product.id && item.selectedSize === size
        );

        if (existingItem) {
          set({
            cartItems: get().cartItems.map((item) =>
              item.product.id === product.id && item.selectedSize === size
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            cartItems: [...get().cartItems, { product, selectedSize: size, quantity }],
          });
        }
      },
      updateCartItem: (productId, size, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId, size);
          return;
        }
        set({
          cartItems: get().cartItems.map((item) =>
            item.product.id === productId && item.selectedSize === size
              ? { ...item, quantity }
              : item
          ),
        });
      },
      removeFromCart: (productId, size) => {
        set({
          cartItems: get().cartItems.filter(
            (item) => !(item.product.id === productId && item.selectedSize === size)
          ),
        });
      },
      clearCart: () => set({ cartItems: [] }),
      getCartTotal: () => {
        return get().cartItems.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },
      getCartItemsCount: () => {
        return get().cartItems.reduce((count, item) => count + item.quantity, 0);
      },

      // Theme state
      theme: 'light',
      toggleTheme: () => {
        const newTheme = get().theme === 'light' ? 'dark' : 'light';
        set({ theme: newTheme });
        document.documentElement.classList.toggle('dark');
      },

      // Filter state
      filters: {
        category: 'Ready-to-Wear',
        priceRange: [0, 100000],
        sortBy: 'popularity',
      },
      setFilters: (newFilters) => {
        set({ filters: { ...get().filters, ...newFilters } });
      },
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),

      // UI state
      isMobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
      isCartOpen: false,
      setCartOpen: (open) => set({ isCartOpen: open }),
    }),
    {
      name: 'naija-clothing-store',
      partialize: (state) => ({
        cartItems: state.cartItems,
        theme: state.theme,
      }),
    }
  )
);
