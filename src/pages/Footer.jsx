import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='bg-[#37475A] h-12 flex justify-center items-center text-white'>
          <a href=""><p>Back To Top</p></a>
        </div>

        <div className='bg-[#232F3E] h-[340px] text-[#DDDDDD] text-sm flex justify-evenly py-10'>
          <ul className='space-y-2.5'>
            <li className='font-bold text-base text-white'>Get to Know Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>

          <ul className='space-y-2.5'>
            <li className='font-bold text-base text-white'>Make Money with Us</li>
            <li>Sell Product on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
            <li>See More Make Money with Us</li>
          </ul>

          <ul className='space-y-2.5'>
            <li className='font-bold text-base text-white'>Amazon Payment Products</li>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>

          <ul className='space-y-2.5'>
            <li className='font-bold text-base text-white'>Let Us Help You</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shiping Rates &<br />Policies</li>
            <li>Return &<br />Replacements</li>
            <li>Manage Your <br />Content and Devices</li>
            <li>Help</li>
          </ul>

        </div>
      </footer>
    </div>
  )
}

export default Footer
