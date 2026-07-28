import { MapPin, Phone, Mail, Globe } from 'lucide-react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-ivory_white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-deep_black mb-4 text-center">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Get in touch with Anchored Bee Venture
          </p>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-deep_black mb-6">📞 Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 bg-ivory_white rounded-lg">
                <div className="w-12 h-12 bg-royal_gold rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-deep_black" />
                </div>
                <div>
                  <h3 className="font-semibold text-deep_black mb-1">Location</h3>
                  <p className="text-gray-600">Kenya</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-ivory_white rounded-lg">
                <div className="w-12 h-12 bg-royal_gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-deep_black" />
                </div>
                <div>
                  <h3 className="font-semibold text-deep_black mb-1">Phone</h3>
                  <p className="text-gray-600">0723142634</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-ivory_white rounded-lg">
                <div className="w-12 h-12 bg-royal_gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-deep_black" />
                </div>
                <div>
                  <h3 className="font-semibold text-deep_black mb-1">Email</h3>
                  <p className="text-gray-600">anchoredhives@anchoredhives.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-ivory_white rounded-lg">
                <div className="w-12 h-12 bg-royal_gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-deep_black" />
                </div>
                <div>
                  <h3 className="font-semibold text-deep_black mb-1">Website</h3>
                  <p className="text-gray-600">www.anchoredhives.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-deep_black mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal_gold"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal_gold"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal_gold"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-royal_gold text-deep_black font-semibold py-3 rounded-lg hover:bg-opacity-90 transition-colors"
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
