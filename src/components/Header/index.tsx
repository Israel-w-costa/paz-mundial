import { BirdIcon, FilePenIcon, HomeIcon, UsersIcon } from "lucide-react";
import RouterLink from "../RouterLink";
import styles from "./styles.module.css";

export function Header() {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.header}>
          <BirdIcon />
          <h2>Paz Mundial</h2>
          <span>Abaixo-Assinado</span>
        </div>
        <nav className={styles.link}>
          <RouterLink href="/">
            <HomeIcon aria-label="ir para página inicial" />
            <span>Início</span>
          </RouterLink>
          <RouterLink href="/sign">
            <FilePenIcon aria-label="Assinar o baixo assinado " />
            <span>Assinar</span>
          </RouterLink>
          <RouterLink href="/signatures">
            <UsersIcon aria-label="Ver as assinaturas do baixo assinado" />
            <span>Assinaturas</span>
          </RouterLink>
        </nav>
      </header>
    </>
  );
}
