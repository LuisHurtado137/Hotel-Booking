import Card from "./card/card"

export let Resultados = (hotel) => {
  return ( 
      <div className="hotel-list">
      {hotel.filterHotelList.map((hotel) => (
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
          ) 
        ) 
      } 
    </div>
  )     
}
