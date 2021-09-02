import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ launchData }) => {
    return (
        <div className="cardContainer">
            {
                launchData.map(data => {
                    const land_success = data.rocket.first_stage.cores[0].land_success;
                    const imageUrl = data.links.flickr_images[0];
                    const id = Math.floor((1 + Math.random()) * 0x100000).toString(16).toUpperCase();
                    const mission_id = data.mission_id.length ? data.mission_id : id;
                    return (
                        <Card
                            key={id}
                            mission_id={mission_id}
                            imageUrl={imageUrl}
                            flight_number={data.flight_number}
                            mission_name={data.mission_name}
                            launch_year={data.launch_year}
                            launch_success={data.launch_success}
                            land_success={land_success}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;