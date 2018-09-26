import React from 'react'
import heroBackground from '../../images/timelapse-stars.jpg'
import './Hero.scss'

const hero = ( props ) => {
    const style = {
        backgroundImage: 'url(' + heroBackground + ')'
    }
    return (
        <div className="hero" style={ style }>
            <h1>{ props.heading }</h1>
            <p>{ props.subheading }</p>
        </div>
    )
}

export default hero
