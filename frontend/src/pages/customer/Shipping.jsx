import React from 'react'

const Shipping = () => {
  return (
    <section className="py-16 relative">
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0" style={{ backgroundImage: 'url(/watermark-logo.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', mixBlendMode: 'multiply' }}></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-8 text-amber-900">Anchored Bee Venture Shipping Policy</h1>
        <div className="prose prose-lg prose-amber max-w-4xl mx-auto text-left">
          <p className="mb-6">At Anchored Venture, we are committed to ensuring that every order reaches our customers safely, promptly, and in excellent condition. This Shipping Policy explains how we process, dispatch, and deliver orders for our products, including Anchored Bee honey and bee products.</p>
          
          <h2 className="text-xl font-semibold mb-3">1. Order Processing</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Orders are processed within 1–2 business days after payment confirmation.</li>
            <li>Orders placed on weekends or public holidays will be processed on the next business day.</li>
            <li>During promotional periods or peak seasons, processing times may be slightly longer.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3">2. Shipping Coverage</h2>
          <p className="mb-2">We currently deliver:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Nationwide across Kenya.</li>
            <li>International shipping is available upon request, subject to destination and applicable customs regulations.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3">3. Delivery Timeframes</h2>
          <p className="mb-2">Estimated delivery times are:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Nairobi Metropolitan Area: Within Our Daily Working hours.</li>
            <li>Major Towns in Kenya: 1–2 business days.</li>
            <li>Remote Locations: 2–7 business days.</li>
            <li>International Orders: 7–21 business days depending on destination and customs clearance.</li>
          </ul>
          <p className="mb-6">Delivery estimates are approximate and may vary due to weather, courier delays, or unforeseen circumstances. Clear delivery estimates and processing timelines help customers know what to expect before placing an order.</p>
          
          <h2 className="text-xl font-semibold mb-3">4. Shipping Fees</h2>
          <p className="mb-2">Shipping charges are calculated based on:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Delivery destination.</li>
            <li>Package weight and dimensions.</li>
            <li>Selected delivery method.</li>
          </ul>
          <p className="mb-6">Any applicable shipping fees will be displayed during checkout before payment is completed.</p>
          
          <h2 className="text-xl font-semibold mb-3">5. Free Shipping</h2>
          <p className="mb-6">Anchored Venture may offer free shipping during promotional campaigns or for qualifying orders. Any minimum purchase requirements will be clearly communicated at the time of purchase.</p>
          
          <h2 className="text-xl font-semibold mb-3">6. Order Tracking</h2>
          <p className="mb-2">Once your order has been dispatched, you will receive:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>A shipment confirmation.</li>
            <li>Tracking details (where available).</li>
            <li>Estimated delivery date.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3">7. Delivery Requirements</h2>
          <p className="mb-2">Customers should ensure that:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Delivery information is accurate and complete.</li>
            <li>Someone is available to receive the package where required.</li>
            <li>A valid phone number is provided for delivery coordination.</li>
          </ul>
          <p className="mb-6">Additional delivery charges may apply if incorrect delivery information causes failed delivery attempts.</p>
          
          <h2 className="text-xl font-semibold mb-3">8. Damaged or Missing Items</h2>
          <p className="mb-2">If your package arrives:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Damaged,</li>
            <li>Incomplete, or</li>
            <li>Incorrect,</li>
          </ul>
          <p className="mb-6">please notify us within 48 hours of delivery. Where possible, include photographs of the package and products so we can investigate and resolve the issue promptly.</p>
          
          <h2 className="text-xl font-semibold mb-3">9. Delays</h2>
          <p className="mb-2">While we strive to meet all delivery estimates, delays may occur due to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Severe weather.</li>
            <li>Public holidays.</li>
            <li>Courier service disruptions.</li>
            <li>Customs inspections (for international shipments).</li>
            <li>Events beyond our reasonable control.</li>
          </ul>
          <p className="mb-6">We will keep customers informed whenever significant delays occur.</p>
          
          <h2 className="text-xl font-semibold mb-3">10. International Orders</h2>
          <p className="mb-2">For international deliveries:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Customers are responsible for any import duties, customs fees, taxes, or other charges imposed by the destination country unless otherwise stated.</li>
            <li>Customs processing times vary by country and are outside our control.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3">11. Incorrect Address</h2>
          <p className="mb-6">Anchored Venture is not responsible for delays or non-delivery resulting from incorrect shipping information provided by the customer. Please review your shipping details carefully before confirming your order.</p>
          
          <h2 className="text-xl font-semibold mb-3">12. Contact Us</h2>
          <p className="mb-2">If you have any questions regarding shipping or delivery, please contact us:</p>
          <div className="mb-6">
            <p className="font-semibold mb-2">Anchored Venture</p>
            <p className="mb-1">Brand: Anchored Bee – Pure. Natural. Trusted.</p>
            <p className="mb-1">Email: info@anchoredbee.com</p>
            <p className="mb-1">Phone: +254 723 142 634</p>
            <p className="mb-1">Website: www.anchoredbeeventure.com</p>
            <p>Address: 77027-00100 Nairobi-Kenya</p>
          </div>
          
          <p className="text-sm text-gray-600">This Shipping Policy should be reviewed periodically and updated as your delivery services, shipping regions, or business operations change.</p>
        </div>
      </div>
    </section>
  )
}

export default Shipping
