'use strict';
import React, {
	StyleSheet,
	Dimensions,
	Platform
} from 'react-native';
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
	container:{
		backgroundColor: 'white',
		height: height,
		width: width,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title:{
		fontSize: 36,
		fontFamily: 'avenir'
	},
	buttoncontainer:{
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		top: 150
	},
	buttontext:{
		fontSize: 24,
		fontFamily:'avenir'
	},
	camerabuttoncontainer:{
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		top: 80
	},
	logostyle: {
		height: 275,
		width: 275,
		top: 20
	},
	smlogostyle: {
		height: 100,
		width: 250,
		top:40
	},
	cameraicon:{
		width: 150,
		height: 125,
	},
	text:{
		fontFamily:'avenir',
		color: '#4A4A4A',
		backgroundColor: 'white',
		top: '50%'
	}
});
