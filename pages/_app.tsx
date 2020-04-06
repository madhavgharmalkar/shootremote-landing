import { AppProps } from "next/app";
import Router from "next/router";
import ReactGA from "react-ga";
import { Grommet } from "grommet";
import { theme } from "../theme";

import "../style.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { GA_TRACKING_ID } from "../helpers/googleAnaltics";

ReactGA.initialize(GA_TRACKING_ID);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Grommet theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Grommet>
  );
};

Router.events.on("routeChangeComplete", (url) => ReactGA.pageview(url));
export default MyApp;
