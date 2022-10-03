import React, { useContext } from 'react'
import { TransactionContext } from './contexts/Trasnfercontext'
const Welcome = () => {
  const {ConnectWallet} = useContext(TransactionContext);
  return (
  
    <div className='welcome'>
      <div className='wl'>
          <h1>Send Crypto Across The World</h1> 
          <button className='btn2' onClick= {ConnectWallet} >Connect Wallet</button>
      </div>
      <div className='form'>
        <form>
       
        <input type="text" id="address" className='address' placeholder='Address to'/><br/>
       
        <input type="text" id="amount" className='address' placeholder='Amount(ETH)'/><br/>
       
        <input type="text" id="Keyword" className='address' placeholder='Keyword'/><br/>
       
        <input type="text" id="Send" className='address' placeholder='Enter msg'/><br/>
        <button className='btn2 '>Send now</button>
        </form>
      </div>
    </div>
  )
}

export default Welcome
