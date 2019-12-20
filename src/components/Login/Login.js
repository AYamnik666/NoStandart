import React, { Component } from 'react';
import './_login.css';
import '../Alboms/_alboms.css'


import {NavLink} from "react-router-dom";






class Login extends Component {
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
        alert('Нужно зарегистрироваться');
     
      }
    render() {



        return (


            <div className='login-container'>Вход
            <form  onSubmit={this.handleSubmit}>
            <label>
              Логин:
              <input type="text" name="name" className='login-container-input' /><br />
            </label>
            <label>
              Пароль:
              <input type="text" name="name" className='login-container-input'/><br />
            </label>
            <div className='login-container-submit' onClick={this.handleClick}>Продолжить</div>
          </form></div>


        )
    }

}

export default Login;