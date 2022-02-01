import { Facebook, Instagram,LinkedIn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import './Contact.css';


const Contact = () => {
    return (
        <Element className="Contact" id="contact">
            <h1>Contact</h1>
            <div className="Contact__container">
                <p>
                    Email:<span>venkatkgs006@gmail.com</span>
                </p>
                <p>
                    Github Username:<span>venkatesh-006</span>
                </p>
                <div className="Contact__icons">
                    <a href="https://www.facebook.com/venkat.acm">
                        <IconButton>
                            <Facebook/>
                        </IconButton>
                    </a>
                    <a href="https://linkedin.com/in/k-venkatesh-5b6703200">
                        <IconButton>
                            <LinkedIn/>
                        </IconButton>
                    </a>
                    <a href="https://www.instagram.com/venkat.acm">
                        <IconButton>
                            <Instagram/>
                        </IconButton>
                    </a>

                </div>

            </div>

        </Element>
    )
}

export default Contact
