import React from 'react';
import './ExerciseDetails.css'
const ExerciseDetails = (props) => {
    const {cart, addBreaks} = props;
    let totalTime = 0;
    for(const activity of cart){
        totalTime = totalTime + activity.time;
    }
    return (
        <div>
            <h1 className='text-2xl font-medium'>Training Details</h1>
            <div className='flex bg-slate-200 py-5 mt-5 justify-around rounded-lg'>
                <h3 className='text-xl'>Training time</h3>
                <p className='text-xl text-gray-500'>{totalTime} seconds</p>
            </div>
            <div className='flex bg-slate-200 py-5 mt-5 justify-around rounded-lg'>
                <h3 className='text-xl'>Break time</h3>
                <p className='text-xl text-gray-500'>{addBreaks} seconds</p>
            </div>
        </div>
    );
};

export default ExerciseDetails;