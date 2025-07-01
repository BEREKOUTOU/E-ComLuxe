// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';
const App: React.FC = () => {
interface CartItem {
id: number;
name: string;
price: number;
quantity: number;
image: string;
}
const [isCartOpen, setIsCartOpen] = useState(false);
const [cartItems, setCartItems] = useState<number>(3);
const [showBackToTop, setShowBackToTop] = useState(false);
const [cart, setCart] = useState<CartItem[]>([
{
id: 1,
name: "Premium Wool Coat",
price: 299.99,
quantity: 1,
image: "https://public.readdy.ai/ai/img_res/a8aedabf0887f1244d194f0e58ec2015.jpg"
},
{
id: 2,
name: "Silk Evening Dress",
price: 459.99,
quantity: 2,
image: "https://public.readdy.ai/ai/img_res/207318af3f56f689ec6c92cc49be1444.jpg"
}
]);
const [selectedProduct, setSelectedProduct] = useState<any>(null);
const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
const [selectedSize, setSelectedSize] = useState('M');
const [selectedColor, setSelectedColor] = useState('Black');
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const userMenu = document.getElementById('userDropdownMenu');
    const userButton = document.getElementById('userMenuButton');
    
    if (isMenuOpen && userMenu && userButton && 
        !userMenu.contains(event.target as Node) && 
        !userButton.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isMenuOpen]);
const chartRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  const handleScroll = () => {
    setShowBackToTop(window.scrollY > 400);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(prev => {
      if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
        return { hours: 24, minutes: 0, seconds: 0 };
      }
      let newHours = prev.hours;
let newMinutes = prev.minutes;
let newSeconds = prev.seconds - 1;
if (newSeconds < 0) {
newSeconds = 59;
newMinutes -= 1;
}
if (newMinutes < 0) {
newMinutes = 59;
newHours -= 1;
}
return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
});
}, 1000);
return () => clearInterval(timer);
}, []);
useEffect(() => {
  if (chartRef.current) {
    const chart = echarts.init(chartRef.current);
    const option = {
      animation: false,
      tooltip: {
        trigger: "axis" as "axis"
  },
  xAxis: {
    type: 'category' as const,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value' as const
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line' as const,
    smooth: true
  }]
};
chart.setOption(option);
}
}, []);
const featuredCategories = [
{
title: 'Femmes',
image: 'https://public.readdy.ai/ai/img_res/2db10a3b28f960a6920f18c89054235f.jpg',
color: 'rose-500'
},
{
title: 'Hommes',
image: 'https://public.readdy.ai/ai/img_res/ecaaff538cf3d2bd00c6c4c80598c42e.jpg',
color: 'blue-500'
},
{
title: 'Enfants',
image: 'https://public.readdy.ai/ai/img_res/407ac8d1e5665e5dd4e088fcc046995d.jpg',
color: 'yellow-500'
},
{
title: 'Accessoires',
image: 'https://public.readdy.ai/ai/img_res/762434b4f603b00c8ad258f36526b464.jpg',
color: 'purple-500'
}
];
const newArrivals = [
{
name: 'Manteau en laine de qualité supérieure',
price: '$299.99',
rating: 4.8,
image: 'https://public.readdy.ai/ai/img_res/a8aedabf0887f1244d194f0e58ec2015.jpg'
},
{
name: 'Robe de soirée en soie',
price: '$459.99',
rating: 4.9,
image: 'https://public.readdy.ai/ai/img_res/207318af3f56f689ec6c92cc49be1444.jpg'
},
{
name: 'Sac à main de designer',
price: '$899.99',
rating: 5.0,
image: 'https://public.readdy.ai/ai/img_res/e53416acd0a3c6ffb4e87d488c1b7712.jpg'
}
];
return (
<div className="full-screen bg-white">
  {/* Sticky Header */}
  <header className="fixed top-0 w-full bg-white bg-opacity-95 shadow-sm z-50">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center space-x-12">
        <h1 className="text-3xl font-bold text-gray-800">LUXE</h1>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap !rounded-button">Accueil</Link>
            <Link to="/women" className="text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap !rounded-button">Femmes</Link>
            <Link to="/men" className="text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap !rounded-button">Hommes</Link>
            <Link to="/children" className="text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap !rounded-button">Enfants</Link>
            <Link to="/accessories" className="text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap !rounded-button">Accessoires</Link>
          </nav>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-64 h-10 pl-10 pr-4 rounded-full border-none bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm"
          />
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm cursor-pointer"></i>
        </div>
        <div className="relative cursor-pointer" onClick={() => setIsCartOpen(!isCartOpen)}>
          <i className="fas fa-shopping-bag text-xl text-gray-600"></i>
          {cartItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems}
            </span>
          )}
        </div>
        <div className="relative">
          <button 
            id="userMenuButton"
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="cursor-pointer whitespace-nowrap !rounded-button"
          >
            <i className="fas fa-user text-xl text-gray-600"></i>
          </button>
          {isMenuOpen && (
            <div 
              id="userDropdownMenu"
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
            >
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                <i className="fas fa-sign-in-alt mr-2"></i>Se connecter
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                <i className="fas fa-user-plus mr-2"></i>S'inscrire
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                <i className="fas fa-user-circle mr-2"></i>Mon compte
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                <i className="fas fa-history mr-2"></i>Historique des commandes
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                <i className="fas fa-heart mr-2"></i>Liste de souhaits
              </a>
              <div className="border-t border-gray-100 my-1"></div>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                <i className="fas fa-sign-out-alt mr-2"></i>Se deconnecter
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  </header>
  {/* Hero Section */}
  <section className="pt-20 m-0">
    <div className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="absolute inset-0">
        <img
          src="https://public.readdy.ai/ai/img_res/6460576afa36a016e7073af62f57ac57.jpg"
          className="w-full h-full object-cover opacity-50"
          alt="Hero background"
        />
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative h-full flex items-center px-20">
            <div className="max-w-2xl text-white">
              <h2 className="text-6xl font-bold mb-6">Collection Printemps 2025</h2>
              <p className="text-xl mb-8">Découvrez les dernières tendances en mode luxe</p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
                Voir la collection
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  {/* Featured Categories */}
  <section className="max-w-7xl mx-auto px-4 py-20">
    <h2 className="text-4xl font-bold text-center mb-12">Catégories</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {featuredCategories.map((category) => (
        <div key={category.title} className="relative group cursor-pointer overflow-hidden rounded-lg">
          <div className="aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6`}>
            <h3 className="text-white text-2xl font-bold">{category.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
  {/* New Arrivals */}
  <section className="max-w-7xl mx-auto px-4 py-20 bg-gray-50">
    <h2 className="text-4xl font-bold text-center mb-12">Nouveaux arrivages</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {newArrivals.map((product) => (
        <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden group">
          <div className="relative aspect-w-3 aspect-h-4 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelectedProduct(product);
                setIsQuickViewOpen(true);
              }}
              className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all cursor-pointer whitespace-nowrap !rounded-button">
              Quick View
            </button>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-xl text-gray-900">{product.price}</span>
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">
                <i className="fas fa-star"></i>
              </span>
              <span className="text-gray-600">{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  </section>
  {/* Special Offers */}
  <section className="max-w-7xl mx-auto px-4 py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative rounded-lg overflow-hidden">
        <img
          src="https://public.readdy.ai/ai/img_res/584bd671c12420b00d2e6d7a672d2960.jpg"
          alt="Special Offer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
          <h3 className="text-4xl font-bold mb-4">Promotion d'été</h3>
          <p className="text-xl mb-6">Jusqu'à 50 % de réduction sur une sélection d'articles</p>
          <a href="https://readdy.ai/home/df6ccbb7-9c3b-4e11-9011-dd80609b3302/451688ee-9e2c-41db-8ac3-631ebd5632fd" data-readdy="true">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
              Voir la collection
            </button>
          </a>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg p-12 flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold mb-6">Promotion Flash</h3>
        <div className="flex space-x-4 mb-8">
          <div className="bg-white rounded-lg p-4 w-24 text-center">
            <span className="text-3xl font-bold block">{timeLeft.hours}</span>
            <span className="text-gray-500">Heures</span>
          </div>
          <div className="bg-white rounded-lg p-4 w-24 text-center">
            <span className="text-3xl font-bold block">{timeLeft.minutes}</span>
            <span className="text-gray-500">Minutes</span>
          </div>
          <div className="bg-white rounded-lg p-4 w-24 text-center">
            <span className="text-3xl font-bold block">{timeLeft.seconds}</span>
            <span className="text-gray-500">Secondes</span>
          </div>
        </div>
        <div className="w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email for exclusive offers"
            className="w-full px-4 py-3 rounded-full mb-4 border-none text-sm"
          />
          <button className="w-full bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
            S'abonner
          </button>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="bg-gray-900 text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h4 className="text-2xl font-bold mb-6">LUXE</h4>
          <p className="text-gray-400 mb-6">La mode de luxe pour l'individu moderne.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
          <div>
          <h4 className="text-lg font-bold mb-6">Service client</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Contactez-nous</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Informations sur la livraison</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Retours & échanges</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Guide de taille</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6">A propos de nous</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Notre histoire</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Carrières</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Localisateur de magasins</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white cursor-pointer">Sustentabilité</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6">Newsletter</h4>
          <p className="text-gray-400 mb-4">S'abonner pour recevoir des mises à jour, accéder aux offres exclusives et plus encore.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-full mb-4 border-none text-sm"
          />
          <button className="w-full bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
            S'abonner
          </button>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 LUXE. Tous droits réservés.
          </p>
          <div className="flex space-x-4">
            <img src="https://public.readdy.ai/ai/img_res/6169411ac1663614be327bfbbf40e59d.jpg" alt="Visa" className="h-6" />
            <img src="https://public.readdy.ai/ai/img_res/1cd202b2d816660e86cf7edafbcd8bcf.jpg" alt="Mastercard" className="h-6" />
            <img src="https://public.readdy.ai/ai/img_res/db57742fc6adcac064a64b4ffd99f3c6.jpg" alt="American Express" className="h-6" />
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Cart Sidebar */}
  {isCartOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300">
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Panier</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-500 hover:text-gray-700 cursor-pointer whitespace-nowrap !rounded-button"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <div className="flex-grow overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 mb-6 border-b border-gray-200 pb-6">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-grow">
                  <h3 className="font-medium mb-1">{item.name}</h3>
                  <p className="text-gray-600 mb-2">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setCart(cart.map(cartItem =>
                          cartItem.id === item.id && cartItem.quantity > 1
                            ? {...cartItem, quantity: cartItem.quantity - 1}
                            : cartItem
                        ));
                      }}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded cursor-pointer whitespace-nowrap !rounded-button"
                    >
                      <i className="fas fa-minus text-sm"></i>
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => {
                        setCart(cart.map(cartItem =>
                          cartItem.id === item.id
                            ? {...cartItem, quantity: cartItem.quantity + 1}
                            : cartItem
                        ));
                      }}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded cursor-pointer whitespace-nowrap !rounded-button"
                    >
                      <i className="fas fa-plus text-sm"></i>
                    </button>
                    <button
                      onClick={() => {
                        setCart(cart.filter(cartItem => cartItem.id !== item.id));
                      }}
                      className="ml-auto text-red-500 hover:text-red-700 cursor-pointer whitespace-nowrap !rounded-button"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-auto">
            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Subtotal:</span>
              <span>${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full mb-3 px-6 py-3 bg-white border border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap !rounded-button"
            >
              Continuer les achats
            </button>
            <button
              className="w-full px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap !rounded-button"
            >
              Passer au paiement
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
  {/* Back to Top Button */}
  {showBackToTop && (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap !rounded-button"
    >
      <i className="fas fa-arrow-up"></i>
    </button> 
  )}
  {/* Quick View Modal */}
  {isQuickViewOpen && selectedProduct && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full mx-4 relative">
        <button
          onClick={() => setIsQuickViewOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 text-xl cursor-pointer whitespace-nowrap !rounded-button"
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-4">{selectedProduct.name}</h2>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-gray-900 mr-4">{selectedProduct.price}</span>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">
                  <i className="fas fa-star"></i>
                </span>
                <span className="text-gray-600">{selectedProduct.rating}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
            Design luxueux et élégant, confectionné avec des matériaux haut de gamme. Parfait pour toutes les occasions.
            </p>
            <div className="mb-6">
              <h3 className="font-bold mb-3">Taille</h3>
              <div className="flex space-x-3">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center border cursor-pointer whitespace-nowrap !rounded-button ${
                      selectedSize === size
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 hover:border-gray-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-bold mb-3">Color</h3>
              <div className="flex space-x-3">
                {['Black', 'Navy', 'Gray', 'Brown'].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full border cursor-pointer whitespace-nowrap !rounded-button ${
                      selectedColor === color
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 hover:border-gray-900'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
              <button
              onClick={() => {
                setCartItems(prev => prev + 1);
                setIsQuickViewOpen(false);
              }}
              className="w-full bg-gray-900 text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap !rounded-button"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
</div>
);
};
export default App