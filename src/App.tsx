import SVG from "react-inlinesvg";
import { motion } from "motion/react";
import Countdown from "react-countdown";
import { useState } from "react";

import "swiper/css";

import "./App.css";
import aboutUs3 from "./assets/about-us3.jpg";
import banner from "./assets/banner-dt.jpg";
import bannerMob from "./assets/banner-mob.png";
import Ring from "./assets/ring.svg";
import Countdowns from "./component/Countdown";
import play from "./assets/play.svg";
import pause from "./assets/pause.svg";
import TimeLine1 from "./assets/timeline-1.png";
import TimeLine2 from "./assets/timeline-2.png";
import TimeLine3 from "./assets/timeline-3.png";
import TimeLine5 from "./assets/timeline-5.svg";
import Bow from "./assets/bow.svg";
import Form from "./assets/form.jpg";
import RSVPForm from "./component/RSVPForm";

const App = () => {
  const videoId = "msGuqelopMA";
  const [playing, setPlaying] = useState(false);

  const buildSrc = (playing: boolean) => {
    const autoplay = playing ? 1 : 0;
    return `https://www.youtube.com/embed/${videoId}?si=foMaZQrSdZfqfk-l&rel=0&enablejsapi=1&autoplay=${autoplay}&mute=${0}`;
  };

  return (
    <div className="relative">
      <SVG
        src={playing ? pause : play}
        onClick={() => setPlaying((p) => !p)}
        className="fixed md:bottom-10 bottom-4 md:right-12 right-5 md:w-[4vw] md:h-[4vw] w-[40px] h-[40px] z-50 cursor-pointer"
      />
      <div className="text-[rgba(99,99,99,0.5)] fixed md:bottom-4 bottom-1 md:right-4 right-1 z-50 md:text-[1vw] text-[10px]">
        version 28.02.69
      </div>
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
            <div
              className="absolute md:text-[7vw] text-[14vw] top-0 left-0 "
              style={{ textShadow: "3px 3px 6px rgba(99,99,99,0.5)" }}
            >
              Max
            </div>
            <div
              className="absolute md:text-[7vw] text-[14vw] md:top-[5vw] md:left-[11.3vw] top-[8vw] left-[24vw] z-11 "
              style={{ textShadow: "3px 3px 6px rgba(99,99,99,0.5)" }}
            >
              Mint
            </div>
          </motion.section>
        </motion.section>
      </div>
      {/* <iframe
        width="100"
        height="100"
        src="https://www.youtube.com/embed/msGuqelopMA?si=foMaZQrSdZfqfk-l?autoplay=1&mute=1"
        title="YouTube video player"
        allow="autoplay; encrypted-media"
      /> */}
      <iframe
        className="opacity-0 w-0 h-0"
        src={buildSrc(playing)}
        title="YouTube video"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
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
              className=""
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
              className=""
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
            className="md:text-[24px] text-[16px] font-light"
          >
            เราอยากให้ทุกท่านมาร่วมเป็นส่วนหนึ่งของการรันโปรแกรมชีวิตคู่
            และร่วมเฉลิมฉลองไปกับเรา
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
            <div
              className="absolute md:text-[7vw] text-[14vw] top-0 left-0 "
              style={{ textShadow: "3px 3px 6px rgba(99,99,99,0.5)" }}
            >
              Max
            </div>
            <div
              className="absolute md:text-[7vw] text-[14vw] md:top-[5vw] md:left-[11.3vw] top-[8vw] left-[24vw] z-11 "
              style={{ textShadow: "3px 3px 6px rgba(99,99,99,0.5)" }}
            >
              Mint
            </div>
          </motion.section>
        </div>
        <div className="bg-[#e8f0df] py-2 px-10 rounded-full md:mt-4 mt-10 mb-4 md:text-[3.5vw] text-[8vw] ">
          Save <span className="pb-6">The</span> Date
        </div>
        <div className="mb-4 md:text-[24px] text-[16px] font-light">
          หลังจากผ่านการ Debug & Compile ความรักมาอย่างยาวนาน ถึงเวลา Deploy
          โปรเจกต์ชีวิตคู่ ใน
        </div>
        <div className="w-full py-6">
          <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ amount: 0.07 }}
            className="md:text-[3.5vw] text-[8vw] "
          >
            วันเสาร์
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ amount: 0.07 }}
            className="md:text-[3.5vw] text-[8vw] "
          >
            28
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ amount: 0.07 }}
            className="md:text-[3.5vw] text-[8vw] "
          >
            กุมภาพันธ์
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ amount: 0.07 }}
            className="md:text-[3.5vw] text-[8vw] "
          >
            2569
          </motion.section>
        </div>
        <div className="bg-[#faf2e9] w-full pb-6 md:pt-6">
          <Countdown date={"2026-02-28T00:00:00"} renderer={Countdowns} />
        </div>
      </motion.section>
      <div className="flex justify-center items-center gap-10 max-md:flex-col p-10">
        <div className="flex justify-between items-start gap-4">
          <div className="md:w-[17vw] w-[25vw] gap-4 flex flex-col justify-center items-center">
            <img
              src={TimeLine1}
              alt="Time line 1"
              className="md:w-[140px] md:h-[140px] w-[25vw] h-[25vw]"
            />
            <div className="md:text-[26px] text-[20px]">07.09 น.</div>
            <div className="md:text-[26px] text-[16px] font-light">
              พิธีสงฆ์
            </div>
          </div>
          <div className="md:w-[17vw] w-[25vw] gap-4 flex flex-col justify-center items-center">
            <img
              src={TimeLine2}
              alt="Time line 2"
              className="md:w-[140px] md:h-[140px] w-[25vw] h-[25vw]"
            />
            <div className="md:text-[26px] text-[20px]">08.09 น.</div>
            <div className="md:text-[26px] text-[16px] font-light">
              พิธีแห่ขันหมาก
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start gap-4">
          <div className="md:w-[17vw] w-[25vw] gap-4 flex flex-col justify-center items-center">
            <img
              src={TimeLine3}
              alt="Time line 3"
              className="md:w-[140px] md:h-[140px] w-[25vw] h-[25vw]"
            />
            <div className="md:text-[26px] text-[20px]">09.09 น.</div>
            <div className="md:text-[26px] text-[16px] font-light">
              พิธีรดน้ำสังข์
            </div>
          </div>
          <div className="md:w-[17vw] w-[25vw] gap-4 flex flex-col justify-center items-center">
            <img
              src={Ring}
              alt="Time line 4"
              className="md:w-[140px] md:h-[140px] w-[25vw] h-[25vw]"
            />
            <div className="md:text-[26px] text-[20px]">10.09 น.</div>
            <div className="md:text-[26px] text-[16px] font-light">
              พิธีสวมแหวน
            </div>
          </div>
          <div className="md:w-[17vw] w-[25vw] gap-4 flex flex-col justify-center items-center">
            <SVG
              src={TimeLine5}
              className="md:w-[140px] md:h-[140px] w-[25vw] h-[25vw]"
            />
            <div className="md:text-[26px] text-[20px]">11.30 น.</div>
            <div className="md:text-[26px] text-[16px] font-light">
              ฉลองมงคลสมรส (โต๊ะจีน)
            </div>
          </div>
        </div>
      </div>
      <div className="md:my-10">
        <div className="md:text-[40px] text-[25px] pb-2">Dress Code</div>
        <div className="flex justify-center items-center gap-4">
          <SVG src={Bow} className="fill-[#bad29e] w-[60px] h-[60px]" />
          <div className="w-12 h-12 bg-[#827c66] rounded-full" />
          <div className="w-12 h-12 bg-[#bad29e] rounded-full" />
          <div className="w-12 h-12 bg-[#e8f0df] rounded-full" />
          <div className="w-12 h-12 bg-[#faf2e9] rounded-full" />
        </div>
      </div>
      <div className="flex justify-center items-center max-md:flex-col p-10 gap-6">
        <RSVPForm />
        <img
          src={Form}
          className="md:w-[40%] md:max-w-[40%] w-full max-w-full md:h-[90vh] h-auto rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  );
};

export default App;
