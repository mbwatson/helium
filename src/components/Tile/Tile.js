import React from 'react'
import './Tile.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const tile = ( props ) => {
    return (
        <div className="tile">
            <div className="tile__icon "><FontAwesomeIcon icon={ props.icon } /></div>
            <div className="tile__label">{ props.title }</div>
            <div className="tile__body">{ props.body }
            </div>
        </div>
    )
}

export default tile