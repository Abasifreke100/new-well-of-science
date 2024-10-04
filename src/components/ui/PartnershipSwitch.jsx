import SectionPadding from "./SectionPadding";
import { Button } from "./button";
import { Link } from "react-router-dom";
import PartnershipCard from "../shared/Partnership-Card";
import { partnershipCardData } from "../../store/data/partnership";

const PartnershipSwitch = () => {
  return (
    <SectionPadding>
      <div className="max-w-[1440px] xl:px-20 overflow-hidden md:px-0 sm:px-7 mx-auto ">
        <h2 className="font-gen_sans font-semibold ext-[20px] sm:text-[24px] md:text-[32px] ">
          Partnership
        </h2>
        {partnershipCardData.map((partners) => {
          const { title, content, imageSrc } = partners;
          return (
            <PartnershipCard
              key={title}
              title={title}
              content={content}
              imageSrc={imageSrc}
            />
          );
        })}
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
