import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const App: React.FC = () => {
// Close cart dropdown when clicking outside
useEffect(() => {
const handleClickOutside = (event: MouseEvent) => {
const cartDropdown = document.getElementById('cartDropdown');
const cartDropdownContainer = document.getElementById('cartDropdownContainer');
if (cartDropdown && cartDropdownContainer && !cartDropdownContainer.contains(event.target as Node)) {
cartDropdown.classList.add('hidden');
}
};
document.addEventListener('mousedown', handleClickOutside);
return () => {
document.removeEventListener('mousedown', handleClickOutside);
};
}, []);
// Product data
const [products] = useState([
{
id: 1,
name: "Floral Summer Dress",
price: 89.99,
rating: 4.5,
image: "https://readdy.ai/api/search-image?query=elegant%20floral%20summer%20dress%20on%20mannequin%2C%20white%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20soft%20lighting%2C%20minimalist%20background%2C%20detailed%20fabric%20texture&width=300&height=400&seq=1&orientation=portrait",
colors: ["Black", "White", "Red"],
sizes: ["XS", "S", "M", "L", "XL"],
category: "Dresses",
isNew: true,
isBestseller: true
},
{
id: 2,
name: "Casual Linen Blouse",
price: 49.99,
rating: 4.2,
image: "https://readdy.ai/api/search-image?query=casual%20linen%20blouse%20on%20mannequin%2C%20white%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20soft%20lighting%2C%20minimalist%20background%2C%20detailed%20fabric%20texture&width=300&height=400&seq=2&orientation=portrait",
colors: ["White", "Blue", "Beige"],
sizes: ["S", "M", "L"],
category: "Tops",
isNew: true,
isBestseller: false
},
{
id: 3,
name: "High-Waisted Jeans",
price: 79.99,
rating: 4.7,
image: "https://readdy.ai/api/search-image?query=high%20waisted%20jeans%20on%20mannequin%2C%20white%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20soft%20lighting%2C%20minimalist%20background%2C%20detailed%20fabric%20texture&width=300&height=400&seq=3&orientation=portrait",
colors: ["Blue", "Black", "Light Blue"],
sizes: ["XS", "S", "M", "L", "XL"],
category: "Bottoms",
isNew: false,
isBestseller: true
},
{
id: 4,
name: "Wool Blend Coat",
price: 159.99,
rating: 4.8,
image: "https://readdy.ai/api/search-image?query=elegant%20wool%20blend%20coat%20on%20mannequin%2C%20white%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20soft%20lighting%2C%20minimalist%20background%2C%20detailed%20fabric%20texture&width=300&height=400&seq=4&orientation=portrait",
colors: ["Camel", "Black", "Grey"],
sizes: ["S", "M", "L", "XL"],
category: "Outerwear",
isNew: false,
isBestseller: true
},
{
id: 5,
name: "Silk Evening Gown",
price: 199.99,
rating: 4.9,
image: "https://readdy.ai/api/search-image?query=elegant%20silk%20evening%20gown%20on%20mannequin%2C%20white%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20soft%20lighting%2C%20minimalist%20background%2C%20detailed%20fabric%20texture&width=300&height=400&seq=5&orientation=portrait",
colors: ["Black", "Navy", "Burgundy"],
sizes: ["XS", "S", "M", "L"],
category: "Dresses",
isNew: true,
isBestseller: false
},
{
id: 6,
name: "Cotton T-Shirt",
price: 29.99,
rating: 4.3,
image: "https://readdy.ai/api/search-image?query=basic%20cotton%20t-shirt%20on%20mannequin%2C%20white%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20soft%20lighting%2C%20minimalist%20background%2C%20detailed%20fabric%20texture&width=300&height=400&seq=6&orientation=portrait",
colors: ["White", "Black", "Grey", "Pink"],
sizes: ["XS", "S", "M", "L", "XL"],
category: "Tops",
isNew: false,
isBestseller: true
},
{
id: 7,
name: "Pleated Midi Skirt",
price: 69.99,
rating: 4.4,
image: "https://readdy.ai/api/search-image?query=pleated%20midi%20skirt%20on%20mannequin%2C%20white%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20soft%20lighting%2C%20minimalist%20background%2C%20detailed%20fabric%20texture&width=300&height=400&seq=7&orientation=portrait",
colors: ["Black", "Beige", "Navy"],
sizes: ["XS", "S", "M", "L"],
category: "Bottoms",
isNew: true,
isBestseller: false
},
{
id: 8,
name: "Leather Jacket",
price: 199.99,
rating: 4.6,
image: "https://readdy.ai/api/search-image?query=stylish%20leather%20jacket%20on%20mannequin%2C%20white%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20soft%20lighting%2C%20minimalist%20background%2C%20detailed%20texture&width=300&height=400&seq=8&orientation=portrait",
colors: ["Black", "Brown"],
sizes: ["S", "M", "L", "XL"],
category: "Outerwear",
isNew: false,
isBestseller: true
}
]);
// Filter and sort states
const [filteredProducts, setFilteredProducts] = useState(products);
const [categoryFilter, setCategoryFilter] = useState("All");
const [sizeFilter, setSizeFilter] = useState("All");
const [colorFilter, setColorFilter] = useState("All");
const [priceRange, setPriceRange] = useState([0, 1000]);
const [sortOption, setSortOption] = useState("Newest");
const [isLoading, setIsLoading] = useState(false);
const [isCategoryOpen, setIsCategoryOpen] = useState(false);
const [isColorOpen, setIsColorOpen] = useState(false);
const [isSizeOpen, setIsSizeOpen] = useState(false);
// Close dropdowns when clicking outside
useEffect(() => {
const handleClickOutside = (event: MouseEvent) => {
const categoryDropdown = document.getElementById('categoryDropdown');
const categoryButton = document.getElementById('categoryButton');
const colorDropdown = document.getElementById('colorDropdown');
const colorButton = document.getElementById('colorButton');
const sizeDropdown = document.getElementById('sizeDropdown');
const sizeButton = document.getElementById('sizeButton');
const priceDropdown = document.getElementById('priceDropdown');
const priceButton = document.getElementById('priceButton');
if (categoryDropdown && categoryButton &&
!categoryButton.contains(event.target as Node) &&
!categoryDropdown.contains(event.target as Node)) {
setIsCategoryOpen(false);
}
if (colorDropdown && colorButton &&
!colorButton.contains(event.target as Node) &&
!colorDropdown.contains(event.target as Node)) {
setIsColorOpen(false);
}
if (sizeDropdown && sizeButton &&
!sizeButton.contains(event.target as Node) &&
!sizeDropdown.contains(event.target as Node)) {
setIsSizeOpen(false);
}
if (priceDropdown && priceButton &&
!priceButton.contains(event.target as Node) &&
!priceDropdown.contains(event.target as Node)) {
priceDropdown.classList.add('hidden');
}
};
document.addEventListener('mousedown', handleClickOutside);
return () => {
document.removeEventListener('mousedown', handleClickOutside);
};
}, []);
const [showFiltersMobile, setShowFiltersMobile] = useState(false);
const [selectedProduct, setSelectedProduct] = useState<any>(null);
const [quickViewOpen, setQuickViewOpen] = useState(false);
const [quantity, setQuantity] = useState(1);
const [selectedSize, setSelectedSize] = useState("");
const [selectedColor, setSelectedColor] = useState("");
// Available filters
const categories = ["All", "Dresses", "Tops", "Bottoms", "Outerwear"];
const sizes = ["All", "XS", "S", "M", "L", "XL"];
const colors = ["All", "Black", "White", "Blue", "Red", "Beige", "Grey", "Pink", "Camel", "Navy", "Brown", "Burgundy", "Light Blue"];
const sortOptions = ["Newest", "Price High-Low", "Price Low-High", "Bestselling"];
// Apply filters and sorting
useEffect(() => {
setIsLoading(true);
// Simulate loading delay
setTimeout(() => {
let result = [...products];
// Apply category filter
if (categoryFilter !== "All") {
result = result.filter(product => product.category === categoryFilter);
}
// Apply size filter
if (sizeFilter !== "All") {
result = result.filter(product => product.sizes.includes(sizeFilter));
}
// Apply color filter
if (colorFilter !== "All") {
result = result.filter(product => product.colors.includes(colorFilter));
}
// Apply price range filter
result = result.filter(product =>
product.price >= priceRange[0] && product.price <= priceRange[1]
);
// Apply sorting
switch(sortOption) {
case "Price High-Low":
result.sort((a, b) => b.price - a.price);
break;
case "Price Low-High":
result.sort((a, b) => a.price - b.price);
break;
case "Bestselling":
result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
break;
case "Newest":
default:
result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
break;
}
setFilteredProducts(result);
setIsLoading(false);
}, 500);
}, [categoryFilter, sizeFilter, colorFilter, priceRange, sortOption, products]);
// Reset all filters
const clearAllFilters = () => {
setCategoryFilter("All");
setSizeFilter("All");
setColorFilter("All");
setPriceRange([0, 1000]);
setSortOption("Newest");
};
// Open quick view modal
const openQuickView = (product: any) => {
setSelectedProduct(product);
setSelectedSize(product.sizes[0]);
setSelectedColor(product.colors[0]);
setQuantity(1);
setQuickViewOpen(true);
};
// Close quick view modal
const closeQuickView = () => {
setQuickViewOpen(false);
setSelectedProduct(null);
};
// Handle quantity change
const handleQuantityChange = (change: number) => {
const newQuantity = quantity + change;
if (newQuantity >= 1 && newQuantity <= 10) {
setQuantity(newQuantity);
}
};
return (
<div className="min-h-screen bg-white">
  {/* Header */}
  <header className="bg-white shadow-sm">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="https://readdy.ai/home/df6ccbb7-9c3b-4e11-9011-dd80609b3302/238366c2-99b8-4f69-865b-3e3f085d725f"
          data-readdy="true"
          className="text-2xl font-bold text-gray-800 cursor-pointer"
        >
          FASHION<span className="text-pink-600">NOVA</span>
        </a>
        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-pink-600 transition whitespace-nowrap !rounded-button">Home</Link>
          <span className="text-pink-600 font-medium whitespace-nowrap !rounded-button cursor-default">Women</span>
          <Link to="/men" className="text-gray-600 hover:text-pink-600 transition whitespace-nowrap !rounded-button">Men</Link>
          <Link to="/children" className="text-gray-600 hover:text-pink-600 transition whitespace-nowrap !rounded-button">Kids</Link>
          <Link to="/accessories" className="text-gray-600 hover:text-pink-600 transition whitespace-nowrap !rounded-button">Accessories</Link>
        </nav>
        {/* Search, Cart, User */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
          </div>
          <div className="relative cursor-pointer" id="cartDropdownContainer">
            <div onClick={() => document.getElementById('cartDropdown')?.classList.toggle('hidden')} className="flex items-center">
              <i className="fas fa-shopping-bag text-gray-700 text-xl"></i>
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </div>
            <div id="cartDropdown" className="hidden absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
              <div className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <img src="https://readdy.ai/api/search-image?query=elegant%20floral%20summer%20dress%20on%20mannequin%2C%20white%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20soft%20lighting%2C%20minimalist%20background%2C%20detailed%20fabric%20texture&width=80&height=80&seq=1&orientation=squarish" alt="Floral Summer Dress" className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">Floral Summer Dress</h4>
                      <p className="text-sm text-gray-500">Size: M | Color: White</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm font-medium text-gray-900">$89.99</span>
                        <span className="text-sm text-gray-500">Qty: 1</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <img src="https://readdy.ai/api/search-image?query=casual%20linen%20blouse%20on%20mannequin%2C%20white%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20soft%20lighting%2C%20minimalist%20background%2C%20detailed%20fabric%20texture&width=80&height=80&seq=2&orientation=squarish" alt="Casual Linen Blouse" className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">Casual Linen Blouse</h4>
                      <p className="text-sm text-gray-500">Size: S | Color: Blue</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm font-medium text-gray-900">$49.99</span>
                        <span className="text-sm text-gray-500">Qty: 1</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <img src="https://readdy.ai/api/search-image?query=high%20waisted%20jeans%20on%20mannequin%2C%20white%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20product%20image%2C%20soft%20lighting%2C%20minimalist%20background%2C%20detailed%20fabric%20texture&width=80&height=80&seq=3&orientation=squarish" alt="High-Waisted Jeans" className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">High-Waisted Jeans</h4>
                      <p className="text-sm text-gray-500">Size: M | Color: Blue</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm font-medium text-gray-900">$79.99</span>
                        <span className="text-sm text-gray-500">Qty: 1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex items-center justify-between text-sm font-medium text-gray-900">
                    <span>Subtotal</span>
                    <span>$219.97</span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <button className="w-full bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition whitespace-nowrap !rounded-button">View Cart</button>
                    <button className="w-full bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition whitespace-nowrap !rounded-button">Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <i className="fas fa-user text-gray-700 text-xl cursor-pointer"></i>
          <button className="md:hidden" onClick={() => setShowFiltersMobile(!showFiltersMobile)}>
             <i className="fas fa-bars text-gray-700 text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
  {/* Breadcrumb */}
  <div className="bg-gray-50">
    <div className="container mx-auto px-4 py-3">
      <div className="flex items-center text-sm text-gray-500">
        <a
          href="/"
          data-readdy="true"
          className="hover:text-pink-600 transition cursor-pointer"
        >
          Home
        </a>
        <i className="fas fa-chevron-right text-xs mx-2"></i>
        <span className="text-gray-700 font-medium">Women</span>
      </div>
    </div>
  </div>
  {/* Page Title */}
  <div className="container mx-auto px-4 py-6">
    <h1 className="text-3xl font-bold text-gray-800">Women's Collection</h1>
    <p className="text-gray-600 mt-2">Discover our latest women's fashion collection for every occasion.</p>
  </div>
  {/* Filters - Desktop */}
  <div className="hidden md:block bg-white border-t border-b border-gray-200">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {/* Category Filter */}
          <div className="relative">
            <button
              id="categoryButton"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition cursor-pointer whitespace-nowrap !rounded-button"
            >
              <span>Category: <span className="font-medium">{categoryFilter}</span></span>
              <i className={`fas fa-chevron-down text-xs transition-transform duration-200 ${isCategoryOpen ? 'transform rotate-180' : ''}`}></i>
            </button>
            <div
              id="categoryDropdown"
              className={`absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg ${isCategoryOpen ? 'block' : 'hidden'}`}
            >
              <div className="py-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setCategoryFilter(category);
                      setIsCategoryOpen(false);
                    }}
                    className={`block px-4 py-2 text-sm w-full text-left ${categoryFilter === category ? 'bg-pink-50 text-pink-600' : 'text-gray-700 hover:bg-gray-100'} whitespace-nowrap !rounded-button`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Size Filter */}
          <div className="relative">
            <button
              id="sizeButton"
              onClick={() => setIsSizeOpen(!isSizeOpen)}
              className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition cursor-pointer whitespace-nowrap !rounded-button"
            >
              <span>Size: <span className="font-medium">{sizeFilter}</span></span>
              <i className={`fas fa-chevron-down text-xs transition-transform duration-200 ${isSizeOpen ? 'transform rotate-180' : ''}`}></i>
            </button>
            <div
              id="sizeDropdown"
              className={`absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg ${isSizeOpen ? 'block' : 'hidden'}`}
            >
              <div className="py-1">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSizeFilter(size);
                      setIsSizeOpen(false);
                    }}
                    className={`block px-4 py-2 text-sm w-full text-left ${sizeFilter === size ? 'bg-pink-50 text-pink-600' : 'text-gray-700 hover:bg-gray-100'} whitespace-nowrap !rounded-button`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Color Filter */}
          <div className="relative">
            <button
              id="colorButton"
              onClick={() => setIsColorOpen(!isColorOpen)}
              className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition cursor-pointer whitespace-nowrap !rounded-button"
            >
              <span>Color: <span className="font-medium">{colorFilter}</span></span>
              <i className={`fas fa-chevron-down text-xs transition-transform duration-200 ${isColorOpen ? 'transform rotate-180' : ''}`}></i>
            </button>
            <div
              id="colorDropdown"
              className={`absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg ${isColorOpen ? 'block' : 'hidden'}`}
            >
              <div className="py-1">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      setColorFilter(color);
                      setIsColorOpen(false);
                    }}
                    className={`block px-4 py-2 text-sm w-full text-left ${colorFilter === color ? 'bg-pink-50 text-pink-600' : 'text-gray-700 hover:bg-gray-100'} whitespace-nowrap !rounded-button`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Price Range */}
          <div className="relative">
            <button
              id="priceButton"
              onClick={() => document.getElementById('priceDropdown')?.classList.toggle('hidden')}
              className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition cursor-pointer whitespace-nowrap !rounded-button"
            >
              <span>Price: <span className="font-medium">${priceRange[0]} - ${priceRange[1]}</span></span>
              <i className="fas fa-chevron-down text-xs"></i>
            </button>
            <div id="priceDropdown" className="hidden absolute z-10 mt-2 w-72 bg-white rounded-md shadow-lg p-4">
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">${priceRange[0]}</span>
                  <span className="text-sm text-gray-600">${priceRange[1]}</span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer"
                  />
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <button
                  onClick={() => setPriceRange([0, 50])}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded whitespace-nowrap !rounded-button"
                >
                  Under $50
                </button>
                <button
                  onClick={() => setPriceRange([50, 100])}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded whitespace-nowrap !rounded-button"
                >
                  $50 - $100
                </button>
                <button
                  onClick={() => setPriceRange([100, 200])}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded whitespace-nowrap !rounded-button"
                >
                  $100 - $200
                </button>
                <button
                  onClick={() => setPriceRange([200, 500])}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded whitespace-nowrap !rounded-button"
                >
                  $200 - $500
                </button>
                <button
                  onClick={() => setPriceRange([500, 1000])}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded whitespace-nowrap !rounded-button"
                >
                  Over $500
                </button>
              </div>
              <button
                onClick={() => document.getElementById('priceDropdown')?.classList.add('hidden')}
                className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition whitespace-nowrap !rounded-button"
              >
                Apply
              </button>
            </div>
          </div>
          {/* Clear Filters */}
          <button
            onClick={clearAllFilters}
            className="text-pink-600 hover:text-pink-700 transition text-sm cursor-pointer whitespace-nowrap !rounded-button"
          >
            Clear All
          </button>
        </div>
        {/* Sort Options */}
        <div className="relative">
          <button className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition cursor-pointer whitespace-nowrap !rounded-button">
            <span>Sort by: <span className="font-medium">{sortOption}</span></span>
            <i className="fas fa-chevron-down text-xs"></i>
          </button>
          <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
            <div className="py-1">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSortOption(option)}
                  className={`block px-4 py-2 text-sm w-full text-left ${sortOption === option ? 'bg-pink-50 text-pink-600' : 'text-gray-700 hover:bg-gray-100'} whitespace-nowrap !rounded-button`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Filters - Mobile */}
  <div className={`md:hidden fixed inset-0 z-50 bg-white transform ${showFiltersMobile ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
    <div className="flex justify-between items-center p-4 border-b">
      <h2 className="text-lg font-medium">Filters</h2>
      <button onClick={() => setShowFiltersMobile(false)} className="text-gray-500 whitespace-nowrap !rounded-button">
        <i className="fas fa-times"></i>
      </button>
    </div>
    <div className="p-4 space-y-6 overflow-y-auto h-[calc(100vh-64px)]">
      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                type="radio"
                id={`category-${category}`}
                name="category"
                checked={categoryFilter === category}
                onChange={() => setCategoryFilter(category)}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
              <label htmlFor={`category-${category}`} className="ml-3 text-sm text-gray-700">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* Size Filter */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
        <div className="space-y-2">
          {sizes.map((size) => (
            <div key={size} className="flex items-center">
              <input
                type="radio"
                id={`size-${size}`}
                name="size"
                checked={sizeFilter === size}
                onChange={() => setSizeFilter(size)}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
              <label htmlFor={`size-${size}`} className="ml-3 text-sm text-gray-700">
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* Color Filter */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
        <div className="space-y-2">
          {colors.map((color) => (
            <div key={color} className="flex items-center">
              <input
                type="radio"
                id={`color-${color}`}
                name="color"
                checked={colorFilter === color}
                onChange={() => setColorFilter(color)}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
              <label htmlFor={`color-${color}`} className="ml-3 text-sm text-gray-700">
                {color}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* Sort Options */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Sort By</h3>
        <div className="space-y-2">
          {sortOptions.map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="radio"
                id={`sort-${option}`}
                name="sort"
                checked={sortOption === option}
                onChange={() => setSortOption(option)}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
              />
              <label htmlFor={`sort-${option}`} className="ml-3 text-sm text-gray-700">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* Clear All Button */}
      <div className="pt-4 border-t">
        <button
          onClick={clearAllFilters}
          className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition whitespace-nowrap !rounded-button"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  </div>
  {/* Product Grid */}
  <div className="container mx-auto px-4 py-8">
    {isLoading ? (
      // Loading skeleton
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
            <div className="h-80 bg-gray-200"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    ) : filteredProducts.length > 0 ? (
      // Product grid
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
            <div className="relative h-80 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
              )}
              {product.isBestseller && (
                <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">BESTSELLER</span>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => openQuickView(product)}
                  className="bg-white text-gray-800 px-4 py-2 rounded-md font-medium hover:bg-pink-600 hover:text-white transition transform -translate-y-4 group-hover:translate-y-0 duration-300 whitespace-nowrap !rounded-button"
                >
                  Quick View
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-gray-800 font-medium">{product.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-gray-900 font-bold">${product.price.toFixed(2)}</span>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} text-sm`}
                      ></i>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-1">{product.rating}</span>
                </div>
              </div>
              <button className="mt-3 w-full bg-gray-800 hover:bg-pink-600 text-white py-2 rounded-md transition whitespace-nowrap !rounded-button">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    ) : (
      // Empty state
      <div className="text-center py-16">
        <div className="text-pink-600 mb-4">
          <i className="fas fa-search text-6xl"></i>
        </div>
        <h3 className="text-2xl font-medium text-gray-800 mb-2">No products found</h3>
        <p className="text-gray-600 mb-6">Try removing some filters or changing your search criteria.</p>
        <button
          onClick={clearAllFilters}
          className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition whitespace-nowrap !rounded-button"
        >
          Clear All Filters
        </button>
      </div>
    )}
  </div>
  {/* Load More Button */}
  {filteredProducts.length > 0 && (
    <div className="container mx-auto px-4 pb-16 text-center">
      <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition whitespace-nowrap !rounded-button">
        Load More
      </button>
    </div>
  )}
  {/* Quick View Modal */}
  {quickViewOpen && selectedProduct && (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={closeQuickView}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={closeQuickView}
            >
              <span className="sr-only">Close</span>
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h2>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star ${i < Math.floor(selectedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'} text-sm`}
                    ></i>
                  ))}
                </div>
                <span className="text-gray-500 text-sm ml-1">{selectedProduct.rating} stars</span>
              </div>
              <div className="mt-4">
                <span className="text-2xl font-bold text-gray-900">${selectedProduct.price.toFixed(2)}</span>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <div className="flex items-center space-x-3 mt-2">
                  {selectedProduct.colors.map((color: string) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-pink-600' : 'border-transparent'} focus:outline-none whitespace-nowrap !rounded-button`}
                    >
                      <span className="sr-only">{color}</span>
                      <span
                        className="block w-full h-full rounded-full"
                        style={{
                          backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' :
                          color.toLowerCase() === 'black' ? '#000000' :
                          color.toLowerCase() === 'red' ? '#ef4444' :
                          color.toLowerCase() === 'blue' ? '#3b82f6' :
                          color.toLowerCase() === 'beige' ? '#e5d3b3' :
                          color.toLowerCase() === 'grey' ? '#9ca3af' :
                          color.toLowerCase() === 'pink' ? '#ec4899' :
                          color.toLowerCase() === 'camel' ? '#c19a6b' :
                          color.toLowerCase() === 'navy' ? '#172554' :
                          color.toLowerCase() === 'brown' ? '#92400e' :
                          color.toLowerCase() === 'burgundy' ? '#9f1239' :
                          color.toLowerCase() === 'light blue' ? '#7dd3fc' : '#cccccc'
                        }}
                      ></span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <div className="grid grid-cols-5 gap-2 mt-2">
                  {selectedProduct.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 text-sm font-medium rounded border ${selectedSize === size ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'} whitespace-nowrap !rounded-button`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <div className="flex items-center mt-2 border border-gray-300 rounded-md w-32">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-700 whitespace-nowrap !rounded-button"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-full text-center border-none focus:outline-none text-gray-900"
                  />
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-700 whitespace-nowrap !rounded-button"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="mt-8 space-y-3">
                <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition whitespace-nowrap !rounded-button">
                  Add to Cart
                </button>
                <button className="w-full bg-pink-600 text-white py-3 px-6 rounded-md hover:bg-pink-700 transition whitespace-nowrap !rounded-button">
                  Buy Now
                </button>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-4">
                <h3 className="text-sm font-medium text-gray-900">Product Details</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Experience comfort and style with our premium quality {selectedProduct.name.toLowerCase()}.
                  Perfect for any occasion, this piece combines modern design with exceptional craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
  {/* Footer */}
  <footer className="bg-gray-900 text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">FASHION<span className="text-pink-500">NOVA</span></h3>
          <p className="text-gray-400 text-sm">
            Discover the latest trends in women's fashion and explore our collection of high-quality clothing designed for the modern woman.
          </p>
          <div className="flex space-x-4 mt-6">
            <a className="text-gray-400 hover:text-white transition cursor-pointer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="text-gray-400 hover:text-white transition cursor-pointer">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-gray-400 hover:text-white transition cursor-pointer">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="text-gray-400 hover:text-white transition cursor-pointer">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><a className="text-gray-400 hover:text-white transition cursor-pointer">New Arrivals</a></li>
            <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Bestsellers</a></li>
            <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Sale</a></li>
            <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Collections</a></li>
            <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Lookbook</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Help</h3>
          <ul className="space-y-2">
            <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Customer Service</a></li>
            <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Shipping & Returns</a></li>
            <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Size Guide</a></li>
            <li><a className="text-gray-400 hover:text-white transition cursor-pointer">FAQs</a></li>
            <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-4">
            Sign up for our newsletter to receive updates and exclusive offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 w-full rounded-l-md border-none focus:outline-none text-gray-900 text-sm"
            />
            <button className="bg-pink-600 text-white px-4 py-2 rounded-r-md hover:bg-pink-700 transition whitespace-nowrap !rounded-button">
              Subscribe
            </button>
          </div>
          <div className="mt-6">
            <h4 className="text-sm font-bold mb-2">Payment Methods</h4>
            <div className="flex space-x-3">
              <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
              <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
              <i className="fab fa-cc-amex text-2xl text-gray-400"></i>
              <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
        <p>&copy; 2025 FashionNova. All rights reserved.</p>
      </div>
    </div>
  </footer>
</div>
);
}
export default App