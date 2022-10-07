import React, { useContext } from 'react'
import { TransactionContext } from './contexts/Trasnfercontext'
const Welcome = () => {
  const {ConnectWallet,connectedaccount,formData,handlechange,sendTransaction} = useContext(TransactionContext);
  
  const submit=(e)=>{
     const{ address,amount,keyword,send }=formData;
     e.preventDefault();
     if(!address|| !amount || !keyword || !send) return;

     sendTransaction();
  }
  
  
  return (
  
    <div className='welcome'>
      <div className='wl'>
          <h1>Send Crypto Across The World</h1> 
          {!connectedaccount && (
            <button className='btn2' onClick= {ConnectWallet} >Connect Wallet</button>
         ) }
          </div>
        
      <div className='form'>
        <form>
       
        <input type="text" name="address" className='address' handlechange={ handlechange } placeholder='Address to'/><br/>
       
        <input type="text" name="amount" className='address' handlechange={ handlechange } placeholder='Amount(ETH)'/><br/>
       
        <input type="text" name="Keyword" className='address' handlechange={ handlechange } placeholder='Keyword'/><br/>
       
        <input type="text" name="Send" className='address' handlechange={ handlechange } placeholder='Enter msg'/><br/>
        <button className='btn2' onClick={submit}>Send now</button>
        </form>
      </div>
    </div>
  )
}

export default Welcome
