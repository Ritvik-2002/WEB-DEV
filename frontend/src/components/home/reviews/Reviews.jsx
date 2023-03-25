import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css";
import "semantic-ui-css/semantic.min.css";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

const Reviews = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    }

    return(
    <>
    <br /><br /><br />
    <Heading subtitle='REVIEWS of Students' title='Genuine Feedback' />
    <Slider {...settings}>
    {testimonal.map((val) => (
      <section className='testimonal padding'>
        <div className='container' style={{'marginLeft':'120px', height: '400px', width: 'auto'}}>
          <div className='content grid2'>
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p style={{ textAlign: 'justify' }}>{val.desc}</p>
              </div>
          </div>
        </div>
      </section>
      ))}
    </Slider>
    <br /><br /><br /><br />
    </>
  )
}

export default Reviews
