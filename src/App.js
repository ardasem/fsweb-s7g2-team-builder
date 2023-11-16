import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

 

  return (
    <div className="App">
      <Form addUser={addUser} />
      <div>{users.map((user)=>{
        return <div>{user.name}
        {user.surname}
        {user.age}
  
        </div>
      })}</div>
    </div>
  );
}

export default App;
