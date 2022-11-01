import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/UserAuthContext";
import { useState } from "react";
import "./loginformS.css";
import { auth, provider } from "../FirebaseConfig";
import { signInWithPopup } from "firebase/auth";


function LoginForm() {
  const { signIn } = UserAuth();

  const signInWithGoogle = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          navigate("/About");
        })
        .catch((error) => alert(error.message));
    };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    try {
      signIn(email, password);
      navigate("/About");
    } catch (e) {
      console.log(e.message);
    }
  };



  const [popupStyle, showPopup] = useState("hide");

      const popup = () => {
            showPopup("login-popup")
            setTimeout(() => showPopup("hide"), 3000)
      };


  return (
        <div className='page'>
            <div className="cover">
            <p>
                Don't have an account? <Link to="/SignUp"> Signup </Link>
            </p>
            <h1 style={{marginBottom: "1rem"}} >Log in</h1>
            <center className="inputF" onSubmit={handleLogIn}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder = "Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </center>
              <button className="login-btn" style={{marginTop: "1rem", marginBottom: "1rem"}} >Log in</button>
    
                <p className="text" style={{marginBottom: "0.5rem"}} onClick={popup} >Or Log in using</p>
    
                <div className="alt-login">
                    <div className="facebook"></div>
                    <div className='google' onClick={signInWithGoogle} ></div>
                </div>
          
            
            <div className={popupStyle}>
                    <h3>log in failed</h3>
                    <p>Email address or password incorrect</p>
                </div>
    
    
            
                
          </div> 
        </div>
        
    
      );
    }

export default LoginForm;














































// import React from 'react';

// import { useState} from "react";
// import { UserAuth } from '../context/UserAuthContext';
// import { useNavigate } from "react-router-dom";

// function LoginForm () {
  
//     const { logIn } = UserAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

  

//     const handleLogIn = (e) => {
//     e.preventDefault();
//     try {
//       logIn(email, password);
//       navigate("/About");
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
  
//     const [popupStyle, showPopup] = useState("hide");

//       const popup = () => {
//             showPopup("login-popup")
//             setTimeout(() => showPopup("hide"), 3000)
//       };

//   return (
//     <div className='page'>
//         <div className="cover">
//         <h1 style={{marginBottom: "1rem"}} >Log in</h1>
//         <form onSubmit={handleLogIn}>
//           <div>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder = "Email" />
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//           </div>

//           <button className="login-btn" style={{marginTop: "1rem", marginBottom: "1rem"}} >Log in</button>

//             <p className="text" style={{marginBottom: "0.5rem"}} onClick={popup} >Or Log in using</p>

//             <div className="alt-login">
//                 <div className="facebook"></div>
//                 <div className='google'></div>
//             </div>
//         </form>
        
//         <div className={popupStyle}>
//                 <h3>log in failed</h3>
//                 <p>Email address or password incorrect</p>
//             </div>


        
            
//       </div> 
//     </div>
    

//   );
// }

// export default LoginForm;