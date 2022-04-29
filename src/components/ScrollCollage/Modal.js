import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { VscClose, VscArrowLeft, VscArrowRight } from "react-icons/vsc";

import img00 from "../../images/collage/collage_00.jpg";
import img01 from "../../images/collage/collage_01.jpg";
import img02 from "../../images/collage/collage_02.jpg";
import img03 from "../../images/collage/collage_03.jpg";
import img04 from "../../images/collage/collage_04.jpg";
import img05 from "../../images/collage/collage_05.jpg";
import img06 from "../../images/collage/collage_06.jpg";
import img07 from "../../images/collage/collage_07.jpg";
import img08 from "../../images/collage/collage_08.jpg";

const Modal = ({ open, current, next, prev, onClose }) => {
  const lgimages = [
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

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <Overlay>
        <BG onClick={onClose} />
        <button onClick={onClose} className="exit">
          <VscClose />
        </button>
        <img src={lgimages[current]} alt="Prairie Photos" onClick={next} />

        <div className="carousel__actions">
          <button onClick={prev}>
            <VscArrowLeft />
          </button>
          <button onClick={next}>
            <VscArrowRight />
          </button>
        </div>
      </Overlay>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;

const BG = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 1002;
`;

const Overlay = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  display: grid;
  gap: 1rem;
  align-items: center;

  .carousel__actions {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
  }

  .carousel__actions > * {
    width: 40px;
    height: 40px;
  }

  button {
    padding: 1rem 0.5rem 0.75rem 0.5rem;
    cursor: pointer;
    background: transparent;
    border: none;
    color: #fff;
    z-index: 1002;
  }

  button svg {
    font-size: 1.5rem;
  }

  button:active {
    transform: scale(0.9);
  }

  .exit {
    position: fixed;
    width: 40px;
    height: 40px;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 1002;
  }

  img {
    margin: 0 auto;
    width: 70vw;
    aspect-ratio: 6 / 4;
    object-fit: cover;
    object-position: center;
    z-index: 1002;
  }
`;

// const Overlay = styled.div`
//   display: grid;
//   grid-template-columns: 4rem 1fr 4rem;
//   gap: 1rem;
//   position: fixed;
//   height: 100vh;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.95);
//   z-index: 1001;
//   place-items: center;

//   .carousel__actions {
//     position: absolute;
//     bottom: 46%;
//     left: 50%;
//     transform: translate(-50%, 0);
//     width: calc(100% - 2rem);
//     display: flex;
//     justify-content: space-between;
//   }

//   button {
//     padding: 1rem 0.5rem 0.75rem 0.5rem;
//     cursor: pointer;
//     background: transparent;
//     border: none;
//     color: #fff;
//     z-index: 1001;
//   }

//   button svg {
//     font-size: 1.5rem;
//   }

//   .exit {
//     position: fixed;
//     top: 0;
//     right: 1rem;
//   }

//   button:active {
//     transform: scale(0.9);
//   }
// `;

// const ImgContainer = styled.div`
//   /*
//     position: relative;
//     display: block;
//     width: 100%;
//     padding-bottom: 66.66%;
//     background: red;
// } */
//   grid-column: 2;
//   display: grid;
//   place-items: center;
//   max-height: 80vh;

//   img {
//     /* position: absolute;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     object-position: center; */
//     width: 100%;
//     aspect-ratio: 6 / 4;
//     object-fit: cover;
//     object-position: center;
//   }
// `;
