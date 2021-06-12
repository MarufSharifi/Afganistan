import * as React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screen/homePage';
import ChangeLanguage from '../screen/selectLanguage';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      //   hideStatusBar={true}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Languages" component={ChangeLanguage} />
    </Drawer.Navigator>
  );
}
