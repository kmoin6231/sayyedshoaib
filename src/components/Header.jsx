import React from 'react';
import { FaSnowflake } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-neumorph mr-3">
              <FaSnowflake className="text-blue-500 text-xl" />
            </div>
            <div>
              <div className="font-bold text-xl text-gray-800">Cool Air Repairs</div>
              <div className="text-xs text-blue-500">Premium AC Services</div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-500 transition-colors">Home</a>
            <a href="/services" className="text-gray-600 hover:text-blue-500 transition-colors">Services</a>
            <a href="/about" className="text-gray-600 hover:text-blue-500 transition-colors">About</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</a>
          </nav>
          
          {/* Mobile menu button - simplified */}
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
