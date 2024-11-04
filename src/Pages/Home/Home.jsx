import React from 'react'
import RoomCard from '../../Components/Cards/RoomCard';
const Home = () => {
  return (
    <div className='flex flex-col md:p-10 items-center justify-center'>
      <h1>Home</h1>
      <p>This is the home page</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {[...Array(190)].map((_,index) =>(
            <RoomCard key={index}/>
        ))}
    </div>
  
    </div>
  )
}

export default Home
