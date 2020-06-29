import React from 'react'
import honey from "./honey.jpg"
import { withRouter } from 'react-router-dom'
import {Button , Row, Col , Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'

import { faHotel , faCoffee ,faUtensils , faShoppingCart,faPlane, faCreditCard} from '@fortawesome/free-solid-svg-icons'



  export function Coffeeseg({history})
  {
    const testCoffee = () => 
    {
        history.push('/coffee')
    }
    const testHotel = () => 
    {
        history.push('/hotel')
    }
    return(
            <div>
                <section>
                    <h1 className="text-center mt-5 mb-5"> EXPLOR <span className="text-warning">SERVICES</span></h1>
                </section>
            <div className="container">
            <Row className="show-grid text-center mt-5 mb-5">
                <Col xs={12} sm={3} className="wrapper mt-3">
                    <div className="box">

                  <FontAwesomeIcon icon={faCoffee}  style={{fontSize:"75px"}} className="text-warning mb-3 mt-2 " />
                  <h3>Coffee</h3>

                  <Card style={{border:"none"}} className="text-muted">
                     <Card.Body>
                     <Card.Text>
                     This is some text within a card body.This is some text within a card body.This is some text within a card body
                   </Card.Text>
                   <Card.Text>
                     <Button variant="warning" onClick={testCoffee} className="mt-2">Explore Now</Button>
                     </Card.Text>
                   </Card.Body>
                    
                     
                     
                   </Card>
                </div>
                </Col>
                
                <Col xs={12} sm={3} className="wrapper mt-3">
                    <div className="box">
                   <FontAwesomeIcon icon={faHotel}  style={{fontSize:"75px"}} className="text-warning mb-3 mt-3" />
                  <h3>Hotel</h3>
                  <Card style={{border:"none"}} className="text-muted">
                    <Card.Body>
                     <Card.Text>
                     This is some text within a card body.This is some text within a card body.This is some text within a card body
                   </Card.Text>
                     <Card.Text>
                     <Button variant="warning" onClick={testCoffee}>Explore Now</Button>
                     </Card.Text>
                   </Card.Body>
                   </Card>
               </div>
                </Col>
                
                <Col xs={12} sm={3} className="wrapper mt-3">
                    <div className="box">
                  <FontAwesomeIcon icon={faUtensils}  style={{fontSize:"75px"}} className="text-warning mb-3 mt-3" />
                  <h3>Resturant</h3>
                  <Card style={{border:"none"}} className="text-muted">
                     <Card.Body>
                     <Card.Text>
                     This is some text within a card body.This is some text within a card body.This is some text within a card body
                   </Card.Text>
                     <Card.Text>
                     <Button variant="warning" onClick={testCoffee}>Explore Now</Button>
                     </Card.Text>
                   </Card.Body>
                   </Card>
               </div>
                </Col>
                
                <Col xs={12} sm={3} className="wrapper mt-3">
                    <div className="box">
                  <FontAwesomeIcon icon={faShoppingCart}  style={{fontSize:"75px"}} className="text-warning mb-3 mt-3" />
                  <h3>Shopping</h3>
                   <Card style={{border:"none"}} className="text-muted">
                     <Card.Body>
                     <Card.Text>
                     This is some text within a card body.This is some text within a card body.This is some text within a card body
                   </Card.Text>
                     <Card.Text>
                     <Button variant="warning" onClick={testCoffee}>Explore Now</Button>
                     </Card.Text>
                   </Card.Body>
                   </Card>
               </div>
                </Col>
            </Row>
                </div>
            </div>
        )
        }
 export default withRouter (Coffeeseg);   
   


