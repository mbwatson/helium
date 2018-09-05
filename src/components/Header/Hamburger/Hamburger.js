import React from 'react'
import './Hamburger.scss'

const hamburger = ( props ) => {
    return (
        <div className="hamburger" onClick={ props.clickEvent }>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default hamburger