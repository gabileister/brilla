import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { MainPage } from "./pages/main";
import { Obra } from "./pages/obra";
import { Header } from "./components/header";
import { useEffect } from "react";
import { scrollToSection } from "./utils/scrol";
import { Sobre } from "./pages/sobre";

const RouterContent = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as any)?.scrollTo;
    if (scrollTo) {
      scrollToSection(scrollTo);
    }
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/obra/:id" element={<Obra />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </>
  );
};

export const CustomRouter = () => {
  return (
    <Router>
      <RouterContent />
    </Router>
  );
};
