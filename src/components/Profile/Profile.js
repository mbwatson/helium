import React from 'react'
import './Profile.scss'

const profile = ( props ) => {
    return (
        <div className="profile">
            { props.children }
            <h3>{ props.name }</h3>
        </div>
    )
}

export default profile