import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData();


  // This is NORMAL WAY. we have used 'loader' in the github route to fetch data from api more faster way.
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://dummyuser.vercel.app/users/1')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data);
  //   })
  // }, [])



  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github User: {data.email}
      <img className='mx-auto' src={data.avatar} width={200} alt="user" />
    </div>
  )
}

export default Github

export const githubLoader = async () => {
  const response = await fetch('https://dummyuser.vercel.app/users/1');
  return await response.json();
}