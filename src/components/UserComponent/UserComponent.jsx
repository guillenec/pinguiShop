import React from 'react'

const UserComponent = ({ user }) => {

  if (!user) {
    return <h1> logiarse</h1>
  
  }  
  
  return ( 
    <h1> desloguiarse </h1> 
  )

}

export default UserComponent