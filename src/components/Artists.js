import React from "react";
import styled from "styled-components";
import FundersPartners from "./FundersPartners";

function Artists() {
  return (
    <>
      <PageContainer>
        <ComponenetHeader>
          <h2 className="component-header">Artistic Team</h2>
        </ComponenetHeader>

        <ArtistSection>
          <ArtistContainer>
            <ArtistName>Jacques Abelman </ArtistName>
            <ArtistRoles>Landscape Architect and Artist </ArtistRoles>
            <ArtistBio>
              Jacques's aim as a designer is to envision the potential of
              landscape at the intersection of the ecological, social and
              spatial. His built work seeks to weave together spatial design,
              social justice, and food systems into the fabric of public space
              and infrastructure. His environmental installations seek to bring
              ecological cycles and food systems to life through aesthetic,
              tactile, and educational interventions. His research and teaching
              focus on multifunctional green infrastructure systems, urban
              agroforestry, and infrastructural ecology. He is active and has
              exhibited in Europe, South America, and the United States. His
              work includes the Landscape Table (De Landschapstafel, Brussels,
              Belgium and University of Oregon, Eugene), the Mushroom Tree
              Forest (Amsterdam, The Netherlands), and the Kadijkveste Pluktuin
              (a rooftop fruit and herb forest in the heart of Amsterdam.)
              Abelman has taught internationally, for the European Masters in
              Landscape Architecture Program, the Edinburgh School of
              Architecture and Landscape Architecture and is currently Assistant
              Professor of Landscape Architecture at the University of Oregon.
            </ArtistBio>
          </ArtistContainer>

          <ArtistContainer>
            <ArtistName>Maureen Hearty</ArtistName>
            <ArtistRoles>Program Director and Artist</ArtistRoles>
            <ArtistBio>
              Maureen is a co-director of LRLC and will help lead the community
              engagement and artist coordination for this project. Maureen's
              community activist experience, in both urban and rural landscapes,
              builds connection, compassion and opportunity for diverse
              communities. Her work was recognized by the Colorado Governor's
              Creative Leadership Award in 2016. In addition to Maureen’s
              community building experience, she is a sculptress and story
              collector who has experience archiving narratives with the bARTer
              Collective, Voices of the Plains and the Long-Term Offender
              Program.
            </ArtistBio>
          </ArtistContainer>

          <ArtistContainer>
            <ArtistName>Kirsten Stoltz</ArtistName>
            <ArtistRoles>Project Director and Curator</ArtistRoles>
            <ArtistBio>
              Primarily focused in the field of contemporary art, arts education
              and design Stoltz’s work celebrates collaborative and
              interdisciplinary approaches to art projects built in rural
              communities. Born in Yuma, Colorado, her grandparents owned and
              operated the Alma Motel in Joes until the 1980s US farm crisis.
              Stoltz has held curatorial positions at the Boulder Museum of
              Contemporary Art and Center for Contemporary Art in Santa Fe. As a
              member of M12 Studio she has participated in many national and
              international exhibitions including; Kalmar Konstmuseum, Öland
              Sweden; The 13th International Venice Architecture Biennale;
              Spaced: Art Out of Place, Australian Biennial; and The Biennial of
              the Americas. Stoltz served as the editor for{" "}
              <i>Weather Report: Art and Climate Change</i> by Lucy R. Lippard
              in 2007 and has contributed essays to{" "}
              <i>A Decade of Country Hits: art on the rural frontier</i>, edited
              by Richard Saxton and Margo Handwerker, and{" "}
              <i>Cool Pastoral Splendor</i>, featuring the work of Richard
              Saxton and Kurt Wagner. In 2019, Stoltz’s essay “A Country Social”
              was published in <i>The Rural</i>, a volume within the Documents
              of Contemporary Art series published by MIT Press and Whitechapel
              Gallery, edited by Myvillages.
            </ArtistBio>
          </ArtistContainer>
          <FundersPartners />
        </ArtistSection>
      </PageContainer>
    </>
  );
}

export default Artists;

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

  @media screen and (max-width: 650px) {
    border-right: none;
    padding-bottom: 0;
  }

  :hover h2.component-header {
    background: var(--dark-yellow);
  }
`;

const ArtistSection = styled.div`
  position: relative;

  :hover h1 {
    background: var(--dark-yellow);
  }
`;

const ArtistContainer = styled.div`
  padding: 1.6187rem 3rem 3rem 3rem;

  border-bottom: 1px solid var(--black-text);

  :last-of-type {
    padding: 3rem;
  }

  @media screen and (max-width: 650px) {
    padding: 1.6187rem 1.6187rem 3rem 1.6187rem;
  }
`;

const ArtistName = styled.h3`
  font-family: diazo-mvb-ex-cond, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 2rem;
  line-height: 1;
`;

const ArtistRoles = styled.h3`
  font-weight: 400;
  margin-bottom: 1rem;
`;

const ArtistBio = styled.p`
  max-width: 75ch;
`;

const ComponenetHeader = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;
  margin-left: 3rem;

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
    margin-left: 1.6187rem;
    position: sticky;
    display: table;
    top: 0px;
    background: var(--dark-yellow);
  }
`;
