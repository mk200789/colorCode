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
		paddingTop: 20,
		alignItems: 'center',
		flex: 1,
	},
	imageContainer: {
		flex: 1,
		// backgroundColor: '#8ab5ee',
		height: height/3,
		width: width-50,
		marginBottom: 20,
	},
	imageView: {
		flex:1,
		width:null,
		height: null,
		justifyContent: 'center',
	},
	image:{
		flexGrow: 1,
	     width: null,
	     height: null,
	     resizeMode: 'contain',
	},
	uploadButton: {
		backgroundColor: '#8ab5ee',
		width: width-50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,

	},
	uploadButtonText:{
		fontSize: 20,
		fontFamily: 'avenir',
	},
	scrollSection:{
		marginTop: 30,
		marginBottom: 20,
	},
	loader: {
		position: 'absolute',
		right: 0,
		left: 0,
		alignItems: 'center',
	}
});
