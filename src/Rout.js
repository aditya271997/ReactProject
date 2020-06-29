import React,{Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Navbar, Nav } from 'react-bootstrap';

const SmoothScroll = () => {
  return(
      <div>
      <Navbar bg="light" expand="lg" className="navbar-fixed">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
      <AnchorLink href="/home" >Home</AnchorLink>
      <AnchorLink href="/search">Search</AnchorLink>
      <AnchorLink href="/explore">Explore</AnchorLink>
      <AnchorLink href="/adventure">Adventure</AnchorLink>
      <AnchorLink href="/gallery">Gallery</AnchorLink>
      <AnchorLink href="/contact">Contact</AnchorLink>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

          

      </div>
    
  )
}
export default SmoothScroll;