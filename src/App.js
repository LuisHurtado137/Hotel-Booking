import { hotelsData } from "./components/data/data"
import { useState, useEffect} from "react";
import { Filtros } from "./components/filters"
import { Resultados }  from "./components/resultados"
import { Header } from "./components/header/header"
import "./App.css"
// import Lottie from "lottie-web";

function App() {
  const [country, setCountry] = useState("seleccionar");
  const [price, setPrice] = useState("seleccionar");
  const [size, setSize] = useState("seleccionar");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [filterHotelList, setfilterHotelList] = useState([]);
 
  const handleDateFrom = (e) => {
   if (new Date (e.target.value) < new Date(formatDate())) {
     alert(`La fecha no puede ser anterior al ${formatDate()}`)
   } else if (dateTo && (new Date(e.target.value) > new Date(dateTo))) {
      alert(`La fecha ingresada no puede ser posterior a la ${dateTo}`)
    } else {
       setDateFrom(e.target.value)
    }
  }
  const handleDateTo = (e) => {
    if (new Date (e.target.value) < new Date(formatDate())) {
      alert(`La fecha insertada no puede ser anterior a la ${formatDate()}`)
    }
    setDateTo(e.target.value);
  }
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

  function formatDate() {
    let dates = new Date(),
        month = '' + (dates.getMonth() + 1),
        day = '' + dates.getDate(),
        year = dates.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [year, month, day].join('-');
  }

  useEffect(() => {
    const countryFilter = (hotel) => {
      return (country === "seleccionar" ? true : country === "todos" ? true : country === hotel.country )}
    const priceFilter = (hotel) => {
      return (price === "seleccionar" ? true : price === "todos" ? true : parseInt(price, 0) === hotel.price )}
    const sizeFilter = (hotel) => {
      return (
        size === "seleccionar"
        ? true
        : size === "pequeño"
        ? hotel.rooms <= 10
        : size === "mediano"
        ? hotel.rooms > 10 && hotel.rooms <= 20
        : size === "grande" 
        ? hotel.rooms > 20 
        : size === "todos" ? true : hotel.rooms 
      )
    }
   const dataFilter = (hotel) =>{
     return (!dateFrom || !dateTo ? true:
      hotel.availabilityFrom <= new Date(dateFrom).valueOf() &&
      hotel.availabilityTo >= new Date(dateFrom).valueOf() &&
      hotel.availabilityFrom <= new Date(dateTo).valueOf() &&
      hotel.availabilityTo >= new Date(dateTo).valueOf() 
      )
   }
    const filterHotelList = hotelsData.filter((hotel) => countryFilter(hotel) && priceFilter(hotel) && sizeFilter(hotel) && dataFilter(hotel));
    setfilterHotelList(filterHotelList);
  }, [country, price, size, dateFrom, dateTo]);

  const handleReset = (e) => {
    setDateFrom("")
    setDateTo("")
    setCountry("seleccionar");
    setPrice("seleccionar");
    setSize("seleccionar");
  };

  
  
  // const animation = useRef(null)
  
  
  // useEffect(() =>{
  //   Lottie.loadAnimation({
  //     container: animation.current,
  //     loop: true,
  //     autoplay: true,
  //     animationData: require("./error.json")
  //   }) 
  // }, [])

  return (
   <div className="app">
      <Header
        dateFrom={dateFrom}
        dateTo={dateTo}
        country={country}
        price={price}
        size={size}
        handleReset={handleReset}
      />
      <Filtros
        dateFrom={dateFrom}
        handleDateFrom={handleDateFrom}
        dateTo={dateTo}
        handleDateTo={handleDateTo}
        country={country}
        handleCountry={handleCountry}
        price={price} 
        handlePrice={handlePrice}
        size={size}
        handleSize={handleSize}
        handleReset={handleReset}
      />
      <Resultados
        filterHotelList={filterHotelList} 
      />
      {/* <div className="animation" ref={animation}><span>No se encontraron resultados</span></div> */}
   </div>
  );
}
export default App;
