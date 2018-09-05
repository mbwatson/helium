import React from 'react'
import './footer.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import dcppcLogo from '../../images/dcppc-logo.svg'

const footer = ( props ) => {
    return (
        <footer>
            <div className="footer__box">
                <a href="#">
                    <img src={ dcppcLogo } alt="DCPPC Logo" />
                </a>
            </div>
            <div className="footer__box">
                <a href="#"><FontAwesomeIcon icon={ ['fab', 'github'] } /> GitHub</a>
            </div>
        </footer>
    )
}

export default footer