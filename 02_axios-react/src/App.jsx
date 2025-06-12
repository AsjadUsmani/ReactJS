import React, { useState } from 'react';
import axios from "axios";

const App = () => {
  const[response, setResponse] = useState('')
  const getAPI = () => {
  fetch("https://picsum.photos/200/300?grayscale")
    .then((res) => {
      setResponse(res); 
    })
    .catch((err) => {
      console.error("E: Error Occurred", err);
    });
    }
  return (
    <>
    <div id="button" className='w-screen h-screen text-center'>
      <button onClick={getAPI} className='p-10 m-auto  rounded bg-green-300'>GET DATA</button>
      <img src={response.url} className='w-100 h-fit ml-9 object-cover bg-green-500 text-black' />
    </div>    
    </>
  )
}

export default App
