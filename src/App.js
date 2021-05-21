import { hotelsData } from "./components/data/data"
import { useState, useEffect } from "react";
import { Filtros } from "./components/filters"
import  { Resultados }  from "./components/resultados"
import { Header } from "./components/header/header"
import "./App.css"

function App() {
  const [country, setCountry] = useState("seleccionar");
  const [price, setPrice] = useState("seleccionar");
  const [size, setSize] = useState("seleccionar");
  const [filterHotelList, setfilterHotelList] = useState([]);

  const handleCountry = (e) => {
    const country = e.target.value;
    setCountry(country);
  };
  const handlePrice = (e) => {
    const price = e.target.value;
    setPrice(price);
  };
  const handleSize = (e) => {
    const size = e.target.value;
    setSize(size);
  };

  useEffect(() => {
    const countryFilter = (hotel) => {
      return country === "seleccionar" ? true : hotel.country === country && country === "todos" ? true : hotel.country; 
    };
  
    const priceFilter = (hotel) => {
      return price === "seleccionar" ? true : parseInt(hotel.price, 0) === price && price === "todos" ? true : hotel.price;
    };
  
    const sizeFilter = (hotel) => {
      return size === "seleccionar"
        ? true
        : size === "pequeño"
        ? hotel.rooms <= 10
        : size === "mediano"
        ? hotel.rooms > 10 && hotel.rooms <= 20
        : hotel.rooms > 20 && size === "todos" ? true : hotel.size;
    };

    const filterHotelList = hotelsData.filter((hotel) => countryFilter(hotel) && priceFilter(hotel) && sizeFilter(hotel));

    setfilterHotelList(filterHotelList);
  }, [country, price, size]);



  
  return (
   <div className="app">
      <Header/>
      <Filtros
        stateCountry={[country, handleCountry]}
        statePrice={[price, handlePrice]}
        stateSize={[size, handleSize]}
      />
      <Resultados
        filterHotelList={filterHotelList}
      />
   </div>
  );
}

export default App;
