import React from 'react'
import Homenav from './Homenav'
// import FoodDelivery from './FoodDelivery'
import FoodDeliveryImage from '../../assets/Home/FoodDelivery.png'
import InstamartImage from '../../assets/Home/Instamart.png'
import DineoutImage from '../../assets/Home/Dineout.png'
import GenieImage from '../../assets/Home/Genie.png'

const Home = () => {
  return (
    <div className='bg-orange-600 text-white w-[100vw] h-[100vh] pb-10'>

        <Homenav></Homenav>
        <div className='text-center text-[48px]'>
            <h1>
                Order food & groceries. Discover
                <br /> best restaurants. Swiggy it!
            </h1>
            
            <input className='bg-white rounded-2xl text-gray-700 text-l' type="text" placeholder='Search for restaurant, item or more' />
        </div>
        <div className='flex w-[70vw] ml-60'>
            <div><img src={FoodDeliveryImage} alt="" srcset="" /></div>
            <div><img src={InstamartImage} alt="" srcset="" /></div>
            <div><img src={DineoutImage} alt="" srcset="" /></div>
            <div><img src={GenieImage} alt="" srcset="" /></div>
            
        </div>
    </div>
  )
}

export default Home