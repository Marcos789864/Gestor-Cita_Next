"use client";
import react, {useState} from "react";
import styles from '../page.module.css';
import Form from '../components/Form/page';
import Listado from "../components/Listado/page";
import Cita from "../components/Cita/page";

function Reservas()
{

    const [citas, setCitas] = useState([]);

    const agregarCita = (nuevaCita) => {
      setCitas([...citas, nuevaCita]);
    };
  
    const eliminarCita = (index) => {
      const nuevasCitas = [...citas];
      nuevasCitas.splice(index, 1);
      setCitas(nuevasCitas);
    };

    return (
        <div>
        <main className={styles['main-content']}>

<h1> Reservas</h1>

        </main>
        <main className={styles['formGroup']}>
            <h3>Formulario reserva</h3>
        <Form tipo1 = "text" tipo2 = "number" tipo3 = "date" tipo4 = "time" tipo5 = "submit" agregarCita = {agregarCita} className= 'Form'></Form>
      <Listado listaCitas={citas} Eliminar={eliminarCita} className= 'Listado'></Listado>
      </main>
      </div>
    );
    
}

export default Reservas