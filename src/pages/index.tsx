import Head from "next/head";

import { AnimatePresence, motion as m, useScroll } from "framer-motion";

import { useEffect, useRef, useState } from "react";

import Navbar from "~/components/Navbar";
import { Checkbox } from "~/components/ui/checkbox";
import AboutComponent from "~/components/about";
import ProjectComponent from "~/components/projects";
import FillerComponent from "~/components/filler";
import FooterComponent from "~/components/footer";
import ContactComponent from "~/components/contact";
import SpecialOffersComponent from "~/components/specials";
import ProjectTitle from "~/components/projecttitle";
import ServiceComponent from "~/components/services";

export default function Home() {
  const aboutref = useRef(null);

  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Lullaby Design - Web Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence>
        <div className="montserrat fixed top-0 z-[200] flex h-[10vh] w-full items-center justify-between text-white md:px-4">
          <Navbar />
        </div>

        <m.main
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <m.div className="h-full w-screen text-white">
              <AboutComponent />
              <div className="sticky top-0 z-[50]">
                <ProjectTitle />
              </div>
              <ProjectComponent />

              <div className="z-[100]">
                <ServiceComponent />
                <SpecialOffersComponent />
                <ContactComponent />
                <FooterComponent />
              </div>
            </m.div>
          </div>
        </m.main>
      </AnimatePresence>
    </>
  );
}
