import { Screens } from '../../redux';
import Home from '../screens/Home';
import Countries from '../screens/country/Countries';
import PeopleAtLocation from '../screens/location/PeopleAtLocation';

interface Props {
  screen: Screens;
}

const show = (screen: Screens) => {
  switch (screen) {
    case Screens.HOME:
      return <Home />;
    case Screens.COUNTRIES:
      return <Countries />;
    case Screens.LOCATION:
      return <PeopleAtLocation />;
    default:
      return <Home />;
  }
};

const ShowScreen = ({ screen }: Props) => {
  return show(screen);
};

export default ShowScreen;
