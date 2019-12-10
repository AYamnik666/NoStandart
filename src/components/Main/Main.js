import React, { Component } from 'react';
import './_main.css';

import albomFace from '../../assets/images/albomFace.jpg';


class Main extends Component {

    render() {
        return (
            <div className='main-container'>
                <div className='main-container-artist'>Chance The Rapper</div>
                <div className='main-container-albom-name'>The Big Day</div>

                <img src={albomFace} className='albom-face' />
            </div>
        )
    }

}

export default Main;