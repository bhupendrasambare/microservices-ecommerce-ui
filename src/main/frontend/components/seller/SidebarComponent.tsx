import 'Frontend/style/seller.css'; // Assuming styles are in SidebarComponent.css
import React, { ReactNode, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineHome, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { LiaBell, LiaSignOutAltSolid, LiaUserSolid } from 'react-icons/lia';

interface SidebarComponentProps {
  children: ReactNode;
}

const SidebarComponent: React.FC<SidebarComponentProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const handleToggle = () => setCollapsed(!collapsed);

  const isActive = (pathname: string) => location.pathname === pathname;

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className={`seller-sidebar bg-dark ${collapsed ? 'collapsed' : ''}`}>
        <div className="seller-sidebar-header">
          <Button variant="dark" onClick={handleToggle} className="seller-toggle-btn">
            {(collapsed)?
                <AiOutlineMenu size={24} className='seller-toggle-icon' />:
                <AiOutlineClose size={24} className='seller-toggle-icon' />
            }
          </Button>
        </div>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/" className={isActive("/") ? "active seller-nav-link" : "seller-nav-link"}>
            <AiOutlineHome size={20} className="me-2" /> {!collapsed && "Home"}
          </Nav.Link>
          <Nav.Link as={Link} to="/profile" className={isActive("/profile") ? "active seller-nav-link" : "seller-nav-link"}>
            <AiOutlineUser size={20} className="me-2" /> {!collapsed && "Profile"}
          </Nav.Link>
          <Nav.Link as={Link} to="/settings" className={isActive("/settings") ? "active seller-nav-link" : "seller-nav-link"}>
            <AiOutlineSetting size={20} className="me-2" /> {!collapsed && "Settings"}
          </Nav.Link>
        </Nav>
      </div>

      {/* Main Content */}
      <div className="seller-content">
        <Navbar expand="sm" variant="dark" bg="dark" aria-label="Stylez navigation bar">
            
            <Container>
            <Nav className=" flex-row w-100">
              <div className="d-flex justify-content-between w-100">
                <div className="">
                  <Nav.Link className="px-0 pt-2 fw-bold fs-3 active">
                    Stylez<span>.</span>
                  </Nav.Link>
                </div>
                <div className="d-flex justify-content-end">
                  <Nav.Link className={isActive("/seller/account") ? "active seller-nav-link" : "seller-nav-link"}>
                    <LiaUserSolid size={20} />
                  </Nav.Link>
                  <Nav.Link onClick={() => navigate("/seller/notifications")} className={isActive("/seller/notifications") ? "active seller-nav-link" : "seller-nav-link"}>
                    <LiaBell size={20} />
                  </Nav.Link>
                  <Nav.Link className="seller-nav-link">
                    <LiaSignOutAltSolid size={20}  className="me-2 "/>
                  </Nav.Link>
                </div>
              </div>
            </Nav>
          </Container>
        </Navbar>
        {/* Add other content here */}
        <div className="child-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;