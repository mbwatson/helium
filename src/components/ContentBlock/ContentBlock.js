import React from 'react'
import './ContentBlock.scss'

const contentBlock = ( props ) => {
    return (
        <div className={ "content-block " + props.color }>
            { props.children }
        </div>
    )
}

export default contentBlock
