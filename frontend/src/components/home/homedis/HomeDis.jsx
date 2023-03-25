import React from "react"
import Heading from "../../common/heading/Heading"
import "./HomeDis.css"
import { useNavigate } from "react-router-dom";




const HomeDis = () => {
  const history = useNavigate();
  const routeChange = () =>{ 
    history.push('/courses');
  }
  return (
    <React.Fragment>
      <section className='disc'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO MasterDsa' title='Best Online Education Expertise' />
            <p>The knowledge of DSA is tested significantly in the technical hiring process of many companies, because the problems that the companies encounter daily are quite huge and complex</p>
            <div className=''>
              <button onClick={routeChange} className='primary-btn'>
              GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button onClick={routeChange}>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </React.Fragment>
  )
}

export default HomeDis
