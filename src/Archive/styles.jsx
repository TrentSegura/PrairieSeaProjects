import styled from "styled-components";

export const SectionHeader = styled.h4`
  margin-bottom: 1rem;
`;

export const EventInfo = styled.div`
  padding: 0 1.6187rem;
  margin: 3rem auto;
  max-width: 600px;

  li {
    list-style: none;
    margin-bottom: 1rem;
    max-width: 65ch;
    color: var(--gray-text);
  }

  h6 {
    font-weight: 400;
    /* font-style: italic; */
    text-transform: uppercase;
    color: var(--black-text);
  }

  a {
    scroll-behavior: smooth;
  }

  @media screen and (max-width: 650px) {
    margin-top: 1.6187rem;
  }
`;

export const Header = styled.h3`
  font-family: diazo-mvb-ex-cond, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const SubHeader = styled.h4`
  color: var(--black-text);
`;

export const CTA = styled.p`
  font-weight: 500;
  margin-top: -1rem;
  text-decoration: underline;
  cursor: pointer;
`;
