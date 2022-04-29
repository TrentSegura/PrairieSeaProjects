import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'

import arrow from '../assets/arrow.png'

const ScrollNav = () => {


    const [count, setCount] = useState(0)
     
    const containerWidth = useRef(0)




    useEffect(() => {
        const wrapper = document.getElementById('wrapper')
        containerWidth.current = wrapper.children[count].clientWidth + 1


       // eslint-disable-next-line react-hooks/exhaustive-deps 
    },)

  

    function addCount(){
        setCount(count === 8 ? 0 : prevCount => prevCount + 1)  
        window.scrollBy(containerWidth.current, 0)

        if(count === 8){
            window.scroll(0,0)
        }

    }

    function subCount(){
        window.scroll(0, 0)
        setCount(0)
    }

    

    return (
        <Nav id="scrolling-navigation">
            <section id='scroll-left'
            onClick={() => subCount()}
            
            />
            <section id='scroll-right'
            onClick={() => addCount()}
            />
        </Nav>
    )
}

export default ScrollNav

const Nav = styled.div`
    z-index: 1000;

    #scroll-right, 
    #scroll-left{
        position: fixed;
        top: 0;
        height: 100vh;

    }

    #scroll-left{
        left: 0;
        width: 30px;
        cursor: pointer;
    }

    #scroll-right{
        right: 0;
        width: 250px;
    }

    #scroll-right:hover{
        cursor: url(${arrow}), pointer;
    }
`
