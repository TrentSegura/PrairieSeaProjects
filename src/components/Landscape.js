import React from 'react'
import styled from 'styled-components'
import LandscapeImg from '../images/image_14.jpg'

const Landscape = () => {
    return (
        <>
            <PageContainer>
            
            </PageContainer>
        </>
    )
}

export default Landscape

const PageContainer = styled.section`
    padding: 0;
    /* padding-bottom: 3rem; */
    height: 100vh;
    min-width: 100vw;
    border-right: 1px solid var(--black-text);
    overflow: scroll;
    background-image: URL(${LandscapeImg});
    background-size: cover;
    -ms-overflow-style: none;
    scrollbar-width: none;
    -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */

      ::-webkit-scrollbar {
        display: none;
    }

        @media screen and (max-width: 650px){
        border-right: none;
        border-top: 1px solid var(--black-text);
        border-bottom: 1px solid var(--black-text);
        padding-bottom: 0;
        height: 300px;

    }


`;