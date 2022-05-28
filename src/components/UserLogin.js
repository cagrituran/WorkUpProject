// import { setUserSession } from './Utils/Common';
import Axios from "axios";
import { createBrowserHistory } from "history";
import React, { useState } from 'react';

const history=createBrowserHistory();


 
function PostForm(props) {
   const url = "https://localhost:7079/api/User/login"
   const[data ,setData] = useState({
       email:"",
       password:""
   })
   function submit(e){
       e.preventDefault();
       Axios.post(url,{
           email:data.email,
           password:data.password
       }).then(res=>{
           console.log(res.data)
           
           
       })

    
   }
   function handle(e){
       const newdata = {...data}
       newdata[e.target.id]=e.target.value
       setData(newdata)
       console.log(newdata)


   }
   const handleLogout = () => {    
    
  }
   return(
       <div>
           <form onSubmit={(e)=>submit(e)}>
               <input onChange={(e)=> handle(e)} id="email" value={data.email} placeholder="name" type="text"></input>
               <input onChange={(e)=> handle(e)} id="password" value={data.password} placeholder="name" type="text"></input>
               <button onClick={handleLogout} >submit</button>
           </form>
       </div>
   )
}
 
export default PostForm;