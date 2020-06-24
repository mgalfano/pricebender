// TODO: bug - updating database returns success message even though app isn't connected to the server.

import React from 'react';

function UpdatePartsList() {

  let handleClick = () => {
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

  return (
    <div>
        <button onClick={handleClick} className="update-button">
          Update Parts List
        </button>
    </div>
    
  );
}

export default UpdatePartsList;