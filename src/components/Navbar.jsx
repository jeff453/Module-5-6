import "./Navbarstyles.css";

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaTimes, FaBars, FaHome } from "react-icons/fa";
import {MdOutlineAssignment} from 'react-icons/md';
import { RiLoginBoxLine } from 'react-icons/ri';
import { AiOutlineDotChart } from 'react-icons/ai';
import { GoLaw } from 'react-icons/go';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick (!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=1) {
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);
  
    return (
      <div className="headerM">
        
        <div className={ click ? "nav-menu active" : "nav-menu"}>
          <ul>
            <li data-text="Home">
              <Link to ="/">
                <FaHome size={60} style={{ color: "black" }} />
              </Link>
            </li >

              <li data-text="Classic">
                <Link to="/Project">
                  <GoLaw size={60} style={{ color: "black" }} />
                </Link>
                {/* physics place */}
              </li>
            
              <li data-text="Quantum">
                <Link to="/About">
                  <AiOutlineDotChart size={60} style={{ color: "black" }} />
                </Link>
              </li>
            
              <li data-text="SignUp">
                <Link to="/SignUp">
                  <MdOutlineAssignment size={60} style={{ color: "black" }} />
                </Link>
              </li>
            
              <li data-text="Login">
                <Link to="/Login">
                  <RiLoginBoxLine size={60} style={{ color: "black" }} />
                </Link>
              </li>
            </ul>
          </div>
          
        <div className="IconMQ" onClick={handleClick}>
          {click ? (
            <FaTimes size={25} style={{ color: "black" }} />
          ): (
            <FaBars size={25} style={{ color: "black" }} />
          )
        }        
        </div>
      </div>
    )
  }


export default Navbar;