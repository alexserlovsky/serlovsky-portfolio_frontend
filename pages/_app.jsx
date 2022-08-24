import Layout from "../components/layout/Layout";
import App from "next/app";

import { createContext, useEffect } from "react";
import { fetchAPI } from "../util/getAPI";

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async(context) => {
  const appProps = await App.getInitialProps(ctx);

  const header = fetchAPI('header', {
    populate:'*',
  });
  const footer = fetchAPI('footer', {
    populate:'*',
  });
  return({
    ...appProps,
    pageProps:{
      header: header.data,
      footer: footer.data
    }
  })
}


export default MyApp;
