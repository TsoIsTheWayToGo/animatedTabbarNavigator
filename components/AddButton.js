import React from 'react';
import { View, StyleSheet, TouchableHighlight, Animated, TouchableOpacity } from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default class AddButton extends React.Component {
	mode = new Animated.Value(0);
	buttonSize = new Animated.Value(1);

	handlePress = () => {
		// this.props.navigation.navigate('Orgs')
		console.log('');
		Animated.sequence([
			Animated.spring(this.buttonSize, {
				toValue: 0.75,
				// duration: 50,
				useNativeDriver: false,
			}),
			Animated.spring(this.buttonSize, {
				toValue: 1,
				useNativeDriver: false,
			}),
			Animated.spring(this.mode, {
				toValue: this.mode._value === 0 ? 1 : 0,
				useNativeDriver: false,
			}),
		]).start();
	};

	render() {
		const thermometerX = this.mode.interpolate({
			inputRange: [0, 1],
			outputRange: [-24, -100],
		});

		const thermometerY = this.mode.interpolate({
			inputRange: [0, 1],
			outputRange: [-50, -100],
		});

		const timeX = this.mode.interpolate({
			inputRange: [0, 1],
			outputRange: [-24, -24],
		});

		const timeY = this.mode.interpolate({
			inputRange: [0, 1],
			outputRange: [-50, -150],
		});

		const pulseX = this.mode.interpolate({
			inputRange: [0, 1],
			outputRange: [-24, 50],
		});

		const pulseY = this.mode.interpolate({
			inputRange: [0, 1],
			outputRange: [-50, -100],
		});

		const rotation = this.mode.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '-90deg'],
		});

		const sizeStyle = {
			transform: [{ scale: this.buttonSize }],
		};

		return (
			<View style={{ position: 'absolute', alignItems: 'center' }}>
				<Animated.View
					style={{ position: 'absolute', left: thermometerX, top: thermometerY }}
					useNativeDriver={true}
				>
					<View style={styles.secondaryButton}>
						<Feather name="thermometer" size={24} color="#FFF" />
					</View>
				</Animated.View>
				<Animated.View style={{ position: 'absolute', left: timeX, top: timeY }} useNativeDriver={true}>
					<View style={styles.secondaryButton}>
						<Feather name="clock" size={24} color="#FFF" />
					</View>
				</Animated.View>
				<Animated.View style={{ position: 'absolute', left: pulseX, top: pulseY }} useNativeDriver={true}>
					<View style={styles.secondaryButton}>
						<Feather name="activity" size={24} color="#FFF" />
					</View>
				</Animated.View>
				<Animated.View style={[styles.button, sizeStyle]} useNativeDriver={true}>
					{/* <TouchableHighlight onPress={this.handlePress} underlayColor="#66CC99"> */}
					<TouchableOpacity onPress={this.handlePress} underlayColor="#66CC99">
						<Animated.View style={{ transform: [{ rotate: rotation }] }} useNativeDriver={true}>
							<Entypo name="rdio-with-circle" size={48} color="#FFF" />
						</Animated.View>
					</TouchableOpacity>
					{/* </TouchableHighlight> */}
				</Animated.View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 72,
		height: 72,
		borderRadius: 36,
		backgroundColor: '#66CC99',
		position: 'absolute',
		marginTop: -60,
		shadowColor: '#66CC99',
		shadowRadius: 5,
		shadowOffset: { height: 10 },
		shadowOpacity: 0.3,
		borderWidth: 3,
		borderColor: '#FFFFFF',
	},
	secondaryButton: {
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		width: 48,
		height: 48,
		borderRadius: 24,
		backgroundColor: '#66CC99',
	},
});
