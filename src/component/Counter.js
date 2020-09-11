import React, { Component } from 'react'

class Counter extends Component{
    constructor(props){
        super(props)

        this.state = {count: 0}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({count: this.state.count + 1})
    }

    render(){
        return(
        <>
            <p>Has Clickeado {this.state.count} veces</p>
            <button onClick={this.handleClick}>Dar Click</button>
        </>
        );
    }
}

export default Counter