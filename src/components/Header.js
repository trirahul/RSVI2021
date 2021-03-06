import React,{useState} from 'react';
import './Header.css';

function Header(props) {
    const [click, setClick] = useState(false)
    
    const handleClick = () =>setClick(!click);
    
    return ( 
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo" onClick={props.clickHome}>
                        <small className="yellow-circle"></small>Nicol Rider<button className="editor-button">Editor</button>
                    </div>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <div className="nav-links" onClick={props.clickResume}>
                                Resume
                            </div>
                        </li>
                        <li className='nav-item'>
                            <div to="/" className="nav-links" onClick={props.clickProjects}>
                                Projects
                            </div>
                        </li>
                        <li className='nav-item'>
                            <div to="/" className="nav-links" onClick={props.clickContact}>
                                Contact
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>        
        </div>
    )
}

export default Header;
