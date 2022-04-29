import React, {useState} from 'react'
import styled from 'styled-components'

import essayImage from '../images/image_05.jpg'
import essayImage02 from '../images/image_06.jpg'

import essay2Image from '../images/image_07.jpg'
import essay2Image02 from '../images/image_08.jpg'


import essay3Image from '../images/image_09.jpg'



import './FootnotesStyling.css';

function Writings() {

    const [isOpen, setIsOpen] = useState(false)

    const [isOpen2, setIsOpen2] = useState(false)

    const [isOpen3, setIsOpen3] = useState(false)

    
    const openThree = () => {
        setIsOpen3(!isOpen3) 
        console.log('open sesame')
    }


    return (
        <>
            <PageContainer>
            <ComponenetHeader><h2 className="component-header">Prairie Futures > Writings</h2></ComponenetHeader>
                
                    <ContentContainer>
                    <EssayToggler onClick={() => setIsOpen2(!isOpen2)}>
                        <ImageContainer>
                            <FeaturedImage src={essay2Image} alt="Prairie Futures Work Site"/>
                            <div className="titleContainer">
                                    <Title>Agriculture as Artform</Title>
                                    <Author>By Jacques Abelman</Author>
                                </div>
                        </ImageContainer>
                        </EssayToggler>
                        {isOpen2 &&
                        <EssayContainer>
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
                                    <FeaturedImage src={essay2Image02} alt="Picking weeds"/>
                                </ImageContainer02>
                                <p>
                                    On the simplest level we have taken the lexicon of crop circle, farm house, and furrow as a starting point. We have brought back the hand into the dance, drawing our furrows with string and hand tools and shaping spaces to a human scale. We have deconstructed the farmhouse into a series of outdoor rooms which welcome the public into dialogue with the project. Our crop circles are edged and aligned, creating a pleasing space where one easily navigates through the site, welcomed into the heart of each crop circle, welcomed into close contact with the plants that we are cultivating. Hemp, Millet, Amaranth, Quinoa, Sunchoke form the bodies of our crop installations, plants that are atypical to the region but which have been selected because of the very different dialogues they create with the land. Sourced from around the world, these crops have proven to be water smart, nutrient dense, and economically promising. Accompanied by native companion plants sourced from the indigenous short grass prairie, they are the “future” in Prairie Futures.
                                </p>
                            
                                <p>
                                    Prairie Futures creates new dialogues on three levels. Firstly, by creating a human-scaled space which deindustrializes the agricultural lexicon in order to permit accessibility. Secondly, by weaving a host of new functions into what would normally be mono-functional agricultural space—from star viewing to farmer’s markets, from outdoor concerts to public lectures, the project frames new social life with an augmented agricultural vernacular. Thirdly, like ripples in a pond, the site reaches out into the community by creating new spaces for meeting, exchange, and interaction. In this way the project reinvests the notion of agriculture as artform and creator of new dialogues between hand and soil.
                                </p>
                                


                        </EssayEntry>                                            
                        </EssayContainer>


                        }
                    
                    
                    
                    </ContentContainer>
                    
                    <ContentContainer>
                    <EssayToggler onClick={() => openThree()}>    
                    <ImageContainer>
                        <FeaturedImage src={essay3Image} alt="Greg Hill playing guitar"/>
                        <div className="titleContainer">
                                    <Title>The Future We Are Making</Title>
                                    <Author>By Maureen Hearty with Gregory Hill</Author>
                                </div>
                    </ImageContainer>
                    </EssayToggler>
                    
                    {isOpen3 &&
                    <EssayContainer id="last-essay">

                    <Title>The Future We Are Making</Title>
                    <Author>By Maureen Hearty with Gregory Hill</Author>
                    <EssayEntry>
                            <p>
                                <span className="lede">Lately, I've been considering the many similarities</span> between my work in community activism and my regular gig as drummer in an ad-hoc country band in Joes, Colorado. The country band—which has no name—consists of an ex-cowboy-turned-well-man; an employee at our local telephone co-op who co-founded the Joes chapter of an outlaw motorcycle club; an entrepreneurial, storytelling pig farmer; a disabled Colorado Country Music Hall of Fame songbird; a South African diesel mechanic; a spectral novelist renaissance man; and myself, a liberal, artist, and community organizer.  The only things my bandmates and I have in common are our residence in Colorado’s eastern plains and a love of music. 
                            </p>
                            <p>
                                Oh, and one more thing: the band has never rehearsed—not once.  In spite of (or because of) this, our unlikely artistic endeavor has evolved into a squeaky-but-smooth-running semi-improvisational music-and-comedy revue with six straight years of monthly performances in the brightly-lit confines of the Joes Grassroots Community Center. 
                            </p>
                            
                            <p>
                                The band assembled itself because the circumstances were perfect: we had musicians, we had a free place to play, and we had an audience.  The band has survived in no small part because I've managed to keep our wiley bunch together; the sort of taxing task for which the term community organizer was invented.<Footnote href="#footnotes-03">[1]</Footnote> This sort of spontaneity as combined with consistent organization is rare in rural communities, especially in those where the population is spread out over distances that would seem insurmountable in an urban setting.<Footnote href="#footnotes-04">[2]</Footnote>  
                            </p>
                            <p>
                                As a community activist on the High Plains, my goal is to encourage the circumstances—perfect or otherwise—that would allow rhythm and harmony to thrive among groups of people diverse in background and separated from one another by great swaths of farmland and prairie.<Footnote href="#footnotes-05">[3]</Footnote>  
                            </p>
                            <p>
                                If this hasn't yet become clear, community-organizing in rural Northeastern Colorado can be difficult, due to the simple and tautological fact that there are not very many people in rural areas.  The dearth of humans leads to an inevitable scarcity of the financial and physical resources (not to mention the moral-support) that are so essential to any sort of ambitious endeavor.  The few people who are actively engaged in the community often find themselves bearing overabundance of responsibility as a rotating cast of board-members and cheerleaders for everything from the school board to the phone board to the FFA council to the volunteer fire department to the volunteer ambulance service, and so on.
                            </p>
                            <p>
                                And yet, from weakness is derived strength; the folks who do get involved are incredibly capable, resourceful and adaptive problem-solvers with access to a dazzling variety of heavy machinery, and know-how.
                            </p>
                            <p>
                                When I take on a project, I aim to bring to the table as many people from as many sectors as possible: non-profits, businesses, schools, government, health care providers, student organizations, scholars, etc.  The idea of diversity takes on a different shade in a mostly-white, mostly-Christian population whose aggregate political ideology—not to mention the aforementioned absence of resources—puts a premium on surviving with as little outside help as can humanly be managed.<Footnote href="#footnotes-06">[4]</Footnote>
                            </p>  
                            <p>
                                Turns out, an isolated community of isolated people can host a remarkable variety of thought, expertise, and enthusiasm.  When these qualities are brought together and given right amount of direction (that is, as much as possible, as indirectly as possible), it's a marvel to see just how quickly and eagerly folks can dive into something as flat-out strange as a fluxus-inspired garden of unconventional crops meant to draw attention to the dwindling supply of water in the unbelievably-precious Ogallala aquifer which has been feeding thousands of acres of corn which has been feeding millions of head of cattle for dozens of years.
                            </p>
                            <p>
                                My vision for the Prairie Futures project is to bring as broad a spectrum of voices together as possible to address the problem of the impending eradication of eastern plains agriculture and communities due to the approaching water crisis; therefore reducing the creation of more high plains ghost towns. Water shortages are not just farmers’ problems; depleted water equals depleted property values, schools, infrastructure, employment, family  and of course, food. Water use and conservation is an issue that should connect us all because its impact certainly does.  
                            </p>
                            <p>
                                The larger (relatively speaking, of course) community may or may not get the larger point—ostensibly: it's all tulips / practically: THE WATER IS RUNNING OUT—but that's because the "larger community"—irrespective of the population density—rarely gets the larger point.  And that's why we intend to make sure our garden of unconventional crops is also a nice place to hang out.  Because there's an even greater point to the larger point, and that greater point is community.
                            </p>
                            <p>
                                In a land of few people, there's an outsized value to nice places, especially when those nice places include a dining area, an unconventional garden, and plenty of signage to contemplate as you take a lazy stroll while chewing a well-done hamburger.<Footnote href="#footnotes-07">[5]</Footnote>  
                            </p>
                            <p>
                                There's going to be plenty to be proud of when this project is finished.
                            </p>
                            <p>
                                And who knows, maybe we could even start another band.   
                            </p>
       
                    </EssayEntry>
                   
                    <FootnotesContainer>
                    <h2 className="footnotes" id="footnote-label">Footnotes</h2>
                            <ol>
                                <li id="footnotes-03">
                                    Were I a master at community organizing, the band will continue without me. Only time will tell.
                                </li>
                                <li id="footnotes-04">
                                    To be clear, this version of rural is in an entirely different league from, say, a small mountain town just off an I-70 exit, a few miles down the interstate from its neighbors.  Even with "perfect" circumstances, members of our audience (and of the band itself) are known to drive up to sixty miles (or, in one case, <i>eight hours</i>) to attend our shows.  We're the only game, not just in town, but in <i>towns</i>.
                                </li>
                                <li id="footnotes-05">
                                    Those few other things include: Cajun Boils, mouse races, post-funeral pot-lucks, and any sort of fundraiser that includes Rocky Mountain Oysters as prepared by high school students—and, based on recent research, the market is becoming saturated even on those warhorses.
                                </li>
                                <li id="footnotes-06">
                                    Or, at least with as little outside help as can be openly <i>acknowledged</i>.  Everyone's human, after all.
                                </li>
                                <li id="footnotes-07">
                                    And maybe, on a summer Saturday, an ad-hoc country band that never rehearses.
                                </li>
                              
                            </ol>
                    </FootnotesContainer>
                    

                    </EssayContainer>}

                    </ContentContainer>

                    <ContentContainer>

                        <EssayToggler onClick={() => setIsOpen(!isOpen)}>
                            <ImageContainer><FeaturedImage src={essayImage} alt="La Alma Hotel, 1950s"/>
                                <div className="titleContainer">
                                    <Title>The Alma Art Chronicles: Home</Title>
                                    <Author>By Kirsten Stoltz</Author>
                                </div>

                            </ImageContainer>
                            </EssayToggler>

                            {isOpen &&
                            <EssayContainer>
                            
                            <ImgCaption>IMAGE: Alma Motel travel postcard, 1950s. Owned and operated by my grandparents, Quinton and LaVerna Gerdes.</ImgCaption>
                            
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
                        The Prairie Futures project displaces dirt, knowledge and memory to form a critical mediation on human and nature’s co-existence. The sparseness of the artwork in this landscape is inspired by Joes, specifically, its future environmental catastrophes and isolated rural town realities. Collaborative relationships with like-minded folks who believe in the longevity of the Plains support our efforts to build new optics for rural aesthetics, unregulated by the urban gaze. Our complex of structures— including demonstration gardens of hemp, quinoa, amaranth and sunchoke—is housed in Joes Colorado on a multi-generational homestead, a couple doors down from the now abandoned Alma Motel, between the liquor store and the old church, off the two-lane highway 36 overrun by semi trucks full of plastic storage bins. It is our hope that this work will form attachments, and invite strangers without long histories or memories to recall this place and build more inclusive alliances. They will adjust to its permanence, seek protection for this land, and partner with rural neighbors because when we permit new connections we change arts experience within our community and transmit its value into the future.
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
                                    Arts patrons and funders oftentimes see art exclusively through an urban lens, categorizing creative production in rural places as “common,” or non-extraordinary and unworthy of attention. An example of this bias is shown through the funding inequity – while 20% of the U.S. population lives in rural areas (using the 2010 Census definition) less than 2% of national arts foundation funding supports rural projects (<a href="https://dailyyonder.com/despite-less-funding-rural-arts-groups-push-on-these-4-groups-show-how-it-can-be-done/2020/10/13/" target="_blank" rel="noopener noreferrer">The Daily Yonder</a>, October 13, 2020.)
                                </li>
                            
                            </ol>
                        </FootnotesContainer>
                        </EssayContainer>
                        }
                        </ContentContainer>
            
            
            
            </PageContainer>
        </>
    )
}

export default Writings

const PageContainer = styled.section`
    min-width: 61.87vw;
    border-right: 1px solid var(--black-text);
    overflow: scroll;
    /* padding-bottom: 3rem; */


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
        border-top: 1px solid var(--black-text);


    }


    :hover h2.component-header{
        background: var(--dark-yellow);
    }


`;

const ContentContainer = styled.div`
    position: relative;

    @media screen and (max-width: 650px){
        margin-top: -18px;

    }


`

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

const ImgCaption = styled.p`
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
    cursor: pointer;


    .titleContainer{
        padding-bottom: 1.6187rem;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        background: #fff;
    }

    :hover .titleContainer{
        Opacity: 1;
        transition: .5s ease-in-out;
    }

    @media screen and (max-width: 650px){
        .titleContainer{
        opacity: 1;

    }
`

const FeaturedImage = styled.img`
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-bottom: 1px solid var(--black-text);


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

const EssayToggler = styled.div`


`

const ComponenetHeader = styled.div`
    
    position: absolute;
    top: 0;
    z-index: 900;            
    margin-left: 1.6187rem;



    h2{
        display: block;
        width: 100%;
        font-weight: 400;
        padding: 0 .5rem .125rem .25rem;
        font-size: .75rem;
        text-transform: uppercase;
        border: 1px solid var(--black-text);
        border-top: none;
        white-space: nowrap;
    }



    @media screen and (max-width: 650px){
        position: sticky;
        display: table;
        top: 0px;
        background: var(--dark-yellow);
    }


`