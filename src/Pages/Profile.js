import React from 'react'
import './Profile.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import Nav from '../Component/Nav/Nav'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Profile = () => {
  
  const user=useSelector(selectUser)

  const logout = ()=>{
       signOut(auth);
  };


  return  <div className='profilscreen'>
    <Nav />
    <div className='profilscreen_body'>
      <h1>Edit Profile</h1>
      <div className='profile_screeninfo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt=''/>
          <div className='profilescreen-detailes'>  
          <h2>{user.email}</h2>
          <div className='profilescreen-plan'>
            <h3>Plans</h3>
            {/* {plans} */}
            <button className='profile-screen-signout' onClick={logout}>Sign Out</button>
          </div>
          </div>
      </div>
    </div>
  </div>
  
}

export default Profile