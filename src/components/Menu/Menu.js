import React, { Component } from 'react';
import './_menu.css';
import {NavLink} from "react-router-dom";

import albomFace from '../../assets/images/logo.png';


class Main extends Component {

    render() {
        return (
            <div className='menu-container'>
                   <div>
                       <img src={albomFace} className='logo' />
                       </div>
                       <div>
<ul className="menu-main">
  <li><a href="" ><NavLink to="/alboms">Альбомы</NavLink></a></li>
  <li><a href=""><NavLink to="/clips">Клипы</NavLink></a></li>
  <li><a href=""><NavLink to="/news">Новости</NavLink></a></li>
  <li><a href=""><NavLink to="/concert">Концерты</NavLink></a></li>
</ul>
</div>
<div className='menu-container-enter'>Вход</div>
<div className='menu-container-enter'>Регистрация</div>
            </div>
        )
    }
}

export default Main;