import React from 'react';
import ReactDOM from 'react-dom';
import AddNewPart from './AddNewPart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddNewPart />, div);
});