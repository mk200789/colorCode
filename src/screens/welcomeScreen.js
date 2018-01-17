import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import styles from '../styles/styles.js'
export default class Welcome extends Component <{}> {
  static navigationOptions = {
  header: null,
  gesturesEnabled: false,

};
toHome = () => {
  const { navigate } = this.props.navigation;
      navigate('home')
}
  render() {
    return(
      <View style={styles.container}>
      <View style={{height: '100%', width: '100%', alignItems: 'center'}}>
      <Image source={require('../images/logos/colorCodeLogo.png')} style={styles.logostyle}/>
      <View style={{justifyContent:'center', alignItems: 'center', width:'80%'}}>
      <Text style={styles.text}>Colorcode think ai for colors! Snap or upload a pic, choose a color, get a pallete!</Text>
      </View>
      <TouchableOpacity style={styles.buttoncontainer} onPress={()=>this.toHome()}>
        <Text style={styles.buttontext}>Get started!</Text>
      </TouchableOpacity>
      </View>
      </View>
    )
  }
}
