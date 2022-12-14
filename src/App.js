
import './App.css';
import { useState } from 'react'
import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import { Route ,Routes } from 'react-router-dom'
import OrderHistoryPage from './pages/OrderHistoryPage';
import Nav from './components/Nav';
function App() {
  const [user,setUser] = useState(null)
  return (
    <main className='App'>
      {
        user ?
        <>
        <Nav />
        <Routes>
          <Route path="/orders/new" element ={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
        </>
        :
        <AuthPage />
      }
    </main>
  );
}

export default App;
