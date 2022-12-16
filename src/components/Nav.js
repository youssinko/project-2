import { Link } from "react-router-dom"
import * as userService from '../utilities/users-service'
export default function Nav({user,setUser}){
    function handleLogout () {
        // Delegate to the users-service
        userService.logOut()
        setUser(null)
      }
    
    return (
    <nav>
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new">New Order</Link>
        &nbsp;Welcome, {user.name}
        {/* &nbsp;{user.email} */}
        &nbsp;&nbsp;<Link to="" onClick={handleLogout}>Log Out</Link>
        
    </nav>
    )
}