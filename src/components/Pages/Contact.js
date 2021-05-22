import React, { Component } from 'react';
import Form from './Form';
import Info from './Info';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div>
                
                <div className='row t-gap' />

                <div className='row'>

                    <div className='col-lg-6 col-md-5'>

                        <div className='row'>

                            <div className='col-xl-4 col-lg-2 col-1' />

                            <Info />

                            <div className='col-xl-2 col-lg-1 col-1' />
                        
                        </div>

                    </div>

                    <div className='col-lg-6 col-md-7'>

                        <div className='row'>

                            <div className='col-lg-1 col-md-0 col-1' />

                            <Form />
                        
                        </div>

                    </div>

                </div>

                <div className='row b-gap' />

            </div>
        );
    }
}

export default Contact;
