import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import Modal from './Modal';
import Cat3 from './img/고양이3.jpg';
import Cat4 from './img/고양이4.jpg';

const slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  // const totalList = slideRef.current.childNodes.length;

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    console.log(slideRef.current.childNodes);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide >= 4 - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide <= 0) {
      setCurrentSlide(4 - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <BoxContainer ref={slideRef}>
        <SlideBox className="items">
          <Toggle />
        </SlideBox>
        <SlideBox className="items">
          <Modal />
        </SlideBox>
        <SlideBox className="items">
          <img alt="고양이" src={Cat3} />
        </SlideBox>
        <SlideBox className="items">
          <img alt="고양이" src={Cat4} />
        </SlideBox>
      </BoxContainer>

      <button type="button" onClick={prevSlide}>
        prev
      </button>
      <button type="button" onClick={nextSlide}>
        next
      </button>
    </>
  );
};

export default slide;

const BoxContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
`;
const SlideBox = styled.div`
  img {
    height: 500px;
    width: 500px;
  }
`;
