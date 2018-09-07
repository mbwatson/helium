import React from 'react'
import './Content.scss'

const content = ( props ) => {
    return (
        <div className="content">
            { props.children }
        </div>
    )
}

export default content
