import { useState } from "react";
import SectionPadding from "./SectionPadding";
import { Button } from "./button";
import { Link } from "react-router-dom";
import { switchTitle } from "../../store/data/partnership-switch";
import ResponsibleRandRTab from "../partnership/responsible-r&r";
import InnovationConsulting from "../partnership/innovation-consulting";
import GreenClubForSchools from "../partnership/green-club-for-schools";
import BringYourBagToShopCampaign from "../partnership/bring-your-bag-to-shop-campaign";
import EnvironmentalEducationBookDistribution from "../partnership/environmental-education-book-distribution";

const PartnershipSwitch = () => {
  // State Logic
  const [switchState, setSwitchState] = useState(switchTitle[0]);

  const renderTab = {
    [switchTitle[0]]: <ResponsibleRandRTab />,
    [switchTitle[1]]: <InnovationConsulting />,
    [switchTitle[2]]: <GreenClubForSchools />,
    [switchTitle[3]]: <BringYourBagToShopCampaign />,
    [switchTitle[4]]: <EnvironmentalEducationBookDistribution />,
  };

  return (
    <SectionPadding>
      <div className="py-24 ">
        <h2 className="font-gen_sans font-semibold ext-[20px] sm:text-[24px] md:text-[32px] ">
          Partnership
        </h2>
        <div className="flex flex-row gap-6 overflow-x-scroll border-b-[1px] mb-5 text-[14px] md:text-[16px] ">
          {switchTitle.map((cases) => {
            return (
              <div key={cases}>
                <button
                  className={`whitespace-nowrap ${
                    switchState === cases && "border-b-4 border-green_two "
                  } bg-white cursor-pointer pt-5 pb-1`}
                  onClick={() => setSwitchState(cases)}
                >
                  {cases}{" "}
                </button>
              </div>
            );
          })}
        </div>
        {renderTab[switchState]}
      </div>
      <div>
        <Button asChild className={""}>
          <Link to={"/partnership-form"}>Partner with us</Link>
        </Button>
      </div>
    </SectionPadding>
  );
};

export default PartnershipSwitch;
