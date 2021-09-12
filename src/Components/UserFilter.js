import React from 'react';


function UserFilter(params) {
    const dropDownChangeHandler =(event) =>{
        params.onChangeFilter(event.target.value)
    }
  return (
    <div>
      <select value={params.selected} onChange={dropDownChangeHandler}>
        <option value="50">Below 50</option>
        <option value="70">Below 70</option>
        <option value="85">Below 85</option>
        <option value={101}>100</option>
      </select>
    </div>
  );
}

export default UserFilter;