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
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	imageView: {
		backgroundColor: '#8ab5ee',
		height: height/2,
		width: width-50,
		marginBottom: 20,
	},
	image:{
		flex: 1,
	     width: null,
	     height: null,
	     resizeMode: 'contain'
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
	}
});
