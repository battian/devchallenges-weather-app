import { useApp } from '../../hooks/appContext';

import SearchDrawer from '../SearchDrawer';
import WeatherDrawer from '../WeatherDrawer';

const Sidebar = () => {
  const { changeSidebar } = useApp();

  return <>{changeSidebar ? <SearchDrawer /> : <WeatherDrawer />}</>;
};

export default Sidebar;
