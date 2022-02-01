import { LinearProgress } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import Skillimg from '../../images/Skill.jpg'
import "./Skillcontainer.css";

const Skillcontainer = () => {
    return (
        <Element className="Skillcontainer" id='Skill'>
            <div className="Skillcontainer__image">
                <img src={Skillimg} alt=""/>
            </div>
            <div className="Skillcontainer__text">
                <h2>SKILLSET</h2>
                <div className="Skillcontainer__Skillset">
                    <h2>React</h2>
                    <div className="Skillcontainer__Slider Skillcontainer__Slider1">
                        <LinearProgress variant="determinate" value={70}/>
                    </div>
                </div>
                <div className="Skillcontainer__Skillset">
                    <h2>HTML</h2>
                    <div className="Skillcontainer__Slider Skillcontainer__Slider2">
                        <LinearProgress variant="determinate" value={75}/>
                    </div>
                </div>
                <div className="Skillcontainer__Skillset">
                    <h2>CSS</h2>
                    <div className="Skillcontainer__Slider Skillcontainer__Slider3">
                        <LinearProgress variant="determinate" value={70}/>
                    </div>
                </div>
                <div className="Skillcontainer__Skillset">
                    <h2>Javascript</h2>
                    <div className="Skillcontainer__Slider Skillcontainer__Slider4">
                        <LinearProgress variant="determinate" value={60}/>
                    </div>
                </div>
                <div className="Skillcontainer__Skillset">
                    <h2>python</h2>
                    <div className="Skillcontainer__Slider Skillcontainer__Slider5">
                        <LinearProgress variant="determinate" value={60}/>
                    </div>
                </div>

            </div>
            
        </Element>
    )
}

export default Skillcontainer;
