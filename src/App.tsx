import SVG from "react-inlinesvg";
import { motion } from "motion/react";

import "./App.css";
// import banner from "../public/banner-dt.jpg";
// import bannerMob from "../public/banner-mob.png";
import banner from "./assets/banner-dt.jpg";
import bannerMob from "./assets/banner-mob.png";
import Ring from "./assets/ring.svg";

const App = () => {
  return (
    <div className="relative">
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ amount: 0.05 }}
        className={`md:hidden flex relative w-screen max-h-[40vw] bg-cover bg-center`}
      >
        <img
          src={banner}
          alt="Image 1"
          className="w-full max-h-[40vw] object-cover"
        />
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ amount: 0.07 }}
          className="absolute top-[1vw] left-[29vw] w-[30vw] h-[350px]"
        >
          <SVG
            src={Ring}
            className="w-[4vw] h-[4vw] absolute top-[5.5vw] left-[11vw] rotate-[26deg] fill-[#e8f0df] z-10"
          />
          <div className="absolute text-[7vw] top-0 left-0 font-[Allura]">
            Max
          </div>
          <div className="absolute text-[7vw] top-[5vw] left-[11.3vw] z-11 font-[Allura]">
            Mint
          </div>
        </motion.section>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ amount: 0.05 }}
        className={`md:flex hidden relative w-screen md:max-h-[40vw] sm:max-h-[80vw] max-h-[80vh] bg-cover bg-center`}
      >
        <img
          src={bannerMob}
          alt="Image mob"
          className="sm:w-[110%] w-[100%] sm:max-h-[80vw] max-h-[60vh] object-cover max-sm:bg-center"
        />
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ amount: 0.07 }}
          className="absolute top-[6vw] left-[12vw] w-[80vw] h-[350px]"
        >
          <SVG
            src={Ring}
            className="w-[9vw] h-[9vw] absolute top-[8vw] left-[24vw] rotate-[26deg] fill-[#e8f0df] z-10"
          />
          <div className="absolute text-[14vw] top-0 left-0 font-[Allura]">
            Max
          </div>
          <div className="absolute text-[14vw] top-[8vw] left-[24vw] z-11 font-[Allura]">
            Mint
          </div>
        </motion.section>
      </motion.section>
      <div className="p-10 h-[100vh]">
        Mint MintMint Mint Mint Mint Mint Mint Mint Mint Mint Mint Mint Mint
        Mint Mint Mint Mint Mint Mint Mint Mint Mint Mint Mint Mint Mint Mint
        Mint Mint
        <div className="p-2 bg-green-200 md:bg-blue-400 w-full h-[10vh]"></div>
      </div>
    </div>
  );
};

export default App;
