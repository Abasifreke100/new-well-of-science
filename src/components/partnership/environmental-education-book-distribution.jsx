const EnvironmentalEducationBookDistribution = () => {
  return (
      <div className="py-16 mt-9">
      <div className="flex flex-row gap-6  border-b-[1px] mb-5 text-[14px] md:text-[16px] ">
        <div>
          <button className="whitespace-nowrap  border-b-4 border-green_two  bg-white cursor-pointer pt-5 pb-1">
          Environmental Education Book Distribution
          </button>
        </div>
      </div>
      <div className="grid gir-cols-1 md:grid-cols-2  justify-center mt-10  text-[14px] md:text-[16px] md:-mb-28 -mb-20  ">
        <div className="mb-10 md:m-0  ">
       Partnering in the distribution of environmental books written by our
        co-founders, such as <span className="italic">&quot;Akon and Friends,&quot;</span> for primary and secondary
        schools can facilitate early awareness and action toward environmental
        sustainability among young learners. This initiative aims to instill
        lifelong habits of waste management and sustainable living. It also
        serves as a corporate social responsibility tool by contributing to
        environmental education and nurturing the next generation of
        eco-conscious citizens. Additionally, such partnerships can enhance
        brand reputation and demonstrate a commitment to a sustainable future.
        </div>
        <img
          src="/images/green-club/akon-and-friends.jpg"
          alt=""
          className="w-[100%] md:w-[60%] h-[100%] justify-self-center "
        />
      </div>
    </div>
    
  );
};

export default EnvironmentalEducationBookDistribution;

 