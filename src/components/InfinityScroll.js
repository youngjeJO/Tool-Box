import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import EmojiData from './img/EmojiMock';

const infinityScroll = () => {
  const [dataIndex, setDataIndex] = useState(1);
  const [getData, setGetData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const targetRef = useRef(null);

  useEffect(() => {
    const addData = EmojiData.filter((item) => {
      return item.id > (dataIndex - 1) * 10 && item.id <= dataIndex * 10;
    });
    setGetData(getData.concat(addData));
    setCurrentData(addData);
  }, [dataIndex]);

  const handleIntersect = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && target.intersectionRect.y > 100) {
      setDataIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <DataBox>
        {getData.map((item) => {
          return <StyledList>{item.emoji}</StyledList>;
        })}
      </DataBox>
      <LastBox
        currentData={currentData.length}
        getData={getData.length}
        ref={targetRef}
      >
        {}
      </LastBox>
    </Container>
  );
};
export default infinityScroll;

const Container = styled.div`
  height: 500px;
  width: 500px;
  margin: 0 auto;
  overflow: overlay;
`;

const DataBox = styled.ul`
  width: 90%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledList = styled.li`
  margin: 10px;
  max-height: 70%;
  padding: 10px 0;
  width: 50%;
  border-radius: 5px;
  box-shadow: 1px 1px 6px rgba(128, 128, 128, 0.4);
  list-style: none;
  text-align: center;
`;

const LastBox = styled.div`
  display: ${({ currentData, getData }) => {
    return currentData === 0 || getData === 0 ? 'none' : 'block';
  }};
  margin: 10px auto;
  max-height: 70%;
  padding: 10px 0;
  width: 50%;
  border: none;
  text-align: center;
  font-size: 24px;
  color: #97c1e7;
`;
