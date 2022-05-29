// import { setUserSession } from './Utils/Common';
import Axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';







 
function PostForm(props) {
    const navigate = useNavigate();
    
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
           navigate('/home'); 
                                            
       }).catch(function(error){
           if(error.response){
               console.log(error.response.data);
               console.log(error.response.status);
               console.log(error.response.headers);
           }
       })
       
       

    
   }
   function handle(e){
       const newdata = {...data}
       newdata[e.target.id]=e.target.value
       setData(newdata)
       console.log(newdata)


   }
   
   return(
       <div>
           <form  onSubmit={(e)=>submit(e)}>
               <input onChange={(e)=> handle(e)} id="email" value={data.email} placeholder="name" type="text"></input>
               <input onChange={(e)=> handle(e)} id="password" value={data.password} placeholder="name" type="text"></input>
               <button>submit</button>
           </form>
           
       </div>
   )
}

 
export default PostForm;