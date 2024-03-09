import {
  ArrowBigDown,
  ArrowDown,
  ArrowDownNarrowWide,
  ArrowRight,
  Menu,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import Link from "next/link";

import { useRouter } from "next/router";

import { AnimatePresence, animate, motion, useAnimation } from "framer-motion";

export default function Navbar() {
  const controls = useAnimation();

  const router = useRouter();
  const routerName = router.pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    controls.start({ rotate: isMenuOpen ? 45 : 0 });
  }, [isMenuOpen, controls]);

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className="absolute left-0 top-0 z-[200] flex h-fit w-screen flex-col px-4 pb-4">
            <div className="flex h-[10vh] items-center justify-between">
              <p className="text-lg">
                <span className="poppins">Luis</span>
                <span className="playfair italic">Keßler</span>
              </p>
              <p className="hidden md:inline">
                <span className="text-muted-foreground">Projects, </span>
                <span className="text-muted-foreground">About, </span>
                <span className="text-muted-foreground">Specials, </span>
                <span className="text-muted-foreground">Contact</span>
              </p>

              <div className="">
                <nav className="text-white">
                  <button onClick={handleMenuClick}>
                    <span className="hidden underline sm:inline">Menu</span>

                    <motion.div
                      animate={controls}
                      initial={{ rotate: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ display: "inline-block", marginLeft: "5px" }}
                      className="font-light"
                    >
                      +
                    </motion.div>
                  </button>
                </nav>
              </div>
            </div>

            <motion.div
              exit={{ y: "-200%" }}
              initial={{ y: "-200%" }}
              animate={{ y: 0 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.7 }}
              className="row-span-1 grid grid-cols-4 "
            >
              <div className="col-span-1 flex flex-col">
                <h2 className="font-light underline">Navigation</h2>
                <ul>
                  <motion.li
                    initial={{ y: 0 }}
                    whileHover={{ x: +20 }}
                    className="cursor-pointer"
                  >
                    Projects
                  </motion.li>
                  <motion.li
                    initial={{ y: 0 }}
                    whileHover={{ x: +20 }}
                    className="cursor-pointer"
                  >
                    About
                  </motion.li>
                  <motion.li
                    initial={{ y: 0 }}
                    whileHover={{ x: +20 }}
                    className="cursor-pointer"
                  >
                    Contact
                  </motion.li>
                </ul>
              </div>
              <div className="col-span-1 flex flex-col">
                <h2 className="font-light underline">Specials</h2>
                <ul>
                  <motion.li
                    initial={{ y: 0 }}
                    whileHover={{ x: +20 }}
                    className="cursor-pointer"
                  >
                    Non-Profit?
                  </motion.li>
                </ul>
              </div>
              <div className="col-span-1 flex flex-col">
                <h2 className="font-light underline">Contact</h2>
                <ul>
                  <li>
                    <Link href={"/#contact"}>
                      <li className="hidden cursor-pointer md:inline">
                        Get in Contact
                      </li>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1 flex flex-col">
                <h2 className="font-light underline">Socials</h2>
                <ul>
                  <motion.li
                    initial={{ y: 0 }}
                    whileHover={{ x: +20 }}
                    className="cursor-pointer"
                  >
                    Instagram
                  </motion.li>
                  <motion.li
                    initial={{ y: 0 }}
                    whileHover={{ x: +20 }}
                    className="cursor-pointer"
                  >
                    Twitter
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="absolute left-0 top-0 z-[200] flex h-fit w-screen flex-col px-4">
        <div className="flex h-[10vh] items-center justify-between">
          <p className="text-lg">
            <span className="poppins">Luis</span>
            <span className="playfair italic">Keßler</span>
          </p>
          <p className="hidden md:inline">
            <span className="text-muted-foreground">Projects, </span>
            <span className="text-muted-foreground">About, </span>
            <span className="text-muted-foreground">Specials, </span>
            <span className="text-muted-foreground">Contact</span>
          </p>

          <div className="">
            <nav className="text-white">
              <button onClick={handleMenuClick}>
                <span className="">Menu</span>

                <motion.div
                  animate={controls}
                  initial={{ rotate: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ display: "inline-block", marginLeft: "5px" }}
                  className="font-light"
                >
                  +
                </motion.div>
              </button>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}
