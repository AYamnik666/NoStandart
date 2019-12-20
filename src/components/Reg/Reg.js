import React, { Component } from 'react';
import './_reg.css';
import '../Alboms/_alboms.css'
import Albom from '../Alboms/Alboms';


import {NavLink} from "react-router-dom";






class Reg extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleClick(event) {
        alert('Вы зарегистрированы');
     
      }
    render() {



        return (


            <div className='reg-container'>Регистрация
            <form  onSubmit={this.handleSubmit}>
            <label>
              Логин:
              <input type="text" name="name" className='reg-container-input' /><br />
            </label>
            <label>
              Пароль:
              <input type="text" name="name" className='reg-container-input'/><br />
            </label>
            <label>
              Пароль:
              <input type="text" name="name" className='reg-container-input'/><br />
            </label>
            <div className='reg-container-submit' onClick={this.handleClick}>Продолжить</div>
          </form></div>


        )
    }

}

export default Reg;