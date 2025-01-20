import React, { useState } from 'react';
import { Menu, X, Ruler, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Ruler className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">AutoCAD Drafting Services</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#portfolio" className="text-gray-600 hover:text-blue-600">Portfolio</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About Us</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Services</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Portfolio</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600">About Us</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;