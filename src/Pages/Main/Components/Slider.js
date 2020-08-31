import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { font, theme } from "../../../Styles/GlobalStyles";

const slideImg = [
  "/Images/main_images/main_gallery1.png",
  "/Images/main_images/main_gallery2.png",
  "/Images/main_images/main_gallery3.png",
  "/Images/main_images/main_gallery4.png",
  "/Images/main_images/main_gallery5.png",
  "/Images/main_images/main_gallery6.png",
  "/Images/main_images/main_gallery7.webp",
  "/Images/main_images/main_gallery8.webp",
];

const TOTAL_SLIDES = 5;

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    const moveIdx = currentSlide ? currentSlide - 1 : slideImg.length - 1;
    setCurrentSlide(moveIdx);
  };

  useEffect(() => {
    if (currentSlide >= TOTAL_SLIDES) {
      let rightSlide = slideRef.current.children[
        currentSlide - TOTAL_SLIDES
      ].cloneNode(true);
      slideRef.current.append(rightSlide);
    } else if (currentSlide < 1) {
      let leftSlide = slideRef.current.children[
        currentSlide + TOTAL_SLIDES + 2
      ].cloneNode(true);
      slideRef.current.insertBefore(leftSlide, slideRef.current.childNodes[0]);
    }
  }, [currentSlide]);

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-out";
    slideRef.current.style.transform = `translateX(-${currentSlide * 708}px)`;
  }, [currentSlide]);

  return (
    <Container>
      <ClickAreaLeft onClick={prevSlide} />
      <ClickAreaRight onClick={nextSlide} />
      <SliderContainer ref={slideRef}>
        {slideImg.map((url, idx) => (
          <SlideDiv key={idx}>
            <SlideImg src={url} />
          </SlideDiv>
        ))}
      </SliderContainer>
    </Container>
  );
}

const ClickAreaLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  z-index: 50;
`;

const ClickAreaRight = styled.div`
  position: absolute;
  top: 0;
  left: 70%;
  width: 30%;
  height: 100%;
  z-index: 50;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 708px;
  padding-top: 100px 0;
  overflow: hidden;
`;

const SliderContainer = styled.div`
  display: flex;
  position: relative;
`;

const SlideDiv = styled.div`
  position: relative;
  min-width: 708px;
`;

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
`;

export default Slider;
