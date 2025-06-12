import { useContext, useState } from 'react'
import { userContext } from './context/UserContext'


function App() {

  return (
    <>
      <h1>My Name is {useContext(userContext)}</h1>
      <h2>hello</h2>
    </>
  )
}

export default App
