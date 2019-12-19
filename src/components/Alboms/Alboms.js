import React, { Component } from 'react';
import './_alboms.css';

import albomFace from '../../assets/images/Day.png';
import beauty from '../../assets/images/beauty.png';
import Tops from '../Tops/Tops';
import Tracks from './../Tracks/Traks';
import Novelty from './../Novelty/Novelty';

import arrowl from '../../assets/images/arrowl.svg'  ;
import arrowr from '../../assets/images/arrowr.svg';
import {BrowserRouter, Route} from "react-router-dom";

import Info from '../Info/Info';
import {NavLink} from "react-router-dom";


class Alboms extends Component {

    render() {



        let onAlbomInfo = () => {
            alert('показать инфо альбома');
        }


        return (


            <div className='alboms-container'>
<div className='albom-left-list'>
            <Novelty />
                 <Tops />
</div>
                 <div className='albom-face'>
                 <img src={beauty} className='beauty-face-t-l' />
                 <img src={beauty} className='beauty-face-t-r' />
                 <img src={beauty} className='beauty-face-b-r' />
                 <img src={beauty} className='beauty-face-b-l' />
<div>


                 </div>
                 <div className='albom-face-arrow-right'></div>

                <div className='alboms-container-artist'>Chance The Rapper</div>
                <div className='alboms-container-albom-name'>The Big Day</div>

                <div><img src={arrowl} className='albom-face-arrow-left' />
                <img src={albomFace} className='albom-face-image' />
                <img src={arrowr} className='albom-face-arrow-right'  onClick={ onAlbomInfo } /><NavLink to="/alboms/info">Концерты</NavLink></div>
                </div>
                <Tracks />

                <Route path='/alboms/info' component={Info}/>
            </div>


        )
    }

}

export default Alboms;