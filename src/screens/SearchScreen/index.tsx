import { StyleSheet, View } from "react-native";
import SearchBar from "./components/molecules/SearchBar";
import { THEME } from "../../data";

export default function SearchScreen() {
	return (
		<View style={styles.root}>
			<View style={styles.header}>
				<SearchBar />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: THEME.background,
	},
	header: {
		width: "100%",
		height: 60,
		elevation: 2,
	},
});
