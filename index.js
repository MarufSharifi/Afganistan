/**
 * @format
 */

import {AppRegistry, I18nManager} from 'react-native';
import {enableScreens} from 'react-native-screens';
import App from './App';
import {name as appName} from './app.json';

enableScreens();
I18nManager.forceRTL(true);

AppRegistry.registerComponent(appName, () => App);
