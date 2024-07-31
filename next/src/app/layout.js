import { Inter } from "next/font/google";
import Navbar from './components/Navbar/page';
import styles from './page.module.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body suppressHydrationWarning={true}>
        <div className={styles.fondo}>
          <Navbar/>
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </body>
    </html>

  );
}
