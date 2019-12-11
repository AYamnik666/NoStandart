import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Menu from './components/Menu/Menu';
import Novelty from './components/Novelty/Novelty';
import Tops from './components/Tops/Tops';
import Tracks from './components/Tracks/Traks';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <div className="App">
      <svg width="1440" height="155" viewBox="0 0 1440 155" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<path d="M399.449 134.429C333.775 170.979 93.1186 119.199 -19 88.7405V0H1441.01C1443.29 54.7672 1478.07 134.429 1441.01 134.429C1388.56 134.429 481.543 88.7404 399.449 134.429Z" fill="#FF8000"/>
</g>
<defs>
<filter id="filter0_d" x="-23" y="0" width="1485" height="155" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

         <Menu />

  



         <Novelty />


         <Main />
         <Tracks />
         </div>
         <div>
         <Tops />

         <Footer />

  </div>

    </div>
  );
}

export default App;
