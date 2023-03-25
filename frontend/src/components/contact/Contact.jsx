import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.678665783336!2d80.02450131461876!3d13.555293190474856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d773f1e0f8721%3A0xadb0842ffc2719e4!2sIndian%20Institute%20of%20Information%20Technology%2C%20Sri%20City%2C%20Chittoor!5e0!3m2!1sen!2sin!4v1666981889066!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
  const [name, Value] = React.useState("")
  const [output, Submit] = React.useState("")
  function Valued(event) {
    Value(event.target.value);
  }
  function Submitted(event) {
    Submit("Thanks " + name + " for Contacting us" );

    event.preventDefault();
  } 
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
          <h2 style={{color:"red"}}>{output}</h2>    
          
            <h1>Contact us</h1>
            <p>Feel free to contact MasterDsa Team for any Queries</p>
            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Flat.no.215, Block-BH1, Indian Institute of Information Technology, Sricity, Andhra Pradesh</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> masterdsa.info@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 99594 58697</p>
              </div>
            </div>

            <form  onSubmit={Submitted} >
              <div className='flexSB'>
                <input type='text' placeholder='Name'  onChange={Valued} value={name} />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10' placeholder="Type your message here..">
                {/* Create a message here... */}
              </textarea>
              <button className='primary-btn' type="submit">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact