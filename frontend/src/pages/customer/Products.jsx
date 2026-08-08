import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Filter, ChevronDown } from 'lucide-react'

const allProducts = [
  {
    id: 1,
    name: 'Pure Organic Honey',
    price: 2500,
    image: '🍯',
    rating: 4.8,
    category: 'Raw Honey',
    description: 'Pure, unprocessed honey from local beekeepers.',
    stock: 50
  },
  {
    id: 2,
    name: 'Wildflower Honey',
    price: 2200,
    image: '🌸',
    rating: 4.7,
    category: 'Raw Honey',
    description: 'Delicious honey from wildflower blossoms.',
    stock: 35
  },
  {
    id: 3,
    name: 'Manuka Honey',
    price: 4500,
    image: '🐝',
    rating: 4.9,
    category: 'Specialty',
    description: 'Premium Manuka honey with unique health benefits.',
    stock: 20
  },
  {
    id: 4,
    name: 'Clover Honey',
    price: 2000,
    image: '🌼',
    rating: 4.6,
    category: 'Raw Honey',
    description: 'Sweet and mild honey from clover flowers.',
    stock: 45
  },
  {
    id: 5,
    name: 'Acacia Honey',
    price: 2800,
    image: '🌳',
    rating: 4.5,
    category: 'Raw Honey',
    description: 'Light and delicate honey from acacia blossoms.',
    stock: 30
  },
  {
    id: 6,
    name: 'Buckwheat Honey',
    price: 3200,
    image: '🌾',
    rating: 4.4,
    category: 'Specialty',
    description: 'Dark, robust honey with a rich flavor.',
    stock: 25
  },
  {
    id: 7,
    name: 'Eucalyptus Honey',
    price: 2400,
    image: '🍃',
    rating: 4.6,
    category: 'Raw Honey',
    description: 'Distinctive honey with a hint of eucalyptus.',
    stock: 40
  },
  {
    id: 8,
    name: 'Lavender Honey',
    price: 3500,
    image: '💜',
    rating: 4.8,
    category: 'Specialty',
    description: 'Aromatic honey from lavender fields.',
    stock: 15
  },
  {
    id: 9,
    name: 'Orange Blossom Honey',
    price: 2600,
    image: '🍊',
    rating: 4.7,
    category: 'Raw Honey',
    description: 'Citrus-infused honey with a light flavor.',
    stock: 38
  },
  {
    id: 10,
    name: 'Comb Honey',
    price: 4000,
    image: '🧊',
    rating: 4.9,
    category: 'Specialty',
    description: 'Honey in its natural comb, pure and unprocessed.',
    stock: 18
  },
  {
    id: 11,
    name: 'Creamed Honey',
    price: 2300,
    image: '🥄',
    rating: 4.5,
    category: 'Raw Honey',
    description: 'Smooth, spreadable honey perfect for toast.',
    stock: 42
  },
  {
    id: 12,
    name: 'Royal Jelly',
    price: 5500,
    image: '👑',
    rating: 4.8,
    category: 'Specialty',
    description: 'Premium royal jelly with exceptional health benefits.',
    stock: 12
  }
]

const categories = ['All', 'Raw Honey', 'Specialty']

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')
  const [priceRange, setPriceRange] = useState('all')

  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory
    
    let priceMatch = true
    if (priceRange === 'low') {
      priceMatch = product.price <= 2500
    } else if (priceRange === 'medium') {
      priceMatch = product.price > 2500 && product.price <= 4000
    } else if (priceRange === 'high') {
      priceMatch = product.price > 4000
    }

    return categoryMatch && priceMatch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return 0
  })

  return (
    <div className="py-8 bg-gradient-to-b from-amber-100 to-amber-50 relative">
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0" style={{ backgroundImage: 'url(/watermark-logo.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', mixBlendMode: 'multiply' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Products</h1>
          <p className="text-gray-600">Discover our complete range of premium honey products</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="p-6 sticky top-24">
              <div className="flex items-center mb-6">
                <Filter className="w-5 h-5 text-honey-600 mr-2" />
                <h3 className="font-semibold text-lg">Filters</h3>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-amber-600 text-white'
                          : 'text-gray-700 hover:bg-amber-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50/50"
                >
                  <option value="all">All Prices</option>
                  <option value="low">Under KES 2,500</option>
                  <option value="medium">KES 2,500 - 4,000</option>
                  <option value="high">Above KES 4,000</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-50/50"
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-4 text-gray-600">
              Showing {sortedProducts.length} products
            </div>

            {sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setPriceRange('all')
                    setSortBy('default')
                  }}
                  className="mt-4 bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className="hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-48 flex items-center justify-center relative">
                      <span className="text-8xl">{product.image}</span>
                      {product.stock < 20 && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                          Low Stock
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <span className="text-sm text-amber-600 font-medium">{product.category}</span>
                      <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center mb-2">
                        <div className="flex items-center text-amber-600">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) ? 'fill-current' : ''
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-amber-700">
                          KES {product.price.toLocaleString()}
                        </span>
                        <button className="text-amber-600 hover:text-amber-700 font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
