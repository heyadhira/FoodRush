import React from 'react'
import logo from '../../assets/Home/logoo.png'
const Homenav = () => {
  return (
    <div className='flex justify-between p-5 text-center' >
        <img className="mb-10 h-[170px]"src={logo} alt="" />
        <div className='flex gap-3 font-[0px] pr-15 p-10'>
           
        
            <p className='p-4'>FoodRush Corporate</p>
            <p className='p-4'>Partner with us</p>
            <p className='border rounded w-[160px] h-[60px] p-4'>Get the App →</p>
            <button className='bg-black text-white rounded-2xl w-[120px] h-[60px]'>Sign in </button>
            
        </div>
    </div>
  )
}

export default Homenav