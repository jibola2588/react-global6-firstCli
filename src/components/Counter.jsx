import React, { Component } from 'react';


export default class Counter extends Component {

    constructor(props){
        super(props);

        this.state ={
            count : 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState((prevState) =>({
            count : prevState.count + 5,
        }))
    }


  render() {
    return (
      <div>  
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={this.handleClick}
          className='bg-red-300 mt-2 text-sm px-4 py-2'
        >
          Click me
        </button>
      </div>
    )
  }
}

