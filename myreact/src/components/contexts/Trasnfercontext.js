import React, { useEffect,useState } from "react";
import { contractABI, contractAddress } from "../../utils/constants";

const ethers = require("ethers");

export const TransactionContext = React.createContext();
const {ethereum } = window;

const getetherium = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractABI,signer);
   return transactionContract;
}



export const TransactionProvider = ({children}) =>{

    const [connectedaccount,setconnectedaccount] = useState('');
    const [formData , setformData] = useState({address:'',amount:'',keyword:'',send:''});
    const handlechange=(e,name)=>{
      setformData((prevState)=>({...prevState,[name]:e.target.value}))
    }
    const CheckifWalletConnected=async()=>{
    try {
        if(!ethereum) return alert ("please install meta-mask");

        const accounts = await ethereum.request({method: 'eth_accounts'});
        console.log(accounts);
      if(accounts.length){
        setconnectedaccount(accounts[0]);
      }else{
        console.log("no accounts");
      }
    } catch (error) {
        throw new error("no etherium");
    }

    }
    const ConnectWallet = async () => {
        try {
            console.log("click");
            if(!ethereum) return alert ("please install meta-mask");
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setconnectedaccount(accounts[0]);
        }  catch (error) {
            throw new error("no etherium");
        }
      
    }
    const sendTransaction =async()=>{
      try {
        const{ address,amount,keyword,send }=formData;
        getetherium();
        if(!ethereum) return alert ("please install meta-mask");
      } catch (error) {
        console.log(error);
      }
    }


    useEffect(()=>{
        CheckifWalletConnected();
    },[])
    return (
        <TransactionContext.Provider value={{ConnectWallet,connectedaccount,handlechange,formData,sendTransaction}}>
         {children}
        </TransactionContext.Provider>
    );
}