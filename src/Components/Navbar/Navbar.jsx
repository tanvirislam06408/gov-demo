import React from 'react';
import navImg from '../../assets/logo.png'
import heart from '../../assets/heart.png'
import coin from '../../assets/coin.png'

const Navbar = () => {
    return (
        <nav>
            <div className='justify-between flex items-center max-w-10/12 mx-auto pt-3'>
               <div className='flex items-center gap-2'>
                    <div>
                        <img className='w-10 ' src={navImg} alt="" />
                    </div>
                 <h2  className='font-bold text-3xl text-green-600'>Emergency <br />Service</h2>
               </div>
               {/* right */}
               <div>
                <ul className='flex items-center justify-center gap-9 font-bold'>
                    <li className='bg-[rgba(65,255,107,0.1)] flex items-center py-1 px-2.5 gap-2 rounded-2xl'>0  <img className='w-5' src={heart} alt="" /></li>
                    <li className='bg-[rgba(65,255,107,0.1)] flex items-center py-1 px-2.5 gap-2 rounded-2xl'>100 <img className='w-5' src={coin} alt="" /></li>
                    <li className='bg-[rgba(0,166,62,1)]
                    text-white font-bold flex items-center py-1 px-2.5 gap-2 rounded-2xl'>2 Copy</li>
                </ul>
               </div>
            </div>
        </nav>
    );
};

export default Navbar;