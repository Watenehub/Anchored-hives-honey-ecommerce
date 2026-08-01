import React from 'react'

const Returns = () => {
  return (
    <section className="py-16 relative">
      <div className="fixed inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url(/watermark-logo.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '60%', mixBlendMode: 'multiply' }}></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-3xl font-bold mb-6">Anchored Bee Return Policy</h1>
        <div className="prose text-gray-700 max-w-6xl text-center">
          <p className="mb-6">At Anchored Bee, we are committed to providing our customers with premium-quality raw honey and bee products that meet our standards of purity, safety, and excellence. This Return Policy explains the conditions under which returns, replacements, or refunds may be requested.</p>
          
          <h2 className="text-xl font-semibold mb-3">1. Customer Satisfaction Commitment</h2>
          <p className="mb-6">We value every customer and strive to ensure that all orders are delivered in excellent condition. If you receive a product that is damaged, incorrect, or does not meet your order requirements, please contact us for assistance.</p>
          
          <h2 className="text-xl font-semibold mb-3">2. Eligible Returns</h2>
          <p className="mb-2">Returns or replacements may be accepted under the following circumstances:</p>
          <p className="mb-6">The product received is damaged during delivery, The wrong product was delivered, The order is incomplete or missing items, The product has a quality issue caused by handling before delivery</p>
          
          <h2 className="text-xl font-semibold mb-3">3. Return Timeframe</h2>
          <p className="mb-6">Customers must contact Anchored Bee within 48 hours of receiving their order to report any issue. Requests received after this period may not qualify for replacement or refund consideration.</p>
          
          <h2 className="text-xl font-semibold mb-3">4. Product Conditions for Returns</h2>
          <p className="mb-2">To qualify for a return or replacement:</p>
          <p className="mb-6">The product must be unused and in its original packaging, The product label and packaging must remain intact, Customers may be required to provide photos or evidence of damage or incorrect delivery</p>
          <p className="mb-6">Due to the nature of honey and food products, opened or partially consumed products generally cannot be returned unless there is a verified quality concern.</p>
          
          <h2 className="text-xl font-semibold mb-3">5. Non-Returnable Items</h2>
          <p className="mb-2">The following items are not eligible for return:</p>
          <p className="mb-6">Products damaged due to improper storage after delivery, Products that have been opened, consumed, or altered, Items returned without prior approval from Anchored Bee, Products purchased through unauthorised sellers</p>
          
          <h2 className="text-xl font-semibold mb-3">6. Damaged or Incorrect Orders</h2>
          <p className="mb-2">If your order arrives damaged or incorrect:</p>
          <p className="mb-2">1. Contact Anchored Bee customer support.</p>
          <p className="mb-2">2. Provide your order details and photos of the issue.</p>
          <p className="mb-2">3. Our team will review the request.</p>
          <p className="mb-2">4. Approved claims may receive: A replacement product, or A refund/store credit where applicable.</p>
          
          <h2 className="text-xl font-semibold mb-3">7. Refund Policy</h2>
          <p className="mb-2">Approved refunds will be processed through the original payment method where possible.</p>
          <p className="mb-2">Refund processing times may vary depending on:</p>
          <p className="mb-6">Payment provider policies, Banking institutions, Transaction processing timelines</p>
          
          <h2 className="text-xl font-semibold mb-3">8. Exchanges</h2>
          <p className="mb-2">Product exchanges may be provided for:</p>
          <p className="mb-6">Incorrect products delivered, Damaged products confirmed by our team</p>
          <p className="mb-6">Exchange approval is subject to product availability.</p>
          
          <h2 className="text-xl font-semibold mb-3">9. Shipping Costs for Returns</h2>
          <p className="mb-6">If the return is due to an error by Anchored Bee or a damaged product, we may cover reasonable return shipping costs. Customers may be responsible for return costs for issues not caused by Anchored Bee.</p>
          
          <h2 className="text-xl font-semibold mb-3">10. Storage Responsibility</h2>
          <p className="mb-2">To maintain honey quality, customers should store products:</p>
          <p className="mb-6">In a cool, dry place, Away from direct sunlight, In properly sealed containers</p>
          <p className="mb-6">Anchored Bee is not responsible for product changes caused by improper storage after delivery.</p>
          
          <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
          <p className="mb-2">For return requests or customer support:</p>
          <a href="/contact" className="text-blue-600 hover:text-blue-800 underline font-semibold">Contact Us</a>
          
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
            <p className="font-semibold text-amber-800 mb-2">Anchored Bee Promise:</p>
            <p className="text-amber-900">We are dedicated to delivering authentic, premium-quality honey and bee products while ensuring every customer enjoys a trusted and satisfying experience.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Returns
