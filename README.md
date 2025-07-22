# 🛍️ NaijaWear - Nigerian Traditional Clothing E-commerce

A modern, mobile-first e-commerce frontend for Nigerian traditional clothing, built with React, TypeScript, Tailwind CSS, and Zustand for state management.


🌍 **Live Demo**: [naija-fashion.netlify.app](https://naija-fashion.netlify.app/)

![NaijaWear Preview](https://i.pinimg.com/1200x/80/8e/d0/808ed045138628a1d6d437f444de5b25.jpg)

## ✨ Features

### 🏠 Homepage

- **Hero Section**: Beautiful showcase of Nigerian traditional outfits (Ankara, Agbada, etc.)
- **Featured Products**: Curated collection of popular and new items
- **Category Preview**: Browse by Men's, Women's, and Unisex collections
- **Why Choose Us**: Highlighting authenticity, quality, and service

### 🔍 Product Features

- **Product Grid**: Responsive layout with hover effects and animations
- **Product Cards**: Display image, name, price, category, ratings, and availability
- **Filtering & Sorting**: By category, price range, and popularity
- **Product Details**: Zoomable images, descriptions, size options, and reviews
- **Quick Actions**: Add to cart, wishlist, and quick view functionality

### 🛒 Shopping Cart

- **Add/Update/Remove**: Full cart management with size selection
- **Persistent Storage**: Cart state persists using Zustand + localStorage
- **Real-time Updates**: Live cart count and total calculation
- **Smooth Animations**: Framer Motion powered interactions

### 🎨 UI/UX Features

- **Mobile-First Design**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Nigerian Branding**: Green/yellow color scheme celebrating Nigerian flag
- **Smooth Animations**: Micro-interactions and page transitions
- **Loading States**: Elegant loading indicators and skeleton screens

### 🧭 Navigation

- **Responsive Navbar**: Logo, categories, search, cart icon with item count
- **Mobile Menu**: Collapsible navigation for mobile devices
- **Theme Toggle**: Easy switching between light and dark modes
- **Search Functionality**: Quick product search

### 📱 Mobile Optimization

- **Touch-Friendly**: Optimized for mobile interactions
- **Fast Loading**: Optimized images and efficient rendering
- **Gesture Support**: Swipe and touch gestures where applicable

## 🛠️ Technology Stack

### Frontend Framework

- **React 19** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons
- **shadcn/ui** - High-quality, accessible UI components

### State Management

- **Zustand** - Lightweight state management
- **localStorage** - Persistent cart and theme storage

### Development Tools

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation header
│   ├── Hero.tsx        # Homepage hero section
│   ├── ProductCard.tsx # Individual product display
│   ├── ProductGrid.tsx # Products grid layout
│   ├── Cart.tsx        # Shopping cart sidebar
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   └── NotFound.tsx    # 404 page
├── store/              # State management
│   └── useStore.ts     # Zustand store configuration
├── types/              # TypeScript interfaces
│   └── index.ts        # Type definitions
├── utils/              # Utility functions
│   └── mockData.ts     # Sample product data
└── styles/             # Global styles
    └── index.css       # Tailwind imports and custom styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd naija-fashion-fusion-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
# or
yarn build
```

## 🎯 Key Components

### State Management (Zustand)

- **Cart Management**: Add, update, remove items with size selection
- **Theme Control**: Light/dark mode toggle with persistence
- **UI State**: Mobile menu, cart sidebar, and filter states
- **Persistent Storage**: Cart and theme preferences saved to localStorage

### Product System

- **Mock Data**: Realistic Nigerian clothing products with images
- **Filtering**: Category, price range, and sorting options
- **Search Ready**: UI components ready for search implementation
- **Reviews & Ratings**: Product rating system with user reviews

### Responsive Design

- **Mobile-First**: Designed for mobile devices first
- **Breakpoint System**: Tailored for xs, sm, md, lg, xl screens
- **Touch Optimization**: Gesture-friendly interface
- **Performance**: Optimized images and lazy loading ready

## 🌍 Nigerian Cultural Elements

### Design Inspiration

- **Flag Colors**: Green and yellow accent colors throughout
- **Traditional Patterns**: Subtle pattern backgrounds and textures
- **Cultural Products**: Authentic Ankara, Agbada, Dashiki, and Gele items
- **Local Context**: Nigerian Naira currency formatting and local shipping

### Product Categories

- **Men's Traditional**: Agbada, Dashiki, traditional shirts
- **Women's Fashion**: Ankara dresses, Gele headwraps, traditional skirts
- **Unisex Items**: Casual Ankara pieces and accessories
- **Authentic Sourcing**: Emphasis on local artisan craftsmanship

## 🔮 Future Enhancements

### Backend Integration

- User authentication and profiles
- Real product database
- Payment processing (Paystack, Flutterwave)
- Order management system

### Advanced Features

- Product reviews and ratings system
- Wishlist functionality
- Advanced search and filters
- Product recommendations
- Size guide and virtual try-on

### Performance Optimizations

- Image optimization and CDN
- Progressive Web App (PWA) features
- Server-side rendering (SSR)
- API caching and optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Nigerian fashion designers and artisans for inspiration
- pinterest photographers for beautiful product images
- The React and TypeScript communities
- Tailwind CSS and Framer Motion teams

---

**Made with ❤️ for Nigerian fashion lovers**

🇳🇬 **Celebrating Nigerian Heritage Through Fashion** 🇳🇬
# TEOocouture
