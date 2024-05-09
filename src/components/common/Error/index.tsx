import Header from '@/components/common/Header';
import {
  StyledButton,
  StyledErrorContainer,
  StyledErrorContent,
  StyledH2,
} from './styles';

export default function ErrorBoundary() {
  function redirectToHome() {
    window.location.href = '/';
  }

  return (
    <>
      <Header />
      <StyledErrorContainer>
        <StyledErrorContent>
          <StyledH2>Something went wrong...</StyledH2>
          <br />
          <p>Please give it a refresh on the page.</p>
          <p>If the error persist, please contact the admin.</p>
          <br />
          <StyledButton onClick={redirectToHome}>Go to Home</StyledButton>
        </StyledErrorContent>
      </StyledErrorContainer>
    </>
  );
}
