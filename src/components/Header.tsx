import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const location = useLocation();
  const { state, dispatch } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Customization', href: '/customization' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/images/logos/logo.png" 
              alt="Eagle Clothing Company"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#DAA520] ${
                  isActive(item.href) ? 'text-[#DAA520]' : 'text-[#1C1C1C]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Cart and CTA */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
              className="relative p-2 text-[#1C1C1C] hover:text-[#DAA520] transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#DAA520] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </button>
            
            <Link
              to="/products"
              onClick={() => window.scrollTo(0, 0)}
              className="hidden sm:inline-flex bg-[#DAA520] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#B8941C] transition-colors"
            >
              Shop Now
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#1C1C1C]"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-[#DAA520] ${
                    isActive(item.href) ? 'text-[#DAA520]' : 'text-[#1C1C1C]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="mx-4 mt-2 bg-[#DAA520] text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-[#B8941C] transition-colors"
              >
                Shop Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;