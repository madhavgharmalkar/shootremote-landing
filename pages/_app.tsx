import { AppProps } from "next/app";
import { Grommet } from "grommet";
import { theme } from "../theme";

import "../style.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Grommet theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Grommet>
  );
};

export default MyApp;
