import React from 'react';
import ReactDOM from 'react-dom';
import AddNewPartForm from './AddNewPartForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddNewPartForm />, div);
});