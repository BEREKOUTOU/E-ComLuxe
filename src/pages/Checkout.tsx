import React, { useState } from 'react';

const App: React.FC = () => {
  const [shippingExpanded, setShippingExpanded] = useState(true);
  const [shippingMethodExpanded, setShippingMethodExpanded] = useState(false);
  const [paymentExpanded, setPaymentExpanded] = useState(false);
  
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [sameAsBilling, setSameAsBilling] = useState(true);
  const [saveAddress, setSaveAddress] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: 'Minimalist Leather Watch',
      price: 129.99,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=Elegant%20minimalist%20leather%20watch%20with%20silver%20case%20and%20brown%20leather%20strap%20on%20a%20clean%20white%20background%2C%20product%20photography%20with%20soft%20shadows%2C%20luxury%20timepiece%2C%20professional%20product%20shot%20with%20neutral%20background&width=100&height=100&seq=1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Premium Wool Coat',
      price: 249.99,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=Luxurious%20premium%20wool%20coat%20in%20camel%20color%20displayed%20on%20a%20clean%20white%20background%2C%20high-end%20fashion%20product%20photography%20with%20soft%20shadows%2C%20elegant%20outerwear%2C%20professional%20studio%20lighting%20with%20neutral%20background&width=100&height=100&seq=2&orientation=squarish'
    },
    {
      id: 3,
      name: 'Designer Sunglasses',
      price: 179.99,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=Designer%20sunglasses%20with%20gold%20metal%20frame%20and%20dark%20lenses%20on%20a%20clean%20white%20background%2C%20luxury%20eyewear%20product%20photography%20with%20soft%20shadows%2C%20high-end%20accessory%2C%20professional%20product%20shot%20with%20neutral%20background&width=100&height=100&seq=3&orientation=squarish'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = shippingMethod === 'standard' ? 5.99 : shippingMethod === 'express' ? 12.99 : 24.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleSectionToggle = (section: string) => {
    if (section === 'shipping') {
      setShippingExpanded(!shippingExpanded);
      if (!shippingExpanded) {
        setShippingMethodExpanded(false);
        setPaymentExpanded(false);
      }
    } else if (section === 'shippingMethod') {
      setShippingMethodExpanded(!shippingMethodExpanded);
      if (!shippingMethodExpanded) {
        setPaymentExpanded(false);
      }
    } else if (section === 'payment') {
      setPaymentExpanded(!paymentExpanded);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a 
            href="https://readdy.ai/home/df6ccbb7-9c3b-4e11-9011-dd80609b3302/238366c2-99b8-4f69-865b-3e3f085d725f" 
            data-readdy="true"
            className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            <span>Back to Cart</span>
          </a>
          <div className="text-center flex-1">
            <h1 className="text-2xl font-bold tracking-wider text-gray-900">LUXE</h1>
          </div>
          <div className="w-24"></div> {/* Placeholder for balance */}
        </div>
        
        {/* Checkout Progress */}
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 border-t">
          <div className="flex justify-center">
            <div className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-shopping-cart text-sm"></i>
                </div>
                <span className="text-xs mt-1 font-medium">Cart</span>
              </div>
              <div className="w-12 h-1 bg-indigo-600 mx-1"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                  <i className="fas fa-credit-card text-sm"></i>
                </div>
                <span className="text-xs mt-1 font-medium">Vérifier</span>
              </div>
              <div className="w-12 h-1 bg-gray-300 mx-1"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <span className="text-xs mt-1 text-gray-500">Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Checkout Form */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Checkout</h2>
            
            {/* Shipping Address Section */}
            <div className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
              <div 
                className="px-6 py-4 border-b flex justify-between items-center cursor-pointer"
                onClick={() => handleSectionToggle('shipping')}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Adresse de livraison</h3>
                </div>
                <i className={`fas ${shippingExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-500`}></i>
              </div>
              
              {shippingExpanded && (
                <div className="px-6 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Adresse Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Nom de famille</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                      <input 
                        type="text" 
                        id="address" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                      <input 
                        type="text" 
                        id="city" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">Département</label>
                      <div className="relative">
                        <select 
                          id="state" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
                        >
                          <option value="">Select State</option>
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                          <option value="CA">California</option>
                          <option value="NY">New York</option>
                          <option value="TX">Texas</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <i className="fas fa-chevron-down text-xs"></i>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">Code Postal</label>
                      <input 
                        type="text" 
                        id="zip" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        checked={saveAddress}
                        onChange={() => setSaveAddress(!saveAddress)}
                      />
                      <span className="ml-2 text-sm text-gray-600">Save this address for future orders</span>
                    </label>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button 
                      type="button" 
                      className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer"
                      onClick={() => {
                        setShippingExpanded(false);
                        setShippingMethodExpanded(true);
                      }}
                    >
                      Continue to Shipping
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Shipping Method Section */}
            <div className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
              <div 
                className="px-6 py-4 border-b flex justify-between items-center cursor-pointer"
                onClick={() => handleSectionToggle('shippingMethod')}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Méthode de livraison</h3>
                </div>
                <i className={`fas ${shippingMethodExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-500`}></i>
              </div>
              
              {shippingMethodExpanded && (
                <div className="px-6 py-4">
                  <div className="space-y-4">
                    <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50">
                      <input 
                        type="radio" 
                        name="shipping" 
                        value="standard"
                        checked={shippingMethod === 'standard'}
                        onChange={() => setShippingMethod('standard')}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-900">Livraison standard</span>
                          <span className="text-sm font-medium text-gray-900">$5.99</span>
                        </div>
                        <p className="text-sm text-gray-500">Livraison en 5-7 jours ouvrables</p>
                      </div>
                    </label>
                    
                    <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50">
                      <input 
                        type="radio" 
                        name="shipping" 
                        value="express"
                        checked={shippingMethod === 'express'}
                        onChange={() => setShippingMethod('express')}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-900">Livraison express</span>
                          <span className="text-sm font-medium text-gray-900">$12.99</span>
                        </div>
                        <p className="text-sm text-gray-500">Livraison en 2-3 jours ouvrables</p>
                      </div>
                    </label>
                    
                    <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50">
                      <input 
                        type="radio" 
                        name="shipping" 
                        value="nextDay"
                        checked={shippingMethod === 'nextDay'}
                        onChange={() => setShippingMethod('nextDay')}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-900">Livraison le lendemain</span>
                          <span className="text-sm font-medium text-gray-900">$24.99</span>
                        </div>
                        <p className="text-sm text-gray-500">Commandez avant 14h pour une livraison le lendemain</p>
                      </div>
                    </label>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button 
                      type="button" 
                      className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer"
                      onClick={() => {
                        setShippingMethodExpanded(false);
                        setPaymentExpanded(true);
                      }}
                    >
                      Continuer au paiement
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Payment Information Section */}
            <div className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
              <div 
                className="px-6 py-4 border-b flex justify-between items-center cursor-pointer"
                onClick={() => handleSectionToggle('payment')}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Informations de paiement</h3>
                </div>
                <i className={`fas ${paymentExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-500`}></i>
              </div>
              
              {paymentExpanded && (
                <div className="px-6 py-4">
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <h4 className="text-sm font-medium text-gray-900">Méthode de paiement</h4>
                      <div className="ml-auto flex items-center space-x-2">
                        <i className="fab fa-cc-visa text-2xl text-blue-700"></i>
                        <i className="fab fa-cc-mastercard text-2xl text-red-500"></i>
                        <i className="fab fa-cc-amex text-2xl text-blue-500"></i>
                        <i className="fab fa-cc-discover text-2xl text-orange-500"></i>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Numéro de carte</label>
                        <div className="relative">
                          <input 
                            type="text" 
                            id="cardNumber" 
                            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="1234 5678 9012 3456"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <i className="fas fa-credit-card text-gray-400"></i>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">Nom sur la carte</label>
                        <input 
                          type="text" 
                          id="cardName" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expDate" className="block text-sm font-medium text-gray-700 mb-1">Date d'expiration</label>
                          <input 
                            type="text" 
                            id="expDate" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="MM/YY"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                          <div className="relative">
                            <input 
                              type="text" 
                              id="cvv" 
                              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                              placeholder="123"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                              <i className="fas fa-question-circle text-gray-400"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <label className="flex items-center mb-4">
                      <input 
                        type="checkbox" 
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        checked={sameAsBilling}
                        onChange={() => setSameAsBilling(!sameAsBilling)}
                      />
                      <span className="ml-2 text-sm text-gray-600">Adresse de facturation est la même que l'adresse de livraison</span>
                    </label>
                    
                    {!sameAsBilling && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="md:col-span-2">
                          <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700 mb-1">Adresse de facturation</label>
                          <input 
                            type="text" 
                            id="billingAddress" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="billingCity" className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                          <input 
                            type="text" 
                            id="billingCity" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="billingState" className="block text-sm font-medium text-gray-700 mb-1">Département</label>
                          <div className="relative">
                            <select 
                              id="billingState" 
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
                            >
                              <option value="">Département</option>
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                              <option value="CA">California</option>
                              <option value="NY">New York</option>
                              <option value="TX">Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <i className="fas fa-chevron-down text-xs"></i>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="billingZip" className="block text-sm font-medium text-gray-700 mb-1">Code postal</label>
                          <input 
                            type="text" 
                            id="billingZip" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="fas fa-lock text-green-600 mr-2"></i>
                      <span className="text-sm text-gray-600">Traitement sécurisé des paiements</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-6">
              <div className="px-6 py-4 border-b">
                <h3 className="text-lg font-medium text-gray-900">Résumé de la commande</h3>
              </div>
              
              <div className="px-6 py-4">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                        <div className="flex justify-between mt-1">
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                          <p className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between py-2">
                    <span className="text-sm text-gray-600">Sous-total</span>
                    <span className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-sm text-gray-600">Livraison</span>
                    <span className="text-sm font-medium text-gray-900">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-sm text-gray-600">Taxe (8%)</span>
                    <span className="text-sm font-medium text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-3 border-t border-b">
                    <span className="text-base font-medium text-gray-900">Total</span>
                    <span className="text-base font-bold text-gray-900">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button 
                    type="button" 
                    className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Passer à la caisse
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-4">
                    En passant votre commande, vous acceptez nos <a href="#" className="text-indigo-600 hover:text-indigo-500">Conditions d'utilisation</a> et <a href="#" className="text-indigo-600 hover:text-indigo-500">Politique de confidentialité</a>.
                  </p>
                </div>
                
                <div className="mt-6 flex items-center justify-center space-x-4">
                  <i className="fab fa-cc-visa text-2xl text-blue-700"></i>
                  <i className="fab fa-cc-mastercard text-2xl text-red-500"></i>
                  <i className="fab fa-cc-amex text-2xl text-blue-500"></i>
                  <i className="fab fa-cc-discover text-2xl text-orange-500"></i>
                  <i className="fab fa-cc-paypal text-2xl text-blue-800"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold tracking-wider text-gray-900">LUXE</h2>
              <p className="text-sm text-gray-600 mt-1">© 2025 LUXE. Tous droits réservés.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div className="mt-8 border-t pt-8">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Conditions d'utilisation</a>
              <a href="#" className="hover:text-gray-900">Politique de confidentialité</a>
              <a href="#" className="hover:text-gray-900">Politique de livraison</a>
              <a href="#" className="hover:text-gray-900">Retours & Remboursements</a>
              <a href="#" className="hover:text-gray-900">FAQ</a>
              <a href="#" className="hover:text-gray-900">Contactez-nous</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

