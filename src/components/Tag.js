import React, { useState } from 'react';
import styled from 'styled-components';

const tag = () => {
  const [inputVal, setInputVal] = useState('');
  const [inputList, setInputList] = useState(['Hello', 'Hi']);

  // inputVal에 event.value를 넣어주는 함수
  const onChange = (event) => {
    setInputVal(event.target.value);
  };

  // inputVal 배열로 만들어주는 함수
  const onSubmit = (event) => {
    event.preventDefault();
    if (!inputVal.trim()) {
      return;
    }
    setInputVal('');
    setInputList((currentArray) => [...currentArray, inputVal]);
  };

  // delete Btn
  const deleteBtn = (event) => {
    const listId = event.target.parentNode.id;
    inputList.splice(listId, 1);
    const list = [...inputList];
    setInputList(list);
  };

  // tag 추가 함수
  const pushTag = inputList.map((item, index) => (
    <TagBox className="tag" id={index}>
      {item}
      <CloseBtn onClick={deleteBtn}>X</CloseBtn>
    </TagBox>
  ));

  return (
    <Container className="Box">
      <span className="title">Tag</span>
      <TagContainer onSubmit={onSubmit} className="tagBox">
        {pushTag}
        <input
          onChange={onChange}
          // onKeyUp={keyUpEvent}
          value={inputVal}
          placeholder="Press enter to add tags"
          type="text"
          className="inputBox"
        />
      </TagContainer>
    </Container>
  );
};

export default tag;

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

const TagContainer = styled.form`
  margin: 10px;
  max-height: 70%;
  padding: 10px 0;
  width: 90%;
  border-radius: 5px;
  box-shadow: 1px 1px 6px rgba(128, 128, 128, 0.4);
  overflow: overlay;
  input {
    outline: none;
    border: none;
    font-size: 12px;
  }
`;

const TagBox = styled.span`
  display: inline-block;
  max-height: 20px;
  height: 50%;
  margin: 5px;
  padding: 0 5px 5px 5px;
  background-color: #97c1e7;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(128, 128, 128, 0.336);
`;

const CloseBtn = styled.span`
  display: inline-block;
  padding: 0 3px;
  margin-left: 5px;
  color: white;
  font-size: 3px;
`;
