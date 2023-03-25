import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import HomeDis from "./homedis/HomeDis"
import Hprice from "./Hprice"
import Testimonal from "./reviews/Reviews"
import Skillsbox from "./skillsbox/Skillsbox"
import SimpleSlider from "./carousel/SimpleSlider"
import './Home.css';
import DynamicSlider from "./dynaslider/DynamicSlider"

const Home = () => {
  return (
    <>
      <HomeDis />
      <Skillsbox />
      <br/><br/><br/>
      <AboutCard />
      <SimpleSlider />
      <br /><br /><br />
      <DynamicSlider/>
      <br /><br /><br />
      <div className="containerr">
        <HAbout />
      </div>
      <Testimonal />
      <Hblog />
      <Hprice />

    </>
  )
}

export default Home
