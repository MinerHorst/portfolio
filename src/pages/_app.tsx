import { ReactLenis } from "@studio-freight/react-lenis";
import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ReactLenis root>
      <Component {...pageProps} />
    </ReactLenis>
  );
};

export default MyApp;
