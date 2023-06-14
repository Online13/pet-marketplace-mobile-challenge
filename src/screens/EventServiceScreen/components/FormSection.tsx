import { StyleSheet, View, Text } from "react-native";

export default function FormSection() {
	return (
		<View style={styles.root}>
			<Text>FormSection</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "white",
	},
});
