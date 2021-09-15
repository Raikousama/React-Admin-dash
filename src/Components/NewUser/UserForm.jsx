import { useState, useRef, useEffect } from "react";
const UserForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [password, setPassword] = useState("");
  const [marks, setMarks] = useState(50);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
     const validator = setTimeout(() =>{
        setFormValid(enteredTitle.trim().length > 1 && password.trim().length > 1);
      },500);
    
      return ()=>{
        clearTimeout(validator);
      }
  }, [enteredTitle, password]);

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
    // console.log(enteredName.current.value);
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
        <label htmlFor='nameText'>Name</label>
        <input type="text" onChange={titleChangeHandler} value={enteredTitle} id="nameText" />
      </div>
      <div>
        <label htmlFor='passText'>Password</label>
        <input
          type="password"
          onChange={passwordChangeHandler}
          value={password}
        id ="passText"/>
      </div>
      <div>
        <label>Marks</label>
        <input
          type="number"
          step="0.1"
          max="100"
          onChange={maarksChangeHAndler}
          value={marks}
        />
      </div>
      <div>
        <button type="submit" disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default UserForm;
