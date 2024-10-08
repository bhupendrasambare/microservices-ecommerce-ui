import 'Frontend/style/seller.css'; // Assuming styles are in SidebarComponent.css
import React, { ReactNode, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu, AiOutlineProduct } from 'react-icons/ai';
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai';
import { LiaBell, LiaSignOutAltSolid, LiaUserSolid } from 'react-icons/lia';
import { MdOutlineReviews } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { SidebarComponentProps } from 'Frontend/inteface/seller/UiProps';
import { setUser } from 'Frontend/storage/authSlice';
import { useDispatch } from 'react-redux';



const SidebarComponent: React.FC<SidebarComponentProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggle = () => setCollapsed(!collapsed);

  const isActive = (pathname: string) => location.pathname === pathname;
  
  const logout = ()=>{
    dispatch(setUser(null));
    navigate("/seller/login")
  }

  return (
    <div className="d-flex seller-outer-component">
      {/* Sidebar */}
      <div className={`seller-sidebar  shadow-lg ${collapsed ? 'collapsed' : ''}`}>
        <div className="seller-sidebar-header">
          <Button variant="light" onClick={handleToggle} className="seller-toggle-btn">
            {(collapsed)?
                <AiOutlineMenu color='black' size={24} className='seller-toggle-icon text-light' />:
                <><AiOutlineClose color='black' size={24} className='seller-toggle-icon text-light' /></>
            }
          </Button>
        </div>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/seller/" className={isActive("/seller/") ? "active seller-nav-link" : "seller-nav-link text-light"}>
            <AiOutlineHome size={20} className="me-2" /> {!collapsed && "Home"}
          </Nav.Link>
          <Nav.Link as={Link} to="/seller/products" className={isActive("/seller/products") ? "active seller-nav-link" : "seller-nav-link text-light"}>
            <AiOutlineProduct size={20} className="me-2" /> {!collapsed && "Products"}
          </Nav.Link>
          <Nav.Link as={Link} to="/seller/orders" className={isActive("/seller/orders") ? "active seller-nav-link" : "seller-nav-link"}>
            <TbTruckDelivery size={20} className="me-2" /> {!collapsed && "Orders"}
          </Nav.Link>
          <Nav.Link as={Link} to="/seller/reviews" className={isActive("/seller/reviews") ? "active seller-nav-link" : "seller-nav-link"}>
            <MdOutlineReviews size={20} className="me-2" /> {!collapsed && "Reviews"}
          </Nav.Link>
          {/* <Nav.Link as={Link} to="/seller/profile" className={isActive("/seller/profile") ? "active seller-nav-link" : "seller-nav-link"}>
            <AiOutlineUser size={20} className="me-2" /> {!collapsed && "Profile"}
          </Nav.Link> */}
          <Nav.Link as={Link} to="/seller/settings" className={isActive("/seller/settings") ? "active seller-nav-link" : "seller-nav-link"}>
            <AiOutlineSetting size={20} className="me-2" /> {!collapsed && "Settings"}
          </Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="seller-content">
        <Navbar expand="sm" variant="light" bg="light" className='seller-content-nav' aria-label="Stylez navigation bar shadow-lg">
            
            <Container>
            <Nav className=" flex-row w-100">
              <div className="d-flex justify-content-between w-100">
                <div className="">
                  <Nav.Link className="px-0 pt-2 fw-bold fs-3 active text-light"> Stylez<span className='text-secondary'>.</span> </Nav.Link>
                </div>
                <div className="d-flex justify-content-end">
                    <Nav.Link onClick={() => navigate("/seller/account")} className={isActive("/seller/account") ? "seller-nav-link-up active" : "seller-nav-link-up"}>
                        <LiaUserSolid size={25} />
                    </Nav.Link>
                    <Nav.Link onClick={() => navigate("/seller/notifications")} className={isActive("/seller/notifications") ? "active seller-nav-link-up" : "seller-nav-link-up"}>
                        <div className="seller-position-relative">
                            <LiaBell size={25} />
                            <span className="seller-notification-badge ">12</span>
                        </div>
                    </Nav.Link>
                    <Nav.Link className="seller-nav-link-up">
                        <LiaSignOutAltSolid size={25} onClick={logout}/>
                    </Nav.Link>
                </div>
              </div>
            </Nav>
          </Container>
        </Navbar>
        {/* Add other content here */}
        <div className="seller-child-content">
          {children}
        </div>
        <div className="w-100 bg-light text-center seller-footer">
            A product by @Bhupendra sambare
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;