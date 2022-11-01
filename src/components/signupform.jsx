import React from 'react';
import "./signupformS.css";
import { useState} from "react";
import { UserAuth } from '../context/UserAuthContext';
import { useNavigate } from "react-router-dom";

function SignUpForm () {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { createUser } = UserAuth();

   

  const {error, setError} = useState("");

  



    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await createUser(email, password);
        navigate("/About"); 
        // profile
      } catch (err) {
        setError(err.message);
        console.log(error);
      }
    };
  
    const [popupStyle, showPopup] = useState("hide")

      const popup = () => {
            showPopup("login-popup")
            setTimeout(() => showPopup("hide"), 3000)
      }

  return (
    <div className='page'>
        <div className="cover">
        <h1 style={{marginBottom: "1rem"}} >Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder = "Email" />
            <input type="password"  onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>

          <button className="login-btn" style={{marginTop: "1rem", marginBottom: "1rem"}} >Sign up</button>

            <p className="text" style={{marginBottom: "0.5rem"}} onClick={popup} >Or Sign up using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className='google'></div>
            </div>
        </form>
        
        <div className={popupStyle}>
                <h3>Sign up failed</h3>
                <p>Email address or password incorrect</p>
            </div>


        
            
      </div> 
    </div>
    

  );
}

export default SignUpForm;

