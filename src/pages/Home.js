import React, { Component} from 'react'
import Title from '../component/Title'

class Home extends Component{
    constructor(){
        super()
        this.state = {
            title: 'Welcome to Tatvasoft Internship',
            description: 'Learning ReactJS'
        };
    }

    render(){
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h1>{this.state.description}</h1>
            </div>
        )
    }
}

export default Home