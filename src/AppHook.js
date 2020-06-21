import React,{useState,useEffect,useRef} from 'react';
import 'swiper/css/swiper.min.css'
import './App.css';
import Swiper from 'swiper';

const categoryData=['Lorem','Lorem','Dolor','Ipsum','Dolor','Dolor'];

const App = ()=>{
    const [index,setIndex] = useState(0)
    const [category,setCategory] = useState(['All','Lorem','Ipsum','Dolor'])
    const swiper = useRef(null);

    useEffect(()=>{
        swiper.current = new Swiper('.swiper-container',{
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows : true,
            },
            pagination: {
              el: '.swiper-pagination',
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          })
    },[])

    useEffect(()=>{
        swiper.current.update();
    },[index])

  
    return (
      <div className="App">
        <div className="filterContainer">
          {/* This will be a filter to apply a filter function to swiper slides. Very basic filter :)*/}
          <div className="filterGoLeft"
          onClick={()=>{setIndex(index-1<0?category.length-1:index-1);}}>&lt;</div>
          <div className="filterData">{category[index]}</div>
          <div className="filterGoLeft"
          onClick={()=>{setIndex((index+1)%category.length)}}>&gt;</div>
        </div>
        <div className="swiperMainContainer">
          {/* Here we will be adding swiper container */}
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {categoryData.map((el,key)=>{
                const currentSection=category[index]
                if(el===currentSection || currentSection==="All"){
                  return(
                    <div className="swiper-slide" key={key}>
                      <div>{el}</div>
                      <div className="imgCardHolder">
                        <img src={`https://picsum.photos/id/102${key}/300/300.jpg`} alt="images"/>
                      </div>
                      <div>Demo Purposes</div>
                    </div>
                  )}
                  else{
                    return null
                  }
              })}
            </div>
            {/* -- If we need pagination -- */}
            <div className="swiper-pagination"></div>
            {/* -- If we need navigation buttons -- */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>
    );
}

export default App;
