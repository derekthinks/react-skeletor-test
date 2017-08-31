import React, { Component } from 'react';
import { createSkeletonProvider, createSkeletonElement } from '@trainline/react-skeletor';

const Div = createSkeletonElement('div', 'pending-home');

const Card = props => <Div>{props.description}</Div>;

class CardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.card.description,
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
        <Card description={this.state.description} />
        <input
          type="checkbox"
          onClick={this.handleCheck}
        /> Checkbox state is {this.state.checked ? 'checked' : 'unchecked'}
      </div>
    );
  }
}

const dummyData = {
  card: {
    description: '___ _____ __ __ _______ ____',
  },
};

const pendingPredicate = props => props.card === undefined;

export const Skeletor = createSkeletonProvider(dummyData, pendingPredicate)(CardPage);
