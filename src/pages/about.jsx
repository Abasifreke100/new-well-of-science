import Layout from "../components/layout"
import Aboutmain from "../components/ui/Aboutmain"
import Goals from "../components/ui/Goals"
import MissionVision from "../components/ui/MissionVision"
import Quote from "../components/ui/Quote"
import Team from "../components/ui/Team"

export default function AboutPage() {
  return (
    <Layout>
      <Aboutmain />
      <MissionVision />
      <Team />
      <Quote />
      <Goals />
    </Layout>
  )
}
