import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import BasePage from './BasePage';
import BasePageLeftSide from './BasePageLeftSide';

export default function MyCompany(props) {
  return (
    <Container>
    <Section> 
      <Navigation mycompanyProps={props.companyProps}/>  
    </Section>
    <Layout>
      <BasePage mycompanyProps={props.companyProps}/>  
      <BasePageLeftSide/>   
    </Layout>
  </Container>
  )
}

const Container = styled.div`
  padding-top: 12px;
  max-width: 100%;
 
`;

const Section = styled.section`
border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  margin-top:59px;
  height: 80px;
  box-sizing: content-box;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  background-color:white;
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
  
  margin: 30px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;