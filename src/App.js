import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import UserLogin from "./components/UserLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}>
            
          </Route>
          <Route path="/loginuser" element={<UserLogin />}>
            
          </Route>
          
          
          <Route path="/home" element={<><Header/><Home/></>}>
            
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
