import { useInViewSection } from "../hooks/visibility";
import { Home as HomeContainer, BrillaTitle } from "../styles/home";

export const Home: React.FC<{ id: string }> = ({ id }) => {
  const { ref, visible } = useInViewSection();

  return (
    <HomeContainer id={id} ref={ref} className={visible ? "visible" : ""}>
      <BrillaTitle>Brilla</BrillaTitle>
    </HomeContainer>
  );
};
