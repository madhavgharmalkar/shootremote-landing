import { AppProps } from "next/app";
import { Grommet } from "grommet";
import { theme } from "../theme";

import "../style.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { initGA } from "../helpers/googleAnaltics";

const MyApp = ({ Component, pageProps }: AppProps) => {
  initGA();

  return (
    <Grommet theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Grommet>
  );
};

export default MyApp;
