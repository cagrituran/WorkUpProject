// import { setUserSession } from './Utils/Common';
import Axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

 
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
        //    console.log(res.data) 
           localStorage.setItem('User',JSON.stringify(res.data));   
           console.log(JSON.parse(localStorage.getItem('User')).id)
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
    <Container>
       <div className="my-login-page">
       <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        
      </Nav>
        <section className="h-100">
            <div className="container h-100">
                <div className="row justify-content-md-center h-100">
                    <div className="card-wrapper">
                        {/* <div className="brand">
                            <img src="/images/login-logo.svg" alt="logo"/>
                        </div> */}
                        <div className="card fat">
                            <div className="card-body">
                                <h4 className="card-title">Oturum Aç</h4>
                                <p className="card-title">Profesyonel dünyanızla ilgili güncel haberlere sahip olun</p>
                                <form  onSubmit={(e)=>submit(e)} className="my-login-validation" noValidate="">
                                        <div className="form-group">
                                            {/* <label htmlFor="email">E-posta Adresi</label> */}
                                            <input onChange={(e)=> handle(e)} id="email" placeholder="E posta Adresi" type="email" className="form-control" name="email" value={data.email} required autoFocus/>
                                            <div className="invalid-feedback">
                                                E-posta Zorunludur!!
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            {/* <label htmlFor="password">Şifre */}
                                                <a href="forgot.html" className="float-right">
                                                    Şifreni mi Unuttun?
                                                </a>
                                            {/* </label> */}
                                            <input onChange={(e)=> handle(e)}  placeholder="Şifre" id="password" type="password" className="form-control" name="password" value={data.password} required data-eye />
                                            <div className="invalid-feedback">
                                                Şifre Zorunludur!!
                                            </div>
                                        </div>
                                        <div className="form-group m-0">
                                            <button type="submit" className="btn btn-primary btn-block">
                                                Oturum Aç
                                            </button>
                                        </div>
                                        <div className="mt-4 text-center">
                                            Workup 'ta Yeni misiniz? <a href="register.html">Hemen Katılın!</a>
                                        </div>
                                </form>
                            </div>
                        </div>
                        <div className="footer">
						Copyright &copy; 2022 &mdash; Workup
					</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </Container>
   )
}

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
max-width: 1128px;
margin: auto;
padding: 12px 0 16px;
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
flex-wrap: nowrap;

& > a {
  width: 135px;
  height: 34px;
  @media (max-width: 768px) {
    padding: 0 5px;
  }
}
`;
export default PostForm;