import React from 'react'
// Functional component

const Title = (props) => {
    console.log(props)
    return <h1> {props.name} !</h1>
}

export default Title