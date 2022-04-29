import React from "react";
import styled from "styled-components";

import image04 from "../images/image_04.jpg";

import img18 from "../images/fall/sm_lg_fall_19.jpg";
import img05 from "../images/fall/sm_lg_fall_06.jpg";
import img30 from "../images/fall/sm_lg_fall_33.jpg";

import img29 from "../images/fall/sm_lg_fall_34.jpg";
import img31 from "../images/fall/sm_lg_fall_38.jpg";

const HighPlainsSounds = () => {
  const imgData = [img05, img18, img29, img30, img31];

  return (
    <>
      <PageContainer id="highplains">
        <ComponenetHeader>
          <h2 className="component-header">Project Two: High Plains Sounds</h2>
        </ComponenetHeader>

        <ProgramContainer>
          <ProgramTitle>High Plains Sounds</ProgramTitle>
          <img src={image04} alt="High Plains Sounds" />
          <p>
            The High Plains Sounds program was developed to activate the Prairie
            Futures site with programming that encourages connection; building
            bridges between urban and rural musicians after the pandemic year of
            creative isolation. The program is inspired by the monthly music
            nights at Grassroots Community Center in Joes where an eclectic mix
            of farmers, teachers, and retired locals perform impromptu concerts.
            Over the course of six years this event has become essential to the
            Joes community mental health, an event where everyone shows up,
            dances, and flexes their musical muscles. Call it a post-country,
            futuristic semisonic battle of the bands or just call it a magical
            musical journey.
          </p>

          <h3>Participants 2021:</h3>
          <ul>
            <li>White Rose Motor Oil</li>
            <li>Nathan Hall</li>
            <li>Zach Boddicker</li>
            <li>Tom Parks and Richard Birnie</li>
          </ul>
        </ProgramContainer>

        <ProgramContainer>
          {imgData.map((image, index) => (
            <img src={image} alt="/" key={index} />
          ))}
        </ProgramContainer>
      </PageContainer>
    </>
  );
};

export default HighPlainsSounds;

const PageContainer = styled.section`
  min-width: 38vw;
  border-right: 1px solid var(--black-text);
  overflow: scroll;
  /* padding-bottom: 3rem; */

  -ms-overflow-style: none;
  scrollbar-width: none;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none;
  }

  p {
    margin-bottom: 1rem;
  }

  p.caption {
    font-size: 0.75rem;
    letter-spacing: 0.5px;
    font-weight: 400;
  }

  :hover h2.component-header {
    background: var(--dark-yellow);
  }

  img {
    width: 100%;
    margin: 1.6187rem 0;
  }

  ul {
    margin-bottom: 1.6187rem;
  }

  li {
    margin-bottom: 0.123rem;
    list-style: none;
    max-width: 50ch;
    color: var(--gray-text);
  }

  @media screen and (max-width: 650px) {
    border-right: none;
    border-top: 1px solid var(--black-text);
    padding-bottom: 0;

    h2 {
      display: block;
      background: var(--dark-yellow);
    }
  }
`;

const ProgramContainer = styled.div`
  border-bottom: 1px solid var(--black-text);
  padding: 1.6187rem;
  position: relative;
  overflow: hidden;

  :last-of-type {
    border-bottom: none;
  }

  h4 {
    font-weight: 400;
  }
`;

const ProgramTitle = styled.h3`
  font-family: diazo-mvb-ex-cond, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 1rem;
`;

const ComponenetHeader = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;
  margin-left: 1.6187rem;

  h2 {
    display: block;
    width: 100%;
    font-weight: 400;
    padding: 0 0.5rem 0.125rem 0.25rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    border: 1px solid var(--black-text);
    border-top: none;
    white-space: nowrap;
  }

  @media screen and (max-width: 650px) {
    position: sticky;
    display: table;
    top: 0px;
    background: var(--dark-yellow);
  }
`;
