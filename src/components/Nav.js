import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";
import {Nav,NavDropdown} from "react-bootstrap";


export default function NavBar({ user, setUser }) {
  function handleLogout() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
  }

  return (
    <Nav variant="tabs" defaultActiveKey="/home">
     
       <Nav.Link href="/">Home</Nav.Link>
     
      <Nav.Link href="/orders">Order History</Nav.Link>
      
      <Nav.Link href="/orders/new">New Order</Nav.Link>

     
      
      {/* &nbsp;{user.email} */}
      <NavDropdown title={`Welcome, ${user.name}` }id="nav-dropdown">
        <Nav.Link href="" onClick={handleLogout} eventKey="4.1">Log Out</Nav.Link>
        </NavDropdown>
     
        </Nav>
    
  );
}
