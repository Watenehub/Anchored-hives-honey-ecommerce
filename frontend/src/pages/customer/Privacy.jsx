import React from 'react'

const Privacy = () => {
  return (
    <section className="py-16 relative">
      <div className="fixed inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url(/watermark-logo.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '60%', mixBlendMode: 'multiply' }}></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-3xl font-bold mb-6">Anchored Bee Privacy Policy</h1>
        <div className="prose text-gray-700 max-w-6xl text-center">
          <p className="mb-6">Below is a professional Privacy Policy suitable for Anchored Bee, a honey and bee products company. It should be customised with your official business address, email, website, and applicable legal requirements before publication. Businesses that collect customer information online should clearly explain what data they collect, why they collect it, how it is protected, and customers' rights.</p>
          
          <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
          <p className="mb-6">Anchored Bee ("we," "our," or "us") is committed to protecting the privacy and personal information of our customers, partners, and website visitors. This Privacy Policy explains how we collect, use, store, and safeguard your information when you interact with our business, website, or purchase our products.</p>
          
          <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="mb-2">We may collect the following information:</p>
          <p className="mb-6">Full name, Email address, Phone number, Delivery or billing address, Payment information (processed securely through authorised payment providers), Purchase history, Website usage information (cookies, browser type, IP address)</p>
          
          <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
          <p className="mb-2">Your information may be used to:</p>
          <p className="mb-6">Process and deliver orders, Respond to inquiries and customer support requests, Improve our products and services, Send order confirmations and delivery updates, Share promotional offers (only with your consent where required), Meet legal and regulatory obligations</p>
          
          <h2 className="text-xl font-semibold mb-3">4. Data Sharing</h2>
          <p className="mb-2">Anchored Bee does not sell or rent customer information.</p>
          <p className="mb-2">We may share information only with:</p>
          <p className="mb-6">Delivery and logistics partners, Secure payment processors, Technology service providers, Government authorities where required by law</p>
          
          <h2 className="text-xl font-semibold mb-3">5. Data Security</h2>
          <p className="mb-6">We implement appropriate administrative, technical, and physical safeguards to protect your personal information from unauthorised access, disclosure, alteration, or destruction.</p>
          
          <h2 className="text-xl font-semibold mb-3">6. Cookies</h2>
          <p className="mb-2">Our website may use cookies to:</p>
          <p className="mb-6">Improve website functionality, Remember user preferences, Analyse website traffic, Enhance customer experience</p>
          <p className="mb-6">You may disable cookies through your browser settings, although some website features may not function properly.</p>
          
          <h2 className="text-xl font-semibold mb-3">7. Marketing Communications</h2>
          <p className="mb-6">If you subscribe to our newsletters or promotional messages, you may opt out at any time by clicking the unsubscribe link or contacting us directly.</p>
          
          <h2 className="text-xl font-semibold mb-3">8. Data Retention</h2>
          <p className="mb-2">We retain personal information only for as long as necessary to:</p>
          <p className="mb-6">Fulfil customer orders, Maintain business records, Comply with tax and legal obligations, Resolve disputes</p>
          
          <h2 className="text-xl font-semibold mb-3">9. Your Rights</h2>
          <p className="mb-2">Subject to applicable law, you may have the right to:</p>
          <p className="mb-6">Access your personal information, Correct inaccurate information, Request deletion of your data, Restrict or object to certain processing, Withdraw consent where applicable</p>
          
          <h2 className="text-xl font-semibold mb-3">10. Children's Privacy</h2>
          <p className="mb-6">Anchored Bee does not knowingly collect personal information from children under the age required by applicable law without parental or guardian consent.</p>
          
          <h2 className="text-xl font-semibold mb-3">11. Third-Party Links</h2>
          <p className="mb-6">Our website or social media pages may contain links to third-party websites. We are not responsible for the privacy practices of those external sites.</p>
          
          <h2 className="text-xl font-semibold mb-3">12. Changes to This Policy</h2>
          <p className="mb-6">We may update this Privacy Policy from time to time. Changes will be posted on our website with an updated effective date.</p>
          
          <h2 className="text-xl font-semibold mb-3">13. Contact Us</h2>
          <p className="mb-2">For questions or requests regarding this Privacy Policy, please contact us:</p>
          <a href="/contact" className="text-blue-600 hover:text-blue-800 underline font-semibold">Contact Us</a>
          
          <p className="text-sm text-gray-600">This policy provides a strong foundation for customer transparency and aligns with common privacy policy practices for businesses that collect customer information. If Anchored Bee operates an e-commerce website or serves customers in jurisdictions with specific privacy laws (such as GDPR or other regional regulations), it should be reviewed and adapted to meet those legal requirements.</p>
        </div>
      </div>
    </section>
  )
}

export default Privacy
