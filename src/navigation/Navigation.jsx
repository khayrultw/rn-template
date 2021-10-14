import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ROUTES from "./routes";

import { Home, Splash } from "../screens";

const Drawer = createDrawerNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name={ROUTES.SPLASH}
          component={Splash}
        />
        <Drawer.Screen
          name={ROUTES.HOME}
          component={Home}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default Navigation;
