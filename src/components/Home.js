import { useEffect, useState } from "react";
import styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";


const Home = (props) => {
const [usercompany,setUsercompany]=useState([]);
useEffect(()=>{
  fetch(`https://localhost:7079/api/UserCompany?uid=${JSON.parse(localStorage.getItem('User')).id}`)
  .then((response) => response.json())
  .then((usercompany) => setUsercompany(usercompany));
},[]);
//   const [user,setUser]=useState([]);

// useEffect(() => {
//   const user = JSON.parse(localStorage.getItem('User'));
//   console.log(user);
//   if (user) {
//    setUser(user);
//   }
 
  // }, []);
  // if(props.user===null){
  //   return  <Navigate to="/loginuser" replace />;
  // }
  // console.log(props.user)
  // if(props.user===null){
  //  return  <Navigate to="/loginuser" replace />
  // }
 
  return (
    <Container>
      <Section>
        
        {/* <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p> */}
      </Section>
      <Layout>
        
 
        <Leftside usercompany={usercompany} comPageChangeProps={props.changePageProps}/>
        <Main />
        <Rightside />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 12px;
  max-width: 100%;
`;

// const Content = styled.div`
//   max-width: 1128px;
//   margin-left: auto;
//   margin-right: auto;
// `;

const Section = styled.section`
  min-height: 10px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

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

export default Home;



