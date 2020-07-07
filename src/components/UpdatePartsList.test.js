import React from 'react';
import ReactDOM from 'react-dom';
import UpdatePartsList from './UpdatePartsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UpdatePartsList />, div);
});