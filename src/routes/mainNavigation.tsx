import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/homePage';
import Province from '../screen/Province';

const Stack = createStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="homePage"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="province"
          component={Province}
          options={{
            title: 'province',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
