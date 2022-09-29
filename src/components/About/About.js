import React from 'react';
import img from '../../img/Screenshot_31.png';
const About = () => {
    return (
        <div>
            <div className='flex items-center'>
                <img className='w-12 h-12 rounded-full mr-5' src={img} alt="" />
                <div>
                    <p className='text-xl font-medium'>Mohammed Takbir</p>
                    <p className='text-gray-400'>Rupganj, Narayanganj</p>
                </div>
            </div>
            <div className='flex justify-between md:justify-around bg-slate-200 mt-10 mb-8 p-5 rounded-lg text-center'>
                <div>
                    <h2><span className='font-medium text-2xl'>70</span><span className='text-slate-400'>kg</span></h2>
                    <p className='text-gray-500'>weight</p>
                </div>
                <div>
                    <h2><span className='font-medium text-2xl'>6.0</span></h2>
                    <p className='text-gray-500'>Height</p>
                </div>
                <div>
                    <h2><span className='font-medium text-2xl'>22<span className='text-slate-400 font-normal'>yrs</span></span></h2>
                    <p className='text-gray-500'>Age</p>
                </div>
            </div>
        </div>
    );
};

export default About;