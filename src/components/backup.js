import React, { useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import data from  '../data/call.json';



const Contact = () => {
  const[formState, setformState] = useState({});
  const ChangeHandler =(event)=>{
    setformState({...formState,[event.target.name]:event.target.value});
  }

  const submitHandler=(event)=>{
    event.preventDefault();
    const config ={
        Host : "smtp.elasticemail.com",
        Username : "yashsaresth@yopmail.com",
        Password : "DC5ED3974FB7FAB1CDE58F54A6820BE2DEFD",
    //   SecureToken : "141a41ef-ea3c-48c9-8bf7-775d3486e52e",
        To : 'yashsaresth@yopmail.com',
        From : formState.email,
        Subject : "This is the subject",
        Body : `${formState.name} conected to you over email`,
    };
    if(window.Email){
      window.Email.send(config).then(()=>{ 
        alert("email sent successfully")
      })
    }
  }
  return (
    <>
    <h1>CONTACT ME</h1>
      <div className="container contact" id="contact">
      <div className="right" data-aos="fade-up-right" data-aos-duration="1000">
        <img
                  src={`/assest/${data.imgSrc}`} 
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
        <form className="left" data-aos="fade-up-right" data-aos-duration="1000" >
          <p  className="format" >Enter your name</p>
         <input className="format3" type="name" name ="name" value={formState.name || ""} onChange={ChangeHandler} placeholder="Enter your name"/>
         <p className="format">Enter your Email</p>
         <input className="format3" type="email" name="email" value={formState.email || ""}  onChange={ChangeHandler} placeholder="Enter your email"/>
         <p className="format1">Enter the message</p>
         <input  className="format4" type="text" name="text" value={formState.text || ""} onChange={ChangeHandler} placeholder="Enter the message"/><br></br>
<button style ={{
marginTop :" 20px",
marginLeft :"100px",
width: "200px",
height:"40px",
borderRadius:"10px",

}} onSubmit={submitHandler}>Submit</button>

         
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