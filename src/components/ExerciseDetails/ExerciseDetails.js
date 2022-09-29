import React from 'react';
import './ExerciseDetails.css'
const ExerciseDetails = (props) => {
    const {} = props.cart;
    return (
        <div>
            <h1 className='text-2xl'>Training Details</h1>
            <div className='flex bg-slate-200 py-5 mt-5 justify-around rounded-lg'>
                <h3 className='text-xl'>Training time</h3>
                <p className='text-xl text-gray-500'>mins</p>
            </div>
            <div className='flex bg-slate-200 py-5 mt-5 justify-around rounded-lg'>
                <h3 className='text-xl'>Break time</h3>
                <p className='text-xl text-gray-500'>mins</p>
            </div>
        </div>
    );
};

export default ExerciseDetails;