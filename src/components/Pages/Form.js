import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (

            <div className='col-lg-11 col-md-12 col-11'>

                <div className='row form'>

                    <div className='form-element mr-3'>
                        <label className='form-label'>
                            First Name
                        </label>
                        <input className='form-field'></input>
                    </div>


                    <div className='form-element'>
                        <label className='form-label'>
                            Last Name
                        </label>
                        <input className='form-field'></input>
                    </div>

                    <div className='form-element mr-3'>
                        <label className='form-label'>
                            Email
                        </label>
                        <input className='form-field'></input>
                    </div>

                    <div className='form-element'>
                        <label className='form-label'>
                            Subject
                        </label>
                        <input className='form-field'></input>
                    </div>

                    <div className='form-element mr-3'>
                        <label className='form-label'>
                            Message
                        </label>
                        <textarea className='form-textarea'></textarea>
                    </div>
                        
                    <button className='round-submit'>
                        <h5>
                            Submit
                        </h5>
                    </button>

                </div>

            </div>

        );
    }
}

export default Form;
