import "./header.css"

export function Header(props) {
  
  let naturalDate = (date) => {
    let d = new Date(date + " 00:00"),
        month = d.getMonth(),
        day = d.getDate(),
        year = d.getFullYear();

    if (month === 0) {
        month = "Enero"
    } else if (month === 1){
        month =  "Febrero"
    } else if (month === 2){
        month = "Marzo"
    } else if (month === 3){
        month = "Abril"
    } else if (month === 4){
        month = "Mayo"
    } else if (month === 5){
        month = "Junio"
    } else if (month === 6){
        month = "Julio"
    } else if (month === 7){
        month = "Agosto"
    } else if (month === 8){
        month = "Septiembre"
    } else if (month === 9){
        month = "Octubre"
    } else if (month === 10){
        month = "Noviembre"
    } else  month = "Diciembre"

    return  `${day} de ${month} del ${year}`   
  }
    return (
      <div className="header">
        <p className="header-title">Hotel Reservation</p>
        <h2 className="header-date">
            {`Buscas hotel en ${props.country === "todos" ? "cualquier pais" : props.country}
            con un precio ${props.price === "todos" ? "cualquier precio": `${props.price}`} 
            de un tamaño ${props.size === "todos" ? "cualquier tamaño" : props.size}
            desde la fecha: ${!props.userDate.from ? "_____" : naturalDate(props.userDate.from)}
            hasta ${!props.userDate.to ? "_____" : naturalDate(props.userDate.to)}`}
        </h2>
      </div>
    );
}
