import React, { useState } from 'react'
import "./Login.css"
import SignIn from './SignIn/SignIn'


const Login = () => {


    const [signIn,setSigIn]=useState(false)
  return  <div className='loginscreen'>
    <div className='loginscreen_background'>
        <img className='login_logo'
           src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
           alt=''
        />
        <button className='login_screenbutton' onClick={()=>setSigIn(true)}>
            SignIn
            </button>
            <div className='loginscreen_grandient'/>
     </div>
            <div className='loginScreen_body'>
            {
                signIn?(
                    <SignIn/>
                ):(
                    <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at any  time.</h2>
                    <h3>
                        Ready to  Watch? Enter your email to create or restart your
                    </h3>
                    <div className='loginScreen-input'>
                        <form>
                            <input type='email' placeholder='Email Adderss'/>
                            <button onClick={()=>setSigIn(true)} className='login-screnStart'>
                                GET STARTED
                            </button>
                        </form>
                    </div>
                    
                    </>
                )
            }
    </div>
    </div>
  
  
  
}

export default Login