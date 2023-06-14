import { StyleSheet, View, Text } from "react-native";
import { Font } from "../../../style";

export default function HeaderSection() {
	return (
		<View style={styles.header}>
			<Text style={[styles.title, Font.Inter[800]]}>Chat</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		paddingHorizontal: 20,
		paddingTop: 20,
		marginBottom: 20,
	},
	title: {
		fontSize: 30,
	},
});
