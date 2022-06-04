import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";


import React, { Component } from 'react'


export default class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}>
            
          </Route>
          <Route path="/loginuser" element={<UserLogin/>}>
            
          </Route>
          <Route path="/registeruser" element={<UserRegister/>}>
            
          </Route>
          
          
          <Route path="/home" element={<><Header/><Home/></>}>
            
          </Route>
          
        </Routes>
      </Router>
    </div>
    )
  }
}


