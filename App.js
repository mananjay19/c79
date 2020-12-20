import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screen/WelcomeScreen';
import {AppTabNavigator} from './component/AppTabNavigator'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-natgor-tabs'
export default function App() {
  return (
    <View>
      <AppContainer/>
    </View>
  );
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  BottomTab:{screen:AppTabNavigator}
})
const AppContainer=createAppContainer(switchNavigator)
