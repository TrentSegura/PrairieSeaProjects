import React, { useState } from "react";
import { EventInfo, Header, SubHeader, CTA, SectionHeader } from "./styles";

const Archive = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <>
      <EventInfo>
        <SectionHeader>Event Archives</SectionHeader>

        <div onClick={() => setIsOpen(!isOpen)}>
          <Header>2021 Fall Harvest</Header>
          {isOpen ? null : <CTA>Click for more info</CTA>}
        </div>

        {isOpen && (
          <>
            <SubHeader id="fall-harvest">When</SubHeader>
            <p>
              Saturday, October 2nd <br />
              3–8 PM
            </p>

            <SubHeader>Events</SubHeader>
            <p>
              Highway 36 Bird Walk and Conversation with{" "}
              <strong>Gary Lefko</strong>, founder of the{" "}
              <a
                href="http://www.friendsofthepawneegrassland.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Friends of the Pawnee National Grassland
              </a>
              . Lefko is from Nunn, Colorado and an expert on Eastern Colorado
              bird migration, High Plains raptors and bird ecology.
            </p>

            <p>
              Threshing and seed cleaning the crops at the Prairie Futures
              gardens
            </p>

            <p>Granola making workshop</p>

            <p>Hemp rope making and jumprope jam</p>

            <p>
              Screening of “IN A DRY LAND,” a documentary film by{" "}
              <a
                href="http://www.sarahmegyesy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Sarah Megyesy</strong>
              </a>
              . And a short film “Veral” by{" "}
              <a
                href="https://www.erinharperfilms.com/erinharper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Erin Harper</strong>
              </a>
              .
            </p>

            <SubHeader>Dinner</SubHeader>
            <p>
              Harvest stew with amaranth bread and beer by Yuma's Tumbleweed
              Brewery
            </p>
            <p>High Plains Sounds featuring White Rose Motor Oil</p>
          </>
        )}
      </EventInfo>
      <EventInfo>
        <div onClick={() => setIsOpen2(!isOpen2)}>
          <Header>July 10, 2021 — Project Opening</Header>
          {isOpen2 ? null : <CTA>Click for more info</CTA>}
        </div>

        {isOpen2 && (
          <>
            <ul>
              <h5>3–6PM</h5>
              <li>
                Readings by{" "}
                <a
                  href="https://www.gregoryhillauthor.com/03.bio.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gregory Hill
                </a>{" "}
                [East of Denver] and{" "}
                <a
                  href="https://lucasbessire.net/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lucas Bessire
                </a>{" "}
                [Running Out: In Search of Water on the High Plains]
              </li>
              <li>
                Future Farmers of America, Liberty & Arickaree schools, Student
                Garden Tour
              </li>
              <li>
                Talk with Michael Bowman, Yuma County Hemp Farmer, Chief
                Pollinator at First Crop, Board member at{" "}
                <a
                  href="http://www.25x25.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  25x25
                </a>
              </li>
              <li>Old Time Craft Demo, High Plains Spinners & Weavers</li>
              <li>
                Pam Veto, Hemp Macrame Workshop <br />
                Hemp Rope Making with Daniel Ray
              </li>
              <li>
                Quinoa, green chile, sweet corn tamales & giant salad. Beer by
                Tumbleweed Brewery, Yuma
              </li>
              <h5>6–10PM</h5>
              <li>
                <h6>Music</h6>
                Dog Patch Ramblers [bluegrass] <br />
                Rural Roots [country] <br />
                Dead Pay Rent [rock & roll] <br />
              </li>
            </ul>
          </>
        )}
      </EventInfo>
    </>
  );
};

export default Archive;
