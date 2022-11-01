import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  //create user
  const createUser = ( email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //log out
  const logout = () => {
    return signOut(auth);
  };

  //sign in
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};





// import { auth } from "../FirebaseConfig";
// import { createContext, useContext, useEffect, useState } from "react";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut, onAuthStateChanged } from "firebase/auth";

// const userContext = createContext();

// export function UserAuthContextProvider({ children }) {
//     const [user, setUser] = useState({});

//     // SignUp
//     function signUp(name, last, email, password) {
//         return createUserWithEmailAndPassword(auth, name, last, email, password)
//     }
//     // Login
//     function login(email, password) {
//         return signInWithEmailAndPassword (auth, email, password);

//     }

//     // Logout
//     function logout(){
//         return signOut(auth);
//     }    

//     useEffect (() =>{ 
//         const unsuscribe = onAuthStateChanged (auth, (currentUser) => { 
//             setUser(currentUser);
//             return () => {
//                 unsuscribe()
//             }
//         });
//     }, []);

//     return (
//         <userContext.Provider value={{ signUp, login, logout, user }}>
//             {children}
//         </userContext.Provider>
//     );
// }

// export function useUserAuth() {
//     return useContext(userContext);
// };

