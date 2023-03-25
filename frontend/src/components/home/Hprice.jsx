import React from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='OUR PRICING' title='Pricing & Packages' />
        <div style={{paddingTop:"75px"}}className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Hprice
