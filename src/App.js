import { hotelsData } from "./components/data/data"
import { useState, useEffect} from "react";
import { Filtros } from "./components/filters"
import { Resultados }  from "./components/resultados"
import { Header } from "./components/header/header"
import { dateToUnix } from "./utils/dates";
import "./App.css"

function App() {

  const [country, setCountry] = useState("seleccionar");
  const [price, setPrice] = useState("seleccionar");
  const [size, setSize] = useState("seleccionar");
  const [userDate, setUserDate] = useState({
    from: '',
    to: ''
  });
  const [userDateUnix, setUserDateUnix] = useState({
      from: '',
      to: ''
    });
  const [filterHotelList, setfilterHotelList] = useState(hotelsData);


  const handleDate = (key, value) => {
    const newUserDate = { ...userDate, [key]: value };
    setUserDate(newUserDate);
    if (newUserDate.from !== '' && newUserDate.to !== '') {
      const newUserDateUnix = dateToUnix(newUserDate);
      setUserDateUnix(newUserDateUnix);
    }
  };

  const filterHotels = () => {
    let newFilterHotels = [...hotelsData];

    if (userDate.from !== '' && userDate.to !== '') {
      newFilterHotels = hotelsData.filter(hotel => {
        const hotelFrom = userDateUnix.from >= hotel.availabilityFrom;
        const hotelTo = userDateUnix.to <= hotel.availabilityTo;
        return hotelFrom && hotelTo;
      });
    }

    setfilterHotelList(newFilterHotels);
  };

  useEffect(filterHotels, [userDate, userDateUnix.from, userDateUnix.to]);

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

    const filterHotelList = hotelsData.filter((hotel) => countryFilter(hotel) && priceFilter(hotel) && sizeFilter(hotel));
    setfilterHotelList(filterHotelList);
  }, [country, price, size]);
  

  const handleReset = (e) => {
    const userDateEmpty = {
      from: '',
      to: ''
    };
    setUserDate(userDateEmpty);
    setUserDateUnix(userDateEmpty);
    setCountry("seleccionar");
    setPrice("seleccionar");
    setSize("seleccionar");
  };

  return (
   <div className="app">
      <Header
        // dateFrom={dateFrom}
        // dateTo={dateTo}
        userDate={userDate}
        country={country}
        price={price}
        size={size}
        handleReset={handleReset}
      />
      <Filtros
        userDate={userDate}
        handleDate={handleDate}
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
   </div>
  );
}
export default App;
