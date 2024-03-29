import styled from "styled-components";
import MyNetworkLeft from "./my-network/my-network-left";
import MyNetworkRight from "./my-network/my-network-right";
// import Rightside from "./Rightside";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MyNetwork = (props) => {
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
        <MyNetworkLeft />
        <MyNetworkRight />
        {/* <Rightside /> */}
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

export default MyNetwork;
