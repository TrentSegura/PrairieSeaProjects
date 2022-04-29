import React from "react";
import styled from "styled-components";
import Archive from "../Archive";
import image01 from "../images/image_19.jpeg";
import Map from "./Map";

const PrairieFutures = () => {
  return (
    <>
      <PageContainer>
        <Intro>
          <ComponenetHeader>
            <h2 className="component-header">PROJECT ONE: PRAIRIE FUTURES</h2>
          </ComponenetHeader>
          <h1>Prairie Futures</h1>
          <p>
            Prairie Futures is a public artwork and agriculture landscape
            installation which aims to cultivate cross-disciplinary approaches
            to climate compassion through art practices and social connections
            in the Colorado High Plains.
          </p>
          <p>
            Inspired by farmhouse architecture and crop circle formations the
            2-acre Prairie Futures site is a social-ecological garden designed
            for the diversification of regional mono-agricultural plant usage.
            In association with this experimental land plot, a multi-use outdoor
            pavilion has been built to reinforce learning across rural areas and
            connect urban populations to rural realities.
          </p>
          <p>
            Influenced by regenerative-ag practices, Prairie Futures supports a
            creative response and a rehabilitative approach to food and farming
            systems that invests in and replenishes the vitality of our rural
            community.
          </p>
          <p>
            In this time of unparalleled urban rural polarization, the Prairie
            Futures site behaves as an activity-rich testing ground for living
            with arts and culture at its core. Furthermore, we hope to open our
            doors to healing and transformation, and reflect optimism for a more
            inclusive future for rural towns in our state.
          </p>
        </Intro>
        <img src={image01} alt="Prairie Futures Site" />
        <AboutOrg>
          <h3>About the Organization</h3>
          <p>
            This project is a component of the{" "}
            <a
              href="https://appliedruralarts.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Liberty Rural Learning Cooperative
            </a>{" "}
            which was founded by the{" "}
            <a
              href="https://www.grassrootscenter.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Grassroots Community Center
            </a>{" "}
            in 2016 to preserve and support the unique qualities found in rural
            education, arts and culture.
          </p>
          <p>
            Our mission is to implement projects that present alternative modes
            of preservation within diverse rural populations and to celebrate
            the rich cultural assets found in our small community. The Co-op’s
            first initiative was the{" "}
            <a
              href="https://appliedruralarts.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Applied Rural Arts Program
            </a>
            .
          </p>
        </AboutOrg>
        <AboutTheSite>
          <h3>About the Site</h3>
          <p>
            Between the liquor store and the old church is the Benton family
            homestead, the site of Prairie Futures. Matriarch Mabel Bond Benton
            came to eastern Colorado around 1915 from Esbon, Kansas, and taught
            in one room school houses as the sole teacher for children first
            through twelfth grades in the Idalia and Joes area. Bob (Robert)
            Benton ended up in Joes after WWI pursuing a mail carrier job. They
            met, were married in 1921 and settled in Joes permanently in 1926.
          </p>

          <p>
            Joes Colorado (pop. 80) was once a popular first stop for travelers
            coming to Colorado along Highway 36 but as the interstate was built
            across the US, recreational travel along small highways was all but
            abandoned. Since 2016, cultural engagement has flourished in Joes
            and its citizens have worked to broaden arts and cultural
            activities, increasing opportunities for our youth to grow into
            future rural community leaders.
          </p>

          <p>
            The Prairie Futures site is a vivid representation of rural urban
            interconnected futures and can pave a path forward for our lives in
            this ever evolving landscape.
          </p>
        </AboutTheSite>

        <Map />

        <Archive />
      </PageContainer>
    </>
  );
};

export default PrairieFutures;

const Intro = styled.section`
  padding: 0 1.6187rem 1.6187rem 1.6187rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  p {
    margin-bottom: 1rem;
  }

  .component-header-container {
    display: block;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .lede-paragraph {
    color: var(--black-text) !important;
  }
`;
const PageContainer = styled.section`
  margin-bottom: 0;
  min-width: 61vw;
  border-right: 1px solid var(--black-text);
  /* padding-bottom: 3rem; */

  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none;
  }

  h2.ComponentHeader {
    border: 1px solid var(--black-text);
    border-top: none;
    position: absolute;
    top: 0;
    left: 0;
    font-weight: 400;
    padding: 0 0.5rem 0.125rem 0.25rem;
    margin-left: 1.6187rem;
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  &:hover h2 {
    background: var(--dark-yellow);
    /* color: #fff; */
  }

  @media screen and (max-width: 650px) {
    padding-bottom: 0;

    h2.ComponentHeader {
      display: block;
      background: var(--dark-yellow);
    }
  }

  span.title {
    font-weight: 400;
    font-style: normal;
    line-height: 1.2;
    font-size: 1.6187rem;
    letter-spacing: 0px;
  }

  :hover span.title {
    display: inline-block;
    text-decoration: underline 1px;
  }

  img {
    padding: 0 1.6187rem;
    width: 100%;
    height: auto;
    margin: 0 0 1rem 0;
  }

  h1 {
    font-family: diazo-mvb-ex-cond, sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 2rem;
    line-height: 1;
    margin-bottom: 1rem;
    /* margin-top: 1.6187rem; */
    padding-top: 1.6187rem;
  }

  p {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 650px) {
    border-top: 1px solid var(--black-text);
    border-right: none;
  }
`;

const AboutOrg = styled.div`
  padding: 0 1.6187rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  p {
    margin-bottom: 1rem;
  }
`;

const AboutTheSite = styled.div`
  padding: 0 1.6187rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  p {
    margin-bottom: 1rem;
  }
`;

const ComponenetHeader = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;
  /* margin-left: 1.6187rem; */

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
