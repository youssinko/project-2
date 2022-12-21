import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState } from "react";
import "./AuthPage.module.css";
import Logo from "../../components/images/logo.jpeg";
import { Button } from "bootstrap";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  const signUpBotton = () => {
    setShowLogin(!showLogin);
  };
  return (
    <>
      <img src={Logo} style={{ width: "150pt" }} />
      <div className="App">
        <div className="container-fluid ps-md-0">
          <div className="row g-0">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">


                      {showLogin ? (
                        <LoginForm setUser={setUser} />
                      ) : (
                        <SignUpForm setUser={setUser} />
                      )}
                           <button onClick={signUpBotton}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
