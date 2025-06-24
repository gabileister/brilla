import { Contato } from "../components/contato";
import { Obras } from "../components/obras";
// import { Home } from "../components/home";

export function MainPage() {
  return (
    <>
      {/* <Home id="home" /> */}
      <Obras id="obras" />
      <Contato id="contato" />
    </>
  );
}