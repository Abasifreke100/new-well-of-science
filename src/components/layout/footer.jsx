import { useLocation } from "react-router-dom"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from "lucide-react"
import { siteConfig } from "../../config/site"

import Logo from "../../assets/core-logo.webp"

export default function Footer() {
  const location = useLocation()

  return (
    <footer className="bg-footer_bg py-14 ">
      <div className="container relative space-y-16">
        {location.pathname == "/contact" ? null : (
          <>
            <section className="max-w-[50.375rem] h-[11.6875rem] mx-auto w-full">
              <div className="space-y-8 text-center">
                <p className="text-white text-[32px] md:text-[40px] font-gen_sans font-semibold">
                  For Enquiries and partnerships
                </p>
                <Button asChild size={"lg"}>
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
                  to={"/portfolio"}
                  className="text-base font-normal text-light_text font-inter"
                >
                  Shoppers bag
                </Link>
                <Link
                  to={"/portfolio"}
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
  )
}
