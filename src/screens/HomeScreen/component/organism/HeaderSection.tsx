import { StyleSheet, View } from "react-native";
import { THEME } from "../../../../data";
import Logo from "../../../../share/components/atoms/presentation/Logo";

export default function HeaderSection() {
	return (
		<View style={styles.root}>
			<Logo />
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		paddingVertical: 12,
		paddingHorizontal: 20,
		backgroundColor: THEME.white,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
