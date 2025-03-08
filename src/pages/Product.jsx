import React from 'react'
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import img5 from '../assets/images/5.jpg'
import img6 from '../assets/images/6.jpg'
import img7 from '../assets/images/7.jpg'
import img8 from '../assets/images/8.jpg'
import {Link} from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <main className='bg-[#E6E6E6] pb-5'>

        <div className='grid grid-cols-4 grid-row-2 gap-4 px-4 py-8'>
            <div className='bg-white p-4'>
                <img src={img1} alt="" className='my-3'/>
                <h2 className='text-xl font-bold'>Samsung Tv - 32 Inch</h2><br />
                <p className='text-sm'>Smart Features like - Smart Remote Control <br />
                  Free Subscription - jiocinema, JioHotstar, Youtube <br />
                  Multiple Speaker,etc. <br />
                </p><br />
                <p className='text-lg font-bold'>Price : 16,500/-</p><br />
                <button className='bg-yellow-500 rounded-full w-[160px] h-10 border-2 hover:border-black'>Add to cart</button>
                <br />
                <br />
                <p className='text-sm'>More Buying Choices</p>
                <p>$ 34.20 (10 + used & <a className='text-blue-400 hover:text-orange-400' href=''>new offers</a> )</p>
            </div>

            <div className='bg-white p-4'>
                <img src={img2} alt="" className='my-3'/>
                <h2 className='text-xl font-bold'>Samsung Tv - 32 Inch</h2><br />
                <p className='text-sm'>Smart Features like - Smart Remote Control <br />
                  Free Subscription - jiocinema, JioHotstar, Youtube <br />
                  Multiple Speaker,etc. <br />
                </p><br />
                <p className='text-lg font-bold'>Price : 16,500/-</p><br />
                <button className='bg-yellow-500 rounded-full w-[160px] h-10 border-2 hover:border-black'>Add to cart</button>
                <br />
                <br />
                <p className='text-sm'>More Buying Choices</p>
                <p>$ 34.20 (10 + used & <a className='text-blue-400 hover:text-orange-400' href=''>new offers</a> )</p>
            </div>

            <div className='bg-white p-4'>
                <img src={img3} alt="" className='my-3'/>
                <h2 className='text-xl font-bold'>Samsung Tv - 32 Inch</h2><br />
                <p className='text-sm'>Smart Features like - Smart Remote Control <br />
                  Free Subscription - jiocinema, JioHotstar, Youtube <br />
                  Multiple Speaker,etc. <br />
                </p><br />
                <p className='text-lg font-bold'>Price : 16,500/-</p><br />
                <button className='bg-yellow-500 rounded-full w-[160px] h-10 border-2 hover:border-black'>Add to cart</button>
                <br />
                <br />
                <p className='text-sm'>More Buying Choices</p>
                <p>$ 34.20 (10 + used & <a className='text-blue-400 hover:text-orange-400' href=''>new offers</a> )</p>
            </div>

            <div className='bg-white p-4'>
                <img src={img4} alt="" className='my-3'/>
                <h2 className='text-xl font-bold'>Samsung Tv - 32 Inch</h2><br />
                <p className='text-sm'>Smart Features like - Smart Remote Control <br />
                  Free Subscription - jiocinema, JioHotstar, Youtube <br />
                  Multiple Speaker,etc. <br />
                </p><br />
                <p className='text-lg font-bold'>Price : 16,500/-</p><br />
                <button className='bg-yellow-500 rounded-full w-[160px] h-10 border-2 hover:border-black'>Add to cart</button>
                <br />
                <br />
                <p className='text-sm'>More Buying Choices</p>
                <p>$ 34.20 (10 + used & <a className='text-blue-400 hover:text-orange-400' href=''>new offers</a> )</p>
            </div>

            <div className='bg-white p-4'>
                <img src={img5} alt="" className='my-3'/>
                <h2 className='text-xl font-bold'>Samsung Tv - 32 Inch</h2><br />
                <p className='text-sm'>Smart Features like - Smart Remote Control <br />
                  Free Subscription - jiocinema, JioHotstar, Youtube <br />
                  Multiple Speaker,etc. <br />
                </p><br />
                <p className='text-lg font-bold'>Price : 16,500/-</p><br />
                <button className='bg-yellow-500 rounded-full w-[160px] h-10 border-2 hover:border-black'>Add to cart</button>
                <br />
                <br />
                <p className='text-sm'>More Buying Choices</p>
                <p>$ 34.20 (10 + used & <a className='text-blue-400 hover:text-orange-400' href=''>new offers</a> )</p>
            </div>

            <div className='bg-white p-4'>
                <img src={img6} alt="" className='my-3'/>
                <h2 className='text-xl font-bold'>Samsung Tv - 32 Inch</h2><br />
                <p className='text-sm'>Smart Features like - Smart Remote Control <br />
                  Free Subscription - jiocinema, JioHotstar, Youtube <br />
                  Multiple Speaker,etc. <br />
                </p><br />
                <p className='text-lg font-bold'>Price : 16,500/-</p><br />
                <button className='bg-yellow-500 rounded-full w-[160px] h-10 border-2 hover:border-black'>Add to cart</button>
                <br />
                <br />
                <p className='text-sm'>More Buying Choices</p>
                <p>$ 34.20 (10 + used & <a className='text-blue-400 hover:text-orange-400' href=''>new offers</a> )</p>
            </div>

            <div className='bg-white p-4'>
                <img src={img7} alt="" className='my-3'/>
                <h2 className='text-xl font-bold'>Samsung Tv - 32 Inch</h2><br />
                <p className='text-sm'>Smart Features like - Smart Remote Control <br />
                  Free Subscription - jiocinema, JioHotstar, Youtube <br />
                  Multiple Speaker,etc. <br />
                </p><br />
                <p className='text-lg font-bold'>Price : 16,500/-</p><br />
                <button className='bg-yellow-500 rounded-full w-[160px] h-10 border-2 hover:border-black'>Add to cart</button>
                <br />
                <br />
                <p className='text-sm'>More Buying Choices</p>
                <p>$ 34.20 (10 + used & <a className='text-blue-400 hover:text-orange-400' href=''>new offers</a> )</p>
            </div>

            <div className='bg-white p-4'>
                <img src={img8} alt="" className='my-3'/>
                <h2 className='text-xl font-bold'>Samsung Tv - 32 Inch</h2><br />
                <p className='text-sm'>Smart Features like - Smart Remote Control <br />
                  Free Subscription - jiocinema, JioHotstar, Youtube <br />
                  Multiple Speaker,etc. <br />
                </p><br />
                <p className='text-lg font-bold'>Price : 16,500/-</p><br />
                <button className='bg-yellow-500 rounded-full w-[160px] h-10 border-2 hover:border-black'>Add to cart</button>
                <br />
                <br />
                <p className='text-sm'>More Buying Choices</p>
                <p>$ 34.20 (10 + used & <a className='text-blue-400 hover:text-orange-400' href=''>new offers</a> )</p>
            </div>


        </div>
      </main>
    </div>
  )
}

export default Product
