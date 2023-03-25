import React from 'react';
import Back from "../common/back/Back"
import Visualizer from './Visualizer'
import './VisualizerHome.css';

const VisualizerHome = () => {
    return (
        <>
        <Back title='Algorithm Visualizer' />
        <Visualizer />
        </>
      )
}

export default VisualizerHome;