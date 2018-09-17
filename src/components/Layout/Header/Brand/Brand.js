import React from 'react'

const brand = ( props ) => {
    return (
        <svg width="125px" height="75px" viewBox="0 0 125 100">
            <g id="helium-atom">
                <circle className="circle" cx="20" cy="50" r="35" stroke="var(--color-helium)" fill="transparent" strokeWidth="1"></circle>
                <circle className="circle" cx="-15" cy="50" r="6" fill="var(--color-sky)" stroke="transparent"></circle>
                <circle className="circle" cx="55" cy="50" r="6" fill="var(--color-sky)" stroke="transparent"></circle>
                <animateTransform attributeName="transform" attributeType="XML"
                    type="rotate" from="0 20 50" to="180 20 50"
                    begin="0s" dur="10s" repeatCount="indefinite"/>
            </g>
            <text x="20" y="97" className="brand-text" fill="var(--color-helium)">He</text>
            <circle className="circle" cx="20" cy="50" r="10" fill="var(--color-sky)" stroke="transparent"></circle>
        </svg>
    )
}

export default brand