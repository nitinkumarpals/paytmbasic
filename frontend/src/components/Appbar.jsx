import React,{ useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Appbar = () => {
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
  }, []);

  return (
    <div className='shadow h-14 flex justify-between'>
      <div className='flex flex-col justify-center h-full ml-4 text-2xl font-semibold'>
        PayTM App
      </div>
      <div className='flex'>
        <div className='flex flex-col justify-center h-full mr-4'>
        {firstName && firstName.charAt(0).toUpperCase() + firstName.slice(1)}

        </div>
        <div className='rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2'>
          <div className='flex flex-col justify-center h-full text-xl'>
          {firstName[0].toUpperCase()}

          </div>
        </div>
        <button  type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-2" onClick={(e) => {
            localStorage.removeItem("token");
            navigate("/signin");
            }}  >Logout</button>
      </div>
    </div>
  )
}

export default Appbar
