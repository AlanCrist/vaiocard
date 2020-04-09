import 'react-native-gesture-handler';
import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';

const Tab = createBottomTabNavigator();

import DashScreen from './src/Dashboard';
import TransfersScreen from './src/Transfers';
import FinancesScreen from './src/Finances';
import MoreScreen from './src/More';

export default function App() {
  const scheme = useColorScheme();

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Tab.Navigator initialRouteName="Dash">
          <Tab.Screen name="Dash" component={DashScreen} />
          <Tab.Screen name="Transfers" component={TransfersScreen} />
          <Tab.Screen name="Finances" component={FinancesScreen} />
          <Tab.Screen name="More" component={MoreScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
