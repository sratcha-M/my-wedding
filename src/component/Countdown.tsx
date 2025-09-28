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
    <div className="md:text-[9vw] text-[9vw] md:leading-18 leading-10 font-[Mitr] pt-4 flex justify-center gap-2 mt-4">
      <div className="flex flex-col">
        <div>{days}</div>
        <div className="md:mt-4 md:text-[2vw] text-[3vw] font-light">Days</div>
      </div>
      <div className="m-[0_10px_0_10px]">:</div>
      <div className="flex flex-col">
        <div>{hours}</div>
        <div className="md:mt-4 md:text-[2vw] text-[3vw] font-light">Hours</div>
      </div>
      <div className="m-[0_10px_0_10px]">:</div>
      <div className="flex flex-col">
        <div>{minutes}</div>
        <div className="md:mt-4 md:text-[2vw] text-[3vw] font-light">
          Minutes
        </div>
      </div>
      <div className="m-[0_10px_0_10px]">:</div>
      <div className="flex flex-col text-red-500">
        <div>{seconds}</div>
        <div className="md:mt-4 md:text-[2vw] text-[3vw] text-black font-light">
          Seconds
        </div>
      </div>
    </div>
  );
};

export default Countdowns;
