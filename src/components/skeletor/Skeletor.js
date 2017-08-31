import React from 'react';
import { createSkeletonProvider, createSkeletonElement } from '@trainline/react-skeletor';

const Div = createSkeletonElement('div', 'pending-home');

const Card = props => <Div>{props.card.description}</Div>;

const dummyData = {
  card: {
    description: '___ _____ __ __ _______ ____',
  },
};

const pendingPredicate = props => {
  window.console.log(props.card);
  return props.card === false;
};

export const Skeletor = createSkeletonProvider(dummyData, pendingPredicate)(Card);
