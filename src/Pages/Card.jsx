import React from 'react';
import emer from '.././assets/emergency.png'
import { CiHeart } from 'react-icons/ci';

const Card = ({card}) => {
    const {title_bn,category_bn,number,title_en}=card;
    
    return (
        <div className='bg-white p-3.5 box-border rounded-2xl shadow-2xl'>
            <div className='flex flex-col gap-2.5 h-full'>
               <div className='flex justify-between '>
                 <img className='w-7' src={emer} alt="" />
                <div >
                    <CiHeart className='w-7 cursor-pointer' />
                </div>
               </div>
                <h1 className='font-bold text-2xl'>{title_bn}</h1>
                <p className='text-lg text-gray-500 font-semibold'>{title_en}</p>
                <h3>{number}</h3>
                <p className='font-semibold w-20 px-1 py-0.5 text-gray-600 bg-gray-300 rounded-2xl'>{category_bn}</p>
                <div className='flex gap-5 mt-auto py-2.5'>
                    <button className='text-gray-500 btn py-1.5 px-2 border-gray-600'>Copy</button>
                    <button className='btn px-3.5 py-1 text-green-500 border-green-500'>Call</button>
                </div>
            </div>
        </div>
    );
};

export default Card;