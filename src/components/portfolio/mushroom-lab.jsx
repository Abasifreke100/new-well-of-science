import BG from "./assets/bg.webp"
import Mushroom from "./assets/mushroom.svg"
import Img1 from "./assets/1.webp"
import Img2 from "./assets/2.webp"
import Img3 from "./assets/3.webp"
import Mushrooms from "./assets/mushrooms.png"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Button } from "../ui/button"

const items = [
  {
    id: "1",
    title: "Sustainable Livelihood",
    description:
      "We empower smallholders and local communities through training, resources, and support for mushroom cultivation. Facilitating increased production of mushroom in Nigeria enhance their income and improve their livelihoods.",
    img: Img1,
  },
  {
    id: "2",
    title: "Environmental Stewardship",
    description:
      "We champion sustainable practices by harnessing wood waste to grow high-quality oyster mushrooms. By doing so, we not only reduce environmental impact but also contribute to the conservation of forest resources",
    img: Img2,
  },
  {
    id: "3",
    title: "Nutritious Food And Culinary Innovation",
    description:
      "Our commitment to promoting mushroom consumption extends to the culinary world. We offer a wide variety of delicious, healthy, and versatile mushroom products, inspiring a new era of nutritious and creative cooking",
    img: Img3,
  },
]

export default function MushroomLab() {
  return (
    <>
      <img
        sizes="(max-width: 600px) 100vw,
    (max-width: 1200px) 100vw,
    100vw"
        src={BG}
        alt="Responsive Image"
        className="absolute inset-0 w-full h-full -z-10"
      />

      <div className="pb-[120px] md:pb-[168px] lg:pb-[120px] ">
        <div className="flex flex-col items-center gap-4">
          <img
            src={Mushroom}
            alt="mushroom-lab"
            className="block h-16 w-14 md:w-[88px] md:h-20"
          />
          <p className="text-[32px] md:text-5xl  font-semibold text-[#E6E6E6] font-gen_sans leading-[40px] md:leading-[60px]">
            Mushroom Lab
          </p>
        </div>
      </div>

      <div className="md:px-10 lg:px-14">
        <div className="rounded-3xl md:rounded-[50px] bg-[#006634b3] px-4 py-10 md:py-12 pb-20 md:px-10 lg:pt-[60px] lg:px-[60px] lg:pb-[88px] relative mb-[120px] ">
          <p className="text-[#E6E6E6] font-gen_sans text-2xl font-semibold md:text-[32px] md:leading-[45px] mb-6 max-w-[759px]">
            Mushroom Lab is poised to transform the lives of{" "}
            <span className="text-[#91CC41]">10,000 </span> households of farms
            in Africa through mushroom farming and production.
          </p>
          <p className="text-sm font-medium lg:text-base font-inter text-light_text mb-11">
            Our unique business model centers on three key pillars:
          </p>

          <div>
            <Accordion
              type="single"
              collapsible
              className="bg-[#3D3D3D] rounded-[32px] md:rounded-[48px] py-8 px-6 md:px-10 max-w-[895px]"
              defaultValue="item-1"
            >
              {items.map((item) => {
                return (
                  <AccordionItem value={`item-${item.id}`} key={item.id}>
                    <AccordionTrigger className="text-xl font-medium text-left text-white no-underline font-gen_sans md:text-2xl hover:no-underline">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-10 md:flex-row lg:gap-28 px-6 py-[26px] bg-[#373737B2] rounded-3xl md:rounded-[32px]">
                        <p className="text-sm font-normal lg:text-base font-inter text-light_text">
                          {item.description}
                        </p>

                        <img
                          src={item.img}
                          alt=""
                          className="h-[293px] rounded-3xl w-full md:h-40 md:w-40"
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row-reverse mb-[162px] md:mb-[120px] ">
          <img
            src={Mushrooms}
            alt=""
            className="block rounded-t-3xl md:rounded-t-[40px] lg:rounded-r-[40px] lg:rounded-l-none lg:rounded-tl-none h-[407px] w-full lg:w-[373px]"
          />

          <div className="bg-[#3D3D3DB2] rounded-b-3xl md:rounded-b-[50px] lg:rounded-l-[50px] lg:rounded-br-none flex flex-col justify-center pt-10 pb-12 px-6 md:px-10 lg:pl-16 lg:pr-28 h-full lg:h-[407px] ">
            <header className="text-[#E6E6E6] font-gen_sans text-2xl font-semibold md:text-[32px] md:leading-[44.8px] lg:text-[40px] lg:leading-[56px] mb-6">
              Join the community
            </header>

            <p className="mb-8 text-sm font-normal lg:text-base font-inter text-light_text">
              Join a community of like-minded individuals and organizations
              committed to positive change. Together, we&apos;re fostering
              sustainable livelihoods, protecting the environment, and
              redefining the way we enjoy and benefit from mushrooms.
            </p>

            <Button>Join Mushroom Lab Community</Button>
          </div>
        </div>
      </div>
    </>
  )
}
