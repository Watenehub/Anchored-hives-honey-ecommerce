import React from 'react'

const Returns = () => {
  return (
    <section className="py-16 relative">
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0" style={{ backgroundImage: 'url(/watermark-logo.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', mixBlendMode: 'multiply' }}></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-8 text-amber-900">Anchored Bee Return Policy</h1>
        <div className="prose prose-lg prose-amber max-w-4xl mx-auto text-left">
          <p className="mb-6">At Anchored Bee, we are committed to providing our customers with premium-quality raw honey and bee products that meet our standards of purity, safety, and excellence. This Return Policy explains the conditions under which returns, replacements, or refunds may be requested.</p>
          
          <h2 className="text-xl font-semibold mb-3">1. Customer Satisfaction Commitment</h2>
          <p className="mb-6">We value every customer and strive to ensure that all orders are delivered in excellent condition. If you receive a product that is damaged, incorrect, or does not meet your order requirements, please contact us for assistance.</p>
          
          <h2 className="text-xl font-semibold mb-3">2. Eligible Returns</h2>
          <p className="mb-2">Returns or replacements may be accepted under the following circumstances:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>The product received is damaged during delivery.</li>
            <li>The wrong product was delivered.</li>
            <li>The order is incomplete or missing items.</li>
            <li>The product has a quality issue caused by handling before delivery.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3">3. Return Timeframe</h2>
          <p className="mb-6">Customers must contact Anchored Bee within 48 hours of receiving their order to report any issue. Requests received after this period may not qualify for replacement or refund consideration.</p>
          
          <h2 className="text-xl font-semibold mb-3">4. Product Conditions for Returns</h2>
          <p className="mb-2">To qualify for a return or replacement:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>The product must be unused and in its original packaging.</li>
            <li>The product label and packaging must remain intact.</li>
            <li>Customers may be required to provide photos or evidence of damage or incorrect delivery.</li>
          </ul>
          <p className="mb-6">Due to the nature of honey and food products, opened or partially consumed products generally cannot be returned unless there is a verified quality concern.</p>
          
          <h2 className="text-xl font-semibold mb-3">5. Non-Returnable Items</h2>
          <p className="mb-2">The following items are not eligible for return:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Products damaged due to improper storage after delivery.</li>
            <li>Products that have been opened, consumed, or altered.</li>
            <li>Items returned without prior approval from Anchored Bee.</li>
            <li>Products purchased through unauthorised sellers.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3">6. Damaged or Incorrect Orders</h2>
          <p className="mb-2">If your order arrives damaged or incorrect:</p>
          <ol className="list-decimal pl-6 mb-6">
            <li>Contact Anchored Bee customer support.</li>
            <li>Provide your order details and photos of the issue.</li>
            <li>Our team will review the request.</li>
            <li>Approved claims may receive:
              <ul className="list-disc pl-6 mt-2">
                <li>A replacement product, or</li>
                <li>A refund/store credit where applicable.</li>
              </ul>
            </li>
          </ol>
          
          <h2 className="text-xl font-semibold mb-3">7. Refund Policy</h2>
          <p className="mb-2">Approved refunds will be processed through the original payment method where possible.</p>
          <p className="mb-2">Refund processing times may vary depending on:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Payment provider policies.</li>
            <li>Banking institutions.</li>
            <li>Transaction processing timelines.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3">8. Exchanges</h2>
          <p className="mb-2">Product exchanges may be provided for:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Incorrect products delivered.</li>
            <li>Damaged products confirmed by our team.</li>
          </ul>
          <p className="mb-6">Exchange approval is subject to product availability.</p>
          
          <h2 className="text-xl font-semibold mb-3">9. Shipping Costs for Returns</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>If the return is due to an error by Anchored Bee or a damaged product, we may cover reasonable return shipping costs.</li>
            <li>Customers may be responsible for return costs for issues not caused by Anchored Bee.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3">10. Storage Responsibility</h2>
          <p className="mb-2">To maintain honey quality, customers should store products:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>In a cool, dry place.</li>
            <li>Away from direct sunlight.</li>
            <li>In properly sealed containers.</li>
          </ul>
          <p className="mb-6">Anchored Bee is not responsible for product changes caused by improper storage after delivery.</p>
          
          <h2 className="text-xl font-semibold mb-3">11. Contact Us</h2>
          <p className="mb-2">For return requests or customer support:</p>
          <div className="mb-6">
            <p className="font-semibold mb-2">Anchored Bee</p>
            <p className="mb-1">Brand: Anchored Bee – Pure. Natural. Trusted.</p>
            <p className="mb-1">Email: info@anchoredbee.com</p>
            <p className="mb-1">Phone: +254 723 142 634</p>
            <p className="mb-1">Website: www.anchoredbeeventure.com</p>
            <p>Business Hours: Monday–Friday, 8:00 AM – 5:00 PM (EAT)</p>
          </div>
          
          <div>
            <p className="font-semibold text-amber-800 mb-2">Anchored Bee Promise:</p>
            <p className="text-amber-900">We are dedicated to delivering authentic, premium-quality honey and bee products while ensuring every customer enjoys a trusted and satisfying experience.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Returns
