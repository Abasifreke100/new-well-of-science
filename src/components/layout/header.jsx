import { Link } from "react-router-dom"
import logo from "../../assets/logo.webp"
import { siteConfig } from "../../config/site"

import { Menu, X } from "lucide-react"
import { useLocation } from "react-router-dom"
import { Button } from "../ui/button"
import { useState } from "react"
import { AnimatePresence, m } from "framer-motion"
import { menuVariant, navItem } from "../../animations/menu-variants"

export default function Header() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <header className="fixed top-0 left-0 z-50 flex items-center w-full h-20 py-4 bg-dark_bg">
      <nav
        className={`container flex items-center justify-between h-full duration-300`}
      >
        <div>
          <img src={logo} alt={siteConfig.name} width={208} height={52} />
        </div>

        <DesktopNav location={location} />

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
            <Link
              key={item.name}
              to={item.href}
              className={`font-medium ${
                isActive ? "text-white" : "text-white/60"
              }`}
            >
              {item.name}
            </Link>
          )
        })}
      </div>

      <Button asChild>
        <Link to={"/contact"}>Contact us</Link>
      </Button>
    </div>
  )
}

const MobileNav = ({ handleMenuToggle }) => {
  return (
    <m.div
      className="absolute inset-0 z-40 w-screen h-screen lg:hidden bg-dark_bg"
      initial={{ opacity: 0 }}
      variants={menuVariant}
      whileInView={"show"}
      exit={"exit"}
    >
      <div className="container py-4 space-y-20">
        <div className="mb-20">
          <img src={logo} alt={siteConfig.name} width={208} height={52} />
        </div>
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
    </m.div>
  )
}
