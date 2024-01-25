import { useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from "lucide-react";
import { siteConfig } from "../../config/site";

import Logo from "../../assets/core-logo.webp";

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="p-10 bg-footer_bg ">
      <div className="container relative space-y-16">
        {location.pathname == "/contact" ? null : (
          <>
            <section className="max-w-[50.375rem] relative h-[11.6875rem] mx-auto w-full">
              <div className="space-y-8 text-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="607"
                  height="122"
                  viewBox="0 0 607 122"
                  fill="none"
                  className="absolute top-0 left-0 z-10 w-full"
                >
                  <path
                    d="M3.28455 71.9544C15.3066 125.948 218.322 122.794 318.327 114.468C318.327 114.468 593.839 91.0686 604.348 45.5052C614.857 -0.0583301 414.846 -0.215471 313.527 5.4014C205.104 5.08831 -8.73748 17.9606 3.28455 71.9544Z"
                    stroke="#C9507A"
                    strokeWidth="4"
                  />
                </svg>
                <p className="text-white text-[32px] relative z-20 md:text-[40px] font-gen_sans font-semibold">
                  For Enquiries and partnerships
                </p>

                <Button asChild size={"lg"} className={"z-20 relative"}>
                  <Link to={"/contact"}>Contact us</Link>
                </Button>
              </div>
            </section>

            <div className="h-[1px] w-full bg-gray-300" />
          </>
        )}

        <section className="flex flex-col justify-between gap-16 md:items-center md:flex-row">
          <div className="flex flex-col gap-8 md:order-1">
            <p className="text-sm font-bold text-white font-inter md:text-base">
              Contact us on
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <Link
                  to={`mailto:${siteConfig.contact.email}`}
                  className="flex gap-4 text-footer_bg"
                >
                  <MailIcon className="min-w-[24px] h-6 fill-light_text" />
                  <p className="text-base font-normal break-words break-all font-inter text-light_text">
                    {siteConfig.contact.email}
                  </p>
                </Link>
                <Link
                  to={`tel:${siteConfig.contact.phone}`}
                  className="flex gap-4 text-footer_bg"
                >
                  <PhoneIcon className="min-w-[24px] h-6 fill-light_text" />
                  <p className="text-base font-normal break-words break-all font-inter text-light_text">
                    {siteConfig.contact.phone}
                  </p>
                </Link>
                <Link
                  to={`https://maps.google.com/?q=${siteConfig.contact.address}`}
                  className="flex gap-4 text-footer_bg"
                >
                  <MapPinIcon className="min-w-[24px] h-6 fill-light_text" />
                  <p className="text-base font-normal break-words break-all font-inter text-light_text">
                    {siteConfig.contact.address}
                  </p>
                </Link>
              </div>

              <div className="flex gap-6">
                <Link to={`${siteConfig.socials.twitter}`} className="">
                  <TwitterIcon className="text-white" />
                </Link>

                <Link to={`${siteConfig.socials.facebook}`} className="">
                  <FacebookIcon className="text-white" />
                </Link>

                <Link to={`${siteConfig.socials.linkedin}`} className="">
                  <LinkedinIcon className="text-white" />
                </Link>
              </div>
            </div>
          </div>

          {/* site map */}

          <div className="space-y-8 md:order-3">
            <p className="text-sm font-bold text-white font-inter md:text-base">
              Site Map
            </p>

            <div className="flex gap-20">
              <div className="flex flex-col gap-6">
                {siteConfig.navigations.map((item) => (
                  <Link
                    to={item.href}
                    key={item.name}
                    className="text-base font-normal text-light_text font-inter"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-6">
                <Link
                  to={"/portfolio?tab=0"}
                  className="text-base font-normal text-light_text font-inter"
                >
                  Shoppers bag
                </Link>
                <Link
                  to={"/portfolio?tab=1"}
                  className="text-base font-normal text-light_text font-inter"
                >
                  Mushroom lab
                </Link>
              </div>
            </div>
          </div>

          <div className="md:order-2 md:-ml-20">
            <img
              src={Logo}
              alt={siteConfig.name}
              className="w-20 h-20 mx-auto md:w-32 md:h-32"
            />
          </div>
        </section>

        <div className="text-center">
          <p className="text-xs font-normal text-light_text md:text-sm">
            {siteConfig.name} &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
