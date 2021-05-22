import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div className='top-gap' />
                <div className='row'>
                    <div className='col-md-6 image-box' >
                        <img src='https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_630,h_630,al_c,q_85,usm_0.66_1.00_0.01/gettyimages-1284121212-2048x2048_edited_.webp'
                        class='round-image'/>
                    </div>
                    <div className='col-md-6'>
                        <div className='row text-box text'>
                            <h1>
                                Hello
                            </h1>
                        </div>
                        <div className='row text-box text'>
                            <h3>
                                A Bit About Me
                            </h3>
                        </div>
                        <div className='row text-box text'>
                            <p>
                            I'm a paragraph. Click here to add <br/>
                            your own text and edit me. I’m a <br/>
                            great place for you to tell a story and <br/>
                            let your users know a little more about you.
                            </p>
                        </div>
                        <div className='row text-box'>
                        <button className='round-resume' onClick={this.props.clickResume}>
                            <h5>
                                Resume
                            </h5>
                        </button>
                        <button className='round-projects' onClick={this.props.clickProjects}>
                            <h5>
                                Projects
                            </h5>
                        </button>
                        <button className='round-contact' onClick={this.props.clickContact}>
                            <h5>
                                Contacts
                            </h5>
                        </button>
                        </div>
                    </div>
                </div>
                <div className='bottom-gap' />
            </div>
        );
    }
}

export default Home;
