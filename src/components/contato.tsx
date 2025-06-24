import { FaInstagram, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import {
  ContatoSection,
  Form,
  Input,
  InstagramIcon,
  Label,
  Ou,
  SubmitButton,
  Subtitulo,
  Textarea,
  Titulo,
} from "../styles/contato";
import { useInViewSection } from "../hooks/visibility";

export const Contato: React.FC<{ id: string }> = ({ id }) => {
  const { ref, visible } = useInViewSection();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email enviado!", result.text);
        },
        (error) => {
          console.log("Erro ao enviar email:", error.text);
        }
      );

      e.currentTarget.reset();
  };

  return (
    <ContatoSection id={id} ref={ref} className={visible ? "visible" : ""}>
      <Titulo>SIGA O MEU PERFIL NAS REDES SOCIAIS</Titulo>
      <InstagramIcon href="https://www.instagram.com/g.abileister/" target="_blank">
        <FaInstagram size={40} />
      </InstagramIcon>
      <Ou>ou</Ou>

      <Subtitulo>ENTRE EM CONTATO POR EMAIL</Subtitulo>
      <Form onSubmit={handleSubmit}>
        <Label>Email</Label>
        <Input
          name="user_email"
          type="email"
          required
          placeholder="Digite seu email"
        />

        <Label>Mensagem</Label>
        <Textarea name="message" required placeholder="Digite sua mensagem" />

        <SubmitButton type="submit">
          ENVIAR <FaPaperPlane style={{ marginLeft: "8px" }} />
        </SubmitButton>
      </Form>
    </ContatoSection>
  );
};
