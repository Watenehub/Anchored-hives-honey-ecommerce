import { Link } from 'react-router-dom'
import { CheckCircle, ShoppingBag, Home, Package } from 'lucide-react'

const OrderSuccess = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>

          {/* Order Details Card */}
          <div className="card p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-honey-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Order Details</h2>
            </div>

            <div className="space-y-4 text-left">
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Order Number</span>
                <span className="font-semibold text-gray-900">#HNY-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Order Date</span>
                <span className="font-semibold text-gray-900">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Status</span>
                <span className="font-semibold text-green-600">Processing</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-600">Estimated Delivery</span>
                <span className="font-semibold text-gray-900">2-3 Business Days</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-honey-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">What's Next?</h3>
            <ul className="text-left space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-honey-600 mr-2">1.</span>
                <span>You will receive an order confirmation email shortly</span>
              </li>
              <li className="flex items-start">
                <span className="text-honey-600 mr-2">2.</span>
                <span>We'll prepare your order for shipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-honey-600 mr-2">3.</span>
                <span>You'll receive tracking information once shipped</span>
              </li>
              <li className="flex items-start">
                <span className="text-honey-600 mr-2">4.</span>
                <span>Your order will be delivered to your doorstep</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="btn-primary inline-flex items-center justify-center space-x-2 py-3 px-8"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Continue Shopping</span>
            </Link>
            <Link
              to="/"
              className="btn-secondary inline-flex items-center justify-center space-x-2 py-3 px-8"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Contact Support */}
          <div className="mt-8 text-gray-600">
            <p>Need help? Contact our support team at</p>
            <a href="mailto:support@anchoredhives.com" className="text-honey-600 hover:underline">
              support@anchoredhives.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess
