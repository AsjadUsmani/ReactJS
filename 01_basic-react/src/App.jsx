// import Asjad from "./Asjad";
import Card from './components/Card';
import Nav from './components/Nav';
import React, { useState } from 'react'

const App = () => {
  // const[name, setName] = useState("");
  // const submitHandle = (e) => {
  //   e.preventDefault();
  //   console.log(name);
  //   setName("");
  // const user = "Asjad"
  // }
  const users = [
  {
    "img": "https://randomuser.me/api/portraits/men/1.jpg",
    "name": "John",
    "surname": "Doe",
    "age": 28
  },
  {
    "img": "https://randomuser.me/api/portraits/women/2.jpg",
    "name": "Emily",
    "surname": "Smith",
    "age": 24
  },
  {
    "img": "https://randomuser.me/api/portraits/men/3.jpg",
    "name": "Michael",
    "surname": "Johnson",
    "age": 32
  },
  {
    "img": "https://randomuser.me/api/portraits/women/4.jpg",
    "name": "Sophia",
    "surname": "Williams",
    "age": 26
  },
  {
    "img": "https://randomuser.me/api/portraits/men/5.jpg",
    "name": "David",
    "surname": "Brown",
    "age": 30
  }
]

  return (
    <div>
      { /* <h1 className='bg-pink-500/10'>Number: {num}</h1>
      <button className="bg-purple-500 hover:bg-blue-500" onClick={() => setNum(num + 1)}>Increment</button>
      <button onClick={() => setNum(num - 1)}>Decrement</button> */}

      {/* <form className="flex justify-center items-center flex-col w-screen h-screen" onSubmit={submitHandle}>
        <input type="text" onChange={(e)=> {
          setName(e.target.value);
        }} 
        placeholder="Enter your name" value={name}
        className="block rounded text-2xl bg-white text-black"/>
        <button type="submit" className="px-2 bg-amber-500 py-1 font-bold text-2xl mt-10 rounded hover:bg-amber-300">Submit</button>
      </form> */}
      {users.map((elem, index) => {
        return <Card key={index} name={elem.name} age={elem.age} surname={elem.surname} imgsrc={elem.img}/>
      })}
    </div>
  )
}

export default App
