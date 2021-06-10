import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Home from '../screen/homePage';
import NavigationDrawer from '../routes/navigationDrawer';
import Province from '../screen/Province';
import Description from '../screen/districtDescription';

// const Stack = createStackNavigator();

// Documentation: https://reactnavigation.org/docs/stack-navigator/
let Stack = createNativeStackNavigator();

if (Platform.OS === 'ios') {
  let iosVersion = parseFloat(Platform.Version)?.toFixed();
  if (iosVersion < 13) {
    Stack = createStackNavigator();
    // if there is a bug in finding the os version
    // then also use the traditional stack
  } else if (!iosVersion) {
    Stack = createStackNavigator();
  }
}

const MainNavigation = () => {
  return (
    <NavigationContainer
      screenOptions={{
        headerTopInsetEnabled: false,
        direction: 'rtl',
        gestureEnabled: true,
      }}>
      <Stack.Navigator>
        <Stack.Screen
          name="homePage"
          component={NavigationDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="province"
          component={Province}
          options={{
            title: 'province',
          }}
        />
        <Stack.Screen
          name="description"
          component={Description}
          options={{
            title: 'ولسوالی',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
