import React from "react";
import "./index.css"
import Home from "./routes/Home"
import About from "./routes/About";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import { AuthContextProvider } from "./context/UserAuthContext";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <div >
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;