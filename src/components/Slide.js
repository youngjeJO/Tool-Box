import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import Modal from './Modal';
import Tab from './Tab';
import Tag from './Tag';
import AutoComplete from './AutoComplete';
import InfinityScroll from './InfinityScroll';

const slide = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef(null);
  let timer;

  const slideChange = (targetIndex) => {
    const totalList = slideRef.current.childNodes;
    slideRef.current.style.transition = '500ms';
    setCurrentSlide(targetIndex);
    clearTimeout(timer);
    timer = setTimeout(() => {
      slideRef.current.style.transition = '0s';
      if (targetIndex < 1) {
        targetIndex = totalList.length - 2;
      } else if (targetIndex === totalList.length - 1) {
        targetIndex = 1;
      } else {
        return;
      }
      setCurrentSlide(targetIndex);
    }, [450]);
  };

  const nextSlide = (e) => {
    const targetIndex =
      e.target.id === 'prev' ? currentSlide - 1 : currentSlide + 1;
    slideChange(targetIndex);
  };

  return (
    <>
      <BoxContainer
        ref={slideRef}
        style={{ transform: `translateX(-${currentSlide}00%)` }}
      >
        <SlideBox className="items">
          <InfinityScroll />
        </SlideBox>
        <SlideBox className="items">
          <Toggle />
        </SlideBox>
        <SlideBox className="items">
          <Modal />
        </SlideBox>
        <SlideBox className="items">
          <Tab />
        </SlideBox>
        <SlideBox className="items">
          <Tag />
        </SlideBox>
        <SlideBox className="items">
          <AutoComplete />
        </SlideBox>
        <SlideBox className="items">
          <InfinityScroll />
        </SlideBox>
        <SlideBox className="items">
          <Toggle />
        </SlideBox>
      </BoxContainer>
      <BtnBox>
        <button type="button" id="prev" onClick={nextSlide}>
          &lt;
        </button>
        <button type="button" id="next" onClick={nextSlide}>
          &gt;
        </button>
      </BtnBox>
    </>
  );
};

export default slide;

const BoxContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
`;
const SlideBox = styled.div``;

const BtnBox = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    border: none;
    color: #97c1e7;
    background-color: unset;
    font-size: 48px;
  }
`;
