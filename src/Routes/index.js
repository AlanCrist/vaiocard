import "react-native-gesture-handler";
import * as React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { createStackNavigator } from "@react-navigation/stack";

import HeaderDash from "../Views/Dashboard/components/Header";

import DashScreen from "../Views/Dashboard";
import TransfersScreen from "../Views/Transfers";
import FinancesScreen from "../Views/Finances";
import MoreScreen from "../Views/More";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Dash"
        component={DashScreen}
        options={{
          header: () => <HeaderDash />,
        }}
      />
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="More"
        component={MoreScreen}
        options={{ tabBarLabel: "More!" }}
      />
    </SettingsStack.Navigator>
  );
}

export default function Routes() {
  const scheme = useColorScheme();

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <Tab.Navigator initialRouteName="Dash">
          <Tab.Screen name="Dash" component={HomeStackScreen} />
          <Tab.Screen name="Transfers" component={TransfersScreen} />
          <Tab.Screen name="Finances" component={FinancesScreen} />
          <Tab.Screen name="More" component={SettingsStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
