import React from 'react'

const float = ( props ) => {
    const style = {
        float: 'none',
        margin: '2rem',
    }
    // Left or right
   if (props.left) {
        style.float = 'left'
        style.marginLeft = 0
    }
    if (props.right) {
        style.float = 'right'
        style.marginRight = 0
    }
    // Responsiveness
    return (
        <div style={ style }>
            { props.children }
        </div>
    )
}

export default float