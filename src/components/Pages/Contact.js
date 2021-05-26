import ReactDOM from 'react-dom';
import React, { useEffect, useState } from "react";
import validator from 'validator';

function ContactDetails() {
  return (
    <div className = "container">
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

function Form(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [emailBoxColor, setEmailBoxColor] = useState("");
  const [submit,setSubmit] = useState("");
  const handleFname = (event) => {                     //arrow functions always need a return type here
    setFname(event.target.value);
  }
  const handleLname = (event) => {                     
    setLname(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const handleEmail = (event) => {
    var email = event.target.value;
    setEmail(event.target.value);
    if (validator.isEmail(email) || email == null) {
      setEmailBoxColor("");
    } else {
      setEmailBoxColor("red");
    }
  }
  const onSubmit = (event) => {
    var email = document.getElementById("email").getAttribute("value").toString();
    if (validator.isEmail(email) || email == null) {
                                                      //submit data
    } else {
      alert("Enter correct email");
    }
  }
  return(
    <form onSubmit = {handleSubmit}>
      <br/>
        <div className="container">
          <div className="row d-flex flex-row-reverse">
            <div className="col-4 col-md-4 p-2">
            Last Name
            <br/>
              <input type = "text" placeholder = "Last Name" className = "col"/>
            </div>
            <div className="col-4 col-md-4 p-2">
            First Name
            <br/>
              <input type = "text" placeholder = "First Name" />
            </div>
          </div>
          <div className="row d-flex flex-row-reverse">
                <div className="col-4 col-md-4 p-2">Email*<br/>
                  <input id = "email" type = "text" style = {{borderColor: emailBoxColor}} placeholder = "Email" onChange = {handleEmail} value = {email}/>
                </div>
                <div className="col-4 col-md-4 p-2">
                Subject
                <br/>
                  <input type = "text" placeholder = "Subject" />
                </div>
          </div>
          <br/>
          <br/>
          <br/>
          <div className="row d-flex flex-row-reverse">
            <div className="col-4 col-md-4 p-2 top-buffer">
              <button type="submit" class="btn btn-warning btn-circle btn-xl align-top" onClick = {onSubmit}>Submit</button>
            </div>
            <div className="col-4 col-md-4 p-2">Message<br/>
              <input type = "text" placeholder = "Message" className = "p-5"/>
            </div>
          </div> 
        </div>
    </form>
  );
}

function App() {

    const [color,setColor]=useState('red');
  const [textColor,setTextColor]=useState('white');
  return (
    <React.Fragment>
      <div><ContactDetails/></div>
      <div><Form/></div>
    </React.Fragment>
  );
}

export default App;
