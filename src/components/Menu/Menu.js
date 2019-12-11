import React, { Component } from 'react';
import './_menu.css';

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
  <li><a href="" className="current">Альбомы</a></li>
  <li><a href="">Клипы</a></li>
  <li><a href="">Новости</a></li>
  <li><a href="">Концерты</a></li>
</ul>
</div>
<div className='menu-container-enter'>Вход</div>
<div className='menu-container-enter'>Регистрация</div>
            </div>
        )
    }
}

export default Main;