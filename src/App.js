// import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import MyNetwork from "./components/MyNetwork";

import { Component } from 'react';
import ProfileData from "./components/ProfileData";

export default class App extends Component {
  state={
    user:JSON.parse(localStorage.getItem('User'))
  }


  async componentDidMount(){
    this.setState({
      user:this.state.user,
    });
  }
  // Login=(e)=>{
  //   this.setState({
  //     user:e.target.value
  //   });
  //   console.log(e.target.value);
  // }
  render() {
    // console.log(this.state.user);
    return (
      <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}>
          </Route>
        
          <Route path="/loginuser" element={<UserLogin />}>
           
          </Route>
          <Route path="/registeruser" element={<UserRegister/>}>
          
          </Route>
          {/* <Route path="/home" element={JSON.parse(localStorage.getItem('User'))===null?<Navigate to="/loginuser"/> :<><Header/><Home/></>}>
            
          </Route> */}
          <Route path="/home" element={<><Header/><Home/></>}></Route>

          <Route path="/profile" element={<><Header/><ProfileData/></>} ></Route>
          
          <Route path="/mynetwork" element={<><Header/><MyNetwork/></>} ></Route>
          
        </Routes>
      </Router>
    </div>
    )
  }
}

// function App() {


//   return (
  
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Login/>}>
//           </Route>
        
//           <Route path="/loginuser" element={<UserLogin/>}>
           
//           </Route>
//           <Route path="/registeruser" element={<UserRegister/>}>
          
//           </Route>
//           <Route path="/home" element={JSON.parse(localStorage.getItem('User'))===null?<Navigate to="/loginuser"/> :<><Header/><Home/></>}>
            
//           </Route>
          
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
