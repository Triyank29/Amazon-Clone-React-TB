import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import img from '../assets/images/amazon_logo.png'
import USFlag from '../assets/images/USFlag.png'

const Navbar = () => {
  return (
    <div>
      <header>

        <nav className='bg-[#0F1111] h-16 flex justify-evenly items-center text-white text-sm'>
      
          <a href="" className='border border-transparent p-1 hover:border-white '>
          <img src={img} className='w-24 h-10'/>
          </a>

          <div className='border border-transparent p-1 hover:border-white'>
            <p className='text-xs'>Deliver To</p>
            <div className='flex items-center gap-1'>
              <i><FaLocationDot /></i>
              <p className='text-bold'>India</p>
            </div>
          </div>

          <div className='text-black flex h-11 p-1'>
            <select className='bg-[#e6E6E6] rounded rounded-r-none px-2'>
              <option>All</option>
            </select>
            <input type="text" placeholder='Search Amazon' className='w-[780px] pl-2 text-base'/>
            <div className='bg-orange-300 rounded-lg rounded-l-none'>
              <FaSearch className='text-2xl pt-2'></FaSearch>
            </div>
          </div>

          <div className='flex border border-transparent p-1 hover:border-white'>
            <img src={USFlag} alt="" className='h-5 w-6' />
            <select className='bg-transparent font-bold'>
              <option>En</option>
            </select>
          </div>

          <div className='border border-transparent p-1 hover:border-white'>
            <p className='text-xs pl-1'>Hello, sign in</p>
              <select className='bg-transparent font-bold'>
                <option>Account & Lists</option>
              </select>
          </div>

          <div className='border border-transparent p-1 hover:border-white'>
            <p className='text-xs'>Returns</p>
            <p className='bg-transparent font-bold'>& Orders</p>
          </div>

          <div className='flex border border-transparent p-1 hover:border-white items-center'>
            <FaCartPlus className='text-2xl'></FaCartPlus>
            <p className='font-bold pt-2'>Cart</p>
          </div>

        </nav>

        <div className='bg-[#222F3D] h-10 flex items-center text-white text-sm pl-4'>
          <div className='flex items-center gap-1 border border-transparent p-2 hover:border-white'>
            <FaBars className='text-lg'></FaBars>
            <p className='font-bold'>All</p>
          </div>
          
          <ul className='flex items-center'>
            <li className='border border-transparent p-2 hover:border-white'>Today's Deals</li>
            <li className='border border-transparent p-2 hover:border-white'>Customer Service</li>
            <li className='border border-transparent p-2 hover:border-white'>Registry</li>
            <li className='border border-transparent p-2 hover:border-white'>Gift Cards</li>
            <li className='border border-transparent p-2 hover:border-white'>Sell</li>
          </ul>
        </div>

      </header>
    </div>
  )
}

export default Navbar
