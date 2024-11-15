import { Link } from "react-router-dom"
import logo from "../../assets/logo.webp"
import { siteConfig } from "../../config/site"

import { Menu, X } from "lucide-react"
import { useLocation } from "react-router-dom"
import { Button } from "../ui/button"
import { useState } from "react"
import { AnimatePresence, m } from "framer-motion"
import { navItem } from "../../animations/menu-variants"

export default function Header() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <header
      className={`fixed top-0 left-0 z-50 flex justify-center w-full ${
        isOpen ? "h-screen" : "h-20"
      } bg-dark_bg duration-500 lg:h-20`}
    >
      <nav className="container absolute top-0 w-full p-4 -translate-x-1/2 border-red-500 left-1/2">
        <div className="flex items-center justify-between">
          <img src={logo} alt={siteConfig.name} width={208} height={52} />

          <DesktopNav location={location} />

          <div className="flex items-center gap-8 lg:hidden">
            <Button asChild className={"hidden md:flex"}>
              <Link to={"/contact"}>Contact us</Link>
            </Button>

            <div
              className="relative z-50 transition-all duration-300 lg:hidden"
              onClick={handleMenuToggle}
            >
              {isOpen ? (
                <X className="text-white" />
              ) : (
                <Menu className="text-white" />
              )}
            </div>
          </div>
        </div>

        <AnimatePresence
          initial={false}
          onExitComplete={() => null}
          mode="wait"
        >
          {isOpen && <MobileNav handleMenuToggle={handleMenuToggle} />}
        </AnimatePresence>
      </nav>
    </header>
  )
}

const DesktopNav = ({ location }) => {
  return (
    <div className="items-center hidden gap-8 lg:flex">
      <div className="flex items-center gap-12">
        {siteConfig.navigations.map((item) => {
          const isActive = location.pathname === item.href

          return (
            <div
              className="relative flex flex-col overflow-hidden cursor-pointer group h-fit"
              key={item.name}
            >
              <Link
                to={item.href}
                className={`font-medium ${
                  isActive
                    ? "text-white"
                    : "text-white/60 group-hover:-translate-y-7 group-hover:invisible"
                }  visible duration-300 `}
              >
                {item.name}
              </Link>
              <Link
                to={item.href}
                className={`font-medium ${
                  isActive
                    ? "text-white invisible"
                    : "text-white/60 invisible  group-hover:visible group-hover:-translate-y-[60%]"
                } absolute top-[60%]  duration-200 `}
              >
                {item.name}
              </Link>
            </div>
          )
        })}
        <Button asChild>
          <Link to={"/contact"}>Contact us</Link>
        </Button>
      </div>
    </div>
  )
}

const MobileNav = ({ handleMenuToggle }) => {
  return (
    <div className="absolute top-32 lg:hidden">
      <div className="py-4 space-y-20 ">
        <m.div
          className="flex flex-col gap-12"
          initial={{ opacity: 0 }}
          whileInView={navItem.show}
          exit={navItem.exit}
        >
          {siteConfig.navigations.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-white/60 text-3xl`}
              onClick={handleMenuToggle}
            >
              {item.name}
            </Link>
          ))}

          <Button asChild className={"w-fit"} onClick={handleMenuToggle}>
            <Link to={"/contact"}>Contact us</Link>
          </Button>
        </m.div>
      </div>
    </div>
  )
}
