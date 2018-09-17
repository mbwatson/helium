import React from 'react'
import './Avatar.scss'

const avatar = ( props ) => {
    return (
        <div className="avatar-container">
            <img src={ props.src } alt="Avatar" className={ "avatar__image " + props.size } />
        </div>
    )
}

export default avatar
