import Container from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header/";

type MainTemplatesProps = {
  children: React.ReactNode;
};

function MainTemplates({ children }: MainTemplatesProps) {
  return (
    <>
      <Container>
        <Header />
      </Container>
      {children}
      <Footer />
    </>
  );
}

export default MainTemplates;
