import React, { createContext } from 'react'
export const userContext = createContext();

const UserContext = (props) => {
    const username = "Asjad"
  return (
    <userContext.Provider value={username}>
        <div>
            {props.children}
        </div>
    </userContext.Provider>
  )
}

export default UserContext
