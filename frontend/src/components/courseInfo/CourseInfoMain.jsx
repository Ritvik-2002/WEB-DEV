import React from 'react'
import Back from "../common/back/Back";
import './CourseInfo.css'
import CourseInfo from './CourseInfo';
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseInfoMain = () => {
  return (
    <React.Fragment>
      <Back title='Course Details'/>
      <CourseInfo />
    </React.Fragment>
  )
}

export default CourseInfoMain;