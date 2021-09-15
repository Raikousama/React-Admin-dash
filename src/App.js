import Header from "./Components/Header";
import NewUser from "./Components/NewUser/NewUser";
import AdminItem from "./Components/AdminItem";
import { useState } from "react";
import UserFilter from "./Components/UserFilter";
const DUMMY_DATA = [
  {
    id: "1",
    name: "Pavan",
    password: "Moderator",
    marks: "67",
  },
  {
    id: "2",
    name: "adasd",
    password: "Moasdaderator",
    marks: "76",
  },
  {
    id: "3",
    name: "gfd",
    password: "wrqer",
    marks: "34",
  },
  {
    id: "4",
    name: "ngsdf",
    password: "asdfd",
    marks: "65",
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_DATA);
  const [userFilter, setFilter] = useState(100);
  // const [filteredUsers, setFilteredUsers] = useState('all');
  const createUserHandler = (newUserData) => {
    setUsers((prevUsers) => {
      return [newUserData, ...prevUsers];
    });
  };

  const filterChangeHandler = (filter) =>{
    setFilter(filter);
  }

  const filteredUsers = users.filter(x =>{
    return parseInt(x.marks) <= userFilter ;
  });
  return (
    <div className="App">
      <header className="App-header">
        <Header title={"Title"}></Header>
      </header>
      <UserFilter onChangeFilter = {filterChangeHandler} selected={userFilter}/>
      {filteredUsers.length === 0 ? <p>No User Found</p>: filteredUsers.map((x) => ( 
        <AdminItem key={x.id} items={x} />
        ))}
      

      <NewUser onFormSubmit={createUserHandler} />
    </div>
  );
}

export default App;
