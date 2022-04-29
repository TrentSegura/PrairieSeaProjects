import React from "react";
import styled from "styled-components";
// import { useRef, useEffect } from 'react'
// import mapboxgl from 'mapbox-gl'

const UpComingEvents = () => {
  return (
    <div>
      <EventContainer>
        <ComponenetHeader>
          <h2 className="component-header">Upcoming Projects</h2>
        </ComponenetHeader>
        <EventInfo>
          {/* <h3>Upcoming Projects</h3> */}
          <div>
            <h3>Location</h3>
            <strong>Prairie Future’s site in Joes, Colorado</strong>
            <p>
              Located on the Benton Family Homestead, west of Grassroots
              Community Center, between the liquor store and the old church.
            </p>
            <p>
              <em>
                6415 US HWY 36
                <br />
                Joes, Colorado 80822
              </em>
            </p>

            <div>
              <p>
                Inquiry:{" "}
                <a href="mailto:hello@prairieseaprojects.org">
                  hello@prairieseaprojects.org
                </a>
              </p>
              <p className="closed-notice">
                The Prairie Futures site is open to the public when projects are
                launched in spring, summer and fall. All other times the site is
                closed.
              </p>
            </div>

            <div>
              <h3>Prairie Sea Cultural Center</h3>
              <p>
                A place for learning and experimenting with art, prairie
                ecologies, and social systems in Colorado’s High Plains region.
                Associated projects and programs are offered.
              </p>
              <h4>Art and design</h4>
              <ul>
                <li>Filmmaking</li>
                <li>Landscape design and creative ecologies</li>
                <li>High Plains Sounds</li>
                <li>Prairie Futures projects</li>
              </ul>
              <h4>Alternative Landscapes</h4>
              <ul>
                <li>Farmer-in-residence</li>
                <li>Agrivoltaic and landscape architecture projects</li>
                <li>Conversation series about American Plains conservation</li>
                <li>Northeastern Colorado FFA & 4-H workshops</li>
              </ul>
              <h4>Community Programs</h4>
              <ul>
                <li>Farmers Markets</li>
                <li>Art and cooking classes</li>
              </ul>
            </div>
          </div>
        </EventInfo>
      </EventContainer>
    </div>
  );
};

export default UpComingEvents;

const EventContainer = styled.div`
  position: relative;
  padding: 1.6187rem;
  border-top: 1px solid var(--black-text);
  /* border-bottom: 1px solid var(--black-text); */
  margin: 0 auto;
  position: relative;

  :hover h2.component-header {
    background: var(--dark-yellow);
  }

  h3 {
    font-family: diazo-mvb-ex-cond, sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 2rem;
    line-height: 1;
    // margin-top: 1rem;
    margin-bottom: 0.6187rem;
  }

  @media screen and (max-width: 650px) {
    h3 {
      padding-top: 1rem;
    }
  }

  h4 {
    font-weight: 200;
  }

  .component-flex {
    margin: 1.6187rem 0;
    display: block;
    width: 50%;
  }

  @media screen and (max-width: 650px) {
    .component-flex {
      display: block;
    }
  }
`;

const EventInfo = styled.div`
  ul {
    margin-bottom: 1.6187rem;
  }

  li {
    margin-bottom: 0.123rem;
    list-style: none;
    max-width: 50ch;
    color: var(--gray-text);
  }

  .location-name {
    font-weight: 600;
  }

  h4 {
    font-weight: 600;
    text-transform: uppercase;
  }

  a {
    scroll-behavior: smooth;
  }

  p {
    margin-bottom: 1rem;
    max-width: 50ch;
  }

  .closed-notice {
    font-weight: 700;
  }

  @media screen and (max-width: 650px) {
    .Component-Flex {
      margin-top: 1em;
    }
  }
`;

const ComponenetHeader = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;

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
    top: 0px;
    background: var(--dark-yellow);
  }
`;
