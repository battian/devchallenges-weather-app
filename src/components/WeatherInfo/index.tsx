import { useApp } from '../../hooks/appContext';

import HightlightCard from '../HightlightCard';
import WeatherCard from '../WeatherCard';

import {
  Container,
  TempButtonsContainer,
  TempButton,
  WeatherCardContainer,
  Hightlights,
  Footer,
} from './styles';

const WeatherInfo = () => {
  const { tempUnit, changeTempUnit, locationWeather } = useApp();

  return (
    <Container>
      <TempButtonsContainer>
        <TempButton
          selectedButton={tempUnit === 'celcius'}
          onClick={() => changeTempUnit('celcius')}
        >
          °C
        </TempButton>
        <TempButton
          selectedButton={tempUnit === 'fahrenheit'}
          onClick={() => changeTempUnit('fahrenheit')}
        >
          °F
        </TempButton>
      </TempButtonsContainer>

      <WeatherCardContainer>
        {locationWeather?.consolidated_weather.map(day => (
          <WeatherCard
            key={day.id}
            date={day.applicable_date}
            weather_state_name={day.weather_state_name}
            weather_state_abbr={day.weather_state_abbr}
            min_temp={day.min_temp}
            max_temp={day.max_temp}
          />
        ))}
      </WeatherCardContainer>

      <Hightlights>
        <h1>Today’s Hightlights</h1>

        <div>
          <HightlightCard deg={225} compass="SW">
            <h3>Wind status</h3>
            <h1>
              {locationWeather?.consolidated_weather[0].wind_speed.toFixed(0)}
              <span> mph</span>
            </h1>
          </HightlightCard>

          <HightlightCard percent={77}>
            <h3>Humidity</h3>
            <h1>
              {locationWeather?.consolidated_weather[0].humidity.toFixed(0)}
              <span> %</span>
            </h1>
          </HightlightCard>

          <HightlightCard>
            <h3>Visibility</h3>
            <h1>
              {locationWeather?.consolidated_weather[0].visibility.toFixed(0)}
              <span> miles</span>
            </h1>
          </HightlightCard>

          <HightlightCard>
            <h3>Air Pressure</h3>
            <h1>
              {locationWeather?.consolidated_weather[0].air_pressure.toFixed(0)}
              <span> mb</span>
            </h1>
          </HightlightCard>
        </div>
      </Hightlights>

      <Footer>battian @devchallenges.io</Footer>
    </Container>
  );
};

export default WeatherInfo;
