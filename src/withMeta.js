import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const withMeta = (WrappedComponent, title, description) => {
  return (props) => {
    const location = useLocation();
    const canonicalUrl = `https://thereflectclinic.com${location.pathname}`;

    return (
      <>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withMeta;
