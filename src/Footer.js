import React from 'react'
import './Style.css'
import {Button , Row, Col , Card} from 'react-bootstrap';
import Contactus from './Contact'
 export default class Home extends React.Component{
     render(){
         return(
             <div>
              
                  <Card className=" bg-warning" style={{border:"none"}}  >
                    <div className="container-fluid">
                    <Row className="show-grid">
                     <Col xs={12} sm={4} className="wrapper">
                      
                      <Card.Body>
                        <Card.Title className="text-white text-bold">ReactTRAVEL.com</Card.Title>
                         <Card.Text className="text-white ">
                          With supporting text below as a natural lead-in to additional content.
                          book your fav spots for free .
                         </Card.Text>
                       </Card.Body>
                     
                     </Col>


   <Col xs={12} sm={4} className="wrapper">
  
  <Card.Body>
    <Card.Title className="text-white text-bold">ADDRESS</Card.Title>
    <Card.Text className="text-white">
      <p className="mb-3">With supporting text below as a natural lead-in to additional content.</p>
      
      <p>L-31 ,Adarsh Colony,Gandhinagar</p>
      
      <p> BHOPAL</p>
      
      <p>MOB.NO-8085433341</p>
      
      <p>adityasinghrajput862@gmail.com</p>
    </Card.Text>
    
  </Card.Body>
  </Col>

   <Col xs={12} sm={4} className="wrapper">
  
  <Card.Body className="text-center">
    <Card.Title className="text-white">CONTACT US</Card.Title>
     <Contactus />
    
  </Card.Body>
  </Col>
</Row>
</div>
</Card>   

<Card  style={{border:"none"}}>
  <Card.Body className="text-warning text-center ">Copyright@ADI | 2020.</Card.Body>
</Card>


</div>
         )
     }
 }