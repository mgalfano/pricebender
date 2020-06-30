import React from 'react';

function AddNewPartForm(props) {

  if (props.isAddingPart === true) {
    return (
      <div>
        <form>
          <label>
            URL:
            <input type="text"></input>
          </label>
          <br />
          <label>
            Vendor:
            <select>
              <option value="cdw">CDW</option>
              <option value="newegg">Newegg</option>
            </select>
          </label>
          <br />
          <label>
            Category:
            <select>
              <option value="cables">Cables</option>
            </select>
          </label>
        </form>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
  
}

export default AddNewPartForm;