import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('description');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);
  const [showZoomModal, setShowZoomModal] = useState<boolean>(false);
  const [zoomedImage, setZoomedImage] = useState<string>('');
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

  const product = {
    id: 1,
    name: 'Robe d\'été à imprimé floral',
    price: 89.99,
    colors: [
      { name: 'Pink', code: '#FFC0CB' },
      { name: 'Blue', code: '#87CEEB' }
    ],
    sizes: ['2Y', '3Y', '4Y', '5Y', '6Y'],
    description: 'A beautiful floral print summer dress perfect for special occasions. Made with premium cotton blend fabric for maximum comfort and style.',
    fabric: '95% Cotton, 5% Elastane',
    care: ['Lavage en machine à froid', 'Ne pas bleacher', 'séchage en machine à basse température', 'Pressage à basse température'],
    images: [
      'https://public.readdy.ai/ai/img_res/1fcdfcfb884c6af024833a5ce1f4ece4.jpg',
      'https://public.readdy.ai/ai/img_res/993918a1b9468b4dea72c79acc535721.jpg',
      'https://public.readdy.ai/ai/img_res/e485f376ebe43c7c140d62fa9226779b.jpg',
      'https://public.readdy.ai/ai/img_res/27170ed3b4f7369a59931d75af2d630b.jpg'
    ]
  };

  const relatedProducts = [
    {
      id: 2,
      name: 'Robe d\'été à imprimé papillon',
      price: 79.99,
      image: 'https://public.readdy.ai/ai/img_res/a4056323614a93e3a1f32827d1c72a2e.jpg'
    },
    {
      id: 3,
      name: 'Robe d\'été à imprimé fleuri',
      price: 45.99,
      image: 'https://public.readdy.ai/ai/img_res/c1e21600c690676f2cbe83b2af4378a7.jpg'
    },
    {
      id: 4,
      name: 'Robe d\'été à imprimé dentelle',
      price: 99.99,
      image: 'https://public.readdy.ai/ai/img_res/55dd7296bc84b51c9497cf06395866c3.jpg'
    },
    {
      id: 5,
      name: 'Robe d\'été à manches roulées',
      price: 69.99,
      image: 'https://public.readdy.ai/ai/img_res/5debab33bd01b0154c850fc75fb9831a.jpg'
    }
  ];

  const reviews = [
    {
      id: 1,
      author: 'Isabella Thompson',
      rating: 5,
      date: '2025-03-15',
      comment: 'Robe magnifique! La qualité est excellente et ma fille l\'aime beaucoup. Le guide de taille était très utile.',
      verified: true
    },
    {
      id: 2,
      author: 'Charlotte Wilson',
      rating: 4,
      date: '2025-03-10',
      comment: 'Robe magnifique, la taille est parfaite. Le tissu est doux et confortable. Je recommanderais certainement.',
      verified: true
    }
  ];

  React.useEffect(() => {
    const chartDom = document.getElementById('sizeChart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        title: {
          text: 'Size Distribution',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: 'Size Orders',
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
              { value: 35, name: '2-3Y' },
              { value: 30, name: '4-5Y' },
              { value: 25, name: '6-7Y' },
              { value: 10, name: '8Y+' }
            ]
          }
        ]
      };
      myChart.setOption(option);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" data-readdy="true" className="text-2xl font-bold text-gray-900">LUXE</Link>
              <nav className="hidden md:flex space-x-6">
                <Link to="/" data-readdy="true" className="text-gray-600 hover:text-gray-900">Accueil</Link>
                <button className="text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap !rounded-button">Femmes</button>
                <button className="text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap !rounded-button">Hommes</button>
                <button className="text-gray-900 font-medium cursor-pointer whitespace-nowrap !rounded-button">Enfants</button>
              </nav>
            </div>
            <div className="flex items-center space-x-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search kids' fashion..."
                  className="w-48 pl-10 pr-4 py-2 border-none rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-sm"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
              </div>
              <button className="text-gray-600 cursor-pointer whitespace-nowrap !rounded-button">
                <i className="fas fa-shopping-bag text-xl"></i>
              </button>
              <button className="text-gray-600 cursor-pointer whitespace-nowrap !rounded-button">
                <i className="fas fa-user text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" data-readdy="true" className="text-gray-600 hover:text-gray-900">Accueil</Link>
            <i className="fas fa-chevron-right text-gray-400 text-xs"></i>
            <Link to="/Children" data-readdy="true" className="text-gray-600 hover:text-gray-900">Enfants</Link>
            <i className="fas fa-chevron-right text-gray-400 text-xs"></i>
            <Link to="/kids-product-details/:id" data-readdy="true" className="text-gray-600 hover:text-gray-900">Vêtements</Link>
            <i className="fas fa-chevron-right text-gray-400 text-xs"></i>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation
                className="rounded-lg overflow-hidden aspect-w-3 aspect-h-4"
              >
                {product.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => {
                        setZoomedImage(image);
                        setShowZoomModal(true);
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer whitespace-nowrap !rounded-button"
              >
                <i className={`${isWishlisted ? 'fas' : 'far'} fa-heart text-red-500`}></i>
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-2xl text-gray-900 mt-2">${product.price}</p>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-900">Taille</h3>
                  <button
                    onClick={() => setShowSizeGuide(true)}
                    className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer whitespace-nowrap !rounded-button"
                  >
                    Guide de Taille
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium cursor-pointer whitespace-nowrap !rounded-button ${
                        selectedSize === size
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
                <h3 className="text-sm font-medium text-gray-900 mb-3">Couleur</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full cursor-pointer ${
                        selectedColor === color.name ? 'ring-2 ring-gray-900 ring-offset-2' : ''
                      }`}
                      style={{ backgroundColor: color.code }}
                      title={color.name}
                    ></button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quantité</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer whitespace-nowrap !rounded-button"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <span className="text-gray-900 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer whitespace-nowrap !rounded-button"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 cursor-pointer whitespace-nowrap !rounded-button">
                  Ajouter au panier
                </button>
                <button className="bg-pink-500 text-white px-8 py-4 rounded-full font-medium hover:bg-pink-600 cursor-pointer whitespace-nowrap !rounded-button">
                  Achat immédiat
                </button>
              </div>
            </div>

            {/* Product Tabs */}
            <div className="border-t pt-8">
              <div className="flex space-x-8 border-b">
                {['description', 'fabric', 'expédition', 'avis'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`pb-4 text-sm font-medium cursor-pointer whitespace-nowrap !rounded-button ${
                      selectedTab === tab
                        ? 'text-gray-900 border-b-2 border-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="py-6">
                {selectedTab === 'description' && (
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                )}

                {selectedTab === 'fabric' && (
                  <div className="space-y-4">
                    <p className="text-gray-600">Composition: {product.fabric}</p>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Instructions de soins:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {product.care.map((instruction, index) => (
                          <li key={index}>{instruction}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {selectedTab === 'expédition' && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <i className="fas fa-truck"></i>
                      <span>Expédition gratuite sur les commandes supérieures à 100$</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <i className="fas fa-box"></i>
                      <span>Politique de retour sur 30 jours</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <i className="fas fa-globe"></i>
                      <span>Expédition internationale disponible</span>
                    </div>
                  </div>
                )}

                {selectedTab === 'avis' && (
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b pb-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-gray-900">{review.author}</span>
                            {review.verified && (
                              <span className="text-green-500 text-sm">
                                <i className="fas fa-check-circle"></i> Achat vérifié
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, index) => (
                            <i
                              key={index}
                              className={`${
                                index < review.rating ? 'fas' : 'far'
                              } fa-star text-yellow-400`}
                            ></i>
                          ))}
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Vous aimerez aussi</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {relatedProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-w-3 aspect-h-4 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mt-1">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg max-w-3xl w-full mx-4 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Guide de Taille</h2>
              <button
                onClick={() => setShowSizeGuide(false)}
                className="text-gray-500 hover:text-gray-700 cursor-pointer whitespace-nowrap !rounded-button"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-left">Taille</th>
                        <th className="px-4 py-2 text-left">Age</th>
                        <th className="px-4 py-2 text-left">Hauteur (cm)</th>
                        <th className="px-4 py-2 text-left">Cuisse (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2">2Y</td>
                        <td className="px-4 py-2">2 ans</td>
                        <td className="px-4 py-2">92</td>
                        <td className="px-4 py-2">53</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2">3Y</td>
                        <td className="px-4 py-2">3 ans</td>
                        <td className="px-4 py-2">98</td>
                        <td className="px-4 py-2">55</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2">4Y</td>
                        <td className="px-4 py-2">4 ans</td>
                        <td className="px-4 py-2">104</td>
                        <td className="px-4 py-2">57</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2">5Y</td>
                        <td className="px-4 py-2">5 ans</td>
                        <td className="px-4 py-2">110</td>
                        <td className="px-4 py-2">59</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">6Y</td>
                        <td className="px-4 py-2">6 ans</td>
                        <td className="px-4 py-2">116</td>
                        <td className="px-4 py-2">61</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <div id="sizeChart" className="w-full h-64"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Zoom Modal */}
      {showZoomModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowZoomModal(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 cursor-pointer whitespace-nowrap !rounded-button"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
          <img
            src={zoomedImage}
            alt="Zoomed product view"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">À propos de LUXE Kids</h3>
              <p className="text-gray-400">Découvrez la mode de luxe pour vos petits-enfants.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Service client</h3>
              <ul className="space-y-2">
                <li><button className="text-gray-400 hover:text-white cursor-pointer whitespace-nowrap !rounded-button">Contactez-nous</button></li>
                <li><button className="text-gray-400 hover:text-white cursor-pointer whitespace-nowrap !rounded-button">Politique de livraison</button></li>
                <li><button className="text-gray-400 hover:text-white cursor-pointer whitespace-nowrap !rounded-button">Retours</button></li>
                <li><button className="text-gray-400 hover:text-white cursor-pointer whitespace-nowrap !rounded-button">FAQs</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white cursor-pointer whitespace-nowrap !rounded-button">
                  <i className="fab fa-instagram text-xl"></i>
                </button>
                <button className="text-gray-400 hover:text-white cursor-pointer whitespace-nowrap !rounded-button">
                  <i className="fab fa-facebook text-xl"></i>
                </button>
                <button className="text-gray-400 hover:text-white cursor-pointer whitespace-nowrap !rounded-button">
                  <i className="fab fa-pinterest text-xl"></i>
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 rounded-l-full text-gray-900 border-none"
                />
                <button className="bg-white text-gray-900 px-6 py-2 rounded-r-full font-medium hover:bg-gray-100 cursor-pointer whitespace-nowrap !rounded-button">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LUXE Kids. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

