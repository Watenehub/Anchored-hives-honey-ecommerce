import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart()

  const deliveryCost = cartTotal >= 5000 ? 0 : 500
  const finalTotal = cartTotal + deliveryCost

  if (cartItems.length === 0) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-amber-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link to="/products" className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors inline-flex items-center">
              Continue Shopping
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 bg-gradient-to-b from-amber-100 to-amber-50 relative">
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0" style={{ backgroundImage: 'url(/watermark-logo.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', mixBlendMode: 'multiply' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div>
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Cart Items ({cartItems.length})
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 flex items-center space-x-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-5xl">{item.image}</span>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <Link
                        to={`/products/${item.id}`}
                        className="text-lg font-semibold text-gray-900 hover:text-honey-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-gray-600 mt-1">{item.category}</p>
                      <p className="text-amber-700 font-semibold mt-2">
                        KES {item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">
                        KES {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link
                to="/products"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
              >
                <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">KES {cartTotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Delivery</span>
                  <span className="font-semibold">
                    {deliveryCost === 0 ? (
                      <span className="text-green-600">FREE</span>
                    ) : (
                      `KES ${deliveryCost.toLocaleString()}`
                    )}
                  </span>
                </div>

                {deliveryCost > 0 && (
                  <p className="text-sm text-gray-500">
                    Add KES {(5000 - cartTotal).toLocaleString()} more for free delivery
                  </p>
                )}

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-gray-900">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-2xl font-bold text-amber-700">
                      KES {finalTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="bg-amber-600 text-white w-full py-3 text-center block mt-6 rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Proceed to Checkout
                </Link>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Multiple payment options</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Easy returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
