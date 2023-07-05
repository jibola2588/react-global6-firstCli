import React, { Component } from 'react'

export default class EventListener extends Component {
  constructor(){
    super()
    this.state = {
      esther : true
    }
  }

  handleClick(){
    this.setState({
      esther: false
    })
  }
  render() {
    return (
      <div>
        {this.state.esther  &&  <p className='text-center text-red-600'>Modal is here</p> }
        <button 
        onClick={this.handleClick()}
        className='mt-4 bg-blue-600  text-white py-2 px-4'>hide modal</button>
      </div>
    )
  }
}
