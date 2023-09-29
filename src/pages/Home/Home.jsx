import { About } from "../../shared"
import AcademicChart from "./AcademicChart"
import Hero from "./Hero"
import Teachers from "./Teachers"

// import { About, Others, Results, Students, Academic, AdmissionInfo, Contact, Opportunities } from "../index";
const Home = () => {
  return (
    <div>
    <Hero />
    <About/>
    <Teachers />
    <AcademicChart/>
    <Teachers />
    <AcademicChart/>
    </div>
  )
}

export default Home