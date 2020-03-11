import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import './App.css';
import Swiper from 'swiper';

const categoryData=['Lorem','Lorem','Dolor','Ipsum','Dolor','Dolor'];

class App extends Component{
  constructor(props){
    super(props);
    this.state=({index:0,category:['All','Lorem','Ipsum','Dolor']})
  }
  componentDidMount(){
    this.swiper=new Swiper('.swiper-container',{
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
  }
  render(){
    return (
      <div className="App">
        <div className="filterContainer">
          {/* This will be a filter to apply a filter function to swiper slides. Very basic filter :)*/}
          <div className="filterGoLeft"
          onClick={()=>{
            this.setState({index:this.state.index-1<0?this.state.category.length-1:this.state.index-1},
              ()=>this.swiper.update())
          }}>&lt;</div>
          <div className="filterData">{this.state.category[this.state.index]}</div>
          <div className="filterGoLeft"
          onClick={()=>{
            this.setState({index:(this.state.index+1)%this.state.category.length},
            ()=>this.swiper.update())
          }}
          >&gt;</div>
        </div>
        <div className="swiperMainContainer">
          {/* Here we will be adding swiper container */}
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {categoryData.map((el,index)=>{
                const currentSection=this.state.category[this.state.index]
                if(el===currentSection || currentSection==="All"){
                  return(
                    <div className="swiper-slide" key={index}>
                      <div>{el}</div>
                      <div class="imgCardHolder">
                        <img src={`https://picsum.photos/id/102${index}/300/300.jpg`} alt="images"/>
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
            <div class="swiper-pagination"></div>
            {/* -- If we need navigation buttons -- */}
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
