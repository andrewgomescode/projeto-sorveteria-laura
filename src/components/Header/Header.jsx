import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo.png";

export default function Header() {
  return (
    <div className={styles.topo_container}>
      <div>
        <Image src={Logo} alt="Logo da Óticas Vida" />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/sabores">Sabores</Link>
          <Link href="/sobre">Sobre</Link>
        </nav>
      </div>
    </div>
  )
}