import React from 'react';

function UpdatePartsList() {

  // TODO: refactor to render result
  let handleClick = () => {
    fetch('http://localhost:3000/database/updater')
    .then(
      (result) => {
        console.log('result after fetching updater:', result);
        if (result.status === 200) {
          alert('Parts List updated succcessfully');
        } else {
          alert('Update failed');
          console.log('error fetching updater:', result.statusText);
        }
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