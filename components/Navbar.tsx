
import React from 'react';
import { Link } from 'react-router-dom';
import { STORE_INFO } from '../constants';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-black uppercase leading-none group-hover:text-[#ed0000] transition-colors">
                  ASH CELLULAR
                </span>
                <span className="text-[10px] font-bold text-gray-500 tracking-[0.1em] uppercase -mt-0.5">Lebanon PA</span>
              </div>
              <div className="h-8 w-px bg-gray-200"></div>
              <div className="bg-[#ed0000] px-3 py-1.5 rounded-full flex flex-col items-center justify-center shadow-md">
                <span className="text-white font-black text-sm leading-none tracking-tighter italic">total</span>
                <span className="text-[6px] text-white font-medium leading-none tracking-widest uppercase mt-0.5">wireless</span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex space-x-8 text-xs font-black uppercase tracking-[0.2em] text-gray-800">
            <Link to="/phones" className="hover:text-[#ed0000] transition-colors">Phones</Link>
            <Link to="/plans" className="hover:text-[#ed0000] transition-colors">Plans</Link>
            <Link to="/accessories" className="hover:text-[#ed0000] transition-colors">Accessories</Link>
            <Link to="/contact" className="hover:text-[#ed0000] transition-colors">Store</Link>
          </div>

          <div className="flex items-center space-x-6">
            <a href={`tel:${STORE_INFO.phone}`} className="hidden sm:flex items-center space-x-2 text-black font-black text-sm">
              <div className="bg-gray-100 p-2 rounded-full group-hover:bg-red-50 transition-colors">
                <i className="fas fa-phone-alt text-[#ed0000]"></i>
              </div>
              <span>{STORE_INFO.phone}</span>
            </a>
            <Link to="/cart" className="relative p-2 text-gray-900 hover:text-[#ed0000] transition-colors">
              <i className="fas fa-shopping-bag text-xl"></i>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ed0000] text-white text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
