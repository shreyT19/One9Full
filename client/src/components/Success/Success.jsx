import React, { useEffect, useState } from 'react'
import './Success.scss'
import { useNavigate } from 'react-router-dom'
// import successImg from '../../assets/successOrder.svg'
import successImg from '../../assets/success.png'
const Success = () => {
    const[random,setRandom]=useState(0);

    useEffect (()=>{
        generateNumber()

    },[])
    const generateNumber = ()=>{
        let ranNum = Math.floor(Math.random()*(999999-100000))+100000+1;
        console.log(ranNum);
        setRandom(ranNum)
    }

    const navigate = useNavigate();
  return (
    <div className='success-header'>
        <div className="success-body">
            <div className="heading">
                Your Order has been received
            </div>
            <div className="confirm-img">
                <img src={successImg} alt="" />
            </div>
            <div className="short-heading">
                Thanks for your purchase !
            </div>
            <div className="order-id">
                Your order ID is : {random}
            </div>
            <div className="order-confirmation">
                You will receive an order of confirmation email with details of your order.
            </div>
            <button className='btn' onClick={()=>navigate('/')}>Continue Shopping</button>
        </div>
    </div>
  )
}

export default Success