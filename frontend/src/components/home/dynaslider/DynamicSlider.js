import React from 'react'
import './DynamicSlider.css'

const DynamicSlider = () => {
    return (
        <>
            <div class="course1">
                <div class="wrapper">
                    <div style={{'color':'#139c90  '}} class="static-txt"><br />MasterDsa Courses</div>
                    <ul class="dynamic-txts">
                        <li><span>Data Structures</span></li>
                        <li><span>C C++ Java OOPS</span></li>
                        <li><span>Android DeveloPment</span></li>
                        <li><span>Web DeveloPment</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DynamicSlider;