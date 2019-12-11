import React, { Component } from 'react';
import './_main.css';

import albomFace from '../../assets/images/Day.png';
import beauty from '../../assets/images/beauty.png';


class Main extends Component {

    render() {
        return (
            <div className='main-container'>
                 <img src={beauty} className='beauty-face-t-l' />
                 <img src={beauty} className='beauty-face-t-r' />
                 <img src={beauty} className='beauty-face-b-r' />
                 <img src={beauty} className='beauty-face-b-l' />
                <div className='main-container-artist'>Chance The Rapper</div>
                <div className='main-container-albom-name'>The Big Day</div>

                <img src={albomFace} className='albom-face' />
            </div>
        )
    }

}

export default Main;