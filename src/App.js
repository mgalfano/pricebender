import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UpdatePartsList from './components/UpdatePartsList.jsx';
import AddNewPart from './components/AddNewPart';

class App extends React.Component {

  render() {
    return (
      <div className="main">
        <h1>Pricebender</h1>
        <div className="buttons-container">
          <UpdatePartsList />
          <AddNewPart />
        </div>
      </div>
    );
  }
}

export default App;
