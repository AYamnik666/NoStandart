import React, { Component } from 'react';
import './_clips.css';
import '../Alboms/_alboms.css'

import albomFace from '../../assets/images/Day.png';
import video from '../../assets/images/Clip.png';
import Tops from '../Tops/Tops';
import Tracks from './../Tracks/Traks';
import Novelty from './../Novelty/Novelty';
import {BrowserRouter, Route} from "react-router-dom";

import Info from '../Info/Info';
import Face from './../Face/Face';






class Clips extends Component {

    render() {



        return (


            <div className='alboms-container'>
<div className='albom-left-list'>
            <Novelty />
                 <Tops />
</div>

<div className='clips-face-image'>
<div className='clips-container-artist'>Chance The Rapper</div>
           <div className='clips-container-albom-name'>The Big Day</div>

           <img src={video} alt='Clip' className='clip-container-video'/>
</div>


                <Tracks />




            </div>


        )
    }

}

export default Clips;