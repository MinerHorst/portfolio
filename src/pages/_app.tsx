import { ReactLenis } from "@studio-freight/react-lenis";
import { type AppType } from "next/dist/shared/lib/utils";
import { ParallaxProvider } from "react-scroll-parallax";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ParallaxProvider>
      <ReactLenis root>
        <Component {...pageProps} />
      </ReactLenis>
    </ParallaxProvider>
  );
};

export default MyApp;
