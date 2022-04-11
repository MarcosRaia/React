import React from 'react';
import './style.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
;
function NavComponent() {
    return <>
        <Navbar  className="p-0 m-0 d-flex justify-content-center" style={{ backgroundColor: '#444444' }} variant="dark">
            
            <Container className="p-0 m-0 d-flex justify-content-center ">

                <Nav >
                    <Nav.Link href="#home" style={{ color: '#fcf7d1', fontSize: '25px' }}>TWITCH</Nav.Link>
                    <Nav.Link href="#features" style={{ color: '#fcf7d1', fontSize: '25px' }}>YOUTUBE</Nav.Link>
                    <Nav.Link href="#pricing" style={{ color: '#fcf7d1', fontSize: '25px' }}>TWITTER</Nav.Link>
                </Nav>
            </Container>
        </Navbar>


    </>
}

export default NavComponent;