import React, { useState } from 'react';
import UserForm from './components/users/UserForm';
import UserList from './components/users/UserList';


function App() {
  const [usersList ,setUsersList] = useState([]);

  const userDataHandler = (data) => {
    setUsersList((previousStateData) => {
      return [data, ...previousStateData]
    })
  }
  return (
    <>
      <UserForm onSaveData={userDataHandler}/>
      <UserList users={usersList}/>
    </>
  )
}

export default App;
