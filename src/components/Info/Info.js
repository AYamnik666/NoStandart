import React, { Component } from 'react';
import './_info.css';
import beauty from '../../assets/images/beauty.png';
import arrowl from '../../assets/images/arrowl.svg'  ;
import arrowr from '../../assets/images/arrowr.svg';
import infoFace from '../../assets/images/Day.png';
import {NavLink} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom";



class Info extends Component {

    render() {
        return (
            <div className='info-container'>
<div className='info-left-list'>


</div>
                 <div className='info-face'>
                 <img src={beauty} className='beauty-face-t-l' />
                 <img src={beauty} className='beauty-face-t-r' />
                 <img src={beauty} className='beauty-face-b-r' />
                 <img src={beauty} className='beauty-face-b-l' />
<div>


                 </div>
                 <div className='info-face-arrow-right'></div>

                <div className='info-container-artist'>Chance The Rapper</div>
                <div className='info-container-info-name'>The Big Day</div>

                <div><img src={arrowl} className='info-face-arrow-left' />
                <img src={infoFace} className='info-face-image' />
                <NavLink to="/info/info"><img src={arrowr} className='info-face-arrow-right'  /></NavLink></div>
                </div>

                <Route path='/info/info' component={Info}/>
            </div>


        )
    }
}

export default Info;