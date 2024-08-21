import { useState } from "react";

const ResponsibleRandRTab = () => {
  const [switchState2, setSwitchState2] = useState(true);

  return (
    <div>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-6 justify-items-center text-[14px] md:text-[16px] ">
        <div className=" order-last md:order-first ">
          Responsible, recollection, and recycling are crucial for sustainable
          resource and environmental management. This initiative advocates for
          the ethical collection and recycling of PET, PP, and HDPE plastic
          materials, assisting companies and organizations in monitoring their
          plastic footprint throughout the entire lifecycle—from consumption to
          recollection and recycling.
          <br />
          <br />
          The &quot;Responsible Recollection and Recycling&quot; concept places
          a strong emphasis on ethical and sustainable practices. It encourages
          the measurement of plastic waste generated and the tracking of impact
          metrics to advance environmentally conscious collection methods and
          responsible recycling processes, ultimately minimizing the adverse
          effects of plastic waste pollution. This approach is designed to
          foster a more responsible and eco-friendly approach to resource
          management.
        </div>
        <img src="/images/partnershippic1.png" alt="" />
      </div>

      <h2 className="font-gen_sans font-semibold ext-[16px] sm:text-[18px] md:text-[24px] my-10 ">
        Embracing Sustainable Alternatives To Plastic{" "}
      </h2>
      <div className="flex flex-row ">
        <div className="bg-zinc-200 flex flex-row rounded-t-3xl  ">
          <button
            className={`  ${
              switchState2 === true ? "bg-green_two text-white " : "bg-zinc-200"
            }  cursor-pointer p-5 rounded-t-3xl `}
            onClick={() => setSwitchState2(true)}
          >
            Kenaf
          </button>
          <button
            className={` ${
              switchState2 === false
                ? " bg-green_two text-white "
                : "bg-zinc-200"
            } cursor-pointer p-5 rounded-t-3xl `}
            onClick={() => setSwitchState2(false)}
          >
            Banana FIber
          </button>
        </div>
      </div>
      {switchState2 === true ? (
        <div className="grid gird-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-start justify-items-center p-10 bg-[#2F2F2F] text-white rounded-b-3xl rounded-tr-3xl text-[14px] md:text-[16px] ">
          <div className="order-last md:order-first">
            Kenaf, a fibrous plant, stands as a beacon of sustainability in
            resource utilization. Its cultivation involves a commitment to
            sustainable farming practices, ensuring minimal environmental
            impact. After harvesting, the processing phase includes separating
            the fibers from the plant, followed by treatments to enhance
            usability.
            <br />
            <br />
            These fibers, derived from kenaf, find applications in the
            production of paper, textiles, and biodegradable products. By opting
            for kenaf-based materials, we contribute to environmentally friendly
            industries, tapping into a renewable resource with diverse
            applications.
          </div>
          <img
            src="/images/partnershippicdown1.png"
            alt=""
            className="rounded-3xl w-[100%] "
          />
        </div>
      ) : (
        <div className="grid gird-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-center order-last md:order-first justify-items-center p-10 bg-[#2F2F2F] text-white rounded-b-3xl rounded-tr-3xl text-[14px] md:text-[16px] ">
          <div>
            Banana fiber processing introduces an innovative approach to
            harnessing the potential of banana plants. This involves extracting
            fibers from banana plant pseudostems through a meticulous
            process—harvesting mature plants, stripping outer layers to reveal
            the fibrous core, and mechanically extracting and cleaning the
            fibers. Treated for strength and durability, these banana fibers are
            utilized in textiles, handicrafts, and various eco-friendly
            products.
            <br />
            <br />
            This method champions sustainability by repurposing agricultural
            waste, offering a viable raw materials alternative to plastics, in
            the production of eco-friendly products. Embracing banana fiber
            aligns with environmentally conscious practices, contributing to the
            responsible and renewable utilization of resources. In opting for
            these alternative materials, we not only eliminate our dependence on
            plastic but also actively support industries, also champion
            responsible recollection and recycling. Our Kenaf and Banana Fiber
            projects stand as a testament to our commitment to a more
            sustainable and eco-friendly future. We are open to working with
            like-minded organizations to accomplish these initiatives.
          </div>
          <img
            src="/images/imgsponge.png"
            alt=""
            className="rounded-3xl w-[100%]"
          />
        </div>
      )}
    </div>
  );
};

export default ResponsibleRandRTab;
