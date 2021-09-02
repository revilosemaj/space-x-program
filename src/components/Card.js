import React from 'react';
import './Card.css';

const Card = ({ mission_name, imageUrl, flight_number, mission_id, launch_year, launch_success, land_success }) => {
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            {
                imageUrl ? <img alt='rocket mission' src={imageUrl} className="cardImg" /> :
                    <div className="missingImage"> Image is missing </div>
            }
            <div>
                <h2>{mission_name}#{flight_number}</h2>
                <p>Mission Ids: {mission_id}</p>
                <p>Launch Year: {launch_year}</p>
                <p>Successful Launch: {launch_success && launch_success.toString()}</p>
                <p>Successful Landing: {land_success && land_success.toString()}</p>
            </div>
        </div>
    );
}

export default Card;