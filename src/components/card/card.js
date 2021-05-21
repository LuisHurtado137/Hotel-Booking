import React from "react";
import bed from "../icons/bed.svg"
import coin from "../icons/coin.svg"
import location from "../icons/location.svg"
import "./card.css"

export default function Card(props) {
    return (
            <div className="card-container">
                <div className="hotel-img">
                    <img src={props.photo} alt="hotel" width="100%"/>
                </div>
                <div className="card-info">
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="hotel-details">
                    <div className="location-details"> 
                        <img
                            className="location-icon"
                            src={location}
                            alt="location-icon"
                        />
                        {props.city}, {props.country}
                    </div>
                    <div className="room-details"> 
                        <img
                            className="rooms-bed"
                            src={bed}
                            alt="bed-icon"
                        />
                        {props.rooms} Habitaciones
                    </div>
                    <div className="price-details"> 
                        <img
                            className="price-icon"
                            src={coin}
                            alt="prices"
                        />
                        {props.price} 
                    </div>
                </div>
                <div className="reserve-btn">
                    <button className="btn">
                        Reservar
                    </button>
                </div>
            </div>

    )
}