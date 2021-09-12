import React, { useState } from "react";

function AdminItem(prop) {
  const [title, setTitle] = useState(prop.items.name);

  // const clickHandler = () => {
  //   setTitle("test");
  //   setMarks("50");
  // };
  const [marks, setMarks] = useState(prop.items.marks);
  // const [filter, setFilter] = useState(prop.userFilter);


  return (
    <div>
      <div>{title} </div>
      <div>{marks} </div>
      {/* <button onClick={clickHandler}>Update</button> */}
    </div>
  );
}

export default AdminItem;
