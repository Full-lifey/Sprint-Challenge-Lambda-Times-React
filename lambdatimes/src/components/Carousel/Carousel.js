import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      data: []
    }
  }
  componentDidMount(){
    this.setState({
      data: carouselData
    })
  }

  leftClick = () => {
    // (this.state.counter === 0) ? this.setState(prevState => { counter: {prevState.data.length-1}})
    // : this.setState(prevState => { counter: prevState.counter-1})
    if (this.state.counter === 0) {
      return (
        this.setState(prevState => {
          return{
            counter: prevState.data.length -1
          }
        })
      )  
    } else{
      return (
        this.setState(prevState => {
          return {
            counter: prevState.counter-1
          }
        })
      )
    }
  }

  rightClick = () => {
    if (this.state.counter === this.state.data.length-1) {
      return (
        this.setState({
            counter: 0
        })
      )  
    } else{
      return (
        this.setState(prevState => {
          return {
            counter: prevState.counter+1
          }
        })
      )
    }
  }

  selectedImage = () => {
    return <img src={this.state.data[this.state.counter]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}