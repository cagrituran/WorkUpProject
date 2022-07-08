import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";

import MyCompany from "./components/MyCompany";

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from "./components/Form";
import MyNetwork from "./components/MyNetwork";
import Profile from "./components/Profile";
// // import React, { Component } from 'react';
// export default class App extends Component {


//   state={
//     // user:null,
//     companyid:-1,
//   }
//   // async componentDidMount(){
//   //   this.setState({
//   //     user:JSON.parse(localStorage.getItem('User'))
//   //   });
//   // }

//  changeCompanyPage=(com)=>{
//    console.log(com);
//    this.setState({companyid:com}) 
   
//    console.log(this.state.companyid);
// };
//   render() {
//     // console.log(JSON.parse(localStorage.getItem('User')));
//     console.log(this.state.companyid);
//     return (
//       <div className="App">
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Login/>}>
//           </Route>

//            <Route path="/loginuser" element={<UserLogin />}>

//           </Route>
//           <Route path="/registeruser" element={<UserRegister/>}>

//           </Route>
//           {/* <Route path="/home" element={JSON.parse(localStorage.getItem('User'))===null?<Navigate to="/loginuser"/> :<><Header/><Home/></>}>

//           </Route> */}

//           <Route path="/home" element={<><Header/><Home changePageProps={this.changeCompanyPage}/></>}>

//             </Route>
//           <Route path="/mycompany" element={<><Header/><MyCompany/></>}></Route>
//           {/* companyKnowledge={this.state.companyid} */}
//         </Routes> 
//       </Router>
//     </div>
//     )
//   }
// }

 function App() {
  const [company,setCompany]=useState({
    companyid:-1,
  });

 function changeCompanyPage(com){
   setCompany({companyid:com});
  };
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

        <Route path="/home" element={<><Header></Header><Home changePageProps={(com)=>changeCompanyPage(com)}/></>}>

        </Route>
        <Route path="/mycompany" element={<><Header/><MyCompany companyProps={company}/></>}></Route>
        <Route path="/profile" element={<><Header></Header><Profile/></>} ></Route>
        <Route path="/profile/:id" element={<><Header></Header><Profile/></>} ></Route>
          
        <Route path="/mynetwork" element={<><Header/><MyNetwork/></>} ></Route>
        <Route path="/deneme" element={<Form></Form>}></Route>
        
      </Routes> 
    </Router>
  </div>
  )
}
export default App;
