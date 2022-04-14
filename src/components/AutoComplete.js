import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const words = ['avengers', 'captain america', 'hulk', 'iron man'];

const autoComplete = () => {
  const [focus, setFocus] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [wordList, setWordList] = useState(words);
  const autoList = useRef(null);

  // submit 함수 words에 입력한 값을 추가 시켜주고
  // input box를 리셋 시켜줌
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputVal === '') {
      return;
    }
    words.push(inputVal);
    setInputVal('');
    setFocus(false);
    autoList.current.classList.remove('showList');
  };

  // useEffect를 이용해 inputVal이 변할 떄 마다
  // words에서 검색
  useEffect(() => {
    setWordList(
      words.filter((item) => {
        return item.includes(inputVal.toLowerCase());
      })
    );
  }, [inputVal]);

  // input box에 text를 넣고 list를 보여주는 함수
  const onChange = (event) => {
    setInputVal(event.target.value);
    if (focus === true) {
      return;
    }
    if (autoList.current.classList.contains('showList')) {
      autoList.current.classList.remove('showList');
    } else {
      autoList.current.classList.add('showList');

      setFocus(true);
    }
  };

  // li 클릭 시 input 값으로 넣어줌
  const selectWord = (event) => {
    setInputVal(event.target.innerText);
  };

  // li를 형성하는 함수
  const pushWord = wordList.map((item, index) => (
    <WordList className="word" id={index} onClick={selectWord}>
      {item}
    </WordList>
  ));

  // deletebtn 함수
  const deleteBtn = () => {
    setInputVal('');
    autoList.current.classList.remove('showList');
  };

  return (
    <Container className="Box">
      <span className="title">AutoComplete</span>
      <SearchContainer className="autoBox" onSubmit={onSubmit}>
        <SearchBox>
          <input
            className="searchBox"
            onChange={onChange}
            value={inputVal}
            type="text"
            placeholder="search anything"
          />
          {inputVal && (
            <DeleteBtn type="button" onClick={deleteBtn}>
              x
            </DeleteBtn>
          )}
        </SearchBox>
      </SearchContainer>
      {inputVal && pushWord.length >= 1 ? (
        <SearchList ref={autoList} className="word_list">
          {pushWord}
        </SearchList>
      ) : null}
    </Container>
  );
};

export default autoComplete;

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

const SearchContainer = styled.form`
  margin: 10px;
  max-height: 70%;
  padding: 10px 0;
  width: 90%;
  border-radius: 5px;
  box-shadow: 1px 1px 6px rgba(128, 128, 128, 0.4);
  overflow: overlay;
  ul {
    padding: 0;
    margin: 0 auto;
  }
`;

const SearchBox = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  input {
    width: 80%;
    outline: none;
    border: none;
  }
`;

const WordList = styled.li`
  list-style: none;
  width: 80%;
  padding: 0 10px;
`;

const DeleteBtn = styled.button`
  border: none;
  background-color: unset;
`;

const SearchList = styled.ul`
  margin: 10px;
  max-height: 70%;
  padding: 10px 0;
  position: absolute;
  width: 90%;
  border-radius: 5px;
  box-shadow: 1px 1px 6px rgba(128, 128, 128, 0.4);
  overflow: overlay;
  top: 280px;
`;
