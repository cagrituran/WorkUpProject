// import Axios from "axios";
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';



    


// function UserRegister() {
//     const navigate = useNavigate();
    
//     const url = "https://localhost:7079/api/User/register"
//     const[data ,setData] = useState({
//         name:"",
//         lastname:"",      
//         email:"",
//         password:"",
//         newpassword:""
//     })
//     function submit(e){
//          e.preventDefault();
//         Axios.post(url,{
//             name:data.name,
//             lastname:data.lastname,
//             email:data.email,
//             password:data.password,
//             newpassword:data.newpassword

//         }).then(res=>{
//             console.log(res.data)    
//             navigate('/loginuser'); 
                                             
//         }).catch(function(error){
//             if(error.response){
//                 console.log(error.response.data);
//                 console.log(error.response.status);
//                 console.log(error.response.headers);
//             }
//         })
        
        
 
     
//     }
//     function handle(e){
//         const newdata = {...data}
//         newdata[e.target.id]=e.target.value
//         setData(newdata)
//         console.log(newdata)
 
 
//     }
//   return (
//     <div>
//     <form  onSubmit={(e)=>submit(e)}>
//         <input onChange={(e)=> handle(e)} id="name" value={data.name} placeholder="Enter your name here..." type="text"></input>
//         <br></br>
//         <input onChange={(e)=> handle(e)} id="lastname" value={data.lastname} placeholder="Enter your lastname here..." type="text"></input>
//         <br></br>
//         <input onChange={(e)=> handle(e)} id="email" value={data.email} placeholder="Enter your email here..." type="text"></input>
//         <br></br>
//         <input onChange={(e)=> handle(e)} id="password" value={data.password} placeholder="Enter your password here..." type="text"></input>
//         <br></br>
//         <input onChange={(e)=> handle(e)} id="newpassword" value={data.newpassword} placeholder="Enter your re-password here..." type="text"></input>
//         <br></br>
//         <button>submit</button>
//     </form>
    
// </div>
//   )
// }

// export default UserRegister;

import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <section className="h-100">
    <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                <div className="text-center my-5">
                    <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width="100"></img>
                </div>
                <div className="card shadow-lg">
                    <div className="card-body p-5 ">
                        <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                        {/* <form method="POST" class="needs-validation" novalidate="" autocomplete="off"> */}
                        <form  onSubmit={(e)=>submit(e)} className="my-login-validation" noValidate="">
                            <div className="mb-3">
                                <label className="mb-1 text-body " htmlFor="name">Name</label>
                                <br></br>
                                <input onChange={(e)=> handle(e)} id="name" value={data.name} placeholder="Enter your name here..." type="text"></input>
                                <div className="invalid-feedback">
                                    Name is required	
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="mb-1 text-body" htmlFor="name">LastName</label>
                                <br></br>
                                <input onChange={(e)=> handle(e)} id="lastname" value={data.lastname} placeholder="Enter your lastname here..." type="text"></input>
                                <div className="invalid-feedback">
                                    Name is required	
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="mb-1 text-body " htmlFor="email">E-Mail Address</label>
                                <br></br>
                                <input onChange={(e)=> handle(e)} id="email" value={data.email} placeholder="Enter your email here..." type="text"></input>
                                <div className="invalid-feedback">
                                    Email is invalid
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="mb-1 text-body " htmlFor="password">Password</label>
                                <br></br>
                                <input onChange={(e)=> handle(e)} id="password" value={data.password} placeholder="Enter your password here..." type="text"></input>
                                <div className="invalid-feedback">
                                    Password is required
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="mb-1 text-body" htmlFor="password">NewPassword</label>
                                <br></br>
                                <input onChange={(e)=> handle(e)} id="newpassword" value={data.newpassword} placeholder="Enter your re-password here..." type="text"></input>
                                <div className="invalid-feedback">
                                    Password is required
                                </div>
                            </div>

                            <p className="form-text text-muted mb-3">
                                By registering you agree with our terms and condition.
                            </p>

                            <div className="align-items-center d-flex">
                                <button type="submit" className="btn btn-primary ms-auto">
                                Submit
                                </button>
                            </div>
                            <br></br>
                            <div className="card-footer py-3 border-0">
                        <div className="text-center">
                            Already have an account? <a href="index.html" className="text-dark">Login</a>
                        </div>
                    </div> 
                        </form>
                    </div>
                    {/* <div class="card-footer py-3 border-0">
                        <div class="text-center">
                            Already have an account? <a href="index.html" class="text-dark">Login</a>
                        </div>
                    </div> */}
                    
                </div>
                {/* <div class="text-center mt-5 text-muted">
                    Copyright &copy; 2017-2021 &mdash; Your Company 
                </div> */}
            </div>
        </div>
    </div>
</section>
  )
}



export default UserRegister;

