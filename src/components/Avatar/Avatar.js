import React from 'react'
import './Avatar.scss'

const avatar = ( props ) => {
    return (
        <div className="AvatarContainer">
            <img
                src={ props.src }
                alt="Avatar"
                className={ "Avatar__image " + props.size }
            />
        </div>
    )
}

export default avatar
