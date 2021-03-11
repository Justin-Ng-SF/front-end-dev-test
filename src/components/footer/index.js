import React from 'react'

import './style.css';

function Footer(props) {
    return (
        <div className='footer'>
            Follow Us:
            <div className='footer-icons'>
                <a href={props.link}>
                    <img src={props.icon1} className='footer-icon'/>       
                </a>
                <a href={props.link}>
                    <img src={props.icon2} className='footer-icon'/>                    
                </a>
            </div>
        </div>
    )
}

export default Footer;