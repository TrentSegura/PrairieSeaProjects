import styled from 'styled-components'
import essayImage from '../images/image_05.jpg'
import essayImage02 from '../images/image_06.jpg'
import Essay from './Essay';
import './FootnotesStyling.css';

// import * as Scroll from 'react-scroll';
// import { Link } from 'react-scroll'


const KirstenEssay = () => {


    return (
        <>
                
                    <ImageContainer>
                        <FeaturedImage src={essayImage} alt="La Alma Hotel, 1950s"/>
                    </ImageContainer>

                    <Caption>IMAGE: Alma Motel travel postcard, 1950s. Owned and operated by my grandparents, Quinton and LaVerna Gerdes.</Caption>
                    <EssayContainer>
                    <Title>The Alma Art Chronicles: Home</Title>
                    <Author>By Kirsten Stoltz</Author>
                    <EssayEntry>
                        <p>
                            <span className="lede">A double occupancy room at the Alma Motel</span> in Joes Colorado was my first home. My grandparents had bought the roadside motel and settled there in the 50s hoping to spark a dream when family farming in Nebraska and wartime PTSD took a dark turn. My teenage parents self-exiled from main street,<Footnote href="#footnotes-01">[1]</Footnote> as did many others, finding opportunities—education and jobs—in large cities. When the 1980s US farm crisis hit, Joes had no chance of regaining prominence in our lives and the motel’s vacancy sign became permanently affixed.
                        </p>

                        <p>
                            Since, a series of tiny, self-contained towns formed across the high plains landscape. Survival of the fittest was, and still is, in many town's psyche. Ideas of consolidation and recalibration have led to anxiety, dissolving the rural DIY spirit into Dollar Store fool’s gold. Western expansion left Colorado’s peoples, land, air and water forever altered in unnatural ways. Today, we no longer dominate over this land, the land dominates us and correction is required. Through connectivity and creativity, compassion, environmental healing and agricultural innovations, we seek to reactivate ecological learning in the region using art and design. In addition, anonymous labor, climate change denial and economic disparities can be laid to rest in the last place where true discovery is possible, the Prairie Futures.
                        </p>
                        <p>
                            On the outskirts of high culture exists the joys and aesthetic tastes of common people.<Footnote href="#footnotes-02">[2]</Footnote>
                            The Prairie Futures project challenges art worthiness and begins to expand the American vernacular by bending rural craft-centric stereotypes towards contemporary landscape design, social practice and environmental studies. When revealing artistic possibilities, local subject matter and historical framing is paramount to engaging rural communities and we must, as artists, provide activation to find collective and connected expressions. Through conversations about this lived environment we seek to expand an independent rural visual language and explore interrelationships between history, mythmaking and storytelling. Prairie Futures uses networked art practices to expand the power of artwork made in the region by widening the cultural infrastructure to be supportive of place, community and context.
                        </p>
                        <p>
                            The Prairie Futures project displaces dirt, knowledge and memory to form a critical meditation on human and nature’s co-existence. The sparseness of the artwork in this vast landscape is inspired by the visible world, specifically, environmental catastrophes and isolated rural town realities. Collaborative relationships with like-minded folks who believe in the longevity of the Plains support our efforts to build new optics for rural aesthetics, unregulated by the urban gaze. Our complex of structures— including demonstration gardens of hemp, quinoa, amaranth and sunchoke—is housed in Joes Colorado on a multi-generational homestead, a couple doors down from the now abandoned Alma Motel, between the liquor store and the old church, off the two-lane highway 36 overrun by semi trucks full of plastic storage bins. It is our hope that this work will form attachments, and invite strangers without long histories or memories to recall this place and build more inclusive alliances. They will adjust to its permanence, seek protection for this land, and partner with rural neighbors because when we permit new connections we change arts experience within our community and transmit its value into the future.
                        </p>
                        <ImageContainer>
                            <FeaturedImage src={essayImage02} alt="La Alma Hotel, 1950s"/>
                        </ImageContainer>
                  

                    </EssayEntry>
                    <FootnotesContainer>
                    <h2 className="footnotes" id="footnote-label">Footnotes</h2>
                            <ol>
                                <li id="footnotes-01">
                                    Reference to The Rolling Stone’s album “Exile on Main Street''. The record adored by my late father was released in 1972, a few months before I was born.
                                </li>
                                <li id="footnotes-02">
                                    Arts patrons and funders oftentimes see art exclusively through an urban lens, categorizing creative production in rural places as “common,” or unextraordinary and unworthy of attention. An example of this bias is shown through the funding inequity – while 20% of the U.S. population lives in rural areas (using the 2010 Census definition) less than 2% of national arts foundation funding supports rural projects (<a href="https://dailyyonder.com/despite-less-funding-rural-arts-groups-push-on-these-4-groups-show-how-it-can-be-done/2020/10/13/" target="_blank" rel="noopener noreferrer">The Daily Yonder</a>, October 13, 2020.)
                                </li>
                              
                            </ol>
                    </FootnotesContainer>
                </EssayContainer>
                
                <Essay/>


        </>
    )
}

export default KirstenEssay



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

const Footnote = styled.a`
    cursor: pointer;
    color: var(--green);
    font-size: .75rem;
    vertical-align: super;
    font-weight: 400;

`

const FootnotesContainer = styled.footer`
    padding: 0 1.6187rem;
    max-width: 600px;
        margin-left: auto;
        margin-right: auto;

li{
    margin-left: 1rem;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: .6187rem
}

h2{
    margin: 1.6187rem 0;
    font-weight: 400;
    font-size: 1rem
}

a{
    color: var(--black-text);
}

:target {
    background: var(--yellow);
  }

`

const Caption = styled.p`
    padding: 0 1.6187rem;
    font-size: .75rem;
    letter-spacing: .5px;
    font-weight: 400;
`

const ImageContainer = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding-bottom: 66.66%;
`

const FeaturedImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

`