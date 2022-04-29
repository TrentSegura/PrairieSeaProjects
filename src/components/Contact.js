import React from "react";
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import { VscClose } from "react-icons/vsc";

const ContactForm = ({toggleModal}) => {

  // const [data, setData] = useState({
  //   name: 'Name',
  //   email: 'Email',
  //   message: 'Send us a note!'
  // })

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_9ntl5w6', 'template_jtjddaa', e.target, 'user_lLvwQ45aQV8tNOXMvKE8u')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent')
          toggleModal()
      }, (error) => {
          console.log(error.text);
      });

      
  }

  return (
    <Container>
      <button onClick={toggleModal}><VscClose/></button>
      <div>
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={sendEmail}>

          <label>Name</label>
          <input type="text" name="user_name"  required autoComplete="off"/>
          
          <label>Email Address</label>
          <input type="email" name="user_email" required autoComplete="off"/>
          
          <label>Message</label>
          <textarea name="message" rows="10"/>
          <input type="submit" value="Send" />
        </form>
      </div>
    </Container>

  );
};

export default ContactForm;

const Container = styled.div`
   background: #fff;


    h1{
        font-family: diazo-mvb-ex-cond,sans-serif;
        font-weight: 300;
        font-style: normal;
        font-size: 2rem;
    }

    form{
      display: flex;
      flex-direction: column;
      /* max-width: 100%; */
    }

    label{
        /* display: none; */
        margin-top: 1.6187rem;
        margin-bottom: .6187rem;
        font-weight: 400;

    }

    textarea{
        border: none;
        background-color: transparent;
        max-width: 100%;
        background: #f1f1f1;
        padding: .6187rem
    }

    input{
      background-color: transparent;
      border: none;
      border-bottom: 1px solid var(--black-text);

    }

    input[type="submit"]{
      width: 100px;
      margin-top: 1rem;
      border: 1px solid var(--black-text);
      padding: .6187rem;
      cursor: pointer;

    }

    input[type="submit"]:hover{
      background: var(--black-text);
      color: #fff;
    }

    input[type="submit"]:active{
      transform: scale(0.9);
    }

    input:focus, textarea:focus, select:focus{
        outline: none;
    }

    button{
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: transparent;
      border: none;
      cursor: pointer;
    }
`;
