import { MapPin, Phone, Mail, Globe } from 'lucide-react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-50 py-16 relative">
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0" style={{ backgroundImage: 'url(/watermark-logo.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', mixBlendMode: 'multiply' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-deep_black mb-4 text-center">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Get in touch with Anchored Bee Venture
          </p>

          <div className="p-8 mb-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">📞 Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 rounded-lg">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-deep_black" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Location</h3>
                  <p className="text-gray-600">Kenya</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-deep_black" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Phone</h3>
                  <p className="text-gray-600">0723142634</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-deep_black" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Email</h3>
                  <p className="text-gray-600">anchoredhives@anchoredhives.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg">
                <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-deep_black" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-900 mb-1">Website</h3>
                  <p className="text-gray-600">www.anchoredhives.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-900 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white font-semibold py-3 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
