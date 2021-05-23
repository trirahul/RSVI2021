import React, { Component } from 'react'
import './Resume.css'
class Resume extends Component {
    render() {
        return (
            <div>
                <div className="heading-custom">
                    <h1>Resume</h1>
                </div>
                <div className="row-custom">
                    <div className="col-4-custom">
                        <h2 className="section-heading">Work Experience</h2>
                    </div>
                    <div className="col-4-custom year">
                        <small className="year">2020 - Present</small>
                    </div>
                    <div className="col-4-custom para">
                            <small className="sub-heading">Editor</small>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    </div>
                </div>
                <div className="row-custom">
                    <div className="col-4-custom">
                    </div>
                    <div className="col-4-custom year">
                        <small className="year">2018 - 2020</small>
                    </div>
                    <div className="col-4-custom para">
                            <small className="sub-heading">Writer at Large</small>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    </div>
                </div>
                <div className="row-custom">
                    <div className="col-4-custom">
                    </div>
                    <div className="col-4-custom year">
                        <small className="year">2017 - 2018</small>
                    </div>
                    <div className="col-4-custom para">
                            <small className="sub-heading">Intern</small>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    </div>
                </div>
                <hr></hr>
                <div className="row-custom">
                    <div className="col-4-custom">
                        <h2 className="section-heading">Education</h2>
                    </div>
                    <div className="col-4-custom year">
                        <small className="year">2015 - 2017</small>
                    </div>
                    <div className="col-4-custom para">
                            <small className="sub-heading">Establishment Name | Master’s Degree</small>
                            <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                    </div>
                </div>
                <div className="row-custom">
                    <div className="col-4-custom">
                    </div>
                    <div className="col-4-custom year">
                        <small className="year">2012 - 2015</small>
                    </div>
                    <div className="col-4-custom para">
                            <small className="sub-heading">Establishment Name | Bachelor's Degree</small>
                            <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                    </div>
                </div>
                <hr></hr>
                <div className="row-custom">
                    <div className="col-4-custom">
                        <h2 className="section-heading">Skills &amp; Expertise</h2>
                    </div>
                    <div className="col-4-custom">
                    </div>
                    <div className="col-4-custom lists">
                        <ul>
                            <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                            <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                            <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                            <li>I'm a paragraph. Click here to add your own text and edit me.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume
