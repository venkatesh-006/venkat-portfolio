import React from 'react'
import { Element } from 'react-scroll'
import Skillimg from '../../images/Projects.webp'
import "./Projectscontainer.css";

const Projectscontainer = () => {
    return (
        <Element className="Projectscontainer" id="Projects">
            <div className="Skillcontainer__image">
                <img src={Skillimg} alt=""/>
            </div>
            <div className="Projectscontainer__text">
                <h1><span>TITLE</span>:Prediction based crop yield system using machinelearning</h1>
                <br></br>
                <h1><span>DESCRIPTION</span>:To provide a knowledge to the farmers for better growth in production</h1>

            </div>

        </Element>

    )
}

export default Projectscontainer
