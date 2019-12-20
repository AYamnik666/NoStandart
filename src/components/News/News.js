import React, { Component } from 'react';
import './_news.css';
import news1 from '../../assets/images/News1.jpg';
import news2 from '../../assets/images/News2.jpg';
import news3 from '../../assets/images/News3.jpg';
import news4 from '../../assets/images/News4.jpg';

const        content=[
    {
        title: "Chance The Rapper",
          loc: '21-летний рэпер Juice Wrld умер в аэропорту',
        image:     news1
      },
      {
          title: "Ariana Grande",
            loc: 'Камила Кабелло выпустила «Romance» ',
          image:     news2
      },
      {
          title: "American Football",
          loc: 'Бывшего и нынешних участников Rolling Stones покажет Первый канал',
        image:     news3
      },


      {
          title: "Angel Olsen",
          loc: 'Адам Ламберт перепел один из главных хитов Шер ',
        image:     news4
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
class news extends Component {





    render() {

        return (
            <div className='news-container'>


{content.slice(0, 3).map((item, index) => (


     <div className='news-title'>111

     </div>
      <div className='news-description'> 2222 </div>
             <img src={infoFace} className='news-img'></img>


        <div className="news-loc">333

        </div>


      </div>

      );

    }

);


}

*/}


class News extends Component {

    render() {
        return (
            <div className='news-main-main'>
            <div className='news-main'>American Football приедет в Казахстан</div>
            <div className='news-main-text'>American Football выступит с туром в нескольких городах Казахстана осенью 2020 года. Билеты....</div>
            <div className='news-main'>Рецензия: «Сурганова и оркестр» - «Юбилейный концерт. 15 лет»</div>
            <div className='news-main-text'>Оценка: 8,5 из 10. Концерт в честь 15-летия группы «Сурганова и оркестр» состоялся 1 декабря 2018 года в Crocus City Hall.</div>

            <div className='news-main'>Премия «Виктория-2019» провозгласила триумф Zivert и Димаша Кудайбергена</div>
            <div className='news-main-text'>Торжественная церемония вручения Российской национальной музыкальной премии «Виктория» состоялась в Государственном Кремлёвском дворце 5 декабря 2019 года.</div>

            <div className='news-wrapper'>


      {content.map((item, index) => (
           <div className="news-container">

        <div key={index} >
        <img src={item.image}   className="news-img"/>
        <div className="news-loc">{item.loc} </div>
        </div>

        </div>
      ))}


           </div>
           </div>

        )
    }
}

export default News;