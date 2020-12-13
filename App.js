import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<AppContainer />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 15,
		backgroundColor: '#fff',
	},
});

const BottomTab = createBottomTabNavigator({
	Write: { screen: WriteStoryScreen },
	Read: { screen: ReadStoryScreen },
});

const AppContainer = createAppContainer(BottomTab);
