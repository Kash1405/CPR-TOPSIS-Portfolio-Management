import React from 'react'

function About(props) {
    return (
        <div>
            <p className='font-bold mb-2'>About</p>
            <p>{props.text}</p>
        </div>
    )
}

export default About