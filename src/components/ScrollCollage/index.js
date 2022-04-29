import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

import img00 from "../../images/collage/collage_00.jpg";
import img01 from "../../images/collage/collage_01.jpg";
import img02 from "../../images/collage/collage_02.jpg";
import img03 from "../../images/collage/collage_03.jpg";
import img04 from "../../images/collage/collage_04.jpg";
import img05 from "../../images/collage/collage_05.jpg";
import img06 from "../../images/collage/collage_06.jpg";
import img07 from "../../images/collage/collage_07.jpg";
import img08 from "../../images/collage/collage_08.jpg";

const ImageScroll = () => {
  const imgData = [
    img00,
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const length = imgData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <PageContainer>
        {imgData.map((image, index) => (
          <img
            src={image}
            alt="/"
            key={index}
            onClick={() => {
              setIsOpen(true);
              setCurrent(index);
            }}
          />
        ))}

        <Modal
          current={current}
          next={nextSlide}
          prev={prevSlide}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </PageContainer>
    </>
  );
};

export default ImageScroll;

const PageContainer = styled.section`
    /* background-color: var(--black-text); */
    min-width: 375px;
    border-right: 1px solid var(--black-text);
    overflow: scroll;
    /* padding-bottom: 3rem; */

    -ms-overflow-style: none;
    scrollbar-width: none;
    -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */

      ::-webkit-scrollbar {
        display: none;
    }

        @media screen and (max-width: 650px){
        display: flex;
        padding-bottom: 0;
        /* border-top: 1px solid var(--black-text); */
        border-right: none;
        height: 200px;

    }

    img{
        display: block;
        /* border-top: 1px solid var(--black-text); */
        width: 100%;
        height: auto;
        padding: .6187rem 1.6187rem;
        cursor: pointer;

        @media screen and (max-width: 650px){
            width: auto;
            height: 100%;

    }

`;
