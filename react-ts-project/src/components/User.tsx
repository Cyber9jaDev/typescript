/* eslint-disable @typescript-eslint/no-empty-function */
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';


const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => { 
    if(userContext){
      userContext.setUser({
        username: 'XXXX',
        email: 'yes@gmail.com'
      })
    }
  }
  const handleLogout = () => {
    if(userContext){
      userContext.setUser(null)
    }
  }


  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <span> User name is {userContext.user?.username} </span>
      <span> User email is {userContext.user?.email}</span>
    </div>
  )
}

export default User