import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Boucle from '../assets/images/accessoires/boucle.webp';
import Necklace from '../assets/images/accessoires/Silk Scarf.jpg';
import Scarf from '../assets/images/accessoires/tote.webp';
import Watch from '../assets/images/accessoires/Classic Wrist Watch.jpg';
import Hero from '../assets/images/accessoires/hero.webp';


const AccessoriesFashionStore: React.FC = () => {
  const navigate = useNavigate();

  // Sample product data for accessories
  const [products] = useState([
    {
      id: 1,
      name: "Boucle d'oreille",
      price: 249.99,
      rating: 4.7,
      image: Boucle,
      colors: ["Black", "Brown", "Beige"],
      sizes: [],
      category: "Accessoires",
      isNew: true,
      isBestseller: true
    },
    {
      id: 2,
      name: "Anneau d'oreille",
      price: 199.99,
      rating: 4.9,
      image: Hero,
      colors: ["Gold"],
      sizes: [],
      category: "Accessoires",
      isNew: true,
      isBestseller: false
    },
    {
      id: 3,
      name: "Montre",
      price: 349.99,
      rating: 4.8,
      image: Watch,
      colors: ["Black", "Silver"],
      sizes: [],
      category: "Accessoires",
      isNew: false,
      isBestseller: true
    },
    {
      id: 4,
      name: "Sac à main",
      price: 79.99,
      rating: 4.5,
      image: Necklace,
      colors: ["Red", "Blue", "Pink"],
      sizes: [],
      category: "Accessoires",
      isNew: false,
      isBestseller: false
    },
    {
      id: 5,
      name: "Sac à main",
      price: 79.99,
      rating: 4.5,
      image: Scarf,
      colors: ["Red", "Blue", "Pink"],
      sizes: [],
      category: "Accessoires",
      isNew: false,
      isBestseller: false
    },
    {
      id: 6,
      name: "Sac à main",
      price: 79.99,
      rating: 4.5,
      image: Scarf,
      colors: ["Red", "Blue", "Pink"],
      sizes: [],
      category: "Accessoires",
      isNew: false,
      isBestseller: false
    },
    {
      id: 7,
      name: "Sac à main",
      price: 79.99,
      rating: 4.5,
      image: Scarf,
      colors: ["Red", "Blue", "Pink"],
      sizes: [],
      category: "Accessoires",
      isNew: false,
      isBestseller: false
    },
    {
      id: 8,
      name: "Sac à main",
      price: 79.99,
      rating: 4.5,
      image: Scarf,
      colors: ["Red", "Blue", "Pink"],
      sizes: [],
      category: "Accessoires",
      isNew: false,
      isBestseller: false 
    },
    {
      id: 9,
      name: "Sac à main",
      price: 79.99,
      rating: 4.5,
      image: Scarf,
      colors: ["Red", "Blue", "Pink"],
      sizes: [],
      category: "Accessoires",
      isNew: false,
      isBestseller: false 
    },
    {
      id: 10,
      name: "Sac à main",
      price: 79.99,
      rating: 4.5,
      image: Scarf,
      colors: ["Red", "Blue", "Pink"],
      sizes: [],
      category: "Accessoires",
      isNew: false,
      isBestseller: false 
    }
  ]);

  // Filter and sort states
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [colorFilter, setColorFilter] = useState("All");
  const [sortOption, setSortOption] = useState("Newest");
  const [isLoading, setIsLoading] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");

  // Available filters
  const categories = ["All", "Accessoires"];
  const colors = ["All", "Black", "Brown", "Beige", "Gold", "Silver", "Red", "Blue", "Pink"];
  const sortOptions = ["Newest", "Price High-Low", "Price Low-High", "Bestselling"];

  // Apply filters and sorting
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      let result = [...products];
      if (categoryFilter !== "All") {
        result = result.filter(product => product.category === categoryFilter);
      }
      if (colorFilter !== "All") {
        result = result.filter(product => product.colors.includes(colorFilter));
      }
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
  }, [categoryFilter, colorFilter, sortOption, products]);

  // Clear filters
  const clearAllFilters = () => {
    setCategoryFilter("All");
    setColorFilter("All");
    setSortOption("Newest");
  };

  // Quick view modal handlers
  const openQuickView = (product: any) => {
    setSelectedProduct(product);
    setSelectedColor(product.colors[0] || "");
    setQuantity(1);
    setQuickViewOpen(true);
  };
  const closeQuickView = () => {
    setQuickViewOpen(false);
    setSelectedProduct(null);
  };
  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  // Back to top button state
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-gray-800 cursor-pointer">
            LUXE<span className="text-pink-600">NOVA</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-pink-600 transition whitespace-nowrap rounded-button">Accueil</Link>
            <Link to="/women" className="text-gray-600 hover:text-pink-600 transition whitespace-nowrap rounded-button">Femmes</Link>
            <Link to="/men" className="text-gray-600 hover:text-pink-600 transition whitespace-nowrap rounded-button">Hommes</Link>
            <Link to="/children" className="text-gray-600 hover:text-pink-600 transition whitespace-nowrap rounded-button">Enfants</Link>
            <span className="text-pink-600 font-medium whitespace-nowrap rounded-button cursor-default">Accessoires</span>
          </nav>
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
                    {/* Cart items sample */}
                    <div className="flex items-center space-x-3">
                      <img src={products[0].image} alt={products[0].name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{products[0].name}</h4>
                        <p className="text-sm text-gray-500">Color: {products[0].colors[0]}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-sm font-medium text-gray-900">${products[0].price.toFixed(2)}</span>
                          <span className="text-sm text-gray-500">Qty: 1</span>
                        </div>
                      </div>
                    </div>
                    {/* Additional cart items can be added similarly */}
                  </div>
                  <div className="border-t border-gray-200 mt-4 pt-4">
                    <div className="flex items-center justify-between text-sm font-medium text-gray-900">
                      <span>Subtotal</span>
                      <span>${products[0].price.toFixed(2)}</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <button className="w-full bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition rounded-button">Voir le panier</button>
                      <button className="w-full bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition rounded-button">Vérifier</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <i className="fas fa-user text-gray-700 text-xl cursor-pointer"></i>
          </div>
        </div>
      </header>

      {/* Category Banner */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url('https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_2/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/95000-1336_01.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-2">Collection d'accessoires</h2>
          <p className="mb-4 max-w-xl">Explore notre collection exclusive d'accessoires de luxe, y compris des sacs, des bijoux, des montres et plus encore.</p>
          <button onClick={() => navigate('/accessories')} className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded transition rounded-button">Voir maintenant</button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-200 py-4 sticky top-16 z-20">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between space-y-2 md:space-y-0">
          <button onClick={() => navigate(-1)} className="text-pink-600 hover:text-pink-700 font-medium whitespace-nowrap rounded-button">← Back</button>
          <div className="flex flex-wrap space-x-4">
            {/* Category Dropdown */}
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500">
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            {/* Color Dropdown */}
            <select value={colorFilter} onChange={(e) => setColorFilter(e.target.value)} className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500">
              {colors.map(color => <option key={color} value={color}>{color}</option>)}
            </select>
            {/* Sort Dropdown */}
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500">
              {sortOptions.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
            <button onClick={clearAllFilters} className="text-pink-600 hover:text-pink-700 font-medium rounded-button">Clear All</button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">Nouveau</span>
                  )}
                  {product.isBestseller && (
                    <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">Meilleure vente</span>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openQuickView(product)}
                      className="bg-white text-gray-800 px-4 py-2 rounded-md font-medium hover:bg-pink-600 hover:text-white transition transform -translate-y-4 group-hover:translate-y-0 duration-300 whitespace-nowrap rounded-button"
                    >
                      Vue rapide
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
                  <button className="mt-3 w-full bg-gray-800 hover:bg-pink-600 text-white py-2 rounded-md transition whitespace-nowrap rounded-button">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-pink-600 mb-4">
              <i className="fas fa-search text-6xl"></i>
            </div>
            <h3 className="text-2xl font-medium text-gray-800 mb-2">Aucun produit trouvé</h3>
            <p className="text-gray-600 mb-6">Essayez de supprimer certains filtres ou de modifier vos critères de recherche.</p>
            <button
              onClick={clearAllFilters}
              className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition whitespace-nowrap rounded-button"
            >
              Tous les filtres
            </button>
          </div>
        )}
      </main>

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
                  <span className="sr-only">Fermer</span>
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
                    <span className="text-gray-500 text-sm ml-1">{selectedProduct.rating} étoiles</span>
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
                          className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-pink-600' : 'border-transparent'} focus:outline-none rounded-button`}
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
                  <div className="mt-8 space-y-3">
                    <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition rounded-button">
                      Ajouter au panier
                    </button>
                    <button className="w-full bg-pink-600 text-white py-3 px-6 rounded-md hover:bg-pink-700 transition rounded-button">
                      Achat immédiat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition rounded-button"
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">LUXE<span className="text-pink-500">NOVA</span></h3>
              <p className="text-gray-400 text-sm">
                Découvrez les dernières tendances en accessoires de luxe et explorez notre collection exclusive.
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
              <h3 className="text-lg font-bold mb-4">Magasin</h3>
              <ul className="space-y-2">
                <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Nouveaux arrivages</a></li>
                <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Meilleures ventes</a></li>
                <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Promotions</a></li>
                <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Collections</a></li>
                <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Lookbook</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Aide</h3>
              <ul className="space-y-2">
                <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Service client</a></li>
                <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Livraison & Retours</a></li>
                <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Guide de taille</a></li>
                <li><a className="text-gray-400 hover:text-white transition cursor-pointer">FAQs</a></li>
                <li><a className="text-gray-400 hover:text-white transition cursor-pointer">Contactez-nous</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Souscrire</h3>
              <p className="text-gray-400 text-sm mb-4">
                Abonnez-vous à notre newsletter pour recevoir des mises à jour et des offres exclusives.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="px-4 py-2 w-full rounded-l-md border-none focus:outline-none text-gray-900 text-sm"
                />
                <button className="bg-pink-600 text-white px-4 py-2 rounded-r-md hover:bg-pink-700 transition rounded-button">
                  S'abonner
                </button>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-bold mb-2">Méthodes de paiement</h4>
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
            <p>&copy; 2025 FashionNova. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AccessoriesFashionStore;
