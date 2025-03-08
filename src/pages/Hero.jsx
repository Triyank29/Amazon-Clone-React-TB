import React from 'react'
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import img5 from '../assets/images/5.jpg'
import img6 from '../assets/images/6.jpg'
import img7 from '../assets/images/7.jpg'
import img8 from '../assets/images/8.jpg'
import banner from '../assets/images/banner.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <main className='bg-[#E6E6E6] pb-5'>
        <div className="bg-cover h-80 flex justify-center items-end" style={{ backgroundImage: `url(${banner})` }}>
          <div className='bg-white text-sm h-10 flex justify-center items-center w-[1460px] mb-6'>
            <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.
              <a href='' className='text-[#007185] hover:underline hover:text-orange-300'>Click here to go to amazon.in</a>
            </p>
          </div>
        </div>

        <div className='grid grid-cols-4 grid-row-2 gap-4 px-4 py-8'>
            <div className='bg-white p-4'>
              <Link to='./Product'> 
                <h2 className='text-xl font-bold'>Shop School Essentials</h2>
                <img src={img1} alt="" className='my-3'/>
                <a href="" className='text-xl text-[#007185]'>See More</a>
              </Link>
            </div>

            <div className='bg-white p-4'>
                <h2 className='text-xl font-bold'>Home & Kitchen Under $30</h2>
                <img src={img2} alt="" className='my-3' />
                <a href="" className='text-xl text-[#007185]'>Shop Now</a>
            </div>

            <div className='bg-white p-4'>
                <h2 className='text-xl font-bold'>Health & Personal Care</h2>
                <img src={img3} alt="" className='my-3'/>
                <a href="" className='text-xl text-[#007185]'>Shop Now</a>
            </div>

            <div className='bg-white p-4'>
                <h2 className='text-xl font-bold'>Beuty Picks</h2>
                <img src={img4} alt="" className='my-3'/>
                <a href="" className='text-xl text-[#007185]'>Shop Now</a>
            </div>

            <div className='bg-white p-4'>
                <h2 className='text-xl font-bold'>Electronics</h2>
                <img src={img5} alt="" className='my-3'/>
                <a href="" className='text-xl text-[#007185]'>Shop Now</a>
            </div>

            <div className='bg-white p-4'>
                <h2 className='text-xl font-bold'>Toys Under $30</h2>
                <img src={img6} alt="" className='my-3'/>
                <a href="" className='text-xl text-[#007185]'>Shop Now</a>
            </div>

            <div className='bg-white p-4'>
                <h2 className='text-xl font-bold'>For Your Fitness Needs</h2>
                <img src={img7} alt="" className='my-3'/>
                <a href="" className='text-xl text-[#007185]'>Shop Now</a>
            </div>

            <div className='bg-white p-4'>
                <h2 className='text-xl font-bold'>For Pets</h2>
                <img src={img8} alt="" className='my-3'/>
                <a href="" className='text-xl text-[#007185]'>Shop Now</a>
            </div>
          
        </div>
      </main>
    </div>
  )
}

export default Hero
