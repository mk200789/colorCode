import React, {Component} from 'react';
import {
     Text,
     View,
     ScrollView,
}from 'react-native';
import axios from 'axios';

const COLORAPI_BASE = 'https://www.thecolorapi.com';
const COLORAPI_SCHEME_ENDPOINT = `${COLORAPI_BASE}/scheme`;

export default class ColorDetailScreen extends Component{
     constructor(props){
          super(props)
          this.state = {
               colors: null,
          }
     }

     componentWillMount(){
          const {hex} = this.props.navigation.state.params.color.w3c;
          let colorValue = hex.replace("#", "");
          this.getColorScheme(colorValue, 'monochrome');
     }

     getColorScheme = (color, mode) => {
          /*
           * Gets the colors based on what mode and the the color value.
           */

          let request_url = `${COLORAPI_SCHEME_ENDPOINT}?hex=${color}&mode=${mode}&count=10&format=json`;
          axios.get(request_url).then((response)=>{
               this.setState({colors: response.data.colors});
          });

     }


     displayColors = () =>{
          /*
           *  Displays the color if there's any, else it will show a message to user.
           */
          var textColor = 'black';
          const {colorName} = this.props.navigation.state.params;
          const {color} = this.props.navigation.state.params;

          if (this.state.colors){
               if (this.state.colors[0] != null){
                    const colorList = this.state.colors.map((color, idx)=>{
                         return (<View key={idx} style={{backgroundColor: `${color.hex.value}`, height: 70, padding: 20, marginLeft: 10, marginRight: 10}}><Text style={{color: 'white'}} >{color.name.value}</Text></View>)
                    })
                    return colorList;
               }
          }

          if (color.w3c.hex === '#000000'){
               textColor = 'white';
          }

          return (
               <View style={{alignItems: 'center'}}>
                    <Text>Sorry, could not find the different shades for the color <Text style={{backgroundColor: `${color.w3c.hex}`, color: `${textColor}`}}>{colorName}</Text></Text>
               </View>
          );

     }

     render(){
          return(
               <View style={{backgroundColor: 'white', flex: 1, paddingTop: 20}}>
                    <ScrollView>
                         {this.displayColors()}
                    </ScrollView>
               </View>
          )
     }
}
