import React, { Component } from 'react';
import './_novelty.css';

import albomFace from '../../assets/images/albomFace.jpg';


class Novelty extends Component {

    render() {
        return (
            <div className='novelty-container'>
                <h3>Новинки</h3>
                <div className='novelty-container-artist'>Ariana Grande</div>
                <div className='novelty-container-albom-name'>thank u, next</div>
                <div className='novelty-container-artist'>Anderson .Paak</div>
                <div className='novelty-container-albom-name'>Ventura</div>
                <div className='novelty-container-artist'>American Football</div>
                <div className='novelty-container-albom-name'>American Football</div>
                <div className='novelty-container-artist'>Big Thief</div>
                <div className='novelty-container-albom-name'>U.F.O.F.</div>
                <div className='novelty-container-artist'>Chance The Rapper</div>
                <div className='novelty-container-albom-name'>The Big Day</div>
                <div className='novelty-container-artist'>Denzel Curry</div>
                <div className='novelty-container-albom-name'>ZUU</div>
                <div className='novelty-container-artist'>James Blake</div>
                <div className='novelty-container-albom-name'>Assume Form</div>
            </div>
        )
    }
}

export default Novelty;