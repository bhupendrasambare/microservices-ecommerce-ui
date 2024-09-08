import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LiaShoppingCartSolid, LiaUserSolid } from 'react-icons/lia';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();
    const isActive = (pathname: string) => location.pathname === pathname;
  return (
    <div>
        <Navbar expand="md" variant="dark" bg="dark" className="custom-navbar" aria-label="Stylez navigation bar">
            <Container>
                <Navbar.Brand href="index.html">
                Stylez<span>.</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarsStylez" />
                <Navbar.Collapse id="navbarsStylez">
                <Nav className="ms-auto mb-2 mb-md-0">
                    <Nav.Link onClick={()=>navigate("/")} className={isActive("/") ? "active" : ""} > Home </Nav.Link>
                    <Nav.Link onClick={()=>navigate("/shop")} className={isActive("/shop") ? "active" : ""}>Shop</Nav.Link>
                    <Nav.Link onClick={()=>navigate("/about")} className={isActive("/about") ? "active" : ""} >About us</Nav.Link>
                    <Nav.Link onClick={()=>navigate("/services")} className={isActive("/services") ? "active" : ""} >Services</Nav.Link>
                    <Nav.Link onClick={()=>navigate("/contact")} className={isActive("/contact") ? "active" : ""} >Contact us</Nav.Link>
                </Nav>
                <Nav className="ms-5 mb-2 mb-md-0 custom-navbar-cta">
                    <Nav.Link onClick={()=>navigate("/account")} className={isActive("/account") ? "active" : ""} >
                        <LiaUserSolid size={30}/>
                    </Nav.Link>
                    <Nav.Link onClick={()=>navigate("/cart")} className={isActive("/cart") ? "active" : ""}>
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