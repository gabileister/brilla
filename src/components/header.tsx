import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {
  HeaderContainer,
  Logo,
  MenuButton,
  Nav,
  NavItem,
} from "../styles/header";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../utils/scrol";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [language, setLanguage] = useState<"pt" | "en">(
  //   localStorage.getItem("lingua") === "en" ? "en" : "pt"
  // );

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (section: string, isPage = false) => {
    setMenuOpen(false);
    
    if (isPage) {
      navigate(`/${section}`);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
    } else {
      scrollToSection(section);
    }
  };

  // const handleLanguageSwitch = () => {
  //   setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  //   localStorage.setItem("lingua", language === "pt" ? "en" : "pt");
  // };

  return (
    <HeaderContainer>
      <Logo>Brilla</Logo>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MenuButton>
      <Nav open={menuOpen}>
        {/* <NavItem as="button" onClick={() => handleNavigation("home")}>
          Início
        </NavItem> */}
        <NavItem as="button" onClick={() => handleNavigation("obras")}>
          Obras
        </NavItem>
        <NavItem as="button" onClick={() => handleNavigation("sobre", true)}>
          Sobre
        </NavItem>
        <NavItem as="button" onClick={() => handleNavigation("contato")}>
          Contato
        </NavItem>
      </Nav>

      {/* <button
        aria-label={
          language === "pt" ? "Switch to English" : "Mudar para Português"
        }
        onClick={handleLanguageSwitch}
        style={{ marginLeft: "1rem" }}
      >
        {language === "pt" ? "EN" : "PT"}
      </button> */}
    </HeaderContainer>
  );
}
