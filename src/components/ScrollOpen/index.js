import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

import img00 from "../../images/openning/sm_00.jpg";
import img01 from "../../images/openning/sm_01.jpg";
import img02 from "../../images/openning/sm_02.jpg";
import img03 from "../../images/openning/sm_03.jpg";
import img04 from "../../images/openning/sm_04.jpg";
import img05 from "../../images/openning/sm_05.jpg";
import img06 from "../../images/openning/sm_06.jpg";
import img07 from "../../images/openning/sm_07.jpg";
import img08 from "../../images/openning/sm_08.jpg";
import img09 from "../../images/openning/sm_09.jpg";
import img10 from "../../images/openning/sm_10.jpg";
import img11 from "../../images/openning/sm_11.jpg";
import img12 from "../../images/openning/sm_12.jpg";
import img13 from "../../images/openning/sm_13.jpg";
import img14 from "../../images/openning/sm_14.jpg";
import img15 from "../../images/openning/sm_15.jpg";
import img17 from "../../images/openning/sm_17.jpg";
import img18 from "../../images/openning/sm_18.jpg";
import img19 from "../../images/openning/sm_19.jpg";
import img20 from "../../images/openning/sm_20.jpg";
import img21 from "../../images/openning/sm_21.jpg";
import img22 from "../../images/openning/sm_22.jpg";
import img23 from "../../images/openning/sm_23.jpg";

const ImageScroll = () => {
  const imgData = [
    img00,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img01,
    img23,
    img08,
    img09,
    img10,
    img11,
    img22,
    img12,
    img13,
    img14,
    img15,
    img21,
    img17,
    img18,
    img19,
    img20,
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
        border-top: 1px solid var(--black-text);
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
