import React from 'react';

function StatusMessage(props) {
  if (props.currentStatus.updateSuccess === true) {
    return (<div>Parts List updated succcessfully</div>);
  } else if (props.currentStatus.updateSuccess === false) {
    return (<div>Update failed</div>);
  } else {
    return (
      <div></div>
    );
  }

}

export default StatusMessage;