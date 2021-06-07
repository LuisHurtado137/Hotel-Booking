import Card from "../card/card"
import hotelError from "../hotel-not-found/hotel.jpg"

export let Resultados = (hotel) => {
 
  return ( 
      <div className="hotel-list">
        {hotel.filterHotelList.length > 0 ? (
            hotel.filterHotelList.map((hotel) => {
              return(
                <Card
                  key={hotel.slug}
                  name={hotel.name}
                  photo={hotel.photo}
                  description={hotel.description}
                  rooms={hotel.rooms}
                  city={hotel.city}
                  country={hotel.country}
                  price={hotel.price}
                />
              );
            })
    ) : (
      <div className="animation-container">
        <h2 className="error">No se encontraron resultados</h2>
        <img className="error-hotel" src={hotelError} alt="hotel-not-found"/>
      </div>  
    )}
    </div>
  )    
}
