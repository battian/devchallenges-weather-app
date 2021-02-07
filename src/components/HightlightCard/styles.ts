import styled from 'styled-components';

interface CompassContainerProps {
  deg: number;
}

export const Container = styled.div`
  background-color: var(--background-alt);
  padding: 2rem;
  text-align: center;
  min-width: 328px;

  h3 {
    margin-bottom: 1rem;
    font-weight: 500;
  }

  h1 {
    font-size: 4rem;
  }

  span {
    font-weight: 500;
    font-size: 2.25rem;
  }
`;

export const CompassContainer = styled.div<CompassContainerProps>`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    margin-left: 0.5rem;
  }

  > svg {
    background-color: var(--button);
    border-radius: 2rem;
    padding: 8px;
    font-size: 2rem;
    transform: rotate(${props => props.deg}deg);
  }
`;

export const PercentBar = styled.div`
  margin-top: 1.5rem;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.75rem;
  }

  span:last-child {
    float: right;
  }

  .MuiLinearProgress-root {
    height: 0.5rem;
    border-radius: 1rem;
    background-color: var(--text);
  }

  .MuiLinearProgress-barColorPrimary {
    background-color: #fbec66;
  }
`;
