import React, { Component } from 'react';
import { Skeletor } from './Skeletor';

export class CardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          onClick={this.handleCheck}
        /> Checkbox state is {this.state.checked ? 'checked' : 'unchecked'}
        <Skeletor card={this.state.checked} />
      </div>
    );
  }
}
