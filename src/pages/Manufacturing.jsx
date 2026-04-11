import { industryData } from "../data/industryData"
import IndustryLayout from "../components/IndustryLayout"

export default function Manufacturing() {
  return <IndustryLayout data={industryData.manufacturing} />
}