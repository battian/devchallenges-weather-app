import { useEffect, useState } from 'react';
import { useApp } from '../hooks/appContext';
import { api } from '../services/api';

import Layout from '../components/Layout';
import Loading from '../components/Loading';
import WeatherInfo from '../components/WeatherInfo';
import Sidebar from '../components/Sidebar';
import Error from '../components/Error';

import { Container } from '../styles/home';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { addLocationWeather, searchLocation } = useApp();

  const fetchLocationData = async (): Promise<void> => {
    try {
      const { data } = await api.get(`/location/${searchLocation.woeid}`);
      addLocationWeather(data);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocationData();
  }, [searchLocation]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Layout>
        <Container>
          <Sidebar />

          <WeatherInfo />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
