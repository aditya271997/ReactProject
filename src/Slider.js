import React from 'react'
import logo from "./logo.jpg"
import logo2 from "./logo2.jpg"
import logo3 from "./logo3.jpg"
import {Carousel,} from 'react-bootstrap' 
import './Style.css'

export default class Slider extends React.Component{
    render(){
        return(

            <div  className=" mt-5">
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={logo}
      alt="First slide"
      style={{height:"400px"}}
    />
    <Carousel.Caption>
      <h3 className="m-auto">Welcome to React<span className="text-warning">Travel</span></h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo2}
      alt="Third slide"
      style={{height:"400px"}}
    />

    <Carousel.Caption>
      <h3 className="text-center m-auto p-auto text-success">Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo3}
      alt="Third slide"
      style={{height:"400px"}}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  </div>


        )
    }
}