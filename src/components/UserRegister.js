import Axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



    


function UserRegister() {
    const navigate = useNavigate();
    
    const url = "https://localhost:7079/api/User/register"
    const[data ,setData] = useState({
        name:"",
        lastname:"",      
        email:"",
        password:"",
        newpassword:""
    })
    function submit(e){
         e.preventDefault();
        Axios.post(url,{
            name:data.name,
            lastname:data.lastname,
            email:data.email,
            password:data.password,
            newpassword:data.newpassword

        }).then(res=>{
            console.log(res.data)    
            navigate('/loginuser'); 
                                             
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
  return (
    <div>
    <form  onSubmit={(e)=>submit(e)}>
        <input onChange={(e)=> handle(e)} id="name" value={data.name} placeholder="Enter your name here..." type="text"></input>
        <br></br>
        <input onChange={(e)=> handle(e)} id="lastname" value={data.lastname} placeholder="Enter your lastname here..." type="text"></input>
        <br></br>
        <input onChange={(e)=> handle(e)} id="email" value={data.email} placeholder="Enter your email here..." type="text"></input>
        <br></br>
        <input onChange={(e)=> handle(e)} id="password" value={data.password} placeholder="Enter your password here..." type="text"></input>
        <br></br>
        <input onChange={(e)=> handle(e)} id="newpassword" value={data.newpassword} placeholder="Enter your re-password here..." type="text"></input>
        <br></br>
        <button>submit</button>
    </form>
    
</div>
  )
}

export default UserRegister;

