import React, { useState } from 'react';
import styled from 'styled-components';

const modal = () => {
  const [isModal, setIsModal] = useState(false);

  const openModal = (e) => {
    if (e.target.id !== 'Msg') {
      setIsModal(!isModal);
    }
  };

  return (
    <Container>
      <span>modal</span>
      <ModalBtn onClick={openModal}>Open Modal</ModalBtn>
      {isModal ? (
        <ModalBg onClick={openModal}>
          <ModalMsg id="Msg">
            <CloseModal onClick={openModal}>X</CloseModal>
            HELLO
          </ModalMsg>
        </ModalBg>
      ) : null}
    </Container>
  );
};

export default modal;

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

const ModalBtn = styled.div`
  padding: 5px 5px 8px 5px;
  margin: 10px;
  width: 130px;
  height: 20px;
  text-align: center;
  border: none;
  background-color: #97c1e7;
  border-radius: 40px;
  cursor: pointer;
  box-shadow: 1px 1px 5px rgba(128, 128, 128, 0.336);
  color: #fff;
`;

const ModalBg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalMsg = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 35%;
  left: calc(50% - 150px);
  width: 100%;
  max-width: 300px;
  height: 20%;
  border-radius: 10px;
  background-color: #fff;
  z-index: 100;
`;

const CloseModal = styled.span`
  font-size: 12px;
`;
