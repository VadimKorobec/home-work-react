import React, { Component } from 'react';

export class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };
  render() {
    return (
      <div>
        <h2>ColorPicker</h2>
        {this.props.colors.map(({ label, color }, index) => (
          <button
            key={label}
            style={{
              backgroundColor: color,
              marginRight: '5px',
              width: '40px',
              height: '40px',
              border:
                index === this.state.activeOptionIdx
                  ? '2px solid black'
                  : 'none',
            }}
          ></button>
        ))}
      </div>
    );
  }
}
