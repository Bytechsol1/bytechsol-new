import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
    <Helmet>
  <title>Page Not Found | BytechSol</title>
  <meta
    name="description"
    content="Oops! The page you’re looking for doesn’t exist. Return to BytechSol’s homepage and explore our digital solutions."
  />
  <meta name="robots" content="noindex, follow" />
  <link rel="canonical" href="https://www.bytechsol.com/404" />
</Helmet>

    <div className="notfound-container">
      <motion.h1
        className="notfound-404"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="notfound-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Page Not Found
      </motion.h2>

      <motion.p
        className="notfound-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link to="/" className="notfound-btn">
          Go Back Home
        </Link>
      </motion.div>
    </div>
    </>
  );
};

export default NotFound;
