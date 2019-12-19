import React, { Component } from 'react';
import './_face.css';
import beauty from '../../assets/images/beauty.png';
import arrowl from '../../assets/images/arrowl.svg'  ;
import arrowr from '../../assets/images/arrowr.svg';
import infoFace from '../../assets/images/Day.png';
import {NavLink} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom";



class Face extends Component {

    render() {
        return (
            <div className=' '>
            <img src={beauty} className='beauty-face-t-l' />
            <img src={beauty} className='beauty-face-t-r' />
            <img src={beauty} className='beauty-face-b-r' />
            <img src={beauty} className='beauty-face-b-l' />
<div>


            </div>
            <div className='face-face-arrow-right'></div>

           <div className='face-container-artist'>Chance The Rapper</div>
           <div className='face-container-albom-name'>The Big Day</div>

           <div><img src={arrowl} className='face-face-arrow-left' />
           <img src={infoFace} className='face-face-image' />
           <NavLink to="/alboms/info"><img src={arrowr} className='face-face-arrow-right'  /></NavLink></div>
           </div>

        )
    }
}

export default Face;