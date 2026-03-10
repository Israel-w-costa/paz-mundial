import RouterLink from "../RouterLink";
import styles from "./styles.module.css";

export function Footer() {
  const data = new Date();
  const year = data.getFullYear();
  return (
    <>
      <footer className={styles.footer}>
        <span>©{year} Projeto sem fins lucrativos</span>
        <RouterLink href="/aboutPeace">
          <p style={{ fontSize: "1.2rem", color: "black" }}>
            Sobre Projeto Paz Mundial
          </p>
        </RouterLink>
      </footer>
    </>
  );
}
