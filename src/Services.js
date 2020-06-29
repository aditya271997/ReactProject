import React from 'react'
import honey from "./honey.jpg"
import coffee from "./coffee.jpg"
import { withRouter } from 'react-router-dom'
import {Button , Row, Col , Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'

import { faHotel , faCoffee ,faUtensils , faShoppingCart,faPlane, faCreditCard, faUserSecret,faTags} from '@fortawesome/free-solid-svg-icons'


    export const New= () => (
    <div className="mt-3">
        <Card border className="bg-dark text-white" position="fixed" style={{border:"none"}}>
  <Card.Img src={honey} alt="Card image" style={{height:"400px",opacity:"0.5"}}/>
  <Card.ImgOverlay>
    <Card.Title className="text-white" style={{fontSize:"40px"}} >HoneyMoon Delite</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Button variant="warning text-white">Book Now</Button>
    <Card.Text className="mt-2">
      Flat 30%-40% OFF.
    </Card.Text>
  </Card.ImgOverlay>
   
</Card>
    </div>
)

export const Coffeecup= () => (
    <div className="mt-3">
        <Card border className="bg-dark text-white" position="fixed" style={{border:"none", borderRadius:"0px 0px 300px 300px"}}>
  <Card.Img src={coffee} alt="Card image" style={{height:"600px",opacity:"0.5" , borderRadius:"0px 0px 300px 300px"}}/>
  <Card.ImgOverlay>
    <Card.Title className="text-white" style={{fontSize:"40px",marginTop:"20px"}}> Delightful <span class="text-warning">Coffee</span> Shop </Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Button variant="warning text-white">Order Now</Button>
    <Card.Text className="mt-2">
      Flat 30%-40% OFF.
    </Card.Text>
  </Card.ImgOverlay>
   
</Card>
    </div>
)


export const Why= () => (
    <div className="mt-3">
      
        <section>
                    <h1 className="text-center mt-5 mb-5"> WHY <span className="text-warning"> US ?</span></h1>
                </section>
            <div className="container">
            <Row className="show-grid text-center mt-5 mb-5">
                <Col xs={12} sm={3} className="wrapper mt-3">
                  <FontAwesomeIcon icon={faPlane}  style={{fontSize:"75px"}} className="text-warning mb-3 " />
                  <h3>Easy Bookings</h3>
                  <Card style={{border:"none"}} className="text-muted">
                     <Card.Body>This is some text within a card body.This is some text within a card body.This is some text within a card body</Card.Body>
                   </Card>
                </Col>
                
                <Col xs={12} sm={3} className="wrapper mt-3">
                  <FontAwesomeIcon icon={faTags}  style={{fontSize:"75px"}} className="text-warning mb-3" />
                  <h3>Price Comparison</h3>
                  <Card style={{border:"none"}} className="text-muted">
                     <Card.Body>This is some text within a card body.This is some text within a card body.This is some text within a card body</Card.Body>
                   </Card>
                </Col>
                
                <Col xs={12} sm={3} className="wrapper mt-3">
                  <FontAwesomeIcon icon={faUserSecret}  style={{fontSize:"75px"}} className="text-warning mb-3" />
                  <h3>Security </h3>
                  <Card style={{border:"none"}} className="text-muted">
                     <Card.Body>This is some text within a card body.This is some text within a card body.This is some text within a card body</Card.Body>
                   </Card>
                </Col>
                
                <Col xs={12} sm={3} className="wrapper mt-3">
                  <FontAwesomeIcon icon={faCreditCard}  style={{fontSize:"75px"}} className="text-warning mb-3" />
                  <h3>Safe payments </h3>
                   <Card style={{border:"none"}} className="text-muted">
                     <Card.Body>This is some text within a card body.This is some text within a card body.This is some text within a card body</Card.Body>
                   </Card>
                </Col>
            </Row>
        </div>
    </div>
)


