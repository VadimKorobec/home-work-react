import React, { Component } from 'react';
import { Decrement, Increment, Sum } from './Counter.styled';

export class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
    console.log(this.setState({ value: +this.props.step }));
  };

  handleDecrement = () => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <Increment type="button" onClick={this.handleIncrement}>
          Increment by{step}
        </Increment>
        <Sum>0</Sum>
        <Decrement type="button" onClick={this.handleDecrement}>
          Decrement by{step}
        </Decrement>
      </div>
    );
  }
}
