import { Link } from 'react-router-dom'
import { Star, Truck, Leaf, Award, ChevronRight } from 'lucide-react'

const featuredProducts = [
  {
    id: 1,
    name: 'Pure Organic Honey',
    price: 2500,
    image: '/honey.jpg',
    imageType: 'local',
    rating: 4.8,
    category: 'Raw Honey'
  },
  {
    id: 2,
    name: 'Wildflower Honey',
    price: 2200,
    image: '🌸',
    rating: 4.7,
    category: 'Raw Honey'
  },
  {
    id: 3,
    name: 'Manuka Honey',
    price: 4500,
    image: '/honey.jpg',
    imageType: 'local',
    rating: 4.9,
    category: 'Specialty'
  },
  {
    id: 4,
    name: 'Clover Honey',
    price: 2000,
    image: '🌼',
    rating: 4.6,
    category: 'Raw Honey'
  }
]

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    comment: 'The best honey I have ever tasted! Pure and natural flavor that you can taste in every spoon.',
    rating: 5
  },
  {
    id: 2,
    name: 'John K.',
    comment: 'Excellent quality and fast delivery. Will definitely order again!',
    rating: 5
  },
  {
    id: 3,
    name: 'Mary W.',
    comment: 'My family loves this honey. Great value for money and amazing taste.',
    rating: 5
  }
]

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-honey-100 to-amber-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Pure Organic <span className="text-honey-600">Honey</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Experience the finest, purest honey from local beekeepers. 
                100% natural, organic, and delicious.
              </p>
              <div className="flex space-x-4">
                <Link to="/products" className="btn-primary text-lg px-8 py-3">
                  Shop Now
                </Link>
                <Link to="/about" className="btn-secondary text-lg px-8 py-3">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="text-9xl animate-bounce">🍯</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Discover our most popular honey varieties</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-honey-50 flex items-center justify-center overflow-hidden">
                  {product.imageType === 'local' ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-8xl">{product.image}</span>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-sm text-honey-600 font-medium">{product.category}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-honey-500">
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
                    <span className="text-2xl font-bold text-honey-700">
                      KES {product.price.toLocaleString()}
                    </span>
                    <button className="text-honey-600 hover:text-honey-700 font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center btn-primary text-lg px-8 py-3"
            >
              View All Products
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-honey-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg">What makes our honey special</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-honey-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Organic</h3>
              <p className="text-gray-600">
                Our honey is sourced from organic farms with no additives or preservatives.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-honey-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and reliable delivery to your doorstep within 2-3 business days.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-honey-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Every batch is tested to ensure the highest quality and purity standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Real reviews from satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card p-6">
                <div className="flex items-center text-honey-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-honey-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-honey-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Taste the Best Honey?
          </h2>
          <p className="text-honey-100 text-lg mb-8">
            Order now and get 10% off your first purchase!
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-honey-600 font-semibold text-lg px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
