import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

import img00 from "../../images/fall/sm_lg_fall_01.jpg";
import img01 from "../../images/fall/sm_lg_fall_02.jpg";
import img02 from "../../images/fall/sm_lg_fall_03.jpg";
import img03 from "../../images/fall/sm_lg_fall_04.jpg";
import img04 from "../../images/fall/sm_lg_fall_05.jpg";
import img06 from "../../images/fall/sm_lg_fall_07.jpg";
import img07 from "../../images/fall/sm_lg_fall_08.jpg";
import img08 from "../../images/fall/sm_lg_fall_09.jpg";
import img09 from "../../images/fall/sm_lg_fall_10.jpg";
import img10 from "../../images/fall/sm_lg_fall_11.jpg";
import img11 from "../../images/fall/sm_lg_fall_12.jpg";
import img12 from "../../images/fall/sm_lg_fall_13.jpg";
import img13 from "../../images/fall/sm_lg_fall_14.jpg";
import img14 from "../../images/fall/sm_lg_fall_15.jpg";
import img15 from "../../images/fall/sm_lg_fall_16.jpg";
import img16 from "../../images/fall/sm_lg_fall_17.jpg";
import img17 from "../../images/fall/sm_lg_fall_18.jpg";
import img19 from "../../images/fall/sm_lg_fall_20.jpg";
import img20 from "../../images/fall/sm_lg_fall_21.jpg";
import img21 from "../../images/fall/sm_lg_fall_22.jpg";
import img22 from "../../images/fall/sm_lg_fall_23.jpg";
import img23 from "../../images/fall/sm_lg_fall_26.jpg";
import img25 from "../../images/fall/sm_lg_fall_28.jpg";
import img26 from "../../images/fall/sm_lg_fall_29.jpg";
import img27 from "../../images/fall/sm_lg_fall_30.jpg";
import img28 from "../../images/fall/sm_lg_fall_31.jpg";

import img29 from "../../images/fall/sm_lg_fall_35.jpg";
import img30 from "../../images/fall/sm_lg_fall_36.jpg";
import img31 from "../../images/fall/sm_lg_fall_37.jpg";
import img32 from "../../images/fall/sm_lg_fall_39.jpg";

const ScrollFall = () => {
  const imgData = [
    img29,
    img00,
    img01,
    img03,
    img04,
    img06,
    img07,
    img02,
    img08,
    img09,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img19,
    img32,
    img20,
    img21,
    img22,
    img23,
    img25,
    img26,
    img27,
    img28,

    img31,
    img30,
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

export default ScrollFall;

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
