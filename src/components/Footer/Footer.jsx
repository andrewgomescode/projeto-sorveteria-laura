import Image from "next/image";

import styles from "./Footer.module.css";
import Logo from "../../../public/logo.png";

export default function Footer() {
  return (
    <footer className={styles.container_rodape}>
      <div className={styles.container_informacoes}>
        <Image src={Logo} alt="logomarca" />
        <div>
          <h3>ENDEREÇO</h3>
          <p>Rua Padre Nino Mirald (Na praça da Instalação no Bairro Santo Elias)</p>
          <p>Mesquita - Santo Elias, Rio de Janeiro 26562-380</p>
        </div>
        <div>
          <h3>CONTATO</h3>
          <p>laura@laura.com</p>
          <p>Tel: (21) 99999-9999</p>
        </div>
        <div>
          <h3>HORÁRIOS</h3>
          <p>TERÇA A SÁBADO</p>
          <p>12:00 - 22:00</p>
          <p>DOMINGO</p>
          <p>14:00 - 22:00</p>
        </div>
      </div>
      <div className={styles.container_direito_autoral}>
        <p>Gelateria. Orgulhosamente desenvolvido por "Andrew Gomes"</p>
      </div>
    </footer>
  );
}