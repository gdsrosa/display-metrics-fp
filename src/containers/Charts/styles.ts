import styled from 'styled-components';

export const StyledChartsContainer = styled.div`
  display: flex;
  height: 18rem;

  @media (min-width: 375px) and (max-width: 430px) {
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
  }
`;
