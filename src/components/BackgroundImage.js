import React from 'react';
import mobileBgDark from '../images/bg-mobile-dark.jpg';
import mobileBgLight from '../images/bg-mobile-light.jpg';
import desktopBgDark from '../images/bg-desktop-dark.jpg';
import desktopBgLight from '../images/bg-desktop-light.jpg';


const BackgroundImage = ({ darkTheme }) => {

    return (
        <div style={{width: '100%'}}>
            <picture>
                <source srcset={!darkTheme ? mobileBgLight : mobileBgDark} media="(max-width: 650px)" />
                <img className='bg-image' src={!darkTheme ? desktopBgLight : desktopBgDark} alt='background'/>
            </picture>
        </div>
    )
}

export default BackgroundImage