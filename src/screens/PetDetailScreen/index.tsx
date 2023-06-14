import { StyleSheet, View, Text } from "react-native";

export default function PetDetailScreen() {
	return (
		<View style={styles.root}>
			<Text>PetDetailScreen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "white",
	},
});
