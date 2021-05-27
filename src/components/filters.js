export function Filtros(props) {
    return (
      <div className="filtros">
        <input type="date" className="date-filter" onChange={props.handleDateFrom} value={props.dateFrom}/>
        <input type="date" className="date-filter" onChange={props.handleDateTo} value={props.dateTo}/>
        <select value={props.country} onChange={props.handleCountry} className="select">
            <option disabled value="seleccionar">Seleccione el país</option>
            <option value="todos">Cualquier País</option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Uruguay">Uruguay</option>
        </select>
        <select value={props.price} onChange={props.handlePrice} className="select">
            <option disabled value="seleccionar">Seleccione el precio</option>
            <option value="todos">Cualquier precio</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
        </select>
        <select value={props.size} onChange={props.handleSize} className="select">
            <option disabled value="seleccionar">Seleccione el tamaño</option>
            <option value="todos">Cualquier tamaño</option>
            <option value="pequeño">Pequeño</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
        </select>
        <button className="reset-btn" onClick={props.handleReset}>Reset</button> 
      </div>
    );
  }