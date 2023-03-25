import React from "react";
import './Skillsbox.css';
import play from '../../../assets/icon/play.png';
import engineer2 from '../../../assets/extra/engineer2.jpeg';

const Skillsbox = () =>{
    return(
        <React.Fragment>
        <div class="head-container">
          <div class="quote">
            <h1>MasterDsa - Skills for your present (and your future). Get started with us</h1>
            <br />
            <h3>DataStructures isn't about what you know; it's about what you can figure out.</h3>
            <br />
            <div class="play">
              <img src={play} alt="play" /><span><a href="https://www.youtube.com" target="_blank">Watch
                  Now</a></span>
            </div>
          </div>

          <div class="svg-image">
            <img src={engineer2} alt="svg" />
          </div>
        </div>
        </React.Fragment>
    )
}

export default Skillsbox;