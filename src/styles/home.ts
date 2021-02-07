import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  @media (min-width: 768px) {
    grid-template-columns: 400px 1fr;
  }
`;
