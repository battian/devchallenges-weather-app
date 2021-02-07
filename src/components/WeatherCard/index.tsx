import { useApp } from '../../hooks/appContext';
import { formatDate, toFahrenheit } from '../../Utils/functions';

import { Container, Temperature } from './styles';

interface WeatherCard {
  date: string;
  weather_state_name: string;
  weather_state_abbr: string;
  min_temp: number;
  max_temp: number;
}

const WeatherCard: React.FC<WeatherCard> = ({
  date,
  weather_state_name,
  weather_state_abbr,
  min_temp,
  max_temp,
}) => {
  const { tempUnit } = useApp();

  return (
    <Container>
      <h1>{formatDate(date)}</h1>

      <div className="img_container">
        <img src={`/images/${weather_state_abbr}.png`} alt={weather_state_name} />
      </div>

      <Temperature>
        <p className="max_temp">
          {tempUnit == 'celcius'
            ? `${max_temp.toFixed(0)} °C`
            : `${toFahrenheit(max_temp).toFixed(0)} °F`}
        </p>
        <p className="min_temp">
          {tempUnit == 'celcius'
            ? `${min_temp.toFixed(0)} °C`
            : `${toFahrenheit(min_temp).toFixed(0)} °F`}
        </p>
      </Temperature>
    </Container>
  );
};

export default WeatherCard;
