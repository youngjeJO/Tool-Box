import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const main = () => {
  return (
    <Maincontainer>
      <Header />
    </Maincontainer>
  );
};

export default main;

const Maincontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
