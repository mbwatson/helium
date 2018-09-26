import React from 'react'

import './Submenu.scss'

const Submenu = ( props ) => {
    return (
        <div className="submenu">
            { props.children }
        </div>
    )
}

export default Submenu