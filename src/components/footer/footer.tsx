// src/components/Footer.jsx

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0D1117] text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">LUXE</h2>
          <p className="mb-6">Luxury fashion for the modern individual.</p>
          <div className="flex space-x-4">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Shipping Information</a></li>
            <li><a href="#" className="hover:text-white">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-white">Size Guide</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Our Story</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Store Locator</a></li>
            <li><a href="#" className="hover:text-white">Sustainability</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <div className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#161B22] text-white rounded-full px-4 py-2 w-full mb-4 sm:mb-0 sm:mr-2 focus:outline-none"
            />
            <button className="bg-white text-black rounded-full px-6 py-2 hover:bg-gray-200">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-sm">
        <p>© 2025 LUXE. All rights reserved.</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {/* Placeholder for payment icons */}
          <div className="w-10 h-6 bg-gray-600 rounded" />
          <div className="w-10 h-6 bg-gray-600 rounded" />
          <div className="w-10 h-6 bg-gray-600 rounded" />
        </div>
        <button className="bg-[#161B22] p-2 rounded-full ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
