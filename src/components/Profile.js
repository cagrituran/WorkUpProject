// import { useEffect, useState } from "react";
import axios from "axios";
import { Component } from 'react';
import styled from 'styled-components';

export default class Profile extends Component {
    state = {
        id:0,
        name: "",
        lastName:"",
        email:"",
        password:"",
        newPassword:"",
        profileImage:"",
        backgroundImage:"",
        country:"",
        city:"",
        phone:"",
        profileURL:"",
        explanation:"",
        webURL:"",
        userEducations:[],
        userExperiences: [],
        userCompanies:[],
        userTalents:[],
        userLanguages:[],
        userLicences:[],
    
      }
      async componentDidMount() {
        const response = await axios.get(`https://localhost:7079/api/User/${JSON.parse(localStorage.getItem('User')).id}`);
        console.log(response.data.userExperiences)
        this.setState(
          {id:response.data.id,
           name: response.data.name,
           lastName:response.data.lastName,
           email:response.data.email,
           profileImage:response.data.profileImage,
           country:response.data.country,
           city:response.data.city,
           explanation:response.data.explanation,
           webURL:response.data.webURL,
           userExperiences:response.data.userExperiences,
           userEducations:response.data.userEducations,
           userTalents:response.data.userTalents,
           userLanguages:response.data.userLanguages,
           userLicences:response.data.userLicences
    
          })}
  render() {
    return (
        <div style={{ backgroundColor: 'purple' }}>

        <div className="container rounded bg-white mt-5">
            <div className="row">
                <div className="col-md-2 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img className="rounded-circle mt-5" width="100px" src={this.state.profileImage} alt="" />
                        <span className="font-weight-bold">{this.state.name} {this.state.lastName} </span>

                        {/* <span className="text-black-50">{props.experience}</span>  */}
                        <span className="text-black-50">{this.state.webURL}</span>
                        {
                            this.state.userExperiences.length!==0?
                            this.state.userExperiences.slice(-1).map((e)=>{
                                return(
                                    <div key={e.id}>
                                        <span className="text-black-50">{e.profileTitle}</span>

                                    </div>
                                )
                            })
                            :
                            <div></div>



                        }
                        <span className="text-black-50">{this.state.city}/{this.state.country}</span>
                        

                        <span> </span>
                        <span className='font-weight-bold'><span className="font-weight-bold" style={{ color: 'blue' }}>429 </span>Bağlantı</span>
                    </div>
                </div>
                <div className="col-md-5 border-right">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h4 class="text-right">Hakkında</h4>

                        </div>
                        <div class="col-md-12 " style={{ textAlign: "justify", overflow: "auto", border: "2px solid", borderRadius: "10px" }}>{this.state.explanation}</div>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <h4 class="text-right">Eğitim Bilgileri</h4>

                        </div>
                        {
                            this.state.userEducations.length!==0?
                            this.state.userEducations.map((e)=>{
                                return(
                                    <div key={e.id}>
                                        <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid blue", borderRadius: "10px" }}>{e.schoolName}<div className='float-right'>11.2001-12-2001</div></div>

                                    </div>
                                )
                            })
                            :
                            <div></div>


                        }
                        
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <h4 class="text-right">Yabancı Diller</h4>

                        </div>
                        {
                            this.state.userLanguages.length!==0?
                            this.state.userLanguages.map((e)=>{
                                return(
                                    <div key={e.id}>
                                         <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid red", borderRadius: "10px" }}>{e.languageName}<div className='float-right'>11.2001-12-2001</div></div>

                                    </div>
                                )
                            })
                            :
                            <div></div>


                        }
                        
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <h4 class="text-right">Yetenekler</h4>

                        </div>
                        {
                            this.state.userTalents.length!==0?
                            this.state.userTalents.map((e)=>{
                                return(
                                    <div key={e.id}>
                                          <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid green", borderRadius: "10px" }}>{e.yetenekAdi}<div className='float-right'>11.2001-12-2001</div></div>

                                    </div>
                                )
                            })
                            :
                            <div></div>


                        }

                       


                    </div>
                </div>
                <div class="col-md-5">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <h4 class="text-right">Sertifika / Lisanslar</h4>

                        </div>
                        {
                            this.state.userLicences.length!==0?
                            this.state.userLicences.map((e)=>{
                                return(
                                    <div key={e.id}>
                                         <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid green", borderRadius: "10px" }}>{e.title}<div className='float-right'>11.2001-12-2001</div></div>

                                    </div>
                                )
                            })
                            :
                            <div></div>


                        }

                        

                      

                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <h4 class="text-right">Tecrübeler</h4>

                        </div>
                        {
                            this.state.userExperiences.length!==0?
                            this.state.userExperiences.map((e)=>{
                                return(
                                    <div key={e.id}>
                                          <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid black", borderRadius: "10px" }}>{e.profileTitle}<div className='float-right'>İstanbul Eğitim Akademi/11.2001-12-2001</div></div>

                                    </div>
                                )
                            })
                            :
                            <div></div>


                        }


                        

                    </div>
                </div>
            </div>

        </div>
    </div>
    )
  }
}

// const Profile = (props) => {
  
//     return (

//         <div style={{ backgroundColor: 'purple' }}>

//             <div className="container rounded bg-white mt-5">
//                 <div className="row">
//                     <div className="col-md-2 border-right">
//                         <div className="d-flex flex-column align-items-center text-center p-3 py-5">
//                             <img className="rounded-circle mt-5" width="100px" src={props.profileImage} alt="" />
//                             <span className="font-weight-bold">{props.name} {props.lastName} </span>

//                             <span className="text-black-50">{props.experience}</span> 
//                             <span className="text-black-50">www.cagrituran.com</span>
//                             <span className="text-black-50">asddsa</span>
                            

//                             <span> </span>
//                             <span className='font-weight-bold'><span className="font-weight-bold" style={{ color: 'blue' }}>429 </span>Bağlantı</span>
//                         </div>
//                     </div>
//                     <div className="col-md-5 border-right">
//                         <div class="p-3 py-5">
//                             <div class="d-flex justify-content-between align-items-center mb-2">
//                                 <h4 class="text-right">Hakkında</h4>

//                             </div>
//                             <div class="col-md-12 " style={{ textAlign: "justify", overflow: "auto", border: "2px solid", borderRadius: "10px" }}>{props.explanation}</div>
//                             <div class="d-flex justify-content-between align-items-center mt-3">
//                                 <h4 class="text-right">Eğitim Bilgileri</h4>

//                             </div>
//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid blue", borderRadius: "10px" }}>Okul 1<div className='float-right'>11.2001-12-2001</div></div>
//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid blue", borderRadius: "10px" }}>Okul 2<div className='float-right'>11.2001-12-2001</div></div>

//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid blue", borderRadius: "10px" }}>Okul 3<div className='float-right'>11.2001-12-2001</div></div>

//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid blue", borderRadius: "10px" }}>Okul 4<div className='float-right'>11.2001-12-2001</div></div>
//                             <div class="d-flex justify-content-between align-items-center mt-3">
//                                 <h4 class="text-right">Yabancı Diller</h4>

//                             </div>
//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid red", borderRadius: "10px" }}>İngilazca<div className='float-right'>11.2001-12-2001</div></div>
//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid red", borderRadius: "10px" }}>Firansizca<div className='float-right'>11.2001-12-2001</div></div>
//                             <div class="d-flex justify-content-between align-items-center mt-3">
//                                 <h4 class="text-right">Yetenekler</h4>

//                             </div>

//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid green", borderRadius: "10px" }}>C<div className='float-right'>11.2001-12-2001</div></div>
//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid green", borderRadius: "10px" }}>C#<div className='float-right'>11.2001-12-2001</div></div>



//                         </div>
//                     </div>
//                     <div class="col-md-5">
//                         <div class="p-3 py-5">
//                             <div class="d-flex justify-content-between align-items-center mt-3">
//                                 <h4 class="text-right">Sertifika / Lisanslar</h4>

//                             </div>
                            

//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid green", borderRadius: "10px" }}>Fordçu<div className='float-right'>11.2001-12-2001</div></div>
//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid green", borderRadius: "10px" }}>Yancı<div className='float-right'>11.2001-12-2001</div></div>
//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid green", borderRadius: "10px" }}>Kesici<div className='float-right'>11.2001-12-2001</div></div>
//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid green", borderRadius: "10px" }}>Ateşçi<div className='float-right'>11.2001-12-2001</div></div>

//                             <div class="d-flex justify-content-between align-items-center mt-3">
//                                 <h4 class="text-right">Tecrübeler</h4>

//                             </div>

//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid black", borderRadius: "10px" }}>Hırsız<div className='float-right'>İstanbul Eğitim Akademi/11.2001-12-2001</div></div>
//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid black", borderRadius: "10px" }}>Kapkaççı<div className='float-right'>İstanbul Kapkaç İşletmesi/11.2001-12-2001</div></div>
//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid black", borderRadius: "10px" }}>Kapkaççı<div className='float-right'>İstanbul Kapkaç İşletmesi/11.2001-12-2001</div></div>
//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid black", borderRadius: "10px" }}>Kapkaççı<div className='float-right'>İstanbul Kapkaç İşletmesi/11.2001-12-2001</div></div>
//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid black", borderRadius: "10px" }}>Kapkaççı<div className='float-right'>İstanbul Kapkaç İşletmesi/11.2001-12-2001</div></div>
//                             <div class="col-md-12 font-weight-bold mt-3" style={{ textAlign: "justify", overflow: "auto", border: "2px solid black", borderRadius: "10px" }}>Kapkaççı<div className='float-right'>İstanbul Kapkaç İşletmesi/11.2001-12-2001</div></div>

//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )


// }
// export default Profile;

const BButon = styled.button`
padding: 10px 20px;
border: none;
border-radius: 4px;
background-color: #1890ff;
color: #fff;
font-size: 14px;
cursor: pointer;
transition: .3s background;
&:hover {
  background: #40a9ff;
}
`;
const Body = styled.body`background: rgb(99, 39, 120)`;
const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 10px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 55px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

