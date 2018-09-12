import React from 'react'
import './ContentBlock.scss'

const contentBlock = ( props ) => {
    return (
        <div className={ "content-block"}
            style={{ backgroundColor: `var(--color-${props.color})` }} >
            { props.children }
        </div>
    )
}

export default contentBlock
