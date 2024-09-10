const GreenClubForSchools = () => {
  return (
    <div className="py-16 mt-9">
      <div className="flex flex-row gap-6 overflow-x-scroll border-b-[1px] mb-5 text-[14px] md:text-[16px] ">
        <div>
          <button className="whitespace-nowrap  border-b-4 border-green_two  bg-white cursor-pointer pt-5 pb-1">
            Green Clubs for Schools
          </button>
        </div>
      </div>
      <div className="grid gir-cols-1 md:grid-cols-2 mt-10 justify-items-center  text-[14px] md:text-[16px] md:-mb-28 -mb-20  ">
        <div className="mb-10 md:m-0  ">
          We are piloting Green Clubs for Schools to raise a new generation of
          environmental leaders who are equipped with the knowledge and skills
          to address pressing environmental challenges. Partnering with Green
          Clubs for Schools allows us to support these sustainability clubs in
          secondary and tertiary schools to contribute to sustainable practices
          within educational institutions, creating lasting positive impacts on
          both the environment and local communities. Together, we are
          actualising the Sustainable Development Goals, ensuring that
          today&apos;s students are prepared to lead a greener, more sustainable
          future.
        </div>
        <img
          src="/images/green-club/green-club-logo.jpg"
          alt=""
          className="w-[100%] md:w-[60%] h-[100%] justify-self-center shadow-md "
        />
      </div>
    </div>
  );
};

export default GreenClubForSchools;
