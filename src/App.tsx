import SVG from "react-inlinesvg";
import { motion } from "motion/react";
import Countdown from "react-countdown";

import "swiper/css";

import "./App.css";
// import banner from "../public/banner-dt.jpg";
import LogoText from "./assets/logo-text.png";
import banner from "./assets/banner-dt.jpg";
import bannerMob from "./assets/banner-mob.png";
import Ring from "./assets/ring.svg";
import Countdowns from "./component/Countdown";

const App = () => {
  return (
    <div className="relative">
      <div
        className={`relative w-screen md:max-h-[40vw] max-h-[60vh] bg-cover bg-center`}
      >
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ amount: 0.05 }}
        >
          <img
            src={banner}
            alt="Image tb"
            className="hidden md:block w-[110%] max-h-[40vw] object-cover"
          />
          <img
            src={bannerMob}
            alt="Image mob"
            className="md:hidden block w-full max-h-[60vh] h-[60vh] object-cover object-right"
          />
          <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ amount: 0.07 }}
            className="absolute md:top-[1vw] md:left-[29vw] md:w-[30vw] top-[6vw] left-[12vw] w-[80vw] h-[350px]"
          >
            <SVG
              src={Ring}
              className="md:w-[4vw] md:h-[4vw] w-[9vw] h-[9vw] absolute md:top-[5.5vw] md:left-[11vw] top-[8vw] left-[24vw] rotate-[26deg] fill-[#e8f0df] z-10"
            />
            <div className="absolute md:text-[7vw] text-[14vw] top-0 left-0 font-[Allura]">
              Max
            </div>
            <div className="absolute md:text-[7vw] text-[14vw] md:top-[5vw] md:left-[11.3vw] top-[8vw] left-[24vw] z-11 font-[Allura]">
              Mint
            </div>
          </motion.section>
        </motion.section>
      </div>
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ amount: 0.07 }}
        className="pt-2 m-[0_auto] flex flex-col items-center text-center"
      >
        <img
          src={LogoText}
          alt="Image LogoText"
          className="md:w-[25vw] w-[60vw] text-center"
        />
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ amount: 0.07 }}
          className="md:text-[3.5vw] text-[8vw] font-[Mitr]"
        >
          28
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ amount: 0.07 }}
          className="md:text-[3.5vw] text-[8vw] font-[Mitr]"
        >
          กุมภาพันธ์
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ amount: 0.07 }}
          className="md:text-[3.5vw] text-[8vw] font-[Mitr]"
        >
          2569
        </motion.section>
        <Countdown date={"2026-02-28T00:00:00"} renderer={Countdowns} />
      </motion.section>
      <div className="p-10 h-[100vh]">
        Mint MintMint Mint Mint Mint Mint Mint Mint Mint Mint Mint Mint Mint
        Mint Mint Mint Mint Mint Mint Mint Mint Mint Mint Mint Mint Mint Mint
        Mint Mint
      </div>
    </div>
  );
};

export default App;
