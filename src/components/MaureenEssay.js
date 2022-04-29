import React from 'react'
import styled from 'styled-components'
import essayImage from '../images/image_09.jpg'
// import essayImage02 from '../images/image_08.jpg'



const MaureenEssay = () => {


    return (
        <>
                
                    <ImageContainer>
                        <FeaturedImage src={essayImage} alt="Greg Hill playing guitar"/>
                    </ImageContainer>
                    
                    <EssayContainer>

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
                                As a community activist on the High Plains, my goal is to encourage the circumstances--perfect or otherwise--that would allow rhythm and harmony to thrive among groups of people diverse in background and separated from one another by great swaths of farmland and prairie.<Footnote href="#footnotes-05">[3]</Footnote>  
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
                                    Those few other things include: Cajun Boils, mouse races, post-funeral pot-lucks, and any sort of fundraiser that includes Rocky Mountain Oysters as prepared by high school students--and, based on recent research, the market is becoming saturated even on those warhorses.
                                </li>
                                <li id="footnotes-06">
                                    Or, at least with as little outside help as can be openly <i>acknowledged</i>.  Everyone's human, after all.
                                </li>
                                <li id="footnotes-07">
                                    And maybe, on a summer Saturday, an ad-hoc country band that never rehearses.
                                </li>
                              
                            </ol>
                    </FootnotesContainer>
                    

                </EssayContainer>
        </>
    )
}

export default MaureenEssay


const EssayContainer = styled.div`
    padding: 0;
    padding-bottom: 1.6187rem; 

    max-width: 600px;
        margin-left: auto;
        margin-right: auto;
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


const FeaturedImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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