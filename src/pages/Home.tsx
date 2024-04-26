import { Container } from "@radix-ui/themes";
import { RedirectButton } from "./Home.styles";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/test-page");
  };

  return (
    <Container>
      <RedirectButton onClick={handleOnClick}>
        Click-me to Redirect
      </RedirectButton>
    </Container>
  );
};
