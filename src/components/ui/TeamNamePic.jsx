const TeamNamePic = ({ name, role, rotate, img, roleBg }) => {
  return (
    <div className="flex flex-col justify-center  md:mx-10  ">
      <div className=" flex items-center justify-center">
        <img
          src={img}
          alt=""
          className="w-40 h-40  rounded-full object-cover object-top "
        />
      </div>
      <div
        className={`bg-white rounded-2xl text-center text-[20px] shadow-xl justify-center mx-1 my-6 ${rotate} `}
      >
        <h4 className="border-[1px] rounded-t-2xl p-2 ">{name}</h4>
        <h4 className={` bg-${roleBg} rounded-b-2xl p-2 text-white `}>
          {role}
        </h4>
      </div>
    </div>
  );
};

export default TeamNamePic;
