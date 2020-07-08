import React from 'react';

function UpdatePartsList(props) {

  return (
    <div>
      <button onClick={props.updatePrices} className="update-button">
        Update Parts List
      </button>
    </div>
    
  );
}

export default UpdatePartsList;