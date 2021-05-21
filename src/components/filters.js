
export function Filtros(props) {
    return (
      <div className="filtros">
        <div >
          <entryDate/> 
          <exitDate/>
        </div>
        <div >
          <Country
            state={props.stateCountry[0]}
            handler={props.stateCountry[1]}
          />
          <Price
            state={props.statePrice[0]}
            handler={props.statePrice[1]}
          />
          <Size
            state={props.stateSize[0]}
            handler={props.stateSize[1]}
          />
        </div>
      </div>
    );
  }

  function entryDate(props) {
    
  }
  function exitDate(props) {
    
  }
   function Country (props) {
    return (
        <select value={props.state} onChange={props.handler} className="select">
            <option disabled value="seleccionar">Seleccione el país</option>
            <option value="todos">Todos</option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Uruguay">Uruguay</option>
        </select>
      )
  }

  function Price(props) {
    return (
      <select value={props.state} onChange={props.handler} className="select">
        <option disabled value="seleccionar">Seleccione el precio</option>
        <option value="todos">Todos</option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4">$$$$</option>
      </select>
    );
  }
  
  function Size (props) {
    return (
      <select value={props.state} onChange={props.handler} className="select">
        <option disabled value="seleccionar">Seleccione el tamaño</option>
        <option value="todos">Todos</option>
        <option value="pequeño">Pequeño</option>
        <option value="mediano">Mediano</option>
        <option value="grande">Grande</option>
      </select>
    );
  }
  
 
  