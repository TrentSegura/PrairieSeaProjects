import React from 'react'
import styled from 'styled-components'

function FundersPartners() {
    return (
        <>
            
                <CreditsContainer>
                    <Partners>
                    <h2>Partners</h2>
                            <ul>
                                <li>
                                    <h3>Bethleen McCall</h3> <h4>Yuma City Councilwoman and Hemp Farmer</h4>
                                </li>
                                <li>
                                    <h3>Rural Communities Resource Center (RCRC)</h3>
                                </li>
                                <li>
                                    <h3>Las Estrellas</h3>
                                </li>
                                <li>
                                    <h3>Yuma Museum</h3>
                                </li>
                                <li>
                                    <h3>Future Farmers of America</h3> <h4>Joes and Arickaree Chapters</h4>
                                </li>
                                <li>
                                    <h3>Colorado State Extension Office</h3>
                                </li>
                                <li>
                                    <h3>Sweet Pea’s</h3> <h4>Yuma</h4>
                                </li>

                                <li>
                                    <h3>Sun Prairie Beef</h3> <h4>Yuma</h4>
                                </li>

                                <li>
                                    <h3>Native Plant Nursery,</h3> <h4>High Plains Environmental Center</h4>
                                </li>
                                
                                <li>
                                    <h3>Snake River Farms</h3>
                                </li>

                                                                
                                <li>
                                    <h3>The Orphanage</h3> <h4>Yuma</h4>
                                </li>

                                <li>
                                    <h3>Grassroots Community Center and the Liberty Rural Learning Cooperative</h3>
                                </li>
                                
                                
                                
                            </ul>

                    </Partners>
                    <CommunityAdvisors>
                            <h2>Community Advisors</h2>
                            <ul>
                                <li>
                                    <h3>Debb Behrendsen</h3> <h4>Hollyhock House Creative Space & Kirk Post Office</h4>
                                </li>

                                <li>
                                    <h3>Amy Carbone</h3> <h4>Counselor and Therapist</h4>
                                </li>

                                <li>
                                    <h3>Christi Herrick</h3> <h4>Liberty School Board Member & Plains Co-Op</h4>
                                </li>

                                <li>
                                    <h3>Judy Hill</h3> <h4>Kirk United Methodist Church</h4>
                                </li>
                            </ul>
                    </CommunityAdvisors>

                    <Funders>
                    <h2>Funders</h2>
                            <ul>
                                <li>
                                    <h3>National Endowment for the Arts</h3> 
                                </li>

                                <li>
                                    <h3>Arts in Society</h3> 
                                </li>

                                <li>
                                    <h3>The Eugene Nelson Foundation</h3> 
                                </li>


                                <li>
                                    <h3>The Liberty Rural Learning Cooperative members</h3> 
                                </li>


                                <li>
                                    <h3>Lynn and David Gottmann</h3> 
                                </li>

                            </ul>
                    </Funders>
                </CreditsContainer>

        </>
    )
}

export default FundersPartners


const CreditsContainer = styled.div`

    li{
        list-style: none;
    }

    h2{
    font-family: diazo-mvb-ex-cond,sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 2rem;
    line-height: 1;
    }

    @media screen and (max-width: 650px){
    }
`

const CommunityAdvisors = styled.div`
    padding: 1.6187rem 3rem 3rem 3rem;
    border-bottom: 1px solid var(--black-text);

    @media screen and (max-width: 650px){
        padding: 1.6187rem 1.6187rem 3rem 1.6187rem;

    }
    
    h2{
        margin-bottom: 1rem;
    }

    h3{
        font-weight: 400;
    }

    h4{
        font-weight: 300;
        display: inline-block;
    }

    li{
        margin-bottom: .6187rem;
    }
`

const Funders = styled.div`
    padding: 1.6187rem 3rem 3rem 3rem;

    @media screen and (max-width: 650px){
        padding: 1.6187rem 1.6187rem 3rem 1.6187rem;

    }

    h2{
        margin-bottom: 1rem;
    }

    h3{
        font-weight: 400;
    }

    li{
        margin-bottom: .6187rem;
    }

`

const Partners = styled.div`
    padding: 1.6187rem 3rem 3rem 3rem;
    border-bottom: 1px solid var(--black-text);

    @media screen and (max-width: 650px){
        padding: 1.6187rem 1.6187rem 3rem 1.6187rem;

    }
    
    h2{
        margin-bottom: 1rem;
    }

    h3{
        font-weight: 400;
    }

    h4{
        font-weight: 300;
        display: inline-block;
    }

    li{
        margin-bottom: .6187rem;
    }

`

