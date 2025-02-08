import React from 'react'
import "./Expand_btn.css"

const Expand_btn = (props) => {
    return (
        <div className="expanding_btn" style={{"--box-style": props.style}}>
            <p>{props.text}</p>
        </div>
    )
}

export default Expand_btn