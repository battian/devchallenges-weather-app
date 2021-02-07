import { useApp } from '../../hooks/appContext';
import { toFahrenheit, formatDate } from '../../Utils/functions';

import { MyLocation, LocationOn, FiberManualRecord } from '@material-ui/icons';
import {
  Container,
  SearchPlaces,
  WeatherImage,
  WeatherInfo,
  DayInfo,
  LocationInfo,
} from './styles';

const WeatherDrawer = () => {
  const { handleSidebar, locationWeather, tempUnit } = useApp();

  return (
    <Container>
      <SearchPlaces>
        <button className="btn__places" onClick={() => handleSidebar(true)}>
          Seach for places
        </button>
        <button className="btn__location" disabled>
          <MyLocation />
        </button>
      </SearchPlaces>

      <WeatherImage>
        <img
          src={`${locationWeather?.consolidated_weather[0].weather_state_abbr}`}
          alt={`${locationWeather?.consolidated_weather[0].weather_state_name}`}
        />
      </WeatherImage>

      <WeatherInfo>
        <div className="temperature">
          <h1>
            {tempUnit == 'celcius'
              ? locationWeather?.consolidated_weather[0].the_temp.toFixed(0)
              : toFahrenheit(locationWeather?.consolidated_weather[0].the_temp).toFixed(
                  0,
                )}
          </h1>
          <span>{tempUnit == 'celcius' ? '°C' : '°F'}</span>
        </div>

        <h2>{locationWeather?.consolidated_weather[0].weather_state_name}</h2>
      </WeatherInfo>

      <DayInfo>
        <p>Today</p>
        <FiberManualRecord style={{ fontSize: 6 }} />
        <p>{formatDate(locationWeather?.consolidated_weather[0].applicable_date)}</p>
      </DayInfo>

      <LocationInfo>
        <LocationOn />
        <p>{locationWeather?.title}</p>
      </LocationInfo>
    </Container>
  );
};

export default WeatherDrawer;
