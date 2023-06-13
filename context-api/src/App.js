import {useState} from 'react';
import './App.css';
import Navbar from './components/Nav';
import Layout from './components/Layout'
import UserContext from './components/UserContext'

const App = () => {
  const [currentUser, setCurrentUser] = useState('Gerbert')

  const changeName = (name) => {
    setCurrentUser(name)
  }

  return(
      <UserContext.Provider value={{
        user: currentUser,
        changeName: changeName
      }}>
        <Navbar />
        <Layout />
      </UserContext.Provider>
  )
}

export default App;
