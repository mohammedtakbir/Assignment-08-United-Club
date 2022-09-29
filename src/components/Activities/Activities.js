import React from 'react';
import SingleActivities from '../SingleActivities/SingleActivities';
import './Activities.css'
const Activities = ({activities}) => {
    console.log(activities)
    return (
        <div>
            <div className="cart-container">
                {
                    activities.map(activity => <SingleActivities activity={activity}></SingleActivities>)
                }
            </div>
        </div>
    );
};

export default Activities;