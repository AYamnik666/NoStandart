import React, { Component } from 'react';
import './_concert.css';
import infoFace from '../../assets/images/Day.png';
import con2 from '../../assets/images/concert2.jpg';
import con3 from '../../assets/images/concert3.jpg';
import con4 from '../../assets/images/concert4.jpg';
import con5 from '../../assets/images/concert5.jpg';
import con6 from '../../assets/images/concert6.jpg';

const        content=[
    {
        title: "Chance The Rapper",
        description:
          "The Big Day",
          loc: '01.02.2020 Almaty Kazahstan',
        image:     infoFace
      },
      {
          title: "Ariana Grande",
          description:
            "thank u, next",
            loc: '01.04.2020 Almaty Kazahstan',
          image:     con2
      },
      {
          title: "American Football",
        description:
          "American Football",
          loc: '17.02.2020 Chicago America',
        image:     con3
      },


      {
          title: "Angel Olsen",
        description:
          "All Mirrors",
          loc: '20.07.2020 Almaty Kazahstan',
        image:     con4
      },
      {
          title: "Flying Lotus",
        description:
          "Flamagra",
          loc: '13.03.2020 Karaganda Kazahstan',
        image:     con5
      }
      ,
      {
          title: "Big Thief",
        description:
          "U.F.O.F.",
          loc: '20.02.2020 Pavlodar Kazahstan',
        image:     con6
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

{/*
class Concert extends Component {





    render() {

        return (
            <div className='concert-container'>


{content.slice(0, 3).map((item, index) => (


     <div className='concert-title'>111

     </div>
      <div className='concert-description'> 2222 </div>
             <img src={infoFace} className='concert-img'></img>


        <div className="concert-loc">333

        </div>


      </div>

      );

    }

);


}

*/}


class Concert extends Component {

    render() {
        return (
            <div className='concert-wrapper'>

      {content.map((item, index) => (
           <div className="concert-container">
        <div key={index}  className="concert-title" >
        <div className='concert-title'>{item.title} </div>
        <div className='concert-description'> {item.description} </div>
        <img src={item.image}   className="concert-img"/>
        <div className="concert-loc">{item.loc} </div>
        </div>

        </div>
      ))}


           </div>

        )
    }
}

export default Concert;