import React from "react"
import "./courses.css"
import { courseInstructorCard } from "../../dummydata"
import { Link } from "react-router-dom"
import Heading from "../common/heading/Heading"


const CoursesCard = () => {
  const pageGenerateHanlder= ()=>{
    
  }
  return (
    <>
      {/* <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className='outline-btn'>ENROLL NOW !</button>
            </div>
          ))}
        </div>
      </section> */}
      <section id='course'>
        <Heading subtitle='TOP COURSES' title='Popular courses on MasterDsa' />
          <div class="course-box">
            {courseInstructorCard.map((val) => (
            <div onClick={pageGenerateHanlder} class="courses" >
              <img src={val.cover} alt="" />
              <div class="details">
                <span>{val.lastUpdated}</span>
                <h4>{val.coursesName}</h4>
                <span>{val.instrName}</span>
                <div class="star">
                  <li>
                  <Link to={`/courses/${val.id}`}>Buy</Link>
                  </li>
                  <span>{val.rating}</span>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <span>{val.totalUsers}</span>
                </div>
              </div>
              <div class="cost">
                {val.discountPrice}
              </div>
              <div class="seller">
                  Bestseller
                </div>
          </div>
          ))}
        </div>
    
    </section>
    </>

  )
}

export default CoursesCard;
