import { useSearchParams } from "react-router-dom"
import Layout from "../components/layout"

export default function Portfolio() {
  let [searchParams, setSearchParams] = useSearchParams()

  return (
    <Layout>
      Portfolio - {JSON.stringify(searchParams.get("tab"), null, 2)}
    </Layout>
  )
}
