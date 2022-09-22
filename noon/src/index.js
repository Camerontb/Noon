import React from "react";
import ReactDom from 'react-dom'
import {Outlet, Navlink} from "react-router-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Main from './Main'


ReactDom.render(<Main/>,document.getElementById('root'));
