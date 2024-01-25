import BlogSection from "../components/home/blog-section";
import CoreValuesSection from "../components/home/core-values-section";
import FeaturesSection from "../components/home/features-section";
import HeroSection from "../components/home/hero-section";
import LimitsSection from "../components/home/limits-section";
import PortfolioSection from "../components/home/portfolio-section";
import Layout from "../components/layout";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <CoreValuesSection />
      <LimitsSection />
      <PortfolioSection />
      <BlogSection />
    </Layout>
  );
}
