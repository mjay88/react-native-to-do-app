import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

import { StyleSheet, View, FlatList } from "react-native";
//buttons do not have a style prop
//android and ios will compile differently, so sometimes you will have to find the right underlying element to support the style you want
//styles do not cascade in react native, so child and descendant elements do not inherit styles.
//the area of the ScrollView is determined by the parent of ScrollView, so always wrap your scroll view
//ScrollView renders all the items that are children of ScrollView on render, so it may slow down your app if you have a lot of content
//FlatList works better with none primitive

export default function App() {
	const [listOfGoals, setListOfGoals] = useState([]);

	function addGoalHandler(goal) {
		setListOfGoals((prevGoals) => [
			...prevGoals,
			{ text: goal, id: Math.random().toString() },
		]);
	}

	function deleteGoalHandler(id) {
		setListOfGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== id);
		});
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />
			<View style={styles.goalsContainer}>
				<FlatList
					data={listOfGoals}
					renderItem={(itemData) => {
						return (
							<GoalItem
								text={itemData.item.text}
								id={itemData.item.id}
								onDeleteItem={deleteGoalHandler}
							/>
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

	goalsContainer: {
		flex: 4, //take up 4/5 available space inside of appContainer
	},
});
