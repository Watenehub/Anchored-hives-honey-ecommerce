import { Link } from 'react-router-dom'
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartItems } = useCart()
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-honey-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🍯</span>
              </div>
              <span className="text-2xl font-bold text-honey-700">Anchored Hives</span>
            </Link>

            {/* Search bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-honey-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-honey-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button className="hidden md:flex items-center space-x-2 btn-secondary">
                <User className="w-5 h-5" />
                <span>Login</span>
              </button>
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block border-t border-gray-200">
            <ul className="flex space-x-8 py-3">
              <li>
                <Link to="/" className="text-gray-700 hover:text-honey-600 font-medium transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-700 hover:text-honey-600 font-medium transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-honey-600 font-medium transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-honey-600 font-medium transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="block text-gray-700 hover:text-honey-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="block text-gray-700 hover:text-honey-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="block text-gray-700 hover:text-honey-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="block text-gray-700 hover:text-honey-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
                <li>
                  <button className="flex items-center space-x-2 btn-secondary w-full justify-center">
                    <User className="w-5 h-5" />
                    <span>Login</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-honey-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🍯</span>
                </div>
                <span className="text-xl font-bold">Anchored Hives</span>
              </div>
              <p className="text-gray-400 text-sm">
                Premium organic honey products from local beekeepers. Pure, natural, and delicious.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-honey-500 transition-colors">Home</Link></li>
                <li><Link to="/products" className="hover:text-honey-500 transition-colors">Products</Link></li>
                <li><Link to="/about" className="hover:text-honey-500 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-honey-500 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/faq" className="hover:text-honey-500 transition-colors">FAQ</Link></li>
                <li><Link to="/shipping" className="hover:text-honey-500 transition-colors">Shipping Info</Link></li>
                <li><Link to="/returns" className="hover:text-honey-500 transition-colors">Returns</Link></li>
                <li><Link to="/privacy" className="hover:text-honey-500 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📍 123 Honey Lane, Sweet Town</li>
                <li>📞 +254 700 123 456</li>
                <li>✉️ info@anchoredhives.com</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-honey-500 transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-honey-500 transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-honey-500 transition-colors">Instagram</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Anchored Hives Honey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
