import { StyleSheet, View, Text } from "react-native";

type FieldViewProps = {
	title: string;
	value: string;
};

export default function FieldView({ title, value }: FieldViewProps) {
	return (
		<View style={styles.field}>
			<Text style={styles.field_title}>{title}</Text>
			<Text style={styles.field_value}>{value}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	field: {
		width: "100%",
		height: 50,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		alignItems: "center",
		borderBottomWidth: 1,
		borderBottomColor: "#11111121",
	},
	field_title: {
		fontWeight: "bold",
		fontSize: 16,
		textTransform: "capitalize",
	},
	field_value: {
		color: "gray",
		fontSize: 16,
	},
});
