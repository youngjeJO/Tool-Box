import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Slide from '../components/Slide';

const main = () => {
  return (
    <Maincontainer>
      <Header />
      <Slide />
    </Maincontainer>
  );
};

export default main;

const Maincontainer = styled.div`
  width: 500px;
  margin: auto;
  height: 1000px;
  overflow: hidden;
`;
