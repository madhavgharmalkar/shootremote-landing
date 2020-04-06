export const GA_TRACKING_ID = "UA-162884283-1";
import ReactGA from "react-ga";
import { useRouter } from "next/router";

export const initGA = () => {
  console.log("GA init");
  ReactGA.initialize(GA_TRACKING_ID);
};
export const logPageView = () => {
  const pathname = useRouter().pathname;

  console.log(`Logging pageview for ${pathname}`);
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
};
export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
