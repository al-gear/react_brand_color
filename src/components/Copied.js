import React from 'react'
import { getContrast } from '../helpers'

const Copied = ({ color }) => {
    return (
        <div className="copied" style={{ "--bgColor": `#${color}`, "--textColor": `${getContrast(color)}` }}>
            Copied  #{color} to clipboard
        </div>
    )
}

export default Copied
