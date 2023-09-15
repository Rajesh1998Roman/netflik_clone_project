import React, { useEffect, useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {

    const [ show ,setShow] =useState(false);

    const transtionNavbar=()=>{
       if(window.screenY>100){
           setShow(true);
       }else{
        setShow(false);
       }
    };
    useEffect(()=>{
        window.addEventListener("scroll",transtionNavbar);

        return ()=> window.removeEventListener("scroll",transtionNavbar)
    },[]);
    console.log(show);
  return (
    <nav className={`Nan ${show &&" nav_black"}`}>
        <div className='nav_containes'>
            <Link to='/'>
            <img
            src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
            alt=''
            className='nav-logo'
            />
            </Link>
            <Link to='profile'>
            <img 
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt=''
            className='nav_avatar'/>
            </Link>
        </div>

    </nav>
  )
}

export default Nav 