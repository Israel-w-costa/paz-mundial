import MainTemplates from "../../templates/MainTemplates";
import styles from "./styles.module.css";
import Container from "../../components/Container";
import { useEffect } from "react";
import DefaultButton from "../../components/DefaultButton";
import { ArrowRightIcon, Bird, UsersIcon } from "lucide-react";
import ContainerFluid from "../../components/ContainerFluid";
import { useSignContext } from "../../contexts/SignContext/useSignContext";
import RouterLink from "../../components/RouterLink";

function Home() {
  useEffect(() => {
    document.title = "Paz Mundial - Página inicial";
  }, []);

  const { state } = useSignContext();

  return (
    <>
      <MainTemplates>
        <ContainerFluid>
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Juntos Podemos <br /> <strong>Construir a Paz</strong>
              </h1>

              <p className={styles.description}>
                O mundo enfrenta múltiplos conflitos armados que afetam milhões
                de vidas. Sua voz importa. Assine nosso abaixo-assinado e faça
                parte do movimento global pela paz e dignidade humana.
              </p>

              <div className={styles.heroActions}>
                <DefaultButton>
                  <span>Assinar Agora</span>
                </DefaultButton>

                <DefaultButton>
                  <span>Ver Assinaturas</span>
                </DefaultButton>
              </div>
              <div className={styles.usersIcon}>
                <UsersIcon />
                <div className={styles.usersInfo}>
                  <span>{state.length}</span>
                  <span>Pessoas já assinaram</span>
                </div>
              </div>
            </div>
          </section>
        </ContainerFluid>

        <Container>
          <div className={styles.conflictsHeader}>
            <h2 className={styles.conflictsTitle}>
              Conflitos ao Redor do Mundo
            </h2>
            <p className={styles.conflictsDescription}>
              Milhões de pessoas sofrem diariamente com os efeitos devastadores
              da guerra. Conheça os principais conflitos que assolam nosso
              planeta.
            </p>
          </div>

          <div className={styles.conflictsGrid}>
            <div className={styles.conflictCard}>
              <h3>Ucrânia</h3>
              <p>Conflito intenso com grave crise humanitária</p>
            </div>

            <div className={styles.conflictCard}>
              <h3>Gaza/Israel</h3>
              <p>Conflito armado desde 2022 com milhões de deslocados</p>
            </div>

            <div className={styles.conflictCard}>
              <h3>Sudão</h3>
              <p>Guerra civil com milhões de pessoas em risco</p>
            </div>

            <div className={styles.conflictCard}>
              <h3>Iêmen</h3>
              <p>Anos de conflito causando fome e destruição</p>
            </div>

            <div className={styles.conflictCard}>
              <h3>Myanmar</h3>
              <p>Conflito civil e perseguição de minorias</p>
            </div>

            <div className={styles.conflictCard}>
              <h3>Síria</h3>
              <p>Mais de uma década de guerra civil</p>
            </div>
          </div>
        </Container>

        <Container>
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <h2 className={styles.missionTitle}>
                Por que Este Abaixo-Assinado?
              </h2>

              <p className={styles.description}>
                Acreditamos que cada voz tem poder. Este abaixo-assinado
                representa um chamado coletivo por diálogo, diplomacia e
                resolução pacífica de conflitos.
              </p>

              <p className={styles.description}>
                Queremos mostrar aos líderes mundiais que as pessoas comuns
                desejam a paz acima de tudo. Juntos, podemos pressionar por
                mudanças e criar um movimento que transcende fronteiras.
              </p>
            </div>

            <div className={styles.missionImageWrapper}>
              <img
                src="../../assets/handsunique.jpg"
                alt="Pessoas unidas pela paz"
                className={styles.missionImage}
              />
            </div>
          </div>
          <div className={`${styles.container} ${styles.containerBanner}`}>
            <Bird />
            <h2 className={styles.title}>Faça Parte da Mudança</h2>
            <p className={styles.paragraph}>
              Sua assinatura representa esperança. Junte-se a milhares de
              pessoas que acreditam em um mundo mais pacífico.
            </p>
            <RouterLink href="/sign">
              <DefaultButton>
                <span>Assinar o Abaixo-Assinado</span>
                <ArrowRightIcon />
              </DefaultButton>
            </RouterLink>
          </div>
        </Container>
      </MainTemplates>
    </>
  );
}

export default Home;
