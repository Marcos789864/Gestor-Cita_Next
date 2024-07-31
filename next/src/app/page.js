import Image from "next/image";
import styles from "./page.module.css";
import imagen from '../../img/fondo.jpg'
export default function Home() {

  
  return (
    
    
 
 <main className={styles.main}>
        <div className={styles['main-content']}>
          <h1>Bienvenido a Nuestro Restaurante</h1>
          <p>Descubre nuestro menú y haz una reserva.</p>
        </div>
      </main>
    
   
   

  );
}