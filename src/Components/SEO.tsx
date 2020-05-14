import React from 'react';

import { Helmet } from 'react-helmet';

export const SEO = ({ title }: SEOProps) => {
  const description =
    'The official legal note site for the Avenues Law Review.';

  return (
    <>
      <Helmet
        title={title}
        titleTemplate={'%s | Avenues Law Review'}
        meta={[
          {
            name: 'description',
            content: description
          },
          {
            property: 'og:title',
            content: title
          },
          {
            property: 'og:description',
            content: description
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: `twitter:creator`,
            content: 'knowitallking'
          },
          {
            name: `twitter:title`,
            content: title
          },
          {
            name: `twitter:description`,
            content: description
          }
        ]}
      ></Helmet>
    </>
  );
};

type SEOProps = {
  title: string;
};
