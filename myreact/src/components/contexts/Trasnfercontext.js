import React, { useEffect,useState } from "react";
import { contractABI, contractAddress } from "../../utils/constants";

const ethers = require("ethers");

export const TransactionContext = React.createContext();
const {ethereum } = window;

const getetherium = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractABI,signer);
    console.log(
        {
        provider
        ,signer,
        transactionContract
       });
}



export const TransactionProvider = ({children}) =>{

const [connectedaccount,setconnectedaccount] = useState('');
const CheckifWalletConnected=async()=>{


if(!ethereum) return alert ("please install meta-mask");
const accounts = await ethereum.request({method: 'eth_accounts'});
}
const ConnectWallet = async () => {
    try {
        console.log("click");
        if(!ethereum) return alert ("please install meta-mask");
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        setconnectedaccount(accounts[0]);
    } catch (error) {
        throw new error("no etherium");
    }
  
}


useEffect(()=>{
    CheckifWalletConnected();
},[])
return (
        <TransactionContext.Provider value={{ConnectWallet}}>
         {children}
        </TransactionContext.Provider>
    );
}