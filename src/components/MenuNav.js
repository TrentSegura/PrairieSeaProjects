import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const navData = [
    {
        id: 1,
        title: "Upcoming Events"

    },

    {
        id: 2,
        title: "Prarie Futures"

    },

    {
        id: 3,
        title: "Associated Programs"

    },
    
    {   
        id: 4,
        title: "Prarie Futures Writings"

    },

    {
        id: 5,
        title: "High Plains Sounds"
    },

    {
        id: 6,
        title: "Research Images"

    },

    {
        id: 7,
        title: "Artistic Team"

    },


    {
        id: 8,
        title: "Cultural Center"

    },


]




const MenuNav = () => {

    const [scrollDistance, setScrollDistance] = useState(0)



    // useEffect(() =>{
    //     var children = document.getElementById('wrapper').children;
    //     var totalWidth = 0;

    //     for (var i = 0; i < children.length; i++) {
    //         totalWidth = children[i].offsetWidth;

            
    // }
    // }, [])


    useEffect(() =>{

        const distanceScroll = document.getElementById('psp-intro').clientWidth
       
        setScrollDistance(distanceScroll + 1)
     
    },[])


    const scrollRight = () => {
        window.scrollTo(scrollDistance, 0)

    }


    return (
        <Nav>
            
            {navData.map((item, index) =>(
                    <NavItem key={index} onClick={() => scrollRight()}>
                            <p>{item.title}</p>
                    </NavItem>    
                
            ))}
        </Nav>
    )
}

export default MenuNav

const Nav = styled.ul`
    margin-top: 1.6187rem;

`

const NavItem = styled.li`
    padding: 2rem 1.6187rem;
    border-top: 1px solid var(--black-text);
    cursor: pointer;

    :hover{
        background-color: var(--light-blue);
    }

`