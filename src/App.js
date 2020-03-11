import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state=({index:0,category:['All','Lorem','Ipsum','Dolor']})
  }
  render(){
    return (
      <div className="App">
        <div className="filterContainer">
          {/* This will be a filter to apply a filter function to swiper slides. Very basic filter :)*/}
          <div className="filterGoLeft"
          onClick={()=>{
            this.setState({index:--this.state.index<0?this.state.category.length-1:this.state.index})
          }}>&lt;</div>
          <div className="filterData">{this.state.category[this.state.index]}</div>
          <div className="filterGoLeft"
          onClick={()=>{
            this.setState({index:(this.state.index+1)%this.state.category.length})
          }}
          >&gt;</div>
        </div>
        <div className="swiperMainContainer">
          {/* Here we will be adding swiper container */}
        </div>
      </div>
    );
  }
}

export default App;
