/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
 import React, { Component} from 'react';
import styled from "styled-components";
import SearchBar from "./SearchBar";
import HeaderUser from "./HeaderUser";

export default class Header extends Component {
  
  state={
    usersandcompanies:[],
    search:"",
    image:JSON.parse(localStorage.getItem('User')).profileImage,
    name:JSON.parse(localStorage.getItem('User')).name,
    lastname:JSON.parse(localStorage.getItem('User')).lastName,
    experience:[],
  }

  // const response2=await fetch(`https://localhost:7079/api/UserExperience/${JSON.parse(localStorage.getItem('User')).id}/user`);
  // console.log(response2);
  // const data=await response2.json();
  // console.log(data);
  // this.setState({experience:data});
  
  async componentDidMount(){
    const response=await axios.get(`https://localhost:7079/api/Home`);
    console.log(response.data);
    this.setState({usersandcompanies:response.data})
    const response2 =await axios.get(
      `https://localhost:7079/api/UserExperience/user/${JSON.parse(localStorage.getItem('User')).id}`
    );
    console.log(response2.data);
    this.setState({ experience: response2.data});
  };
  searchUserandCompany=(event)=>{
    console.log(event.target.value);
    this.setState({search:event.target.value});
  };
  render() {
    let filteredUsersandCompanies=this.state.usersandcompanies.filter((usercompany)=>{
      return usercompany.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1; //search farklı eşit -1 ise
    });
    // console.log(filteredUsersandCompanies);
    return (

      <Container>
      
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>

        <SearchBar searchUserCompanyProp={this.searchUserandCompany} usersandcompanies={filteredUsersandCompanies}/>

        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src="/images/nav-home.svg" alt="" />
                <span>Anasayfa</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="" />
                <span>Ağım</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>İş İlanları</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Mesajlaşma</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Bildirimler</span>
              </a>
            </NavList>

            <User>

              <a>
                <img src={this.state.image} alt="" />
                <span>Ben</span>
                <img src="/images/down-icon.svg" alt="" />
              </a>

              <SignOut>
              {
                 this.state.experience.slice(-1).map((e)=>{
                   console.log(e);
                  return(
                  <div key={e.id}>
                    <HeaderUser experience={e.profileTitle} image={this.state.image} name={this.state.name} lastname={this.state.lastname} />  
                    </div>         
                  )
                })
              }
                  
              </SignOut>
            </User>

            {/* <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  İş
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work> */}
          </NavListWrap>
        </Nav>
      </Content>

    </Container>

    )
  }
}



const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  height:70px;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
  margin-top: 10px ;
`;
// min-height: 100%;
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;


const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 80px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 300px;
  height: 240px;
  font-size: 16px;
  transition-duration: 167ms;
  
  display: none;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  right:0px;
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;




