import React from 'react';
import './Navbar.css';
import icon from '../../img/icon.png';
const Navbar = () => {
    return (
        <div className='main flex justify-between items-center mt-8'>
            <div className='flex items-center'>
                <img className='md:w-[50px] md:h-[50px] w-[30px] h-[30px] md:mr-3 mr-1' src={icon} alt="" />
                <a href="/" className='text-3xl md:text-5xl font-semibold text-teal-600'>United Club</a>
            </div>
            <div>
                <a className='text-md md:text-2xl mr-2 md:mx-4' href="/home">Home</a>
                <a className='text-md md:text-2xl mx-1 md:mx-4' href="/trainings">Trainings</a>
                <a className='text-md md:text-2xl ml-1 md:ml-4 hidden md:inline-block' href="/signUp">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;