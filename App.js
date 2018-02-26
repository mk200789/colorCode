import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import Welcome from './src/screens/welcomeScreen.js'
import HomeScreen from './src/screens/homeScreen.js'
import CaptureScreen from './src/screens/captureScreen.js';
import FavoriteScreen from './src/screens/favoriteScreen.js';
import ColorDetailScreen from './src/screens/colorDetailScreen.js';

export const tabnav = TabNavigator({
     capture: {
          screen: CaptureScreen,
          path: '/capture',
          navigationOptions: {
               title: 'Capture',
               tabBarLabel: 'Capture',
               headerLeft: null,
               left: null,
               gesturesEnabled: false,
          }
     },
     favorite: {
          screen: FavoriteScreen,
          path: '/favorite',
          navigationOptions:{
               title: 'Favorite',
               tabBarLabel: 'Favorite',
               headerLeft: null,
               left: null,
               gesturesEnabled: false,
          }
     },
},{
     tabBarPosition: 'bottom',
     swipeEnabled: true,
     animationEnabled: true,
});

export const ColorCode = StackNavigator({
     welcome: {screen: Welcome},
     main: {screen: tabnav},
     home: {screen: HomeScreen},
     colorDetail: {
          screen: ColorDetailScreen,
          path: '/capture/detail',
          navigationOptions: ({ navigation }) => ({
               title: `${navigation.state.params.colorName}`,
          }),
     },
},
{
     navigationOptions: {
          headerStyle: {
                  elevation: 0,       //remove shadow on Android
                  shadowOpacity: 0,   //remove shadow on iOS
                  backgroundColor: 'white',
                  borderBottomWidth: 0,
          }
     }

});

export default class App extends Component<{}> {
     render() {
          return (
               <ColorCode />
          );
     }
}
