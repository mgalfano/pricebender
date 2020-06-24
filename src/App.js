import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UpdatePartsList from './components/UpdatePartsList.jsx';

class App extends React.Component {

  render() {
    return (
      <div className="main">
        <h1>Pricebender</h1>
        <UpdatePartsList />
      </div>
    );
  }
}

export default App;
