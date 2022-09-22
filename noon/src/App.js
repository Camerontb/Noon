import React from 'react'
import "./styles.css";

import { Outlet, NavLink } from "react-router-dom";


// import './App.css';


export default function App(){
  return(
    <div className="App">
    <nav style={{ backgroundColor: "#F2F2F2", padding: "15px" }}>
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
            to="/FAOP"
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
            FAOP
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink
            to="/Contact"
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
            Contact
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink
            to="/Help"
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
            Help
          </NavLink>{" "}
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
    

  