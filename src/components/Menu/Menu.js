import React, { Component } from 'react';
import './_menu.css';

import albomFace from '../../assets/images/albomFace.jpg';


class Main extends Component {

    render() {
        return (
            <div className='menu-container'>
<ul class="menu-main">
  <li><a href="" class="current">Альбомы</a></li>
  <li><a href="">Клипы</a></li>
  <li><a href="">Новости</a></li>
  <li><a href="">Концерты</a></li>
</ul>

                <img src={albomFace} className='logo' />
            </div>
        )
    }

}

export default Main;