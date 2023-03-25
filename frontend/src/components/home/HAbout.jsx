import React from "react"
// import OnlineCourses from "../allcourses/OnlineCourses"
// import Heading from "../common/heading/Heading"
// import "../allcourses/courses.css"
import "./HAbout.css";
import { courseInstructorCard} from "../../dummydata"
import "semantic-ui-css/semantic.min.css";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"



const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className=''></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className=''></i>
      </button>
    </div>
  )
}

// const HAbout = () => {

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   }

//   return (
//     <>
//     <Slider {...settings}> 
//      {coursesCard.map((val) => (
//       <div className='homeAbout'>
//         <div className='container'>
//           <div className='coursesCard'>
//             {/* copy code form  coursesCard */}
//             <div className='grid2'>
              
//                 <div className='items'>
//                   <div className='content flex'>
//                     <div className='left'>
//                       <div className='img'>
//                         <img src={val.cover} alt='' />
//                       </div>
//                     </div>
//                     <div className='text'>
//                       <h1>{val.coursesName}</h1>
//                       <div className='rate'>
//                         <i className='fa fa-star'></i>
//                         <i className='fa fa-star'></i>
//                         <i className='fa fa-star'></i>
//                         <i className='fa fa-star'></i>
//                         <i className='fa fa-star'></i>
//                         <label htmlFor=''>(5.0)</label>
//                       </div>
//                       <div className='details'>
//                         {val.courTeacher.map((details) => (
//                           <>
//                             <div className='box'>
//                               <div className='dimg'>
//                                 <img src={details.dcover} alt='' />
//                               </div>
//                               <div className='para'>
//                                 <h4>{details.name}</h4>
//                               </div>
//                             </div>
//                             <span>{details.totalTime}</span>
//                           </>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                   <div className='price'>
//                     <h3>
//                       {val.priceAll} / {val.pricePer}
//                     </h3>
//                   </div>
//                   <button className='outline-btn'>ENROLL NOW !</button>
//                 </div>
              
//             </div>
//           </div>
//         </div>
//         {/* <OnlineCourses /> */}
//       </div>
//       ))}
//      </Slider>
//     </>
//   )
// }

// export default HAbout;

const HAbout = ({}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

 
  return (
    <>
      <Slider {...settings}>
        
        {courseInstructorCard.map((pdi) => {
          return (
              <div className="ui card" >
              <div className="image" >
                <img style={{width:'auto', height: '300px'}} alt="avatar"  src={pdi.cover} />
              </div>
              <div className="content">
                <img className="ui avatar image" src={pdi.cover} />
                {pdi.coursesName}
                <div class="meta">
                  <span class="date" style={{fontWeight:"900", color:"#9d2c3f"}}>{pdi.instrName}</span>
                </div>
                <Link to={`/courses/${pdi.id}`}>Buy</Link>
                <div class="description" style={{fontSize:"15px", paddingBottom:"8px"}}>{pdi.lastUpdated}</div>
                <div className="content">
                  <i className="star icon"></i>
                  {pdi.rating} ({pdi.totalUsers})

                </div>
              </div>
              <div className="extra content">
                <i className="large heart icon"></i>
                <i className="large bars icon"></i>
                <div className="right floated">
                  <div className="meta">STARTING AT</div>
                  <p style={{fontSize:"20px",fontWeight:"900",color:"black"}} className="modify">{pdi.discountPrice}</p>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default HAbout;




