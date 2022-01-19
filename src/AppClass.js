import React, { Component } from 'react'

export default class AppClass extends Component {

  constructor (props) {
    super(props);

    // State object
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((previousState) => ({
      count: previousState.count = + 1,
    }));
  }

  decrement = () => {
    this.setState((previousState) => ({
      count: previousState.count = - 1,
    }));
  }

  render () {
    return (
      <div className="app-counter" >
        <h1>Welcome, Counter App Class-based</h1>
        <div className="counter">
          <p> Count: {this.state.count}</p>
          <button onClick={this.decrement}> - </button>
          <button onClick={this.increment}> + </button>
        </div>
      </div>
    )
  }
}
