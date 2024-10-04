import PropTypes from "prop-types";

const PartnershipCard = ({ title, content, imageSrc }) => {
  return (
    <div className="py-16 mt-9 h-full">
      {/* Header Section */}
      <div className="flex flex-row gap-6 border-b-[1px] mb-5 text-[14px] md:text-[16px]">
        <div>
          <button className="whitespace-nowrap border-b-4 border-green_two bg-white cursor-pointer pt-5 pb-1">
            {title}
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mt-10">
        {/* Text Section */}
        <p className="flex-1 text-[14px] md:text-[16px] md:leading-7 leading-6 mb-5 md:mb-0">
          {content}
        </p>

        {/* Image Section */}
        <img
          src={imageSrc}
          alt="Green Club"
          className="w-full md:w-[40%] lg:w-[30%] h-auto justify-self-center shadow-md"
        />
      </div>
    </div>
  );
};

PartnershipCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default PartnershipCard;
