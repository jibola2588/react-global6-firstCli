import { Component } from 'react'

export default class Button extends Component {
  render() {
    // console.log(this.props)
    const { text , color} = this.props
    return (
      <button className={`bg-${color}-900 text-white rounded p-3 text-sm `}>
      {text}
      </button>
    )
  }
}
