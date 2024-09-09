import { RootState } from 'Frontend/storage';
import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LiaShoppingCartSolid, LiaSignOutAltSolid, LiaUserSolid } from 'react-icons/lia';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';
import { RxExit } from 'react-icons/rx';
import { setToken } from 'Frontend/storage/authSlice';

function NavBar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const token:string|null = useSelector((state: RootState) => state.auth.token);
    const isActive = (pathname: string) => location.pathname === pathname;
    console.log(token)
    const [modalShow, setModalShow] = useState<boolean>(false);
    const checkLogin = () =>{
        if(token){
            navigate("/account");
        }else{
            setModalShow(true);
        }
    }
    const logout = async() =>{
        dispatch(setToken(null));
        navigate("/")
    }

  return (
    <div>
        <LoginModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        <Navbar expand="md" variant="dark" bg="dark" className="custom-navbar" aria-label="Stylez navigation bar">
            <Container>
                <Navbar.Brand onClick={()=>navigate("/")}>
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
                    <Nav.Link onClick={checkLogin} className={isActive("/account") ? "active" : ""} >
                        <LiaUserSolid size={30}/>
                    </Nav.Link>
                    <Nav.Link onClick={()=>navigate("/cart")} className={isActive("/cart") ? "active" : ""}>
                        <LiaShoppingCartSolid size={30}/>
                    </Nav.Link>
                    {token &&
                        <Nav.Link onClick={logout}>
                            <LiaSignOutAltSolid size={30}/>
                        </Nav.Link>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar