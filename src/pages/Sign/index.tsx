import { GlobeIcon, HeartIcon } from "lucide-react";
import Container from "../../components/Container";
import MainTemplates from "../../templates/MainTemplates";
import styles from "./styles.module.css";
import { useEffect } from "react";
import MainForm from "../../components/MainForm";

export function Sign() {
  useEffect(() => {
    document.title = "Paz Mundial - Baixo-Assinado";
  }, []);

  return (
    <>
      <MainTemplates>
        <Container>
          <section className={styles.signatureSection}>
            <div className={styles.signatureGrid}>
              <div className={styles.signatureContent}>
                <h1 className={styles.signatureTitle}>
                  Assine Pela
                  <strong> Paz Mundial</strong>
                </h1>

                <p className={styles.signatureDescription}>
                  Ao assinar este abaixo-assinado, você se junta a pessoas de
                  todo o mundo que acreditam que a paz é possível. Sua
                  assinatura é um símbolo de esperança e um chamado por um
                  futuro melhor.
                </p>

                <div className={styles.signatureBenefits}>
                  <div className={styles.benefitItem}>
                    <HeartIcon className={styles.benefitIcon} />
                    <div>
                      <h3>Compromisso com a Paz</h3>
                      <span>
                        Sua assinatura representa seu desejo por um mundo sem
                        guerras
                      </span>
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <GlobeIcon className={styles.benefitIcon} />
                    <div>
                      <h3>Impacto Global</h3>
                      <span>
                        Juntos, mostraremos aos líderes que queremos paz
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.signatureForm}>
                <MainForm />
              </div>
            </div>
          </section>
        </Container>
      </MainTemplates>
    </>
  );
}
