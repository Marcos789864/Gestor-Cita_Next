import Image from "next/image";

 import styles from "./page.modules.css";

export default function Home() {
  return (
    

    <main className={styles.main}>
      <nav className={styles.navbar}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/quienes-somos">Quienes Somos</a></li>
          <li><a href="/reservas">Reservas</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
      <div className={styles.description}>
        <h1>Bienvenido a Nuestro Sitio Web</h1>
        <p>Descubre todo lo que tenemos para ofrecerte. Navega por nuestras secciones para conocer más sobre nosotros, hacer reservas para tus mascotas, y ponerte en contacto si necesitas ayuda.</p>
      </div>
    </main>
  );
}