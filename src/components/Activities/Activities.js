import React from 'react';
import SingleActivities from '../SingleActivities/SingleActivities';
import './Activities.css'
const Activities = ({activities, handleAddToCart}) => {
    return (
        <div>
            <div className="cart-container">
                {
                    activities.map(activity => <SingleActivities
                        activity={activity}
                        key={activity.id}
                        handleAddToCart={handleAddToCart}
                        ></SingleActivities>)
                }
            </div>
        </div>
    );
};

export default Activities;