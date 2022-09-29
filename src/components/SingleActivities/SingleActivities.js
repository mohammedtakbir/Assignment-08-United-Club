import React from 'react';
import './SingleActivities.css'
const SingleActivities = ({activity, handleAddToCart}) => {
    const {details, img, name, time} = activity;
    return (
        <div className='cart p-6 bg-white rounded-xl'>
            <img src={img} alt="" className='w-full h-[250px] rounded-lg'/>
            <h2 className='text-[23px] font-semibold mt-4'>{name}</h2>
            <p className='text-gray-500 my-3'>{details.slice(0, 150)}</p>
            <p className='font-medium text-lg'>For Age: <span className='font-bold'>20-25</span></p>
            <p className='font-medium text-lg my-3 mb-4'>Time required: {time}s</p>
            <button onClick={() => handleAddToCart(activity)} className='bg-teal-600 text-white w-full text-center py-2 rounded-md text-lg'>Add to card</button>
        </div>
    );
};

export default SingleActivities;