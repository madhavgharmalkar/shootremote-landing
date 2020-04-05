import { AppProps } from "next/app";
import { Grommet } from "grommet";
import { theme } from "../theme";

import "../style.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Grommet theme={theme}>
      <Component {...pageProps} />
    </Grommet>
  );
};

export default MyApp;
