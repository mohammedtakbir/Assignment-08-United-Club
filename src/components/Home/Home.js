import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Activities from '../Activities/Activities';
import './Home.css'
const Home = () => {
    const [activities, setActivities] =useState([]);
    useEffect(() => {
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, []);
    return (
        <div className='mt-10 main'>
            <h1 className='text-2xl font-medium'>Select Today's Exercise</h1>
            <div className="home-container mt-5">
                <div className="left-side">
                    <div className="activities-container">
                        <Activities activities={activities}></Activities>
                    </div>
                </div>
                <div className="right-side">
                    <h1>this is left side</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;