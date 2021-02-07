import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  padding: 6rem;

  img {
    width: 250px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin: 4rem 0 1rem;
  }

  h3 {
    text-align: center;
    font-weight: 500;
    line-height: 1.8rem;
    color: var(--text-alt);
    max-width: 600px;
  }
`;
