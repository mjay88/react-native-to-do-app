import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Modal,
	Image,
} from "react-native";
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
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image source={require("../assets/goal.png")} style={styles.image} />
				<TextInput
					style={styles.textInput}
					placeholder="Add To Do"
					onChangeText={goalInputHandler}
					value={goal}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="Add To Do"
							onPress={addGoalHandler}
							color="#b180f0"
						></Button>
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={props.onCancel} color="#f31282" />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1, //if no other siblings have flex property take up all 1/1 of the available space
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#311b6b",
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#120438",
		borderRadius: 6,
		width: "100%",
		padding: 16,
	},
	buttonContainer: {
		flexDirection: "row",
		marginTop: 16,
	},
	button: {
		width: "30%",
		marginHorizontal: 8,
	},
});
