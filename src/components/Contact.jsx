import React, { useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import data from  '../data/call.json';
import { useRef } from "react";
import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef()
  const[formState, setformState] = useState({});
  const ChangeHandler =(event)=>{
    setformState({...formState,[event.target.name]:event.target.value});
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fxrnepq', 'template_nxvw7mo', form.current, {
        publicKey: 'I8S3BC2P2pqbSSdB7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
    
  return (
    <>
    <h1>CONTACT ME</h1>
      <div className="container contact" id="contact">
      <div className="right" data-aos="fade-up-right" data-aos-duration="1000">
        <img
                  src={data.imgSrc} 
                  className="card-img-top"
                  alt="..."
                  style={{
                    width: "350px",
                    height: "350px",
                    border: "2px solid yellow",
                    borderRadius: "10px",
                    
                  }}
                />
        </div>
        <div >
        <form ref ={form} className="left" data-aos="fade-up-right" data-aos-duration="1000" onSubmit={sendEmail}>
          <p  className="format" >Enter your name</p>
         <input className="format3" type="name" name ='user_name'  onChange={ChangeHandler} placeholder="UserName"/>
         <p className="format">Enter your Email</p>
         <input className="format3" type="email" name='user_email'  onChange={ChangeHandler} placeholder="Email"/>
         <p className="format1">Enter the message</p>
         <input  className="format4" type="text" name="message"  onChange={ChangeHandler} placeholder="Enter the message"/><br></br>
<button style ={{
marginTop :" 20px",
marginLeft :"100px",
width: "200px",
height:"40px",
borderRadius:"10px",

}} >send message</button>

         
        </form>
        </div>

        </div>
        
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
         
          <a href="https://www.linkedin.com/in/yash-saresth-87971a239/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          
          <a href="https://github.com/YashSaresth" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:webdevmastery@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
     
    </>
  );
};

export default Contact;