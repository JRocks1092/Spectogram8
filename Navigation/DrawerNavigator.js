import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import Profile from '../pages/Profile';
import SignOut from '../pages/SignOut';

const option = {
  drawerActiveBackgroundColor: '#000000',
  drawerInactiveBackgroundColor: '#FFFFFF',
  drawerActiveTintColor: '#FFFFFF',
  drawerInactiveTintColor: '#000000',
  headerTintColor:'#FFFFFF', 
  headerStyle:{ backgroundColor:'#000000'}
};
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions = { option } >
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Sign Out" component={SignOut} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;