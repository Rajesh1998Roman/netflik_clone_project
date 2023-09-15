import React, { useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import HomeScrren from './HomeScreen/HomeScrren'
import './App.css'
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import {login} from './features/userSlice'

const App = () => {
  const user = useSelector(selectUser);

 

  const dispatch=useDispatch();
   
  useEffect(()=>{
    const unsub=onAuthStateChanged(auth,(userAuth)=>{
      if(userAuth){
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        })
        );
      }
      else{
        dispatch(logout());
      }
    })
    return unsub
  },[]); 

  
  return (
    <div className='App'>
      <Router>
        {
          !user ?(
          <Login />
          )
          :(
          <Routes>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/" element={<HomeScrren />}/>
           
          </Routes>)
        }
      </Router>
      
      </div>
  )
}

export default App
