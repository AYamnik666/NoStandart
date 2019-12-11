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
