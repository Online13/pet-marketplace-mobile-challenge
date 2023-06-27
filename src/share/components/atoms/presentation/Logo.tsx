import { StyleSheet, View, Text } from "react-native";
import { Font, globalStyle } from "../../../../style";
import { MaterialIcons } from "@expo/vector-icons";

export default function Logo() {
	return (
		<View style={[globalStyle.subTitle, styles.title]}>
			<MaterialIcons name="pets" size={24} color="#f39a51" />
			<Text style={[styles.headerTitle, Font.Inter[800]]}>Pet Central</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		gap: 8,
	},
	headerTitle: {
		fontSize: 20,
	},
});
