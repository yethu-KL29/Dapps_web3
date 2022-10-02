import React from 'react'
import Krypto from './krypto.png'
function Navbar() {
  return (
    
      <div className='nav'>
        <div className='left'>
          <img src={Krypto}></img>
          <div className='heading'>KRYPTO</div>
        </div>
       
        <div className='right'>
          <div>Market</div>
          <div>Exchange</div>
          <div>Tutorials</div>
          <div>Wallets</div>
          <button>Login</button>
        </div>
      </div>
   
  )
}

export default Navbar
