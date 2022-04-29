import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const ScrollNav = () => {


    const [count, setCount] = useState(0)
    const [wrapperLength, setWrapperLength] = useState(0)

    const [position, setPosition] = useState(0)

    const [current, setCurrent] = useState(0)






    useEffect(() => {
        const wrapper = document.getElementById('wrapper')
        setCurrent(wrapper.children[count].clientWidth + 1)

       // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [count])



    function addCount(){
        setCount(count === wrapperLength - 4 ? 0 : count + 1)
        window.scrollTo((count > 7 ? 0 : position + current), 0)
        setPosition(position + current)

        if(count === 0){
            window.scrollTo(0,0)
            setCurrent(0)
        }
    }

    function subCount(){
        setCount(count === 0 ? wrapperLength - 3 : count - 1)
        window.scrollTo(position - current, 0)
        setPosition(position - current)
    }

    console.log(count, current)

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
        background: pink;
        opacity: .5;

    }

    #scroll-left{
        left: 0;
        width: 30px;
    }

    #scroll-right{
        right: 0;
        width: 200px;

    }
`