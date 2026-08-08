const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-50 py-16 relative">
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0" style={{ backgroundImage: 'url(/watermark-logo.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', mixBlendMode: 'multiply' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-deep_black mb-4 text-center">About Us</h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Learn more about Anchored Bee Venture
          </p>

          <div className="space-y-8">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">🏢 Company Overview</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                Anchored Hives operates a network of trained beekeepers across rural Kenya, ensuring ethical sourcing, environmental sustainability, and consistent honey quality. Our mission is to create value from nature while empowering local communities through beekeeping.

                We specialize in raw honey production, bee by-products, and value-added honey-based goods.
              </p>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">🎯 Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become East Africa's leading premium honey brand known for purity, sustainability, and innovation in apiculture.
              </p>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">🎯 Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To produce and deliver high-quality natural honey and bee products while promoting sustainable livelihoods and environmental conservation.
              </p>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">💛 Core Values</h2>
              <ul className="text-gray-700 leading-relaxed space-y-2">
                <li>• Purity First – 100% natural, unprocessed honey</li>
                <li>• Sustainability – Protecting bees and ecosystems</li>
                <li>• Community Empowerment – Supporting rural beekeepers</li>
                <li>• Integrity – Transparent and ethical production</li>
                <li>• Innovation – Modern, scalable honey solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
