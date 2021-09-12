import { useState } from "react";
const UserForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [password, setPassword] = useState("");
  const [marks, setMarks] = useState(50);
  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }

  function maarksChangeHAndler(event) {
    setMarks(event.target.value);
  }

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: enteredTitle,
      password: password,
      marks: marks,
    };
    props.onSaveUserData(userData);
    setEnteredTitle("");
    setPassword("");
    setMarks("50");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name</label>
        <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          onChange={passwordChangeHandler}
          value={password}
        />
      </div>
      <div>
        <label>Marks</label>
        <input
          type="number"
          step="0.1"
          max = "100"
          onChange={maarksChangeHAndler}
          value={marks}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UserForm;
