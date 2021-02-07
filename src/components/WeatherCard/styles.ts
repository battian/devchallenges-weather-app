import styled from 'styled-components';

export const Container = styled.section`
  width: 130px;
  background-color: var(--background-alt);
  padding: 1rem;
  color: var(--text);
  margin: 0 auto;

  h1 {
    font-size: 1rem;
    text-align: center;
    font-weight: 500;
  }

  .img_container {
    padding: 1.5rem 0;
    margin: 0 auto;
    width: 56px;
  }
`;

export const Temperature = styled.div`
  display: flex;
  justify-content: space-between;

  .min_temp {
    color: var(--text-alt);
  }
`;
