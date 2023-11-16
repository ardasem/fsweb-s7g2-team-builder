import React, { useState } from "react";

function Form({addUser}) {
  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    age: 0,
  });

  const changeHandler = (e) => {
    const {name, value} = e.target;
   
    setFormState({...formState,
        [name]:value
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addUser(formState);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="name" onChange={changeHandler} />
      <input type="text" name="surname" onChange={changeHandler} />
      <input type="text" name="age" onChange={changeHandler} />
      <button>click me!</button>
    </form>
  );
}

export default Form;
