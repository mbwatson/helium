import React from 'react'
import { Link } from 'react-router-dom'

const TextLink = ( props ) => {
    return (
        <Link { ...props } className="text-link" />
    )
}

export default TextLink