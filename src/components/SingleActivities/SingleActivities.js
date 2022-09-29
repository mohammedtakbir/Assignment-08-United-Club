import React from 'react';
import './SingleActivities.css'
const SingleActivities = ({activity}) => {
    const {details, id, img, name, time} = activity;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{details.slice(0, 120)}</p>
            <p>For Age: 20-25</p>
            <p>Time required: {time}</p>
            <button className='bg-teal-600 text-white w-3/4 mx-auto text-center'>Add to card</button>
        </div>
    );
};

export default SingleActivities;