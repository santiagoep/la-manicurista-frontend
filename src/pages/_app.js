import Router from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import { persistStore } from 'redux-persist';
import { ThemeProvider } from 'styled-components';
import { useStore, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import wrapper from '@store/index';
import Seo from '@components/Seo/Seo';
import i18n from '@config/translations';
import themes from '@assets/styles/themes';
import BaseStyles from '@components/BaseStyles/BaseStyles';

const RootComponent = ({ Component, pageProps }) => {
  const store = useStore();
  const persistor = persistStore(store);
  const { theme, fontSize, language } = useSelector(({ config }) => config);
  const selectedTheme = themes.find(({ name }) => name === theme);

  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <PersistGate persistor={persistor} loading={null}>
      {() => (
        <ThemeProvider theme={selectedTheme}>
          <Seo />
          <BaseStyles fontSize={fontSize} />
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </PersistGate>
  );
};

RootComponent.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.instanceOf(Array)
  ]).isRequired
};

export default wrapper.withRedux(RootComponent);
