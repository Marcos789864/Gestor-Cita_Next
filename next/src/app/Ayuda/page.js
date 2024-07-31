"use agent"
import react from "react";
import styles from '../page.module.css';
import Input from "../components/Input/page";

function Ayuda()
{
    return(
        <div>
        <main className={styles['main-content']}>
            <h1> Contacto</h1>
        </main>

        <main className={styles['formGroup']}>

        <h1>Contactanos</h1>
        <Input  id="nombre" tipo={"email"} txt="Gmail"  required  />
        <Input id="asunto" tipo={"text"}  txt="Asunto"  required />
        <Input id="Enviar" tipo={"submit"}   required />
        </main>
        </div>
    );
}

export default Ayuda