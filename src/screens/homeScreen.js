import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import styles from '../styles/styles.js';

export default class Welcome extends Component <{}> {
     static navigationOptions = {
          header: null,
          gesturesEnabled: false,

     };

     render() {
          return(
               <View style={styles.container}>
                    <View style={{height: '100%'}}>
                         <Image source={require('../images/logos/colorCodeLogosm.png')} style={styles.smlogostyle}/>
                         <TouchableOpacity style={styles.camerabuttoncontainer}>
                              <Image source={require('../images/icons/camerIcon.png')} style={styles.cameraicon}/>
                         </TouchableOpacity>
                    </View>
               </View>
          )
     }
}
