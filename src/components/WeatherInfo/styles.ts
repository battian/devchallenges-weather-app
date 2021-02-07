import styled from 'styled-components';

interface tempButtonProps {
  selectedButton: boolean;
}

export const Container = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 3rem;

  @media (min-width: 768px) {
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--background);
    }

    ::-webkit-scrollbar-track {
      background-color: var(--background);
    }
  }
`;

export const TempButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TempButton = styled.button<tempButtonProps>`
  background: ${props => (props.selectedButton ? '#E7E7EB' : '#585676')};
  color: ${props => (props.selectedButton ? '#110E3C' : '#E7E7EB')};
  width: 40px;
  height: 40px;
  font-weight: bold;
  border: none;
  border-radius: 2rem;
  margin-left: 0.5rem;
`;

export const WeatherCardContainer = styled.div`
  margin: 2rem 0 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  gap: 1.5rem;
  justify-content: center;
`;

export const Hightlights = styled.div`
  margin-bottom: 2rem;

  > h1 {
    margin-bottom: 2rem;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
    gap: 2rem;
    justify-content: center;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  font-size: 0.75rem;
  padding: 1.5rem;
`;
