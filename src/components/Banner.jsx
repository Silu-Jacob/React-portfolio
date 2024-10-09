
import React from 'react'
import './main.css'
import Nav from 'react-bootstrap/Nav';

function Banner() {
  return (
    <>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link style={{margin:'20px', color:'white'}} href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{margin:'20px', color:'white'}} eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{margin:'20px', color:'white'}} eventKey="link-2">Work</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{margin:'20px', color:'white'}} eventKey="link-2"><i class="fa-brands fa-github"></i></Nav.Link>
        </Nav.Item>
      </Nav>
    
    </>
  )
}

export default Banner
