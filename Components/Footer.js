import React from 'react'
import './Footer.css';


const Footer = () => {
    return (

        <div class="footer">
        <footer>
            <hr></hr>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Phone</h3>
                        
                <a href="#">123-456-7890</a>
                        
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Email</h3>
                            <a href="mailto:info@mysite.com">info@mysite.com</a>
                    </div>
                    <div class="col-md-6 item text">
                    <p class="copyright">
© 2023 By Nicol Rider.</p>
                    </div>
                    
                </div>
                
            </div>
        </footer>
    </div>

    )
}

export default Footer