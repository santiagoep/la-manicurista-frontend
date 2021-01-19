import Head from 'next/head';
import PropTypes from 'prop-types';

export const defaultSeoValues = {
  title: 'LaManicurista App',
  keywords: 'LaManicurista, Test, Songs, Songs Summaries',
  description: 'Está página es una prueba construida para LaManicurista.',
  noIndex: false,
  author: 'Santiago Espitia Patiño'
};

const Seo = ({ title, meta, snippets }) => {
  const {
    metaDescription: pageDescription = defaultSeoValues.description,
    focusKeywords: pageKeywords = defaultSeoValues.keywords,
    noIndex = defaultSeoValues.noIndex,
    metaTitle: pageTitle = title || defaultSeoValues.title,
    ogImage,
    author = defaultSeoValues.author
  } = meta;

  const renderSnippets = () =>
    snippets?.map((snippet, index) => (
      <script type='application/ld+json' key={`json-ld-${index}`}>
        {JSON.stringify(snippet)}
      </script>
    ));

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name='robots' content='all' />
      <meta name='description' content={pageDescription} />
      <meta name='keywords' content={pageKeywords} />
      <meta name='author' content={author} />
      {!!ogImage && !!ogImage.url && (
        <meta property='og:image' content={ogImage.url} />
      )}
      {noIndex && <meta name='robots' content='noindex' />}
      {snippets.length > 0 && renderSnippets()}
      {/* Facebook Open Graph start */}
      <meta content='https://www.facebook.com/la-manicurista' />
      <meta content='es' property='og:locale' />
      <meta
        content='https://la-manicurista-test.vercel.app/'
        property='og:site_name'
      />
      <meta content='website' property='og:type' />
      <meta content='LaManicurista Test' property='og:title' />
      <meta
        content='Está página es una prueba construida para LaManicurista.'
        property='og:description'
      />
      <meta
        content='https://la-manicurista-test.vercel.app/_next/image?url=%2Ficons%2Flogo.png&w=64&q=75'
        property='og:image'
      />
      <meta content='64' property='og:image:width' />
      <meta content='75' property='og:image:height' />
      {/* Facebook Open Graph end */}

      {/* Twitter cards start */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:site'
        content='https://la-manicurista-test.vercel.app/'
      />
      <meta name='twitter:creator' content='@santiagoep' />
      <meta name='twitter:title' content='LaManicurista Test' />
      <meta
        name='twitter:description'
        content='Está página es una prueba construida para LaManicurista.'
      />
      <meta
        name='twitter:image'
        content='https://la-manicurista-test.vercel.app/_next/image?url=%2Ficons%2Flogo.png&w=64&q=75'
      />
      <meta name='twitter:image:width' content='64' />
      <meta name='twitter:image:height' content='75' />
      {/* Twitter cards end */}
    </Head>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.shape({
    metaTitle: PropTypes.string,
    metaDescription: PropTypes.string,
    noIndex: PropTypes.bool,
    ogImage: PropTypes.shape({
      url: PropTypes.string
    }),
    focusKeywords: PropTypes.string,
    author: PropTypes.string
  }),
  snippets: PropTypes.arrayOf(PropTypes.object),
  slug: PropTypes.string
};

Seo.defaultProps = {
  title: defaultSeoValues.title,
  meta: {
    metaTitle: defaultSeoValues.title,
    metaDescription: defaultSeoValues.description,
    noIndex: defaultSeoValues.noIndex,
    focusKeywords: defaultSeoValues.keywords,
    author: defaultSeoValues.author
  },
  snippets: [],
  slug: undefined
};

export default Seo;
