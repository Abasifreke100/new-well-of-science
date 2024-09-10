import SectionPadding from "./SectionPadding";
import { Button } from "./button";
import { Link } from "react-router-dom";
import InnovationConsulting from "../partnership/innovation-consulting";
import GreenClubForSchools from "../partnership/green-club-for-schools";
import BringYourBagToShopCampaign from "../partnership/bring-your-bag-to-shop-campaign";
import EnvironmentalEducationBookDistribution from "../partnership/environmental-education-book-distribution";

const PartnershipSwitch = () => {
  return (
    <SectionPadding>
      <div className="max-w-[1440px] xl:px-20 overflow-hidden md:px-0 sm:px-7 mx-auto ">
        <h2 className="font-gen_sans font-semibold ext-[20px] sm:text-[24px] md:text-[32px] ">
          Partnership
        </h2>
        <div className="flex flex-row gap-6 overflow-x-scroll border-b-[1px] mb-5 text-[14px] md:text-[16px] ">
          <div>
            <button
              className={`whitespace-nowrap  border-b-4 border-green_two 
                   bg-white cursor-pointer pt-5 pb-1`}
            >
              Innovation Consulting
            </button>
          </div>
        </div>
        <InnovationConsulting />
        <GreenClubForSchools />
        <BringYourBagToShopCampaign />
        <EnvironmentalEducationBookDistribution />
      </div>
      <div>
        <Button asChild className={"mt-5"}>
          <Link to={"/partnership-form"}>Partner with us</Link>
        </Button>
      </div>
    </SectionPadding>
  );
};

export default PartnershipSwitch;
