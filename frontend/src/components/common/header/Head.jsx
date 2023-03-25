import React from "react"
import { useState } from "react";
// import logo from "/images/logo/logo.png"
import instructor1 from '../../../assets/creator/instructor1.jpg';
import instructor2 from '../../../assets/creator/instructor2.png'
import logo from '../../../assets/icon/logo.png';

const Head = () => {

  const [isMinicart, setIsminicart] = useState('');
  const openHandler = event =>{
    setIsminicart(true);
  }

  const closeHandler = event =>{
    setIsminicart(false)
  }
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>

          <div className='logo'>   
            <div className="">
              <div className='logoimm'>
                <a href=""><img src={logo}/></a>
              </div>
            </div>
            <span><h6 style={{paddingLeft:'30px', fontWeight: "bold"}}>Expertize DataStructures and Algorithms</h6></span>
          </div>

          <div className='sociall'>
            <i className='fab fa-linkedin iconn'></i>
            <i className='fab fa-facebook-f iconn'></i>
            <i className='fab fa-instagram iconn'></i>
            <i className='fab fa-twitter iconn'></i>
          </div>
          
          <div className="header_black col-lg-5 col-md-7 col-6">
            <div className= "middel_right">
              <div className="wishlist_btn">
                <a href="#"><i className="ion-heart"></i></a>
              </div>
              <div className="cart_link">
                <a onClick={openHandler} href="#"><i className="ion-android-cart"></i><span className="cart_text_quantity">
                    2 Courses</span><i className="ion-chevron-down"></i></a>
                <span className="cart_quantity">2</span>
        
                <div className={`mini_cart ${!isMinicart ? '':'active'}`}>
                  <div className="cart_close">
                    <div className="cart_text">
                      <h3>COURSES</h3>
                    </div>
                    <div className="mini_cart_close">
                      <a onClick={closeHandler} href={void(0)}><i className="ion-android-close"></i></a>
                    </div>
                  </div>
                  <div className="cart_item">
                    <div className="cart_img">
                      <a href="#"><img src={instructor1} alt=""/></a>
                    </div>
                    <div className="cart_info">
                      <a href="#">Mastering Data Structures with C</a>
                      <span className="quantity">Learn data Structures<br/>Abdul Bari</span>
                      <span className="price_cart">₹ 2,259</span>
                    </div>
                    <div className="cart_remove">
                      <a href="#"><i className="ion-android-close"></i></a>
                    </div>
                  </div>
                  <div className="cart_item">
                    <div className="cart_img">
                      <a href="#"><img src={instructor2} alt=""/></a>
                    </div>
                    <div className="cart_info">
                      <a href="#">Java Programming Bootcamp</a>
                      <span className="quantity">Deep dive in Core Java <br />Bala Subramanian</span>
                      <span className="price_cart">₹ 2,259</span>
                    </div>
                    <div className="cart_remove">
                      <a href="#"><i className="ion-android-close"></i></a>
                    </div>
                  </div>
                  <div className="cart_total">
                    <span>Subtotal</span>
                    <span>₹ 4,518</span>
                  </div>
                  <div className="mini_cart_footer">
                    <div className="cart_button view_cart">
                      <a href="#">View Cart <i className='fa fa-long-arrow-alt-right'></i></a>
                    </div>
                    <div className="cart_button checkout">
                      <a href="#" className="active">Checkout  <i className='fa fa-long-arrow-alt-right'></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Head
