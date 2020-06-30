import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UpdatePartsList from './components/UpdatePartsList.jsx';
import AddNewPart from './components/AddNewPart';
import AddNewPartForm from './components/AddNewPartForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddingPart: true
    };
  }

  render() {
    return (
      <div className="main">
        <h1>Pricebender</h1>
        <div className="buttons-container">
          <UpdatePartsList />
          <AddNewPart />
        </div>
        <div className="content-container">
          <AddNewPartForm isAddingPart={this.state.isAddingPart} />
        </div>
      </div>
    );
  }
}

export default App;
