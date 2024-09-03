const BringYourBagToShopCampaign = () => {
  return (
    <div className="py-16 mt-9">
      <div className="flex flex-row gap-6 overflow-x-scroll border-b-[1px] mb-5 text-[14px] md:text-[16px] ">
        <div>
          <button className="whitespace-nowrap  border-b-4 border-green_two  bg-white cursor-pointer pt-5 pb-1">
            Bring Your Bag To Shop Campaign
          </button>
        </div>
      </div>
      <div className="grid gir-cols-1 md:grid-cols-2 items-center justify-items-center  text-[14px] md:text-[16px] md:-mb-28 -mb-20  ">
        <div className="mb-10 md:m-0  ">
          The movement to eliminate single-use plastic bags is a collective
          effort. We&apos;ve curated the &quot;Bring Your Bag to Shop&quot;
          campaign to encourage a shift toward reusable shopping bags in local
          stores and malls. Together, we can transform our communities by
          adopting sustainable practices that protect our environment.
          Let&apos;s make every shopping trip an opportunity to reduce
          single-use plastic and embrace a greener lifestyle. You can partner
          with the campaign as a brand, store, mall, or estate, which will
          enhance your brand visibility and reputation.
        </div>
        <img
          src="/images/bring-your-bag.jpg"
          alt=""
          className="w-[100%] md:w-[60%] h-[100%] justify-self-center "
        />
      </div>
    </div>
  );
};

export default BringYourBagToShopCampaign;
