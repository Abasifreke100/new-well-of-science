import FeaturesSection from "../components/home/features-section"
import HeroSection from "../components/home/hero-section"
import Layout from "../components/layout"

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
    </Layout>
  )
}
