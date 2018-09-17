import React from 'react'
import './Demo.scss'

const demo = ( props ) => {
    return (
        <div className="demo">
            <h2>{ props.title }</h2>
            <p>{ props.body }</p>
        </div>
    )
}

export default demo