import React from 'react'
import heroBackground from '../../images/timelapse-stars.jpg'
import './Hero.scss'

const hero = ( props ) => {
    const style = {
        backgroundImage: 'url(' + heroBackground + ')'
    }
    return (
        <div className="hero" style={ style }>
            <h1>Helium</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque debitis eligendi illo ipsum deleniti nam velit, est in expedita id, neque fuga, esse qui dolorem eveniet sed sapiente natus obcaecati.</p>
        </div>
    )
}

export default hero
