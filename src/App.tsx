import SVG from "react-inlinesvg";
import { motion } from "motion/react";
import Countdown from "react-countdown";

import "swiper/css";

import "./App.css";
// import banner from "../public/banner-dt.jpg";
import aboutUs1 from "./assets/about-us.jpg";
import aboutUs2 from "./assets/about-us2.jpg";
import aboutUs3 from "./assets/about-us3.jpg";
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
            loading="lazy"
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
            <div className="absolute md:text-[7vw] text-[14vw] top-0 left-0 font-[Mitr]">
              Max
            </div>
            <div className="absolute md:text-[7vw] text-[14vw] md:top-[5vw] md:left-[11.3vw] top-[8vw] left-[24vw] z-11 font-[Mitr]">
              Mint
            </div>
          </motion.section>
        </motion.section>
      </div>
      <iframe
        width="100"
        height="100"
        src="https://www.youtube.com/embed/msGuqelopMA?si=foMaZQrSdZfqfk-l?autoplay=1&mute=1"
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      />
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ amount: 0.07 }}
        className="w-screen h-auto flex max-md:flex-col-reverse justify-center items-center gap-6 bg-gradient-to-t bg-wedding-gradient"
      >
        {/* <img
          src={aboutUs1}
          alt="About Us"
          className="w-[30vw] h-[40vw] mt-10 rounded-3xl object-cover"
        /> */}

        {/* <img
          src={aboutUs2}
          alt="About Us"
          className="w-[30vw] h-[40vw] mt-10 rounded-3xl object-cover"
        /> */}

        <img
          src={aboutUs3}
          alt="About Us"
          className="md:w-[30vw] md:h-[40vw] w-[50vw] md:mt-10 rounded-3xl object-cover"
        />
        <div className="md:w-[50vw] w-[80vw]">
          <div className="flex justify-center items-center gap-4">
            <motion.section
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ amount: 0.07 }}
              className="font-[Mitr]"
            >
              <span className="font-light md:text-[4vw] text-[8vw] leading-20">
                แหม็ก
              </span>
            </motion.section>
            <SVG
              src={Ring}
              className="w-[4vw] h-[4vw] rotate-[26deg] fill-[#827c66] z-10"
            />
            <motion.section
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ amount: 0.07 }}
              className="font-[Mitr]"
            >
              <span className="font-light md:text-[4vw] text-[8vw] leading-20">
                มิ้นท์
              </span>
            </motion.section>
          </div>
          <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ amount: 0.07 }}
            className="font-[Mitr] md:text-[24px] text-[16px] font-light"
          >
            เราอยากให้ทุกท่านมาร่วมเป็นสักขีพยาน และร่วมเฉลิมฉลองไปกับเรา
            หวังว่าจะได้พบรอยยิ้มและคำอวยพรจากทุกท่านในวันพิเศษนี้
          </motion.section>
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ amount: 0.07 }}
        className="pt-6 m-[0_auto] flex flex-col items-center text-center"
      >
        <div className="relative w-full flex justify-center items-center">
          <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ amount: 0.07 }}
            className="relative md:w-[27vw] md:h-[15vw] w-[235px] h-[120px]"
          >
            <SVG
              src={Ring}
              className="md:w-[4vw] md:h-[4vw] w-[9vw] h-[9vw] absolute md:top-[5.5vw] md:left-[11vw] top-[8vw] left-[24vw] rotate-[26deg] fill-[#e8f0df] z-10"
            />
            <div className="absolute md:text-[7vw] text-[14vw] top-0 left-0 font-[Mitr]">
              Max
            </div>
            <div className="absolute md:text-[7vw] text-[14vw] md:top-[5vw] md:left-[11.3vw] top-[8vw] left-[24vw] z-11 font-[Mitr]">
              Mint
            </div>
          </motion.section>
        </div>
        <div className="bg-[#e8f0df] py-2 px-10 rounded-full my-10 md:text-[3.5vw] text-[8vw] font-[Mitr]">
          Save <span className="pb-6">The</span> Date
        </div>
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
    </div>
  );
};

export default App;
