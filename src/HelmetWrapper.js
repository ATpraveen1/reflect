import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetWrapper = ({ title, description }) => {
  // Log title for debugging purposes (optional)
  console.log("Current title:", title);

  return (
    <Helmet>
      <title>{title || "Best Skin & Hair Care Clinic in Coimbatore - Reflect Clinic"}</title>
      <meta name="description" content={description || "Elevate your beauty with the finest skin and hair care treatments at Reflect Clinic, the trusted clinic in Coimbatore. Book your appointment now!"} />
    </Helmet>
  );
};

export default HelmetWrapper;
