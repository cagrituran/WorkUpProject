import React from 'react';
import styled from "styled-components";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BasePage(props) {
  const companyId=props.mycompanyProps.companyid;
    const [data2, setData] = useState([]);
    const [follow,setFollow] = useState(0)
    useEffect(() => {
        fetch(`https://localhost:7079/api/UserCompany/company/${companyId}`)
          .then((response) => response.json())
          .then((data2) => setData(data2));
    }, []);
    useEffect(() => {
      fetch(`https://localhost:7079/api/CompanyFollower/${companyId}`)
        .then((response) => response.json())
        .then((follow) => setFollow(follow));
        
  }, []);
  
  return (
     <ArtCard>
     <UserInfo>
      <CardBackground> 
        <img className='basepageimg' src={data2.companyImage}/>
      </CardBackground>
      
          <div className='basepagecompany'>
            <div className='basepagecompanyname'>
            {data2.companyName}
            </div>
            <div className='basepagecompanybutton'>
              <button className='buttondüzenle'>Sayfayı düzenleyin</button>
            </div>
            <div className='basepageslogan'>
            {data2.slogan}
            </div>
            <div className='basecompanysector'>
              {data2.sectorType} - İstanbul,Maslak { follow!==0 ? <a href="#"> {follow} takipçi</a> :null}
            </div>
          </div>
       
        
    </UserInfo>
    </ArtCard>
 
  )
}

const ArtCard = styled.div`
  margin-left:100px;
  margin-right:100px;
  width:185vh;
  height:300px;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  @media (max-width: 1115px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    width:150vh;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    width:100vh;
  }
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
  height:100%;
  width:100%;
`;
const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 185px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: url("/images/photo.svg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;
const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: black;
  margin-top: 19px;
  font-size: 20px;
  line-height: 1.33;
  font-weight: 400;
  float:left;
`;
