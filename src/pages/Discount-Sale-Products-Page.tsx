// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [sortOption, setSortOption] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [showQuickView, setShowQuickView] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 8,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                clearInterval(timer);
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Sample product data
  interface Product {
    id: number;
    name: string;
    originalPrice: number;
    salePrice: number;
    discount: number;
    image: string;
    category: string;
    sizes: string[];
    colors: string[];
  }

  interface CartItem {
    product: Product;
    quantity: number;
    selectedSize: string;
    selectedColor: string;
  }

  const products: Product[] = [
    {
      id: 1,
      name: "Elegant Silk Blouse",
      originalPrice: 120,
      salePrice: 72,
      discount: 40,
      image: "https://readdy.ai/api/search-image?query=elegant%20silk%20blouse%20in%20white%20color%20on%20a%20minimalist%20light%20gray%20background%2C%20fashion%20photography%20with%20soft%20lighting%2C%20high%20quality%20fabric%20details%20visible%2C%20professional%20product%20photography%20for%20luxury%20fashion%20brand&width=400&height=500&seq=1&orientation=portrait",
      category: "Clothing",
      sizes: ["XS", "S", "M", "L"],
      colors: ["White", "Black", "Beige"]
    },
    {
      id: 2,
      name: "Designer Leather Handbag",
      originalPrice: 350,
      salePrice: 245,
      discount: 30,
      image: "https://readdy.ai/api/search-image?query=luxury%20designer%20leather%20handbag%20in%20rich%20brown%20color%20on%20minimalist%20light%20background%2C%20professional%20product%20photography%20with%20soft%20shadows%2C%20detailed%20texture%20visible%2C%20high-end%20fashion%20accessory%20shot%20for%20premium%20brand%20catalog&width=400&height=500&seq=2&orientation=portrait",
      category: "Accessories",
      sizes: ["One Size"],
      colors: ["Brown", "Black", "Tan"]
    },
    {
      id: 3,
      name: "Premium Wool Coat",
      originalPrice: 280,
      salePrice: 168,
      discount: 40,
      image: "https://readdy.ai/api/search-image?query=premium%20camel%20wool%20coat%20on%20mannequin%20against%20minimalist%20light%20background%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20detailed%20fabric%20texture%20visible%2C%20luxury%20outerwear%20product%20shot%20for%20high-end%20fashion%20brand&width=400&height=500&seq=3&orientation=portrait",
      category: "Clothing",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Camel", "Black", "Gray"]
    },
    {
      id: 4,
      name: "Leather Chelsea Boots",
      originalPrice: 220,
      salePrice: 154,
      discount: 30,
      image: "https://readdy.ai/api/search-image?query=black%20leather%20chelsea%20boots%20on%20minimalist%20light%20background%2C%20professional%20product%20photography%20with%20soft%20shadows%2C%20detailed%20leather%20texture%20and%20stitching%20visible%2C%20luxury%20footwear%20shot%20for%20premium%20fashion%20brand%20catalog&width=400&height=500&seq=4&orientation=portrait",
      category: "Shoes",
      sizes: ["36", "37", "38", "39", "40", "41"],
      colors: ["Black", "Brown", "Burgundy"]
    },
    {
      id: 5,
      name: "Cashmere Sweater",
      originalPrice: 180,
      salePrice: 99,
      discount: 45,
      image: "https://readdy.ai/api/search-image?query=soft%20blue%20cashmere%20sweater%20folded%20neatly%20on%20minimalist%20light%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20detailed%20fabric%20texture%20visible%2C%20luxury%20knitwear%20shot%20for%20high-end%20fashion%20brand%20catalog&width=400&height=500&seq=5&orientation=portrait",
      category: "Clothing",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Blue", "Gray", "Cream"]
    },
    {
      id: 6,
      name: "Designer Sunglasses",
      originalPrice: 195,
      salePrice: 117,
      discount: 40,
      image: "https://readdy.ai/api/search-image?query=luxury%20designer%20sunglasses%20with%20gold%20frames%20on%20minimalist%20light%20background%2C%20professional%20product%20photography%20with%20soft%20shadows%2C%20detailed%20frame%20texture%20visible%2C%20high-end%20accessory%20shot%20for%20premium%20fashion%20brand%20catalog&width=400&height=500&seq=6&orientation=portrait",
      category: "Accessories",
      sizes: ["One Size"],
      colors: ["Gold/Brown", "Silver/Black", "Rose Gold/Pink"]
    },
    {
      id: 7,
      name: "Slim Fit Denim Jeans",
      originalPrice: 150,
      salePrice: 90,
      discount: 40,
      image: "https://readdy.ai/api/search-image?query=dark%20blue%20slim%20fit%20denim%20jeans%20folded%20neatly%20on%20minimalist%20light%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20detailed%20fabric%20texture%20and%20stitching%20visible%2C%20premium%20denim%20shot%20for%20luxury%20fashion%20brand&width=400&height=500&seq=7&orientation=portrait",
      category: "Clothing",
      sizes: ["28", "30", "32", "34", "36"],
      colors: ["Dark Blue", "Light Blue", "Black"]
    },
    {
      id: 8,
      name: "Silk Evening Dress",
      originalPrice: 320,
      salePrice: 192,
      discount: 40,
      image: "https://readdy.ai/api/search-image?query=elegant%20red%20silk%20evening%20dress%20on%20mannequin%20against%20minimalist%20light%20background%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20detailed%20fabric%20draping%20visible%2C%20luxury%20gown%20product%20shot%20for%20high-end%20fashion%20brand&width=400&height=500&seq=8&orientation=portrait",
      category: "Clothing",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Red", "Black", "Navy"]
    }
  ];

  const categories = ["Clothing", "Shoes", "Accessories"];
  const sizes = ["XS", "S", "M", "L", "XL", "One Size", "36", "37", "38", "39", "40", "41", "28", "30", "32", "34", "36"];
  const colors = ["White", "Black", "Beige", "Brown", "Tan", "Camel", "Gray", "Blue", "Cream", "Gold/Brown", "Silver/Black", "Rose Gold/Pink", "Dark Blue", "Light Blue", "Red", "Navy", "Burgundy"];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size) 
        : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color) 
        : [...prev, color]
    );
  };

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setShowQuickView(true);
  };

  const closeQuickView = () => {
    setShowQuickView(false);
    setQuickViewProduct(null);
  };
// Add an item to the cart
  const addToCart = (product: Product, quantity: number = 1, size: string = product.sizes[0], color: string = product.colors[0]) => {
    const existingItemIndex = cartItems.findIndex(
      item => item.product.id === product.id && item.selectedSize === size && item.selectedColor === color
    );

    if (existingItemIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product, quantity, selectedSize: size, selectedColor: color }]);
    }

    setShowCart(true);
    if (showQuickView) closeQuickView();
  };
 // Remove an item from the cart
  const removeFromCart = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };
 // Update quantity of an item in the cart
  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = newQuantity;
    setCartItems(newCartItems);
  };
 // Calculate total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.product.salePrice * item.quantity), 0);
  };
 // Filter and sort products based on selected criteria
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesSize = selectedSizes.length === 0 || product.sizes.some(size => selectedSizes.includes(size));
    const matchesColor = selectedColors.length === 0 || product.colors.some(color => selectedColors.includes(color));
    const matchesPrice = product.salePrice >= priceRange[0] && product.salePrice <= priceRange[1];
    
    return matchesCategory && matchesSize && matchesColor && matchesPrice;
  });
  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low-high':
        return a.salePrice - b.salePrice;
      case 'price-high-low':
        return b.salePrice - a.salePrice;
      case 'discount':
        return b.discount - a.discount;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="https://readdy.ai/home/df6ccbb7-9c3b-4e11-9011-dd80609b3302/238366c2-99b8-4f69-865b-3e3f085d725f" data-readdy="true" className="text-3xl font-bold text-gray-800 mr-10">LUXE</a>
            <nav className="hidden md:flex space-x-8">
              <a href="https://readdy.ai/home/df6ccbb7-9c3b-4e11-9011-dd80609b3302/238366c2-99b8-4f69-865b-3e3f085d725f" data-readdy="true" className="text-gray-600 hover:text-gray-900 font-medium">Women</a>
              <a href="https://readdy.ai/home/df6ccbb7-9c3b-4e11-9011-dd80609b3302/238366c2-99b8-4f69-865b-3e3f085d725f" data-readdy="true" className="text-gray-600 hover:text-gray-900 font-medium">Men</a>
              <a href="https://readdy.ai/home/df6ccbb7-9c3b-4e11-9011-dd80609b3302/238366c2-99b8-4f69-865b-3e3f085d725f" data-readdy="true" className="text-gray-600 hover:text-gray-900 font-medium">Kids</a>
              <a href="https://readdy.ai/home/df6ccbb7-9c3b-4e11-9011-dd80609b3302/238366c2-99b8-4f69-865b-3e3f085d725f" data-readdy="true" className="text-gray-600 hover:text-gray-900 font-medium">Accessories</a>
              <a href="https://readdy.ai/home/df6ccbb7-9c3b-4e11-9011-dd80609b3302/238366c2-99b8-4f69-865b-3e3f085d725f" data-readdy="true" className="text-red-600 hover:text-red-700 font-medium">Sale</a>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative hidden md:block">
              <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 w-64" />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
            </div>
            <button className="text-gray-700 hover:text-gray-900 relative cursor-pointer" onClick={() => setShowCart(true)}>
              <i className="fas fa-shopping-bag text-xl"></i>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
            <button className="text-gray-700 hover:text-gray-900 cursor-pointer">
              <i className="fas fa-user text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Sale Banner */}
      <div className="relative bg-gradient-to-r from-red-600 to-red-500 overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center justify-center text-center text-white relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">SPRING SALE</h1>
          <p className="text-xl md:text-2xl mb-6">Up to 50% OFF on selected items</p>
          
          <div className="flex space-x-4 md:space-x-8 mt-4">
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 rounded-lg w-14 md:w-20 h-14 md:h-20 flex items-center justify-center mb-2">
                <span className="text-xl md:text-3xl font-bold">{timeLeft.days}</span>
              </div>
              <span className="text-sm">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 rounded-lg w-14 md:w-20 h-14 md:h-20 flex items-center justify-center mb-2">
                <span className="text-xl md:text-3xl font-bold">{timeLeft.hours}</span>
              </div>
              <span className="text-sm">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 rounded-lg w-14 md:w-20 h-14 md:h-20 flex items-center justify-center mb-2">
                <span className="text-xl md:text-3xl font-bold">{timeLeft.minutes}</span>
              </div>
              <span className="text-sm">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-20 rounded-lg w-14 md:w-20 h-14 md:h-20 flex items-center justify-center mb-2">
                <span className="text-xl md:text-3xl font-bold">{timeLeft.seconds}</span>
              </div>
              <span className="text-sm">Seconds</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://readdy.ai/api/search-image?query=luxury%20fashion%20sale%20background%20with%20elegant%20clothing%20items%20arranged%20in%20a%20stylish%20composition%2C%20soft%20lighting%20with%20red%20tones%2C%20high-end%20retail%20environment%2C%20professional%20fashion%20photography%20for%20premium%20brand%20sale%20promotion&width=1440&height=400&seq=9&orientation=landscape" 
            alt="Sale Background" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <button 
                onClick={() => setShowFilters(!showFilters)} 
                className="flex items-center text-gray-700 mr-4 cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i className="fas fa-sliders-h mr-2"></i>
                <span className="font-medium">Filters</span>
                <i className={`fas fa-chevron-${showFilters ? 'up' : 'down'} ml-2 text-xs`}></i>
              </button>
              
              <div className="text-sm text-gray-500">
                {filteredProducts.length} products
              </div>
            </div>
            
            <div className="flex items-center">
              <label htmlFor="sort" className="text-sm text-gray-600 mr-2">Sort by:</label>
              <select 
                id="sort" 
                value={sortOption} 
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-gray-300 rounded-lg text-sm px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>
          </div>
          
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 pb-4">
              <div>
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`category-${category}`} 
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">{category}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`px-3 py-1 text-sm border rounded-lg !rounded-button whitespace-nowrap ${
                        selectedSizes.includes(size) 
                          ? 'bg-gray-800 text-white border-gray-800' 
                          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={`px-3 py-1 text-sm border rounded-lg flex items-center !rounded-button whitespace-nowrap ${
                        selectedColors.includes(color) 
                          ? 'bg-gray-800 text-white border-gray-800' 
                          : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="px-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="400" 
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">${priceRange[0]}</span>
                    <span className="text-sm text-gray-600">${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-12">
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="relative overflow-hidden rounded-lg bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    -{product.discount}%
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleQuickView(product)}
                        className="bg-white text-gray-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        <i className="fas fa-eye mr-1"></i> Quick View
                      </button>
                      <button 
                        onClick={() => addToCart(product)}
                        className="bg-black text-white px-3 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        <i className="fas fa-shopping-bag mr-1"></i> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-800 font-medium">{product.name}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-red-600 font-medium">${product.salePrice}</span>
                    <span className="ml-2 text-gray-500 line-through text-sm">${product.originalPrice}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {product.sizes.slice(0, 4).map((size) => (
                      <span key={size} className="text-xs text-gray-500 border border-gray-300 rounded px-1.5 py-0.5">
                        {size}
                      </span>
                    ))}
                    {product.sizes.length > 4 && (
                      <span className="text-xs text-gray-500 border border-gray-300 rounded px-1.5 py-0.5">
                        +{product.sizes.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-medium text-gray-700">No products found</h3>
            <p className="text-gray-500 mt-2">Try changing your filter options</p>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {showQuickView && quickViewProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-end p-4">
              <button 
                onClick={closeQuickView}
                className="text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div className="overflow-hidden rounded-lg bg-gray-100">
                <img 
                  src={quickViewProduct.image} 
                  alt={quickViewProduct.name} 
                  className="w-full h-auto object-cover object-top"
                />
              </div>
              <div>
                <h2 className="text-2xl font-medium text-gray-800">{quickViewProduct.name}</h2>
                <div className="flex items-center mt-2">
                  <span className="text-red-600 text-xl font-medium">${quickViewProduct.salePrice}</span>
                  <span className="ml-3 text-gray-500 line-through">${quickViewProduct.originalPrice}</span>
                  <span className="ml-3 bg-red-100 text-red-700 text-sm font-medium px-2 py-0.5 rounded">
                    Save {quickViewProduct.discount}%
                  </span>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-medium mb-2">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.sizes.map((size) => (
                      <button
                        key={size}
                        className="px-3 py-1 text-sm border rounded-lg bg-white text-gray-700 border-gray-300 hover:border-gray-800 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium mb-2">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.colors.map((color) => (
                      <button
                        key={color}
                        className="px-3 py-1 text-sm border rounded-lg bg-white text-gray-700 border-gray-300 hover:border-gray-800 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="flex items-center">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button className="px-3 py-2 text-gray-600 hover:text-gray-800 cursor-pointer !rounded-button whitespace-nowrap">
                        <i className="fas fa-minus"></i>
                      </button>
                      <span className="px-3 py-2 text-gray-800">1</span>
                      <button className="px-3 py-2 text-gray-600 hover:text-gray-800 cursor-pointer !rounded-button whitespace-nowrap">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <button 
                      onClick={() => addToCart(quickViewProduct)}
                      className="ml-4 bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                
                <div className="mt-8 text-gray-600">
                  <p>Category: {quickViewProduct.category}</p>
                  <div className="mt-4 flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-gray-800 cursor-pointer !rounded-button whitespace-nowrap">
                      <i className="far fa-heart mr-1"></i> Add to Wishlist
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 cursor-pointer !rounded-button whitespace-nowrap">
                      <i className="fas fa-share-alt mr-1"></i> Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowCart(false)}></div>
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="relative w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
                <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                    <button 
                      onClick={() => setShowCart(false)}
                      className="text-gray-400 hover:text-gray-500 cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>

                  <div className="mt-8">
                    {cartItems.length === 0 ? (
                      <div className="text-center py-12">
                        <i className="fas fa-shopping-bag text-4xl text-gray-300 mb-4"></i>
                        <h3 className="text-lg font-medium text-gray-700">Your cart is empty</h3>
                        <p className="text-gray-500 mt-2">Looks like you haven't added any items yet</p>
                        <button 
                          onClick={() => setShowCart(false)}
                          className="mt-4 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer"
                        >
                          Continue Shopping
                        </button>
                      </div>
                    ) : (
                      <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                          {cartItems.map((item, index) => (
                            <li key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${index}`} className="py-6 flex">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img 
                                  src={item.product.image} 
                                  alt={item.product.name} 
                                  className="h-full w-full object-cover object-top" 
                                />
                              </div>

                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>{item.product.name}</h3>
                                    <p className="ml-4">${item.product.salePrice}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.selectedSize} / {item.selectedColor}
                                  </p>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <div className="flex items-center border border-gray-300 rounded">
                                    <button 
                                      onClick={() => updateQuantity(index, item.quantity - 1)}
                                      className="px-2 py-1 text-gray-600 hover:text-gray-800 cursor-pointer !rounded-button whitespace-nowrap"
                                    >
                                      <i className="fas fa-minus text-xs"></i>
                                    </button>
                                    <span className="px-2 py-1 text-gray-800">{item.quantity}</span>
                                    <button 
                                      onClick={() => updateQuantity(index, item.quantity + 1)}
                                      className="px-2 py-1 text-gray-600 hover:text-gray-800 cursor-pointer !rounded-button whitespace-nowrap"
                                    >
                                      <i className="fas fa-plus text-xs"></i>
                                    </button>
                                  </div>

                                  <button 
                                    onClick={() => removeFromCart(index)}
                                    className="font-medium text-red-600 hover:text-red-500 cursor-pointer !rounded-button whitespace-nowrap"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {cartItems.length > 0 && (
                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${calculateTotal().toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 !rounded-button whitespace-nowrap cursor-pointer"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          className="text-black font-medium hover:text-gray-800 cursor-pointer !rounded-button whitespace-nowrap"
                          onClick={() => setShowCart(false)}
                        >
                          Continue Shopping<span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-100 pt-12 pb-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">LUXE</h3>
              <p className="text-gray-600 mb-4">
                Premium fashion for the discerning customer. Quality materials, exceptional craftsmanship.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-gray-700 cursor-pointer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 cursor-pointer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 cursor-pointer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 cursor-pointer">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">Women</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">Men</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">Kids</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">Accessories</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">Sale</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">New Arrivals</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">Shipping & Returns</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">Size Guide</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">Track Order</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Subscribe</h3>
              <p className="text-gray-600 mb-4">Sign up for exclusive offers, original stories, events and more.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm"
                />
                <button className="bg-black text-white px-4 py-2 rounded-r-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">© 2025 LUXE. All rights reserved.</p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <i className="fab fa-cc-visa text-gray-600 text-2xl"></i>
                <i className="fab fa-cc-mastercard text-gray-600 text-2xl"></i>
                <i className="fab fa-cc-amex text-gray-600 text-2xl"></i>
                <i className="fab fa-cc-paypal text-gray-600 text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

