import React from 'react'

const Shipping = () => {
  return (
    <section className="py-16 relative">
      <div className="fixed inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url(/watermark-logo.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '60%', mixBlendMode: 'multiply' }}></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-3xl font-bold mb-6">Anchored Bee Venture Shipping Policy</h1>
        <div className="prose text-gray-700 max-w-6xl text-center">
          <p className="mb-6">At Anchored Venture, we are committed to ensuring that every order reaches our customers safely, promptly, and in excellent condition. This Shipping Policy explains how we process, dispatch, and deliver orders for our products, including Anchored Bee honey and bee products.</p>
          
          <h2 className="text-xl font-semibold mb-3">1. Order Processing</h2>
          <p className="mb-6">Orders are processed within 1–2 business days after payment confirmation. Orders placed on weekends or public holidays will be processed on the next business day. During promotional periods or peak seasons, processing times may be slightly longer.</p>
          
          <h2 className="text-xl font-semibold mb-3">2. Shipping Coverage</h2>
          <p className="mb-2">We currently deliver:</p>
          <p className="mb-6">Nationwide across Kenya, International shipping is available upon request, subject to destination and applicable customs regulations</p>
          
          <h2 className="text-xl font-semibold mb-3">3. Delivery Timeframes</h2>
          <p className="mb-2">Estimated delivery times are:</p>
          <p className="mb-6">Nairobi Metropolitan Area: Within Our Daily Working hours, Major Towns in Kenya: 1–2 business days, Remote Locations: 2–7 business days, International Orders: 7–21 business days depending on destination and customs clearance</p>
          <p className="mb-6">Delivery estimates are approximate and may vary due to weather, courier delays, or unforeseen circumstances. Clear delivery estimates and processing timelines help customers know what to expect before placing an order.</p>
          
          <h2 className="text-xl font-semibold mb-3">4. Shipping Fees</h2>
          <p className="mb-2">Shipping charges are calculated based on:</p>
          <p className="mb-6">Delivery destination, Package weight and dimensions, Selected delivery method</p>
          <p className="mb-6">Any applicable shipping fees will be displayed during checkout before payment is completed.</p>
          
          <h2 className="text-xl font-semibold mb-3">5. Free Shipping</h2>
          <p className="mb-6">Anchored Venture may offer free shipping during promotional campaigns or for qualifying orders. Any minimum purchase requirements will be clearly communicated at the time of purchase.</p>
          
          <h2 className="text-xl font-semibold mb-3">6. Order Tracking</h2>
          <p className="mb-2">Once your order has been dispatched, you will receive:</p>
          <p className="mb-6">A shipment confirmation, Tracking details (where available), Estimated delivery date</p>
          
          <h2 className="text-xl font-semibold mb-3">7. Delivery Requirements</h2>
          <p className="mb-2">Customers should ensure that:</p>
          <p className="mb-6">Delivery information is accurate and complete, Someone is available to receive the package where required, A valid phone number is provided for delivery coordination</p>
          <p className="mb-6">Additional delivery charges may apply if incorrect delivery information causes failed delivery attempts.</p>
          
          <h2 className="text-xl font-semibold mb-3">8. Damaged or Missing Items</h2>
          <p className="mb-2">If your package arrives:</p>
          <p className="mb-6">Damaged, Incomplete, or Incorrect</p>
          <p className="mb-6">please notify us within 48 hours of delivery. Where possible, include photographs of the package and products so we can investigate and resolve the issue promptly.</p>
          
          <h2 className="text-xl font-semibold mb-3">9. Delays</h2>
          <p className="mb-2">While we strive to meet all delivery estimates, delays may occur due to:</p>
          <p className="mb-6">Severe weather, Public holidays, Courier service disruptions, Customs inspections (for international shipments), Events beyond our reasonable control</p>
          <p className="mb-6">We will keep customers informed whenever significant delays occur.</p>
          
          <h2 className="text-xl font-semibold mb-3">10. International Orders</h2>
          <p className="mb-2">For international deliveries:</p>
          <p className="mb-6">Customers are responsible for any import duties, customs fees, taxes, or other charges imposed by the destination country unless otherwise stated. Customs processing times vary by country and are outside our control.</p>
          
          <h2 className="text-xl font-semibold mb-3">11. Incorrect Address</h2>
          <p className="mb-6">Anchored Venture is not responsible for delays or non-delivery resulting from incorrect shipping information provided by the customer. Please review your shipping details carefully before confirming your order.</p>
          
          <h2 className="text-xl font-semibold mb-3">12. Contact Us</h2>
          <p className="mb-2">If you have any questions regarding shipping or delivery, please contact us:</p>
          <a href="/contact" className="text-blue-600 hover:text-blue-800 underline font-semibold">Contact Us</a>
          
          <p className="text-sm text-gray-600">This Shipping Policy should be reviewed periodically and updated as your delivery services, shipping regions, or business operations change.</p>
        </div>
      </div>
    </section>
  )
}

export default Shipping
