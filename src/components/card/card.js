import React from "react";
import bed from "../icons/bed.svg";
import coin from "../icons/coin.svg";
import location from "../icons/location.svg";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card-container">
      <img className="hotel-img" src={props.photo} alt="hotel" width="100%" />
      <div className="card-info">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <div className="hotel-details">
        <div className="location-details">
          <img className="location-icon" src={location} alt="location-icon" />
          <h3>
            {props.city}, {props.country}
          </h3>
        </div>
        <div className="room-details">
          <img className="rooms-bed" src={bed} alt="bed-icon" />
          <h3>{props.rooms} Habitaciones</h3>
        </div>
        <div className="price-details">
          <img className="price-icon" src={coin} alt="prices" />
          <h3>{props.price} </h3>
        </div>
      </div>
      <button className="btn">Reservar</button>
    </div>
  );
}
