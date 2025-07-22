import { Product } from "../types";

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Ankara Dress",
    price: 15000,
    originalPrice: 20000,
    image:
      "https://i.pinimg.com/1200x/33/f8/da/33f8da6a8e745431fe3950652d20a5b6.jpg",
    images: [
      "https://i.pinimg.com/1200x/33/f8/da/33f8da6a8e745431fe3950652d20a5b6.jpg",
      "https://i.pinimg.com/736x/99/b9/bd/99b9bd3140c97c06d3d979b289d02999.jpg",
    ],
    category: "Ready-to-Wear",
    description:
      "Beautiful traditional Ankara dress with modern cuts and vibrant patterns. Perfect for special occasions, weddings, and cultural celebrations. Made from high-quality African wax print fabric.",
    sizes: ["S", "M", "L", "XL"],
    availability: true,
    rating: 4.8,
    reviews: [
      {
        id: "1",
        userName: "Adunni O.",
        rating: 5,
        comment:
          "Absolutely beautiful! The quality is amazing and fits perfectly.",
        date: "2024-01-15",
      },
      {
        id: "2",
        userName: "Kemi A.",
        rating: 4,
        comment: "Love the design and colors. Great for cultural events.",
        date: "2024-01-10",
      },
    ],
    isPopular: true,
    isNew: false,
  },
  {
    id: "2",
    name: "Classic Agbada Set",
    price: 45000,
    image:
      "https://i.pinimg.com/1200x/80/8e/d0/808ed045138628a1d6d437f444de5b25.jpg",
    images: [
      "https://i.pinimg.com/1200x/80/8e/d0/808ed045138628a1d6d437f444de5b25.jpg",
    ],
    category: "Ready-to-Wear",
    description:
      "Traditional Agbada with intricate embroidery and flowing silhouette. Perfect for weddings, formal events, and cultural ceremonies. Handcrafted by skilled Nigerian artisans.",
    sizes: ["M", "L", "XL", "XXL"],
    availability: true,
    rating: 4.9,
    reviews: [
      {
        id: "3",
        userName: "Tunde B.",
        rating: 5,
        comment: "Exceptional quality and craftsmanship. Highly recommended!",
        date: "2024-01-12",
      },
    ],
    isPopular: true,
  },
  {
    id: "3",
    name: "Ankara Shirt & Shorts Set",
    price: 12000,
    image:
      "https://i.pinimg.com/736x/28/e4/f9/28e4f99aee5a575c16662dda7d80998d.jpg",
    images: [
      "https://i.pinimg.com/736x/28/e4/f9/28e4f99aee5a575c16662dda7d80998d.jpg",
    ],
    category: "Ready-to-Wear",
    description:
      "Casual Ankara shirt and shorts combination. Comfortable cotton blend fabric perfect for everyday wear and casual outings.",
    sizes: ["S", "M", "L", "XL"],
    availability: true,
    rating: 4.6,
    reviews: [],
    isNew: true,
  },
  {
    id: "4",
    name: "Traditional Gele Headwrap",
    price: 8000,
    image:
      "https://i.pinimg.com/736x/6b/7e/e0/6b7ee05b8442c94e460c369b9d22b8f6.jpg",
    images: [
      "https://i.pinimg.com/736x/6b/7e/e0/6b7ee05b8442c94e460c369b9d22b8f6.jpg",
    ],
    category: "Ready-to-Wear",
    description:
      "Beautiful Gele headwrap made from premium African fabric. Essential accessory for traditional Nigerian outfits.",
    sizes: ["One Size"],
    availability: true,
    rating: 4.7,
    reviews: [],
  },
  {
    id: "5",
    name: "Dashiki Print Shirt",
    price: 9500,
    image:
      "https://i.pinimg.com/736x/30/ff/d8/30ffd8c59e2512df95581128c5816866.jpg",
    images: [
      "https://i.pinimg.com/736x/30/ff/d8/30ffd8c59e2512df95581128c5816866.jpg",
    ],
    category: "Ready-to-Wear",
    description:
      "Classic Dashiki shirt with traditional patterns. Made from comfortable cotton fabric with authentic African prints.",
    sizes: ["S", "M", "L", "XL"],
    availability: true,
    rating: 4.5,
    reviews: [],
  },
  {
    id: "6",
    name: "Ankara Maxi Skirt",
    price: 11000,
    image:
      "https://i.pinimg.com/736x/b7/4a/9c/b74a9c24f5e3f231621e3efc7e0f32f5.jpg",
    images: [
      "https://i.pinimg.com/736x/b7/4a/9c/b74a9c24f5e3f231621e3efc7e0f32f5.jpg",
    ],
    category: "Ready-to-Wear",
    description:
      "Flowing Ankara maxi skirt with vibrant patterns. Perfect for both casual and formal occasions.",
    sizes: ["S", "M", "L", "XL"],
    availability: false,
    rating: 4.8,
    reviews: [],
  },
  {
    id: "7",
    name: "Kente Cloth Stole",
    price: 18000,
    image:
      "https://i.pinimg.com/1200x/5e/15/5e/5e155e6d119448653000c0650e1c8446.jpg",
    images: [
      "https://i.pinimg.com/1200x/5e/15/5e/5e155e6d119448653000c0650e1c8446.jpg",
    ],
    category: "Ready-to-Wear",
    description:
      "Authentic Kente cloth stole with traditional geometric patterns. Handwoven and perfect for special occasions.",
    sizes: ["One Size"],
    availability: true,
    rating: 4.9,
    reviews: [],
    isPopular: true,
  },
  {
    id: "8",
    name: "Embroidered Kaftan",
    price: 22000,
    image:
      "https://i.pinimg.com/736x/63/52/ce/6352ce38a3e887a4cc0e4f91082df458.jpg",
    images: [
      "https://i.pinimg.com/736x/63/52/ce/6352ce38a3e887a4cc0e4f91082df458.jpg",
    ],
    category: "Ready-to-Wear",
    description:
      "Elegant embroidered kaftan with intricate beadwork. Flowing design perfect for formal events and cultural celebrations.",
    sizes: ["S", "M", "L", "XL"],
    availability: true,
    rating: 4.7,
    reviews: [],
    isNew: true,
  },
  {
    id: "9",
    name: "Buba and Sokoto Set",
    price: 28000,
    image:
      "https://i.pinimg.com/736x/d3/62/07/d36207eb3c1237a88b0b84855581937e.jpg",
    images: [
      "https://i.pinimg.com/736x/d3/62/07/d36207eb3c1237a88b0b84855581937e.jpg",
    ],
    category: "Ready-to-Wear",
    description:
      "Traditional Buba and Sokoto set with authentic Yoruba styling. Perfect for cultural events and ceremonies.",
    sizes: ["M", "L", "XL", "XXL"],
    availability: true,
    rating: 4.6,
    reviews: [],
  },
  {
    id: "10",
    name: "Adire Tie-Dye Dress",
    price: 13500,
    image:
      "https://i.pinimg.com/736x/8b/7d/70/8b7d701835f4a5b1bd3d883a1ac1b520.jpg",
    images: [
      "https://i.pinimg.com/736x/8b/7d/70/8b7d701835f4a5b1bd3d883a1ac1b520.jpg",
    ],
    category: "Ready-to-Wear",
    description:
      "Beautiful Adire tie-dye dress with traditional indigo patterns. Unique hand-dyed fabric with contemporary styling.",
    sizes: ["S", "M", "L", "XL"],
    availability: true,
    rating: 4.4,
    reviews: [],
  },
  {
    id: "11",
    name: "Ankara Blazer",
    price: 16000,
    image:
      "https://i.pinimg.com/736x/fd/2f/b1/fd2fb188b5fe7f1c6cf998e76e3bba76.jpg",
    images: [
      "https://i.pinimg.com/736x/fd/2f/b1/fd2fb188b5fe7f1c6cf998e76e3bba76.jpg",
    ],
    category: "Ready-to-Wear",
    description:
      "Modern Ankara blazer perfect for professional and casual wear. Combines traditional prints with contemporary tailoring.",
    sizes: ["S", "M", "L", "XL"],
    availability: true,
    rating: 4.5,
    reviews: [],
    isNew: true,
  },
  {
    id: "12",
    name: "Iro and Buba Set",
    price: 24000,
    image:
      "https://i.pinimg.com/736x/ef/69/87/ef6987843eb6afec90c4e2e3ad29285c.jpg",
    images: [
      "https://i.pinimg.com/736x/ef/69/87/ef6987843eb6afec90c4e2e3ad29285c.jpg",
    ],
    category: "Ready-to-Wear",
    description:
      "Traditional Iro and Buba set with matching Gele. Complete outfit for Nigerian cultural celebrations and weddings.",
    sizes: ["S", "M", "L", "XL"],
    availability: true,
    rating: 4.8,
    reviews: [],
    isPopular: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "Ready-to-Wear") return mockProducts;
  return mockProducts.filter((product) => product.category === category);
};

export const filterAndSortProducts = (
  products: Product[],
  category: string,
  priceRange: [number, number],
  sortBy: string,
  searchQuery?: string
): Product[] => {
  let filtered = products;

  if (category !== "Ready-to-Wear") {
    filtered = filtered.filter((product) => product.category === category);
  }

  if (searchQuery && searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
  }

  filtered = filtered.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  switch (sortBy) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    case "popularity":
    default:
      filtered.sort((a, b) => {
        if (a.isPopular && !b.isPopular) return -1;
        if (!a.isPopular && b.isPopular) return 1;
        return b.rating - a.rating;
      });
      break;
  }

  return filtered;
};
