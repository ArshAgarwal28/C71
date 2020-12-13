import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			storyName: '',
			authorName: '',
			story: '',
		};
	}

	sendStory = () => {
		db.collection('stories').add({
			storyName: this.state.storyName,
			authorName: this.state.authorName,
			story: this.state.story,
		});
	};
	render() {
		return (
			<View>
				<Header
					backgroundColor={'#34abeb'}
					centerComponent={{
						text: 'Write a Story',
						style: { color: '#FFF', fontSize: 20 },
					}}
				/>

				<TextInput
					placeholder='Title of the Story'
					style={{
						borderWidth: 2,
						marginBottom: 25,
						marginTop: 25,
						width: 300,
						height: 35,
						alignSelf: 'center',
						textAlign: 'center',
					}}
					onChangeText={(text) => {
						this.setState({
							storyName: text,
						});
					}}
					value={this.state.storyName}
				/>

				<TextInput
					placeholder='Author Name'
					style={{
						borderWidth: 2,
						marginBottom: 25,
						width: 300,
						height: 35,
						alignSelf: 'center',
						textAlign: 'center',
					}}
					onChangeText={(text) => {
						this.setState({
							authorName: text,
						});
					}}
					value={this.state.authorName}
				/>

				<TextInput
					placeholder='Story'
					style={{
						borderWidth: 2,
						marginBottom: 25,
						width: 400,
						height: 200,
						alignSelf: 'center',
					}}
					onChangeText={(text) => {
						this.setState({
							story: text,
						});
					}}
					value={this.state.story}
					multiline={true}
				/>

				<TouchableOpacity style={styles.submitButton} onPress={this.sendStory}>
					<Text style={{ fontWeight: 'bold' }}>Submit</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	submitButton: {
		borderWidth: 1,
		backgroundColor: 'aqua',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		padding: 5,
		paddingHorizontal: 15,
	},
});
