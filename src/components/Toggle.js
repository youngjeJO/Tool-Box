import React, { useState } from 'react';
import styled from 'styled-components';

function Toggle() {
  const [onOff, setOnOff] = useState('off');

  const toggleEvent = () => {
    if (onOff === 'off') {
      setOnOff('on');
    } else {
      setOnOff('off');
    }
  };

  return (
    <Container className="Box">
      <span>toggle</span>
      <ButtonBox onOff={onOff}>
        <ButtonStyle type="button" onClick={toggleEvent}>
          {}
        </ButtonStyle>
      </ButtonBox>
      toggle swich {onOff}
    </Container>
  );
}

export default Toggle;

const Container = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

const ButtonBox = styled.div`
  height: 30px;
  width: 80px;
  margin: 10px;
  border-radius: 40px;
  border: 1px solid black;
  position: relative;
  overflow: hidden;
  ::before {
    display: inline;
    position: absolute;
    content: '';
    height: 40px;
    width: 100px;
    background-color: #97c1e7;
  }
  ::after {
    display: inline;
    position: absolute;
    content: '';
    border-radius: 100%;
    height: 25px;
    width: 25px;
    top: 2px;
    left: 5px;
    background-color: #ffffff;
    transition: all 0.5s ease-out;
    transform: translateX(
      ${({ onOff }) => {
        return onOff === 'on' ? '190%' : '0%';
      }}
    );
  }
`;

const ButtonStyle = styled.button`
  position: absolute;
  border: none;
  height: 40px;
  width: 80px;
  top: 0;
  opacity: 0;
  z-index: 2;
`;
