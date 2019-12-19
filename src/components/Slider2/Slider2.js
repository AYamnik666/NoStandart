import React, { Component } from 'react';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./_slider2.css";


import infoFace from '../../assets/images/Day.png';

const content = [
    {
      title: "1111",
      description:
        "first",
      image:     infoFace
    },
    {
      title: "222",
      description:
       "second",
      image: "https://i.imgur.com/DCdBXcq.jpg"
    },
    {
      title: "333",
      description:
      "thierd",
      image: "../../assets/images/Day.png"
    }
  ];


  function SliderItem({ item }) {
    return (
      <div
      /*  className="slider-content"
        style={{ background: `url('${item.image}') no-repeat center center` }}*/

      >
             <img src='${item.image}' />


        <div className="inner">
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
        <section>
          <img src={item.userProfile} alt={item.user} />
        </section>
      </div>
    );
  }

class Slider2 extends Component {

    render() {
        return (
            <div>
    <Slider className="slider-wrapper">
      {content.slice(0, 3).map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image} no-repeat center center` }}
        >
             <img src={infoFace}   className="slider-img"/>
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>

        </div>
      ))}
    </Slider>

           </div>

        )
    }
}

export default Slider2;


{/*https://codesandbox.io/s/jzww6lm345*/ }
