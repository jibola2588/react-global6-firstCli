import React, { Component } from "react";

export default class EventListener extends Component {
  constructor() {
    super();
    this.state = {
      esther: true,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      esther: !prevState.esther
    }));
  }
  render() {
    return (
      <div>
        {this.state.esther && (
          <p className="text-center text-red-600">Modal is here</p>
        )}
        <button
          onClick={this.handleClick}
          className="mt-4 bg-blue-600  text-white py-2 px-4">
        {this.state.esther ? 'Hide modal':  'show modal'}
        </button>
      </div>
    );
  }
}
