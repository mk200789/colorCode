import React, {Component} from 'react';
import {
     View,
     Text,
     Image,
     Input,
     TouchableOpacity,
     ActivityIndicator,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';

import styles from '../styles/captureStyles';

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export default class CaptureScreen extends Component<{}>{
     constructor(props){
          super(props);
          this.state = {
               image: null,
               imageLoading: false,
          }
     }

     loadImage = () => {
          var options = {
            title: 'Select Picture',
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
          };


          ImagePicker.showImagePicker(options, (response) => {
               if (response.didCancel) {
                    console.log('User cancelled image picker');
               }
               else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
               }
               else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
               }
               else {
                    let source = { uri: response.uri };

                    // You can also display the image using data:
                    // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                    this.setState({
                         image: source,
                         imageLoading: false,
                    });
               }
          });
     }

     render(){
          return(
               <View style={styles.container}>

                    <View style={styles.imageView} >
                         {this.state.image?
                              <Image source={this.state.image} style={styles.image} />: <View>{this.state.imageLoading? <ActivityIndicator size="large" color="#0000ff" />: null}</View>
                         }
                    </View>
                    <TouchableOpacity onPress={()=>this.loadImage()} style={styles.uploadButton}>
                         <Text style={styles.uploadButtonText}>PICK A PHOTO</Text>
                    </TouchableOpacity>
               </View>
          )
     }
}
