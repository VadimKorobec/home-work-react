import React, { Component } from 'react';

export class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  handleIncrement = event => {
    console.log('increment button was clicked ', event);
    console.log('this.props', this.props);
  };

  handleDecrement = event => {
    console.log('Decrement dutton was clicked', event);
    console.log('this.props', this.props);
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <button type="button" onClick={this.handleIncrement}>
          Increment by{step}
        </button>
        <span>0</span>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by{step}
        </button>
      </div>
    );
  }
}
