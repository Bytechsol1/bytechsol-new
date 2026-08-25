import { Helmet } from "react-helmet";

const TermsAndCondition = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | BytechSol</title>
        <meta name="description" content="Terms and Conditions for BytechSol." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://bytechsol.com/terms-and-condition/" />
      </Helmet>
      <div className="container" style={{ paddingTop: "150px", paddingBottom: "100px", minHeight: "80vh" }}>
        <h1 className="text-center fw-bold display-4 mb-3">Terms and Conditions</h1>


        <div className="mt-5" style={{ fontSize: "16px", lineHeight: "1.6" }}>
          <p className="mb-4">
            Welcome to BytechSol LLC ("we," "our," or "us"). By accessing our website (https://bytechsolllc.com/) and utilizing our web development, AI/ML, ERP/Odoo, and digital marketing services, you agree to comply with and be bound by the following Terms and Conditions and Privacy Policy. Please read them carefully.
          </p>

          <h3 className="fw-bold mt-4 mb-3">1. Acceptance of Terms</h3>
          <p className="mb-4">
            By using our website, submitting inquiries, or engaging our services, you accept these terms in full. If you disagree with any part of these terms, please do not use our website or services.
          </p>

          <h3 className="fw-bold mt-4 mb-3">2. Services Provided</h3>
          <p className="mb-4">
            BytechSol LLC provides full-stack software development, custom web applications, AI/ML integrations, Odoo migration and customization, and related digital solutions. All project deliverables, timelines, and specific technical requirements will be outlined in individual client agreements, proposals, or statements of work (SOW).
          </p>

          <h3 className="fw-bold mt-4 mb-3">3. Privacy and Data Collection</h3>
          <p className="mb-3">
            We are committed to protecting your personal information. We collect data necessary to provide our digital solutions, process transactions, respond to inquiries, and communicate with you regarding your projects. We do not sell your personal data to third parties.
          </p>
          <h5 className="fw-bold mt-3 mb-2">SMS/Text Messaging Privacy</h5>
          <p className="mb-3">
            If you consent to receive SMS text messages from ByteTechSol LLC, your mobile phone number and related information will be used solely to send you the SMS communications you have agreed to receive (e.g. appointment reminders, follow-ups, customer support updates).
          </p>
          <p className="mb-3">
            Your mobile information will not be sold, rented, or shared with third parties for promotional or marketing purposes.
          </p>
          <p className="mb-4">
            Message and data rates may apply. Message frequency may vary. You may opt out at any time by replying STOP, and request help by replying HELP.
          </p>

          <h3 className="fw-bold mt-4 mb-3">4. Intellectual Property Rights</h3>
          <p className="mb-4">
            Unless otherwise stated in a specific client agreement, all content, graphics, website design, and materials on this website are the intellectual property of BytechSol LLC. You may not reproduce, distribute, or create derivative works without our express written consent. Upon full payment for our services, clients generally retain the intellectual property rights to their custom-developed solutions as detailed in their specific contracts.
          </p>

          <h3 className="fw-bold mt-4 mb-3">5. User Responsibilities</h3>
          <p className="mb-2">When interacting with our website or services, you agree not to:</p>
          <ul className="mb-4">
            <li>Use our platform for any unlawful purpose.</li>
            <li>Attempt to gain unauthorized access to our servers, user accounts, or backend systems.</li>
            <li>Submit false, inaccurate, or malicious information through our contact forms or AI chatbots.</li>
          </ul>

          <h3 className="fw-bold mt-4 mb-3">6. Limitation of Liability</h3>
          <p className="mb-4">
            BytechSol LLC strives to deliver high-quality, secure, and scalable software solutions. However, we do not warrant that our website or services will be completely error-free or uninterrupted. In no event shall BytechSol LLC, its directors, partners, or employees be liable for any indirect, consequential, or incidental damages arising out of your use of our website or services.
          </p>

          <h3 className="fw-bold mt-4 mb-3">7. Third-Party Links</h3>
          <p className="mb-4">
            Our website may contain links to third-party websites, client portfolios, or external resources. We do not control these external sites and assume no responsibility for their content, privacy policies, or practices.
          </p>

          <h3 className="fw-bold mt-4 mb-3">8. Modifications to Terms</h3>
          <p className="mb-4">
            We reserve the right to update or modify these Terms and Conditions and Privacy Policy at any time. Any changes will be posted on this page with an updated revision date. Continued use of the website after changes constitutes your acceptance of the new terms.
          </p>

          <h3 className="fw-bold mt-4 mb-3">9. Contact Us</h3>
          <p className="mb-2">
            If you have any questions, concerns, or requests regarding these terms, your privacy, or how your data is handled, please contact us at:
          </p>
          <p className="mb-4">
            <strong>BytechSol LLC</strong><br />
            Email: <a href="mailto:info@bytechsol.com">info@bytechsol.com</a><br />
            Website: <a href="https://bytechsolllc.com/" target="_blank" rel="noopener noreferrer">https://bytechsolllc.com/</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;
