import Header from "./header"
import Footer from "./footer"
import MotionWrapper from "../motion-wrapper"
import ScrollToTop from "../scroll-to-top"

export default function Layout({ children }) {
  return (
    <MotionWrapper>
      <Header />
      <main className="relative py-20">
        <ScrollToTop />
        {children}
      </main>
      <Footer />
    </MotionWrapper>
  )
}
