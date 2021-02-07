import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--background-alt);
  height: 100vh;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const SearchPlaces = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn__places {
    padding: 0.6rem 1.1rem;
    color: white;
    background-color: var(--button);
    border: var(--button);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .btn__location {
    padding: 8px 8px 5px;
    border-radius: 20px;
    border: none;
    background-color: rgba(110, 112, 122, 0.3);
  }

  .btn__location svg {
    color: var(--text);
  }
`;

export const WeatherImage = styled.div`
  margin: 0 auto;
  width: 200px;
  margin: 5rem auto 2rem;
`;

export const WeatherInfo = styled.div`
  flex: 1;
  margin: 3rem 0;

  h2 {
    font-weight: 600;
    font-size: 2.25rem;
    color: var(--text-alt);
  }

  .temperature {
    display: flex;
    justify-content: center;
    margin-bottom: 2.5rem;
  }

  .temperature h1 {
    font-weight: 500;
    font-size: 7rem;
    margin-right: 4px;
  }

  .temperature span {
    font-size: 3rem;
    font-weight: 300;
    align-self: flex-end;
    color: var(--text-alt);
    margin-bottom: 1.5rem;
  }
`;

export const DayInfo = styled.div`
  width: 160px;
  color: var(--text-alt-2);
  font-size: 1.1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 1rem;
`;

export const LocationInfo = styled.div`
  color: var(--text-alt-2);
  font-weight: 600;
  font-size: 1.1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin-left: 4px;
  }
`;
