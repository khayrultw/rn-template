import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ROUTES from "./routes";

import { Home, Splash } from "../screens";
import DrawerNav from './components/Drawer';

const Drawer = createDrawerNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={({ navigation }) => <DrawerNav navigation={navigation}/>}>
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
