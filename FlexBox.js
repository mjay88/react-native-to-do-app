import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
const FlexBox = () => {
	//every view in react native uses flexbox (column) by default. main axis is top to bottom. You cant turn flexbox off.
	//by default children components only take up as much space as is required by there content.
	//be default children will inherit parent height but not parent width

	return (
		<View style={styles.container}>
			<View
				style={{
					backgroundColor: "red",
					margin: 3,
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text>1</Text>
			</View>

			<View
				style={{
					backgroundColor: "blue",
					margin: 3,
					flex: 2,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text>2</Text>
			</View>

			<View
				style={{
					backgroundColor: "green",
					margin: 3,
					flex: 3,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text>3</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 50,

		height: 300,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
});
export default FlexBox;
