import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LiaShoppingCartSolid, LiaUserSolid } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();

  return (
    <div>
        <Navbar expand="md" variant="dark" bg="dark" className="custom-navbar" aria-label="Furni navigation bar">
            <Container>
                <Navbar.Brand href="index.html">
                Furni<span>.</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarsFurni" />
                <Navbar.Collapse id="navbarsFurni">
                <Nav className="ms-auto mb-2 mb-md-0">
                    <Nav.Link onClick={()=>navigate("/")} active>
                        Home
                    </Nav.Link>
                    <Nav.Link onClick={()=>navigate("/shop")}>Shop</Nav.Link>
                    <Nav.Link onClick={()=>navigate("/about")} >About us</Nav.Link>
                    <Nav.Link onClick={()=>navigate("/services")} >Services</Nav.Link>
                    <Nav.Link onClick={()=>navigate("/blog")} >Blog</Nav.Link>
                    <Nav.Link onClick={()=>navigate("/contact")} >Contact us</Nav.Link>
                </Nav>
                <Nav className="ms-5 mb-2 mb-md-0 custom-navbar-cta">
                    <Nav.Link href="#">
                        <LiaUserSolid size={30}/>
                    </Nav.Link>
                    <Nav.Link href="cart.html">
                        <LiaShoppingCartSolid size={30}/>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar