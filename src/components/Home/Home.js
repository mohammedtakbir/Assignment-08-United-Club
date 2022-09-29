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
    };

    const [addBreaks, setAddBreaks] = useState([]);
    useEffect( () => {
        const storedData = JSON.parse(localStorage.getItem('addTime')); 
        setAddBreaks(storedData);
    }, []);

    return (
        <div className='my-10 main'>
            <h1 className='text-2xl font-medium'>Select Today's Training</h1>
            <div className="home-container mt-5">
                <div className="left-side">
                    <div className="activities-container">
                        <Activities activities={activities} handleAddToCart={handleAddToCart}></Activities>
                    </div>
                </div>
                <div className="right-side bg-white px-9 py-7 rounded-md h-[780px]">
                    <div className="details-container">
                        <About></About>
                        <AddBreak setAddBreaks={setAddBreaks}></AddBreak>
                        <ExerciseDetails cart={cart} addBreaks={addBreaks}></ExerciseDetails>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;