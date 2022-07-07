// import Axios from "axios";
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';





//
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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

function UserRegister() {
    const navigate = useNavigate();
    const [emailCheck, setemailCheck] = useState(false)
   

    const url = "https://localhost:7079/api/User/register"
    const [data, setData] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        newpassword: ""
    })
    function submit(e) {
        e.preventDefault();
        if(data.password===data.newpassword){
        Axios.post(url, {
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
            newpassword: data.newpassword

        }).then(res => {
            console.log(res.data)
            
            navigate('/loginuser');

        }).catch(function (error) {
            if (error.response) {
                setemailCheck(true)
                console.log(data.name.length)
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        })
    }
    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)


    }
    return (
        <Container>
            <div className="my-login-page">
                <Nav>
                    <a href="/">
                        <img src="/images/upimg2.jpg"  style={{width:100,height:100}} alt="" />
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
                                        <h4 className="card-title">Kayıt Ol</h4>
                                        <p className="card-title">Workup Dünyasına Hoşgeldin</p>
                                        <form onSubmit={(e) => submit(e)} className="my-login-validation" noValidate="">
                                            <div className="form-group">
                                                <label className="text-left" htmlFor="name">İsim</label>
                                                <input onChange={(e) => handle(e)} id="name" placeholder="İsim" type="name" className="form-control" name="name" value={data.name} required autoFocus pattern="[A-Za-z0çÇĞğÜİŞşÖöüı]+" title="Boşluk içeremez!"/>
                                                <div className="invalid-feedback">
                                                    İsim Girmek Zorunludur!
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="text-left" htmlFor="lastname">Soyisim</label>
                                                <input onChange={(e) => handle(e)} id="lastname" placeholder="Soyisim" type="lastname" className="form-control" name="lastname" value={data.lastname} required pattern="[A-Za-z0çÇĞğÜİŞşÖöüı]+" title="Boşluk içeremez!"/>
                                                <div className="invalid-feedback">
                                                    Soyisim Girmek Zorunludur!
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="text-left" htmlFor="email">Email</label>
                                                <input onChange={(e) => handle(e)} id="email" placeholder="E posta Adresi" type="email" className="form-control" name="email" value={data.email} required />
                                                <div className="invalid-feedback">
                                                    E-posta Zorunludur!!
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                {/* <label htmlFor="password">Şifre */}
                                                
                                                {/* </label> */}
                                                <label className="text-left" htmlFor="password">Şifre</label>
                                                <input onChange={(e) => handle(e)} placeholder="Şifre" id="password" type="password" className="form-control" name="password" value={data.password} required data-eye pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" title="En az bir büyük harf,bir küçük harf ve bir rakam içermelidir."/>
                                                <div className="invalid-feedback">
                                                    Şifre Zorunludur!!
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                {/* <label htmlFor="password">Şifre */}
                                                
                                                {/* </label> */}
                                                <label className="text-left" htmlFor="newpassword">Tekrar Şifre</label>
                                                <input onChange={(e) => handle(e)} placeholder="Tekrar Şifre" id="newpassword" type="password" className="form-control" name="newpassword" value={data.newpassword} required data-eye pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" title="En az bir büyük harf,bir küçük harf ve bir rakam içermelidir."/>
                                                <div className="invalid-feedback">
                                                   Tekrar Şifre Zorunludur!!
                                                </div>
                                            </div>
                                            {data.password!==data.newpassword && <p className="text-danger">Şifreler birbiriyle uyumlu değil!</p>}
                                            <div className="form-group m-0">
                                                <button type="submit" className="btn btn-primary btn-block">
                                                    Kayıt Ol
                                                </button>
                                            </div>
                                           
                                        </form>
                                    </div>
                                </div>
                                {
                                    emailCheck && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    <strong>Kayıt İşlemi Başarısız!</strong> Bu email zaten kullanılıyor.
                                    <button onClick={(evt)=>setemailCheck(false)} type="button" className="btn-close" aria-label="Close"></button>
                                  </div>
                                }
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


export default UserRegister;

