import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	View,
	ScrollView,
	FlatList,
} from "react-native";
//buttons do not have a style prop
//android and ios will compile differently, so sometimes you will have to find the right underlying element to support the style you want
//styles do not cascade in react native, so child and descendant elements do not inherit styles.
//the area of the ScrollView is determined by the parent of ScrollView, so always wrap your scroll view
//ScrollView renders all the items that are children of ScrollView on render, so it may slow down your app if you have a lot of content
//FlatList works better with none primitive

export default function App() {
	const [goal, setGoal] = useState("");
	const [listOfGoals, setListOfGoals] = useState([]);

	function goalInputHandler(entered) {
		setGoal(entered);
	}

	function addGoalHandler() {
		setListOfGoals((prevGoals) => [
			...prevGoals,
			{ text: goal, id: Math.random().toString() },
		]);
	}

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Add To Do"
					onChangeText={goalInputHandler}
				/>
				<Button title="Add To Do" onPress={addGoalHandler}></Button>
			</View>
			<View style={styles.goalsContainer}>
				<FlatList
					data={listOfGoals}
					renderItem={(itemData) => {
						return (
							<View style={styles.goalItem}>
								<Text style={styles.goalText}>{itemData.item.text}</Text>
							</View>
						);
					}}
					keyExtractor={(item, index) => {
						return item.id;
					}}
					alwaysBounceVertical={true}
				/>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1, //take up 1/1 of space (all the space on the screen), since its the only component at that level with flex prop added
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1, //take up 1/4 of available space inside appContainer
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "70%",
		marginRight: 8,
		padding: 8,
	},
	goalsContainer: {
		flex: 4, //take up 4/5 available space inside of appContainer
	},
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	goalText: {
		color: "white",
	},
});
