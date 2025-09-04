import { Grow, Zoom } from "@mui/material";
import ParagraphCard from "./paraCard";
import ServiceSection from "./serviceSection";
import Sliders from "./sliders";
import KPISection from "./numbers";


function Home() {

  

  return (
    <>
      <Sliders />
      <ParagraphCard/>
      <ServiceSection />
      <KPISection />
    </>
  );
}

export default Home;
