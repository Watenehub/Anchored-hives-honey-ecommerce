import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { Star, Plus, Minus, ShoppingCart, Truck, Shield, Check } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const products = [
  {
    id: 1,
    name: 'Pure Organic Honey',
    price: 2500,
    image: '🍯',
    rating: 4.8,
    category: 'Raw Honey',
    description: 'Pure, unprocessed honey from local beekeepers. Our organic honey is sourced from sustainable farms and contains no additives or preservatives. Perfect for sweetening tea, baking, or enjoying straight from the jar.',
    stock: 50,
    weight: '500g',
    origin: 'Kenya',
    features: ['100% Organic', 'No additives', 'Raw and unprocessed', 'Sustainably sourced']
  },
  {
    id: 2,
    name: 'Wildflower Honey',
    price: 2200,
    image: '🌸',
    rating: 4.7,
    category: 'Raw Honey',
    description: 'Delicious honey from wildflower blossoms. This unique honey captures the essence of various wildflowers, creating a complex and delightful flavor profile that varies with each harvest.',
    stock: 35,
    weight: '500g',
    origin: 'Kenya',
    features: ['Multi-floral', 'Natural sweetness', 'Rich flavor', 'Locally sourced']
  },
  {
    id: 3,
    name: 'Manuka Honey',
    price: 4500,
    image: '🐝',
    rating: 4.9,
    category: 'Specialty',
    description: 'Premium Manuka honey with unique health benefits. Our Manuka honey is sourced from pristine environments and tested for its unique properties, ensuring you get the highest quality product.',
    stock: 20,
    weight: '250g',
    origin: 'New Zealand',
    features: ['UMF certified', 'Antibacterial properties', 'Premium quality', 'Limited stock']
  },
  {
    id: 4,
    name: 'Clover Honey',
    price: 2000,
    image: '🌼',
    rating: 4.6,
    category: 'Raw Honey',
    description: 'Sweet and mild honey from clover flowers. This light-colored honey has a delicate, sweet flavor that makes it perfect for everyday use and is a favorite among children.',
    stock: 45,
    weight: '500g',
    origin: 'Kenya',
    features: ['Mild flavor', 'Light color', 'Family favorite', 'Versatile']
  },
  {
    id: 5,
    name: 'Acacia Honey',
    price: 2800,
    image: '🌳',
    rating: 4.5,
    category: 'Raw Honey',
    description: 'Light and delicate honey from acacia blossoms. Known for its slow crystallization and mild taste, this honey is perfect for those who prefer a subtle sweetness.',
    stock: 30,
    weight: '500g',
    origin: 'Kenya',
    features: ['Slow to crystallize', 'Mild taste', 'Light color', 'Premium quality']
  },
  {
    id: 6,
    name: 'Buckwheat Honey',
    price: 3200,
    image: '🌾',
    rating: 4.4,
    category: 'Specialty',
    description: 'Dark, robust honey with a rich flavor. This antioxidant-rich honey has a distinctive malty flavor and is perfect for those who appreciate bold, complex tastes.',
    stock: 25,
    weight: '500g',
    origin: 'Kenya',
    features: ['High antioxidants', 'Rich flavor', 'Dark color', 'Unique taste']
  },
  {
    id: 7,
    name: 'Eucalyptus Honey',
    price: 2400,
    image: '🍃',
    rating: 4.6,
    category: 'Raw Honey',
    description: 'Distinctive honey with a hint of eucalyptus. This honey has a unique flavor profile with subtle eucalyptus notes, making it perfect for soothing teas and winter wellness.',
    stock: 40,
    weight: '500g',
    origin: 'Kenya',
    features: ['Soothing', 'Unique flavor', 'Natural', 'Locally sourced']
  },
  {
    id: 8,
    name: 'Lavender Honey',
    price: 3500,
    image: '💜',
    rating: 4.8,
    category: 'Specialty',
    description: 'Aromatic honey from lavender fields. This beautifully fragrant honey captures the essence of lavender, making it perfect for gourmet cooking and special occasions.',
    stock: 15,
    weight: '250g',
    origin: 'Kenya',
    features: ['Aromatic', 'Gourmet', 'Limited edition', 'Premium']
  },
  {
    id: 9,
    name: 'Orange Blossom Honey',
    price: 2600,
    image: '🍊',
    rating: 4.7,
    category: 'Raw Honey',
    description: 'Citrus-infused honey with a light flavor. This bright, citrusy honey is perfect for adding a touch of sunshine to your morning routine.',
    stock: 38,
    weight: '500g',
    origin: 'Kenya',
    features: ['Citrus notes', 'Light flavor', 'Bright taste', 'Natural']
  },
  {
    id: 10,
    name: 'Comb Honey',
    price: 4000,
    image: '🧊',
    rating: 4.9,
    category: 'Specialty',
    description: 'Honey in its natural comb, pure and unprocessed. Experience honey exactly as nature intended - still in the wax comb, preserving all its natural enzymes and benefits.',
    stock: 18,
    weight: '400g',
    origin: 'Kenya',
    features: ['Raw comb', 'Natural enzymes', 'Unprocessed', 'Pure']
  },
  {
    id: 11,
    name: 'Creamed Honey',
    price: 2300,
    image: '🥄',
    rating: 4.5,
    category: 'Raw Honey',
    description: 'Smooth, spreadable honey perfect for toast. Our creamed honey has been carefully processed to create a smooth, spreadable texture that stays soft and easy to use.',
    stock: 42,
    weight: '500g',
    origin: 'Kenya',
    features: ['Spreadable', 'Smooth texture', 'No crystallization', 'Easy to use']
  },
  {
    id: 12,
    name: 'Royal Jelly',
    price: 5500,
    image: '👑',
    rating: 4.8,
    category: 'Specialty',
    description: 'Premium royal jelly with exceptional health benefits. This nutrient-rich superfood is packed with vitamins, minerals, and amino acids for optimal health.',
    stock: 12,
    weight: '50g',
    origin: 'Kenya',
    features: ['Superfood', 'Nutrient-rich', 'Premium quality', 'Limited stock']
  }
]

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <Link to="/products" className="btn-primary">
          Back to Products
        </Link>
      </div>
    )
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
  }

  const handleBuyNow = () => {
    handleAddToCart()
    window.location.href = '/cart'
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <Link to="/" className="hover:text-honey-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-honey-600">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="bg-honey-50 rounded-2xl flex items-center justify-center p-8 h-96">
            <span className="text-9xl">{product.image}</span>
          </div>

          {/* Product Info */}
          <div>
            <span className="text-honey-600 font-medium">{product.category}</span>
            <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center text-honey-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating) ? 'fill-current' : ''
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600 ml-2">{product.rating} out of 5</span>
            </div>

            <div className="text-4xl font-bold text-honey-700 mb-6">
              KES {product.price.toLocaleString()}
            </div>

            <p className="text-gray-700 text-lg mb-6">{product.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="text-gray-600 text-sm">Weight</span>
                <p className="font-semibold text-gray-900">{product.weight}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="text-gray-600 text-sm">Origin</span>
                <p className="font-semibold text-gray-900">{product.origin}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="text-gray-600 text-sm">Stock</span>
                <p className="font-semibold text-gray-900">{product.stock} units</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <span className="text-gray-600 text-sm">SKU</span>
                <p className="font-semibold text-gray-900">HNY-{product.id.toString().padStart(4, '0')}</p>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="px-4 py-2 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 btn-primary flex items-center justify-center space-x-2 py-3"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="flex-1 btn-secondary flex items-center justify-center space-x-2 py-3"
              >
                <span>Buy Now</span>
              </button>
            </div>

            {/* Shipping Info */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Truck className="w-5 h-5 mr-2 text-honey-600" />
                <span>Free shipping on orders over KES 5,000</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-honey-600" />
                <span>100% satisfaction guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="card hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-honey-50 flex items-center justify-center">
                    <span className="text-8xl">{relatedProduct.image}</span>
                  </div>
                  <div className="p-4">
                    <span className="text-sm text-honey-600 font-medium">{relatedProduct.category}</span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-honey-700">
                        KES {relatedProduct.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
