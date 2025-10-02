import SVG from "react-inlinesvg";
import { motion } from "motion/react";
import Countdown from "react-countdown";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Scrollbar } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "swiper/css";
import "swiper/css/free-mode";

import "./App.css";
import aboutUs3 from "./assets/about-us3.jpg";
import aboutUs1 from "./assets/about-us.jpg";
import aboutUs2 from "./assets/about-us2.jpg";
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
import Location from "./assets/location.png";
import Footer from "./assets/footer.jpg";
import Thx from "./assets/thx.jpg";
import RSVPForm from "./component/RSVPForm";
import pw1 from "./assets/pw_1.jpg";
import pw2 from "./assets/pw_2.jpg";
import pw3 from "./assets/pw_3.jpg";
import pw5 from "./assets/pw_5.jpg";
import pw6 from "./assets/pw_6.jpg";
import pw7 from "./assets/pw_7.jpg";
import pw8 from "./assets/pw_8.jpg";
import pw9 from "./assets/pw_9.jpg";
import pw10 from "./assets/pw_10.jpg";
import pw11 from "./assets/pw_11.jpg";
import pw12 from "./assets/pw_12.jpg";
import pw13 from "./assets/pw_13.jpg";
import pw14 from "./assets/pw_14.jpg";
import pw15 from "./assets/pw_15.jpg";
import pw16 from "./assets/pw_16.jpg";
import pw17 from "./assets/pw_17.jpg";
import pw18 from "./assets/pw_18.jpg";
import pw19 from "./assets/pw_19.jpg";
import pw20 from "./assets/pw_20.jpg";

const images = [
  pw1,
  pw2,
  pw3,
  pw5,
  pw6,
  pw7,
  pw8,
  pw9,
  pw10,
  pw11,
  pw12,
  pw13,
  pw14,
  pw15,
  pw16,
  pw17,
  pw18,
  pw19,
  pw20,
];

const App = () => {
  const videoId = "msGuqelopMA";
  const [playing, setPlaying] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);

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
            className="hidden md:block w-[110%] max-h-[40vw] object-cover shadow-2xl object-[0px_-138px]"
          />
          <img
            src={bannerMob}
            alt="Image mob"
            loading="lazy"
            className="md:hidden block w-full max-h-[60vh] h-[60vh] object-cover object-right shadow-2xl"
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
        <div className="md:w-[30vw] md:h-[40vw] w-[50vw] md:mt-10 rounded-3xl">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            grabCursor={true}
            loop={true}
            className="mySwiper"
          >
            {[aboutUs3, aboutUs1, aboutUs2].map((val, key) => {
              return (
                <SwiperSlide key={key}>
                  <img
                    src={val}
                    alt="About Us"
                    className="md:w-[30vw] md:h-[40vw] w-[50vw] rounded-3xl object-cover"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
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
            className="md:text-[24px] text-[16px] font-light mt-6"
          >
            เราอยากให้ทุกท่านมาร่วมเป็นส่วนหนึ่งของการรันโปรแกรมชีวิตคู่
            และร่วมเฉลิมฉลองไปกับเรา
            หวังว่าจะได้พบรอยยิ้มและคำอวยพรจากทุกท่านในวันพิเศษนี้
          </motion.section>
          <div className="text-center md:text-[24px] text-[16px] underline mt-6 font-light">
            ขออภัยหากไม่ได้เรียนเชิญด้วยตัวเอง
          </div>
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
        <div className="bg-[#e8f0df] text-[#827c66] py-2 px-10 rounded-full md:mt-4 mt-10 mb-4 md:text-[3.5vw] text-[8vw] ">
          Save <span className="pb-6">The</span> Date
        </div>
        <div className="my-4 md:text-[24px] text-[16px] font-light">
          หลังจากผ่านการ Debug & Compile ความรักมาอย่างยาวนาน ถึงเวลา Deploy
          โปรเจกต์ชีวิตคู่ ใน
        </div>
        <div className="w-full py-6 text-[#827c66]">
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
          <div className="md:text-2xl text-xs mt-4 font-light">
            Every love story is beautiful, but ours is my favorite 💕
          </div>
        </div>
      </motion.section>
      <div className="mt-10">
        <div className="text-[#827c66] md:text-[3.5vw] text-[8vw]">
          WEDDING SCHEDULE
        </div>
        <div className="text-[#827c66] md:text-[1.5vw] text-[4vw] flex justify-center items-center gap-2">
          <div className="border-b border-[#827c66] pb-2 w-[35%]" />
          กำหนดพิธีการ
          <div className="border-b border-[#827c66] pb-2 w-[35%]" />
        </div>
        <div className="flex justify-center items-center gap-10 max-md:flex-col p-10 mt-4">
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
      </div>
      <div className="md:my-8 border-2 border-[#e8f0df] w-max p-10 rounded-3xl mx-auto">
        <div className="md:text-[40px] text-[25px] pb-2">Dress Code</div>
        <div className="flex justify-center items-center gap-4">
          <SVG src={Bow} className="fill-[#bad29e] w-[60px] h-[60px]" />
          <div className="w-12 h-12 bg-[#827c66] rounded-full" />
          <div className="w-12 h-12 bg-[#bad29e] rounded-full" />
          <div className="w-12 h-12 bg-[#e8f0df] rounded-full" />
          <div className="w-12 h-12 bg-[#faf2e9] rounded-full" />
        </div>
      </div>
      <div className="my-10">
        <div className="text-[#827c66] md:text-[3.5vw] text-[8vw]">
          BEST MOMENT
        </div>
        <div>
          {/* Gallery Grid */}
          <Swiper
            spaceBetween={30}
            modules={[Scrollbar, FreeMode, Autoplay]}
            loop={true}
            scrollbar={{ draggable: true }}
            className="mySwiperGallery"
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 5 },
            }}
            freeMode={{
              enabled: true,
              momentum: true,
              momentumRatio: 0.5,
            }}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
          >
            {images.map((val, key) => {
              return (
                <SwiperSlide key={key}>
                  <img
                    src={val}
                    alt={`wedding-${key}`}
                    className="w-full h-60 object-cover rounded-lg shadow-md cursor-pointer"
                    onClick={() => setIndex(key)}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Lightbox */}
          <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={images.map((src) => ({ src }))}
            plugins={[Thumbnails, Zoom]}
          />
        </div>
      </div>
      <div className="flex justify-center items-center max-md:flex-col p-10 gap-6">
        <RSVPForm />
        <img
          src={Form}
          className="md:w-[40%] md:max-w-[40%] w-full max-w-full md:h-[90vh] h-auto rounded-lg shadow-md object-cover"
        />
      </div>
      <div>
        <div className="flex text-[#827c66] w-full justify-center items-center gap-2">
          <div className="text-[14vw]">L</div>
          <img
            src={Location}
            alt="Location"
            className="w-[14vw] h-[14vw] mb-[3vw] object-cover cursor-pointer"
            onClick={() => {
              window.open(
                "https://maps.app.goo.gl/Jh1AS1HdJqGDrPf2A",
                "_blank"
              );
            }}
          />
          <div className="text-[14vw]">c</div>
          <div className="text-[14vw]">a</div>
          <div className="text-[14vw]">t</div>
          <div className="text-[14vw]">i</div>
          <div className="text-[14vw]">o</div>
          <div className="text-[14vw]">n</div>
        </div>
        <div className="p-10 flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1034.3800324760075!2d99.58311434590813!3d15.248560998940686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDE0JzU0LjgiTiA5OcKwMzUnMDEuNyJF!5e0!3m2!1sth!2sth!4v1759156969621!5m2!1sth!2sth"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full md:h-[30vw] h-[80vw] rounded-lg shadow"
          />
        </div>
      </div>
      <div className="flex justify-between gap-2 items-center mt-10">
        <img
          src={Footer}
          className="w-full h-[70vh] mt-4 object-cover opacity-20"
        />
        <div className="absolute bottom-0 md:left-1.5 flex justify-center items-center max-md:flex-col-reverse max-md:w-full text-[#827c66] text-center">
          <img
            src={Thx}
            className="md:w-[40vw] w-full md:h-[60vh] h-[20vh] object-cover rounded-tr-full"
          />
          <div className="md:w-[60vw] w-full max-md:mb-50">
            <div>© 2026 Max & Mint Wedding</div>
            <div className="text-[#827c66] md:text-[3.5vw] text-[8vw]">
              ขอขอบคุณด้วยหัวใจ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
