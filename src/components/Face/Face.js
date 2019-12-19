import React, { Component } from 'react';
import './_face.css';
import beauty from '../../assets/images/beauty.png';
import arrowl from '../../assets/images/arrowl.svg'  ;
import arrowr from '../../assets/images/arrowr.svg';
import infoFace from '../../assets/images/Day.png';
import {NavLink} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom";
import  Slider2  from '../Slider2/Slider2';



class Face extends Component {

    render() {
        return (
            <div className='face-container'>




<div className='face-face-image'>
<div className='face-container-artist'>Chance The Rapper</div>
           <div className='face-container-albom-name'>The Big Day</div>

            <Slider2  className='face-container'/>
</div>

<img src={beauty} className='beauty-face-t-l' />
            <img src={beauty} className='beauty-face-t-r' />
            <img src={beauty} className='beauty-face-b-r' />
            <img src={beauty} className='beauty-face-b-l' />
            </div>

        )
    }
}

export default Face;