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
  
  // ---estado para tomar la fecha del usuario
  const [userDate, setUserDate] = useState({
    from: '',
    to: ''
  });
  
  // --- estado para tomar la fecha del usuario en tiempo UNIX
  const [userDateUnix, setUserDateUnix] = useState({
      from: '',
      to: ''
    });


  const [filterHotelList, setfilterHotelList] = useState(hotelsData);
    // const [dateFrom, setDateFrom] = useState("");
    // const [dateTo, setDateTo] = useState("");


//HANDLER DE LAS FECHAS 



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

 
  
  // useEffect(() => {

  //      const conditionDate = (hotel) => {
         
  //       let filterHotelList = [...hotelsData];

  //           if (filterUserDate.from !== '' && filterUserDate.to !== '') {
  //             filterHotelList = hotelsData.filter((hotel) => {
  //               const hotelDateFrom = filterUserDateUnix.from >= hotel.availabilityFrom;
  //               const hotelDateTo = filterUserDateUnix.to <= hotel.availabilityTo;
  //               return hotelDateFrom && hotelDateTo;
  //             });
  //             let filterHotelList = hotelsData.filter((hotel) => conditionDate(hotel))
  //             setfilterHotelList(filterHotelList) 
  //           } 
  //      }
  //   }, [filterUserDate, filterUserDateUnix.from,]);

  



//cambiar formatDate por el ejemplo de Fran
// los inputs de fechas filtran los hoteles pero en el input from se deben poner dos días después para que se filtre. 
//  function formatDate() {
//     var d = new Date(),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();
  
//     if (month.length < 0) 
//         month = '0' + month;
//     if (day.length < 0) 
//         day = '0' + day;
  
//     return [year, month, day].join('-');
//   }

  // const handleDateFrom = (e) => {
  //  if (new Date (e.target.value) < new Date(formatDate())) {
  //    alert(`La fecha no puede ser anterior al ${formatDate()}`)
  //  } else if (dateTo && (new Date(e.target.value) > new Date(dateTo))) {
  //     alert(`La fecha ingresada no puede ser posterior a la ${dateTo}`)
  //   } else {
  //      setDateFrom(e.target.value)
  //   }
  // }

  // const handleDateTo = (e) => {
  //   if (new Date (e.target.value) < new Date(formatDate())) {
  //     alert(`La fecha insertada no puede ser anterior a la ${formatDate()}`) 
  //   }
  //   setDateTo(e.target.value);
  // }
    

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
  //  const dataFilter = (hotel) =>{
  //    return (!dateFrom || !dateTo ? true:
  //     hotel.availabilityFrom <= new Date(dateFrom).valueOf() &&
  //     hotel.availabilityTo >= new Date(dateFrom).valueOf() &&
  //     hotel.availabilityFrom <= new Date(dateTo).valueOf() &&
  //     hotel.availabilityTo >= new Date(dateTo).valueOf() 
  //     )
  //  }

  // condicionales de las fechas 

    // const conditionDate = () => {
    //   let filteredHotelList = [...hotelsData];

    //   if (filterUserDate.from !== '' && filterUserDate.to !== '') {
    //     filteredHotelList = hotelsData.filter(hotel => {
    //       const hotelDateFrom = filterUserDateUnix.from >= hotel.availabilityFrom;
    //       const hotelDateTo = filterUserDateUnix.to <= hotel.availabilityTo;
    //       return hotelDateFrom && hotelDateTo;
    //     });
    //     setfilterHotelList(filteredHotelList)
    //   }
    // }

    const filterHotelList = hotelsData.filter((hotel) => countryFilter(hotel) && priceFilter(hotel) && sizeFilter(hotel));
    setfilterHotelList(filterHotelList);
  }, [country, price, size]);
  
 
  // const conditionDate = (hotel) => {
  //   let filteredHotelList = [...hotelsData];

  //   if (filterUserDate.from !== '' && filterUserDate.to !== '') {
  //     filteredHotelList = hotelsData.filter(hotel => {
  //       return(
  //         hotel.availabilityFrom <= new Date(filterUserDate).valueOf() &&
  //         hotel.availabilityTo >= new Date(filterUserDate).valueOf() &&
  //         hotel.availabilityFrom <= new Date(filterUserDate).valueOf() &&
  //         hotel.availabilityTo >= new Date(filterUserDate).valueOf() 
  //       )
  //     });
  //     setfilterHotelList(filteredHotelList)
  //   }
  // }

  // useEffect(() =>  [filterUserDate, filterUserDateUnix.from, filterUserDateUnix.to, conditionDate])

  const handleReset = (e) => {
    // setDateFrom("")
    // setDateTo("")
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
        // dateFrom={dateFrom}
        // handleDateFrom={handleDateFrom}
        // dateTo={dateTo}
        // handleDateTo={handleDateTo}
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
