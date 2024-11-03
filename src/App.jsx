import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import Available from './Components/Main/Available'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer'

function App() {
   
  const [balance , setBalance] = useState(0);
  const notifyReward = () => {
    toast('Credit Added to Your Account', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: 1
      });
   }
   const notifyChosen = (name) => {
    toast('Congratulations '+name+' is now in your squad', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: 2
      });
   }
   const notifyFull = () => {
    toast('Your squad is full!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: 3
      });
   }
   const notifyNoMoney = () => {
    toast('Your Account Does Not Has Enough Money Get Reward andy Try Again!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: 3
      });
   }
   const notifyAlreadyTaken = (name) => {
    toast(name + 'is Already Taken', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: 4
      });
   }

  const getReward=()=>{
      const newBalance = balance + 8000000;
      setBalance(newBalance);
      notifyReward();
  }
  const playerChosen = (player, selected) =>{
    const {price,name} = player;
    const remainingBalance = balance - price;
    if(remainingBalance >= 0 ){
    if(selected.length>5){
      notifyFull();
    }else{
      const isSelected = selected.includes(player);
      if(!isSelected){
        setBalance(remainingBalance);
        notifyChosen(name);
      }
    }
    }else{
      notifyNoMoney()
    }
    
  } 
  return (
    <>
      <Header
      balance ={balance}
      ></Header>
      <Banner
      getReward={getReward}
      ></Banner>
      <Available
      playerChosen={playerChosen}
      balance={balance}
      notifyAlreadyTaken={notifyAlreadyTaken}
      ></Available>
      <Footer></Footer>
      <ToastContainer/>
    </>
  )
}

export default App
