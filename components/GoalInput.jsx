import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
export default function GoalInput(props) {
	const [goal, setGoal] = useState("");
	function goalInputHandler(goal) {
		setGoal(goal);
	}
	function addGoalHandler() {
		props.onAddGoal(goal);
		setGoal("");
	}
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textInput}
				placeholder="Add To Do"
				onChangeText={goalInputHandler}
				value={goal}
			/>
			<Button title="Add To Do" onPress={addGoalHandler}></Button>
		</View>
	);
}

const styles = StyleSheet.create({
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
});
