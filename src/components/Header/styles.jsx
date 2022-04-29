import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 50%;
  left: 0;
  width: 100vh;
  height: 30px;
  transform: rotate(-90deg) translate(-50%, 0);
  transform-origin: 0 0;
  background-color: #fff;
  border-bottom: 1px solid var(--black-text);
  z-index: 1000;
  padding: 0 1.6187rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media screen and (max-width: 650px) {
    transform: none;
    width: 100vw;
    top: 0;
    flex-direction: row;
  }
`;

export const Logo = styled.h1`
  font-family: diazo-mvb-ex-cond, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;

  display: flex;
  padding-top: 4px;
  letter-spacing: 2px;

  cursor: pointer;
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;
