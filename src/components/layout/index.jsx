import Header from "./header"
import Footer from "./footer"
import MotionWrapper from "../motion-wrapper"

export default function Layout({ children }) {
  return (
    <MotionWrapper>
      <Header />
      <main className="relative py-20">{children}</main>
      <Footer />
    </MotionWrapper>
  )
}
