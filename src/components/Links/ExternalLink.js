import React from 'react'

const ExternalLink = ( props ) => {
    return (
        <a href={ props.to }
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
        >
            { props.children }
        </a>
    )
}

export default ExternalLink