import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Appbar, Balance, Users } from '../components/index'
const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/account/balance", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(response => {
      setBalance(response.data.balance);
    }).catch(error => {
      console.error("Error fetching balance:", error);
    });
  }, [])
  return (
    <div>
      <Appbar/>
        <div className='mt-8'>
            <Balance value={balance}/>
            <Users />
        </div>
      
    </div>
  )
}

export default Dashboard
