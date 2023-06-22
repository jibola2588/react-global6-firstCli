import { Component } from 'react'

export default class Button extends Component {
  render() {
    const {text,color} = this.props
    return (
      <button className={`bg-${color}-500 text-white rounded p-3 text-sm`} >
      {text}
      </button>
    )
  }
}
