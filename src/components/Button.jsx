import { Component } from 'react'

export default class Button extends Component {
  render() {
    console.log(this.props)
    return (
      <button className='bg-red-500 text-white rounded p-3 text-sm '>
      {this.props.text}
      </button>
    )
  }
}
