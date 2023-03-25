import React, { Component } from 'react';
import './SimpleSlider.css';
import b1 from '../../../assets/extra/b1.jpg';
import engineer from '../../../assets/extra/engineer.jpg';
import carousel from '../../../assets/extra/carousel.jpg';
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";



const SimpleSlider = () => {

        const history = useNavigate();
        const routeChange = () => {
            
            let path = `courses`; 
            history.push(path);
        }

        const routeChange2 = () =>{
            let path2 = `pricing`;
            history.push(path2)
        }

        
        

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <br /><br />
                <Slider {...settings}>
                    <div class="carousel-item active">
                        <img src={b1} class="d-block w-100 imgcour" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Find your New career</h5>
                            <br />
                            <p>Participate in Hackathons, Upgrade your coding skills</p>
                            <br />
                            <div class="slider">
                                <button type="button" class="btn btn1" onClick={routeChange}>Our Services</button>
                                <button type="button" class="btn btn2" onClick={routeChange}>Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={engineer} class="d-block w-100 imgcour" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Learn real skills from top tech instructors</h5>
                            <br />
                            <p>Daily Quizes on MasterDsa helps to enhance interview skills</p>
                            <br />
                            <div class="slider">
                                <button class="btn btn1">Our Services</button>
                                <button class="btn btn2">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={carousel} class="d-block w-100 imgcour" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Start Learning new skills</h5>
                            <br />
                            <p>Master Dsa Java Python GATE at One place.</p>
                            <br />
                            <div class="slider">
                                <button class="btn btn1">Our Services</button>
                                <button class="btn btn2">Get Started</button>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        );

}

export default SimpleSlider;


