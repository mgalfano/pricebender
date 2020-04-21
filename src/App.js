import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  handleClick = () => {
    fetch('http://localhost:3000/database/updater')
    .then(
      (result) => {
        alert('Parts List updated succcessfully');
      },
      (error) => {
        console.log('error fetching updater:', error);
      }
    )
  }

  render() {
    return (
      <div className="main">
        <h1>Pricebender</h1>
        <button onClick={this.handleClick} className="update-button">
          Update Parts List
        </button>
      </div>
    );
  }
}

export default App;
