import React, { Component } from 'react';
import './_alboms.css';

import albomFace from '../../assets/images/Day.png';
import beauty from '../../assets/images/beauty.png';
import Tops from '../Tops/Tops';
import Tracks from './../Tracks/Traks';
import Novelty from './../Novelty/Novelty';


class Alboms extends Component {

    render() {
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

                <div className='alboms-container-artist'>Chance The Rapper</div>
                <div className='alboms-container-albom-name'>The Big Day</div>

                <img src={albomFace} className='albom-face-image' />
                </div>
                <Tracks />
            </div>


        )
    }

}

export default Alboms;