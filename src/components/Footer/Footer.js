import React from 'react'
import './footer.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dcppcLogo from '../../images/dcppc-logo.svg'

const footer = ( props ) => {
    return (
        <footer>
            <div className="footer__box">
                <a href="https://nihdatacommons.us/" target="_blank" rel="noopener noreferrer">
                    <img src={ dcppcLogo } alt="DCPPC Logo" />
                </a>
            </div>
            <div className="footer__box">
                View our Documentation on
                <a href="https://github.com/dcppc/dcppc-phase1-demos/blob/master/demo-list.rst" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ ['fab', 'github'] } /> GitHub</a>
            </div>
        </footer>
    )
}

export default footer