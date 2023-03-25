import React from 'react'
import './AboutCont.css';


export default function AboutUs() {
  return (
    <>
      <div className="feat bg-gray pt-5 pb-5" >
        <div className="container" >
          {/* <div className="row" > */}
          <div className="section-head ">
            <h4><span>Why Choose</span> Us?</h4>
            <p>When you choose us, you'll feel the benefit of 1 year suscription with extra 3 months validity</p>
          </div>
          <div style={{ display: 'flex'}}>
            <div className="" style={{paddingLeft:'10px', paddingRight:'10px'}}>
              <div className="item"> <span className="icon feature_box_col_one"><i className="fa fa-globe"></i></span>
                <h6>Achievements</h6>
                <p style={{'textAlign':'justify'}}>Billions of Users, Millions of Articles Published, Thousands Got Hired by Top Companies and the numbers are still growing.</p>
              </div>
            </div>
            <div className="" style={{paddingLeft:'10px', paddingRight:'10px'}}>
              <div className="item"> <span className="icon feature_box_col_two"><i className="fa fa-anchor"></i></span>
                <h6>Grow With Us</h6>
                <p style={{'textAlign':'justify'}}>Gain and share your knowledge & skills with a variety of learning platforms offered by MasterDSA.</p>
              </div>
            </div>
            <div className="" style={{paddingLeft:'10px', paddingRight:'10px'}}>
              <div className="item"> <span className="icon feature_box_col_three"><i className="fa fa-hourglass-half"></i></span>
                <h6>24 x 7 User Support</h6>
                <p style={{'textAlign':'justify'}}>If our customer has any problem and any query we are always happy to help then.</p>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="" style={{paddingLeft:'10px', paddingRight:'10px'}}>
              <div className="item"> <span className="icon feature_box_col_four"><i className="fa fa-database"></i></span>
                <h6>Prepare With Us</h6>
                <p style={{'textAlign':'justify'}}>Prepare for an interview with millions of articles and courses designed by experts.</p>
              </div>
            </div>
            <div className="" style={{paddingLeft:'10px', paddingRight:'10px'}}>
              <div className="item"> <span className="icon feature_box_col_five"><i className="fa fa-upload"></i></span>
                <h6>Get Hired With Us</h6>
                <p style={{'textAlign':'justify'}}>Don’t know where to apply? Stop by MaterDSA where we offer multiple opportunities for you to get hired</p>
              </div>
            </div>
            <div className="" style={{paddingLeft:'10px', paddingRight:'10px'}}>
              <div className="item"> <span className="icon feature_box_col_six"><i className="fa fa-camera"></i></span>
                <h6>Affordable cost</h6>
                <p style={{'textAlign':'justify'}}>Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap.</p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  )
}