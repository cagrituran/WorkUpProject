/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import React, { Component } from 'react';
import axios from "axios";
import SearchBar from "./SearchBar";
import { isVisible } from "@testing-library/user-event/dist/utils";
export default class Header extends Component {
  state={
    usersandcompanies:[],
    search:""
  }

  async componentDidMount(){
    const response=await axios.get(`https://localhost:7079/api/Home`);
    console.log(response.data);
    this.setState({usersandcompanies:response.data})
  };
  searchUserandCompany=(event)=>{
    console.log(event.target.value);
    this.setState({search:event.target.value});
  };
  render() {
    let filteredUsersandCompanies=this.state.usersandcompanies.filter((usercompany)=>{
      return usercompany.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1; //search farklı eşit -1 ise
    });
   
    console.log(filteredUsersandCompanies);
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
                <img src="/images/user.svg" alt="" />
                <span>Ben</span>
                <img src="/images/down-icon.svg" alt="" />
              </a>

              <SignOut>
                <a>Çıkış</a>
              </SignOut>
            </User>

            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  İş
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
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
  top: 95px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
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


