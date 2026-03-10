import {
  BirdIcon,
  FilePenIcon,
  GlobeIcon,
  MailIcon,
  MessageSquareIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";
import Container from "../Container";
import DefaultInput from "../DefaultInput";
import styles from "./styles.module.css";
import DefaultButton from "../DefaultButton";
import { useRef } from "react";
import { useSignContext } from "../../contexts/SignContext/useSignContext";

export default function MainForm() {
  const { setState } = useSignContext();

  const name = useRef<HTMLInputElement>(null);
  const mail = useRef<HTMLInputElement>(null);
  const tel = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLInputElement>(null);
  const msg = useRef<HTMLTextAreaElement>(null);

  function handlesubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (
      name.current === null ||
      mail.current === null ||
      tel.current === null ||
      country.current === null ||
      msg.current === null
    )
      return;
    if (!mail.current.value.includes("@")) return;
    if (isNaN(Number(tel.current?.value))) return;

    const data = new Date();

    const dataFormat = data.toLocaleDateString("pt-BR");

    const nameValeu = name.current.value;
    const mailValeu = mail.current.value;
    const telValeu = tel.current.value;
    const countryValeu = country.current.value;
    const msgValeu = msg.current.value;

    setState((prev) => [
      ...prev,
      {
        name: nameValeu,
        mail: mailValeu,
        tel: Number(telValeu),
        country: countryValeu,
        msg: msgValeu,
        date: dataFormat,
      },
    ]);
    name.current.value = "";
    mail.current.value = "";
    tel.current.value = "";
    country.current.value = "";
    msg.current.value = "";
  }

  return (
    <>
      <Container>
        <div className={styles.formHeader}>
          <BirdIcon />
          <div>
            <h2>Formulário de Assinatura</h2>
            <span>Preencha seus dados abaixo</span>
          </div>
        </div>
      </Container>
      <Container>
        <form className={styles.form}>
          <div>
            <label htmlFor="name"></label>
            <DefaultInput
              id="name"
              type="text"
              labelText="Nome Completo *"
              icon={<UserIcon />}
              placeholder="Digite seu nome completo"
              ref={name}
            ></DefaultInput>
          </div>
          <div>
            <DefaultInput
              id="email"
              type="text"
              icon={<MailIcon />}
              labelText="Email *"
              placeholder="seu@email.com"
              ref={mail}
            ></DefaultInput>
          </div>
          <div className={styles.formInfo}>
            <div>
              <DefaultInput
                id="tel"
                type="tel"
                icon={<PhoneIcon />}
                labelText="Telefone"
                placeholder="(00) 00000-0000"
                ref={tel}
              ></DefaultInput>
            </div>
            <div>
              <DefaultInput
                id="country"
                icon={<GlobeIcon />}
                type="text"
                labelText="Páis"
                placeholder="Brasil"
                ref={country}
              ></DefaultInput>
            </div>
          </div>
          <div>
            <label htmlFor="msg">
              <MessageSquareIcon />
              <span>Mensagem de Paz (opcional)</span>
            </label>
            <textarea
              id="msg"
              placeholder="Deixe sua mensagem de esperança epaz..."
              rows={4}
              cols={50}
              ref={msg}
            ></textarea>
          </div>

          <div>
            <DefaultButton
              onClick={handlesubmit}
              style={{ width: "100%", display: "flex", gap: "0.2rem" }}
            >
              <FilePenIcon className={styles.formIcon} />
              <span>Assinar Abaixo-Assinado</span>
            </DefaultButton>
            <p>
              Ao assinar, você concorda em ter seu nome listado publicamente
              como apoiador da paz mundial.
            </p>
          </div>
        </form>
      </Container>
    </>
  );
}
