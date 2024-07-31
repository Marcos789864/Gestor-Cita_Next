import React from "react";
import Cita from "../Cita/page";
import styles from '../../page.module.css';

function ListadoCita({ listaCitas, Eliminar }) {
    if (!Array.isArray(listaCitas)) {
        listaCitas = [listaCitas];
    }

    return (
        <div className={styles.ListadoCita}>
            {listaCitas.map((cita, index) => (
                <Cita 
                    key={index}
                    Nombre={cita.Nombre}
                    CantPersonas={cita.CantPersonas}
                    Fecha={cita.Fecha}
                    Horario={cita.Horario} 
                    Eliminar={() => Eliminar(index)}
                />
            ))}
        </div>
    );
}

export default ListadoCita;