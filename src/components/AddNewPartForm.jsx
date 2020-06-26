import React from 'react';

function AddNewPartForm(props) {

  if (props.isAddingPart === true) {
    return (
      <div>
        hi i'm a div-a
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
  
}

export default AddNewPartForm;