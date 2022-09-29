import React from 'react';
import img from '../../img/Screenshot_31.png'
const About = () => {
    return (
        <div>
            <div className='flex items-center'>
                <img className='w-12 h-12 rounded-full mr-4' src={img} alt="" />
                <div>
                    <p>mohammed_takbir</p>
                    <p>rupganj, narayanganj</p>
                </div>
            </div>
            <div className='flex justify-around bg-slate-300 my-5 p-5 rounded-lg text-center'>
                <div>
                    <h2><span className='font-medium text-2xl'>70</span>kg</h2>
                    <p>weight</p>
                </div>
                <div>
                    <h2><span className='font-medium text-2xl'>6.0</span></h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2><span className='font-medium text-2xl'>22yrs</span></h2>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default About;