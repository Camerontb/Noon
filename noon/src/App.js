import React from 'react'
import "./styles.css";

import { Outlet, NavLink } from "react-router-dom";


// import './App.css';


export default function App(){
  return(
    <div className="App">
    <nav style={{ backgroundColor: "#1B1A17", padding: "15px" }}>
      <ul className="ulStyle">
        <li>
          {""}
          <NavLink
            to="/"
            className="link-light"
            style={{
              padding: "10px",
              textDecoration: "none",
              color: "#A0BCC2"
            }}
          >
            Home
          </NavLink>
          {""}
        </li>
        <li>
          {""}
          <NavLink
            to="/Cargo"
            className="link-light"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#A0BCC2",
                    background: "#E8F9FD",
                    textDecoration: "none"
                  }
                : {
                    color: "#A0BCC2",
                    padding: "10px",
                    textDecoration: "none"
                  }
            }
          >
            Cargo
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink
            to="/noonPos"
            className="link-light"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#A0BCC2",
                    background: "#E8F9FD",
                    textDecoration: "none"
                  }
                : {
                    color: "#A0BCC2",
                    padding: "10px",
                    textDecoration: "none"
                  }
            }
          >
            Noon Postion 
          </NavLink>{" "}
        </li>
        <li>
          {" "}
         
        </li>
        <li>
          {" "}
          
        </li>
        <li style={{ marginLeft: "60px" }}>
          <NavLink to="Login">
            <button className="loginbtn">Login</button>
          </NavLink>
        </li>

        <li>
          <NavLink to="Sign-up">
            <button className="signUpbtn">Sign-Up</button>
          </NavLink>
        </li>
      </ul>
    </nav>
    <Outlet/>
    
      
  </div>
);
}
    

  