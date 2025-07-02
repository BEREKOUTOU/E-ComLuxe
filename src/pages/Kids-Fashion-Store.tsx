import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const App: React.FC = () => {
const [selectedAge, setSelectedAge] = useState<string>('all');
const [selectedSize, setSelectedSize] = useState<string>('');
const [selectedColor, setSelectedColor] = useState<string>('');
const [showSizeChart, setShowSizeChart] = useState<boolean>(false);
const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
const [selectedCategory, setSelectedCategory] = useState<string>('all');
const [sortBy, setSortBy] = useState<string>('newest');
const [showQuickView, setShowQuickView] = useState<number | null>(null);
const [selectedQuickViewSize, setSelectedQuickViewSize] = useState<string>('');
const [selectedQuickViewColor, setSelectedQuickViewColor] = useState<string>('');
const [quickViewQuantity, setQuickViewQuantity] = useState<number>(1);
const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
const [cartItems, setCartItems] = useState<number>(0);
React.useEffect(() => {
const handleClickOutside = (event: MouseEvent) => {
const userMenuButton = document.getElementById('userMenuButton');
const userDropdownMenu = document.getElementById('userDropdownMenu');
const colorDropdownButton = document.getElementById('colorDropdownButton');
const colorDropdown = document.getElementById('colorDropdown');
if (userMenuButton && userDropdownMenu &&
!userMenuButton.contains(event.target as Node) &&
!userDropdownMenu.contains(event.target as Node)) {
setIsUserMenuOpen(false);
}
if (colorDropdownButton && colorDropdown &&
!colorDropdownButton.contains(event.target as Node) &&
!colorDropdown.contains(event.target as Node)) {
colorDropdown.classList.add('hidden');
}
};
document.addEventListener('mousedown', handleClickOutside);
return () => {
document.removeEventListener('mousedown', handleClickOutside);
};
}, []);
const ageGroups = ['0-2 years', '2-5 years', '5-8 years', '8-12 years'];
const categories = ['School Wear', 'Playwear', 'Special Occasion', 'Accessories', 'Shoes', 'New Arrivals', 'Sale'];
const sizes = ['2Y', '3Y', '4Y', '5Y', '6Y', '7Y', '8Y', '9Y', '10Y', '11Y', '12Y'];
const colors = [
{ name: 'White', code: '#FFFFFF', border: true },
{ name: 'Pink', code: '#FFC0CB' },
{ name: 'Blue', code: '#87CEEB' },
{ name: 'Yellow', code: '#FFD700' },
{ name: 'Purple', code: '#DDA0DD' },
{ name: 'Green', code: '#98FB98' }
];
const products = [
{
id: 1,
name: 'Floral Print Summer Dress',
price: 89.99,
colors: ['#FFC0CB', '#87CEEB'],
ageRange: '5-8 years',
image: 'https://public.readdy.ai/ai/img_res/5472b052813a01d8cbe002d5205e3fc0.jpg'
},
{
id: 2,
name: 'School Uniform Set',
price: 129.99,
colors: ['#000080', '#FFFFFF'],
ageRange: '8-12 years',
image: 'https://public.readdy.ai/ai/img_res/7f9fbba5924c7f10a449d97aba105ce6.jpg'
},
{
id: 3,
name: 'Playful Dinosaur T-Shirt',
price: 45.99,
colors: ['#98FB98', '#87CEEB'],
ageRange: '2-5 years',
image: 'https://public.readdy.ai/ai/img_res/e4b8a03c0205fef88e27dc9b6f0fc6a7.jpg'
},
{
id: 4,
name: 'Special Occasion Suit',
price: 159.99,
colors: ['#000000', '#000080'],
ageRange: '8-12 years',
image: 'https://public.readdy.ai/ai/img_res/9820aa1fee10d613989672314e719fde.jpg'
},
{
id: 5,
name: 'Rainbow Party Dress',
price: 79.99,
colors: ['#FFC0CB', '#FFD700'],
ageRange: '5-8 years',
image: 'https://public.readdy.ai/ai/img_res/762d09e89a82ed8309f6b19d4c9df022.jpg'
},
{
id: 6,
name: 'Comfort Play Set',
price: 69.99,
colors: ['#DDA0DD', '#98FB98'],
ageRange: '0-2 years',
image: 'https://public.readdy.ai/ai/img_res/4d5d269ff9e4ff33b5b2c336193d2df6.jpg'
},
{
id: 7,
name: 'Kids Designer Sneakers',
price: 119.99,
colors: ['#FFFFFF', '#FFD700'],
ageRange: '8-12 years',
image: 'https://public.readdy.ai/ai/img_res/8aba00b989d3171a0ffaf82852b2b308.jpg'
},
{
id: 8,
name: 'Butterfly Hair Accessories Set',
price: 34.99,
colors: ['#FFC0CB', '#DDA0DD'],
ageRange: '5-8 years',
image: 'https://public.readdy.ai/ai/img_res/4634a95a97b5f6502d7c9cbf7547c122.jpg'
}
];
return (
<div className="min-h-screen bg-white">
  {/* Header */}
  <header className="fixed top-0 w-full bg-white shadow-sm z-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-gray-900">LUXE</Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900 whitespace-nowrap !rounded-button">Home</Link>
            <Link to="/women" className="text-gray-600 hover:text-gray-900 whitespace-nowrap !rounded-button">Women</Link>
            <Link to="/men" className="text-gray-600 hover:text-gray-900 whitespace-nowrap !rounded-button">Men</Link>
            <span className="text-gray-900 font-medium whitespace-nowrap !rounded-button cursor-default">Kids</span>
            <Link to="/accessories" className="text-gray-600 hover:text-gray-900 whitespace-nowrap !rounded-button">Accessories</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search kids' fashion..."
              className="w-48 pl-10 pr-4 py-2 border-none rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
          <button className="text-gray-600 cursor-pointer whitespace-nowrap !rounded-button relative">
            <i className="fas fa-shopping-bag text-xl"></i>
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cartItems}</span>
            )}
          </button>
          <div className="relative">
            <button
              id="userMenuButton"
              className="text-gray-600 cursor-pointer whitespace-nowrap !rounded-button"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <i className="fas fa-user text-xl"></i>
            </button>
            <div
              id="userDropdownMenu"
              className={`absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 ${isUserMenuOpen ? 'block' : 'hidden'}`}
            >
              <button
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 cursor-pointer whitespace-nowrap !rounded-button"
                onClick={() => setIsUserMenuOpen(false)}
              >
                Sign In
              </button>
              <button
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 cursor-pointer whitespace-nowrap !rounded-button"
                onClick={() => setIsUserMenuOpen(false)}
              >
                Register
              </button>
              <button
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 cursor-pointer whitespace-nowrap !rounded-button"
                onClick={() => setIsUserMenuOpen(false)}
              >
                My Account
              </button>
              <button
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 cursor-pointer whitespace-nowrap !rounded-button"
                onClick={() => setIsUserMenuOpen(false)}
              >
                My Orders
              </button>
              <button
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 cursor-pointer whitespace-nowrap !rounded-button"
                onClick={() => setIsUserMenuOpen(false)}
              >
                Wishlist
              </button>
              <div className="border-t border-gray-100 my-1"></div>
              <button
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 cursor-pointer whitespace-nowrap !rounded-button"
                onClick={() => setIsUserMenuOpen(false)}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* Age Group Filter Bar */}
  <div className="sticky top-16 bg-white border-b z-40">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center space-x-4">
          <a
            href="/"
            data-readdy="true"
            className="text-gray-600 hover:text-gray-900 flex items-center space-x-1"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Back</span>
          </a>
          {ageGroups.map((age) => (
            <button
              key={age}
              onClick={() => setSelectedAge(age)}
              className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer whitespace-nowrap !rounded-button ${
                selectedAge === age
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {age}
            </button>
          ))}
        </div>
        <button
          id="sizeChartButton"
          onClick={() => setShowSizeChart(true)}
          className="text-gray-700 hover:text-gray-900 flex items-center space-x-2 cursor-pointer whitespace-nowrap !rounded-button"
        >
          <i className="fas fa-ruler"></i>
          <span>Size Chart</span>
        </button>
      </div>
    </div>
  </div>
  {/* Categories */}
  <div className="bg-white border-b">
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex space-x-6 overflow-x-auto hide-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-sm font-medium whitespace-nowrap cursor-pointer !rounded-button ${
              selectedCategory === category
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  </div>
  {/* Main Content */}
  <main className="max-w-7xl mx-auto px-4 py-8">
    {/* Filters and Sort */}
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-8">
        <div className="relative group">
          <button className="flex items-center space-x-2 text-gray-700 cursor-pointer whitespace-nowrap !rounded-button">
            <span>Size</span>
            <i className="fas fa-chevron-down text-xs"></i>
          </button>
          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 hidden group-hover:block">
            <div className="grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-2 rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button ${
                    selectedSize === size ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <button
            id="colorDropdownButton"
            onClick={() => {
              const dropdown = document.getElementById('colorDropdown');
              if (dropdown) {
                dropdown.classList.toggle('hidden');
              }
            }}
            className="flex items-center space-x-2 text-gray-700 cursor-pointer whitespace-nowrap !rounded-button"
          >
            <span>{selectedColor ? `Color: ${selectedColor}` : 'Color'}</span>
            <i className="fas fa-chevron-down text-xs"></i>
          </button>
          <div
            id="colorDropdown"
            className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 hidden z-50"
          >
            <div className="grid grid-cols-6 gap-2">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => {
                    setSelectedColor(color.name);
                    const dropdown = document.getElementById('colorDropdown');
                    if (dropdown) {
                      dropdown.classList.add('hidden');
                    }
                  }}
                className={`w-8 h-8 rounded-full cursor-pointer ${
                  color.border ? 'border border-gray-300' : ''
                }`}
                style={{ backgroundColor: color.code }}
                title={color.name}
              ></button>
              ))}
            </div>
          </div>
        </div>
        <div className="relative group">
          <button className="flex items-center space-x-2 text-gray-700 cursor-pointer whitespace-nowrap !rounded-button">
            <span>Price</span>
            <i className="fas fa-chevron-down text-xs"></i>
          </button>
          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 hidden group-hover:block w-64">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                step="10"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">{products.length} Products</span>
        <div className="relative group">
          <button className="flex items-center space-x-2 text-gray-700 cursor-pointer whitespace-nowrap !rounded-button">
            <span>Sort by: {sortBy}</span>
            <i className="fas fa-chevron-down text-xs"></i>
          </button>
          <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block w-48">
            <button
              onClick={() => setSortBy('newest')}
              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 cursor-pointer whitespace-nowrap !rounded-button"
            >
              Newest
            </button>
            <button
              onClick={() => setSortBy('price-high')}
              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 cursor-pointer whitespace-nowrap !rounded-button"
            >
              Price: High to Low
            </button>
            <button
              onClick={() => setSortBy('price-low')}
              className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 cursor-pointer whitespace-nowrap !rounded-button"
            >
              Price: Low to High
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Product Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products
        .filter(product =>
          (!selectedColor || product.colors.includes(colors.find(c => c.name === selectedColor)?.code || '')) &&
          (selectedAge === 'all' || product.ageRange === selectedAge)
        )
        .map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-w-3 aspect-h-4 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-between">
                  <button
                    id={`quick-view-btn-${product.id}`}
                    onClick={() => {
                      setShowQuickView(product.id);
                      setSelectedQuickViewSize('');
                      setSelectedQuickViewColor('');
                      setQuickViewQuantity(1);
                    }}
                    className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 cursor-pointer whitespace-nowrap !rounded-button transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Quick View
                  </button>
                  <button
                    onClick={() => {
                      setCartItems(prev => prev + 1);
                      const toast = document.createElement('div');
                      toast.className = 'fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4 z-50 transform transition-all duration-300 translate-y-full';
                      toast.style.maxWidth = '300px';
                      toast.innerHTML = `
                    <img src="${product?.image}" alt="${product?.name}" class="w-12 h-12 object-cover rounded"/>
                    <div class="flex-1">
                    <p class="text-sm font-medium text-gray-900">Added to Cart</p>
                    <p class="text-xs text-gray-600">${product?.name}</p>
                    </div>
                    <button class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times"></i>
                    </button>
                    `;
                    document.body.appendChild(toast);
                   // Slide up animation
                    requestAnimationFrame(() => {
                    toast.classList.remove('translate-y-full');
                    });
                    // Add click handler to close button
                    const closeBtn = toast.querySelector('button');
                    if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                    toast.classList.add('translate-y-full');
                    setTimeout(() => toast.remove(), 300);
                    });
                    }
                    // Auto remove after 3 seconds
                      setTimeout(() => {
                    toast.classList.add('translate-y-full');
                    setTimeout(() => toast.remove(), 300);
                    }, 3000);
                    }}
                    className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 cursor-pointer whitespace-nowrap !rounded-button"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="mt-1 text-gray-600">${product.price}</p>
              <div className="mt-2 flex space-x-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
    {/* Footer */}
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About LUXE Kids</h3>
            <p className="text-gray-400">Discover luxury fashion for your little ones.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><button className="text-gray-400 hover:text-white cursor-pointer whitespace-nowrap !rounded-button">Size Guide</button></li>
              <li><button className="text-gray-400 hover:text-white cursor-pointer whitespace-nowrap !rounded-button">Shipping</button></li>
              <li><button className="text-gray-400 hover:text-white cursor-pointer whitespace-nowrap !rounded-button">Returns</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white cursor-pointer whitespace-nowrap !rounded-button">
                <i className="fab fa-instagram text-xl"></i>
              </button>
              <button className="text-gray-400 hover:text-white cursor-pointer whitespace-nowrap !rounded-button">
                <i className="fab fa-facebook text-xl"></i>
              </button>
              <button className="text-gray-400 hover:text-white cursor-pointer whitespace-nowrap !rounded-button">
                <i className="fab fa-twitter text-xl"></i>
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-full text-gray-900 border-none"
              />
              <button className="bg-white text-gray-900 px-6 py-2 rounded-r-full font-medium hover:bg-gray-100 cursor-pointer whitespace-nowrap !rounded-button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 LUXE Kids. All rights reserved.</p>
        </div>
      </div>
    </footer>
    {/* Size Chart Modal */}
    {showSizeChart && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg max-w-2xl w-full mx-4 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Kids Size Chart</h2>
            <button
              onClick={() => setShowSizeChart(false)}
              className="text-gray-500 hover:text-gray-700 cursor-pointer whitespace-nowrap !rounded-button"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Age</th>
                  <th className="px-4 py-2 text-left">Height (cm)</th>
                  <th className="px-4 py-2 text-left">Chest (cm)</th>
                  <th className="px-4 py-2 text-left">Waist (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2">2Y</td>
                  <td className="px-4 py-2">92</td>
                  <td className="px-4 py-2">53</td>
                  <td className="px-4 py-2">51</td>
                </tr>
                <tr className="border-b">
                    <td className="px-4 py-2">4Y</td>
                  <td className="px-4 py-2">104</td>
                  <td className="px-4 py-2">56</td>
                  <td className="px-4 py-2">53</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">6Y</td>
                  <td className="px-4 py-2">116</td>
                  <td className="px-4 py-2">61</td>
                  <td className="px-4 py-2">56</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">8Y</td>
                  <td className="px-4 py-2">128</td>
                  <td className="px-4 py-2">66</td>
                  <td className="px-4 py-2">58</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">10Y</td>
                  <td className="px-4 py-2">140</td>
                  <td className="px-4 py-2">71</td>
                  <td className="px-4 py-2">61</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )}
    {/* Quick View Modal */}
    {showQuickView && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg max-w-4xl w-full mx-4 relative">
          <button
            onClick={() => {
              setShowQuickView(null);
              setSelectedQuickViewSize('');
              setSelectedQuickViewColor('');
              setQuickViewQuantity(1);
            }}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 cursor-pointer whitespace-nowrap !rounded-button"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="aspect-w-3 aspect-h-4 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={products.find(p => p.id === showQuickView)?.image}
                alt={products.find(p => p.id === showQuickView)?.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {products.find(p => p.id === showQuickView)?.name}
                </h2>
                <p className="text-xl text-gray-900 mt-2">
                  ${products.find(p => p.id === showQuickView)?.price}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedQuickViewSize(size)}
                      className={`px-3 py-2 rounded-md text-sm cursor-pointer whitespace-nowrap !rounded-button ${
                        selectedQuickViewSize === size
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
                <div className="flex space-x-2">
                  {products.find(p => p.id === showQuickView)?.colors.map((color, index) => {
                    const colorName = colors.find(c => c.code === color)?.name || '';
                    return (
                      <button
                        key={index}
                        id={`color-swatch-${index}`}
                        onClick={() => {
                          setSelectedQuickViewColor(color);
                          const toast = document.createElement('div');
                          toast.id = 'color-toast';
                          toast.className = 'fixed bottom-4 right-4 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-transform duration-300 translate-y-0';
                          toast.textContent = `${colorName} color selected`;
                          document.body.appendChild(toast);
                          setTimeout(() => {
                            toast.classList.add('translate-y-full');
                            setTimeout(() => toast.remove(), 300);
                          }, 2000);
                        }}
                        className={`w-8 h-8 rounded-full cursor-pointer border-2 transition-all duration-300 hover:scale-110 ${
                          selectedQuickViewColor === color ? 'border-gray-900 shadow-lg' : 'border-transparent hover:border-gray-300'
                        }`}
                        style={{ backgroundColor: color }}
                        title={colorName}
                      ></button>
                    );
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuickViewQuantity(prev => Math.max(1, prev - 1))}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer whitespace-nowrap !rounded-button"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <span className="text-gray-900 font-medium">{quickViewQuantity}</span>
                  <button
                    onClick={() => setQuickViewQuantity(prev => prev + 1)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer whitespace-nowrap !rounded-button"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button
                  id="quick-view-add-to-cart"
                  onClick={() => {
                    if (selectedQuickViewSize && selectedQuickViewColor) {
                      setCartItems(prev => prev + quickViewQuantity);
                      const product = products.find(p => p.id === showQuickView);
                      const toast = document.createElement('div');
                      toast.className = 'fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4 z-50 transform transition-all duration-300 translate-y-0';
                      toast.innerHTML = `
                        <img src="${product?.image}" alt="${product?.name}" class="w-12 h-12 object-cover rounded"/>
                        <div class="flex-1">
                          <p class="text-sm font-medium text-gray-900">${quickViewQuantity} item(s) added to cart</p>
                          <p class="text-xs text-gray-600">${product?.name} - Size: ${selectedQuickViewSize}, Color: ${colors.find(c => c.code === selectedQuickViewColor)?.name}</p>
                        </div>
                        <button class="text-gray-400 hover:text-gray-600">
                          <i class="fas fa-times"></i>
                        </button>
                      `;
                      document.body.appendChild(toast);
                      setTimeout(() => {
                        toast.classList.add('translate-y-full');
                        setTimeout(() => toast.remove(), 300);
                      }, 3000);
                      setShowQuickView(null);
                      setSelectedQuickViewSize('');
                      setSelectedQuickViewColor('');
                      setQuickViewQuantity(1);
                    }
                  }}
                  className={`px-6 py-3 rounded-full font-medium cursor-pointer whitespace-nowrap !rounded-button transition-all duration-300 ${
                    selectedQuickViewSize && selectedQuickViewColor
                      ? 'bg-gray-900 text-white hover:bg-gray-800 transform hover:scale-105 shadow-lg'
                      : 'bg-gray-400 text-white cursor-not-allowed opacity-75'
                  }`}
                  disabled={!selectedQuickViewSize || !selectedQuickViewColor}
                >
                  {selectedQuickViewSize && selectedQuickViewColor ? 'Add to Cart' : 'Select Size & Color'}
                </button>
                <a href="https://readdy.ai/home/df6ccbb7-9c3b-4e11-9011-dd80609b3302/512f27b1-544c-48e6-ba81-5576ca904569" data-readdy="true" className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium border border-gray-300 hover:bg-gray-50 cursor-pointer whitespace-nowrap !rounded-button inline-block text-center">
                  View Full Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
</div>
);
};
export default App