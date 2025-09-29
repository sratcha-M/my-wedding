const RSVPForm = () => {
  return (
    <div className="md:w-[60%] md:max-w-[60%] w-full flex flex-col justify-center">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdGA6EOQa3CokZcieuvZOc5D8TutrHadLziqso0dK9nCkozXw/viewform?usp=dialog&embedded=true"
        className="w-full max-w-[90vw] md:h-[90vh] h-[60vh] rounded-xl shadow-lg"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      />
    </div>
  );
};

export default RSVPForm;
