import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';

import Footer from './components/Footer/Footer';
import Clips from './components/Clips/Clips';
import Alboms from './components/Alboms/Alboms';
import News from './components/News/News';
import Concert from './components/Concert/Concert';
import {BrowserRouter, Route} from "react-router-dom";

{/*

const App = (props) => {
  return (
    <BrowserRouter>
          <div className='App'>
          <Menu />
         <Novelty />
        <Main />
         <Tracks />
         <Tops />

         <Footer />
  <div class='app-wrapper-content'>
                  <Route path='/alboms' component={Alboms}/>
                  <Route path='/clips' component={Clips}/>
                  <Route path='/news' component={News}/>
                  <Route path='/concert' component={Concert}/>
              </div>

              </BrowserRouter>
      )
}

export default App;
*/}

const App = (props) => {
  return (
      <BrowserRouter>
          <div className='App'>

              <Menu/>

      {/*  <Main />*/}
      <div class='app-wrapper'>
                  <Route path='/alboms' component={Alboms}/>
                  <Route path='/clips' component={Clips}/>
                  <Route path='/news' component={News}/>
                  <Route path='/concert' component={Concert}/>
              </div>


         <Footer />

          </div>
      </BrowserRouter>)
}

export default App;

/*
https://ru.stackoverflow.com/questions/788603/%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1-%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B8-%D0%B2%D0%BE%D0%BB%D0%BD%D0%B8%D1%81%D1%82%D0%BE%D0%B3%D0%BE-%D1%84%D0%BE%D0%BD%D0%B0-%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D1%8B%D0%B9-%D1%84%D0%BE%D0%BD
*/