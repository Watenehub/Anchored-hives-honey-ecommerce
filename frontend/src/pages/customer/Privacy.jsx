import React from 'react'

const Privacy = () => {
  return (
    <section className="py-16 relative">
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0" style={{ backgroundImage: 'url(/watermark-logo.png)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', mixBlendMode: 'multiply' }}></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-8 text-amber-900">Anchored Bee Privacy Policy</h1>
        <div className="prose prose-lg prose-amber max-w-4xl mx-auto text-left">
          <p className="mb-6">Below is a professional Privacy Policy suitable for Anchored Bee, a honey and bee products company. It should be customised with your official business address, email, website, and applicable legal requirements before publication. Businesses that collect customer information online should clearly explain what data they collect, why they collect it, how it is protected, and customers' rights.</p>
          
          <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
          <p className="mb-6">Anchored Bee ("we," "our," or "us") is committed to protecting the privacy and personal information of our customers, partners, and website visitors. This Privacy Policy explains how we collect, use, store, and safeguard your information when you interact with our business, website, or purchase our products.</p>
          
          <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
          <p className="mb-2">We may collect the following information:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Delivery or billing address</li>
            <li>Payment information (processed securely through authorised payment providers)</li>
            <li>Purchase history</li>
            <li>Website usage information (cookies, browser type, IP address)</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
          <p className="mb-2">Your information may be used to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Process and deliver orders</li>
            <li>Respond to inquiries and customer support requests</li>
            <li>Improve our products and services</li>
            <li>Send order confirmations and delivery updates</li>
            <li>Share promotional offers (only with your consent where required)</li>
            <li>Meet legal and regulatory obligations</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3">4. Data Sharing</h2>
          <p className="mb-2">Anchored Bee does not sell or rent customer information.</p>
          <p className="mb-2">We may share information only with:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Delivery and logistics partners</li>
            <li>Secure payment processors</li>
            <li>Technology service providers</li>
            <li>Government authorities where required by law</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3">5. Data Security</h2>
          <p className="mb-6">We implement appropriate administrative, technical, and physical safeguards to protect your personal information from unauthorised access, disclosure, alteration, or destruction.</p>
          
          <h2 className="text-xl font-semibold mb-3">6. Cookies</h2>
          <p className="mb-2">Our website may use cookies to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Improve website functionality</li>
            <li>Remember user preferences</li>
            <li>Analyse website traffic</li>
            <li>Enhance customer experience</li>
          </ul>
          <p className="mb-6">You may disable cookies through your browser settings, although some website features may not function properly.</p>
          
          <h2 className="text-xl font-semibold mb-3">7. Marketing Communications</h2>
          <p className="mb-6">If you subscribe to our newsletters or promotional messages, you may opt out at any time by clicking the unsubscribe link or contacting us directly.</p>
          
          <h2 className="text-xl font-semibold mb-3">8. Data Retention</h2>
          <p className="mb-2">We retain personal information only for as long as necessary to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Fulfil customer orders</li>
            <li>Maintain business records</li>
            <li>Comply with tax and legal obligations</li>
            <li>Resolve disputes</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3">9. Your Rights</h2>
          <p className="mb-2">Subject to applicable law, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Restrict or object to certain processing</li>
            <li>Withdraw consent where applicable</li>
          </ul>
          
          <h2 className="text-xl font-semibold mb-3">10. Children's Privacy</h2>
          <p className="mb-6">Anchored Bee does not knowingly collect personal information from children under the age required by applicable law without parental or guardian consent.</p>
          
          <h2 className="text-xl font-semibold mb-3">11. Third-Party Links</h2>
          <p className="mb-6">Our website or social media pages may contain links to third-party websites. We are not responsible for the privacy practices of those external sites.</p>
          
          <h2 className="text-xl font-semibold mb-3">12. Changes to This Policy</h2>
          <p className="mb-6">We may update this Privacy Policy from time to time. Changes will be posted on our website with an updated effective date.</p>
          
          <h2 className="text-xl font-semibold mb-3">13. Contact Us</h2>
          <p className="mb-2">For questions or requests regarding this Privacy Policy, please contact:</p>
          <div className="p-4 rounded-lg mb-6 bg-amber-200/50">
            <p className="font-semibold mb-2">Anchored Bee</p>
            <p className="mb-1">Email: info@anchoredbee.com</p>
            <p className="mb-1">Phone: +254 723 142 634</p>
            <p className="mb-1">Website: www.Anchoredbeeventure.com</p>
            <p>Address: 77027-00100 Nairobi-Kenya</p>
          </div>
          
          <p className="text-sm text-gray-600">This policy provides a strong foundation for customer transparency and aligns with common privacy policy practices for businesses that collect customer information. If Anchored Bee operates an e-commerce website or serves customers in jurisdictions with specific privacy laws (such as GDPR or other regional regulations), it should be reviewed and adapted to meet those legal requirements.</p>
        </div>
      </div>
    </section>
  )
}

export default Privacy
