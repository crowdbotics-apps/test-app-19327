import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial86956Navigator from '../features/Tutorial86956/navigator';
import NotificationList86928Navigator from '../features/NotificationList86928/navigator';
import Settings86927Navigator from '../features/Settings86927/navigator';
import Settings86919Navigator from '../features/Settings86919/navigator';
import UserProfile86917Navigator from '../features/UserProfile86917/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial86956: { screen: Tutorial86956Navigator },
NotificationList86928: { screen: NotificationList86928Navigator },
Settings86927: { screen: Settings86927Navigator },
Settings86919: { screen: Settings86919Navigator },
UserProfile86917: { screen: UserProfile86917Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
