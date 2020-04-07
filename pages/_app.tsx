import { AppProps } from "next/app";
import { Grommet } from "grommet";
import { theme } from "../theme";

import "../style.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Grommet theme={theme}>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </Grommet>
  );
};

export default MyApp;
