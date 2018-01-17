import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Welcome from './src/screens/welcomeScreen.js'
import HomeScreen from './src/screens/homeScreen.js'

export const ColorCode = StackNavigator({
  welcome: {screen: Welcome},
  home: {screen: HomeScreen}
})
export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <ColorCode screenProps={this.props}/>
      </View>
    );
  }
}
