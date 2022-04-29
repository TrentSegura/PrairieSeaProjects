import React from 'react'
import styled from 'styled-components'
import essayImage from '../images/image_07.jpg'
import essayImage02 from '../images/image_08.jpg'
import CollageScroll from './CollageScroll'



const JacquesEssay = () => {


    return (
        <>
                <EssayContainer>

                    <ImageContainer>
                        <FeaturedImage src={essayImage} alt="Prairie Futures Work Site"/>
                    </ImageContainer>
                    
                    <Title>Agriculture as Artform</Title>
                    <Author>By Jacques Abelman</Author>
                    <EssayEntry>
                            <p>
                                <span className="lede">Agriculture could be considered the first fundamental human act of making a mark on the land.</span> This act of drawing upon the earth with the language of the furrow, the digging stick and the plow has always existed in order to draw forth fertile dialogues of grain, vegetable and fruit. In that sense agriculture is an artform uniting us with the land.
                            </p>
                            <p>
                                These “drawings” have called forth sustenance out of the earth for at least ten thousand years in a complex dialogue built on exchanges between seed and soil, hand and tool. Today this ancient dialogue is fraught with tensions and perilous complexities. Machines have multiplied the plow’s capacity a million times, drawing ever more resources out of the earth to the point of ecosystem exhaustion. New pressures and rapidly changing environmental conditions have brought this ancient dialogue to a critical point. We must question the validity of our current dialogues with the planet and perhaps reexamine with a questioning eye the drawings we have inscribed on a living landscape. 
                            </p>
                            
                            <p>
                                These tensions are brought into sharp relief perhaps nowhere as critically as the American West. A language of crop circles is imposed on the land stretching for countless miles. Industrialized monoculture draws ever more life from the soil in an intensive dialogue which shouts <i>more corn, more wheat, more more more…</i> Pivot irrigation creates this language of great dots, a graphic lexicon that is remarkable. 
                            </p>
                            <p>
                                Agriculture remains a great artform, one that has shaped the West and specifically the eastern Colorado Plains where we find ourselves today. Centering ourselves in the practice of the hand drawing in the earth to draw forth new dialogues, we have asked the question, “What new dialogues are possible here today and for the future? What new drawings could take shape?” The Prairie Futures project exists for this purpose.
                            </p>

                            <ImageContainer02>
                                <FeaturedImage src={essayImage02} alt="Picking weeds"/>
                            </ImageContainer02>
                            <p>
                                On the simplest level we have taken the lexicon of crop circle, farm house, and furrow as a starting point. We have brought back the hand into the dance, drawing our furrows with string and hand tools and shaping spaces to a human scale. We have deconstructed the farmhouse into a series of outdoor rooms which welcome the public into dialogue with the project. Our crop circles are edged and aligned, creating a pleasing space where one easily navigates through the site, welcomed into the heart of each crop circle, welcomed into close contact with the plants that we are cultivating. Hemp, Millet, Amaranth, Quinoa, Sunchoke form the bodies of our crop installations, plants that are atypical to the region but which have been selected because of the very different dialogues they create with the land. Sourced from around the world, these crops have proven to be water smart, nutrient dense, and economically promising. Accompanied by native companion plants sourced from the indigenous short grass prairie, they are the “future” in Prairie Futures.
                            </p>
                          
                            <p>
                                Prairie Futures creates new dialogues on three levels. Firstly, by creating a human-scaled space which deindustrializes the agricultural lexicon in order to permit accessibility. Secondly, by weaving a host of new functions into what would normally be mono-functional agricultural space—from star viewing to farmer’s markets, from outdoor concerts to public lectures, the project frames new social life with an augmented agricultural vernacular. Thirdly, like ripples in a pond, the site reaches out into the community by creating new spaces for meeting, exchange, and interaction. In this way the project reinvests the notion of agriculture as artform and creator of new dialogues between hand and soil.
                            </p>
                            


                    </EssayEntry>
                    
                </EssayContainer>  <CollageScroll/>
        </>
    )
}

export default JacquesEssay


const EssayContainer = styled.div`
    padding: 0;
    padding-bottom: 1.6187rem; 

    p{
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }
`


const Title = styled.h1`
    padding: 0 1.6187rem;
    margin-top: 1.61987rem;

    font-family: diazo-mvb-ex-cond,sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 2rem;
    line-height: 1;

    max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    
`

const Author = styled.h2`
    padding: 0 1.6187rem;
    margin-top: 0.6187rem;
    font-size: 1rem;
    font-weight: 400;

    max-width: 600px;
        margin-left: auto;
        margin-right: auto;
`



const EssayEntry = styled.div`
    margin-top: 1.6187rem;

 
    p:first-of-type{
        line-height: 1.3;
        font-size: 1.38rem;
        margin-bottom: 1.6187rem;
    }

    .lede{
        text-transform: uppercase;
        font-size: 1.38rem;

    }


    p{
        padding: 0 1.6187rem;
        margin-bottom: 1rem;
    }
`


const ImageContainer = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding-bottom: 66.66%;
`


const ImageContainer02 = styled.div`
    position: relative;
    display: block;
    width: calc(100% - 3.2374rem);
    padding-left: 1.6187rem;
    padding-right: 1.6187rem;
    padding-bottom: 66.66%;
    margin: 1.6187rem 0;
`

const FeaturedImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`