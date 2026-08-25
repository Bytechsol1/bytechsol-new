import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | BytechSol</title>
        <meta name="description" content="Privacy Policy for BytechSol." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://bytechsol.com/privacy-policy/" />
      </Helmet>
      <div className="container" style={{ paddingTop: "150px", paddingBottom: "100px", minHeight: "80vh" }}>
        <h1 className="text-center fw-bold display-4 mb-3">Privacy Policy</h1>

        <div className="mt-5">
          <h2 className="mb-4">SMS/Text Messaging Privacy</h2>
          <p className="mb-3" style={{ fontSize: "16px", lineHeight: "1.6" }}>
            If you consent to receive SMS text messages from ByteTechSol LLC, your mobile phone number and related information will be used solely to send you the SMS communications you have agreed to receive (e.g. appointment reminders, follow-ups, customer support updates).
          </p>
          <p className="mb-3" style={{ fontSize: "16px", lineHeight: "1.6" }}>
            Your mobile information will not be sold, rented, or shared with third parties for promotional or marketing purposes.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            Message and data rates may apply. Message frequency may vary. You may opt out at any time by replying STOP, and request help by replying HELP.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
