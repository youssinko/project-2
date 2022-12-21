import "./App.css";

import { useState } from "react";
import NewOrderPage from "./pages/NewOrderPage/NewOrderPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import { Route, Routes } from "react-router-dom";
import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage";
import NavBar from "./components/Nav";
import { getUser } from "./utilities/users-service";
import HomePage from "./pages/HomePage/HomePage";
import Logo from "./components/images/logo.jpeg";
function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser}/>
          <img src={Logo} style={{ width: "150pt" }} />
          <div className="blur" style={{ top: "-18%", right: "0" }}></div>
          <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
          <div className="blur" style={{ top: "100%", left: "25rem" }}></div>
          <div className="blur" style={{ bottom: "-30%", left: "1rem" }}></div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;

///IMPORTANT NOTE. ADD(.env) file and insert(DATABASE_URL=mongodb+srv://RaniE:rania1988@cycle-30-cluster.z2wcxsb.mongodb.net/Cafe?retryWrites=true&w=majority
//SECRET=SEIRocks!)
