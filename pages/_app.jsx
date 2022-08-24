import Layout from "../components/layout/Layout";
import App from "next/app";
import { useEffect } from "react";
import { fetchAPI } from "../utils/fetchAPI";

function MyApp({ Component, pageProps }) {
  const { header, footer } = pageProps;
  return (
    <Layout header={header} footer={footer}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  const header = await fetchAPI("header", {
    populate: "*",
  });
  const footer = await fetchAPI("footer", {
    populate: "*",
  });
  return {
    ...appProps,
    pageProps: {
      header: header.data,
      footer: footer.data,
    },
  };
};

export default MyApp;
