import { Link } from "react-router-dom";
import * as userService from "../utilities/users-service";
import Nav from "react-bootstrap/Nav";

export default function NavBar({ user, setUser }) {
  function handleLogout() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
  }

  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/orders">Order History</Link>
      <Link to="/orders/new">New Order</Link>
      Welcome, {user.name}
      {/* &nbsp;{user.email} */}
      <Link to="" onClick={handleLogout}>
        Log Out
      </Link>
    </Nav>
  );
}
