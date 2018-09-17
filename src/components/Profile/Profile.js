import React from 'react'
import Avatar from './Avatar/Avatar'
import './Profile.scss'

const profile = ( props ) => {
    return (
        <div className="profile">
            <Avatar src={ props.avatar } />
            <div className="profile__details">
                <h2 className="profile__details__name">{ props.name }</h2>
                { props.children }
            </div>
        </div>
    )
}

export default profile