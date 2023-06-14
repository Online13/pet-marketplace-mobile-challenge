import { StyleSheet, View } from "react-native";

export default function PetsListSkeleton() {
	return (
		<View style={styles.root}>
			<View style={styles.header}>
				<View style={styles.title} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "white",
	},
	header: {
		width: "100%",
		height: 200,
		padding: 20,
		backgroundColor: "#f0f0f0",
		justifyContent: "flex-end",
	},
	title: {
		width: "70%",
		height: 35,
		backgroundColor: "#000000d",
	},
});
