
import './App.css';
import { useState } from 'react'
import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import { Route ,Routes } from 'react-router-dom'
import OrderHistoryPage from './pages/OrderHistoryPage';
import Nav from './components/Nav';
import { getUser } from "./utilities/users-service"
function App() {
  const [user,setUser] = useState(getUser())
  return (
    <main className='App'>
      {
        user ?
        <>
        <Nav user={user} setUser={setUser}/>
        <Routes>
          <Route path="/orders/new" element ={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;

///IMPORTANT NOTE. ADD(.env) file and insert(DATABASE_URL=mongodb+srv://RaniE:rania1988@cycle-30-cluster.z2wcxsb.mongodb.net/Cafe?retryWrites=true&w=majority
//SECRET=SEIRocks!)
