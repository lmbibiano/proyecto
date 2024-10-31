import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navbar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Mi Proyecto</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto bg-light">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Enlace</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navbar;




