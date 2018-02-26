import React, {Component} from 'react';
import {
     View,
     Text,
     Image,
     Input,
     TouchableOpacity,
     ActivityIndicator,
     ScrollView,
     Dimensions

} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import Clarifai from 'clarifai';


import styles from '../styles/captureStyles';

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

process.nextTick = setImmediate

var width = Dimensions.get('window').width;
const CLARIFAI_COLOR_MODEL = "eeed0b6733a644cea07cf4c60f87ebb7";
const CLARIFAI_COLORCODE = new Clarifai.App({
 apiKey: 'f69ac9a49ddb4371914ebd0478fad6cd'
});


export default class CaptureScreen extends Component<{}>{
     constructor(props){
          super(props);
          this.state = {
               default_image: require('../images/icons/placeholder.png'),
               image: null,
               clarifaiColorData: null,
               colorLoaded: false,
               initialLoad: true,
          }
     }

     loadImage = () => {
          // this.clearColorSection();

          var options = {
               title: 'Select Picture',
               quality: 0.5,
               storageOptions: {
                    skipBackup: true,
                    path: 'images',
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
                    this.clearColorSection();
                    let source = { uri: response.uri };

                    // You can also display the image using data:
                    // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                    this.retrieveColors(response.data);

                    this.setState({
                         image: source,
                         initialLoad: false,
                    });
               }
          });
     }

     retrieveColors = (image) =>{
          /*
           * Using Clarifai Color model to retrieve colors from image.
           */

          CLARIFAI_COLORCODE.models.predict(CLARIFAI_COLOR_MODEL, image).then((response)=>{
               console.log('clarifai response:', response);
               this.setState({clarifaiColorData: response.outputs[0].data, colorLoaded: true});
          }, (error)=>{
               console.log('error');
          });
     }

     clearColorSection = () =>{
          this.setState({clarifaiColorData: null, colorLoaded: false, image: null});
     }

     goToColorDetail = (color, name) =>{
          /*
           * Navigates to the color detail screen, passing color detail and the name of the color.
           */
          const {navigate} = this.props.navigation;
          navigate('colorDetail', {color: color, colorName: name});
     }

     populateColorSection = () => {
          /*
           * Generate the color section.
           */

          if (this.state.clarifaiColorData && this.state.colorLoaded){
               const colors = this.state.clarifaiColorData.colors.map((color, idx)=>{
                    return (
                         <TouchableOpacity key={idx} onPress={()=>this.goToColorDetail(color, color.w3c.name)} style={{backgroundColor: `${color.w3c.hex}`, alignItems: 'center',padding: 10, marginTop: 5, marginBottom: 5, borderRadius: 10, width: width-50}}>
                              <Text style={{color:'white', fontWeight: 'bold'}}>{color.w3c.name}</Text>
                              <Text style={{color:'white'}}>{color.w3c.hex}</Text>
                         </TouchableOpacity>
                    )
               });

               return colors;
          }
     }

     render(){
          return(
               <View style={styles.container}>
                    <View style={styles.imageContainer} >
                         {this.state.initialLoad?
                              <Image source={this.state.default_image} style={styles.image} />:
                              <View style={styles.imageView}>
                                   {this.state.image?
                                        <Image source={this.state.image} style={styles.image} />:null
                                   }
                                   {this.state.colorLoaded == false? <View style={styles.loader}><ActivityIndicator size="large" color="#8ab5ee" /></View>: null}
                              </View>
                         }

                    </View>
                    <TouchableOpacity onPress={()=>this.loadImage()} style={styles.uploadButton}>
                         <Text style={styles.uploadButtonText}>Pick a photo</Text>
                    </TouchableOpacity>

                    <ScrollView style={styles.scrollSection}>
                         {this.populateColorSection()}
                    </ScrollView>
               </View>
          )
     }

}
