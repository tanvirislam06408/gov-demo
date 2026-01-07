import React from 'react';
import { CiStopwatch } from 'react-icons/ci';

const History = () => {
    return (
        <div>
            <div className='flex justify-around mt-3 items-center'>
                <div className='flex gap-2.5 items-center'>
                    <CiStopwatch />
                    <p>Call History</p>
                </div>
                <div>
                    <button className='px-9 text-white rounded-4xl py-3.5 btn bg-[rgba(0,166,62,1)]'>Clear</button>
                </div>
            </div>
        </div>
    );
};

export default History;