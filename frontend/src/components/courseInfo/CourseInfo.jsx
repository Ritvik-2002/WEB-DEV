import React from 'react';
import course1 from '../../assets/courses/course1.jpg';
// import axios from 'axios';
import i1 from "../../assets/creator/i1.jpg";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { courseInstructorCard } from "../../dummydata";



const CourseInfo = (props) => {
    const [data,setData]=useState();
    const {id} = useParams();
    console.log(id)
    useEffect(() =>{
            let ndata=courseInstructorCard.filter((d)=>{
                return d.id==id;
            });
            setData(ndata);
            // console.log(ndata);
    }, []);



    return (
        <React.Fragment>
            <div>
                {data &&   <section id='course_inner'>
                    <div className="overview">
                        <div className="toptext">
                            <h2>{data[0].coursesName}</h2>
                            <br />
                            <h4>{data[0].desc}</h4>
                            <br />
                            <div className="seller">Bestseller</div>
                            <span>
                                <div className="course-box">
                                    <div className="courses">
                                        <div className="details">
                                            <span>{data[0].lastUpdated} | </span>
                                            <span>Created by: {data[0].instrName}</span>
                                            <div className="star">
                                                <span>{data[0].rating}</span>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half"></i>
    
                                                <span className="link"><a href='#'>{data[0].totalUsers} ratings</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>


                        <br />
                        <div className="course-head">
                            <div className="c-name">
                                <h2>{data[0].desCap}</h2>
                                <p>{data[0].desc}</p>
                            </div>
                            <span>{data[0].discountPrice}</span>
                        </div>
                        <br />
                        <div className="tutor">
                            <img src={data[0].instImage} alt="" />
                            <div className="tutor-details">
                                <h5>Instructor : {data[0].instrName}</h5>
                                <p>{data[0].workingAt}</p>
                                <hr />
                                <h3>What you'll learn</h3>
                                <div className="learn">
                                    <p> <i className="far fa-check-circle"></i> Learn various Popular Data Structures and their Algorithms. </p>
                                    <p> <i className="far fa-check-circle"></i> Develop your Analytical skills on Data Structure and use then
                                        efficiently. </p>
                                    <p> <i className="far fa-check-circle"></i> Learn Recursive Algorithms on Data Structures</p>
                                    <p> <i className="far fa-check-circle"></i> Learn about various Sorting Algorithms</p>
                                    <p><i className="far fa-check-circle"></i> Implementation of Data Structures using C and C++</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="enroll">
                        <div className="ccardbox2">
                            <div className="dcard2"><span className="tag"></span>
                                <div className="fpart2">
                                    <img src={data[0].cover} />
                                    <iframe src={data[0].courseLink} frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                        <br /><br />

                        <h4>The Course includes </h4>
                        <p> <i className="fas fa-video"></i>46 hours video </p>
                        <p> <i className="far fa-newspaper"></i>81 articles </p>
                        <p> <i className="fa fa-cloud-download"></i>Downloadable resources</p>
                        <p> <i className="fas fa-infinity"></i>Full lifetime access</p>
                        <p> <i className="fas fa-mobile-alt"></i>Access on mobile Tv</p>
                        <p> <i className="fas fa-paperclip"></i>Lab Assignments</p>
                        <p> <i className="fas fa-trophy"></i>Certificate of Completion </p>
                        <div className="enroll-btn">
                            <a className="blue">Enroll Course</a>
                        </div>
                    </div>
                </section>}
              
            </div>
            <br /><br /><br /><br />
        </React.Fragment >
    )
};

export default CourseInfo;