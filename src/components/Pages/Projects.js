import React from 'react'
import { img_1,img_2,img_3 } from '../../Images'
import './Projects.css'

function Projects() {
    return (
        <div>
            <div className="heading-custom">
                <h1>Projects</h1>
            </div>
            <div className="row-custom">
                <div className="col-6-custom project_content">
                    <h2>Project Name 01</h2>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
                <div className="col-6-custom project_img">
                    <img src={img_1} alt="Project-1"></img>
                </div>
            </div>
            <div className="row-custom">
                <div className="col-6-custom project_content">
                    <h2>Project Name 02</h2>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
                <div className="col-6-custom project_img">
                    <img src={img_2} alt="Project-1"></img>
                </div>
            </div>
            <div className="row-custom">
                <div className="col-6-custom project_content">
                    <h2>Project Name 03</h2>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
                <div className="col-6-custom project_img">
                    <img src={img_3} alt="Project-1"></img>
                </div>
            </div>
        </div>
    )
}

export default Projects
