import React from 'react';
import { Link } from 'react-router-dom';

const MensFashionStore: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm p-4 flex space-x-4">
        <Link to="/" className="text-gray-600 hover:text-pink-600">Home</Link>
        <Link to="/women" className="text-gray-600 hover:text-pink-600">Women</Link>
        <span className="text-pink-600 font-medium">Men</span>
        <Link to="/children" className="text-gray-600 hover:text-pink-600">Children</Link>
        <Link to="/accessories" className="text-gray-600 hover:text-pink-600">Accessories</Link>
      </header>
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Men's Fashion Store</h1>
        <p>Welcome to the Men's Fashion Store. This page is under construction.</p>
      </main>
    </div>
  );
};

export default MensFashionStore;
