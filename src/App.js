import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UpdatePartsList from './components/UpdatePartsList.jsx';
import AddNewPart from './components/AddNewPart';
import AddNewPartForm from './components/AddNewPartForm';
import StatusMessage from './components/StatusMessage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddingPart: false,
      isUpdatingList: false,
    };
    this.updatePrices = this.updatePrices.bind(this);
  }

  updatePrices() {
    fetch('http://localhost:3000/database/updater')
    .then(
      (result) => {
        console.log('result after fetching updater:', result);
        if (result.status === 200) {
          this.setState({updateSuccess: true});
        } else {
          // should this be under .catch instead?
          this.setState({updateSuccess: false});
          console.log('error fetching updater:', result.statusText);
        }
      }
    )
  }

  render() {
    return (
      <div className="main">
        <h1>Pricebender</h1>
        <div className="buttons-container">
          <UpdatePartsList 
            updatePrices={this.updatePrices}
          />
          <AddNewPart />
        </div>
        <div className="message-container">
          <StatusMessage currentStatus={this.state} />
        </div>
        <div className="content-container">
          <AddNewPartForm isAddingPart={this.state.isAddingPart} />
        </div>
      </div>
    );
  }
}

export default App;
