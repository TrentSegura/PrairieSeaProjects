import React, { useState } from "react";
import styled from "styled-components";

import image02 from "../images/image_17a.jpg";
import image03 from "../images/image_03.jpg";
import image18 from "../images/image_18.jpg";

import gardenInfoPDF from "../assets/english_garden_information.pdf";
import jardinInfoPDF from "../assets/espanol_jardine_informacion.pdf";

import { VscFilePdf } from "react-icons/vsc";

const PFAssociatedPrograms = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PageContainer>
        <ComponenetHeader>
          <h2 className="component-header">
            Prairie Futures > Associated Programs
          </h2>
        </ComponenetHeader>

        <ProgramContainer>
          <ProgramTitle>Gardener-in-Residence</ProgramTitle>

          <img src={image02} alt="Gardener-in-Residence" />
          <p>
            The Prairie Futures gardens are designed to be used for small crop
            production and plant experimentation based around food that
            complements today's soil health, water conservation efforts and
            regenerative-ag possibilities found in the High Plains region.
          </p>

          <p className="girToggle" onClick={() => setIsOpen(!isOpen)}>
            Click to read more about current Gardner-in-Residence, Mary
            Rothbauer
          </p>
          {isOpen && (
            <div className="content">
              <h3>Mary Rothbauer</h3>
              <img
                src={image18}
                alt="Current gardner in residence, Mary Rothbauer"
              />

              <p>
                Mary grew up in the Texas panhandle, learning how to garden from
                her dad. Together, for many years, they managed cotton fields
                and traveled to Montana in the summers to work in the sugar beet
                fields.
              </p>
              <p>
                Rothbauer moved to Joes in 2000 where, in addition to raising
                her 3 daughters, she cares for her family garden and was
                employed by a local hemp farmer cultivating the fields, as well
                as processing the seeds for CBD extraction. She advocates for
                the project and provides great advice to the artistic team on
                how to grow and care for the variety of crops grown at the
                Prairie Futures site. “Growing up working, my dad taught us to
                do the best we could.”
              </p>
            </div>
          )}
        </ProgramContainer>

        <ProgramContainer>
          <ProgramTitle>
            Future Farmers of America (FFA) training and experimental garden
            projects
          </ProgramTitle>
          <img src={image03} alt="Future Farmers of America" />
          <p>
            FFA students from area Northeastern Colorado schools work with a
            landscape architect and receive practical skills in small garden
            management from community members and local farmers.
          </p>
          <div className="downloads-container">
            <div>
              <VscFilePdf />
              &nbsp;&nbsp;
              <a href={gardenInfoPDF} target="_blank" rel="noreferrer">
                Information on garden (1.1mb)
              </a>
            </div>

            <div>
              <VscFilePdf />
              &nbsp;&nbsp;
              <a href={jardinInfoPDF} target="_blank" rel="noreferrer">
                Información sobre el jardín (1.1mb)
              </a>
            </div>
          </div>
        </ProgramContainer>

        {/* <ProgramContainer>
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
        </ProgramContainer> */}
      </PageContainer>
    </>
  );
};

export default PFAssociatedPrograms;

const PageContainer = styled.section`
  min-width: 38vw;
  border-right: 1px solid var(--black-text);
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 100%;
    margin: 1rem 0;
  }

  :hover h2.component-header {
    background: var(--dark-yellow);
  }

  @media screen and (max-width: 650px) {
    padding-bottom: 0;
    border-right: none;
    border-top: 1px solid var(--black-text);

    h2.ComponentHeader {
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

  div {
    margin-top: 1rem;
  }

  div div {
    position: relative;
  }

  div div:hover a {
    /* background: var(--dark-yellow); */
    text-decoration: none;
  }

  a {
    position: absolute;
    top: -15%;
  }

  p {
    margin-top: 1rem;
  }

  .girToggle {
    text-decoration: underline;
    cursor: pointer;
    font-weight: 400;
  }

  .girToggle:hover {
    text-decoration: none;
  }
`;

const ProgramTitle = styled.h3`
  font-family: diazo-mvb-ex-cond, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 2rem;
  line-height: 1;
  padding-bottom: 0.6187rem;
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
    top: 0;
  }

  @media screen and (max-width: 650px) {
    margin-right: 1.6187rem;
    position: inherit;
    display: table;
    top: 0px;
    background: var(--dark-yellow);
  }
`;
