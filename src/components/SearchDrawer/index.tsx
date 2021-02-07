import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
import { ILocation } from '../../types/types';
import { useApp } from '../../hooks/appContext';

import { Close, SearchOutlined, ChevronRight } from '@material-ui/icons';
import { CircularProgress } from '@material-ui/core';
import { Container, SearchContainer, ResultsList, Loading } from './styles';

interface LocationListProps {
  data: ILocation[];
  error: string;
}

const LocationList: React.FC<LocationListProps> = ({ data, error }) => {
  const { addLocation, handleSidebar } = useApp();

  const handleAddLocation = (payload: ILocation) => {
    addLocation(payload);
    handleSidebar(false);
  };

  if (error) {
    return <p>Sorry, we couldn't find the location.</p>;
  }

  return (
    <>
      {data.map(location => (
        <li key={location.woeid} onClick={() => handleAddLocation(location)}>
          {location.title} <ChevronRight />
        </li>
      ))}
    </>
  );
};

const SearchDrawer = () => {
  const [focus, setFocus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [location, setLocation] = useState('');
  const [locations, setLocations] = useState<ILocation[]>([]);
  const { handleSidebar } = useApp();

  const fetchLocationData = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setLoading(true);

    try {
      const { data } = await api.get(`/location/search/?query=${location}`);
      setLocations(data);
      setLocation('');
      setError('');
      setLoading(false);
    } catch {
      setError(`Sorry, we couldn't find the location.`);
    }
  };

  return (
    <Container>
      <div>
        <button onClick={() => handleSidebar(false)}>
          <Close />
        </button>
      </div>

      <SearchContainer focus={focus} onSubmit={fetchLocationData}>
        <div>
          <SearchOutlined />
          <input
            type="text"
            placeholder="search location"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </SearchContainer>

      <ResultsList>
        {loading ? (
          <Loading>
            <CircularProgress />
          </Loading>
        ) : (
          <LocationList data={locations} error={error} />
        )}
      </ResultsList>
    </Container>
  );
};

export default SearchDrawer;
