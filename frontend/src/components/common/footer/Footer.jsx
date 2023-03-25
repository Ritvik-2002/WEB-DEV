import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <marquee style={{"background": "linear-gradient(to right, #1eb2a6, #DF2771)", "marginTop": "50px"}} direction="left"
        onmouseover="this.stop()" onmouseout="this.start()" scrollamount="20">
        <div class="marqu">“If you have choosen the right data structures and organized things well, the algorithms
          will almost be self-evident. Data Structures, not algorithms are central to programming”</div>
      </marquee>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest updates</h1>
            <span>Master Data Structures with MasterDsa</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Master Dsa</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>MasterDsa helped Millions of Students to get trained and get placed into Multi-national Sofware Companies in a better position</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Flat.no.215, Block-BH1, IIITS
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                masterdsa.info@gmail.com
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                +91 99594 58697
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Proper way of learning Data Structures enriches the problem solving skills
        </p>
      </div>
    </>
  )
}

export default Footer
