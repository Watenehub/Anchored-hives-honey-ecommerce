import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CreditCard, Smartphone, DollarSign, CheckCircle, ArrowLeft, Truck } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const Checkout = () => {
  const navigate = useNavigate()
  const { cartItems, cartTotal, clearCart } = useCart()
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    address: '',
    townCity: '',
    paymentMethod: 'mpesa'
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const deliveryCost = cartTotal >= 5000 ? 0 : 500
  const finalTotal = cartTotal + deliveryCost

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate order processing
    setTimeout(() => {
      clearCart()
      navigate('/order-success')
    }, 2000)
  }

  if (cartItems.length === 0) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
          <Link to="/products" className="btn-primary">
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 bg-gradient-to-b from-amber-100 to-amber-50 relative">
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0" style={{ backgroundImage: 'url(/watermark-logo.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', mixBlendMode: 'multiply' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Link to="/cart" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Cart
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Delivery Information */}
              <div>
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                    <Truck className="w-5 h-5 mr-2 text-amber-600" />
                    Delivery Information
                  </h2>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Street address, building, apartment"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Town/City *
                    </label>
                    <input
                      type="text"
                      name="townCity"
                      value={formData.townCity}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter your town or city"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Payment Method</h2>
                </div>

                <div className="p-6 space-y-4">
                  {/* M-Pesa */}
                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    formData.paymentMethod === 'mpesa' 
                      ? 'border-amber-500 bg-amber-100' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mpesa"
                      checked={formData.paymentMethod === 'mpesa'}
                      onChange={handleInputChange}
                      className="mr-4"
                    />
                    <Smartphone className="w-6 h-6 text-green-600 mr-3" />
                    <div className="flex-1">
                      <span className="font-semibold text-gray-900">M-Pesa</span>
                      <p className="text-sm text-gray-600">Pay via M-Pesa mobile money</p>
                    </div>
                    {formData.paymentMethod === 'mpesa' && (
                      <CheckCircle className="w-6 h-6 text-amber-600" />
                    )}
                  </label>

                  {/* Cash on Delivery */}
                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    formData.paymentMethod === 'cod' 
                      ? 'border-amber-500 bg-amber-100' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="mr-4"
                    />
                    <DollarSign className="w-6 h-6 text-gray-600 mr-3" />
                    <div className="flex-1">
                      <span className="font-semibold text-gray-900">Cash on Delivery</span>
                      <p className="text-sm text-gray-600">Pay when you receive your order</p>
                    </div>
                    {formData.paymentMethod === 'cod' && (
                      <CheckCircle className="w-6 h-6 text-amber-600" />
                    )}
                  </label>

                  {/* Bank Transfer */}
                  <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    formData.paymentMethod === 'bank' 
                      ? 'border-amber-500 bg-amber-100' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === 'bank'}
                      onChange={handleInputChange}
                      className="mr-4"
                    />
                    <CreditCard className="w-6 h-6 text-blue-600 mr-3" />
                    <div className="flex-1">
                      <span className="font-semibold text-gray-900">Bank Transfer</span>
                      <p className="text-sm text-gray-600">Direct bank transfer</p>
                    </div>
                    {formData.paymentMethod === 'bank' && (
                      <CheckCircle className="w-6 h-6 text-amber-600" />
                    )}
                  </label>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 mr-3"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the <Link to="/terms" className="text-amber-600 hover:underline">Terms and Conditions</Link> and <Link to="/privacy" className="text-amber-600 hover:underline">Privacy Policy</Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="bg-amber-600 text-white w-full py-4 text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg hover:bg-amber-700 transition-colors"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Order...</span>
                  </>
                ) : (
                  <>
                    <span>Place Order</span>
                    <span className="text-amber-200">- KES {finalTotal.toLocaleString()}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
              </div>

              <div className="p-6">
                {/* Items */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">{item.image}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-semibold text-gray-900">
                        KES {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="border-t border-gray-200 pt-4 space-y-3">
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

                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between text-gray-900">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold text-amber-700">
                        KES {finalTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="mt-6 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Payment Method</h3>
                  <p className="text-sm text-gray-600 capitalize">
                    {formData.paymentMethod === 'mpesa' && 'M-Pesa'}
                    {formData.paymentMethod === 'cod' && 'Cash on Delivery'}
                    {formData.paymentMethod === 'bank' && 'Bank Transfer'}
                  </p>
                </div>

                {/* Security Note */}
                <div className="mt-6 text-center text-sm text-gray-500">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Secure checkout</span>
                  </div>
                  <p>Your payment information is safe and secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
