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
import Face from './../Face/Face';






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

<Face />

                <Tracks />

                <Route path='/alboms/face' component={Face}/>
                <Route path='/alboms/info' component={Info}/>



            </div>


        )
    }

}

export default Alboms;