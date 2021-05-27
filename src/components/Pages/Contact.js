import ReactDOM from 'react-dom';
import React, { useEffect, useState } from "react";       // to be used for hooks
import validator from 'validator';                        // to be used to validate email
import { Helmet } from "react-helmet";                    // to use for page title
// page title
const TITLE = 'Contact us';        

// Contact Component
function ContactDetails() {                               
  return (
    <div className = "container">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className = "float-start">
        <h1>CONTACT</h1>
        <p>Looking forward to hearing from you
        <br/>
        <br/>
        <b>Phone</b>
        <br/>
        123-456-7890
        <br/>
        <br/>
        <b>Email</b>
        <br/>
        info@mysite.com
        </p>
      </div>
    </div>
  );
}

// Form Component
function Form(props) {
// declaring state variables & functionsto modify them 
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [msg, setMsg] = useState("");                
  const [sub,setSub] = useState("");
  const [email, setEmail] = useState("");              // Email Settings
  const [emailBoxColor, setEmailBoxColor] = useState("");
  const [submit,setSubmit] = useState("");
/*
 * Associated Functions below
 */

// arrow functions always need a return type here
  const handleFname = (event) => {                     
    setFname(event.target.value);
  }
  const handleLname = (event) => {                     
    setLname(event.target.value);
  }
  const handleSub = (event) => {                     
    setSub(event.target.value);
  }
  const handleMsg = (event) => {                     
    setMsg(event.target.value);
  }
// To handle email
  const handleEmail = (event) => {
    var email = event.target.value;
    setEmail(event.target.value);
    if (validator.isEmail(email) || email == null) {
// if valid email do nothing
      setEmailBoxColor("");
    } else {
// if email is wrong, change border color to red
      setEmailBoxColor("red");
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
    var email = document
                .getElementById("email")
                .getAttribute("value");
    if (validator.isEmail(email) || email == null) {
      
    } else {
// If wrong email entered raise an alert 
      alert("Please enter correct email");
    }
  }
  return(
    <form onSubmit = {onSubmit}>
      <br/>
        <div className = "container">
          <div className = "row d-flex flex-row-reverse">
            <div className="col-4 col-md-4 p-2">
            Last Name
            <br/>
              <input type = "text" placeholder = "Last Name" onChange = {handleLname}/>
            </div>
            <div className="col-4 col-md-4 p-2">
            First Name
            <br/>
              <input type = "text" placeholder = "First Name" onChange = {handleFname}/>
            </div>
          </div>
          <div className = "row d-flex flex-row-reverse">
                <div className = "col-4 col-md-4 p-2">Email*<br/>
                  <input id = "email" type = "text" style = {{borderColor: emailBoxColor}} placeholder = "Email" onChange = {handleEmail} value = {email}/>
                </div>
                <div className = "col-4 col-md-4 p-2">
                Subject
                <br/>
                  <input type = "text" placeholder = "Subject" onChange = {handleSub} value = {sub}/>
                </div>
          </div>
          <br/>
          <br/>
          <br/>
          <div className = "row d-flex flex-row-reverse">
            <div className = "col-4 col-md-4 p-2 top-buffer">
              <button type = "submit" className = "btn btn-warning btn-circle btn-xl align-top" >Submit</button>
            </div>
            <div className = "col-4 col-md-4 p-2">Message<br/>
              <textarea rows = "7" cols = "35" placeholder = "Message" onChange = {handleMsg} value = {msg}></textarea>
            </div>
          </div> 
        </div>
    </form>
  );
}

function Contact() {
  return (
    <React.Fragment>
      <div><ContactDetails/></div>
      <div><Form/></div>
    </React.Fragment>
  );
}

export default Contact;
