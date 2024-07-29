import React from "react"; 
import styles from "./page.modules.css";

function Cita ({Nombre,CantPersonas,Fecha,Horario,Eliminar})
{
return( 
<div className="cita">
    <p>Nombre {Nombre}</p>
    <p>Cantidad de Personas: {CantPersonas}</p>
    <p>Fecha: {Fecha}</p>
    <p>Horario: {Horario}</p>

<button onClick={Eliminar}>Eliminar</button>
</div>
);
}
export default Cita