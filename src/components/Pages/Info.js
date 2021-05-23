import React, { Component } from 'react';

class Info extends Component {
    render() {
        return (

            <div className='col-xl-6 col-lg-9 col-10 info'>

                <h2>Contact</h2>
                <p>Looking forward to hearing from you</p>

                <h5 className='mt-4'>Phone</h5>
                <p>123-456-7890</p>
                
                <h5 className='mt-4'>Email</h5>
                <p>info@mysite.com</p>

            </div>

        );
    }
}

export default Info;
