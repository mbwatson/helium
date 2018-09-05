import React from 'react'
import './Tile.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const tile = ( props ) => {
    return (
        <div className="tile">
            <div className="tile__icon" style={{ color: props.color, opacity: 0.25 }}><FontAwesomeIcon icon={ props.icon } /></div>
            <div className="tile__label">{ props.title }</div>
            <div className="tile__body">{ props.body }
                <a href={ props.linkHref } className="tile__link">{ props.linkText }</a>
            </div>
        </div>
    )
}

export default tile