import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import DashScreen from './src/Dashboard';
import TransfersScreen from './src/Transfers';
import FinancesScreen from './src/Finances';
import MoreScreen from './src/More';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dash" component={DashScreen} />
        <Tab.Screen name="Transfers" component={TransfersScreen} />
        <Tab.Screen name="Finances" component={FinancesScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
