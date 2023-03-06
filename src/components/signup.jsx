import React, { useState } from 'react'

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className='logContainer'>
        <div className='login'>
            <form>
                <h1>Sign up</h1>
                <label>Email</label>
                <input name="email" type="text" placeholder="Email or Phone" className='input' />
                <label>Password</label>
                <input name="password" placeholder="Password" className='input' />
                <label>Confirm Password</label>
                <input name="password" placeholder="Password" className='input' />
                <button>Signup</button>
            </form>
    </div>
    </div>
  )
}

export default Signup