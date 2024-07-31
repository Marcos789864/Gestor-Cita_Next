
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  
  return (
    
    <main>
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/Quienes_Somos">
            Quienes Somos
          </Link>
        </li>
        <li>
          <Link href="/Reservas">
           reservas
          </Link>
        </li>
        <li>
          <Link href="/Ayuda">
           Ayuda
          </Link>
        </li>
      </ul>
    </nav>
    <div className={styles.description}>
      <h1>Bienvenido a Nuestro Sitio Web</h1>
      <p>
        Descubre todo lo que tenemos para ofrecerte. Navega por nuestras secciones para conocer más sobre nosotros, hacer reservas para tus mascotas, y ponerte en contacto si necesitas ayuda.
      </p>
    </div>
  </main>

  );
}