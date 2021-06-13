import React, {useCallback} from 'react';
import {View, Platform, Pressable} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {RectButton} from 'react-native-gesture-handler';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Search from '../assets/svgs/searchIcon';
import Home from '../screen/homePage';
import ChangeLanguage from '../screen/selectLanguage';

const Drawer = createDrawerNavigator();

const Button = Platform.OS === 'android' ? RectButton : Pressable;

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      //   hideStatusBar={true}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} options={{title: 'خانه'}} />
      <Drawer.Screen
        name="Languages"
        component={ChangeLanguage}
        options={{title: 'زبان'}}
      />
    </Drawer.Navigator>
  );
}
