import React, { useState } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import PSPIntro from "./components/PSPIntro";
import PrairieFutures from "./components/PrairieFutures";
import PFAssociatedPrograms from "./components/PFAssociatedPrograms";
import ImageScroll from "./components/ImageScroll/";
import ScrollOpen from "./components/ScrollOpen";
import ScrollFall from "./components/ScrollFall";

import Landscape from "./components/Landscape";
import Artists from "./components/Artists";
import CommunityCenter from "./components/CommunityCenter";
import Writings from "./components/Writings";
import HighPlainsSounds from "./components/HighPlainsSounds";
import ScrollCollage from "./components/ScrollCollage";
import ContactModal from "./components/ContactModal";
import ScrollNav from "./components/ScrollNav";
// import ContactForm from './components/Contact.js'

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <>
      <Header />
      <Button onClick={toggleModal}>
        {showModal ? "Close" : "Contact Us"}
      </Button>

      {showModal && <ContactModal toggleModal={toggleModal} />}
      <Container>
        <Wrapper id="wrapper">
          <PSPIntro />
          <ScrollOpen />
          <PrairieFutures />
          <ScrollCollage />

          <PFAssociatedPrograms />
          <Writings />
          <ScrollFall />

          <HighPlainsSounds />
          <Landscape />
          <ImageScroll />
          <Artists />
          <CommunityCenter />
          {window.innerWidth > 600 ? <ScrollNav /> : ""}
        </Wrapper>
      </Container>
    </>
  );
};

export default App;

const Button = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  border: none;
  background-color: #fff;
  z-index: 1001;
  padding: 3px;
  cursor: pointer;
  overflow-x: hidden;

  @media screen and (max-width: 300px) {
    display: none;
  }

  :hover {
    text-decoration: underline;
  }
`;

const Container = styled.main`
  margin-left: 30px;
  height: 100vh;
  min-width: calc(100vw - 30px);

  @media screen and (max-width: 650px) {
    margin-left: 0;
    margin-top: 30px;
    width: 100vw;
    height: calc(100vh - 30px);

    > * {
      max-width: 650px;
    }
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  @media screen and (max-width: 650px) {
    height: calc(100vh - 30px);
    display: block;
  }
`;
