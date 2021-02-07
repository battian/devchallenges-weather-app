import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { IResponse, ILocation } from '../types/types';

interface AppContextData {
  searchLocation: ILocation;
  addLocation(payload: ILocation): void;
  locationWeather: IResponse;
  addLocationWeather(payload: IResponse): void;
  changeSidebar: boolean;
  handleSidebar(payload: boolean): void;
  tempUnit: string;
  changeTempUnit(payload: string): void;
}

const locattionInitialState = {
  title: 'London',
  location_type: 'City',
  woeid: 44418,
  latt_long: '51.506321,-0.12714',
};

const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: React.FC = ({ children }) => {
  const [searchLocation, setSearchLocation] = useState<ILocation>(locattionInitialState);
  const [locationWeather, setLocationWeather] = useState<IResponse>(undefined);
  const [changeSidebar, setChangeSidebar] = useState(false);
  const [tempUnit, setTempUnit] = useState<'celcius' | 'fahrenheit'>('celcius');

  const addLocation = useCallback((payload: ILocation) => {
    setSearchLocation(payload);
  }, []);

  const addLocationWeather = useCallback((payload: IResponse) => {
    setLocationWeather(payload);
  }, []);

  const handleSidebar = useCallback((payload: boolean) => {
    setChangeSidebar(payload);
  }, []);

  const changeTempUnit = useCallback((payload: 'celcius' | 'fahrenheit') => {
    setTempUnit(payload);
  }, []);

  return (
    <AppContext.Provider
      value={{
        searchLocation,
        addLocation,
        locationWeather,
        addLocationWeather,
        changeSidebar,
        handleSidebar,
        tempUnit,
        changeTempUnit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

function useApp(): AppContextData {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within a AppProvider');
  }

  return context;
}

export { AppProvider, useApp };
