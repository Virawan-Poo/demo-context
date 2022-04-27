import React from "react";

import { i18nContext, i18n } from "../contexts/i18n-context";

const MyApp = ({ Component, pageProps, lang }) => {
  const i18nValue = lang == i18n.en.env ? i18n.en : i18n.th;
  return (
    <i18nContext.Provider value={i18nValue}>
      <h1>My Application</h1>
      <Component {...pageProps} />
    </i18nContext.Provider>
  );
};

export default MyApp;

MyApp.getInitialProps = async ({ ctx }) => {
  const lang = ctx?.query?.language ?? "th";

  return { lang };
};
