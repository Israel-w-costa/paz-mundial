import Content from "../../components/Container";
import GenericHtml from "../../components/GenericHtml";
import MainTemplates from "../../templates/MainTemplates";
import styles from "./styles.module.css";

export function AboutPeace() {
  return (
    <MainTemplates>
      <Content>
        <GenericHtml>
          <div className={styles.AboutPeace}>
            <h1>
              Por que criamos este movimento pela
              <strong> Paz Mundial?</strong>
            </h1>

            <p>
              A ideia deste projeto nasceu de uma reflexão simples:
              <strong> o mundo precisa de mais vozes defendendo a paz</strong>.
              Em um cenário onde notícias de conflitos, divisões e guerras são
              frequentes, muitas pessoas sentem o desejo de fazer algo, mas nem
              sempre sabem por onde começar.
            </p>

            <p>
              Muitas vezes pensamos que promover a paz é algo distante, algo que
              depende apenas de governos ou grandes organizações. Porém, a
              verdade é que <strong>a paz começa com as pessoas</strong>. Começa
              com atitudes, com escolhas e com a decisão de levantar a própria
              voz em favor de um mundo melhor.
            </p>

            <p>
              Este site foi criado com um objetivo simples e poderoso:
              <strong> unir pessoas de diferentes lugares do mundo</strong>
              em torno de um mesmo propósito — declarar que acreditamos em um
              futuro com mais respeito, diálogo e cooperação entre as nações.
            </p>

            <p>
              Ao participar e registrar sua assinatura, você não está apenas
              preenchendo um formulário. Você está se juntando a um movimento
              simbólico que representa esperança e união.
            </p>

            <ul>
              <li>
                🌍 Pessoas de diferentes países unidas por um mesmo ideal.
              </li>
              <li>🤝 Um chamado global por respeito e cooperação.</li>
              <li>🕊️ Uma mensagem clara de que a paz é possível.</li>
            </ul>

            <p>
              Cada assinatura representa uma voz que acredita que o mundo pode
              ser melhor. Quando muitas vozes se unem, elas criam algo maior:
              <strong> um movimento.</strong>
            </p>

            <p>
              Este projeto não pretende resolver todos os problemas do mundo,
              mas pretende lembrar algo muito importante:
              <strong> a paz começa com cada um de nós</strong>.
            </p>

            <p>
              Se cada pessoa decidir ser parte dessa mudança, então estaremos um
              passo mais perto de um mundo onde a paz não seja apenas um sonho,
              mas uma realidade.
            </p>

            <p>🕊️ Obrigado por fazer parte deste movimento.</p>
          </div>
        </GenericHtml>
      </Content>
    </MainTemplates>
  );
}
