import React from 'react'
import { RiChat1Line } from 'react-icons/ri';
import { INTRO_PARAGRAPH } from '../../constants/introParagraph';


function IntroComponent() {
    return (
        <div className="intro" id='Home'>
            <div className="introText">
                <h2>
                    <span>   We are </span> <span>  Creative agency</span>
                </h2>
                {INTRO_PARAGRAPH}
                <div className="inputGroup">
                    <input type="text" placeholder='Email or Phone' />
                    <button>  <RiChat1Line /> Get A Quote </button>
                </div>
            </div>
            <div className="introImage">
                <img src="../lightBulb.png" alt="" />
                <img src="../bulbShadow.png" alt="" />
            </div>
        </div>
    )
}

export default IntroComponent