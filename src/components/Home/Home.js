import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import About from '../About/About';
import Activities from '../Activities/Activities';
import AddBreak from '../addBreak/AddBreak';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import './Home.css'
const Home = () => {
    const [activities, setActivities] =useState([]);
    useEffect(() => {
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, []);

    const [cart, setCart] = useState([]);
    const handleAddToCart = (selectActivity) => {
        if(cart?.length){
            const newActivity = [...cart, selectActivity];
            setCart(newActivity);
        }else{
            setCart([selectActivity]);
        }
    }
    return (
        <div className='mt-10 main'>
            <h1 className='text-2xl font-medium'>Select Today's Exercise</h1>
            <div className="home-container mt-5">
                <div className="left-side">
                    <div className="activities-container">
                        <Activities activities={activities} handleAddToCart={handleAddToCart}></Activities>
                    </div>
                </div>
                <div className="right-side bg-white pt-5 px-10">
                    <div className="details-container">
                        <About></About>
                        <AddBreak></AddBreak>
                        <ExerciseDetails cart={cart}></ExerciseDetails>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;