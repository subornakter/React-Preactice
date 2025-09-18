import "./App.css";

import Users from "./Users"
import User from "./User"
import { useState } from "react";
function App() {
  const person = {
    name: "Jakariya",
    age: 56,
    team: "L1",
    isRegular: true
  };
  const student={
    name: "Suborna Akter",
    age: 22,
    team: "Programming hero",

  }
  const handleLogin =()=>{
    alert("click")
  }
  // const handleCount=(value)=>{
  //   let count=0;
  //   count=count+value;
  //   console.log(count);

  // }
  const [count,setCount]=useState(0);
  const handleCounter=()=>{
    setCount(count+1)

  }
   const fatchUrl='https://fake-json-api.mock.beeceptor.com/users'
   

  return (
    <>
      <h1>Hello {person.name} {person.age}</h1>
      <h1 className="text-red-500" >{count}</h1>
      <button onClick={handleLogin}>Login</button><br></br>
      <button onClick={handleCounter}>Increase</button>
      <Users 
      person ={person} user={student}
      ></Users>
      <User></User>
    </>
  );
}

export default App;
