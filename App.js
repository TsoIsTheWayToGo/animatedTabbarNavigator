import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import { JournalScreen, MeasuresScreen, TreatmentScreen, ProfileScreen } from './screens';
import AddButton from './components/AddButton';
import HomeScreen from './screens/HomeScreen';
import TempScreen from './screens/TempScreen';
import OrgScreen from './screens/OrgScreen';
import MessagingScreen from './screens/MessagingScreen';
import MoreScreen from './screens/MoreScreen';
import { MaterialCommunityIcons, MaterialIcons, Foundation } from '@expo/vector-icons'; 
// https://dribbble.com/shots/7046707-Nav-Bar-Animation

const TabNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="home-assistant" size={24} color="black" />,
			},
		},
		Temp: {
			screen: TempScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <MaterialIcons name="notifications" size={24} color={tintColor} />,
			},
		},
		Org: {
			screen: () => OrgScreen,
			navigationOptions: {
				tabBarIcon: <AddButton />,
			},
		},
		Messaging: {
			screen: MessagingScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<MaterialCommunityIcons name="home-assistant" size={24} color={tintColor} />
				),
			},
		},
		More: {
			screen: MoreScreen,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Foundation name="list" size={24} color={tintColor} />,
			},
		},
	},
	{
		tabBarOptions: {
			activeTintColor: '#66cc99',
			inactiveTintColor: 'grey',
		},
	}
);

export default createAppContainer(TabNavigator);
