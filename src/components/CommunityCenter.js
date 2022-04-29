import React from 'react'
import styled from 'styled-components'
import image10 from '../images/image_16.jpg'

function CommunityCenter() {
    return (
        <>
            <PageContainer id="community-center">
                <Image src={image10}></Image>
                <Text><Bold>Cultural Center (2022-23)</Bold> will be a new space for creative and agricultural practitioners to envision a future for creativity in the American West. </Text>
            </PageContainer>  
        </>
    )
}

export default CommunityCenter

const PageContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;

    min-width: calc(62vw - 30px);
    border-right: 1px solid var(--black-text);
    overflow: scroll;
    padding-bottom: 3rem;


    -ms-overflow-style: none;
    scrollbar-width: none;
    -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */

        @media screen and (max-width: 650px){
        border-right: none;
        height: 68vh;
        border-top: 1px solid var(--black-text);
        padding-bottom: 0;

    }

`;

const Image = styled.img`
    width: 68%;
    margin: 0 auto;
`

const Text = styled.div`
    width: 68%;
    margin: 1rem auto;
    /* background: var(--light-blue);
    padding: 1.6187rem;
    border: 1px solid var(--black-text); */

`
const Bold = styled.span`
    font-weight: 600;
    color: var(--gray-text)
`