import { useSearchParams } from "react-router-dom"
import Layout from "../components/layout"
import ShoppersBag from "../components/portfolio/shoppers-bag"
import MushroomLab from "../components/portfolio/mushroom-lab"
import Toggle from "../components/portfolio/toggle"

export default function Portfolio() {
  let [searchParams] = useSearchParams()

  const currentTab = parseInt(searchParams.get("tab")) || 0

  return (
    <Layout>
      <div className="mt-[120px] mb-20 lg:mb-[120px] px-4 sm:px-10">
        <Toggle />
      </div>
      {currentTab === 0 ? <ShoppersBag /> : <MushroomLab />}
    </Layout>
  )
}
