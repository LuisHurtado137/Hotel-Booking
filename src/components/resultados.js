import Card from "./card/card"

export let Resultados = (props) => {
  return (
    <div className="hotel-list">
      {props.filterHotelList.map((hotel) => (
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
        ))}
    </div>
  )      
}
//         
//   
//     );
  
  // const filterHotel = (hotel) =>   
  //       (props.country === "todos"? true
  //         : hotel.country === props.country) &&
  //       (props.price === "todos" ? true : hotel.price === props.price) &&
  //       (props.size ==="todos" ? true : hotel.size === props.size)
      

  // export function resultados(props) {
//     return(
//         hotelsData.map((objeto) => (
//             <hotelCard 
//                 key={objeto.slug}
//                 name={objeto.name}
//                 photo={objeto.photo}
//                 description={objeto.description}
//                 rooms={objeto.rooms}
//                 city={objeto.city}
//                 country={objeto.country}
//                 price={objeto.price}
//             />
//         )
//         )
//     )    
// }