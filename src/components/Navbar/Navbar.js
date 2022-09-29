import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='main flex justify-between items-center my-7'>
            <a href="/" className='text-2xl md:text-4xl font-semibold text-teal-600'>Sports Club</a>
            <div>
                <a className='text-md md:text-2xl mx-2 md:mx-3'href="/home">Home</a>
                <a className='text-md md:text-2xl mx-2 md:mx-3'href="/trainings">Trainings</a>
                <a className='text-md md:text-2xl ml-2 md:ml-3'href="/signUp">Sign Up</a>   
            </div>
        </div>
    );
};

export default Navbar;