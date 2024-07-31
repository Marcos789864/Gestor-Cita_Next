import Link from "next/link";
import styles from '../../page.module.css'
const Navbar = () => {
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
    </main>
  
    )
};

export default Navbar;


