const Countdowns = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  return (
    <div className="md:text-[9vw] text-[12vw] md:leading-18 leading-10 font-[Allura] pt-4 flex justify-center gap-2 mt-10">
      <div className="flex flex-col">
        {days}
        <span className="md:text-[3vw] text-[5vw]">Days</span>
      </div>
      <div className="m-[0_10px_0_10px]">:</div>
      <div className="flex flex-col">
        {hours}
        <span className="md:text-[3vw] text-[5vw]">Hours</span>
      </div>
      <div className="m-[0_10px_0_10px]">:</div>
      <div className="flex flex-col">
        {minutes}
        <span className="md:text-[3vw] text-[5vw]">Minutes</span>
      </div>
      <div className="m-[0_10px_0_10px]">:</div>
      <div className="flex flex-col text-red-500">
        {seconds}
        <span className="md:text-[3vw] text-[5vw] text-black">Seconds</span>
      </div>
    </div>
  );
};

export default Countdowns;
