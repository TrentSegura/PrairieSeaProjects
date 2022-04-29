import React from 'react';
import styled from 'styled-components'
import ContactForm from './Contact';



const ContactModal = ({toggleModal}) => {
    return (
        <BG>
            <div className="contact-card">
                <ContactForm toggleModal={toggleModal}/>
            </div>
            
        </BG>
    )
}

export default ContactModal

const BG = styled.div`
    background: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 1000;

    .contact-card{
        left: 50%;
        top: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        width: 50%;
        min-width: 375px;    
        background: #fff;
        border-radius: 4px;
        padding: 2rem;
        width: clamp(300px, 50%, 500px);
        z-index: 1001;
        }
`