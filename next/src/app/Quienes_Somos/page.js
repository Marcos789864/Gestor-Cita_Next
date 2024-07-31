import react from "react";
import styles from '../page.module.css';

function Quienes_Somos()
{
    return(
        <div>
        <main className={styles['main-contentSomos']}>
            <h1>Quienes Somos</h1>
        </main>
        <main className={styles['card']}>
        <h3> Marcos Martinez</h3>
        <p>Soy un estaudainte de ort, estudio informatica y decidimos crear esta pagina junto a mi compañero para facilitarle a los restaurantes la reserva de sus clientes </p>
        </main>
        <main className={styles['card']}>
        <h3>Bruno Gurwicz</h3>
        <p>Soy un estaudainte de ort, estudio informatica y decidimos crear esta pagina junto a mi compañero para facilitarle a los restaurantes la reserva de sus clientes</p>
        </main>
        </div>
    );
}

export default Quienes_Somos