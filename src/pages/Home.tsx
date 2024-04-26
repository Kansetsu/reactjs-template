import { RedirectButton, ContentContainer } from './Home.styles';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/test-page');
  };

  return (
    <ContentContainer minHeight={'100vh'}>
      <RedirectButton onClick={handleOnClick}>
        Click-me to Redirect
      </RedirectButton>
    </ContentContainer>
  );
};
