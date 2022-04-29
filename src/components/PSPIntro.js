import React from 'react'
import styled from 'styled-components'
import UpComingEvents from './UpComingEvents'
import Video from '../images/prairieSea_01.mp4'
// import MenuNav from './MenuNav'

const PSPIntro = () => {
    
    return (
        <>
            <PageContainer id='psp-intro'>
                <VideoComponent autoPlay loop muted src={Video} type="video/mp4" />
                <Intro>
                    The Prairie Sea Projects is an art initiative that builds across disciplines and imagines new space for rural communities to thrive.
                </Intro>
                <UpComingEvents />
                {/* {window.innerWidth > 600 ? <MenuNav/> : ''} */}
            </PageContainer>
        </>
    )
}

export default PSPIntro

const PageContainer = styled.section`
    padding: 0;
    /* padding-bottom: 3rem; */
    
    min-width: 61.87vw;
    border-right: 1px solid var(--black-text);
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */

      ::-webkit-scrollbar {
        display: none;
    }

        @media screen and (max-width: 650px){
        border-right: none;
        padding-bottom: 0;

    }


`;


const Intro = styled.div`
    margin-top: -5px;
    padding: 1.6187rem;
    font-family: ibm-plex-mono, sans-serif;
    font-weight: 400;
    font-style: normal;
    line-height: 1.2;
    font-size: 1.6187rem;
    letter-spacing: 0px;

`

const VideoComponent = styled.video`
    width: 100%;
    height: auto;
    object-fit: cover;
    background: var(--black-text);
`