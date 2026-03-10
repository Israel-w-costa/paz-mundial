import { HeartIcon } from "lucide-react";
import Container from "../../components/Container";
import MainTemplates from "../../templates/MainTemplates";
import styles from "./styles.module.css";
import RouterLink from "../../components/RouterLink";
import { useSignContext } from "../../contexts/SignContext/useSignContext";
import { useEffect } from "react";

export function Signatures() {
  useEffect(() => {
    document.title = "Paz Mundial - Assinaturas";
  }, []);

  const { state } = useSignContext();

  const uniqueCountries = [...new Set(state.map((item) => item.country))];

  return (
    <>
      <MainTemplates>
        <Container>
          <div className={styles.container}>
            <h1 className={styles.title}>
              Vozes Pela <strong>Paz</strong>
            </h1>
            <p className={styles.paragraph}>
              Conheça todas as pessoas que já assinaram nosso abaixo-assinado.
              Cada nome representa esperança por um mundo melhor.
            </p>
            <div className={styles.containerInfo}>
              <div>
                <span>{state.length}</span>
                <span>Total de Assinaturas</span>
              </div>
              <div>
                <span>{uniqueCountries.length}</span>
                <span>Países Representados</span>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>País</th>
                </tr>
              </thead>

              <tbody>
                {state.map((row, index) => (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>

        <Container>
          <div className={`${styles.container} ${styles.containerBanner}`}>
            <HeartIcon />
            <h2 className={styles.title}>Sua voz também importa!</h2>
            <p className={styles.paragraph}>
              Ainda não assinou? Junte-se a nós e faça parte deste movimento
              pela paz. Assinar o Abaixo-Assinado
            </p>
            <RouterLink href="/sign">
              <span>Assine o Baixo Assinado</span>
            </RouterLink>
          </div>
        </Container>
      </MainTemplates>
    </>
  );
}
