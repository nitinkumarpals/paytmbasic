import React from 'react'
import { Appbar, Balance, Users } from '../components/index'
const Dashboard = () => {
  return (
    <div>
      <Appbar/>
        <div className='mt-8'>
            <Balance value={"10,000"}/>
            <Users />
        </div>
      
    </div>
  )
}

export default Dashboard
