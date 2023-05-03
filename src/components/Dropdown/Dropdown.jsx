import React, { Component } from 'react';

export class Dropdown extends Component {
  state = {
    isOnline: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      isOnline: !prevState.isOnline,
    }));
  };

  show = () => {
    this.setState({ isOnline: true });
  };

  hide = () => {
    this.setState({ isOnline: false });
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.toggle}>
          {this.state.isOnline ? 'Hide' : 'Show'}
        </button>

        {this.state.isOnline && (
          <ul>
            <li>
              <p>TPA</p>
            </li>
            <li>
              <p>Cappela</p>
            </li>
            <li>
              <p>Xian</p>
            </li>
          </ul>
        )}
      </div>
    );
  }
}
