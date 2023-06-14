import { StyleSheet, View } from "react-native";
import GoBackAppbar from "../../../share/components/molecules/GoBackAppbar";
import { THEME } from "../../../data";

export default function HeaderSection() {
	return (
		<View style={styles.header}>
			<GoBackAppbar title="Add a Pet for Adoption"></GoBackAppbar>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: THEME.white,
		width: "100%",
		padding: 6,
	},
});
